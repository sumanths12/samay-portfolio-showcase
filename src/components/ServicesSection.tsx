
import React from 'react';
import Section from './Section';
import { Check } from 'lucide-react';

const services = [
  "Responsive UI/UX Design: Crafting visually appealing and user-friendly interfaces that adapt to all devices.",
  "Frontend Development: Building interactive and dynamic web experiences using modern JavaScript frameworks like React.",
  "Backend Integration: Seamlessly connecting frontend applications with robust backend systems and APIs.",
  "Full-Stack Solutions: Offering end-to-end web development services from concept to deployment.",
];

const ServicesSection = () => {
  return (
    <Section id="services" bgColor="bg-background" textColor="text-foreground">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Web Design & Development Services</h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg text-center text-muted-foreground mb-10">
          I offer professional web design and development services to bring your ideas to life. My focus is on creating modern, responsive, and user-friendly websites tailored to your specific needs.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="flex items-start p-4 bg-card rounded-lg shadow border border-border">
              <Check className="text-primary w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <p className="text-muted-foreground">{service}</p>
            </div>
          ))}
        </div>
         <p className="text-lg text-center text-muted-foreground mt-10">
          Whether you need a brand new website, a redesign, or specific feature development, I'm here to help you achieve your online goals. Let's build something great together!
        </p>
      </div>
    </Section>
  );
};

export default ServicesSection;
