import React from "react";
import Styles from "../styles/trapezoid.module.css"

class ReusableComponents extends React.Component {


    render() {
        return (
            <div className="p-3">
                {this.props.projects.map((project) => (
                    <ul ul key={project.id} className="flex justify-between p-2 gap-4 text-black">
                        <li className="w-1/5 rounded relative flex flex-col items-center justify-between top-12">
                            <h1 className=" text-5xl italic w-7 border-b border-black font-[Poppins]">
                                {project.id}
                            </h1>
                            <h1 className="w-80 -rotate-90 mb-[20em] text-xl font-bold text-start p-4 mt-5  text-black italic">{(project.title).toUpperCase()}</h1>
                        </li>
                        <li className={`h-auto w-4/5 rounded-[2em] relative ${Styles.trapezoid}`}>
                            <div>
                                <img src={project.image} className="w-full h-4/5 object-cover rounded-[2em]" />
                            </div>
                            <h1 className="text-5xl font-bold text-start p-4 mt-5  text-black italic">{(project.title).toUpperCase()}</h1>
                            <h2 className="text-[16px] italic text-start p-4 my-2 font-[Poppins]">{project.subtitle}</h2>
                            <p className="p-5 pt-0 text-justify text-black text-sm font-[Poppins]">{project.paragraf}</p>
                        </li>
                    </ul>
                ))
                }
            </div>
        )
    }
}

export default ReusableComponents;