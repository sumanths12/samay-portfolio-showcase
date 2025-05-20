
import React from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Hospital Management System',
    description: 'A comprehensive backend system for managing hospital operations, including patient records, appointments, and staff.',
    techStack: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'Hibernate'],
    githubLink: 'https://github.com/samaysusumanth/hospital-management', 
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60'
  },
  {
    title: 'E-Book Zone',
    description: 'A user-friendly frontend application for browsing and accessing e-books, focusing on a clean and intuitive user experience.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    githubLink: 'https://github.com/samaysusumanth/ebook-zone', 
    liveLink: '#', 
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60'
  },
  {
    title: 'Emotion-Based Feedback Analysis',
    description: 'A real-time system to classify emotions from text feedback using Python, CNN, and MySQL for data storage and analysis.',
    techStack: ['Python', 'CNN', 'MySQL', 'NLP'],
    githubLink: 'https://github.com/samaysusumanth/emotion-feedback', 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMGFuYWx5c2lzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60'
  },
];

const ProjectsSection = () => {
  return (
    <Section id="projects" bgColor="bg-background" textColor="text-foreground">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
