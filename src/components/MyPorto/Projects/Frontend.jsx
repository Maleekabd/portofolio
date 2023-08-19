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
    }, {
        id: 8,
        title: "Web Portofolio"
    }
]

const projects = [
    {
        id: 2,
        title: "FRONTEND WEB DEV",
        subtitle: "Navigating the UI Landscape: Exploring Frontend Development using React",
        paragraf: "React is a popular JavaScript library for building user interfaces (UIs) for web applications. React is a popular choice for front-end developers because it is fast, easy to use, and can be used to build a variety of web applications.",
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
            <button onClick={handleClick} className="button rounded-full ml-28 lg:ml-80 w-56 h-12 border border-black p-2 text-black">See More</button>
            {comp && (
                <Layout>
                    <div className="flex justify-between">
                        <div>
                            {FrontendProjects.map(project => (
                                <ul key={project.id} className="flex gap-16">
                                    <li>
                                        <h1 className="font-thin text-xl italic">{project.id}. </h1>
                                    </li>
                                    <li>
                                        <h1 className="font-thin text-md lg:text-xl italic font-[Poppins]">{project.title}</h1>
                                    </li>
                                </ul>
                            ))}
                        </div>
                        <div className="border-l border-black w-2/6">
                            <ul className="font-[Poppins]">
                                <li>
                                    <h2 className="ml-5 underline underline-offset-4">Supporting Course</h2>
                                    <ul className="list-disc pl-4">
                                        <li className="ml-5 text-md font-thin">FreeCodeCamp. Frontend with React</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Layout >
            )
            }
        </>
    )
}

export default Frontend;