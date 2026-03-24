import React from 'react'
import { FiExternalLink } from 'react-icons/fi'

function CertificateCard({ cert }) {
    return (
        <div key={cert.id} className="group relative bg-slate-50 dark:bg-slate-800/50 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700">
            <div className="aspect-4/3 overflow-hidden">
                <img src={cert.img} alt={cert.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div>
                <a href={cert.credential}>
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
                </a>
            </div>
            <a href={cert.credential} className="absolute inset-0 flex items-center justify-center bg-slate-900/60 opacity-0 -translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 " >
                <span className="bg-white text-slate-900 font-bold py-2 px-6 rounded-xl flex items-center gap-2">
                    View Certificate
                    <FiExternalLink size={16} />
                </span>
            </a>

        </div>
    )
}

export default CertificateCard