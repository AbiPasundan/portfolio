import Footer from '@/components/Footer';


import ContactNav from '@/components/ContactNav';
import ContactHeader from '@/components/ContactHeader';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {

  return (
    <div className="min-h-screen transition-colors duration-300 bg-slate-100 dark:bg-slate-950 p-4 md:p-8 font-sans text-slate-900 dark:text-white">

      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl overflow-hidden relative border border-slate-200 dark:border-slate-800">

        <ContactNav />

        <div className="p-8 md:p-12">
          <ContactHeader />

          <ContactForm />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;