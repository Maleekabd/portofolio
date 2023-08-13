import React from "react";
import ReusableComponents from "../UI/ReusableComponents";
import FRONTEND from "../../../assets/react.png"
import Layout from "../../../layout/layout";
import { useState } from "react";


const FrontendProjects = [
    {
        id: 1,
        title: "ShopBayy : E-Commerce"
    },
    {
        id: 2,
        title: "MusicSpot : Explore your favorite music"
    },
    {
        id: 3,
        title: "Login Page"
    },
    {
        id: 4,
        title: "Markdown Previewer"
    },
    {
        id: 5,
        title: "Quote Generator"
    },
    {
        id: 6,
        title: "Web Laboratory Multimedia Communication B-304"
    },
    {
        id: 7,
        title: "Vegetable Box : Get Fresh Vegetable from local farmer"
    }
]

const projects = [
    {
        id: 2,
        title: "FRONTEND WEB DEV",
        subtitle: "Navigating the UI Landscape: Exploring Frontend Development using React",
        paragraf: "Find more about my Cryptography projects. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium obcaecati totam consequuntur ex aliquam ab eum nihil necessitatibus rem, perspiciatis quasi dolores maxime corrupti reiciendis autem modi iure dolorem facilis eveniet optio",
        image: FRONTEND
    }
]


const Frontend = () => {

    const [comp, setComp] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setComp(!comp);
    }

    return (
        <>
            <ReusableComponents projects={projects} />
            <button onClick={handleClick} className="rounded-full ml-72 w-56 h-12 border border-black p-2 text-black">See More</button>
            {comp && (
                <Layout>
                    <div className="flex justify-between">
                        <div>
                            {FrontendProjects.map(project => (
                                <ul key={project.id} className="flex gap-16">
                                    <li>
                                        <h1 className="font-thin text-2xl italic">{project.id}. </h1>
                                    </li>
                                    <li>
                                        <h1 className="font-thin text-2xl italic font-[Poppins]">{project.title}</h1>
                                    </li>
                                </ul>
                            ))}
                        </div>
                        <div className="border-l border-black w-1/5">
                            <ul>
                                <li>
                                    <h1 className="ml-5 underline underline-offset-4 font-[Poppins]">Supporting Course</h1>
                                </li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </Layout>
            )
            }
        </>
    )
}

export default Frontend;