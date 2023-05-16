import { use, useCallback, useEffect, useMemo, useState } from "react";

import Header from "@/component/Header";
import Footer from "@/component/Footer";
import Title from "@/component/Title";
import Rooms from "@/assets/images/fakeData/Rooms";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import {
  MapPinIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { StarIcon, UserIcon } from "@heroicons/react/24/solid";
import { DatePicker, Select } from "antd";
import { TbAirConditioning } from "react-icons/tb";
import { BsWifi, BsCup, BsFlower1, BsDisplay } from "react-icons/bs";
import { RiParkingBoxLine } from "react-icons/ri";
import { MdSmokeFree } from "react-icons/md";
import { BiSwim } from "react-icons/bi";
import dayjs from "dayjs";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";
import Link from "next/link";
import { useRouter } from "next/router";
const { RangePicker } = DatePicker;
interface Price {
  price: number;
  value: number;
  key: number;
}
interface item {
  Adutls: number;
  Children: number;
  City: string;
  checkIn: string;
  checkOut: string;
  rooms: number;
}
type AppProps = {
  totalRoom: string;
};
interface room {
  nameRoom: string;
  numberRoom: number[];
  price: number;
}
interface category {
  title: string;
}
export default function Detail() {
  const [numberAduts, setNumberAduts] = useState(0);
  const [numberChilren, setNumberChilren] = useState(0);
  const [checkin, setCheckin] = useState("");
  const [city, setCity] = useState("");
  const [checkout, setCheckout] = useState("");
  const [numberRooms, setNumberRooms] = useState(0);
  const [item, setItem] = useState<Price[]>([]);
  const [totalRoom, setTotalRoom] = useState(0);

  const [hotel, sethotel] = useState({
    id: 0,
    name: "",
    address: "",
    avatar: "",
    city: "",
    categories: [],
    rooms: [],
    desreption: "",
    price: 0,
    starRating: 0,
  });

  const [sreach, setSreach] = useState<item>({
    Adutls: 0,
    Children: 0,
    City: "",
    checkIn: "",
    checkOut: "",
    rooms: 0,
  });

  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`http://localhost:3001/hotels/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        sethotel(await res.json());
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    return current && current < dayjs().endOf("day");
  };

  const handleChange = (price: number, value: string, key: number) => {
    const newItem = item.map((item) => item.key);

    setItem((prev) => [
      ...prev,
      {
        price: Number(price) * Number(value),
        value: Number(value),
        key: key,
      },
    ]);

    if (newItem.includes(key)) {
      const newitem = item.filter((item) => item.key !== key);
      setItem([
        ...newitem,
        {
          price: Number(price) * Number(value),
          value: Number(value),
          key: key,
        },
      ]);
    }
  };

  const handleChangeRangePicker = (
    dateString: DatePickerProps["value"] | RangePickerProps["value"],
    value: [string, string]
  ) => {
    setCheckin(value[0]);
    setCheckout(value[1]);
    console.log(value[0]);
    console.log(dateString);
  };

  useEffect(() => {
    const localStore = JSON.parse(localStorage.getItem("Search") || "");
    setNumberChilren(localStore.Children);
    setNumberAduts(localStore.Adutls);
    setCheckin(localStore.checkIn);
    setCity(localStore.City);
    setCheckout(localStore.checkOut);
    setNumberRooms(localStore.rooms);
  }, []);

  useEffect(() => {
    sreach.Children = numberChilren;
    sreach.Adutls = numberAduts;
    sreach.City = city;
    sreach.checkIn = checkin;
    sreach.checkOut = checkout;
    sreach.rooms = numberRooms;
    localStorage.setItem("Search", JSON.stringify(sreach));
  }, [numberChilren, numberAduts, city, checkin, checkout, numberRooms]);

  const Total = useMemo(() => {
    const newTotal = item.reduce((a, b) => {
      return a + b.price;
    }, 0);

    return newTotal;
  }, [item]);
  useEffect(() => {
    const TotalRoom = item.reduce((a, b) => {
      return a + b.value;
    }, 0);
    setTotalRoom(TotalRoom);
  }, [item]);

  const data = useMemo(() => {
    const newData = {
      numberAduts,
      numberChilren,
      checkout,
      checkin,
      Total,
      totalRoom,
      hotel: hotel.id,
    };
    return newData;
  }, [numberAduts, numberChilren, numberRooms, totalRoom]);

  console.log(hotel.rooms);

  return (
    <div>
      <Header AppProps={totalRoom} />
      <div className=" bg-[#EAECF0] py-[30px] grid grid-cols-6 xl:grid-cols-1 mt-[96px]">
        <div
          className="col-start-2 col-span-4 flex justify-between px-5 
                pt-5 pb-[25px] bg-white rounded-lg xl:col-start-1 2xl:mx-[35px] 
                lg:max-w-[720px] 2md:w-full 2md:mx-auto md:max-w-[540px]"
        >
          <h1 className="text-[24px] leading-[32px] font-light"></h1>
          <div className="flex text-gray-400 items-center md:text-[15px]">
            <p>Home</p>
            <ChevronRightIcon className="h-4 w-4 text-gray-400" />
            <p>ListHotel-{id}</p>
          </div>
        </div>
      </div>
      <div className="bg-[#F2F4F7] select-none">
        <div className="max-w-[1300px] mx-auto grid grid-cols-3 gap-x-6 2xl:mx-[30px] 2lg:grid-cols-1 2xl:mb-[50px] lg:max-w-[720px]  ">
          <div className="col-span-2 bg-white shadow-xl px-[20px] pt-[20px] rounded-xl my-8">
            <div className="grid grid-cols-2 gap-6">
              <img
                className="col-span-2 w-full rounded-xl"
                src="https://bytesed.com/tf/beyond-hotel/beyond_hotel/assets/img/single-page/details_main.jpg"
              ></img>
              <img
                className="w-full rounded-xl"
                src="https://bytesed.com/tf/beyond-hotel/beyond_hotel/assets/img/single-page/details_1.jpg"
              ></img>
              <img
                className="w-full rounded-xl"
                src="https://bytesed.com/tf/beyond-hotel/beyond_hotel/assets/img/single-page/details_2.jpg"
              ></img>
            </div>
            <div className="">
              <div className="border-b-[1px] border-gray-300 pt-[25px] px-[20px] pb-[20px]">
                <div className="flex items-center rounded-md bg-[#0d948847] w-[100px] text-[18px] py-1 justify-center text-teal-600">
                  <StarIcon className="h-4 w-4" />
                  <p className="mx-1">{hotel.starRating}</p>
                  <p>(380)</p>
                </div>
                <h1 className="text-[22px] my-2">{hotel.name}</h1>
                <div className="flex  items-center">
                  <MapPinIcon className="h-6 w-6 text-gray-500" />
                  <p className="text-[18px] text-[#333] lg:text-[15px]">
                    {hotel.address}
                  </p>
                </div>
              </div>
              <div className=" flex px-[20px] text-[#444] items-center py-[10px]  justify-between max-w-[600px]">
                {hotel.categories.map((item: category, key) => (
                  <div key={key} className="flex items-center text-[15px]">
                    <p>{item.title}</p>
                  </div>
                ))}
              </div>
              <div className="flex px-[20px] pt-[15px] border-t-[1px] border-gray-300 pb-[25px] justify-between 2lg:flex-col md:flex-row">
                <div>
                  <h1 className="text-[22px] font-medium text-teal-600">
                    ${hotel.price}{" "}
                    <span className="text-[16px] font-normal text-teal-600">
                      /Night
                    </span>
                  </h1>

                  <div className="flex text-[#333] ">
                    <p>2 Bed,</p>
                    <p className="mx-2">2 Adult,</p>
                    <p>2 Children</p>
                    {/* <p>{hotel.rooms}:Room</p> */}
                  </div>
                </div>
                <div
                  className="bg-teal-600 group cursor-pointer  rounded-md hover:bg-white hover:border-[2px]
                                             hover:border-teal-600 duration-700 border-[2px] xl:w-[150px] xl:mt-2"
                >
                  <p className="p-4 text-white group-hover:text-teal-600 lg:p-3">
                    Reserve Now
                  </p>
                </div>
              </div>
              <div>
                <div className="flex text-[18px] border-b-[1px] border-[#ccc] relative ">
                  <p className="pr-2 py-4 text-teal-600">About</p>
                  <p className="pl-2 py-4 text-gray-500">Reviews</p>
                  <div className="h-1 absolute bottom-0 w-[58px] bg-teal-600"></div>
                </div>
                <div className="my-5">
                  <p className="text-[#aaa]">
                    One morning, when Gregor Samsa woke from troubled dreams, he
                    found himself transformed in his bed into a horrible vermin.
                    He lay on his armour-like back.
                    <br />
                    <br />
                    He lifted his head a little he could see his brown belly,
                    slightly domed and divided by arches into stiff sections.
                    The bedding was hardly able to cover it and seemed ready to
                    slide off any moment. His many legs, pitifully thin compared
                    with the size of the rest of him.
                    <br />
                    <br />
                    So many legs pitifully thin compared with the size of the
                    rest of him waved about helplessly as he looked What's
                    happened to me.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="bg-white shadow-xl px-[20px] py-[20px] rounded-xl my-8 ">
              <div className="flex flex-col ml-2 mb-2">
                <div className="flex justify-around mb-3">
                  <p>Checkin</p>
                  <p>Checkout</p>
                </div>
                <RangePicker
                  size="large"
                  disabledDate={disabledDate}
                  format="DD/MM/YYYY"
                  value={[
                    dayjs(checkin, "DD/MM/YYYY"),
                    dayjs(checkout, "DD/MM/YYYY"),
                  ]}
                  onChange={handleChangeRangePicker}
                />
              </div>
              <div className="flex ml-2 items-center justify-between">
                <span className="text-center">Aduts</span>
                <div className="hover:border-[#4096ff] flex w-[150px] h-10 justify-around mt-3 items-center border-[1px] rounded-lg border-[#d9d9d9]">
                  <MinusCircleIcon
                    onClick={() =>
                      setNumberAduts((prev: number) =>
                        numberAduts === 0 ? prev : prev - 1
                      )
                    }
                    className="h-6 w-6 text-gray-500"
                  />
                  <p>{numberAduts}</p>
                  <PlusCircleIcon
                    onClick={() => setNumberAduts((prev: number) => prev + 1)}
                    className="h-6 w-6 text-gray-500"
                  />
                </div>
              </div>
              <div className="flex  ml-2 items-center justify-between">
                <span className="text-center">Chilren</span>
                <div className="flex w-[150px] h-10 justify-around mt-3 items-center border-[1px] rounded-lg border-[#d9d9d9] hover:border-[#4096ff]">
                  <MinusCircleIcon
                    onClick={() =>
                      setNumberChilren((prev: number) =>
                        numberChilren === 0 ? prev : prev - 1
                      )
                    }
                    className="h-6 w-6 text-gray-500"
                  />
                  <p>{numberChilren}</p>
                  <PlusCircleIcon
                    onClick={() => setNumberChilren((prev: number) => prev + 1)}
                    className="h-6 w-6 text-gray-500"
                  />
                </div>
              </div>
              <div className="flex  ml-2 items-center justify-between">
                <span className="text-center">Room</span>
                <div className="flex w-[150px] h-10 justify-around mt-3 items-center border-[1px] rounded-lg border-[#d9d9d9] hover:border-[#4096ff]">
                  <MinusCircleIcon
                    onClick={() =>
                      setNumberRooms((prev: number) =>
                        numberRooms === 0 ? prev : prev - 1
                      )
                    }
                    className="h-6 w-6 text-gray-500"
                  />
                  <p>{numberRooms}</p>
                  <PlusCircleIcon
                    onClick={() => setNumberRooms((prev: number) => prev + 1)}
                    className="h-6 w-6 text-gray-500"
                  />
                </div>
              </div>
            </div>
            <div className="my-4 2lg:flex justify-between 2lg:items-center">
              <div className="w-full h-full 2lg:mr-4">
                {hotel.rooms.map((item: room, key) => (
                  <div
                    key={key}
                    className="col-span-2 bg-white shadow-xl px-[20px] pt-[20px] pb-[10px] rounded-xl 2lg:w-full border-b-[1px] border-[#f1f1f1] "
                  >
                    <div className="flex  justify-between items-center">
                      <div>
                        <p className="w-[120px] mb-1">{item.nameRoom}</p>
                      </div>

                      <div className="flex flex-wrap w-[32px]">
                        <UserIcon className="h-4 w-4 text-gray-500" />
                        <UserIcon className="h-4 w-4 text-gray-500" />
                      </div>
                      <p className="text-teal-600 text-[20px]">
                        {item.price}$
                        <span className="text-teal-400 text-[16px]">
                          /Night
                        </span>
                      </p>
                      <div>
                        <h1 className="text-[#333] text-[14px]">Phòng</h1>
                        <Select
                          defaultValue="0"
                          style={{ width: 90 }}
                          onChange={(value) =>
                            handleChange(item.price, value, key)
                          }
                          options={item.numberRoom.map((item1, key) => ({
                            value: item1,
                            label: `${item1} ${item1 * Number(item.price)}$`,
                          }))}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white shadow-xl px-[16px] pt-[20px] pb-[10px] rounded-xl 2lg:block  hidden">
                <div className="flex justify-between px-16 text-[20px] lg:px-6">
                  <h1 className="2lg:mr-2">Total:</h1>
                  <p>${Total}</p>
                </div>
                <Link
                  href={{
                    pathname: "/Checkout",
                  }}
                >
                  <div
                    className="w-[150px] py-2 mt-4 m-auto cursor-pointer bg-teal-600 group flex justify-center rounded-md hover:bg-white hover:border-[2px]
                     hover:border-teal-600 duration-700 border-[2px] lg:w-[100px]"
                  >
                    <p className="text-white group-hover:text-teal-600 lg:text-[13px] ">
                      Go to Check
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="bg-white shadow-xl px-[26px] py-[20px] rounded-xl 2lg:hidden block">
              <div className="flex justify-between px-16 text-[20px]">
                <h1>Total:</h1>
                <p>${Total}</p>
              </div>
              <Link
                href={{
                  pathname: "/Checkout",
                  query: data,
                }}
              >
                <div
                  className="w-[150px] py-2 mt-4 m-auto cursor-pointer bg-teal-600 group flex justify-center rounded-md hover:bg-white hover:border-[2px]
                     hover:border-teal-600 duration-700 border-[2px] "
                >
                  <p className="text-white group-hover:text-teal-600">
                    Go to Check
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-[1300px] mx-auto border-t-[1px] border-t-[#ccc] mb-10 2xl:mx-[30px] lg:max-w-[720px]">
          <h1 className="flex justify-center items-center text-[36px] text-teal-600 my-10">
            More Rooms
          </h1>
          <div className="grid grid-cols-3 gap-6 2lg:grid-cols-2 ">
            <div className="rounded-[26px] overflow-hidden shadow-lg">
              <div className="">
                <img
                  className="w-full"
                  src="https://bytesed.com/tf/beyond-hotel/beyond_hotel/assets/img/single-page/hotel-grid1.jpg"
                />
              </div>
              <div className="">
                <div className="border-b-[1px] border-gray-300 pt-[25px] px-[20px] pb-[20px]">
                  <div className="flex items-center rounded-md bg-[#0d948847] w-[100px] text-[18px] py-1 justify-center text-teal-600">
                    <StarIcon className="h-4 w-4" />
                    <p className="mx-1">{hotel.starRating}</p>
                    <p>(380)</p>
                  </div>
                  <h1 className="text-[22px] my-2">King Suite Room</h1>
                  <div className="flex  items-center">
                    <MapPinIcon className="h-6 w-6 text-gray-500" />
                    <p className="text-[18px] text-[#333] lg:text-[15px]">
                      4140 Parker Rd. Allentown, New Mexico 31134
                    </p>
                  </div>
                </div>
                <div
                  className="flex px-[20px] text-[#444] items-center text-[18px] py-[10px] border-b-[1px] 
                                            border-gray-300 justify-between"
                >
                  <RiParkingBoxLine />
                  <BsWifi />
                  <BsCup />
                  <MdSmokeFree />
                  <BiSwim />
                  <BsFlower1 />
                  <p className="underline text-teal-600 text-[13px]">+8 More</p>
                </div>
                <div className="flex px-[20px] pt-[15px] pb-[25px] justify-between 2lg:flex-col md:flex-row">
                  <div>
                    <h1 className="text-[22px] font-medium text-teal-600">
                      $230{" "}
                      <span className="text-[16px] font-normal text-teal-600">
                        /Night
                      </span>
                    </h1>

                    <div className="flex text-[#333] ">
                      <p>2 Bed,</p>
                      <p className="mx-2">2 Adult,</p>
                      <p>2 Children</p>
                    </div>
                  </div>
                  <div
                    className="bg-teal-600 group  rounded-md hover:bg-white hover:border-[2px]
                                             hover:border-teal-600 duration-700 border-[2px] xl:w-[150px] xl:mt-2"
                  >
                    <p className="p-4 text-white group-hover:text-teal-600 lg:p-3">
                      Reserve Now
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[26px] overflow-hidden shadow-lg">
              <div className="">
                <img
                  className="w-full"
                  src="https://bytesed.com/tf/beyond-hotel/beyond_hotel/assets/img/single-page/hotel-grid1.jpg"
                />
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
                    <p className="text-[18px] text-[#333] lg:text-[15px]">
                      4140 Parker Rd. Allentown, New Mexico 31134
                    </p>
                  </div>
                </div>
                <div
                  className="flex px-[20px] text-[#444] items-center text-[18px] py-[10px] border-b-[1px] 
                border-gray-300 justify-between"
                >
                  <RiParkingBoxLine />
                  <BsWifi />
                  <BsCup />
                  <MdSmokeFree />
                  <BiSwim />
                  <BsFlower1 />
                  <p className="underline text-teal-600 text-[13px]">+8 More</p>
                </div>
                <div className="flex px-[20px] pt-[15px] pb-[25px] justify-between 2lg:flex-col md:flex-row">
                  <div>
                    <h1 className="text-[22px] font-medium text-teal-600">
                      $230{" "}
                      <span className="text-[16px] font-normal text-teal-600">
                        /Night
                      </span>
                    </h1>

                    <div className="flex text-[#333] ">
                      <p>2 Bed,</p>
                      <p className="mx-2">2 Adult,</p>
                      <p>2 Children</p>
                    </div>
                  </div>
                  <div
                    className="bg-teal-600 group  rounded-md hover:bg-white hover:border-[2px]
                 hover:border-teal-600 duration-700 border-[2px] xl:w-[150px] xl:mt-2"
                  >
                    <p className="p-4 text-white group-hover:text-teal-600 lg:p-3">
                      Reserve Now
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[26px] overflow-hidden shadow-lg">
              <div className="">
                <img
                  className="w-full"
                  src="https://bytesed.com/tf/beyond-hotel/beyond_hotel/assets/img/single-page/hotel-grid1.jpg"
                />
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
                    <p className="text-[18px] text-[#333] lg:text-[15px]">
                      4140 Parker Rd. Allentown, New Mexico 31134
                    </p>
                  </div>
                </div>
                <div
                  className="flex px-[20px] text-[#444] items-center text-[18px] py-[10px] border-b-[1px] 
                border-gray-300 justify-between"
                >
                  <RiParkingBoxLine />
                  <BsWifi />
                  <BsCup />
                  <MdSmokeFree />
                  <BiSwim />
                  <BsFlower1 />
                  <p className="underline text-teal-600 text-[13px]">+8 More</p>
                </div>
                <div className="flex px-[20px] pt-[15px] pb-[25px] justify-between 2lg:flex-col md:flex-row">
                  <div>
                    <h1 className="text-[22px] font-medium text-teal-600">
                      $230{" "}
                      <span className="text-[16px] font-normal text-teal-600">
                        /Night
                      </span>
                    </h1>

                    <div className="flex text-[#333] ">
                      <p>2 Bed,</p>
                      <p className="mx-2">2 Adult,</p>
                      <p>2 Children</p>
                    </div>
                  </div>
                  <div
                    className="bg-teal-600 group  rounded-md hover:bg-white hover:border-[2px]
                 hover:border-teal-600 duration-700 border-[2px] xl:w-[150px] xl:mt-2"
                  >
                    <p className="p-4 text-white group-hover:text-teal-600 lg:p-3">
                      Reserve Now
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
