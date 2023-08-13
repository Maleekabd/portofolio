import React from "react";
import { AiOutlineInstagram } from "react-icons/ai"
import { BsLinkedin } from "react-icons/bs"
import Styles from "../../src/styles/navbar.module.css"

class Navbar extends React.Component {
    render() {
        return (
            <nav className={`${Styles.Navbar}`}>
                <ul className="flex justify-between items-center p-5 text-white">
                    <div>
                        <li>
                            <button type="button">
                                Logo
                            </button>
                        </li>
                    </div>
                    <div className="flex gap-5">
                        <li className="p-1">
                            <button className="tracking-wide text-black">malikabdurrasyid86@gmail.com</button>
                        </li>
                        <li className="p-1 flex items-center justify-between">
                            <AiOutlineInstagram className="w-7 h-8 text-black" />
                        </li>
                        <li className="p-1 flex items-center justify-between">
                            <BsLinkedin className="w-7 h-6 text-black" />
                        </li>
                    </div>
                </ul>
            </nav>
        )
    }
}

export default Navbar;