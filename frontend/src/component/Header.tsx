import Link from "next/link";
import {
  UserIcon,
  Bars3Icon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { use, useEffect, useState } from "react";
const mainNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "About us",
    path: "/AboutUs",
  },
  {
    display: "News",
    path: "/news",
  },
  {
    display: "Contact",
    path: "/Contact",
  },
];

export default function Header(props: any) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({
    fullname: "",
  });

  useEffect(() => {
    (async () => {
      try {
        const getToken = JSON.parse(window.localStorage.getItem("TOKEN") || "");
        const res = await fetch("http://localhost:3001/auth/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${getToken.token} `,
          },
        });
        setUser(await res.json());
        setAuth(true);
      } catch (error) {
        setAuth(false);
      }
    })();
  }, []);

  let menu;
  if (auth) {
    menu = (
      <div>
        <p className="text-gray-700">{user.fullname}</p>
        <Link href="/Login">
          <span>Logout</span>
        </Link>
      </div>
    );
  } else {
    menu = (
      <div>
        <Link href="/Login">
          <span>Login</span>
        </Link>
        <Link href="/Register">
          <span>/Register</span>
        </Link>
      </div>
    );
  }
  console.log(user)
  return (
    <div className="grid grid-cols-6 xl:grid-cols-1 2xl:my-[20px] fixed h-[96px] bg-slate-300 z-40 top-0 left-0 w-full">
      <div
        className="flex col-start-2 col-span-4 justify-between items-center font-sans 
        font-light text-gray-700 h-24 xl:col-start-1 2xl:py-[15px] xl:grid  
          xl:grid-cols-3 2xl:mx-[35px] lg:max-w-[720px] lg:w-full xl:mx-auto lg:h-16  "
      >
        <div className="2md:block hidden ">
          <Bars3Icon className="h-7 w-7 text-gray-500" />
        </div>
        <div>
          <Link href="/">
            <img
              src={`https://htmldesigntemplates.com/html/travelin/images/logo.png`}
              className="xl:w-[170px]"
              alt=""
            />
          </Link>
        </div>
        <div className="flex justify-evenly w-3/6 2xl:w-full 2md:hidden">
          {mainNav.map((item, index) => (
            <div key={index}>
              <Link href={item.path}>
                <span> {item.display}</span>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex items-center uppercase text-sm justify-end 2md:hidden">
          <UserIcon className="h-5 w-5 mr-1 text-gray-500 lg:h-4 lg:w-4" />
          {menu}
          <div className="relative rounded-full border-solid border-[1px] border-indigo-600 p-[5px]">
            <ShoppingCartIcon className="h-6 w-6 text-gray-500 text-teal-600" />
            <p className="absolute top-4 left-7 text-[18px] z-10 text-white rounded-full p-[4px] bg-red-500 font-bold">
              {props.AppProps}
            </p>
          </div>
        </div>

        <div className="2md:flex hidden justify-end">
          <EllipsisVerticalIcon className="h-7 w-7 text-gray-500" />
        </div>
      </div>
    </div>
  );
}
