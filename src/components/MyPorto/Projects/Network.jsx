import React from "react";
import ReusableComponents from "../UI/ReusableComponents";
import NETWORK from "../../../assets/network.jpg"
import { useState } from "react";
import Layout from "../../../layout/layout";


const NetworkProjects = [
    {
        id: 1,
        title: "Design,Implementation and Configuration SOHO Network"
    },
    {
        id: 2,
        title: "RT/RW Network"
    },
    {
        id: 3,
        title: "InterVLAN Routering Configuration"
    },
    {
        id: 4,
        title: "Implementation Port Security to shutdown unauthorized user in CISCO"
    }
]

const projects = [
    {
        id: 3,
        title: "Computer Network",
        subtitle: "Nodes and Connections: Exploring the Wonders of Computer Networking",
        paragraf: "Find more about my Cryptography projects. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium obcaecati totam consequuntur ex aliquam ab eum nihil necessitatibus rem, perspiciatis quasi dolores maxime corrupti reiciendis autem modi iure dolorem facilis eveniet optio",
        image: NETWORK
    }
]

const Network = () => {
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
                            {NetworkProjects.map(project => (
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

export default Network;