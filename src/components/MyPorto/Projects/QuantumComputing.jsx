import React from "react";
import ReusableComponents from "../UI/ReusableComponents";
import QUANTUM from "../../../assets/photon-Qubit.png"
import Layout from "../../../layout/layout";
import { useState } from "react";

const QuantumProjects = [
    {
        id: 1,
        title: "Quantum Cryptography using BB84 Protocol"
    }, {
        id: 2,
        title: "Implementation Quantum Teleportation Using Python: QISKIT "
    }
]

const projects = [
    {
        id: 4,
        title: "quantum computing",
        subtitle: "Bits and Qubits: Journeying into the Quantum Computing Frontier",
        paragraf: "Quantum computing is a type of computing that uses quantum mechanics to perform calculations. Quantum computers are able to solve certain types of problems that are intractable for classical computers, such as factoring large numbers and simulating physical systems.",
        image: QUANTUM
    }
]

const QuantumComputing = () => {
    const [comp, setComp] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setComp(!comp);
    }


    return (
        <>
            <ReusableComponents projects={projects} />
            <div className="pb-20">
                <button onClick={handleClick} className="button rounded-full ml-80 w-56 h-12 border border-black p-2 text-black">See More</button>
                {comp && (
                    <Layout>
                        <div className="flex justify-between">
                            <div>
                                {QuantumProjects.map(project => (
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
            </div>
        </>
    )
}

export default QuantumComputing;