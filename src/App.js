import React from "react";
import Navbar from "./components/Navbar"
import LandingPage from "./components/landingPage";
import MyPortofolio from "./pages/MyPorto";
import Footer from "./pages/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutMeSpesific } from "./components/About/About";
import MySkills from "./components/MySkills/MySkills";
import Frontend from "./components/MyPorto/Projects/Frontend";
import About from "./components/About/About";


class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <header><Navbar /></header>
                                <main>
                                    <LandingPage />
                                    <About />
                                    <MySkills />
                                </main>
                                <footer><Footer /></footer>
                            </>
                        } />
                        <Route path="/aboutme" element={
                            <>
                                <header><Navbar /></header>
                                <main>
                                    <AboutMeSpesific />
                                </main>
                                <footer><Footer /></footer>
                            </>
                        } />
                        <Route path="/software-engineer-react-projects" element={
                            <>
                                <header><Navbar /></header>
                                <main>
                                    <Frontend />
                                </main>
                                <footer><Footer /></footer>
                            </>
                        } />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;