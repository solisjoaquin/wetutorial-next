import { NextPage } from "next"
import Header from '../../components/Navbar/Header'
import Cta from '../../components/Cta'
import Footer from "../../components/Footer"
import Link from 'next/link'

const SubscribeSucces = ({ theme }) => {
    return (
        <div>
            <Header />

            <section className=" text-gray-700 h-screen body-font static dark:bg-gray-900">
                <div className=" container px-8 pt-28 pb-24 mx-auto lg:px-4">
                    <div className=" flex flex-col w-full mb-12 text-center">
                        <div className=" px-4 sm:px-8 xl:pr-16 md:max-w-3xl md:m-auto">
                            <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-6 mb-8 sm:mt-10 sm:mb-10 dark:text-white">Success! Now check your email to confirm your subscription.</h1>
                            {/* <div className="font-light text-gray-800 sm:text-xl sm:leading-7 dark:text-gray-100">
                                <p className="">s</p>
                            </div> */}
                            <div className="flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                                </svg></div>
                        </div>
                    </div>
                    <div className="flex justify-center">

                    </div>
                </div>
            </section>
            <Footer />
        </div>)
}

export default SubscribeSucces;