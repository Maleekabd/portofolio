import React from "react";
import { AiOutlineInstagram } from "react-icons/ai"
import { BsLinkedin } from "react-icons/bs"
import Styles from "../../src/styles/navbar.module.css"
import Scytale from "../assets/logo-no-background.png"

class Navbar extends React.Component {
    render() {
        return (
            <>
                <header>
                    <h1 className="p-3 text-rose-400 font-bold text-md" behavior="" direction="left">Mohon Maaf atas ketidaknyamanannya, untuk sementara versi mobile sedang tahap pengembangan. terimakasih</h1>
                </header>
                <nav className={`${Styles.Navbar}`}>
                    <ul className="flex justify-between items-center p-5 text-white">

                        <li>
                            <button type="button">
                                <img src={Scytale} alt="logo" className="w-1/12" />
                            </button>
                        </li>

                        <div className="flex gap-5">
                            <li className="p-1 hidden lg:block">
                                <a className="lg:tracking-wide text-black">malikabdurrasyid86@gmail.com</a>
                            </li>
                            <li className="p-1 flex items-center justify-between">
                                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/__malikabd/">
                                    <AiOutlineInstagram className="w-7 h-8 text-black" />
                                </a>
                            </li>
                            <li className="p-1 flex items-center justify-between">
                                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/malik-abdurrasyid-1643b1282/">
                                    <BsLinkedin className="w-7 h-6 text-black" />
                                </a>
                            </li>
                        </div>
                    </ul>
                </nav>
            </>
        )
    }
}

export default Navbar;