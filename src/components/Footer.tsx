import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, BookOpen, Mail } from 'lucide-react';
import { CONTACT } from '../data/portfolio';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [siteVisits, setSiteVisits] = useState('...');

  useEffect(() => {
    fetch('https://YOUR_API_ID.execute-api.us-east-1.amazonaws.com/prod/visit')
      .then((res) => res.json())
      .then((data) => setSiteVisits(data.count))
      .catch(() => setSiteVisits('N/A'));
  }, []);

  return (
    <footer className="bg-bg-elevated border-t border-neutral-700 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6 text-center">

          {/* Terminal style header */}
          <div className="font-mono text-sm text-neutral-400">
            <span className="text-accent-500">$</span>{' '}
            <span className="text-primary-500">cat</span>{' '}
            footer.info
          </div>

          {/* Tagline */}
          <p className="text-neutral-200">
            Building reliable cloud systems with DevOps discipline and AI curiosity
          </p>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm font-mono text-neutral-300">
            <Link to="/" className="hover:text-primary-500 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-primary-500 transition-colors">About</Link>
            <Link to="/skills" className="hover:text-primary-500 transition-colors">Skills</Link>
            <Link to="/projects" className="hover:text-primary-500 transition-colors">Projects</Link>
            <Link to="/contact" className="hover:text-primary-500 transition-colors">Contact</Link>
          </nav>

          {/* Site visits */}
          <div className="font-mono text-sm text-neutral-400">
            Site visits:{' '}
            <span className="text-primary-500">{siteVisits}</span>
          </div>

          {/* Social links */}
          <div className="flex items-center space-x-6 text-neutral-400">
            <a href={CONTACT.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors">
              <Github size={18} />
            </a>
            <a href={CONTACT.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href={CONTACT.social.substack} target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors">
              <BookOpen size={18} />
            </a>
            <a href={`mailto:${CONTACT.email}`} className="hover:text-primary-500 transition-colors">
              <Mail size={18} />
            </a>
          </div>

          {/* Copyright */}
          <div className="font-mono text-xs text-neutral-500">
            © {currentYear} Harini Muruganantham · All rights reserved
          </div>

        </div>
      </div>
    </footer>
  );
};
