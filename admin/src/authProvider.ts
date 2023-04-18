import { AuthBindings } from "@refinedev/core";
import { notification } from "antd";
import routerProvider from "@refinedev/react-router-v6";
export const TOKEN_KEY = "refine-auth";

export const authProvider: AuthBindings = {
  login: async ({ email, password }) => {
    const res = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const token = await res.json();
    if (res.ok) {
      localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
      return {
        success: true,
        redirectTo: "/",
      };
    }
    return {
      success: false,
      error: {
        message: "Login failed",
        name: `${token.message}`,
      },
    };
  },
  register: async ({ email, password }) => {
    try {
      await authProvider.login({ email, password });
      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        error: {
          message: "Register failed",
          name: "Invalid email or password",
        },
      };
    }
  },
  updatePassword: async () => {
    notification.success({
      message: "Updated Password",
      description: "Password updated successfully",
    });
    return {
      success: true,
    };
  },
  forgotPassword: async ({ email }) => {
    notification.success({
      message: "Reset Password",
      description: `Reset password link sent to "${email}"`,
    });
    return {
      success: true,
    };
  },
  logout: async () => {
    localStorage.removeItem(TOKEN_KEY);
    return {
      success: true,
      redirectTo: "/login",
    };
  },
  onError: async (error) => {
    console.error(error);
    return { error };
  },
  check: async () => {
    const token = localStorage.getItem(TOKEN_KEY);
    console.log(token)
    if (token) {

      return {
        authenticated: true,
      };
    }
    return {
      authenticated: false,
      error: {
        message: "Check failed",
        name: "Token not found",
      },
      logout: true,
      redirectTo: "/login",
    };
  },
  getPermissions: async () => null,
  getIdentity: async () => {
    const getToken = JSON.parse(localStorage.getItem(TOKEN_KEY) || "");
    const res = await fetch('http://localhost:3001/auth/profile', {
      method: "GET",
      headers: {
        Authorization: `Bearer ${getToken.token} `
      }
    })

    const admin = await res.json()
    if (!getToken) {
      return null;
    }

    return {
      id: `${admin.id}`,
      name: `${admin.username}`,
      avatar: `${admin.avatar}`,
    };
  },
};
