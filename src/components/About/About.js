import React from 'react'
import Malik from "../../assets/malik.png"
import Styles from "../About/About.module.css"

const About = () => {

    return (
        <div className='relative'>
            <div className={`${Styles.background} h-auto w-4/5 lg:w-9/12 z-10`}>
                <div className='flex w-full flex-col lg:flex-row items-center lg:h-full lg:justify-center'>
                    <div className='flex p-5 items-center justify-center lg:w-3/6'>
                        <img src={Malik} alt="malik" srcset="" className='w-3/6 rounded shadow-sm' />
                    </div>
                    <div className='lg:w-3/6 lg:h-full flex items-center justify-center'>
                        <div className='flex flex-col h-auto m-5 p-3 gap-10'>
                            <h1 className='text-3xl font-semibold font-[Poppins] border-b border-black'>WHO AM I ?</h1>
                            <p className='text-xl font-thin'>saya adalah seorang mahasiswa teknik elektro, dengan peminatan telekomunikasi. saya menyukai programming sejak duduk di kelas 8 SMP. Pada saat itu saya belajar bahasa C++</p>
                            <button className='font-[Poppins] text-center rounded shadow bg-emerald-400 w-3/5 lg:w-2/5 h-10'>Baca Selengkapnya</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About