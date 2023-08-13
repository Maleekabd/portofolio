import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <header className="border-t font-[Poppins]">
                <nav>
                    <div className="flex flex-row flex-wrap justify-between p-5 h-40">
                        <h2>malikabdurrasyid86@gmail.com</h2>
                        <div>
                            <ul className="flex flex-wrap justify-between gap-5">
                                <li>Instagram</li>
                                <li>LinkedIn</li>
                            </ul>
                        </div>
                    </div>
                    <footer className="p-5">
                        <h2 className="font-bold">&copy;All right reserved. Shopbayy</h2>
                    </footer>
                </nav>
            </header>
        )
    }
}

export default Footer;