import React, { useState } from "react";
import ReusableComponents from "../UI/ReusableComponents";
import CRYPTOGRAPHY from "../../../assets/Cryptography.jpg"
import Layout from "../../../layout/layout";

const CryptographyProject = [
    {
        id: 1,
        title: "Project Client Server using python socket"
    }
    // {
    //     id: 2,
    //     title: "RSA Certificate Generator"
    // }
]

const projects = [
    {
        id: 1,
        title: "Cryptography",
        subtitle: "Securing Data in the Digital Realm: Exploring the World of Cryptography",
        paragraf: "Cryptography is the study of techniques for secure communication in the presence of third parties. It is used in a wide variety of applications, including secure electronic commerce, secure communication over the internet, and digital signatures.",
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
        <div>
            <ReusableComponents projects={projects} click={handleClick} />
            {comp && (
                <Layout>
                    <div className="">
                        <ul className="font-[Poppins]">
                            <li>
                                <h2 className="ml-5 underline underline-offset-4">Supporting Course</h2>
                                <ul className="list-disc pl-4">
                                    <li className="ml-5 text-md font-thin">Security and Cryptography</li>
                                    <li className="ml-5 text-md font-thin">Bitcoin and Cryptocurrecies Technology</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <div className="font-[Poppins] text-sm p-5 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 lg:grid-cols-4 gap-5 place-items-center">
                            {CryptographyProject.map(project => (
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
                </Layout>
            )}
        </div>
    )
}


export default Cryptography;