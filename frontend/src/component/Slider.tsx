import React, { Component } from "react";
import Slider from "react-slick";
import { ChevronRightIcon, ChevronLeftIcon,MapPinIcon,PlusCircleIcon,MinusCircleIcon,MagnifyingGlassIcon} from "@heroicons/react/24/outline";

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

export default class Resizable extends Component {
  state = {
    display: true,
    width: 600
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Resizable Collapsible </h2>
        <button
          className="button"
          onClick={() =>
            this.setState({
              width: this.state.width + 100
            })
          }
        >
          {" "}
          increase{" "}
        </button>
        <button
          className="button"
          onClick={() =>
            this.setState({
              width: this.state.width - 100
            })
          }
        >
          {" "}
          decrease{" "}
        </button>
        <button
          className="button"
          onClick={() =>
            this.setState({
              display: !this.state.display
            })
          }
        >
          {" "}
          toggle{" "}
        </button>
        <div
          style={{
            width: this.state.width + "px",
            display: this.state.display ? "block" : "none"
          }}
        >
          <Slider {...settings}>
                        <h1>Famous places</h1>
                        <ChevronLeftIcon className="h-12 w-12 text-black absolute left-60 top-1/2 -translate-y-1/2" />
                        <div className="flex w-4/6 overflow-hidden ">
                                {
                                    slider.map((item,index)=>(     
                                            <img key={index} src={item.url} className="inline-block w-72 h-96 mx-4 rounded-xl"/> 
                                   
                                    ))} 

                        </div>
                        <ChevronRightIcon className="h-12 w-12 text-black absolute right-60 top-1/2 -translate-y-1/2" />
          </Slider>
        </div>
      </div>
    );
  }
}