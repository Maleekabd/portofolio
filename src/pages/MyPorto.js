import React from "react"
import MyPorto from "../components/MyPorto/MyPorto";

class MyPortofolio extends React.Component {


    render() {
        return (
            <div>
                <section className="h-auto p-0">
                    <div className="border-b border-b-white">
                        <h1 className="ml-10 lg:my-6 text-3xl lg:ml-16 lg:mt-20 lg:text-[3.5em] italic font-semibold">MY PORTOFOLIO</h1>
                    </div>
                    <MyPorto />

                </section>
            </div>
        )
    }
}

export default MyPortofolio;