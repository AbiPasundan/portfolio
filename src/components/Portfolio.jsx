import React from 'react'
import PortfolioProjects from './utils/PortfolioProjects'
// project
import portfolio from "@/assets/img/project/portfolio.png"
import goRestFullApi from "@/assets/img/project/gorestfullapi.png"

const projects = [
        { id: 1, title: "Portfolio Website", category: "Web App", link: "https://github.com/AbiPasundan/portfolio", img: portfolio },
        { id: 2, title: "Golang RESTful API with Postgresql practice", category: "API", link: "https://github.com/AbiPasundan/GO-RESTful-API", img: goRestFullApi },
    ];

function Portfolio() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
                <PortfolioProjects key={project.id} project={project} />
            ))}
        </div>
    )
}

export default Portfolio