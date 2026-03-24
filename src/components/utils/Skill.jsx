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

function Skill() {
    return (
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
    )
}

export default Skill