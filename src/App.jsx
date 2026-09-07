import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/home/Hero";
import FeaturedMenu from "./components/home/FeaturedMenu";
import AboutSection from "./components/home/AboutSection";
import ExperienceSection from "./components/home/ExperienceSection";
import Testimonials from "./components/home/Testimonials";
import About from './pages/About'
import Menu from "./pages/Menu";
import Contact from './pages/Contact'
import Reservation from './pages/Reservation'

function Home() {
  return (
    <>
      <Hero />
      <FeaturedMenu />
      <AboutSection />
      <ExperienceSection />
      <Testimonials />
    </>
  );
}

function App() {
  return (
    <main className="bg-[#fff7ed] text-[#171412]">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/menu" element={<Menu />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/reservation" element={<Reservation />}/>
      </Routes>

      <Footer />
    </main>
  );
}

export default App;
