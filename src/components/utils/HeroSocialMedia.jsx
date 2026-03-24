import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'

function HeroSocialMedia() {
    return (
        <div className="flex gap-4 mt-4 text-slate-400">
            <a href="https://github.com/AbiPasundan">
                <AiOutlineGithub className="hover:text-black dark:hover:text-white cursor-pointer" size={20} />
            </a>
            <a href="#">
                <BsFacebook className="hover:text-blue-400 cursor-pointer" size={20} />
            </a>
            <a href="https://linkedin.com/in/muhamad-wildan-nursyamsi">
                <BsLinkedin className="hover:text-blue-600 cursor-pointer" size={20} />
            </a>
            <a href="#">
                <BsInstagram className="hover:text-red-500 cursor-pointer" size={20} />
            </a>
        </div>
    )
}

export default HeroSocialMedia