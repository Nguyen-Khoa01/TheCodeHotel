import { useState, useCallback, useEffect, useRef } from "react";
import Header from "@/component/Header"
import Footer from "@/component/Footer"
import Title from "@/component/Title"
import HotelData from "@/assets/images/fakeData/Hotel";
import Amenities from "@/assets/images/fakeData/Amenities";
import RatingHotel from "@/assets/images/fakeData/RatingHotel";

import { Slider } from 'antd';
import { PlusCircleIcon, MinusCircleIcon, MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { ChevronUpIcon, StarIcon } from "@heroicons/react/24/solid";
import { DatePicker, Space, Input, Checkbox } from 'antd';
import { BsBorderAll, BsList } from "react-icons/bs";

import { Select } from "antd";
import type { RangePickerProps } from 'antd/es/date-picker';

import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import dayjs from 'dayjs';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';


const { RangePicker } = DatePicker;



const Rooms: React.FC = () => {

    const { Search } = Input;

    const getSreach = JSON.parse((localStorage.getItem("Search") || ""))


    const [numberAduts, setNumberAduts] = useState(getSreach.Adutls)
    const [numberChilren, setNumberChilren] = useState(getSreach.Children)

    const [minPrice, setMinPrice] = useState(2)
    const [maxPrice, setMaxPrice] = useState(50)

    const [current, setCurrent] = useState(3);

    const onChange = (newValue: Array<number>) => {
        setMinPrice(newValue[0])
        setMaxPrice(newValue[1])
    }

    const onChangePagination: PaginationProps['onChange'] = (page) => {
        console.log(page);
        setCurrent(page);
    };

    const disabledDate: RangePickerProps['disabledDate'] = (current) => {
        return current && current < dayjs().endOf('day');
    };

    type Myfiler = {
        amenities: string[],
        star: number[]
    }

    const initFiler: Myfiler = {
        amenities: [],
        star: [],
    }


    const HotelList = HotelData.getAllHotels()

    const [Hotels, setHotels] = useState(HotelList)

    const [filter, setFilter] = useState(initFiler)

    const filterSelect = (type: any, checked: any, item: any) => {
        if (checked) {
            switch (type) {

                case 'AMENITIES':
                    setFilter({ ...filter, amenities: [...filter.amenities, item.lable] })
                    break
                case 'STAR':
                    setFilter({ ...filter, star: [...filter.star, item.value] })
                    break
                default:
            }
        }
        else {
            switch (type) {
                case 'AMENITIES':
                    const newAmenities = filter.amenities.filter(e => e !== item.lable)
                    setFilter({ ...filter, amenities: newAmenities })
                    break
                case 'STAR':
                    const newStar = filter.star.filter(e => e !== item.value)
                    setFilter({ ...filter, star: newStar })
                    break
                default:
            }
        }
    }


    console.log(filter)
    const updateHotel = useCallback(() => {
        let temp = HotelList
        if (filter.amenities.length > 0) {
            temp = temp.filter(e => {
                const check = e.Amenities.find((e) => filter.amenities.includes(e))
                return check !== undefined
            })
        }
        if (minPrice > 0 && maxPrice < 1000) {
            temp = temp.filter(e => e.price >= minPrice && e.price <= maxPrice)
        }
        if (filter.star.length > 0) {
            temp = temp.filter(e => filter.star.includes(e.star))
        }
        setHotels(temp)
        console.log(1)
    }, [filter, HotelList, minPrice, maxPrice])

    useEffect(() => {
        updateHotel()
    }, [updateHotel])


    const MenuPricesRef = useRef<HTMLDivElement>(null)

    const MenuAmenitiesRef = useRef<HTMLDivElement>(null)

    const MenuRatingRef = useRef<HTMLDivElement>(null)

    const handlePricesMenu = () => {
        MenuPricesRef.current?.classList.toggle("hidden")
    }
    const handleAmenitiesMenu = () => {
        MenuAmenitiesRef.current?.classList.toggle('hidden')
    }
    const handleRatingRef = () => {
        MenuRatingRef.current?.classList.toggle('hidden')
    }


    return (

        <div className="">

            <Header />
            <Title />
            <div className="bg-[#F2F4F7] grid grid-cols-6 xl:grid-cols-1 ">

                <div className="col-start-2 col-span-4 xl:col-span-1 2xl:mx-[35px] 2md:mx-auto 2md:w-full lg:max-w-[720px] md:max-w-[540px]">
                    <div className="flex py-[30px] mx-auto rounded bg-white  justify-around text-lg mt-7
                        text-zinc-700 items-center drop-shadow-xl 2md:grid lg:grid-cols-3 lg:gap-4 2md:text-[15px]
                             md:grid-cols-1">
                        <div className="flex flex-col ml-2 2md:items-baseline md:flex-row md:justify-around">
                            <label className="mb-3 text-center ">Location</label>
                            <Select
                                showSearch
                                size='large'
                                value={getSreach.City}
                                className="w-[150px]"
                                placeholder="Choose"
                                optionFilterProp="children"
                                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                                options={[
                                    {
                                        value: '1',
                                        label: 'Vũng Tàu',
                                    },
                                    {
                                        value: '2',
                                        label: 'Hà Nội',
                                    },
                                    {
                                        value: '3',
                                        label: 'Hồ Chí Minh',
                                    },
                                    {
                                        value: '4',
                                        label: 'Đà Nẵng',
                                    },
                                    {
                                        value: '5',
                                        label: 'Hải Phòng',
                                    },
                                    {
                                        value: '6',
                                        label: 'Đà lạt',
                                    },
                                ]}
                            />
                        </div>

                        <div className="flex flex-col ml-2 2md:items-baseline md:flex-row md:justify-around">
                            <div className="flex justify-around mb-3">
                                <p>Checkin</p>
                                <p>Checkout</p>
                            </div>
                            <RangePicker disabledDate={disabledDate} size="large"
                                value={[dayjs(getSreach.checkIn), dayjs(getSreach.checkOut)]}

                            />
                        </div>
                        <div className="flex flex-col ml-2 2md:items-baseline md:flex-row md:justify-around">
                            <span className="text-center">Aduts</span>
                            <div className="hover:border-[#4096ff] flex w-[150px] h-10 justify-around mt-3 items-center border-[1px] rounded-lg border-[#d9d9d9]">
                                <MinusCircleIcon onClick={() => setNumberAduts((prev: number) => (numberAduts === 0 ? prev : prev - 1))} className="h-6 w-6 text-gray-500" />
                                <p>{numberAduts}</p>
                                <PlusCircleIcon onClick={() => setNumberAduts((prev: number) => prev + 1)} className="h-6 w-6 text-gray-500" />
                            </div>
                        </div>
                        <div className="flex flex-col ml-2 2md:items-baseline md:flex-row md:justify-around">
                            <span className="text-center">Chilren</span>
                            <div className="flex w-[150px] h-10 justify-around mt-3 items-center border-[1px] rounded-lg border-[#d9d9d9] hover:border-[#4096ff]">
                                <MinusCircleIcon onClick={() => setNumberChilren((prev: number) => (numberChilren === 0 ? prev : prev - 1))} className="h-6 w-6 text-gray-500" />
                                <p>{numberChilren}</p>
                                <PlusCircleIcon onClick={() => setNumberChilren((prev: number) => prev + 1)} className="h-6 w-6 text-gray-500" />
                            </div>
                        </div>
                        <div className="w-14 h-14 bg-teal-600 rounded-xl flex justify-center items-center hover:bg-[#4096ff] transition-all duration-150">
                            <MagnifyingGlassIcon className="h-6 w-6 text-white" />
                        </div>

                    </div>
                    <div className="mx-auto grid grid-cols-3 2md:grid-cols-1 mt-[40px]">
                        <div className="my-10 mr-8 2md:hidden">
                            <div className="p-[25px] bg-white rounded-2xl">
                                <div className="flex justify-between">
                                    <p className="text-[20px]">Prices</p>
                                    <div onClick={handlePricesMenu}>
                                        <ChevronUpIcon className="h-6 w-6 text-gray-500" />
                                    </div>
                                </div>
                                <div className="" ref={MenuPricesRef}>
                                    <Slider tooltip={{ open: false }} range={{ draggableTrack: true }} defaultValue={[minPrice, maxPrice]} className="my-5 mr-3" onChange={onChange} step={0.01} />
                                    <div className="flex text-[18px] pl-2">
                                        <p className="text-[#a1a1a1] mr-5">Price:</p>
                                        <p className="text-teal-600">${Math.floor(minPrice * 10)}</p>
                                        <p>-</p>
                                        <p className="text-teal-600">${Math.floor(maxPrice * 10)}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-[25px] bg-white rounded-2xl my-8">
                                <div className="flex justify-between">
                                    <p className="text-[20px]">Amenities</p>
                                    <div onClick={handleAmenitiesMenu}>

                                        <ChevronUpIcon className="h-6 w-6 text-gray-500" />
                                    </div>
                                </div>
                                <div ref={MenuAmenitiesRef}>
                                    <Search
                                        placeholder="input search text"
                                        size="large"
                                        onSearch={value => console.log(value)}
                                        className="my-5"
                                        style={{ width: '100%' }}
                                    />
                                    <div style={{ width: '100%' }} className="flex flex-col"  >

                                        {
                                            Amenities.map((item, key) => (
                                                <Checkbox
                                                    className="text-[18px]"
                                                    key={key}
                                                    value={item.value}
                                                    onChange={(e) => filterSelect('AMENITIES', e.target.checked, item)}
                                                >{item.lable}</Checkbox>
                                            ))

                                        }


                                    </div>
                                </div>


                            </div>
                            <div className="p-[25px] bg-white rounded-2xl">
                                <div className="flex justify-between">
                                    <p className="text-[20px]">Filter By Rating</p>
                                    <div onClick={handleRatingRef}>
                                        <ChevronUpIcon className="h-6 w-6 text-gray-500" />

                                    </div>
                                </div>

                                <div className="flex flex-col mt-4 " ref={MenuRatingRef}>

                                    {
                                        RatingHotel.map((item, key) => (
                                            <Checkbox value={item.value}
                                                key={key}
                                                onChange={(e) => filterSelect('STAR', e.target.checked, item)}
                                                className="text-[18px]"
                                            >
                                                {item.lable}
                                            </Checkbox>
                                        ))
                                    }


                                </div>
                            </div>

                        </div>
                        <div className="p-4 bg-white shadow-md rounded-md 2md:block 2md:w-[40px] 2md:h-[40px] 2md:p-3 hidden">
                            <BsList className="text-[#333]" />
                        </div>
                        <div className="col-span-2 my-10 ">
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
                            <div className="grid grid-cols-2 gap-6 md:grid-cols-1">

                                {
                                    Hotels.map((item, key) => (
                                        <div key={key} className="rounded-[26px] overflow-hidden shadow-lg">

                                            <div className="">
                                                <img className="w-full h-[192px]" src={item.img} />
                                            </div>
                                            <div className="">
                                                <div className="border-b-[1px] border-gray-300 pt-[25px] px-[20px] pb-[20px]">
                                                    <div className="flex items-center rounded-md bg-[#0d948847] w-[100px] text-[18px] py-1 justify-center text-teal-600">
                                                        <StarIcon className="h-4 w-4" />
                                                        <p className="mx-1">{item.star}</p>
                                                        <p>(380)</p>
                                                    </div>
                                                    <h1 className="text-[22px] my-2">{item.title}</h1>
                                                    <div className="flex  items-center">
                                                        <MapPinIcon className="h-6 w-6 text-gray-500" />
                                                        <p className="text-[18px] text-[#333] lg:text-[15px]">{item.address}</p>
                                                    </div>
                                                </div>

                                                <div className="flex px-[20px] text-[#444] items-center text-[18px] py-[10px] border-b-[1px] 
                                                          border-gray-300 flex-wrap">
                                                    {item.Amenities.map((item, key) => (
                                                        <p className="text-[14px] mr-2">{item}</p>
                                                    ))}
                                                </div>

                                                <div className="flex px-[20px] pt-[15px] pb-[25px] justify-between 2lg:flex-col md:flex-row">
                                                    <div>
                                                        <h1 className="text-[22px] font-medium text-teal-600">${Math.floor(item.price * 10)} <span className="text-[16px] font-normal text-teal-600">/Night</span></h1>

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
                                            </div>

                                        </div>
                                    ))
                                }
                            </div>

                            {/* 1 phòng trên 1 hàng */}
                            {/* <div className="grid grid-cols-1 gap-4 ">
                            <div className="rounded-[26px] flex overflow-hidden shadow-lg justify-between ">
                                <div className="w-1/3">
                                    <img className="h-full hover:scale-110 duration-300 transition-all" src="https://bytesed.com/tf/beyond-hotel/beyond_hotel/assets/img/single-page/hotel-list1.jpg" />
                                </div>
                                <div className="w-3/5 grow">
                                    <div className="border-b-[1px] border-gray-300 pt-[25px] px-[20px] pb-[20px]">
                                        <div className="flex justify-between">
                                            <div className="flex items-center rounded-md bg-[#0d948847] w-[100px] text-[18px] py-1 justify-center text-teal-600">
                                                <StarIcon className="h-4 w-4" />
                                                <p className="mx-1">4</p>
                                                <p>(380)</p>
                                            </div>
                                            <div className="bg-teal-600 group  rounded-md hover:bg-white hover:border-[2px] hover:border-teal-600 duration-700 border-[2px]">
                                                <p className="p-4 text-white group-hover:text-teal-600">Reserve Now</p>
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
                                    <img className="h-full hover:scale-110 duration-300 transition-all" src="https://bytesed.com/tf/beyond-hotel/beyond_hotel/assets/img/single-page/hotel-list1.jpg" />
                                </div>
                                <div className="w-3/5 grow">
                                    <div className="border-b-[1px] border-gray-300 pt-[25px] px-[20px] pb-[20px]">
                                        <div className="flex justify-between">
                                            <div className="flex items-center rounded-md bg-[#0d948847] w-[100px] text-[18px] py-1 justify-center text-teal-600">
                                                <StarIcon className="h-4 w-4" />
                                                <p className="mx-1">4</p>
                                                <p>(380)</p>
                                            </div>

                                            <div className="bg-teal-600 border-[2px] group  rounded-md hover:bg-white hover:border-[2px] hover:border-teal-600 duration-700 ">
                                                <p className="p-4 text-white group-hover:text-teal-600 ">Reserve Now</p>
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
                                    <img className="h-full hover:scale-110 duration-300 transition-all" src="https://bytesed.com/tf/beyond-hotel/beyond_hotel/assets/img/single-page/hotel-list1.jpg" />
                                </div>
                                <div className="w-3/5 grow">
                                    <div className="border-b-[1px] border-gray-300 pt-[25px] px-[20px] pb-[20px]">
                                        <div className="flex justify-between">
                                            <div className="flex items-center rounded-md bg-[#0d948847] w-[100px] text-[18px] py-1 justify-center text-teal-600">
                                                <StarIcon className="h-4 w-4" />
                                                <p className="mx-1">4</p>
                                                <p>(380)</p>
                                            </div>
                                            <div className="bg-teal-600 group  rounded-md hover:bg-white hover:border-[2px] hover:border-teal-600 duration-700 border-[2px]">
                                                <p className="p-4 text-white group-hover:text-teal-600">Reserve Now</p>
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
                                                <p className="mx-2">2 Adult</p>
                                                <p>2 Children</p>
                                            </sub>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div> */}
                            <Pagination current={current} onChange={onChangePagination} total={50} className="flex justify-center mt-10" />
                        </div>
                    </div>
                </div>

            </div>
            <Footer />

        </div>
    )
}

export default Rooms

