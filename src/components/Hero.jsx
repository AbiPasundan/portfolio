import React from 'react'
import HeroSocialMedia from './utils/HeroSocialMedia'
import HeroLink from './utils/HeroLink'
import HeroProfile from './utils/HeroProfile'

function Hero() {
    return (
        <div className="flex flex-col items-center pt-12 pb-8 px-6 text-center">
            <HeroProfile />

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