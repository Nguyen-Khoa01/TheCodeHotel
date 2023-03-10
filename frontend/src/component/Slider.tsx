import React, { Component } from "react";
import Slider from "react-slick";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";


function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
  const { className, style, onClick } = props;
  return (
    <ChevronRightIcon
      className={className}
      style={{ ...style, display: "block", color: '#ffffff', width: 48, height: 48, right: -60, background: '#0d9488', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
  const { className, style, onClick } = props;
  return (
    <ChevronLeftIcon
      className={className}
      style={{ ...style, display: "block", color: '#ffffff', width: 48, height: 48, left: -60, background: '#0d9488', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}
export default class Resizable extends Component {
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

    const slider = [
      {
        url: 'https://cdnimg.vietnamplus.vn/uploaded/fsmsr/2020_10_07/exterior_3.jpg',
        city: 'Đà nẵng',
        hotel: 'Mường Thanh',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price: '$40'
      },
      {
        url: 'https://kconceptvn.com/wp-content/uploads/2020/04/hotel-photography-chup-anh-khach-san-resortNovotel-phu-quoc-resort-02.jpg',
        city: 'Đà nẵng',
        hotel: 'Mường Thanh',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price: '$40'
      },
      {
        url: 'https://images7.alphacoders.com/362/362619.jpg',
        city: 'Đà nẵng',
        hotel: 'Mường Thanh',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price: '$40'
      },
      {
        url: 'https://wallpaperaccess.com/full/2690549.jpg',
        city: 'Đà nẵng',
        hotel: 'Mường Thanh',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price: '$40'
      },
      {
        url: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?cs=srgb&dl=pexels-konstantinos-eleftheriadis-2034335.jpg&fm=jpg',
        city: 'Đà nẵng',
        hotel: 'Mường Thanh',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price: '$40'
      },
    ]

    return (
      <div className="w-[1300px]">
        <Slider {...settings} >
          {
            slider.map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-[20px]">
                <div className="overflow-hidden ">
                  <img className="h-[275px] group-hover:scale-110 transition-all duration-500" src={item.url}></img>
                </div>
                <div className="bg-white rounded-b-[20px] pl-4 relative">
                  <h1 className="text-[22px] pt-8 text-teal-600 font-medium">{item.city}</h1>
                  <h1 className="text-[26px] font-medium py-3">{item.hotel} </h1>
                  <div className="flex">
                    <StarIcon className="h-6 w-6 text-yellow-400" />
                    <StarIcon className="h-6 w-6 text-yellow-400" />
                    <StarIcon className="h-6 w-6 text-yellow-400" />
                    <StarIcon className="h-6 w-6 text-yellow-400" />
                  </div>
                  <p className="w-[300px] py-3 text-[#6d6d6d]">{item.des}</p>
                  <div className="pb-4">
                    <span className="text-teal-600 text-[30px] mr-2 font-medium">{item.price}</span>
                    <span className="text-[#6d6d6d]">| Day</span>
                  </div>
                  <div className="h-1 bg-teal-600 absolute bottom-0 w-0 group-hover:w-full transition-all duration-500">

                  </div>
                </div>
              </div>

            ))
          }
        </Slider>
      </div>
    );
  }
}