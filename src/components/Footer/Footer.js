import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <header className="border-t font-[Poppins] text-gray-400">
                <nav>
                    <div className="flex flex-row flex-wrap justify-between p-5">
                        <h2>&copy;All right reserved. Malik Abdurrasyid</h2>
                        <div>
                            <ul className="flex flex-wrap justify-between gap-5">
                                <h2>malikabdurrasyid86@gmail.com</h2>
                                <li>Instagram</li>
                                <li>LinkedIn</li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Footer;