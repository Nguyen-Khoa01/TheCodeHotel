import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Title() {
    return (
        <div className=" bg-[#EAECF0] py-[30px]">
            <div className="w-[1300px] flex justify-between mx-auto px-5 pt-5 pb-[25px] bg-white rounded-lg ">
                <h1 className="text-[24px] leading-[32px] font-light">
                    About Us
                </h1>
                <div className="flex text-gray-400 items-center">
                    <p>Home</p>
                    <ChevronRightIcon className="h-6 w-6 text-gray-400" />
                    <p>About Us</p>
                </div>
            </div>
        </div>
    )
}