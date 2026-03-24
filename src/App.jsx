import React, { useState } from 'react';

// icons
import { FiExternalLink } from "react-icons/fi";


// certificate
import dicoding1 from "@/assets/img/certificate/dicoding.png"
import dicoding2 from "@/assets/img/certificate/dicoding2.jpeg"
// component
import Hero from './components/Hero';
import ToggleTheme from './components/ToggleTheme';
import Portfolio from './components/Portfolio';
import Skill from './components/utils/Skill';

const App = () => {
    const [activeTab, setActiveTab] = useState('portfolio');

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

                <ToggleTheme />

                <Hero />

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
                            <Portfolio />
                        )}
                        {activeTab === 'skills' && (
                            <Skill />
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