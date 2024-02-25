import React from "react";
import ReusableComponents from "../UI/ReusableComponents";
import FRONTEND from "../../../assets/react.png"
import Layout from "../../../layout/layout";
import { useState } from "react";
import Styles from "../styles/trapezoid.module.css"
import ShopBayy from '../../../assets/skill_img/shopbay.jpeg'
import MusicSpot from '../../../assets/skill_img/musicspot.jpeg'
import Login from '../../../assets/skill_img/Login.jpeg'
import Markdown from '../../../assets/skill_img/Markdown.jpeg'
import Quote from '../../../assets/skill_img/QuoteGen.jpeg'
import Vegetable from '../../../assets/skill_img/vegetable_box.jpeg'
const FrontendProjects = [
    {
        id: 1,
        title: "ShopBayy : E-Commerce",
        image: ShopBayy
    },
    {
        id: 2,
        title: "MusicSpot : Explore your favorite music",
        image: MusicSpot
    },
    {
        id: 3,
        title: "Login Page",
        image: Login
    },
    {
        id: 4,
        title: "Markdown Previewer",
        image: Markdown
    },
    {
        id: 5,
        title: "Quote Generator",
        image: Quote
    },
    {
        id: 6,
        title: "Web Laboratory Multimedia Communication B-304"
    },
    {
        id: 7,
        title: "Vegetable Box : Get Fresh Vegetable from local farmer",
        image: Vegetable,
    }, {
        id: 8,
        title: "Web Portofolio"
    }
]

const Frontend = () => {

    return (
        <div>
            <Layout>
                <div className="">
                    <ul className="font-[Poppins]">
                        <li>
                            <h2 className="ml-5 underline underline-offset-4">Supporting Course</h2>
                            <ul className="list-disc pl-4">
                                <li className="ml-5 text-md font-thin">FreeCodeCamp. Frontend with React</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <div className="font-[Poppins] text-sm p-5 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 lg:grid-cols-4 gap-5 place-items-center">
                        {FrontendProjects.map(project => (
                            <ul key={project.id}>
                                <li className={`${Styles.card} rounded`}>
                                    <div className="h-96 w-60 rounded shadow-md">
                                        <img loading="lazy" className="rounded h-64 object-cover w-full" src={project.image} alt={project.title} />
                                        <div className="p-2 h-32 relative ">
                                            <h1>{project.title}</h1>
                                            <button className="absolute bottom-0 left-0 p-2 w-full ">
                                                <h2 className="p-1 bg-emerald-400 rounded text-white hover:text-black hover:opacity-75">visit</h2>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        ))}
                    </div>
                </div>
            </Layout >
        </div>
    )
}

export default Frontend;