import { CreditCardIcon } from "@heroicons/react/24/outline";
import { BsPaypal } from "react-icons/bs";

import {
    Button,
    Checkbox,
    Radio,
    DatePicker,
    Form,
    Input,
    Select,
} from 'antd';


const { Option } = Select;
const { RangePicker } = DatePicker;

export default function Register() {
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 80 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );
    return (
        <div className="bg-white shadow-2xl max-w-[1300px] mx-auto rounded-xl overflow-hidden grid grid-cols-11 gap-x-14 mt-[90px]">
            <div className="col-span-6 ">
                <img className="h-full" src="https://cf.bstatic.com/static/img/twitter-image-else/566c7081f1deeaca39957e96365c3908f83b95af.jpg"></img>
            </div>
            <div className="p-[30px] col-span-5">
                <Form size='large' layout="vertical" className="w-full col-span-8 2xl:col-span-7 2md:col-span-12 "
                    initialValues={{ prefix: '84' }} style={{ maxWidth: 600 }}

                >

                    <h1 className="text-[24px] font-semibold mb-2">Welcome</h1>
                    <div className="grid grid-cols-2 gap-x-2">
                        <Form.Item
                            name="FirstName"
                            label="FirstName"
                            rules={[{ required: true, message: 'Please input your FirstName!', whitespace: true }]}
                            className="text-[16px]"
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
                            name="UserName"
                            label="UserName"
                            rules={[{ required: true, message: 'Please input your Username!', whitespace: true }]}
                            className="col-span-2"
                        >
                            <Input />
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
                            className="col-span-2"
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="phone"
                            label="Phone Number"
                            rules={[{ required: true, message: 'Please input your phone number!' }]}
                            className="col-span-2"
                        >
                            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            label="ComfirPassword"
                            name="ComfirPassword"
                            rules={[{ required: true, message: 'Please input your ComfirPassword!' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            className="col-span-2 "
                        >
                            <Checkbox >
                                <h1 className="text-[16px]"> By creating an account, you agree to <a href="">the terms of Service</a> and <a href="">Conditions</a>, and <a href=""> privacy policy</a></h1>
                            </Checkbox>
                        </Form.Item>
                        <Form.Item
                            className="col-span-2 mx-auto my-6"
                        >
                            <Button type="primary" htmlType="submit" className="border-[1px] border-[#1E84FE] text-[#1E84FE]">
                                Register
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
                <h1>Already have an account? <a href="">Login</a></h1>
            </div>
        </div>
    )
}