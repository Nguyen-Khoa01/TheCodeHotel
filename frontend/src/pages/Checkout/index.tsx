import Header from "@/component/Header"
import Title from "@/component/Title"
import Footer from "@/component/Footer"
import { CreditCardIcon } from "@heroicons/react/24/outline";
import { BsPaypal } from "react-icons/bs";
import {
    AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Radio,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
} from 'antd';


const { Option } = Select;
const { RangePicker } = DatePicker;

export default function Checkout() {

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );
    return (
        <div>
            <Header />
            <Title />
            <div className="bg-[#F2F4F7]">
                <div className="max-w-[1300px] mx-auto grid grid-cols-3 gap-x-6">

                    <Form size='large' layout="vertical" className="w-full col-span-2 ">
                        <div className="bg-white shadow-xl px-[20px] pt-[20px] rounded-xl my-8">
                            <h1 className="text-[20px] font-semibold mb-2">Booking Information</h1>
                            <div className="grid grid-cols-2 gap-x-2">
                                <Form.Item
                                    name="FirstName"
                                    label="FirstName"
                                    rules={[{ required: true, message: 'Please input your FirstName!', whitespace: true }]}
                                    className=""
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    name="LastName"
                                    label="LastName"
                                    rules={[{ required: true, message: 'Please input your LastName!', whitespace: true }]}
                                    className=""
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    name="phone"
                                    label="Phone Number"
                                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                                    className="basis-1/2"
                                >
                                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                                </Form.Item>

                                <Form.Item
                                    name="email"
                                    label="E-mail"
                                    rules={[
                                        {
                                            type: 'email',
                                            message: 'The input is not valid E-mail!',
                                        },
                                        {
                                            required: true,
                                            message: 'Please input your E-mail!',
                                        },
                                    ]}
                                    className="basis-1/2"
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    name="Address"
                                    label="Address"
                                    rules={[{ required: true, message: 'Please input your Address!', whitespace: true }]}
                                    className="col-span-2"
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    name="City"
                                    label="City"
                                    rules={[{ required: true, message: 'Please choose your City!', whitespace: true }]}
                                    className="basis-1/2"
                                >
                                    <Select style={{ width: '100%' }}
                                        placeholder="Search to Select"
                                        filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                        filterSort={(optionA, optionB) =>
                                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                        }
                                        options={[
                                            {
                                                value: '1',
                                                label: 'Not Identified',
                                            },
                                            {
                                                value: '2',
                                                label: 'Hà Nội',
                                            },
                                            {
                                                value: '3',
                                                label: 'Đà Nẵng',
                                            },
                                            {
                                                value: '4',
                                                label: 'Sài Gòn',
                                            },
                                            {
                                                value: '5',
                                                label: 'Quãng Nam',
                                            },
                                            {
                                                value: '6',
                                                label: 'Huế',
                                            },
                                        ]}
                                    >
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    name="ZipCode"
                                    label="ZipCode"
                                    rules={[{ required: true, message: 'Please input your ZipCode!', whitespace: true }]}
                                    className="basis-1/2"
                                >
                                    <Input />
                                </Form.Item>
                            </div>
                        </div>
                        <div className="bg-white shadow-xl px-[20px] pt-[20px] my-8 rounded-xl">
                            <h1 className="text-[20px] font-semibold mb-2">Payment</h1>
                            <div className="grid grid-cols-2 gap-x-2">
                                <Form.Item className="col-span-2">
                                    <Radio.Group>
                                        <Radio value="apple">
                                            <CreditCardIcon className="h-6 w-6 text-gray-500" />
                                            <p>Credit/Dabit Card</p>
                                        </Radio>
                                        <Radio value="pear">
                                            <BsPaypal />
                                            <p>Paypal</p>
                                        </Radio>
                                    </Radio.Group>
                                </Form.Item>
                                <Form.Item
                                    name="CardNumber"
                                    label="CardNumber"
                                    rules={[{ required: true, message: 'Please input your CardNumber!', whitespace: true }]}
                                    className="col-span-2"
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Expire Date">
                                    <DatePicker />
                                </Form.Item>
                                <Form.Item
                                    name="CVV/CVC"
                                    label="CVV/CVC"
                                    rules={[{ required: true, message: 'Please input your CVV/CVC!', whitespace: true }]}
                                    className=""
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    className="col-span-2"
                                >
                                    <Checkbox>
                                        I have read the <a href="">agreement</a>
                                    </Checkbox>
                                </Form.Item>
                                <Form.Item  >
                                    <Button type="primary" htmlType="submit" className="border-[1px] border-[#1E84FE] text-[#1E84FE]">
                                        Register
                                    </Button>
                                </Form.Item>
                            </div>
                        </div>


                    </Form>
                    <div className="col-span-1">
                        <div className="bg-white shadow-xl px-[20px] pt-[20px] pb-[10px] my-8 rounded-xl">
                            <h1 className="font-semibold text-[20px] mb-2">Booking Details</h1>
                            <div>
                                <div className="flex justify-between py-2 mb-1 ">
                                    <p className="text-[#667085]">Checking in</p>
                                    <p className="font-medium">03 Jun 2023</p>
                                </div>
                                <div className="flex justify-between py-2 mb-1 ">
                                    <p className="text-[#667085]">Checking out</p>
                                    <p className="font-medium">03 Jun 2023</p>
                                </div>
                                <div className="flex justify-between py-2 mb-1 ">
                                    <p className="text-[#667085]">Number of Rooms</p>
                                    <p className="font-medium">03</p>
                                </div>
                                <div className="flex justify-between py-2 mb-1 ">
                                    <p className="text-[#667085]">Total Stay</p>
                                    <p className="font-medium">3Nights</p>
                                </div>
                                <div className="flex justify-between py-2 mb-1 ">
                                    <p className="text-[#667085]">Number of Person</p>
                                    <p className="font-medium">5 Person</p>
                                </div>
                                <div className="flex justify-between py-2 mb-1">
                                    <p className="text-[#667085]">Number of Children</p>
                                    <p className="font-medium">2 Children</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}