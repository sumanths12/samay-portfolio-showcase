
import React from 'react';
import Section from './Section';
import { MapPin, Phone, Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactDetails = [
  { icon: <MapPin size={20} className="text-secondary-accent" />, text: 'Bangalore, Karnataka, India', hrefType: null },
  { icon: <Phone size={20} className="text-secondary-accent" />, text: '+91 8985678373', href: 'tel:+918985678373', hrefType: 'tel' },
  { icon: <Mail size={20} className="text-secondary-accent" />, text: 'samaysusumanth2@gmail.com', href: 'mailto:samaysusumanth2@gmail.com', hrefType: 'email' },
  { icon: <Linkedin size={20} className="text-secondary-accent" />, text: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/samay-susumanth/', hrefType: 'linkedin' }, // Replace with actual LinkedIn
  { icon: <Github size={20} className="text-secondary-accent" />, text: 'GitHub Profile', href: 'https://github.com/samaysusumanth', hrefType: 'github' }, // Replace with actual GitHub
];

const ContactSection = () => {
  // Basic form handler, can be expanded with state and submission logic
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here (e.g., using Formspree, an email API, etc.)
    alert("Form submitted (placeholder - no actual submission yet)!");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Section id="contact" bgColor="bg-primary-navy" textColor="text-slate-100">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Get In Touch</h2>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h3 className="text-2xl font-semibold text-secondary-accent mb-6">Contact Information</h3>
          <p className="text-slate-300 mb-8">
            Feel free to reach out if you have any questions, project inquiries, or just want to connect. I'm always open to discussing new opportunities and collaborations.
          </p>
          <div className="space-y-4">
            {contactDetails.map((detail, index) => (
              <div key={index} className="flex items-center space-x-3">
                {detail.icon}
                {detail.href ? (
                  <a
                    href={detail.hrefType === 'tel' || detail.hrefType === 'email' ? detail.href : detail.href}
                    target={detail.hrefType === 'linkedin' || detail.hrefType === 'github' ? "_blank" : "_self"}
                    rel={detail.hrefType === 'linkedin' || detail.hrefType === 'github' ? "noopener noreferrer" : ""}
                    className="text-slate-200 hover:text-secondary-accent transition-colors"
                  >
                    {detail.text}
                  </a>
                ) : (
                  <span className="text-slate-200">{detail.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-secondary-accent mb-6">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
              <Input type="text" name="name" id="name" required className="w-full bg-primary-navy-light border-slate-600 text-white placeholder-slate-400 focus:ring-secondary-accent focus:border-secondary-accent rounded-md" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email Address</label>
              <Input type="email" name="email" id="email" required className="w-full bg-primary-navy-light border-slate-600 text-white placeholder-slate-400 focus:ring-secondary-accent focus:border-secondary-accent rounded-md" placeholder="your.email@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Message</label>
              <Textarea name="message" id="message" rows={4} required className="w-full bg-primary-navy-light border-slate-600 text-white placeholder-slate-400 focus:ring-secondary-accent focus:border-secondary-accent rounded-md" placeholder="Your message..."></Textarea>
            </div>
            <div>
              <Button type="submit" className="w-full bg-secondary-accent hover:bg-opacity-80 text-primary-navy font-semibold py-3">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
