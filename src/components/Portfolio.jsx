import React from 'react'
import PortfolioProjects from './utils/PortfolioProjects'
// project
import portfolio from "@/assets/img/project/portfolio.png"
import coffeeShop from "@/assets/img/project/coffeeshop.png"
import sortlink from "@/assets/img/project/sortlink.png"

const projects = [
    { id: 1, title: "Portfolio Website", category: "Web App", link: "https://github.com/AbiPasundan/portfolio", img: portfolio },
    { id: 2, title: "Coffee Shop Frontend", category: "Web App", link: "https://github.com/AbiPasundan/koda-b6-react", img: coffeeShop },
    { id: 3, title: "Sortlink", category: "Web App", link: "https://github.com/AbiPasundan/sortlink", img: sortlink },
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