
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      let currentSection = 'home';
      navLinks.forEach(link => {
        const section = document.getElementById(link.href.substring(1));
        if (section) {
          const navbarHeight = document.querySelector('nav')?.offsetHeight || 72; // Dynamic navbar height
          const sectionTop = section.offsetTop - navbarHeight - 20; // Adjusted for navbar height + offset
          const sectionBottom = sectionTop + section.offsetHeight;
          if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            currentSection = link.href.substring(1);
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 72;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    if (isOpen) setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-card shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="content-max-width px-4 md:px-6 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className={`text-2xl font-bold font-roboto transition-colors text-foreground hover:text-primary`}>
          Samay S.
        </a>
        <div className="hidden md:flex space-x-2 lg:space-x-4 items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary
                ${activeSection === link.href.substring(1) ? 'text-primary font-semibold' : 'text-muted-foreground'}
              `}
            >
              {link.label}
            </a>
          ))}
          <Button 
            asChild 
            variant="default" // This will use the new primary (red) color
            size="sm"
            className="text-primary-foreground"
          >
            <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Contact Me</a>
          </Button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className={`focus:outline-none text-foreground`}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden absolute top-full left-0 right-0 shadow-xl pb-4 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-card' : 'bg-background/95 backdrop-blur-md'}`}>
          <div className="flex flex-col items-center space-y-2 px-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`block w-full text-center px-3 py-3 rounded-md text-base font-medium transition-colors hover:bg-primary hover:text-primary-foreground
                  ${activeSection === link.href.substring(1) ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}
                `}
              >
                {link.label}
              </a>
            ))}
            <Button 
              asChild 
              variant="default"
              className="w-full mt-2 text-primary-foreground"
            >
               <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Contact Me</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
