
import React from 'react';
import Section from './Section';
import { Badge } from '@/components/ui/badge'; // Assuming shadcn badge

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillData: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'Python', 'JavaScript'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['Spring Boot', 'Hibernate', 'React', 'JDBC'],
  },
  {
    title: 'Web Technologies',
    skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'REST APIs'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'SQL'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Postman', 'IntelliJ IDEA', 'VS Code'],
  },
];

const SkillsSection = () => {
  return (
    <Section id="skills" bgColor="bg-white" textColor="text-slate-800">
      <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-12 text-center">My Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillData.map((category) => (
          <div key={category.title} className="bg-slate-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-primary-navy-light mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-secondary-accent text-primary-navy px-3 py-1 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
