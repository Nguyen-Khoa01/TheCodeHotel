import { CreditCardIcon } from "@heroicons/react/24/outline";
import { BsPaypal, BsFacebook } from "react-icons/bs";
import { FcGoogle } from 'react-icons/fc'
import { useRouter } from 'next/router'
import { useState } from 'react';
import {
    Button,
    Checkbox,
    Form,
    Input,
    Select,
} from 'antd';
import Link from "next/link";
import { Session } from "inspector";


const { Option } = Select;

interface Login {
    email: string,
    password: string
}

export default function Login() {

    const router = useRouter()

    async function handleSubmit(value: Login) {

        const { email, password } = value

        try {
            const res = await fetch('http://localhost:3001/auth/login', {
                method: "POST",
                body: JSON.stringify({
                    email,
                    password
                }),
                headers: {
                    "Content-Type": "application/json"
                }

            })
            const token = await res.json()

            localStorage.setItem("TOKEN", JSON.stringify(token))
            if (res.ok) {
                alert("user logged success")
                await router.push('/')
            } else {
                alert("user logged unsuccess")
            }
        } catch (error) {
            console.log(error)
        }


    }



    return (
        <div className="bg-white shadow-2xl max-w-[1300px] mx-auto rounded-xl 
            overflow-hidden grid grid-cols-11 gap-x-14 mt-[90px] 2xl:mx-[30px] 
            2xl:gap-x-5 2md:grid-cols-1 lg:max-w-[720px] md:max-w-[540px]">
            <div className="col-span-6 2xl:col-span-1">
                <img className="h-full" src="https://cf.bstatic.com/static/img/twitter-image-else/566c7081f1deeaca39957e96365c3908f83b95af.jpg"></img>
            </div>
            <div className="p-[30px] col-span-5">
                <Form size='large' layout="vertical" className="w-full col-span-8 2xl:col-span-7 2md:col-span-12 "
                    initialValues={{ prefix: '84' }}
                    onFinish={handleSubmit}
                >

                    <h1 className="text-[24px] font-semibold mb-2">Sign In Now</h1>
                    <div className="grid grid-cols-2 ">

                        <Form.Item className="col-span-2 " label="E-mail">
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


                        <Form.Item className="col-span-2" label="Password">
                            <Form.Item

                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>
                        </Form.Item>

                        <Form.Item
                            className=" mx-auto mt-4 col-span-2 "
                        >
                            <Button type="primary" htmlType="submit" className="border-[1px] border-[#1E84FE] text-[#1E84FE] ">
                                Login
                            </Button>
                        </Form.Item>

                        <h1 className="my-3 text-[16px] col-span-2">Dont't have an account? <Link href="/Register">SignUp Now </Link></h1>
                        <Form.Item name="remember" valuePropName="checked" className="">
                            <Checkbox><p className="text-[16px]">Remember me</p></Checkbox>
                        </Form.Item>


                    </div>
                </Form>
                <p className="text-teal-600 text-right text-[16px] mt-2">Forgot Password</p>
                <div className="col-span-2 mt-3">
                    <div className="flex  items-center">
                        <div className="h-[1px] w-full bg-[#f1f1f1]"></div>
                        <p className="mx-8 text-[18px]">or</p>
                        <div className="h-[1px] w-full  bg-[#f1f1f1]"></div>
                    </div>
                    <div className="border-[1px] py-[12px] my-4">
                        <a className="flex items-center justify-center text-[16px]">
                            <FcGoogle className=" mr-2" />
                            <p>Sign In With Google</p>
                        </a>
                    </div>
                    <div className="border-[1px] py-[12px] my-4">
                        <a className="flex items-center justify-center text-[16px]">
                            <BsFacebook className="text-[#0a81ec] mr-2" />
                            <p>Sign In With Facebook</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}