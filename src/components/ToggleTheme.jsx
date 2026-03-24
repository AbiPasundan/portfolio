import { useEffect, useState } from 'react'
import { BiSun } from 'react-icons/bi';
import { FaRegMoon } from 'react-icons/fa';

function ToggleTheme() {
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme === 'dark';

        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <button
            onClick={() => setDarkMode(prev => !prev)}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:scale-110 transition-transform cursor-pointer"
        >
            {darkMode
                ? <BiSun size={20} className="text-yellow-400" />
                : <FaRegMoon size={20} className="text-slate-600" />
            }
        </button>
    )
}

export default ToggleTheme;