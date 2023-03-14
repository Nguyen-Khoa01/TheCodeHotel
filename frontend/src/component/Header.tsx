import Link from "next/link"
import { UserIcon } from "@heroicons/react/24/outline";
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
    <div className="flex w-[1300px] justify-between items-center mx-auto font-sans font-light text-gray-700 h-24 xl:w-full  " >
      <div>
        <Link href="/">
          <img src={`https://htmldesigntemplates.com/html/travelin/images/logo.png`} alt="" />
        </Link>
      </div>
      <div className="flex justify-evenly w-3/6">
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
      <div className="flex items-center uppercase text-sm">

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
    </div>
  )
}