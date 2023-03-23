import Header from "@/component/Header"
import Footer from "@/component/Footer"
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Title from "@/component/Title";
import teamMask from '../../assets/images/teamMask.png'


const myteam = [
    {
        Name: 'Riyad Hossain',
        Position: 'Founder & Ceo',
        image: 'https://bytesed.com/tf/beyond-hotel/beyond_hotel/assets/img/single-page/team1.jpg'
    },
    {
        Name: 'Riyad Hossain',
        Position: 'Founder & Ceo',
        image: 'https://bytesed.com/tf/beyond-hotel/beyond_hotel/assets/img/single-page/team2.jpg'
    },
    {
        Name: 'Riyad Hossain',
        Position: 'Founder & Ceo',
        image: 'https://bytesed.com/tf/beyond-hotel/beyond_hotel/assets/img/single-page/team3.jpg'
    },
    {
        Name: 'Riyad Hossain',
        Position: 'Founder & Ceo',
        image: 'https://bytesed.com/tf/beyond-hotel/beyond_hotel/assets/img/single-page/team4.jpg'
    },

]



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
                    <div className="relative">
                        <h1 className="text-center text-[36px] my-20">Hard Working Team</h1>
                        <div className="h-[19px] w-[322px] absolute top-14 left-1/2 -translate-x-1/2" style={{ backgroundImage: 'url(https://bytesed.com/tf/beyond-hotel/beyond_hotel/assets/img/section-shapes2.svg)', backgroundRepeat: 'no-repeat' }}></div>
                    </div>
                    <div className="grid grid-cols-12 gap-x-6">
                        {
                            myteam.map((item, key) => (
                                <div key={key} className="col-span-3">
                                    <img alt="img" className="rounded-full" src={item.image}
                                    />
                                    <div className="flex flex-col items-center">
                                        <h1 className="font-medium text-[24px] mt-6 mb-1">{item.Name}</h1>
                                        <p className="text-[#999]">{item.Position}</p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}