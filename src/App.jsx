
import React, { useState, useEffect } from "react";
import TestimonialsCarousel from "./component/TestimonialsCarousel";
import { FAQSection } from "./component/FAQSection";
import { ContactForm } from "./component/ContactForm";
import NavBar from "./component/NavBar";
import Hero from "./component/Hero";
import Services from "./component/Services";
import Pricing from "./component/Pricing";
import Achievements from "./component/Achievements";
import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  LucideHome,
  LucidePhone,
  LucideUsers,
  LucideLayers,
  LucideCreditCard,
} from "lucide-react";
import LiveChat from "./ui/LiveChat";

const sections = [
  { id: "hero", label: "Home", icon: <LucideHome size={16} /> },
  { id: "services", label: "Services", icon: <LucideLayers size={16} /> },
  { id: "pricing", label: "Pricing", icon: <LucideCreditCard size={16} /> },
  { id: "testimonials", label: "Testimonials", icon: <LucideUsers size={16} /> },
  { id: "contact", label: "Contact", icon: <LucidePhone size={16} /> },
];



export default function DigitalMarketingLandingPage() {
  
  const [activeSection, setActiveSection] = useState("hero");
  

  

  

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let current = activeSection;

      for (const { id } of sections) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPos) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  useEffect(() => {
    const sectionsToAnimate = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsToAnimate.forEach((section) => observer.observe(section));
    return () => {
      sectionsToAnimate.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // const { isDark, toggleTheme } = useDarkMode();

  return (
    <>
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
    <div className="bg-white text-gray-900 scroll-smooth">
      {/* Navbar */}
      <NavBar />

      <div className="pt-20">
        {/* Hero Section */}
          <Hero />
          <LiveChat />

        {/* Services Section */}
        <Services />

        {/* Pricing Section */}
        <Pricing />
          
        {/* Achievements Section */}
        <Achievements />
      
        {/* Testimonials Section */}
        <TestimonialsCarousel />
        
        {/*FAQSection */}
          <FAQSection />
        {/* Contact Section */}
        <ContactForm />
        
      </div>
      <style>{`
      /* Fade in up animation */
      @keyframes fadeInUp {
        0% {
          opacity: 0;
          transform: translateY(20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-fadeInUp {
        animation: fadeInUp 0.6s ease forwards;
      }
    `}</style>
    </div>
  </>
   
  );
}
