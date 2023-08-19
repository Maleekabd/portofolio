import React from "react";
import Styles from "../styles/trapezoid.module.css"

class ReusableComponents extends React.Component {


    render() {
        return (
            <div className="p-3">
                {this.props.projects.map((project) => (
                    <ul ul key={project.id} className="flex lg:flex lg:justify-between lg:p-2 lg:gap-4 text-black">
                        <li className="w-2/12 lg:w-1/5 rounded relative flex flex-col items-center justify-between top-12">
                            <h1 className="text-lg lg:text-5xl italic w-2 lg:w-7 border-b border-black font-[Poppins]">
                                {project.id}
                            </h1>
                            <h1 className="w-80 hidden lg:block lg:-rotate-90 mb-[20em] text-xl font-bold text-start p-4 mt-5  text-black italic">{(project.title).toUpperCase()}</h1>
                        </li>
                        <li className={`h-auto w-10/12 lg:w-4/5 lg:rounded-[2em] relative`}>
                            <div>
                                <img src={project.image} className={`w-full h-4/5 object-cover lg:rounded-[2em] ${Styles.trapezoid}`} />
                            </div>
                            <h1 className="text-xl lg:text-5xl font-bold text-start p-4 mt-5  text-black italic">{(project.title).toUpperCase()}</h1>
                            <h2 className="text-md lg:text-[20px] text-start underline underline-offset-4 pl-5 my-2 font-thin font-[Poppins]">{project.subtitle}</h2>
                            <p className="p-5 pt-0 text-start text-black text-md lg:text-xl font-thin">{project.paragraf}</p>
                        </li>
                    </ul>
                ))
                }
            </div>
        )
    }
}

export default ReusableComponents;