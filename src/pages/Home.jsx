import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home({ darkMode, setDarkMode }) {
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
    </>
  );
}
