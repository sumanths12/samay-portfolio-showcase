
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
  image?: string; // Optional image for the card
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, githubLink, liveLink, image }) => {
  return (
    <Card className="flex flex-col h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden rounded-lg">
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-primary-navy text-xl">{title}</CardTitle>
        <CardDescription className="text-slate-600 text-sm min-h-[3rem]">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <h4 className="text-sm font-semibold text-primary-navy-light mb-2">Technologies Used:</h4>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge key={tech} variant="outline" className="border-secondary-accent text-secondary-accent bg-secondary-accent/10">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-start gap-2 pt-4 border-t border-slate-200">
        {githubLink && (
          <Button variant="outline" size="sm" asChild className="text-primary-navy border-primary-navy hover:bg-primary-navy hover:text-white">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Github size={16} className="mr-2" /> GitHub
            </a>
          </Button>
        )}
        {liveLink && (
          <Button variant="default" size="sm" asChild className="bg-secondary-accent text-primary-navy hover:bg-opacity-80">
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} className="mr-2" /> Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
