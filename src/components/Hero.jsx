import React from 'react'
import HeroSocialMedia from './utils/HeroSocialMedia'
import HeroLink from './utils/HeroLink'

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

            <HeroLink />
        </div>
    )
}

export default Hero