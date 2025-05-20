
import React from 'react';
import Section from './Section';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const AboutSection = () => {
  return (
    <Section id="about" bgColor="bg-slate-50" textColor="text-slate-800">
      <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-12 text-center">About Me</h2>
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 space-y-6">
          <p className="text-lg leading-relaxed">
            Hello! I'm Samay Susumanth, a passionate and results-driven Full-Stack Software Developer based in Bangalore, India.
            With a strong foundation in both front-end and back-end technologies, I thrive on transforming complex problems into elegant and efficient software solutions.
          </p>
          <p className="text-lg leading-relaxed">
            My journey in software development started with a curiosity for how technology shapes our world, which quickly grew into a dedicated pursuit of creating impactful applications.
            I specialize in Java, Spring Boot, React, and MySQL, and I'm always eager to learn and adapt to new technologies and methodologies.
          </p>
          <p className="text-lg leading-relaxed">
            I believe in the power of collaboration, continuous learning, and a user-centric approach to development. Whether it's architecting robust back-end systems or crafting intuitive user interfaces, my goal is to deliver high-quality software that meets user needs and exceeds expectations.
          </p>
          <div className="mt-8">
            <Button 
              variant="outline" 
              className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white"
              // onClick={() => window.open('/path-to-resume.pdf', '_blank')} // Uncomment and set path when resume is available
            >
              <Download size={18} className="mr-2" />
              Download Resume (Soon)
            </Button>
          </div>
        </div>
        <div className="md:col-span-1 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-primary-navy mb-4">Education</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-medium text-primary-navy-light">Bachelor of Technology (B.Tech) in Computer Science</h4>
              <p className="text-sm text-slate-600">Sri Venkateswara University College of Engineering, Tirupati</p>
              <p className="text-xs text-slate-500">2019 – 2023</p>
            </div>
            {/* Add more education if needed */}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
