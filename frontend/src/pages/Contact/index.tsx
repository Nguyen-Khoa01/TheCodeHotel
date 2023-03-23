import React from 'react'
import Header from '@/component/Header'
import Title from '@/component/Title'
import Footer from '@/component/Footer'

function ContactUS() {
    return (
        <div>
            <Header />
            <Title />
            <div>
                <div>

                </div>
                <div className='w-[1300px] mx-auto'>
                    <div className='grid grid-cols-12 gap-x-4'>
                        <div className='col-span-6'>
                            <img className='rounded-xl' src='https://bytesed.com/tf/beyond-hotel/beyond_hotel/assets/img/single-page/contact.jpg'></img>
                        </div>
                        <div className='col-span-6 shadow-xl rounded-xl'>
                            <div>
                                <h1>Get in Touch</h1>
                                <p>Our friendly team would love hear from you</p>

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

export default ContactUS
