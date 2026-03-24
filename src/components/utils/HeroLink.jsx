import { BsDownload } from 'react-icons/bs'
import { Link } from 'react-router'

function HeroLink() {
    return (
        <div className="flex gap-4 mt-10">
            <a href="@/../public/cv/CV-Muhamad_Wildan_Nursyamsi.pdf" download="CV-Muhamad_Wildan_Nursyamsi.pdf" className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 px-8 rounded-2xl transition-all shadow-lg shadow-yellow-400/20 active:scale-95">
                Download CV <BsDownload size={18} />
            </a>
            <Link to="/contact" className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 font-semibold py-4 px-8 rounded-2xl transition-all active:scale-95 border border-transparent dark:border-slate-700">
                Contact me
            </Link>
        </div>
    )
}

export default HeroLink