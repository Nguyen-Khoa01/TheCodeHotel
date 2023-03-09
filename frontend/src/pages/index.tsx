import { use, useEffect, useState,useRef } from "react";
import Header from "../component/Header"
import { ChevronRightIcon, ChevronLeftIcon,MapPinIcon,PlusCircleIcon,MinusCircleIcon,MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import next from "next/types";
import type { FC } from "react";
import SelectComponent from '../component/Select'
import { DatePicker, Space ,Button} from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { Col, Row } from 'antd';
import SliderComponent from "@/component/Slider";

const Home:React.FC =()=> {
    
    const slider = [
        {
            url:'https://cdnimg.vietnamplus.vn/uploaded/fsmsr/2020_10_07/exterior_3.jpg'
        },
        {
            url:'https://kconceptvn.com/wp-content/uploads/2020/04/hotel-photography-chup-anh-khach-san-resortNovotel-phu-quoc-resort-02.jpg'
        },
        {
            url:'https://images7.alphacoders.com/362/362619.jpg'
        },
        {
            url:'https://wallpaperaccess.com/full/2690549.jpg'
        },
        {
            url:'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?cs=srgb&dl=pexels-konstantinos-eleftheriadis-2034335.jpg&fm=jpg'
        },
    ]
    
    const[currentIndex,setCurrentIndex] = useState(0)

    const prevSlide = ()=>{  
            setCurrentIndex((currentIndex)=>currentIndex === 0 ? slider.length-1 : currentIndex-1)
    }

    const nextSlide =()=>{
        setCurrentIndex((currentIndex)=>currentIndex ===slider.length-1 ? 0 : currentIndex +1)
    }

    useEffect(()=>{
            const slideInterval =setInterval(nextSlide,5000)
            return ()=> clearInterval(slideInterval)
    },[])

    //search

    const [numberAduts,setNumberAduts] = useState(0)
    const [numberChilren,setNumberChilren] = useState(0)
       

    return(

      <Row>
        <Col span={24}>
            <div className="w-full border-left select-none overflow-hidden ">
                <Header/>
                <div className="h-[906px] relative" >
                    <div className="absolute top-1/2 left-10 -translate-y-1/2 bg-teal-600 rounded-full z-10 cursor-pointer items-center"  onClick={prevSlide}>
                        <ChevronLeftIcon className="h-12 w-12 text-white "/>
                    </div>
                    <div className="w-full h-full object-center bg-cover bg-no-repeat bg-center transition-all duration-500 " style={{backgroundImage: `url(${slider[currentIndex].url})`}} />
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
                    <div className="absolute -top-16 flex h-32 rounded bg-white left-1/2 -translate-x-1/2 w-8/12 justify-around text-lg text-zinc-700 items-center drop-shadow-xl">
                            <div className="flex flex-col ml-2">
                                <label className="mb-3 text-center ">Location</label>
                                <SelectComponent/>
                            </div>
                            <div className="flex flex-col ml-2">
                                <p className="mb-3 text-center">Check In</p>
                                <Space direction="vertical" size={12}>
                                        <DatePicker size="large"/>
                                </Space>
                            </div>
                            <div className="flex flex-col ml-2">
                                <p className="mb-3 text-center ">Check Out</p>
                                <Space direction="vertical">
                                        <DatePicker size="large"/>
                                </Space>
                            </div>
                            <div className="flex flex-col ml-2 ">
                                    <span className="text-center">Aduts</span>
                                    <div className="hover:border-[#4096ff] flex w-36 h-10 justify-around mt-3 items-center border-[1px] rounded-lg border-[#d9d9d9] ">
                                        <MinusCircleIcon onClick={()=>setNumberAduts(prev =>(numberAduts===0 ? prev : prev-1))} className="h-6 w-6 text-gray-500" />
                                        <p>{numberAduts}</p>
                                        <PlusCircleIcon  onClick={()=>setNumberAduts(prev =>prev +1)}className="h-6 w-6 text-gray-500" />
                                    </div>
                            </div>
                            <div className="flex flex-col ml-2">
                                    <span className="text-center">Chilren</span>
                                    <div className="flex w-36 h-10 justify-around mt-3 items-center border-[1px] rounded-lg border-[#d9d9d9] hover:border-[#4096ff]">
                                        <MinusCircleIcon onClick={()=>setNumberChilren(prev =>(numberChilren===0 ? prev : prev-1))} className="h-6 w-6 text-gray-500" />
                                        <p>{numberChilren}</p>
                                        <PlusCircleIcon onClick={()=>setNumberChilren(prev =>prev +1)} className="h-6 w-6 text-gray-500" />
                                    </div>
                            </div>
                            <div className="w-14 h-14 bg-teal-600 rounded-xl flex justify-center items-center hover:bg-[#4096ff] transition-all duration-150">
                                <MagnifyingGlassIcon className="h-6 w-6 text-white" />
                            </div>
                        
                    </div>
                </div>

                <div className="mt-20 mb-40 ">
                    <div className="flex flex-col items-center relative ">
                        <h1>Famous places</h1>
                        <ChevronLeftIcon className="h-12 w-12 text-black absolute left-60 top-1/2 -translate-y-1/2" />
                        <div className="flex w-4/6 overflow-hidden ">
                                {
                                    slider.map((item,index)=>(     
                                            <img key={index} src={item.url} className="inline-block w-72 h-96 mx-4 rounded-xl"/> 
                                   
                                    ))} 

                        </div>
                        <ChevronRightIcon className="h-12 w-12 text-black absolute right-60 top-1/2 -translate-y-1/2" />
                               
                        
                    </div>
                    <div></div>
                </div>

            </div>
        </Col>

      </Row>  
        

    )   
}
export default Home




// 1px solid #d9d9d9