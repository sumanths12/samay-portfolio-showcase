
import React from 'react';
import { Button } from '@/components/ui/button';
import Section from './Section'; // Using the Section wrapper is not ideal here for full-bleed background

const HeroSection = () => {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 72;
      const elementPosition = projectsSection.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-navy via-primary-navy-light to-secondary-accent text-white section-padding">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 text-center content-max-width">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Hi, I'm Samay Susumanth
            </h1>
            <p className="text-xl sm:text-2xl text-slate-200 mb-2">
              A Full-Stack Software Developer
            </p>
            <p className="text-lg sm:text-xl text-slate-300 mb-8">
              Passionate about building scalable web applications and creating intuitive user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-secondary-accent hover:bg-opacity-90 text-primary-navy font-semibold px-8 py-3 text-lg">
                <a href="#projects" onClick={handleScrollToProjects}>View Projects</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-secondary-accent text-secondary-accent hover:bg-secondary-accent hover:text-primary-navy font-semibold px-8 py-3 text-lg">
                 <a href="#contact" onClick={(e) => {
                    e.preventDefault();
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      const navbarHeight = document.querySelector('nav')?.offsetHeight || 72;
                      const elementPosition = contactSection.getBoundingClientRect().top + window.scrollY;
                      const offsetPosition = elementPosition - navbarHeight;
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                  }}>Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=80" // Placeholder image for Samay
              alt="Samay Susumanth"
              className="rounded-full w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 object-cover border-4 border-secondary-accent shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
