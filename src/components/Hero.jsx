import React from 'react'
import { BsDownload } from 'react-icons/bs'
import { Link } from 'react-router'
import HeroSocialMedia from './utils/HeroSocialMedia'

function Hero() {
    return (
        <div className="flex flex-col items-center pt-12 pb-8 px-6 text-center">
            <div className="relative group">
                <div className="w-32 h-32 rounded-full border-4 border-yellow-400 p-1 overflow-hidden">
                    <img src="https://i.pravatar.cc/300" alt="Wildan Nursyamsi" className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight">Wildan Nursyamsi</h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium">Software Engineer</p>

            <HeroSocialMedia />

            <div className="grid grid-cols-3 gap-8 mt-10 w-full max-w-lg">
                <div>
                    <p className="text-xl font-bold">7</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Years of work<br />experience</p>
                </div>
                <div>
                    <p className="text-xl font-bold">50+</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Completed<br />projects</p>
                </div>
                <div>
                    <p className="text-xl font-bold">20+</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Satisfied<br />customers</p>
                </div>
            </div>

            <div className="flex gap-4 mt-10">
                <a href="@/../public/cv/CV-Muhamad_Wildan_Nursyamsi.pdf" download="CV-Muhamad_Wildan_Nursyamsi.pdf" className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 px-8 rounded-2xl transition-all shadow-lg shadow-yellow-400/20 active:scale-95">
                    Download CV <BsDownload size={18} />
                </a>
                <Link to="/contact" className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 font-semibold py-4 px-8 rounded-2xl transition-all active:scale-95 border border-transparent dark:border-slate-700">
                    Contact me
                </Link>
            </div>
        </div>
    )
}

export default Hero