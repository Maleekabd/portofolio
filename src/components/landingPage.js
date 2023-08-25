import React from "react";
import Styles from "../styles/landingPage.module.css"
import About from "./About/About";
import Quantum from "../assets/Quantum.jpg"

const LandingPage = () => {

    return (
        <div>
            <section className="h-screen relative">
                <div className="w-full flex lg:flex lg:items-start lg:justify-start">
                    <div className="w-full flex items-center justify-center flex-col lg:items-start lg:justify-start h-screen lg:m-16 lg:mt-32 lg:w-2/5 z-50">
                        <h1 className="text-center text-3xl lg:text-start lg:text-7xl tracking-wider font-bold">MALIK ABDURRASYID</h1>
                        <p className={`text-center text-[20px] lg:text-xl lg:text-start underline-offset-4 ${Styles.font} lg:mt-3 m-3`}>I am an electrical engineering, majoring in multimedia telecommunication </p>
                    </div>
                    <div className="">
                        <img alt="quantum" src={Quantum} />
                    </div>
                </div>
            </section>
            <About />
        </div>
    )
}

export default LandingPage;