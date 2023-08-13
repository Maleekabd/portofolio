import React from "react"
import MyPorto from "../components/MyPorto/MyPorto";

class MyPortofolio extends React.Component {


    render() {
        return (
            <section className="h-auto">
                <div className="border-b border-b-black">
                    <h1 className="ml-16 mt-16 text-[3.5em] italic font-semibold text-black">MY PORTOFOLIO</h1>
                </div>
                <MyPorto />

            </section>
        )
    }
}

export default MyPortofolio;