import { LucideBriefcase, LucideCreditCard, LucideHome, LucideLayers, LucideMenu, LucidePhone, LucideUsers, LucideX } from 'lucide-react';
import { useState } from 'react';


const sections = [
    { id: "hero", label: "Home", icon: <LucideHome size={16} /> },
    { id: "services", label: "Services", icon: <LucideLayers size={16} /> },
    { id: "pricing", label: "Pricing", icon: <LucideCreditCard size={16} /> },
    { id: "portfolio", label: "Portfolio", icon: <LucideBriefcase size={16} /> },
    { id: "testimonials", label: "Testimonials", icon: <LucideUsers size={16} /> },
    { id: "contact", label: "Contact", icon: <LucidePhone size={16} /> },
  ];
const NavBar = ({ activeSection, setActiveSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const [activeSection, setActiveSection] = useState("hero");
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    
      const handleNavClick = (e, id) => {
        e.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setActiveSection(id);
          setIsMenuOpen(false);
        }
      };
    return (
        <nav className="fixed w-full top-0 bg-white shadow z-50">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-purple-600">Project Partners</h1>
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-700 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <LucideX size={24} /> : <LucideMenu size={24} />}
                    </button>
                </div>
                <div className="hidden md:flex md:space-x-6 text-sm font-medium items-center">
                    {sections.map(({ id, label, icon }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            onClick={(e) => handleNavClick(e, id)}
                            className={`flex items-center gap-2 ${activeSection === id ? "text-purple-600 font-semibold" : "hover:text-purple-600"
                                }`}
                        >
                            {icon} {label}
                        </a>
                    ))}
                    {/* <button onClick={toggleTheme} className="ml-4 text-gray-700 dark:text-black">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button> */}
                </div>
            </div>
            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
                    {sections.map(({ id, label, icon }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            onClick={(e) => handleNavClick(e, id)}
                            className={`flex items-center text-gray-700 ${activeSection === id ? "text-purple-600 font-semibold" : "hover:text-purple-600"
                                }`}
                        >
                            <span className="inline mr-2">{icon}</span> {label}
                        </a>
                    ))}
                </div>
            )}

        </nav>
    );
}

export default NavBar;
