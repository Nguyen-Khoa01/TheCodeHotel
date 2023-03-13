import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Input } from 'antd';

export default function Footer() {
    return (
        <div className="bg-[#27282B] flex text-white flex-col items-center py-10">
            <div className="flex w-[1300px]  mt-7 justify-between">
                <div className=" flex flex-col w-1/3 px-2">
                    <img src="https://htmldesigntemplates.com/html/travelin/images/logo-white.png" width={216} height={46} className="mb-5" />
                    <p className="text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio suspendisse leo neque iaculis molestie sagittis maecenas aenean eget molestie sagittis.</p>
                    <div className="my-5 text-[17px]">
                        <p className="font-medium">SDT :<span className="font-light"> +84934806624</span></p>
                        <p className="font-medium">Location :<span className="font-light"> Nguyen Cong tru Street, Da Nang, Viet Nam</span></p>
                        <p className="font-medium">Email :<span className="font-light"> infor@HotelCode.vn</span></p>
                        <p className="font-medium">Website :<span className="font-light"> www.HotelCode.com</span></p>
                    </div>
                </div>
                <div className=" flex flex-col w-1/3 px-2 items-center relative" >
                    <h1 className="text-[26px] mb-5">Quick Link</h1>
                    <div className="w-14 h-[3px] bg-white absolute top-[40px] left-40"></div>
                    <div className="flex flex-col justify-around h-full text-lg font-light">
                        <p className="hover:text-teal-600 duration-300 cursor-pointer">Home</p>
                        <p className="hover:text-teal-600 duration-300 cursor-pointer">Abouts</p>
                        <p className="hover:text-teal-600 duration-300 cursor-pointer">News</p>
                        <p className="hover:text-teal-600 duration-300 cursor-pointer">Contact</p>
                    </div>
                </div>
                <div className=" flex flex-col w-1/3 px-2  relative ">
                    <h1 className="text-[26px] mb-5"> Newsletter</h1>
                    <div className="w-14 h-[3px] bg-white absolute top-[40px] left-3"></div>
                    <p> Jin our community of over 200,000 global readers who receives emails filled with news, promotions, and other good stuff.</p>
                    <div className="mt-5 flex justify-between cursor-pointer">
                        <Input type="email" placeholder="Email address" size='large' className="w-[300px]"></Input>
                        <div className="bg-teal-600 p-2 rounded-lg hover:bg-teal-400 duration-300">
                            <p>Subscribe</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[1300px] flex justify-between bg-[#fbfbfb12] p-4 rounded-xl items-center mt-6">
                <p className="text-lg font-light">2023 HotelCode. All rights reserved.</p>
                <div className="flex text-[20px] justify-between">
                    <div className="p-[10px] bg-slate-600 rounded-[50%] hover:bg-teal-600 duration-300 mr-2">
                        <BsFacebook className="text-white" />
                    </div>
                    <div className="p-[10px] bg-slate-600 rounded-[50%] hover:bg-teal-600 duration-300 mr-2">
                        <BsTwitter className="text-white" />
                    </div >
                    <div className="p-[10px] bg-slate-600 rounded-[50%] hover:bg-teal-600 duration-300 mr-2">
                        <BsInstagram className="text-white" />
                    </div>
                    <div className="p-[10px] bg-slate-600 rounded-[50%] hover:bg-teal-600 duration-300 mr-2">
                        <BsLinkedin className="text-white" />
                    </div>
                </div>
            </div>
        </div>

    )
}