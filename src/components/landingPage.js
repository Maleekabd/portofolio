import React from "react";
import Styles from "../styles/landingPage.module.css"
import About from "./About/About";
import F16 from '../assets/f16cp.jpg'


const LandingPage = () => {

    return (
        <>
            <section className="h-screen relative">
                <div className="flex lg:flex lg:items-center lg:justify-center">
                    <div className="flex items-center justify-center flex-col lg:items-center lg:justify-center lg:w-full h-screen z-50">
                        <h1 className="text-center -mt-36 text-3xl lg:text-start lg:text-[6em] leading-[75px] tracking-tight font-extrabold">MALIK ABDURRASYID</h1>
                        <p className={`absolute bottom-72 italic text-center text-[20px] lg:text-xl lg:text-start underline-offset-4 font-[Poppins] lg:mt-3 m-3 tracking-[0.8em] font-thin`}>Explore My Hobbies and Preferences.</p>
                    </div>
                    <svg className="w-9/12 absolute top-72 right-52 z-50">
                        <line x1={70} y1={10} y2={10} x2={1000} stroke="white" strokeWidth={2} />
                    </svg>
                    <img alt="f16" className="absolute bottom-0 h-auto w-full" src={F16} />
                    <button className="z-50 w-4/12 absolute bottom-44 rounded-full hover:bg-emerald-400 border border-white text-white font-[Poppins] text-md p-2">
                        <h1>
                            Get Start
                        </h1>
                    </button>
                </div>
            </section>
        </>
    )
}

export default LandingPage;