
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'; // These are read-only, will inherit new theme
import { Badge } from '@/components/ui/badge'; // This too
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
  image?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, githubLink, liveLink, image }) => {
  return (
    <Card className="flex flex-col h-full bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden rounded-lg border border-border">
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-foreground text-xl">{title}</CardTitle>
        <CardDescription className="text-muted-foreground text-sm min-h-[3rem]">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <h4 className="text-sm font-semibold text-foreground mb-2">Technologies Used:</h4>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="border-primary text-primary bg-primary/10 hover:bg-primary/20">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-start gap-2 pt-4 border-t border-border">
        {githubLink && (
          <Button variant="outline" size="sm" asChild className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Github size={16} className="mr-2" /> GitHub
            </a>
          </Button>
        )}
        {liveLink && (
          <Button variant="default" size="sm" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
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
