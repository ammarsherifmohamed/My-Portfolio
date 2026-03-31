import { useEffect, useState } from "react";
import Particles from "./components/Particles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
  }, [theme]);

  return (
    <>
      <Particles />

      {/* Nav */}
      <Navbar theme={theme} setTheme={setTheme} />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Projects */}
      <Projects />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* BackToTop */}
      <BackToTop />
    </>
  );
}
