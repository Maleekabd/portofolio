import React from "react";
import Navbar from "./components/Navbar"
import LandingPage from "./components/landingPage";
import MyPortofolio from "./pages/MyPorto";
import Footer from "./pages/Footer";

class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <Navbar />
                </header>
                <main>
                    <LandingPage />
                    <MyPortofolio />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}

export default App;