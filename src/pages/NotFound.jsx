import notFoundLight from "@/assets/img/light-404.png"
import notFoundDark from "@/assets/img/dark-404.png"
import ContactNav from "@/components/ContactNav";
import Layout from "@/components/Layout";

export default function NotFound() {
  const theme = localStorage.getItem('theme');
  return (
    <Layout>
      <ContactNav />
      <div>
        <img className='w-full' src={theme == 'light' ? notFoundLight : notFoundDark} alt="404" />
      </div>
    </Layout>
  );
}
