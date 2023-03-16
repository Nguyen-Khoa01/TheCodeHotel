import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Title() {
    return (
        <div className=" bg-[#EAECF0] py-[30px] grid grid-cols-6 xl:grid-cols-1 ">
            <div className="col-start-2 col-span-4 flex justify-between px-5 
                pt-5 pb-[25px] bg-white rounded-lg xl:col-start-1 2xl:mx-[35px] 
                lg:max-w-[720px] 2md:w-full 2md:mx-auto md:max-w-[540px]">
                <h1 className="text-[24px] leading-[32px] font-light">
                    About Us
                </h1>
                <div className="flex text-gray-400 items-center md:text-[15px]">
                    <p>Home</p>
                    <ChevronRightIcon className="h-4 w-4 text-gray-400" />
                    <p>About Us</p>
                </div>
            </div>
        </div>
    )
}