import { useState } from 'react';


import { BsFillSendFill } from "react-icons/bs";
import ContactSocial from './utils/ContactSocial';
function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        'bot-field': '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Kirim request ke Netlify
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formData })
        })
            .then(() => {
                setIsSubmitted(true);
                // Reset form di layar
                setFormData({ name: '', email: '', message: '', subject: '', 'bot-field': '' });
                setTimeout(() => setIsSubmitted(false), 5000);
            })
            .catch((error) => alert("Terjadi kesalahan: " + error));
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <ContactSocial />

            <div className="lg:col-span-2">
                {isSubmitted ? (
                    <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-green-50 dark:bg-green-900/20 rounded-3xl border border-green-100 dark:border-green-800">
                        <h3 className="text-2xl font-bold">Message Sent!</h3>
                        <p className="text-slate-500 dark:text-slate-400 mt-2">Terima kasih, Saya akan segera menghubungi Anda.</p>
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="mt-6 text-green-600 dark:text-green-400 font-semibold underline"
                        >
                            Send another message
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4" name="contact">
                        <input type="hidden" name="form-name" value="contact" />
                        
                        <p hidden>
                            <label>
                                Don’t fill this out if you're human: 
                                <input name="bot-field" value={formData['bot-field']} onChange={handleChange} />
                            </label>
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold ml-1">Your Name</label>
                                <input
                                    name="name"
                                    value={formData.name}
                                    required
                                    type="text"
                                    placeholder="John Doe"
                                    onChange={handleChange}
                                    className="w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold ml-1">Email Address</label>
                                <input
                                    name="email"
                                    value={formData.email}
                                    required
                                    type="email"
                                    placeholder="john@example.com"
                                    onChange={handleChange}
                                    className="w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold ml-1">Subject</label>
                            <input
                                name="subject"
                                value={formData.subject}
                                type="text"
                                placeholder="Project Inquiry"
                                onChange={handleChange}
                                className="w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold ml-1">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                required
                                rows="4"
                                placeholder="Tell me about your project..."
                                onChange={handleChange}
                                className="w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all resize-none"
                            ></textarea>
                        </div>

                        <button type="submit" className="w-full md:w-auto flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 px-10 rounded-2xl transition-all shadow-lg shadow-yellow-400/20 active:scale-95 group" >
                            Send Message
                            <BsFillSendFill size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default ContactForm