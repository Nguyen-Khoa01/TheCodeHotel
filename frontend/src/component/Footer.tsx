import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Input } from 'antd';

export default function Footer() {
    return (
        <div className="bg-[#27282B]  text-white flex-col items-center py-10 xl:py-5 grid grid-cols-6 xl:grid-cols-1">
            <div className="col-start-2 col-span-4 xl:col-start-1 2xl:mx-[35px] lg:max-w-[720px] 2md:w-full 2md:mx-auto md:max-w-[540px]">
                <div className="flex mt-7 justify-between lg:justify-center  md:flex-col">
                    <div className=" flex flex-col w-1/3 px-2 md:w-full">
                        <img src="https://htmldesigntemplates.com/html/travelin/images/logo-white.png" width={216} height={46} className="mb-5 lg:w-[180px] lg:h-[30px] lg:mb-3" />
                        <p className="text-[16px] lg:text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio suspendisse leo neque iaculis molestie sagittis maecenas aenean eget molestie sagittis.</p>
                        <div className="my-5 text-[17px] lg:my-3 lg:text-[15px]">
                            <p className="font-medium">SDT :<span className="font-light"> +84934806624</span></p>
                            <p className="font-medium">Location :<span className="font-light"> Nguyen Cong tru Street, Da Nang, Viet Nam</span></p>
                            <p className="font-medium">Email :<span className="font-light"> infor@HotelCode.vn</span></p>
                            <p className="font-medium">Website :<span className="font-light"> www.HotelCode.com</span></p>
                        </div>
                    </div>
                    <div className=" flex flex-col w-1/4 px-2 items-center relative md:w-full md:items-start" >
                        <h1 className="text-[26px] relative mb-5 lg:mb-3 lg:text-[23px] before:absolute before:content-[''] before:w-14 before:h-[3px] before:bg-white before:bottom-[-2px] before:left-1 ">Quick Link</h1>

                        <div className="flex flex-col justify-around h-full text-lg lg:text-base font-light">
                            <p className="hover:text-teal-600 duration-300 cursor-pointer">Home</p>
                            <p className="hover:text-teal-600 duration-300 cursor-pointer">Abouts</p>
                            <p className="hover:text-teal-600 duration-300 cursor-pointer">News</p>
                            <p className="hover:text-teal-600 duration-300 cursor-pointer">Contact</p>
                        </div>
                    </div>
                    <div className=" flex flex-col w-1/3 px-2  relative lg:items-center md:w-full md:mt-4 ">
                        <h1 className="text-[26px] relative mb-5 lg:text-[23px] lg:mb-3  before:absolute before:content-[''] 
                        before:w-14 before:h-[3px] before:bg-white before:bottom-[-2px] before:left-1"> Newsletter</h1>

                        <p className="lg:w-[200px]"> Jin our community of over 200,000 global readers who receives emails filled with news, promotions, and other good stuff.</p>
                        <div className="mt-5 flex justify-between cursor-pointer lg:flex-col">
                            <Input type="email" placeholder="Email address" size='large' className="w-[300px] lg:w-[250px] lg:mb-2"></Input>
                            <div className="bg-teal-600 p-2 rounded-lg hover:bg-teal-400 duration-300">
                                <p>Subscribe</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[740px]  flex justify-between lg:justify-around bg-[#fbfbfb12] p-4 rounded-xl items-center mt-6">
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
        </div>

    )
}