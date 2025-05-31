import React, { useEffect, useState } from 'react';
import TestimonialsCarousel from "./TestimonialsCarousel";
import { FAQSection } from "./FAQSection";
import { ContactForm } from "./ContactForm";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Services from "./Services";
import Pricing from "./Pricing";
import Achievements from "./Achievements";
import LiveChat from "../ui/LiveChat";
import Portfolio from "./Portfolio";
import Login from "../client/pages/Login";
import AOS from "aos";
import "aos/dist/aos.css";
import {
    LucideHome,
    LucidePhone,
    LucideUsers,
    LucideLayers,
    LucideCreditCard,
    LucideBriefcase,
} from "lucide-react";

const sections = [
    { id: "hero", label: "Home", icon: <LucideHome size={16} /> },
    { id: "services", label: "Services", icon: <LucideLayers size={16} /> },
    { id: "pricing", label: "Pricing", icon: <LucideCreditCard size={16} /> },
    { id: "portfolio", label: "Portfolio", icon: <LucideBriefcase size={16} /> },
    { id: "testimonials", label: "Testimonials", icon: <LucideUsers size={16} /> },
    { id: "contact", label: "Contact", icon: <LucidePhone size={16} /> },
];

const Home = () => {

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
        <div className="bg-white text-gray-900 scroll-smooth">
            {/* Navbar */}
            <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />

            <div className="pt-20">
                {/* Hero Section */}
                <Hero />
                <LiveChat />

                {/* Services Section */}
                <Services />

                {/* Pricing Section */}
                <Pricing />
                {/*Protfolio Section */}
                <Portfolio />
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
    );
}

export default Home;
