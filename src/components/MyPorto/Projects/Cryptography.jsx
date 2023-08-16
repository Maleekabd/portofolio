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
        <>
            <ReusableComponents projects={projects} />
            <button onClick={handleClick} className="button rounded-full ml-80 w-56 h-12 border border-black p-2 text-black">See More</button>
            {comp && (
                <Layout>
                    <div className="flex justify-between">
                        <div>
                            {CryptographyProject.map(project => (
                                <ul key={project.id} className="flex gap-16">
                                    <li>
                                        <h1 className="font-thin text-xl italic">{project.id}. </h1>
                                    </li>
                                    <li>
                                        <h1 className="font-thin text-xl italic font-[Poppins]">{project.title}</h1>
                                    </li>
                                </ul>
                            ))}
                        </div>
                        <div className="border-l border-black w-2/6">
                            <ul className="font-[Poppins]">
                                <li>
                                    <h2 className="ml-5 underline underline-offset-4">Supporting Course</h2>
                                    <ul className="list-disc pl-4">
                                        <li className="ml-5 text-md font-thin">Security and Cryptography</li>
                                        <li className="ml-5 text-md font-thin">Bitcoin and Cryptocurrecies Technology</li>
                                    </ul>
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