import { useState } from "react";

import Header from "@/component/Header"
import Footer from "@/component/Footer"
import Title from "@/component/Title"


import { MapPinIcon, MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { ChevronUpIcon, StarIcon } from "@heroicons/react/24/solid";
import { DatePicker, Space, Input, Checkbox } from 'antd';

import { BsWifi, BsCup, BsFlower1 } from "react-icons/bs";
import { RiParkingBoxLine } from "react-icons/ri"
import { MdSmokeFree } from 'react-icons/md'
import { BiSwim } from 'react-icons/bi'

export default function Detail() {

    const [numberAduts, setNumberAduts] = useState(0)
    const [numberChilren, setNumberChilren] = useState(0)

    return (
        <div>
            <Header />
            <Title />
            <div className="bg-[#F2F4F7]">
                <div className="max-w-[1300px] mx-auto grid grid-cols-3 gap-x-2">
                    <div className="col-span-2 bg-white shadow-xl px-[20px] pt-[20px] rounded-xl my-8">
                        <div className="grid grid-cols-2 gap-6">
                            <img className="col-span-2 w-full rounded-xl" src="https://bytesed.com/tf/beyond-hotel/beyond_hotel/assets/img/single-page/details_main.jpg"></img>
                            <img className="w-full rounded-xl" src="https://bytesed.com/tf/beyond-hotel/beyond_hotel/assets/img/single-page/details_1.jpg"></img>
                            <img className="w-full rounded-xl" src="https://bytesed.com/tf/beyond-hotel/beyond_hotel/assets/img/single-page/details_2.jpg"></img>
                        </div>
                        <div className="">
                            <div className="border-b-[1px] border-gray-300 pt-[25px] px-[20px] pb-[20px]">
                                <div className="flex items-center rounded-md bg-[#0d948847] w-[100px] text-[18px] py-1 justify-center text-teal-600">
                                    <StarIcon className="h-4 w-4" />
                                    <p className="mx-1">4</p>
                                    <p>(380)</p>
                                </div>
                                <h1 className="text-[22px] my-2">King Suite Room</h1>
                                <div className="flex  items-center">
                                    <MapPinIcon className="h-6 w-6 text-gray-500" />
                                    <p className="text-[18px] text-[#333] lg:text-[15px]">4140 Parker Rd. Allentown, New Mexico 31134</p>
                                </div>
                            </div>
                            <div className=" flex px-[20px] text-[#444] items-center py-[10px]  justify-between max-w-[600px]">
                                <div className="flex items-center text-[15px]">
                                    <RiParkingBoxLine className="mr-1" />
                                    <p>Parking</p>
                                </div>
                                <div className="flex items-center text-[15px] ">
                                    <BsWifi className="mr-1" />
                                    <p>Wifi</p>
                                </div>
                                <div className="flex items-center text-[15px]">
                                    <BsCup className="mr-1" />
                                    <p>Breakfast</p>
                                </div>
                                <div className="flex items-center text-[15px]">
                                    <MdSmokeFree className="mr-1" />
                                    <p>Don't somke</p>
                                </div>
                                <div className="flex items-center text-[15px]">
                                    <BiSwim className="mr-1" />
                                    <p>Pool</p>
                                </div>
                                <div className="flex items-center text-[15px]">
                                    <BsFlower1 className="mr-1" />
                                    <p>Garden</p>
                                </div>
                            </div>
                            <div className="flex px-[20px] pt-[15px] border-t-[1px] border-gray-300 pb-[25px] justify-between 2lg:flex-col md:flex-row">
                                <div>
                                    <h1 className="text-[22px] font-medium text-teal-600">$230 <span className="text-[16px] font-normal text-teal-600">/Night</span></h1>

                                    <div className="flex text-[#333] ">
                                        <p>2 Bed,</p>
                                        <p className="mx-2">2 Adult,</p>
                                        <p>2 Children</p>
                                    </div>
                                </div>
                                <div className="bg-teal-600 group  rounded-md hover:bg-white hover:border-[2px]
                                             hover:border-teal-600 duration-700 border-[2px] xl:w-[150px] xl:mt-2">
                                    <p className="p-4 text-white group-hover:text-teal-600 lg:p-3">Reserve Now</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex text-[18px] border-b-[1px] border-[#ccc] relative ">
                                    <p className="pr-2 py-4 text-teal-600">About</p>
                                    <p className="pl-2 py-4 text-gray-500">Reviews</p>
                                    <div className="h-1 absolute bottom-0 w-[58px] bg-teal-600">

                                    </div>
                                </div>
                                <div className="my-5">
                                    <p className="text-[#aaa]">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back.<br /><br />

                                        He lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him.<br /><br />

                                        So many legs pitifully thin compared with the size of the rest of him waved about helplessly as he looked What's happened to me.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow-xl px-[20px] pt-[20px] rounded-xl my-8 h-[300px]">

                        <div className="flex  ml-2 items-baseline justify-between">
                            <p className="mb-3 text-center">Check In</p>
                            <Space direction="vertical" className=" w-[150px]">
                                <DatePicker size="large" />
                            </Space>
                        </div>
                        <div className="flex ml-2 items-baseline  justify-between">
                            <p className="mb-3 text-center ">Check Out</p>
                            <Space direction="vertical" className="w-[150px]">
                                <DatePicker size="large" />
                            </Space>
                        </div>
                        <div className="flex ml-2 items-center justify-between">
                            <span className="text-center">Aduts</span>
                            <div className="hover:border-[#4096ff] flex w-[150px] h-10 justify-around mt-3 items-center border-[1px] rounded-lg border-[#d9d9d9]">
                                <MinusCircleIcon onClick={() => setNumberAduts(prev => (numberAduts === 0 ? prev : prev - 1))} className="h-6 w-6 text-gray-500" />
                                <p>{numberAduts}</p>
                                <PlusCircleIcon onClick={() => setNumberAduts(prev => prev + 1)} className="h-6 w-6 text-gray-500" />
                            </div>
                        </div>
                        <div className="flex  ml-2 items-center justify-between">
                            <span className="text-center">Chilren</span>
                            <div className="flex w-[150px] h-10 justify-around mt-3 items-center border-[1px] rounded-lg border-[#d9d9d9] hover:border-[#4096ff]">
                                <MinusCircleIcon onClick={() => setNumberChilren(prev => (numberChilren === 0 ? prev : prev - 1))} className="h-6 w-6 text-gray-500" />
                                <p>{numberChilren}</p>
                                <PlusCircleIcon onClick={() => setNumberChilren(prev => prev + 1)} className="h-6 w-6 text-gray-500" />
                            </div>
                        </div>
                        <div className="w-[200px] py-2 mt-4 bg-teal-600 rounded-xl mx-auto flex justify-center items-center hover:bg-[#4096ff] transition-all duration-150">
                            <p>Go to checkout</p>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}