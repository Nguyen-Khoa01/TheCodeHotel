import { useState } from "react";
import Header from "@/component/Header"
import Footer from "@/component/Footer"
import Title from "@/component/Title"
import SelectComponent from "@/component/Select";
import { Slider } from 'antd';
import { PlusCircleIcon, MinusCircleIcon, MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { ChevronUpIcon, StarIcon } from "@heroicons/react/24/solid";
import { DatePicker, Space, Input, Checkbox } from 'antd';

import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import { BsBorderAll, BsList, BsWifi, BsCup, BsFlower1 } from "react-icons/bs";
import { RiParkingBoxLine } from "react-icons/ri"
import { MdSmokeFree } from 'react-icons/md'
import { BiSwim } from 'react-icons/bi'

import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';

export default function Rooms() {

    const { Search } = Input;

    const [numberAduts, setNumberAduts] = useState(0)
    const [numberChilren, setNumberChilren] = useState(0)

    const [minPrice, setMinPrice] = useState(20)
    const [maxPrice, setMaxPrice] = useState(1000)

    const onChange = (newValue: Array<number>) => {
        setMaxPrice(newValue[1])
    }

    const onChangeCheckBox = (checkedValues: CheckboxValueType[]) => {
        console.log('checked = ', checkedValues);
    };

    const [current, setCurrent] = useState(3);

    const onChangePagination: PaginationProps['onChange'] = (page) => {
        console.log(page);
        setCurrent(page);
    };

    return (
        <div>
            <Header />
            <Title />
            <div className="bg-[#F2F4F7]">
                <div className="flex h-[143px] w-[1300px] mx-auto rounded bg-white   justify-around text-lg
                             text-zinc-700 items-center drop-shadow-xl xl:w-full">
                    <div className="flex flex-col ml-2">
                        <label className="mb-3 text-center ">Location</label>
                        <SelectComponent />
                    </div>
                    <div className="flex flex-col ml-2">
                        <p className="mb-3 text-center">Check In</p>
                        <Space direction="vertical" size={12} className="lg:w-[110px] w-[150px]">
                            <DatePicker size="large" />
                        </Space>
                    </div>
                    <div className="flex flex-col ml-2">
                        <p className="mb-3 text-center ">Check Out</p>
                        <Space direction="vertical" className="lg:w-[110px] w-[150px]">
                            <DatePicker size="large" />
                        </Space>
                    </div>
                    <div className="flex flex-col ml-2 ">
                        <span className="text-center">Aduts</span>
                        <div className="hover:border-[#4096ff] flex w-[150px] h-10 justify-around mt-3 items-center border-[1px] rounded-lg border-[#d9d9d9]  lg:w-[110px]">
                            <MinusCircleIcon onClick={() => setNumberAduts(prev => (numberAduts === 0 ? prev : prev - 1))} className="h-6 w-6 text-gray-500" />
                            <p>{numberAduts}</p>
                            <PlusCircleIcon onClick={() => setNumberAduts(prev => prev + 1)} className="h-6 w-6 text-gray-500" />
                        </div>
                    </div>
                    <div className="flex flex-col ml-2">
                        <span className="text-center">Chilren</span>
                        <div className="flex w-[150px] h-10 justify-around mt-3 items-center border-[1px] rounded-lg border-[#d9d9d9] hover:border-[#4096ff] lg:w-[110px]">
                            <MinusCircleIcon onClick={() => setNumberChilren(prev => (numberChilren === 0 ? prev : prev - 1))} className="h-6 w-6 text-gray-500" />
                            <p>{numberChilren}</p>
                            <PlusCircleIcon onClick={() => setNumberChilren(prev => prev + 1)} className="h-6 w-6 text-gray-500" />
                        </div>
                    </div>
                    <div className="w-14 h-14 bg-teal-600 rounded-xl flex justify-center items-center hover:bg-[#4096ff] transition-all duration-150">
                        <MagnifyingGlassIcon className="h-6 w-6 text-white" />
                    </div>

                </div>
                <div className=" w-[1300px] mx-auto grid grid-cols-3 gap-4">
                    <div className="my-10 mr-8">
                        <div className="p-[25px] bg-white rounded-2xl">
                            <div className="flex justify-between">
                                <p className="text-[20px]">Prices</p>
                                <ChevronUpIcon className="h-6 w-6 text-gray-500" />
                            </div>
                            <div>
                                <Slider range={{ draggableTrack: true }} defaultValue={[20, 100]} className="my-5 mr-3" onChange={onChange} step={0.01} />
                                <div className="flex text-[18px] pl-2">
                                    <p className="text-[#a1a1a1] mr-5">Price:</p>
                                    <p className="text-teal-600">${minPrice}</p>
                                    <p>-</p>
                                    <p className="text-teal-600">${maxPrice}</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-[25px] bg-white rounded-2xl my-8">
                            <div className="flex justify-between">
                                <p className="text-[20px]">Amenities</p>
                                <ChevronUpIcon className="h-6 w-6 text-gray-500" />
                            </div>
                            <Search
                                placeholder="input search text"
                                size="large"
                                onSearch={value => console.log(value)}
                                className="my-5"
                                style={{ width: '100%' }}
                            />
                            <Checkbox.Group style={{ width: '100%' }} className="flex flex-col" onChange={onChangeCheckBox}>

                                <Checkbox value="Parking" className="ml-2 pb-4 text-lg" >Parking</Checkbox>

                                <Checkbox value="Room Service" className=" pb-4 text-lg">Room Service</Checkbox>

                                <Checkbox value="Free wifiC" className=" pb-4 text-lg">Free wifi</Checkbox>

                                <Checkbox value="Healthy Breakfast" className=" pb-4 text-lg">Healthy Breakfast</Checkbox>

                                <Checkbox value="Swimming Pool" className=" pb-4 text-lg">Swimming Pool</Checkbox>

                                <Checkbox value="Mini Fridge" className=" pb-4 text-lg">Mini Fridge</Checkbox>

                                <Checkbox value="Garder View" className=" pb-4 text-lg">Garder View</Checkbox>


                            </Checkbox.Group>

                            <p className="text-teal-600 underline text-[18px] text-center mt-2 cursor-pointer">6 More Amenities</p>
                        </div>
                        <div className="p-[25px] bg-white rounded-2xl">
                            <div className="flex justify-between">
                                <p className="text-[20px]">Filter By Rating</p>
                                <ChevronUpIcon className="h-6 w-6 text-gray-500" />
                            </div>

                            <div className="flex flex-col mt-4">

                                <Checkbox value="5" className="ml-2 pb-2 text-lg items-center" >
                                    <div className="flex">
                                        <StarIcon className="h-6 w-6 text-yellow-400" />
                                        <StarIcon className="h-6 w-6 text-yellow-400" />
                                        <StarIcon className="h-6 w-6 text-yellow-400" />
                                        <StarIcon className="h-6 w-6 text-yellow-400" />
                                        <StarIcon className="h-6 w-6 text-yellow-400" />
                                    </div>
                                </Checkbox>

                                <Checkbox value="4" className=" pb-2 text-lg items-center">
                                    <div className="flex">
                                        <StarIcon className="h-5 w-5 text-yellow-400" />
                                        <StarIcon className="h-5 w-5 text-yellow-400" />
                                        <StarIcon className="h-5 w-5 text-yellow-400" />
                                        <StarIcon className="h-5 w-5 text-yellow-400" />
                                    </div>
                                </Checkbox>

                                <Checkbox value="3" className=" pb-2 text-lg items-center">
                                    <div className="flex">
                                        <StarIcon className="h-5 w-5 text-yellow-400" />
                                        <StarIcon className="h-5 w-5 text-yellow-400" />
                                        <StarIcon className="h-5 w-5 text-yellow-400" />
                                    </div>
                                </Checkbox>

                                <Checkbox value="2" className=" pb-2 text-lg items-center">
                                    <div className="flex">
                                        <StarIcon className="h-5 w-5 text-yellow-400" />
                                        <StarIcon className="h-5 w-5 text-yellow-400" />
                                    </div>
                                </Checkbox>

                                <Checkbox value="4" className=" pb-2 text-lg items-center">
                                    <div className="flex">
                                        <StarIcon className="h-5 w-5 text-yellow-400" />
                                    </div>
                                </Checkbox>




                            </div>
                        </div>

                    </div>
                    <div className="col-span-2 my-10  ">
                        <div className="flex justify-between items-center mb-7">
                            <p className="text-[#333]">Showing 1-4 of 16 results </p>
                            <div className="flex text-[20px]">
                                <div className="p-4 bg-teal-200 rounded-md shadow-md">
                                    <BsBorderAll className="text-teal-600" />
                                </div>
                                <div className="p-4 bg-white shadow-md rounded-md">
                                    <BsList className="text-[#333]" />
                                </div>
                            </div>
                        </div>
                        {/* <div className="grid grid-cols-2 gap-6">
                            <div className="rounded-[26px] overflow-hidden shadow-lg">

                                <div className="">
                                    <img className="w-full" src="https://bytesed.com/tf/beyond-hotel/beyond_hotel/assets/img/single-page/hotel-grid1.jpg" />
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
                                            <p className="text-[18px] text-[#333]">4140 Parker Rd. Allentown, New Mexico 31134</p>
                                        </div>
                                    </div>
                                    <div className="flex px-[20px] text-[#444] items-center text-[18px] py-[10px] border-b-[1px] border-gray-300 justify-between">
                                        <RiParkingBoxLine />
                                        <BsWifi />
                                        <BsCup />
                                        <MdSmokeFree />
                                        <BiSwim />
                                        <BsFlower1 />
                                        <p className="underline text-teal-600 text-[13px]">+8 More</p>
                                    </div>
                                    <div className="flex px-[20px] pt-[15px] pb-[25px] justify-between ">
                                        <div>
                                            <h1 className="text-[22px] font-medium text-teal-600">$230 <span className="text-[16px] font-normal text-teal-600">/Night</span></h1>

                                            <div className="flex text-[#333] ">
                                                <p>2 Bed,</p>
                                                <p className="mx-2">2 Adult,</p>
                                                <p>2 Children</p>
                                            </div>
                                        </div>
                                        <div className="bg-teal-600  rounded-md">
                                            <p className="p-4 text-white">Reserve Now</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="rounded-[26px] overflow-hidden shadow-lg">

                                <div className="">
                                    <img className="w-full" src="https://bytesed.com/tf/beyond-hotel/beyond_hotel/assets/img/single-page/hotel-grid1.jpg" />
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
                                            <p className="text-[18px] text-[#333]">4140 Parker Rd. Allentown, New Mexico 31134</p>
                                        </div>
                                    </div>
                                    <div className="flex px-[20px] text-[#444] items-center text-[18px] py-[10px] border-b-[1px] border-gray-300 justify-between">
                                        <RiParkingBoxLine />
                                        <BsWifi />
                                        <BsCup />
                                        <MdSmokeFree />
                                        <BiSwim />
                                        <BsFlower1 />
                                        <p className="underline text-teal-600 text-[13px]">+8 More</p>
                                    </div>
                                    <div className="flex px-[20px] pt-[15px] pb-[25px] justify-between ">
                                        <div>
                                            <h1 className="text-[22px] font-medium text-teal-600">$230 <span className="text-[16px] font-normal text-teal-600">/Night</span></h1>

                                            <div className="flex text-[#333] ">
                                                <p>2 Bed,</p>
                                                <p className="mx-2">2 Adult,</p>
                                                <p>2 Children</p>
                                            </div>
                                        </div>
                                        <div className="bg-teal-600  rounded-md">
                                            <p className="p-4 text-white">Reserve Now</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="rounded-[26px] overflow-hidden shadow-lg">

                                <div className="">
                                    <img className="w-full" src="https://bytesed.com/tf/beyond-hotel/beyond_hotel/assets/img/single-page/hotel-grid1.jpg" />
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
                                            <p className="text-[18px] text-[#333]">4140 Parker Rd. Allentown, New Mexico 31134</p>
                                        </div>
                                    </div>
                                    <div className="flex px-[20px] text-[#444] items-center text-[18px] py-[10px] border-b-[1px] border-gray-300 justify-between">
                                        <RiParkingBoxLine />
                                        <BsWifi />
                                        <BsCup />
                                        <MdSmokeFree />
                                        <BiSwim />
                                        <BsFlower1 />
                                        <p className="underline text-teal-600 text-[13px]">+8 More</p>
                                    </div>
                                    <div className="flex px-[20px] pt-[15px] pb-[25px] justify-between ">
                                        <div>
                                            <h1 className="text-[22px] font-medium text-teal-600">$230 <span className="text-[16px] font-normal text-teal-600">/Night</span></h1>

                                            <div className="flex text-[#333] ">
                                                <p>2 Bed,</p>
                                                <p className="mx-2">2 Adult,</p>
                                                <p>2 Children</p>
                                            </div>
                                        </div>
                                        <div className="bg-teal-600  rounded-md">
                                            <p className="p-4 text-white">Reserve Now</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="rounded-[26px] overflow-hidden shadow-lg">

                                <div className="">
                                    <img className="w-full" src="https://bytesed.com/tf/beyond-hotel/beyond_hotel/assets/img/single-page/hotel-grid1.jpg" />
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
                                            <p className="text-[18px] text-[#333]">4140 Parker Rd. Allentown, New Mexico 31134</p>
                                        </div>
                                    </div>
                                    <div className="flex px-[20px] text-[#444] items-center text-[18px] py-[10px] border-b-[1px] border-gray-300 justify-between">
                                        <RiParkingBoxLine />
                                        <BsWifi />
                                        <BsCup />
                                        <MdSmokeFree />
                                        <BiSwim />
                                        <BsFlower1 />
                                        <p className="underline text-teal-600 text-[13px]">+8 More</p>
                                    </div>
                                    <div className="flex px-[20px] pt-[15px] pb-[25px] justify-between ">
                                        <div>
                                            <h1 className="text-[22px] font-medium text-teal-600">$230 <span className="text-[16px] font-normal text-teal-600">/Night</span></h1>

                                            <div className="flex text-[#333] ">
                                                <p>2 Bed,</p>
                                                <p className="mx-2">2 Adult,</p>
                                                <p>2 Children</p>
                                            </div>
                                        </div>
                                        <div className="bg-teal-600  rounded-md">
                                            <p className="p-4 text-white">Reserve Now</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div> */}
                        <div className="grid grid-cols-1 gap-4 ">
                            <div className="rounded-[26px] flex overflow-hidden shadow-lg justify-between">
                                <div className="w-1/3">
                                    <img className="h-full" src="https://bytesed.com/tf/beyond-hotel/beyond_hotel/assets/img/single-page/hotel-list1.jpg" />
                                </div>
                                <div className="w-3/5">
                                    <div className="border-b-[1px] border-gray-300 pt-[25px] px-[20px] pb-[20px]">
                                        <div className="flex justify-between">
                                            <div className="flex items-center rounded-md bg-[#0d948847] w-[100px] text-[18px] py-1 justify-center text-teal-600">
                                                <StarIcon className="h-4 w-4" />
                                                <p className="mx-1">4</p>
                                                <p>(380)</p>
                                            </div>
                                            <div>
                                                <div className="bg-teal-600  rounded-md">
                                                    <p className="p-4 text-white">Reserve Now</p>
                                                </div>
                                            </div>
                                        </div>
                                        <h1 className="text-[22px] my-2">King Suite Room</h1>
                                        <div className="flex  items-center">
                                            <MapPinIcon className="h-6 w-6 text-gray-500" />
                                            <p className="text-[18px] text-[#333]">4140 Parker Rd. Allentown, New Mexico 31134</p>
                                        </div>
                                    </div>
                                    <div className=" grid gap-2 grid-cols-4 px-[20px] text-[#444] items-center  text-[18px] py-[10px] border-b-[1px] border-gray-300 justify-between">
                                        <div className="flex items-center">
                                            <RiParkingBoxLine className="mr-1" />
                                            <p>Parking</p>
                                        </div>
                                        <div className="flex items-center ">
                                            <BsWifi className="mr-1" />
                                            <p>Wifi</p>
                                        </div>
                                        <div className="flex items-center">
                                            <BsCup className="mr-1" />
                                            <p>Breakfast</p>
                                        </div>
                                        <div className="flex items-center">
                                            <MdSmokeFree className="mr-1" />
                                            <p>Don't somke</p>
                                        </div>
                                        <div className="flex items-center">
                                            <BiSwim className="mr-1" />
                                            <p>Pool</p>
                                        </div>
                                        <div className="flex items-center">
                                            <BsFlower1 className="mr-1" />
                                            <p>Garden</p>
                                        </div>
                                        <p className="underline text-teal-600 text-[13px]">+8 More</p>
                                    </div>
                                    <div className="flex px-[20px] pt-[15px] pb-[25px] justify-between ">
                                        <div className="flex items-center">
                                            <h1 className="text-[22px] font-medium text-teal-600">$230 <sub className="text-[16px] font-normal text-teal-600">/Night</sub></h1>

                                            <sub className="flex text-[#333] text-[16px] ml-2">
                                                <p>2 Bed,</p>
                                                <p className="mx-2">2 Adult,</p>
                                                <p>2 Children</p>
                                            </sub>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="rounded-[26px] flex overflow-hidden shadow-lg justify-between">
                                <div className="w-1/3">
                                    <img className="h-full" src="https://bytesed.com/tf/beyond-hotel/beyond_hotel/assets/img/single-page/hotel-list1.jpg" />
                                </div>
                                <div className="w-3/5">
                                    <div className="border-b-[1px] border-gray-300 pt-[25px] px-[20px] pb-[20px]">
                                        <div className="flex justify-between">
                                            <div className="flex items-center rounded-md bg-[#0d948847] w-[100px] text-[18px] py-1 justify-center text-teal-600">
                                                <StarIcon className="h-4 w-4" />
                                                <p className="mx-1">4</p>
                                                <p>(380)</p>
                                            </div>
                                            <div>
                                                <div className="bg-teal-600  rounded-md">
                                                    <p className="p-4 text-white">Reserve Now</p>
                                                </div>
                                            </div>
                                        </div>
                                        <h1 className="text-[22px] my-2">King Suite Room</h1>
                                        <div className="flex  items-center">
                                            <MapPinIcon className="h-6 w-6 text-gray-500" />
                                            <p className="text-[18px] text-[#333]">4140 Parker Rd. Allentown, New Mexico 31134</p>
                                        </div>
                                    </div>
                                    <div className=" grid gap-2 grid-cols-4 px-[20px] text-[#444] items-center  text-[18px] py-[10px] border-b-[1px] border-gray-300 justify-between">
                                        <div className="flex items-center">
                                            <RiParkingBoxLine className="mr-1" />
                                            <p>Parking</p>
                                        </div>
                                        <div className="flex items-center ">
                                            <BsWifi className="mr-1" />
                                            <p>Wifi</p>
                                        </div>
                                        <div className="flex items-center">
                                            <BsCup className="mr-1" />
                                            <p>Breakfast</p>
                                        </div>
                                        <div className="flex items-center">
                                            <MdSmokeFree className="mr-1" />
                                            <p>Don't somke</p>
                                        </div>
                                        <div className="flex items-center">
                                            <BiSwim className="mr-1" />
                                            <p>Pool</p>
                                        </div>
                                        <div className="flex items-center">
                                            <BsFlower1 className="mr-1" />
                                            <p>Garden</p>
                                        </div>
                                        <p className="underline text-teal-600 text-[13px]">+8 More</p>
                                    </div>
                                    <div className="flex px-[20px] pt-[15px] pb-[25px] justify-between ">
                                        <div className="flex items-center">
                                            <h1 className="text-[22px] font-medium text-teal-600">$230 <sub className="text-[16px] font-normal text-teal-600">/Night</sub></h1>

                                            <sub className="flex text-[#333] text-[16px] ml-2">
                                                <p>2 Bed,</p>
                                                <p className="mx-2">2 Adult,</p>
                                                <p>2 Children</p>
                                            </sub>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="rounded-[26px] flex overflow-hidden shadow-lg justify-between">
                                <div className="w-1/3">
                                    <img className="h-full" src="https://bytesed.com/tf/beyond-hotel/beyond_hotel/assets/img/single-page/hotel-list1.jpg" />
                                </div>
                                <div className="w-3/5">
                                    <div className="border-b-[1px] border-gray-300 pt-[25px] px-[20px] pb-[20px]">
                                        <div className="flex justify-between">
                                            <div className="flex items-center rounded-md bg-[#0d948847] w-[100px] text-[18px] py-1 justify-center text-teal-600">
                                                <StarIcon className="h-4 w-4" />
                                                <p className="mx-1">4</p>
                                                <p>(380)</p>
                                            </div>
                                            <div>
                                                <div className="bg-teal-600  rounded-md">
                                                    <p className="p-4 text-white">Reserve Now</p>
                                                </div>
                                            </div>
                                        </div>
                                        <h1 className="text-[22px] my-2">King Suite Room</h1>
                                        <div className="flex  items-center">
                                            <MapPinIcon className="h-6 w-6 text-gray-500" />
                                            <p className="text-[18px] text-[#333]">4140 Parker Rd. Allentown, New Mexico 31134</p>
                                        </div>
                                    </div>
                                    <div className=" grid gap-2 grid-cols-4 px-[20px] text-[#444] items-center  text-[18px] py-[10px] border-b-[1px] border-gray-300 justify-between">
                                        <div className="flex items-center">
                                            <RiParkingBoxLine className="mr-1" />
                                            <p>Parking</p>
                                        </div>
                                        <div className="flex items-center ">
                                            <BsWifi className="mr-1" />
                                            <p>Wifi</p>
                                        </div>
                                        <div className="flex items-center">
                                            <BsCup className="mr-1" />
                                            <p>Breakfast</p>
                                        </div>
                                        <div className="flex items-center">
                                            <MdSmokeFree className="mr-1" />
                                            <p>Don't somke</p>
                                        </div>
                                        <div className="flex items-center">
                                            <BiSwim className="mr-1" />
                                            <p>Pool</p>
                                        </div>
                                        <div className="flex items-center">
                                            <BsFlower1 className="mr-1" />
                                            <p>Garden</p>
                                        </div>
                                        <p className="underline text-teal-600 text-[13px]">+8 More</p>
                                    </div>
                                    <div className="flex px-[20px] pt-[15px] pb-[25px] justify-between ">
                                        <div className="flex items-center">
                                            <h1 className="text-[22px] font-medium text-teal-600">$230 <sub className="text-[16px] font-normal text-teal-600">/Night</sub></h1>

                                            <sub className="flex text-[#333] text-[16px] ml-2">
                                                <p>2 Bed,</p>
                                                <p className="mx-2">2 Adult,</p>
                                                <p>2 Children</p>
                                            </sub>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <Pagination current={current} onChange={onChangePagination} total={50} className="flex justify-center mt-10" />
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}