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
        paragraf: "A computer network is a group of computers that are connected to each other to share resources, such as data, hardware, and software. Computer networks can be classified based on their size, topology, and technology.",
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
            <button onClick={handleClick} className="button rounded-full ml-28 lg:ml-80 w-56 h-12 border border-black p-2 text-black">See More</button>
            {comp && (
                <Layout>
                    <div className="flex justify-between">
                        <div>
                            {NetworkProjects.map(project => (
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
                                        <li className="ml-5 text-md font-thin">Internet Engineering</li>
                                        <li className="ml-5 text-md font-thin">Prepare for the CompTIA Network+ (N10-007) Exam</li>
                                    </ul>
                                </li>
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