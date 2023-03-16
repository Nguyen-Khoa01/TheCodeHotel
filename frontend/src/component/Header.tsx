import Link from "next/link"
import { UserIcon, Bars3Icon, EllipsisVerticalIcon } from "@heroicons/react/24/outline";
const mainNav = [
  {
    display: 'Home',
    path: "/"
  },
  {
    display: 'About us',
    path: "/AboutUs"
  },
  {
    display: 'News',
    path: "/news"
  },
  {
    display: 'Contact',
    path: "/contact"
  },
]

export default function Header() {
  return (

    <div className="grid grid-cols-6 xl:grid-cols-1 2xl:my-[20px]">
      <div className="flex col-start-2 col-span-4 justify-between items-center font-sans 
        font-light text-gray-700 h-24 xl:col-start-1 2xl:py-[15px] xl:grid  
          xl:grid-cols-3 2xl:mx-[35px] lg:max-w-[720px] lg:w-full xl:mx-auto lg:h-16  " >
        <div className="2md:block hidden ">
          <Bars3Icon className="h-7 w-7 text-gray-500" />
        </div>
        <div>
          <Link href="/">
            <img src={`https://htmldesigntemplates.com/html/travelin/images/logo.png`} className="xl:w-[170px]" alt="" />
          </Link>
        </div>
        <div className="flex  justify-evenly w-3/6 2xl:w-full 2md:hidden">
          {
            mainNav.map((item, index) => (
              <div
                key={index}
              >
                <Link href={item.path}>
                  <span> {item.display}</span>
                </Link>
              </div>
            ))
          }
        </div>
        <div className="flex items-center uppercase text-sm justify-end 2md:hidden">

          <UserIcon className="h-5 w-5 mr-1 text-gray-500 lg:h-4 lg:w-4" />
          <Link href="/login">
            <span>Login</span>
          </Link>
          <Link href="/register">
            <span>/Register</span>
          </Link>

          <div className=" bg-teal-600 h-12 w-32 text-center rounded-md ml-4 text-white lg:w-20 lg:h-8">
            <Link href="/booking">
              <span className="leading-8 text-[13px]">BOOK NOW</span>
            </Link>
          </div>
        </div>
        <div className="2md:flex hidden justify-end">
          <EllipsisVerticalIcon className="h-7 w-7 text-gray-500" />
        </div>
      </div>
    </div>
  )
}