import React from "react";
import Styles from "../styles/trapezoid.module.css"

class ReusableComponents extends React.Component {


    render() {
        return (
            <div className={'p-3 pr-0'}>
                {this.props.projects.map((project) => (
                    <ul ul key={project.id} className="flex lg:flex lg:justify-between lg:p-2 lg:gap-4 ">
                        <li className="w-2/12 lg:w-1/5 rounded relative flex flex-col items-center justify-between top-12">
                            <h1 className="text-lg lg:text-5xl italic w-2 lg:w-7 border-b border-white font-[Poppins]">
                                {project.id}
                            </h1>
                            <h1 className="w-80 hidden lg:block lg:-rotate-90 mb-[20em] text-xl font-bold text-start p-4 mt-5   italic">{(project.title).toUpperCase()}</h1>
                        </li>
                        <li className={`${Styles.card} rounded-[2em] h-auto w-10/12 lg:w-4/5 lg:rounded-[2em] relative`}>
                            <div>
                                <img alt={project.title} src={project.image} loading="lazy" className={`w-full h-4/5 object-cover lg:rounded-[2em] ${Styles.trapezoid}`} />
                            </div>
                            <h1 className="text-xl p-3 lg:text-5xl font-bold text-start mt-5   italic">{(project.title).toUpperCase()}</h1>
                            <h2 className="p-3 text-md lg:text-[20px] text-start underline underline-offset-4 my-2 font-thin font-[Poppins]">{project.subtitle}</h2>
                            <p className="text-start p-3 text-md lg:text-xl font-thin">{project.paragraf}</p>
                            <div className="p-3 ">
                            <button onClick={this.props.click} className="text-sm mt-10 w-full lg:text-md button rounded-[2em] lg:w-56 lg:h-12 border border-white p-2 ">See More</button>
                            </div>
                        </li>
                    </ul>
                ))
                }
            </div>
        )
    }
}

export default ReusableComponents;