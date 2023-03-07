import Link from "next/link"
import { UserIcon } from "@heroicons/react/24/outline";
const mainNav =[
    {
      display:'Home',
      path: "/"
    },
    {
      display:'About us',
      path: "/aboutus"
    },
    {
      display:'News',
      path: "/news"
    },
    {
      display:'Contact',
      path: "/contact"
    },
  ]

export default function Header(){
    return(
       <div className="flex w-2/3 justify-between items-center mx-auto font-sans font-light text-gray-700 h-24 " >
         <div>
                <Link href="/">
                    <img src={`https://htmldesigntemplates.com/html/travelin/images/logo.png`} alt="" />
                </Link>
          </div>
         <div className="flex justify-evenly w-3/6">
            {
                mainNav.map((item,index)=>(
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
        
                <UserIcon className="h-5 w-5 mr-1 text-gray-500" />
                <Link href="/login">
                        <span>Login</span>
                </Link>
                <Link href="/register">
                        <span>/Register</span>
                </Link>
                
                <div className=" bg-teal-600 h-12 w-32 text-center rounded-md ml-4 text-white">
                     <Link href="/booking">
                            <span className="leading-[3rem]">BOOK NOW</span>
                    </Link>
                </div>
          </div>
       </div>
    )
}