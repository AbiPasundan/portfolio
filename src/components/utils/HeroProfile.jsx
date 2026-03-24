import React from 'react'

function HeroProfile() {
    return (
        <div className="relative group">
            <div className="w-32 h-32 rounded-full border-4 border-yellow-400 p-1 overflow-hidden">
                <img src="https://i.pravatar.cc/300" alt="Wildan Nursyamsi" className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
        </div>
    )
}

export default HeroProfile