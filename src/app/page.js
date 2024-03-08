import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
