import React from 'react'
import Malik from "../../assets/malik.png"
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";


const About = () => {

    return (
        <div className='min-[320px]:h-auto h-screen relative'>
            <div className={`min-[320px]:h-auto h-screen w-full z-10`}>
                <div className='flex w-full flex-col  lg:flex-row items-center lg:h-full lg:justify-center'>
                    <section className='flex p-5 items-center justify-end min-[320px]:justify-center lg:w-2/6'>
                        <img src={Malik} alt="malik" srcset="" className='w-4/6 rounded shadow-sm min-[320px]:w-2/6' />
                    </section>
                    <section className='lg:w-4/6 lg:h-full flex items-center justify-start'>
                        <div className='flex flex-col h-auto min-[320px]:m-2 m-5 p-3'>
                            <h1 className='text-7xl min-[320px]:text-[44px] font-semibold font-[Poppins] border-b border-black leading-[35px] tracking-tighter'>WHO AM I ?</h1>
                            <h1 className='text-7xl font-extrabold min-[320px]:text-[44px] text-indigo-400 leading-[35px]'>MALIK ABDURRASYID</h1>
                            <p className='text-7xl font-extrabold  text-white leading-[35px] min-[320px]:text-[44px]'>JUST A SIMPLE PROGRAMMER BUT {` `}
                                <span className='text-rose-400 italic'>AMBITIOUS.</span></p>

                            <svg className='absolute bottom-6 z-0' width="400" height="200">
                                <path
                                    d="M10 110 Q 95 90 250 105 350 105"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2"
                                />
                                <path
                                    d="M10 120 Q 95 95 250 105 350 100"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2"
                                />
                       
                            </svg>

                            <button className='z-10 border  mt-16 font-[Poppins] text-start rounded-full shadow w-1/5 min-[320px]:w-2/5 h-10'><Link to={'/aboutme'} className='flex items-center gap-5 justify-center hover:bg-emerald-400 hover:rounded-full hover:h-10'>
                                See More <FaArrowRightLong />
                            </Link></button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default About;

export const AboutMeSpesific = () => {
    return (
        <div>
            <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                    <h1 className="text-4xl font-bold text-center sm:text-5xl">About Me</h1>
                    <p className="max-w-2xl text-justify dark:text-gray-400">Hello! I am Malik Abdurrasyid, a graduate in Electrical Engineering - Telecommunications with a special interest in video editing, information security, quantum software development, and user interface development using React. I enjoy reading books on various topics and exploring new technologies. With a passion for continuous learning and self-improvement, I am ready to make a meaningful contribution to the world of technology.</p>
                    <div className="flex flex-row flex-wrap-reverse justify-center">
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="malik" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={Malik}/>
                            <p className="text-xl font-semibold leading-6">Malik Abdurrasyid</p>
                            <p className="dark:text-gray-400">Frontend Developer - ReactJS</p>
                        </div>
                    </div>
                </div>
            </section>
            <p></p>
        </div>
    )
}