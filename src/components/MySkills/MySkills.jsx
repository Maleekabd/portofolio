import React from 'react'
import { Link } from 'react-router-dom'

const skills = [
    {
        title: "Network Engineer",
        description: "An information security analyst is a professional responsible for protecting computer systems, networks, and data from security threats such as hacking, malware, and data theft.",
        path: "information-security-analyst-projects"
    },
    {
        title: "Quantum Software Engineer",
        description: "A quantum software engineer is a professional who designs and develops software for quantum computers. They are responsible for creating algorithms and applications that leverage the unique properties of quantum mechanics to solve complex problems more efficiently than classical computers.",
        path: "quantum-software-engineer-projects"
    },
    {
        title: "Software Engineer - React",
        description: "A React software engineer specializes in developing user interfaces and web applications using the React JavaScript library. They design and implement interactive components, manage state efficiently, and ensure the application's performance and responsiveness.",
        path: "software-engineer-react-projects"
    },
]

const MySkills = () => {
    return (
        <section className='h-screen p-3'>
            <div className='m-3'>
                <h1 className='text-4xl font-bold italic'>My Skill(s)</h1>
                <div className='grid grid-cols-2 gap-5 m-3'>
                    {skills.map(skill => (
                        <>
                            <div className='relative h-56 border rounded-xl p-3 font-[Poppins] font-extrabold'>
                                <h1 className='text-2xl'>{skill.title}</h1>
                                <p className='text-md font-thin text-justify'>{skill.description}</p>
                                <button className='hover:bg-emerald-400 font-thin absolute bottom-0 border rounded-full p-2 px-5 my-3'>
                                    <Link to={`/${skill.path}`}>See Projects</Link>
                                </button>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MySkills