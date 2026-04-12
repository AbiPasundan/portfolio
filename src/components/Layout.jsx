
export default function Layout({children}) {
    return (
        <div className="min-h-screen transition-colors duration-300 bg-slate-100 dark:bg-slate-950 p-4 md:p-8 font-sans text-slate-900 dark:text-white">
            <div className="max-w-4xl mx-auto bg-[#F5F7F6] dark:bg-[#171B1C] rounded-[2.5rem] shadow-xl overflow-hidden relative border border-slate-200 dark:border-slate-800">
                {children}
            </div>
        </div>
    )
}