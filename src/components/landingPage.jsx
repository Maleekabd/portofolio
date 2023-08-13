import React from "react"
import Styles from "../styles/landingPage.module.css"
import Surveillance from "../assets/surveillance.jpg"
import About from "./About/About";

class LandingPage extends React.Component {
    render() {
        return (
            <>
                <About />
                <section className="h-screen flex justify-between relative">
                    <div className="w-full flex items-start justify-start">
                        <div className="m-16 mt-32 w-2/5 z-10">
                            <h1 className="text-7xl tracking-wider text-black font-bold">MALIK ABDURRASYID</h1>
                            <h2 className={`text-xl underline-offset-4 text-black ${Styles.font} mt-3`}>I am a fresh graduated of electrical engineering, majoring in multimedia telecommunication </h2>
                            <button className="mt-5 border border-black rounded p-2 font-sans text-black">Get Started</button>
                        </div>
                    </div>
                    <div className={`w-full z-0 absolute top-0 opacity-60`}>
                        <img src={Surveillance} className="w-full h-auto" />
                    </div>
                </section>
            </>
        )
    }
}

export default LandingPage;