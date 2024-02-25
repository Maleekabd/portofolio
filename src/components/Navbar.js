import React from "react";
import { AiOutlineInstagram } from "react-icons/ai"
import { BsLinkedin } from "react-icons/bs"
import Styles from "../../src/styles/navbar.module.css"
import Scytale from "../assets/logo-no-background.png"
import { AiOutlineMail } from "react-icons/ai";

class Navbar extends React.Component {
    render() {
        return (
            <>
                <header className="z-10 lg:hidden">
                    <h1 className="p-2 text-center text-white font-bold text-md" behavior="" direction="left">Mohon Maaf atas ketidaknyamanannya, untuk sementara versi mobile sedang tahap pengembangan. terimakasih</h1>
                </header>
                <nav className={`sticky top-0 z-50 w-full ${Styles.Navbar}`}>
                    <ul className="flex items-center p-6 text-white">
                        <div className=" w-6/12">
                            <li className="ml-10">
                                <img src={Scytale} alt="logo" className="w-3/12" />
                            </li>
                        </div>
                        <div className="flex items-center justify-end w-6/12 gap-3 mr-10">
                            <li className="">
                                <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" className="lg:tracking-wide">
                                    <AiOutlineMail className="w-7 h-8"/>
                                </a>
                            </li>
                            <li className="flex items-center justify-between">
                                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/__malikabd/">
                                    <AiOutlineInstagram className="w-7 h-8 " />
                                </a>
                            </li>
                            <li className="flex items-center justify-between">
                                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/malik-abdurrasyid-1643b1282/">
                                    <BsLinkedin className="w-7 h-6 " />
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