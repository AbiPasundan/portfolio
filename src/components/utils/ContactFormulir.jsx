function ContactForm() {
    return (
        <form onSubmit={handleSubmit} className="space-y-4" name="contact" method="POST" action="/" data-netlify="true" data-netlify-honeypot="bot-field" netlify>
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
                <input name="bot-field" />
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-sm font-semibold ml-1">Your Name</label>
                    <input
                        name="name"
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold ml-1">Email Address</label>
                    <input
                        name="email"
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold ml-1">Subject</label>
                <input
                    name="subject"
                    type="text"
                    placeholder="Project Inquiry"
                    className="w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold ml-1">Message</label>
                <textarea
                    name="message"
                    required
                    rows="4"
                    placeholder="Tell me about your project..."
                    className="w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all resize-none"
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full md:w-auto flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 px-10 rounded-2xl transition-all shadow-lg shadow-yellow-400/20 active:scale-95 group"
            >
                Send Message
                <BsFillSendFill size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
        </form>
    )
}

export default ContactForm