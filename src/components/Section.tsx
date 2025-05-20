
import React, { useEffect, useRef, useState } from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  bgColor?: string; // e.g., 'bg-white', 'bg-slate-100'
  textColor?: string; // e.g., 'text-primary-navy', 'text-slate-700'
}

const Section: React.FC<SectionProps> = ({ id, children, className = '', bgColor = 'bg-white', textColor = 'text-slate-800' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`section-padding ${bgColor} ${textColor} ${className} ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}
    >
      <div className="content-max-width">
        {children}
      </div>
    </section>
  );
};

export default Section;
