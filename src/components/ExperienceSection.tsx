
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
  // Add more experiences here if needed
];

const ExperienceSection = () => {
  return (
    <Section id="experience" bgColor="bg-slate-50" textColor="text-slate-800">
      <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-12 text-center">My Experience</h2>
      <div className="max-w-3xl mx-auto space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 sm:pl-12 pb-8 border-l-2 border-secondary-accent">
            {/* Dot on the timeline */}
            <div className="absolute -left-[11px] top-1.5 w-5 h-5 bg-secondary-accent rounded-full border-4 border-slate-50"></div>
            
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-2">
                <Briefcase className="text-primary-navy-light mr-3 h-6 w-6" />
                <h3 className="text-2xl font-semibold text-primary-navy">{exp.role}</h3>
              </div>
              <p className="text-md font-medium text-primary-navy-light">{exp.company} | {exp.location}</p>
              <p className="text-sm text-slate-500 mb-4">{exp.duration}</p>
              
              <h4 className="font-semibold text-slate-700 mb-1">Responsibilities:</h4>
              <ul className="list-disc list-inside space-y-1 text-slate-600 mb-4">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
              
              <h4 className="font-semibold text-slate-700 mb-1">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="text-xs bg-slate-200 text-slate-700 px-2 py-1 rounded-full">{tech}</span>
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
