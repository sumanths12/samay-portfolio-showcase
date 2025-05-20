
import React from 'react';
import Section from './Section';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Software Development Intern',
    company: 'KodNest Technologies',
    duration: 'Feb 2024 – Oct 2024',
    location: 'Bangalore, Karnataka',
    responsibilities: [
      'Developed and maintained web applications using Java, Spring Boot, and React.',
      'Contributed to RESTful API design and implementation for backend services.',
      'Worked with MySQL databases for data storage and retrieval.',
      'Collaborated with a team of developers in an Agile environment.',
      'Utilized Git for version control and participated in code reviews.',
    ],
    technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'Hibernate', 'REST APIs', 'Git'],
  },
];

const ExperienceSection = () => {
  return (
    <Section id="experience" bgColor="bg-card" textColor="text-foreground"> {/* Use card bg for slight contrast */}
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">My Experience</h2>
      <div className="max-w-3xl mx-auto space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 sm:pl-12 pb-8 border-l-2 border-primary">
            <div className="absolute -left-[11px] top-1.5 w-5 h-5 bg-primary rounded-full border-4 border-card"></div>
            
            <div className="p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border">
              <div className="flex items-center mb-2">
                <Briefcase className="text-primary mr-3 h-6 w-6" />
                <h3 className="text-2xl font-semibold text-foreground">{exp.role}</h3>
              </div>
              <p className="text-md font-medium text-primary">{exp.company} | {exp.location}</p>
              <p className="text-sm text-slate-500 mb-4">{exp.duration}</p>
              
              <h4 className="font-semibold text-foreground mb-1">Responsibilities:</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
              
              <h4 className="font-semibold text-foreground mb-1">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
