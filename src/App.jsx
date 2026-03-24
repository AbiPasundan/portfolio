import React, { useState, useEffect } from 'react';

// icons
import { BiSun } from "react-icons/bi";
import { FaRegMoon } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { BsDownload } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiSwagger } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { SiMxlinux } from "react-icons/si"; 
import { FaLinux } from "react-icons/fa"; 
import { SiRedux } from "react-icons/si"; 
import { SiRedis } from "react-icons/si"; 
import { GrDocker } from "react-icons/gr"; 
import { SiKde } from "react-icons/si"; 
import { TbBrandVscode } from "react-icons/tb"; 
import { DiCss3 } from "react-icons/di"; 
import { AiOutlineHtml5 } from "react-icons/ai"; 
import { FaBootstrap } from "react-icons/fa"; 


// certificate
import dicoding1 from "@/assets/img/certificate/dicoding.png"
import dicoding2 from "@/assets/img/certificate/dicoding2.jpeg"
// project
import portfolio from "@/assets/img/project/portfolio.png"
import goRestFullApi from "@/assets/img/project/gorestfullapi.png"

import { Link } from 'react-router';
import Hero from './components/Hero';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [activeTab, setActiveTab] = useState('portfolio');

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const projects = [
        { id: 1, title: "Portfolio Website", category: "Web App", link: "https://github.com/AbiPasundan/portfolio", img: portfolio },
        { id: 2, title: "Golang RESTful API with Postgresql practice", category: "API", link: "https://github.com/AbiPasundan/GO-RESTful-API", img: goRestFullApi },
    ];

    const skills = [
        { name: 'HTML', level: 'Expert', icon: <AiOutlineHtml5 /> },
        { name: 'CSS', level: 'Expert', icon: <DiCss3 /> },
        { name: 'Bootstrap', level: 'Expert', icon: <FaBootstrap /> },
        { name: 'Tailwind', level: 'Expert', icon: <RiTailwindCssFill /> },
        { name: 'React', level: 'Intermediate', icon: <FaReact /> },
        { name: 'Node.js', level: 'Intermediate', icon: <FaNodeJs /> },
        
        { name: 'Go', level: 'Intermediate', icon: <FaGolang /> },
        { name: 'Swagger', level: 'Intermediate', icon: <SiSwagger /> },
        { name: 'Postgresql', level: 'Intermediate', icon: <DiPostgresql /> },

        { name: 'Linux', level: 'Intermediate', icon: <FaLinux /> },
        { name: 'MXLinux', level: 'Intermediate', icon: <SiMxlinux /> },
        { name: 'Docker', level: 'Intermediate', icon: <GrDocker /> },
        { name: 'Redis', level: 'Intermediate', icon: <SiRedis /> },
        { name: 'Redux', level: 'Intermediate', icon: <SiRedux /> },
        
        { name: 'Vscode', level: 'Intermediate', icon: <TbBrandVscode /> },
        { name: 'KDE Plasma', level: 'Intermediate', icon: <SiKde /> },

    ];

    
    const certificates = [
        {
            id: 1,
            title: "Sertifikat Kelas Algoritma dan Pemrograman Dasar",
            issuer: "CODEPOLITAN",
            date: "2024",
            img: "https://image.web.id/images/bg-certificate-new45845109a187f166.jpg",
            credential: "https://www.codepolitan.com/c/5KFP3WK/"
        },
        {
            id: 2,
            title: "Dasar Pemrograman JavaScript",
            issuer: "Dicoding Academy",
            date: "2023",
            img: dicoding1,
            credential: "https://www.dicoding.com/certificates/MEPJV21RJP3V"
        },
        {
            id: 3,
            title: "Perkenalan Javascript Modern",
            issuer: "Udemy",
            date: "2024",
            img: "https://udemy-certificate.s3.amazonaws.com/image/UC-c7000feb-c154-4358-8542-c98d4cd8e340.jpg?v=1720273478000",
            credential: "https://www.udemy.com/certificate/UC-c7000feb-c154-4358-8542-c98d4cd8e340/"
        },
        {
            id: 4,
            title: "Dasar Pemrograman Web",
            issuer: "Dicoding Academy",
            date: "2023",
            img: dicoding2,
            credential: "https://www.dicoding.com/certificates/QLZ9Q6MDEZ5D"
        },
    ];


    return (
        <div className="min-h-screen transition-colors duration-300 bg-slate-100 dark:bg-slate-950 p-4 md:p-8 font-sans text-slate-900 dark:text-white">

            <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl overflow-hidden relative border border-slate-200 dark:border-slate-800">

                <button onClick={() => setDarkMode(!darkMode)} className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:scale-110 transition-transform cursor-pointer" >
                    {darkMode ? <BiSun size={20} className="text-yellow-400" /> : <FaRegMoon size={20} className="text-slate-600" />}
                </button>

<Hero></Hero>

                <div className="px-8 pb-12">
                    <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl mb-8 max-w-md mx-auto">
                        <button onClick={() => setActiveTab('portfolio')} className={`flex-1 py-3 rounded-xl transition-all font-semibold ${activeTab === 'portfolio' ? 'bg-white dark:bg-slate-700 shadow-md' : 'text-slate-500'}`} >
                            Portfolio
                        </button>
                        <button onClick={() => setActiveTab('skills')} className={`flex-1 py-3 rounded-xl transition-all font-semibold ${activeTab === 'skills' ? 'bg-white dark:bg-slate-700 shadow-md' : 'text-slate-500'}`} >
                            Skills
                        </button>
                        <button onClick={() => setActiveTab('certificate')} className={`flex-1 py-3 rounded-xl transition-all font-semibold ${activeTab === 'certificate' ? 'bg-white dark:bg-slate-700 shadow-md' : 'text-slate-500'}`} >
                            Certificate
                        </button>
                    </div>

                    <div className="px-8 pb-12">


                        {activeTab === 'portfolio' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {projects.map((project) => (
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
                                ))}
                            </div>
                        )}
                        {activeTab === 'skills' && (
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {skills.map((skill, index) => (
                                    <div key={index} className="flex flex-col items-center p-6 bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-3xl transition-all hover:border-yellow-400 dark:hover:border-yellow-400 hover:shadow-lg group">
                                        <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-700 group-hover:bg-yellow-400 transition-colors">
                                            {skill.icon}
                                        </div>
                                        <span className="font-medium text-slate-700 dark:text-slate-200">{skill.name}</span>
                                        <span className="text-xs text-slate-400 mt-1">{skill.level}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'certificate' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-500">
                                {certificates.map((cert) => (
                                    <a href={cert.credential} key={cert.id}
                                        className="group relative bg-slate-50 dark:bg-slate-800/50 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700">
                                        <div className="aspect-4/3 overflow-hidden">
                                            <img src={cert.img} alt={cert.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                        </div>

                                        <div className="p-5">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="font-bold text-lg leading-tight">{cert.title}</h3>
                                                <span className="text-xs font-bold bg-yellow-400 text-slate-900 px-2 py-1 rounded-lg">
                                                    {cert.date}
                                                </span>
                                            </div>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                                                {cert.issuer}
                                            </p>
                                        </div>

                                        <div
                                            className="absolute inset-0 bg-slate-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <a href={cert.credential} className="bg-white text-slate-900 font-bold py-2 px-6 rounded-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                                View Certificate
                                                <FiExternalLink size={16} />
                                            </a>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        )}



                        <footer className="mt-16 text-center text-slate-400 text-sm">
                            © Wildan Nursyamsi. 2026 All rights reserved
                        </footer>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default App;