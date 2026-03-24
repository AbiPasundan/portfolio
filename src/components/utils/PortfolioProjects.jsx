import React from 'react'
import { FiExternalLink } from 'react-icons/fi'

function PortfolioProjects({ project }) {
    return (
        <div key={project.id} className="group relative overflow-hidden rounded-3xl aspect-4/3 bg-slate-200 dark:bg-slate-800">
            <a href={project.link}>
                <img src={project.img} alt={project.title} className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-yellow-400/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-center">
                    <h3 className="text-slate-900 text-xl font-bold">{project.title}</h3>
                    <p className="text-slate-800 text-sm mb-4">{project.category}</p>
                    <FiExternalLink className="text-slate-900" />
                </div>
            </a>
        </div>
    )
}

export default PortfolioProjects