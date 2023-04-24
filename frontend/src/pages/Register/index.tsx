import { CreditCardIcon } from "@heroicons/react/24/outline";
import { BsPaypal } from "react-icons/bs";

import {
    Button,
    Checkbox,
    message,
    DatePicker,
    Form,
    Input,
    Select,
    Radio,
} from 'antd';
import Link from "next/link";
import { useRouter } from 'next/router'


const { Option } = Select;
const { RangePicker } = DatePicker;

interface signup {
    fullname: string
    username: string
    phonenumber: string
    email: string
    password: string
    comfirpassword: string
}

export default function Register() {
    const [messageApi, contextHolder] = message.useMessage();
    const router = useRouter()

    async function handleSubmit(value: signup) {
        const { fullname,
            username,
            phonenumber,
            email,
            password,
            comfirpassword
        } = value

        if (password === comfirpassword) {
            try {
                const res = await fetch('http://localhost:3001/auth/signup', {
                    method: "POST",
                    body: JSON.stringify({
                        fullname,
                        username,
                        phonenumber,
                        email,
                        password,
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }

                })
                const token = await res.json()
                console.log(token)
                if (res.ok) {
                    messageApi.open({
                        type: 'success',
                        content: 'user registered success',
                    });
                    await router.push('/Login')
                } else {
                    messageApi.open({
                        type: 'error',
                        content: `${token.message}`,
                    });
                }
            } catch (error) {

            }
        } else {
            messageApi.open({
                type: 'error',
                content: 're-enter incorrect password',
            });
        }

    }


    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 80 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );
    return (
        <>
            {contextHolder}
            <div className="bg-white shadow-2xl max-w-[1300px] mx-auto rounded-xl overflow-hidden 
                grid grid-cols-11 gap-x-14 mt-[90px] 2xl:mx-[30px] xl:gap-x-5 2md:grid-cols-1
                lg:max-w-[720px] md:max-w-[540px]">
                <div className="col-span-6 ">
                    <img className="h-full" src="https://cf.bstatic.com/static/img/twitter-image-else/566c7081f1deeaca39957e96365c3908f83b95af.jpg"></img>
                </div>
                <div className="p-[30px] col-span-5 ">
                    <Form size='large' layout="vertical" className="w-full col-span-8 2xl:col-span-7 2md:col-span-12 "
                        initialValues={{ prefix: '84' }} style={{ maxWidth: 600 }}
                        onFinish={handleSubmit}
                    >

                        <h1 className="text-[24px] font-semibold mb-2">Welcome</h1>
                        <div className="grid grid-cols-2 gap-x-2">


                            <Form.Item label="FullName" className="col-span-2">
                                <Form.Item
                                    name="fullname"
                                    rules={[{ required: true, message: 'Please input your LastName!', whitespace: true }]}
                                    className=""
                                >
                                    <Input />
                                </Form.Item>
                            </Form.Item>

                            <Form.Item label="UserName " className="col-span-2">

                                <Form.Item
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your Username!', whitespace: true }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Form.Item>

                            <Form.Item label="E-mail" className="col-span-2">
                                <Form.Item
                                    name="email"
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
                                >
                                    <Input />
                                </Form.Item>
                            </Form.Item>

                            <Form.Item label="Phone Number" className="col-span-2">
                                <Form.Item
                                    name="phonenumber"
                                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                                >
                                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                                </Form.Item>
                            </Form.Item>

                            <Form.Item label="Password">
                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password />
                                </Form.Item>
                            </Form.Item>

                            <Form.Item label="ComfirPassword">
                                <Form.Item

                                    name="comfirpassword"
                                    rules={[{ required: true, message: 'Please input your ComfirPassword!' }]}
                                >
                                    <Input.Password />
                                </Form.Item>
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
                    <h1 className="mt-2">Already have an account? <Link href="/Login">Login</Link></h1>
                </div>
            </div>
        </>
    )
}
