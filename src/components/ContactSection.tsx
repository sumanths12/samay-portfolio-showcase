
import React from 'react';
import Section from './Section';
import { MapPin, Phone, Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from 'emailjs-com';
import { toast } from 'sonner'; // Using sonner for toasts

const contactDetails = [
  { icon: <MapPin size={20} className="text-primary" />, text: 'Bangalore, Karnataka, India', hrefType: null, href: null },
  { icon: <Phone size={20} className="text-primary" />, text: '+91 8985678373', href: 'tel:+918985678373', hrefType: 'tel' },
  { icon: <Mail size={20} className="text-primary" />, text: 'samaysusumanth2@gmail.com', href: 'mailto:samaysusumanth2@gmail.com', hrefType: 'email' },
  { icon: <Linkedin size={20} className="text-primary" />, text: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/samay-susumanth/', hrefType: 'linkedin' },
  { icon: <Github size={20} className="text-primary" />, text: 'GitHub Profile', href: 'https://github.com/samaysusumanth', hrefType: 'github' },
];

const SERVICE_ID = 'service_zdqibgf';
const TEMPLATE_ID = 'template_iiysbnw';
const PUBLIC_KEY = '_bXzx9yIjdCMXAVKY';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then((result) => {
        console.log('EmailJS success:', result.text);
        toast.success('Message sent successfully! I will get back to you soon.');
        form.reset();
      }, (error) => {
        console.error('EmailJS error:', error.text);
        toast.error('Failed to send message. Please try again later or contact me directly.');
      });
  };

  return (
    <Section id="contact" bgColor="bg-background" textColor="text-foreground">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Get In Touch</h2>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-6">Contact Information</h3>
          <p className="text-muted-foreground mb-8">
            Feel free to reach out if you have any questions, project inquiries, or just want to connect. I'm always open to discussing new opportunities and collaborations.
          </p>
          <div className="space-y-4">
            {contactDetails.map((detail, index) => (
              <div key={index} className="flex items-center space-x-3">
                {detail.icon}
                {detail.href ? (
                  <a
                    href={detail.href}
                    target={detail.hrefType === 'linkedin' || detail.hrefType === 'github' ? "_blank" : "_self"}
                    rel={detail.hrefType === 'linkedin' || detail.hrefType === 'github' ? "noopener noreferrer" : ""}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {detail.text}
                  </a>
                ) : (
                  <span className="text-foreground">{detail.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-primary mb-6">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Full Name</label>
              <Input 
                type="text" 
                name="name" // This 'name' attribute must match your EmailJS template variable
                id="name" 
                required 
                className="w-full bg-card border-border text-foreground placeholder-slate-500 focus:ring-primary focus:border-primary rounded-md" 
                placeholder="Your Name" 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Email Address</label>
              <Input 
                type="email" 
                name="email" // This 'name' attribute must match your EmailJS template variable
                id="email" 
                required 
                className="w-full bg-card border-border text-foreground placeholder-slate-500 focus:ring-primary focus:border-primary rounded-md" 
                placeholder="your.email@example.com" 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
              <Textarea 
                name="message" // This 'name' attribute must match your EmailJS template variable
                id="message" 
                rows={4} 
                required 
                className="w-full bg-card border-border text-foreground placeholder-slate-500 focus:ring-primary focus:border-primary rounded-md" 
                placeholder="Your message..."
              />
            </div>
            <div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3">
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
