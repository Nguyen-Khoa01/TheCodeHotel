import React from "react";
import { Authenticated, GitHubBanner, Refine } from "@refinedev/core";
import { RefineKbarProvider } from "@refinedev/kbar";
import {
  notificationProvider,
  ThemedLayout,
  ErrorComponent,
} from "@refinedev/antd";
import routerProvider, {
  CatchAllNavigate,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import {
  ShoppingOutlined,
  UsergroupAddOutlined,
  ShopOutlined,
  StarOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import jsonServerDataProvider from "@refinedev/simple-rest";
import { authProvider } from "authProvider";

import "dayjs/locale/de";

import { DashboardPage } from "./pages/dashboard";
import { OrderList, OrderShow } from "./pages/orders";
import { AuthPage } from "./pages/auth";
import { UserList, UserShow } from "./pages/users";
import {
  CourierList,
  CourierShow,
  CourierCreate,
  CourierEdit,
} from "./pages/couriers";
import { ProductList } from "./pages/products";
import { StoreCreate, StoreEdit, StoreList } from "./pages/stores";
import { CategoryList } from "./pages/categories";
import { ReviewsList } from "./pages/reviews";
import { useTranslation } from "react-i18next";
import { Header, Title, OffLayoutArea } from "components";
import { BikeWhiteIcon, PizzaIcon } from "components/icons";
import { ConfigProvider } from "context";
import { HotelLists } from "pages/hotels";

import "@refinedev/antd/dist/reset.css";
import { BookingList } from "pages/booking";

const App: React.FC = () => {
  const API_URL = "http://localhost:3001";
  const dataProvider = jsonServerDataProvider(API_URL);

  const { t, i18n } = useTranslation();

  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <BrowserRouter>
      <ConfigProvider>
        <RefineKbarProvider>
          <Refine
            routerProvider={routerProvider}
            dataProvider={dataProvider}
            authProvider={authProvider}
            i18nProvider={i18nProvider}
            options={{
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
            }}
            notificationProvider={notificationProvider}
            resources={[
              // {
              //   name: "dashboard",
              //   list: "/",
              //   meta: {
              //     label: "Dashboard",
              //     icon: <DashboardOutlined />,
              //   },
              // },
              // {
              //   name: "orders",
              //   list: "/orders",
              //   show: "/orders/show/:id",
              //   meta: {
              //     icon: <ShoppingOutlined />,
              //   },
              // },
              {
                name: "booking",
                list: "/booking",
                show: "/booking/show/:id",
                meta: {
                  icon: <ShoppingOutlined />,
                },
              },
              {
                name: "users",
                list: "/users",
                show: "/users/show/:id",
                meta: {
                  icon: <UsergroupAddOutlined />,
                },
              },
              // {
              //   name: "products",
              //   list: "/products",
              //   meta: {
              //     icon: <PizzaIcon />,
              //   },
              // },
              {
                name: "hotels",
                list: "/hotels",
                meta: {
                  icon: <PizzaIcon />,
                },
              },
              // {
              //   name: "stores",
              //   list: "/stores",
              //   create: "/stores/create",
              //   edit: "/stores/edit/:id",
              //   meta: {
              //     icon: <ShopOutlined />,
              //   },
              // },
              // {
              //   name: "categories",
              //   list: "/categories",
              // },
              // {
              //   name: "couriers",
              //   list: "/couriers",
              //   create: "/couriers/create",
              //   edit: "/couriers/edit/:id",
              //   show: "/couriers/show/:id",
              //   meta: {
              //     icon: <BikeWhiteIcon />,
              //   },
              // },

              // {
              //   name: "reviews",
              //   list: "/reviews",
              //   meta: {
              //     icon: <StarOutlined />,
              //   },
              // },
            ]}
          >
            <Routes>
              <Route
                element={
                  <Authenticated fallback={<CatchAllNavigate to="/login" />}>
                    <ThemedLayout
                      Header={Header}
                      Title={Title}
                      OffLayoutArea={OffLayoutArea}
                    >
                      <Outlet />
                    </ThemedLayout>
                  </Authenticated>
                }
              >
                {/* <Route index element={<DashboardPage />} /> */}

                {/* <Route path="/orders">
                  <Route index element={<OrderList />} />
                  <Route path="show/:id" element={<OrderShow />} />
                </Route> */}

                <Route path="/booking">
                  <Route index element={<BookingList />} />
                  <Route path="show/:id" element={<OrderShow />} />
                </Route>

                <Route path="/users">
                  <Route index element={<UserList />} />
                  <Route path="show/:id" element={<UserShow />} />
                </Route>

                <Route path="/products" element={<ProductList />} />

                <Route path="/hotels" element={<HotelLists />} />

                {/* <Route path="/stores">
                  <Route index element={<StoreList />} />
                  <Route path="create" element={<StoreCreate />} />
                  <Route path="edit/:id" element={<StoreEdit />} />
                </Route> */}

                {/* <Route path="/categories" element={<CategoryList />} /> */}

                {/* <Route path="/couriers">
                  <Route index element={<CourierList />} />
                  <Route path="create" element={<CourierCreate />} />
                  <Route path="edit/:id" element={<CourierEdit />} />
                  <Route path="show/:id" element={<CourierShow />} />
                </Route> */}

                <Route path="/reviews" element={<ReviewsList />} />
              </Route>

              <Route
                element={
                  <Authenticated fallback={<Outlet />}>
                    <NavigateToResource resource="dashboard" />
                  </Authenticated>
                }
              >
                <Route
                  path="/login"
                  element={
                    <AuthPage
                      type="login"
                      formProps={{
                        initialValues: {
                          email: "",
                          password: "",
                        },
                      }}
                    />
                  }
                />
                <Route
                  path="/register"
                  element={
                    <AuthPage
                      type="register"
                      formProps={{
                        initialValues: {
                          email: "demo@refine.dev",
                          password: "demodemo",
                        },
                      }}
                    />
                  }
                />
                <Route
                  path="/forgot-password"
                  element={<AuthPage type="forgotPassword" />}
                />
                <Route
                  path="/update-password"
                  element={<AuthPage type="updatePassword" />}
                />
              </Route>

              <Route
                element={
                  <Authenticated>
                    <ThemedLayout
                      Header={Header}
                      Title={Title}
                      OffLayoutArea={OffLayoutArea}
                    >
                      <Outlet />
                    </ThemedLayout>
                  </Authenticated>
                }
              >
                <Route path="*" element={<ErrorComponent />} />
              </Route>
            </Routes>
            <UnsavedChangesNotifier />
          </Refine>
        </RefineKbarProvider>
      </ConfigProvider>
    </BrowserRouter>
  );
};

export default App;
