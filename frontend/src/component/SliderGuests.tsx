import React, { Component } from "react";
import Slider from "react-slick";
import { ChevronRightIcon, ChevronLeftIcon, HomeIcon } from "@heroicons/react/24/outline";
import { StarIcon, HeartIcon, BuildingLibraryIcon } from "@heroicons/react/24/solid";
import { text } from "stream/consumers";


function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <ChevronRightIcon
            className={className}
            style={{ ...style, display: "block", color: '#ffffff', width: 30, height: 30, top: -60, right: 10, backgroundColor: '#0d9488', borderRadius: '50%' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <ChevronLeftIcon
            className={className}
            style={{ ...style, display: "block", color: '#ffffff', width: 30, height: 30, top: -60, left: 1200, background: '#0d9488', borderRadius: '50%' }}
            onClick={onClick}
        />
    );
}
export default class SliderGuests extends Component {
    state = {
        display: true,
        width: 1300
    };

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 900,
            autoplay: false,
            autoplaySpeed: 3000,
            cssEase: "linear",
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
            prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />
        };

        const Guests = [
            {
                avatar: 'https://thptvinhthang.edu.vn/wp-content/uploads/2023/01/1674098351_405_150-Hinh-Anh-Avatar-Nam-Dep-Trai-Chat-Ca-Tinh.jpg',
                city: 'Đà Nẵng',
                name: 'Guy Kahavert',
                hotel: 'Homeney Stay,Hà Nội',
                des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit',
            },
            {
                avatar: 'https://thptvinhthang.edu.vn/wp-content/uploads/2023/01/1674098351_405_150-Hinh-Anh-Avatar-Nam-Dep-Trai-Chat-Ca-Tinh.jpg',
                city: 'Hà Nội ',
                name: 'Guy Kahavert',
                hotel: 'Mường Thanh,Đà Nẵng',
                des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            },
            {
                avatar: 'https://thptvinhthang.edu.vn/wp-content/uploads/2023/01/1674098351_405_150-Hinh-Anh-Avatar-Nam-Dep-Trai-Chat-Ca-Tinh.jpg',
                city: 'Hà Nội ',
                name: 'Guy Kahavert',
                hotel: 'Mường Thanh,Đà Nẵng',
                des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            },
            {
                avatar: 'https://thptvinhthang.edu.vn/wp-content/uploads/2023/01/1674098351_405_150-Hinh-Anh-Avatar-Nam-Dep-Trai-Chat-Ca-Tinh.jpg',
                city: 'Hà Nội ',
                name: 'Guy Kahavert',
                hotel: 'Mường Thanh,Đà Nẵng',
                des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            },
            {
                avatar: 'https://thptvinhthang.edu.vn/wp-content/uploads/2023/01/1674098351_405_150-Hinh-Anh-Avatar-Nam-Dep-Trai-Chat-Ca-Tinh.jpg',
                city: 'Hà Nội ',
                name: 'Guy Kahavert',
                hotel: 'Mường Thanh,Đà Nẵng',
                des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            },
        ]

        return (
            <div className="w-[1300px] xl:w-[750px] ">
                <Slider {...settings} >
                    {
                        Guests.map((item, index) => (
                            <div key={index} className="border-2 rounded-lg p-5 lg:p-1 lg:mx-1 2xl:p-2 2xl:mx-2 hover:border-teal-600 duration-300 border-[#f7f7f7] ">

                                <div className="flex justify-between items-center">
                                    <img src={item.avatar} width='60' height='60' className="lg:w-[40px] lg:h-[40px] 2xl:w-[50px] 2xl:h-[50px]" />
                                    <div>
                                        <h1 className="font-medium text-[18px] lg:text-[14px]">{item.name}</h1>
                                        <p className="text-[#6d6d6d] ">{item.city}</p>
                                    </div>
                                    <div className="flex w-[160px] lg:w-[100px] text-gray-500-400">
                                        <BuildingLibraryIcon className="h-9 w-9 text-[#02a2ff]" />
                                        <p className="ml-2">{item.hotel}</p>
                                    </div>

                                </div>
                                <p className="px-3 text-ellipsis mb-2 mt-4 text-[#6d6d6d] h-12 overflow-hidden">{item.des}</p>
                            </div>

                        ))
                    }
                </Slider>
            </div>
        );
    }
}