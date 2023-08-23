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
        <div>
            <ReusableComponents projects={projects} click={handleClick}/>
            {/* <button onClick={handleClick} className="button rounded-full ml-28 lg:ml-80 w-56 h-12 border border-black p-2 text-black">See More</button> */}
            {comp && (
                <Layout>
                    <ul className="font-[Poppins]">
                        <li>
                            <h2 className="ml-5 underline underline-offset-4">Supporting Course</h2>
                            <ul className="list-disc pl-4">
                                <li className="ml-5 text-md font-thin">Internet engineer</li>
                            </ul>
                        </li>
                    </ul>
                    <div className="">
                        <div className="font-[Poppins] text-sm p-5 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 lg:grid-cols-4 gap-5 place-items-center">
                            {NetworkProjects.map(project => (
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
            )
            }
        </div>
    )
}

export default Network;