import React from 'react'
import Malik from "../../assets/malik.png"
import Styles from "./About.module.css"
import { useRef } from 'react'
import { useState } from 'react'

const About = () => {
    const [isScrolling, setIsScrolling] = useState(false);

    const scrollToSection = (sectionId) => {
        setIsScrolling(true);

        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => setIsScrolling(false), 1000); // Setelah 1 detik, atur isScrolling kembali ke false
        }
    };

    return (
        <div className='relative'>
            <div className={`${Styles.background} absolute left-40 top-[35em] h-[35em] w-9/12 z-10`}>
                <div className='flex items-center h-full justify-center'>
                    <div className='flex items-center justify-center w-3/6'>
                        <img src={Malik} alt="malik" srcset="" className='w-4/6 rounded shadow-sm' />
                    </div>
                    <div className='w-3/6 h-full flex items-center justify-center'>
                        <div className='flex flex-col h-auto m-5 p-3 gap-10'>
                            <h1 className='text-3xl font-semibold font-[Poppins] border-b border-black'>Hello, I'm Malik Abdurrasyid</h1>
                            <p className='text-xl font-thin'>Saya adalah seorang elektro engineer, dengan peminatan telekomunikasi. di telekomunikasi ada mata kuliah sekuriti dan kriptografi, dan saya menekuni MK tersebut </p>
                            <button onClick={() => scrollToSection('about')} disabled={isScrolling} className='font-[Poppins] text-center rounded shadow bg-emerald-400 w-2/5 h-10'>Baca Selengkapnya</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About