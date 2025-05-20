
import React from 'react';
import { Button } from '@/components/ui/button';
// Section component is not used here for full-bleed background

const HeroSection = () => {
  const handleScrollToTarget = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 72;
      const elementPosition = targetSection.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-background text-foreground section-padding">
      {/* Optional: Subtle gradient or pattern if desired, for now solid background */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-background via-slate-900 to-black opacity-50"></div> */}
      <div className="relative z-10 text-center content-max-width">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-400 to-red-300">
              Hi, I'm Samay Susumanth
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-2">
              A Full-Stack Software Developer
            </p>
            <p className="text-lg sm:text-xl text-slate-400 mb-8"> {/* Using slate-400 for slightly less emphasis than muted-foreground */}
              Passionate about building scalable web applications and creating intuitive user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" variant="default" className="text-primary-foreground font-semibold px-8 py-3 text-lg">
                <a href="#projects" onClick={(e) => handleScrollToTarget(e, 'projects')}>View Projects</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 text-lg">
                 <a href="#contact" onClick={(e) => handleScrollToTarget(e, 'contact')}>Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
            <img
              src="https://i.postimg.cc/rmKs2TKP/me.png" 
              alt="Samay Susumanth"
              className="rounded-full w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 object-cover border-4 border-primary shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
