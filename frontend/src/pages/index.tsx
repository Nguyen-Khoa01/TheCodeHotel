import { use, useEffect, useState, useRef } from "react";
import Header from "../component/Header"
import { ChevronRightIcon, ChevronLeftIcon, PlusCircleIcon, MinusCircleIcon, MagnifyingGlassIcon, HandThumbUpIcon } from "@heroicons/react/24/outline";
import { StarIcon, PhoneIcon } from "@heroicons/react/24/solid";
import next from "next/types";
import SelectComponent from '../component/Select'
import { DatePicker, Space, Input } from 'antd';
import Resizable from '../component/Slider'
import SliderGuests from "@/component/SliderGuests";
import Footer from "@/component/Footer";
import type { DatePickerProps, RangePickerProps } from 'antd/es/date-picker';
import dayjs from 'dayjs';
import { Select } from "antd";
import Link from "next/link";


const { RangePicker } = DatePicker;



const Home: React.FC = () => {






    const slider = [
        {
            url: 'https://cdnimg.vietnamplus.vn/uploaded/fsmsr/2020_10_07/exterior_3.jpg'
        },
        {
            url: 'https://kconceptvn.com/wp-content/uploads/2020/04/hotel-photography-chup-anh-khach-san-resortNovotel-phu-quoc-resort-02.jpg'
        },
        {
            url: 'https://images7.alphacoders.com/362/362619.jpg'
        },
        {
            url: 'https://wallpaperaccess.com/full/2690549.jpg'
        },
        {
            url: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?cs=srgb&dl=pexels-konstantinos-eleftheriadis-2034335.jpg&fm=jpg'
        },
    ]

    const [auth, setAuth] = useState(false)
    const [user, setUser] = useState('')


    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        setCurrentIndex((currentIndex) => currentIndex === 0 ? slider.length - 1 : currentIndex - 1)
    }

    const nextSlide = () => {
        setCurrentIndex((currentIndex) => currentIndex === slider.length - 1 ? 0 : currentIndex + 1)
    }



    useEffect(() => {
        (
            async () => {
                try {
                    const getToken = JSON.parse(window.localStorage.getItem('TOKEN') || '')
                    const res = await fetch('http://localhost:3001/auth/profile', {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${getToken.token} `
                        }
                    })
                    setUser(await res.json())
                    setAuth(true)
                } catch (error) {
                    console.log(error)
                    setAuth(false)
                }
            }
        )();
    }, [])

    // useEffect(() => {
    //     const slideInterval = setInterval(nextSlide, 5000)
    //     return () => clearInterval(slideInterval)
    // }, [])

    //search

    const selectRef = useRef()

    const [numberAduts, setNumberAduts] = useState(0)
    const [numberChilren, setNumberChilren] = useState(0)

    const [checkIn, setCheckIn] = useState('')
    const [checkOut, setCheckOut] = useState('')

    const [selectCity, setSelectCity] = useState('')

    const disabledDate: RangePickerProps['disabledDate'] = (current) => {
        return current && current < dayjs().endOf('day');
    };


    const Search: object = {
        City: selectCity,
        Adutls: numberAduts,
        Children: numberChilren,
        checkIn: checkIn,
        checkOut: checkOut,
        rooms: 0
    }


    const handleSearch = () => {
        localStorage.setItem('Search', JSON.stringify(Search))
    }

    const onChange = (
        value: DatePickerProps["value"] | RangePickerProps["value"],
        dateString: [string, string]
    ) => {
        setCheckIn(dateString[0])
        setCheckOut(dateString[1])

    };

    const handleSelectCity = (value: string) => {
        setSelectCity(value)

    }

    console.log('123')

    return (
        <div className="overflow-hidden">
            <div className="border-left select-none mb-28 ">
                <Header auth={auth} user={user} />
                <div className="h-[906px] relative" >
                    <div className="absolute top-1/2 left-10 -translate-y-1/2 bg-teal-600 rounded-full z-10 cursor-pointer items-center" onClick={prevSlide}>
                        <ChevronLeftIcon className="h-12 w-12 text-white " />
                    </div>
                    <div className="w-full h-full object-center bg-cover bg-no-repeat bg-center transition-all duration-500 " style={{ backgroundImage: `url(${slider[currentIndex].url})` }} />
                    <div className="absolute top-0 w-full h-full bg-neutral-800 opacity-30">
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center ">
                        <h1 className="text-5xl mb-5 font-medium" >Enjoy Your Dream Vacation</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione similique porro aperiam. Accusantium tempora eveniet explicabo. Officia hic vel cum quia tempora unde sit quod eligendi reiciendis? Amet, aliquam laudantium.</p>
                    </div>

                    <div className="absolute top-1/2 right-10 -translate-y-1/2 bg-teal-600 rounded-full z-10 cursor-pointer" onClick={nextSlide}>
                        <ChevronRightIcon className="h-12 w-12 text-white" />
                    </div>


                </div>
                <div className="relative font-serif ">
                    <img className="absolute -top-16 " src="https://htmldesigntemplates.com/html/travelin/images/shape-pat.png" alt="" />
                    <div className="absolute -top-16 flex h-[143px] rounded bg-white left-1/2 -translate-x-1/2 w-[1300px] justify-around text-lg
                             text-zinc-700 items-center drop-shadow-xl xl:w-full">
                        <div className="flex flex-col ml-2">
                            <label className="mb-3 text-center ">Location</label>
                            <Select
                                showSearch
                                size='large'
                                className="w-[150px]"
                                placeholder="Choose"
                                onChange={handleSelectCity}
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
                        <div className="flex flex-col ml-2">
                            <div className="flex justify-around mb-3">
                                <p>Checkin</p>
                                <p>Checkout</p>
                            </div>
                            <RangePicker disabledDate={disabledDate} size="large"
                                onChange={onChange}
                                format="DD-MM-YYYY"
                            />
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
                        <div className="w-14 h-14 bg-teal-600 rounded-xl flex justify-center items-center hover:bg-[#4096ff] transition-all duration-150" onClick={handleSearch} >
                            <Link href='/ListHotel'  >

                                <MagnifyingGlassIcon className="h-6 w-6 text-white" />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
            <div className="h-max my-36">
                <div className="mt-32 flex flex-col items-center">
                    <h1 className="text-[30px] text-[#fdc703]">Top Destinations</h1>
                    <p className="text-[40px] font-medium mb-2">Explore <span className="text-teal-600">Top Destination</span></p>
                    <p className="w-[900px] lg:w-[500px] text-center text-[#6d6d6d] mb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga laboriosam dolores consequuntur unde rerum eligendi, aspernatur tempora nesciunt ea beatae quaerat.</p>
                    <div className="flex w-[1300px] justify-between xl:w-full xl:justify-evenly">
                        <div className="flex flex-col " >
                            <div className="relative group">

                                <h1 className="absolute text-[30px] text-white left-1/2 -top-5 -translate-y-1/2 -translate-x-1/2 group-hover:top-1/2 z-10 transition-all duration-300">Hà Nội</h1>
                                <img src='https://reviewvilla.vn/wp-content/uploads/2022/05/kinh-nghiem-du-lich-ha-noi-5-1024x577.jpg' className="w-[734px] lg:w-[390px] 2xl:w-[570px] rounded-[20px] hover:scale-105 transition-all duration-300"></img>

                            </div>

                            <div className="flex justify-between mt-[30px] lg:mt-[10px] lg:w-[390px] 2xl:w-[570px]  2xl:mt-[20px]">
                                <div className="relative group">
                                    <h1 className="absolute text-[30px]  lg:text-[20px] -z-10  text-white left-1/2 -top-5 -translate-y-1/2 -translate-x-1/2 group-hover:top-1/2 group-hover:z-10 transition-all duration-300">Sài gòn</h1>
                                    <img src='https://i.doanhnhansaigon.vn/2020/04/29/thumbnailsaigon-1588134021_750x0.jpg' className="w-[352px] lg:w-[190px] 2xl:w-[270px] h-full rounded-[20px] hover:scale-105 transition-all duration-300"></img>
                                </div>

                                <div className="relative group">
                                    <h1 className="absolute text-[30px] lg:text-[20px] -z-10 text-white left-1/2 -top-5 -translate-y-1/2 -translate-x-1/2 group-hover:top-1/2 group-hover:z-10 transition-all duration-300">Đà Lạt</h1>
                                    <img src='https://vnn-imgs-f.vgcloud.vn/2021/09/19/17/c36d4bf878038e5dd712.jpg' className="w-[352px] lg:w-[190px] 2xl:w-[270px] rounded-[20px] hover:scale-105 transition-all duration-300" ></img>
                                </div>
                            </div>
                        </div>

                        <div className="w-[520px] relative group z-10 lg:w-[300px] 2xl:w-[430px]">
                            <h1 className="absolute text-[30px] text-white left-1/2 -top-5 -translate-y-1/2 -translate-x-1/2 group-hover:top-1/2 z-10 transition-all duration-300 ">Đà Nẵng</h1>
                            <img src='https://static.vinwonders.com/2022/05/OpAU9ZpU-du-lich-da-nang-thang-9-2.jpeg' className="h-full  rounded-[20px]  hover:scale-105 transition-all duration-300"></img>
                        </div>


                    </div>
                </div>
                <div className=" pb-8  flex flex-col items-center bg-[#f1f1f1]" >
                    <div className="w-full h-[250px] xl:h-[150px] " style={{ backgroundImage: `url(https://htmldesigntemplates.com/html/travelin/images/shape8.png) ` }}></div>
                    <div className="w-[1300px] xl:w-[800px]  pl-[10px] xl:text-center mb-8">
                        <h1 className="text-[30px] text-[#fdc703]">Top Pick</h1>
                        <p className="text-[40px] font-medium mb-2">Best <span className="text-teal-600">Tour Packages</span></p>
                        <p className="w-[600px] xl:w-[400px] text-[#6d6d6d] xl:inline-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga laboriosam dolores consequuntur unde rerum eligendi</p>
                    </div>
                    <Resizable></Resizable>
                </div>
                <div className=" py-32 xl:py-20 flex justify-center ">
                    <div className="w-[1300px] flex z-10 justify-between  2xl:w-[1000px] lg:w-[800px] xl:flex-col xl:items-center ">
                        <h1 className="text-[28px] xl:mb-5  w-[350px] ml-[10px] italic uppercase font-medium underline underline-offset-4 decoration-4 decoration-teal-600">What makes our hotels best than others?</h1>
                        <div className="flex ">
                            <div className="flex w-1/3 p-5 border-[1px] rounded-lg mx-3 group hover:before:w-full hover:before:h-full hover:before:opacity-100 
                                relative overflow-hidden before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 hover:before:visible
                                before:-translate-x-1/2 before:bg-[#4096ff] before:w-0 before:h-0  before:transition-all before:duration-300 
                                before:-z-10 before:opacity-0 before:invisible
                                lg:bg-[#4096ff] 
                            ">
                                <div><HandThumbUpIcon className="h-10 w-10 text-[#4096ff] bg-[#4096ff3d] p-2 rounded-[50%] inline-flex group-hover:bg-white lg:bg-white " /></div>
                                <div className="ml-3 ">
                                    <h1 className="font-medium text-[20px] mb-1 group-hover:text-white duration-1000 lg:text-white">Hassle free Booking</h1>
                                    <p className="text-[#6d6d6d] group-hover:text-white lg:text-white">Book hotels from our website without ant hassle</p>
                                </div>
                            </div>
                            <div className="flex w-1/3 p-5 border-[1px] rounded-lg mx-3 group hover:before:w-full hover:before:h-full hover:before:opacity-100 
                                relative overflow-hidden before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 hover:before:visible
                                before:-translate-x-1/2 before:bg-[#FF8C32] before:w-0 before:h-0  before:duration-300 
                                before:-z-10 before:opacity-0 before:invisible lg:bg-[#FF8C32]">
                                <div><StarIcon className="h-10 w-10 text-[#FF8C32] bg-[#ff8b323d] p-2 rounded-[50%] inline-flex group-hover:bg-white lg:bg-white" /></div>
                                <div className="ml-3">
                                    <h1 className="font-medium text-[20px] mb-1 group-hover:text-white duration-1000 lg:text-white">28,000 Reviews</h1>
                                    <p className="text-[#6d6d6d] group-hover:text-white lg:text-white">Book hotels from our website withiyt any hassle</p>
                                </div>
                            </div>
                            <div className="flex w-1/3  p-5 border-[1px] rounded-lg mx-3 group hover:before:w-full hover:before:h-full hover:before:opacity-100 
                                relative overflow-hidden before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 hover:before:visible
                                before:-translate-x-1/2 before:bg-[#019267] before:w-0 before:h-0  before:transition-all before:duration-300 
                                before:-z-10 before:opacity-0 before:invisible lg:bg-[#019267]">
                                <div><PhoneIcon className="h-10 w-10 text-[#019267] bg-[#0192673d] p-2 rounded-[50%] inline-flex group-hover:bg-white lg:bg-white" /></div>
                                <div className="ml-3">
                                    <h1 className="font-medium text-[20px] mb-1 group-hover:text-white duration-1000 lg:text-white ">24/7 Support</h1>
                                    <p className="text-[#6d6d6d] group-hover:text-white lg:text-white">Book hotels from our website without any hassle</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-20 flex justify-center bg-[#dbdbdb47] xl:bg-white py-10 xl:mt-0">
                    <div className="w-[1300px] flex flex-col xl:w-[800px]">
                        <h1 className="text-[28px] ml-[10px] text-center italic uppercase font-medium underline underline-offset-4 decoration-4 decoration-teal-600">Thoughts from our guests</h1>
                        <div className="mt-10">
                            <SliderGuests />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>


    )
}
export default Home






