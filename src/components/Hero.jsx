import React from 'react'
import HeroSocialMedia from './utils/HeroSocialMedia'
import HeroLink from './utils/HeroLink'
import HeroProfile from './utils/HeroProfile'
import HeroWorkExperient from './utils/HeroWorkExperient'

function Hero() {
    return (
        <div className="flex flex-col items-center pt-12 pb-8 px-6 text-center">
            <HeroProfile />

            <h1 className="mt-4 text-3xl font-bold tracking-tight">Wildan Nursyamsi</h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium">Software Engineer</p>

            <HeroSocialMedia />

            <HeroWorkExperient />

            <HeroLink />
        </div>
    )
}

export default Hero