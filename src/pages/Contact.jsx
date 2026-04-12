import Footer from '@/components/Footer';


import ContactNav from '@/components/ContactNav';
import Layout from '@/components/Layout';
import ContactHeader from '@/components/ContactHeader';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {

  return (
    <Layout>
      <ContactNav />
      <div className="p-8 md:p-12">
        <ContactHeader />
        <ContactForm />
      </div>
      <Footer />
    </Layout>
  );
};

export default ContactPage;