import Header from "@/component/Header"
import Footer from "@/component/Footer"
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Title from "@/component/Title";
import teamMask from '../../assets/images/teamMask.png'


export default function AboutUs() {



    return (


        <div>
            <Header />
            <Title />
            <div className="mb-[50px]">
                <div className="w-[1300px]  mx-auto flex flex-wrap ">
                    <div className="w-1/2 flex flex-col justify-center">
                        <p className="text-teal-600 text-[20px]">Get To Know Us</p>
                        <h1 className="font-semibold text-[46px]">Explore All Tour Of The World With Us</h1>
                        <p className="text-[#777777] mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            <br />
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>

                    </div>
                    <div className="w-1/2 ">
                        <img className="rounded-[50%] w-[621px] h-[600px]  drop-shadow-lg " src='https://img.freepik.com/free-vector/flat-hotel-booking-concept_52683-7994.jpg' />
                    </div>
                    <div className="w-4/6 flex px-[25px] pt-[25px]  drop-shadow-2xl border-[1px] border-[#edededc9] rounded-md">
                        <div className="px-[15px] w-1/4">
                            <h1 className="text-teal-600 text-[50px] font-semibold">11</h1>
                            <p className="text-[#777777] ">Year Experiences</p>
                        </div>
                        <div className="px-[15px]  w-1/4">
                            <h1 className="text-teal-600 text-[50px] font-semibold">530</h1>
                            <p className="text-[#777777] ">Year Experiences</p>
                        </div>
                        <div className="px-[15px]  w-1/4">
                            <h1 className="text-teal-600 text-[50px] font-semibold">850</h1>
                            <p className="text-[#777777] ">Year Experiences</p>
                        </div>
                        <div className="px-[15px]  w-1/4">
                            <h1 className="text-teal-600 text-[50px] font-semibold">320</h1>
                            <p className="text-[#777777] ">Year Experiences</p>
                        </div>

                    </div>
                </div>
                <div className="w-[1300px]  mx-auto ">
                    <h1>Hard Working Team</h1>
                    <div>
                        <div className=" w-1/4">

                            <div className="" style={{ background: `url(https://bytesed.com/tf/beyond-hotel/beyond_hotel/assets/img/single-page/team1.jpg) `, backgroundRepeat: 'no-repeat' }}>
                                <img alt="img" className="w-[288px]  h-[269px]" src="https://bytesed.com/tf/beyond-hotel/beyond_hotel/assets/img/single-page/team-mask.png"
                                ></img>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}