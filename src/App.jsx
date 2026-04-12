import { useState } from 'react';

// component
import Hero from '@/components/Hero';
import ToggleTheme from '@/components/ToggleTheme';
import Portfolio from '@/components/Portfolio';
import Skill from '@/components/utils/Skill';
import Certificate from '@/components/utils/Certificate';
import Footer from '@/components/Footer';
import Layout from '@/components/Layout';

const App = () => {
    const [activeTab, setActiveTab] = useState('portfolio');

    return (
        <Layout>
            <ToggleTheme />
            <Hero />
            <div className="px-8 pb-12">
                <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl mb-8 max-w-md mx-auto">
                    <button onClick={() => setActiveTab('portfolio')} className={`flex-1 py-3 rounded-xl transition-all font-semibold ${activeTab === 'portfolio' ? 'bg-white dark:bg-slate-700 shadow-md' : 'text-slate-500'}`} >
                        Portfolio
                    </button>
                    <button onClick={() => setActiveTab('skills')} className={`flex-1 py-3 rounded-xl transition-all font-semibold ${activeTab === 'skills' ? 'bg-white dark:bg-slate-700 shadow-md' : 'text-slate-500'}`} >
                        Skills
                    </button>
                    <button onClick={() => setActiveTab('certificate')} className={`flex-1 py-3 rounded-xl transition-all font-semibold ${activeTab === 'certificate' ? 'bg-white dark:bg-slate-700 shadow-md' : 'text-slate-500'}`} >
                        Certificate
                    </button>
                </div>

                <div className="px-8 pb-12">


                    {activeTab === 'portfolio' && (
                        <Portfolio />
                    )}
                    {activeTab === 'skills' && (
                        <Skill />
                    )}

                    {activeTab === 'certificate' && (
                        <Certificate />
                    )}

                    <Footer />

                </div>


            </div>
        </Layout>
    );
};

export default App;