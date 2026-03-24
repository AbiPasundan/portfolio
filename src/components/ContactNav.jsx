import ToggleTheme from "@/components/ToggleTheme";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from 'react-router';

function ContactNav() {
    return (
        <div className="flex justify-between items-center px-8 pt-8">
            <Link to="/" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors font-medium group">
                <AiOutlineArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                Back to Home
            </Link>

            <ToggleTheme />
        </div>
    )
}

export default ContactNav