
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card text-muted-foreground py-8 section-padding">
      <div className="content-max-width text-center">
        <p className="text-sm">
          &copy; {currentYear} Samay Susumanth. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built with React & Tailwind CSS. Hosted on Lovable.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
