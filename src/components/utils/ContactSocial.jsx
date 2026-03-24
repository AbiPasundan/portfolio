import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
function ContactSocial() {
    return (
        <div className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center text-slate-900 mb-4">
                    <AiOutlineMail size={24} />
                </div>
                <h3 className="font-bold text-lg">Email Me</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">johndoe@example.com</p>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center text-slate-900 mb-4">
                    <BiMap size={24} />
                </div>
                <h3 className="font-bold text-lg">Location</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Bandung, West Java, ID</p>
            </div>

            <div className="flex justify-center lg:justify-start gap-4 pt-4">
                <a href='https://linkedin.com/in/muhamad-wildan-nursyamsi' className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-yellow-400 hover:text-slate-900 transition-all">
                    <AiFillLinkedin size={20} />
                </a>
                <a href='https://github.com/AbiPasundan' className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-yellow-400 hover:text-slate-900 transition-all">
                    <BsGithub size={20} />
                </a>
            </div>
        </div>
    )
}

export default ContactSocial