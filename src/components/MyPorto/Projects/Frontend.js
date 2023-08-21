import React from "react";
import ReusableComponents from "../UI/ReusableComponents";
import FRONTEND from "../../../assets/react.png"
import Layout from "../../../layout/layout";
import { useState } from "react";


const FrontendProjects = [
    {
        id: 1,
        title: "ShopBayy : E-Commerce",
        image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
        id: 2,
        title: "MusicSpot : Explore your favorite music",
        image: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
        id: 3,
        title: "Login Page",
        image: "https://images.unsplash.com/photo-1642480504730-3ba4bbfaa0ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
        id: 4,
        title: "Markdown Previewer",
        image: "https://images.unsplash.com/photo-1632062549850-44a0a6eede16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
        id: 5,
        title: "Quote Generator",
        image: "https://images.unsplash.com/photo-1494178270175-e96de2971df9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=780&q=80"
    },
    {
        id: 6,
        title: "Web Laboratory Multimedia Communication B-304"
    },
    {
        id: 7,
        title: "Vegetable Box : Get Fresh Vegetable from local farmer",
        image: "https://images.unsplash.com/photo-1609842947419-ba4f04d5d60f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
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
        <div>
            <ReusableComponents projects={projects} />
            <button onClick={handleClick} className="button rounded-full ml-28 lg:ml-80 w-56 h-12 border border-black p-2 text-black">See More</button>
            {comp && (
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
                                    <li>
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
            )
            }
        </div>
    )
}

export default Frontend;