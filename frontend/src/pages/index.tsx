import { use, useEffect, useState } from "react";
import Header from "../component/Header"
import { ChevronRightIcon, ChevronLeftIcon,MapPinIcon,PlusCircleIcon,MinusCircleIcon} from "@heroicons/react/24/outline";
import next from "next/types";




export default function Home() {
    
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

    console.log(currentIndex)

    return(
        <div className="w-full border-left ">
            <Header/>
            <div className="h-[906px] relative" >
                <div className="absolute top-1/2 left-10 -translate-y-1/2 bg-teal-600 rounded-full z-10 cursor-pointer"  onClick={prevSlide}>
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
            <div className="relative -top-16">
                <img className="absolute" src="https://htmldesigntemplates.com/html/travelin/images/shape-pat.png" alt="" />
                <div className="absolute flex justify-center w-full items-center ">
                    <div className="flex py-7 px-7 rounded  border-2 bg-white drop-shadow-md ">
                            <MapPinIcon className="h-7 w-7 text-gray-500" />
                            <h1 className="text-lg">Find Your Holidays</h1>
                    </div>
                    <div className="flex">
                        <div>
                            <select name="city" id="city">
                                 <option value="Hà Nội">Hà Nội</option>
                                 <option value="Đà Nẵng">Đà Nẵng</option>
                                 <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                                 <option value="Hải Phòng">Hải Phòng</option>
                                 <option value="Phú Quốc">Phú Quốc</option>
                                 <option value="Đà Lạt">Đà Lạt</option>
                            </select>
                        </div>
                        <div>
                            <p>Check In</p>
                            <input type="date" name="date" id="date" />
                        </div>
                        <div>
                            <p>Check In</p>
                            <input type="date" name="date" id="date" />
                        </div>
                        <div>
                                <span>ADUTS</span>
                                <div>
                                    <MinusCircleIcon className="h-6 w-6 text-gray-500" />
                                    <p>0</p>
                                    <PlusCircleIcon className="h-6 w-6 text-gray-500" />
                                </div>
                        </div>
                        <div>
                            <span>CHILDREN</span>
                                <div>
                                    <MinusCircleIcon className="h-6 w-6 text-gray-500" />
                                    <p>0</p>
                                    <PlusCircleIcon className="h-6 w-6 text-gray-500" />
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )   
}
