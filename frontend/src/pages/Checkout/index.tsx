import Header from "@/component/Header";
import Title from "@/component/Title";
import Footer from "@/component/Footer";
import { CreditCardIcon } from "@heroicons/react/24/outline";
import { BsPaypal } from "react-icons/bs";
import { Button, Checkbox, Radio, DatePicker, Form, Input, Select } from "antd";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
const { Option } = Select;
const { RangePicker } = DatePicker;

const PaymentComponent = () => {
  const router = useRouter();
  const data = router.query;

  const {
    numberAduts,
    numberChilren,
    checkout,
    checkin,
    Total,
    totalRoom,
    namehotel,
  } = data;

  const [isRadio, setIsRadio] = useState(false);

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  let radio;
  if (isRadio) {
    radio = "";
  } else {
    radio = <CardElement />;
  }

  const handleRadio = (e: any) => {
    e.target.value === "chua thanh toan" ? setIsRadio(true) : setIsRadio(false);
  };
  const stripe = useStripe();
  const elements = useElements();
  const cardEl = elements?.getElement(CardElement);
  const [paymentStatus, setPaymentStatus] = useState("");
  async function handleCheckout(value: any) {
    const { nameuser, status } = value;

    if (status === "chua thanh toan") {
      try {
        const res = await fetch("http://localhost:3001/booking", {
          method: "POST",
          body: JSON.stringify({
            nameuser,
            status,
            totalprice: Total,
            checkindate: checkin,
            checkoutdate: checkout,
            room: totalRoom,
            namehotel,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.ok) {
          await router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const res = await axios.post("http://localhost:3001/stripe", {
          paymentMethodId: nameuser,
          rooms: Number(totalRoom),
          price: Number(Total),
        });

        const { client_secret: clientSecret } = res.data;
        // const { paymentIntent } = await stripe?.confirmCardPayment(
        //   clientSecret,
        //   {
        //     payment_method: {
        //       card: cardEl!,
        //     },
        //   }
        // );
        const res1 = await fetch("http://localhost:3001/booking", {
          method: "POST",
          body: JSON.stringify({
            nameuser,
            status,
            totalprice: Total,
            checkindate: checkin,
            checkoutdate: checkout,
            room: totalRoom,
            namehotel,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res1.ok) {
          await router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="bg-[#F2F4F7]">
      <div className="max-w-[1300px] mx-auto grid grid-cols-12 gap-x-6 2xl:mx-[30px] 2xl:gap-x-3 lg:max-w-[720px] md:max-w-[540px] ">
        <Form
          size="large"
          layout="vertical"
          className="w-full col-span-8 2xl:col-span-7 2md:col-span-12"
          onFinish={handleCheckout}
        >
          <div className="bg-white shadow-xl px-[20px] pt-[20px] rounded-xl my-8">
            <h1 className="text-[20px] font-semibold mb-2">
              Booking Information
            </h1>
            <div className="grid grid-cols-2 gap-x-2">
              <Form.Item
                name="nameuser"
                label="Name User"
                rules={[
                  {
                    required: true,
                    message: "Please input your LastName!",
                    whitespace: true,
                  },
                ]}
                className="col-span-2"
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
                className=""
              >
                <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
                className="basis-1/2"
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="Address"
                label="Address"
                rules={[
                  {
                    required: true,
                    message: "Please input your Address!",
                    whitespace: true,
                  },
                ]}
                className="col-span-2"
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="City"
                label="City"
                rules={[
                  {
                    required: true,
                    message: "Please choose your City!",
                    whitespace: true,
                  },
                ]}
                className=""
              >
                <Select
                  style={{ width: "100%" }}
                  placeholder="Search to Select"
                  filterOption={(input, option) =>
                    (option?.label ?? "").includes(input)
                  }
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? "")
                      .toLowerCase()
                      .localeCompare((optionB?.label ?? "").toLowerCase())
                  }
                  options={[
                    {
                      value: "1",
                      label: "Not Identified",
                    },
                    {
                      value: "2",
                      label: "Hà Nội",
                    },
                    {
                      value: "3",
                      label: "Đà Nẵng",
                    },
                    {
                      value: "4",
                      label: "Sài Gòn",
                    },
                    {
                      value: "5",
                      label: "Quãng Nam",
                    },
                    {
                      value: "6",
                      label: "Huế",
                    },
                  ]}
                ></Select>
              </Form.Item>
              <Form.Item
                name="ZipCode"
                label="ZipCode"
                rules={[
                  {
                    required: true,
                    message: "Please input your ZipCode!",
                    whitespace: true,
                  },
                ]}
                className="basis-1/2"
              >
                <Input />
              </Form.Item>
            </div>
          </div>
          <div className="bg-white shadow-xl px-[20px] pt-[20px] my-8 rounded-xl">
            <h1 className="text-[20px] font-semibold mb-2">Payment</h1>
            <div className="grid grid-cols-2 gap-x-2">
              <Form.Item name="status" className="col-span-2">
                <Radio.Group onChange={handleRadio}>
                  <Radio value="chua thanh toan">
                    <CreditCardIcon className="h-6 w-6 text-gray-500" />
                    <p>Tien mat</p>
                  </Radio>
                  <Radio value="da thanh toan">
                    <BsPaypal />
                    <p>Paypal</p>
                  </Radio>
                </Radio.Group>
              </Form.Item>
              {radio}
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="border-[1px] border-[#1E84FE] text-[#1E84FE]"
                >
                  Pay
                </Button>
              </Form.Item>
            </div>
          </div>
        </Form>
        <div className="col-span-4 2xl:col-span-5 2md:col-span-12">
          <div className="bg-white shadow-xl px-[20px] pt-[20px] pb-[10px] my-8 rounded-xl">
            <h1 className="font-semibold text-[20px] mb-2">Booking Details</h1>
            <div>
              <div className="flex justify-between py-2 mb-1 ">
                <p className="text-[#667085]">Checking in</p>
                <p className="font-medium">{checkin}</p>
              </div>
              <div className="flex justify-between py-2 mb-1 ">
                <p className="text-[#667085]">Checking out</p>
                <p className="font-medium">{checkout}</p>
              </div>
              <div className="flex justify-between py-2 mb-1 ">
                <p className="text-[#667085]">Number of Rooms</p>
                <p className="font-medium">{totalRoom}</p>
              </div>
              <div className="flex justify-between py-2 mb-1 ">
                <p className="text-[#667085]">Total Stay</p>
                <p className="font-medium">3 Nights</p>
              </div>
              <div className="flex justify-between py-2 mb-1 ">
                <p className="text-[#667085]">Number of Person</p>
                <p className="font-medium">{numberAduts} Person</p>
              </div>
              <div className="flex justify-between py-2 mb-1">
                <p className="text-[#667085]">Number of Children</p>
                <p className="font-medium">{numberChilren} Children</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-xl px-[20px] pt-[20px] pb-[10px] my-8 rounded-xl">
            <h1 className="font-semibold text-[20px] mb-2">Invoice</h1>
            <div>
              <div className="flex justify-between">
                <p className="text-[#667085] py-2 mb-1">Charge</p>
                <p className="font-medium">${Total}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[#667085] py-2 mb-1">Discount</p>
                <p className="font-medium"></p>
              </div>
              <div className="flex justify-between">
                <p className="text-[#667085] py-2 mb-1">Vat</p>
                <p className="font-medium"></p>
              </div>
            </div>
            <div className="flex border-t-[1px] py-2 mb-1 justify-between text-[20px]">
              <p className="text-[#667085]  ">Total</p>
              <p className="text-teal-600 font-medium  ">${Total}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Checkhout() {
  const stripePromise = loadStripe(
    "pk_test_51N0R43GMNO5e9Hfpt4hjqzSYnSoFgGdqyncOClDPwwtrkEU5GeMI2bhX3H8EksskvtsedytPsP2kOaQTkGVc4ZjC00cV3T2qIB"
  );

  return (
    <div>
      <Header />
      <div className=" bg-[#EAECF0] py-[30px] grid grid-cols-6 xl:grid-cols-1 mt-[96px]">
        <div
          className="col-start-2 col-span-4 flex justify-between px-5 
                pt-5 pb-[25px] bg-white rounded-lg xl:col-start-1 2xl:mx-[35px] 
                lg:max-w-[720px] 2md:w-full 2md:mx-auto md:max-w-[540px]"
        >
          <h1 className="text-[24px] leading-[32px] font-light"></h1>
          <div className="flex text-gray-400 items-center md:text-[15px]">
            <p>ListHotel</p>
            <ChevronRightIcon className="h-4 w-4 text-gray-400" />
            <p>Checkout</p>
          </div>
        </div>
      </div>
      <Elements stripe={stripePromise}>
        <PaymentComponent />
      </Elements>
      <Footer />
    </div>
  );
}
