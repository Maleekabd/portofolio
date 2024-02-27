import React from "react";
import { AiOutlineInstagram } from "react-icons/ai"
import { BsLinkedin } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
            <header className="border-t font-[Poppins] text-gray-400">
                <nav>
                    <div className="flex flex-row flex-wrap justify-between p-5">
                        <h2 className="min-[320px]:text-xs">&copy;All right reserved. Malik Abdurrasyid 2024</h2>
                        <div>
                            <ul className="flex flex-wrap justify-evenly gap-5 sm:text-xs">
                                <li>
                                    <Link>
                                        <h2 className="sr-only">malikabdurrasyid86@gmail.com</h2>
                                        <AiOutlineMail size={17}/>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <span className="sr-only">Instagram</span>
                                        <AiOutlineInstagram size={17} />
                                    </Link>
                                </li>
                                <li>
                                    <span className="sr-only">
                                        LinkedIn
                                    </span>
                                    <BsLinkedin size={17}/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Footer;