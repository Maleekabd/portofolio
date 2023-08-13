import React, { useState } from "react";
import ReusableComponents from "../UI/ReusableComponents";
import CRYPTOGRAPHY from "../../../assets/Cryptography.jpg"
import { useNavigate } from "react-router-dom";
import Network from "./Network";
import Layout from "../../../layout/layout";

const CryptographyProject = [
    {
        id: 1,
        title: "Project Client Server using python socket"
    },
    {
        id: 2,
        title: "RSA Certificate Generator"
    }
]

const projects = [
    {
        id: 1,
        title: "Cryptography",
        subtitle: "Securing Data in the Digital Realm: Exploring the World of Cryptography",
        paragraf: "Find more about my Cryptography projects. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium obcaecati totam consequuntur ex aliquam ab eum nihil necessitatibus rem, perspiciatis quasi dolores maxime corrupti reiciendis autem modi iure dolorem facilis eveniet optio",
        image: CRYPTOGRAPHY
    }
]
const Cryptography = () => {

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
                            {CryptographyProject.map(project => (
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
            )}
        </>
    )
}


export default Cryptography;