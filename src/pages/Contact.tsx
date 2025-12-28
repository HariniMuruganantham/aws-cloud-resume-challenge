import { motion } from 'framer-motion';
import { TerminalHeader } from '../components/TerminalHeader';
import { Typewriter } from '../components/Typewriter';
import { Mail, MapPin, Github, Linkedin, BookOpen, ExternalLink } from 'lucide-react';
import { CONTACT } from '../data/portfolio';

export const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      color: 'text-blue-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: CONTACT.address,
      href: '#',
      color: 'text-purple-500',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: CONTACT.social.github,
      icon: Github,
      color: 'hover:text-gray-400',
    },
    {
      name: 'LinkedIn',
      url: CONTACT.social.linkedin,
      icon: Linkedin,
      color: 'hover:text-blue-500',
    },
    {
      name: 'Substack',
      url: CONTACT.social.substack,
      icon: BookOpen,
      color: 'hover:text-orange-400',
    },
  ];

  return (
    <div className="min-h-screen bg-bg-page">
      {/* Terminal Header */}
      <TerminalHeader
        command="ping contact.me"
        description="Displaying communication endpoints"
      />

      {/* Main Contact Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-bg-surface border border-neutral-700 rounded-2xl p-12 shadow-card"
          >
            {/* Heading */}
            <div className="text-center mb-12">
              <h1 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-4">
                Get in Touch
              </h1>
              <Typewriter
                text="> Available for DevOps, Cloud, and AI-driven projects"
                delay={40}
                className="text-neutral-400"
              />
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    className="flex items-center space-x-4 bg-bg-elevated border border-neutral-700 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300"
                  >
                    <div className={`p-3 rounded-lg bg-bg-surface ${method.color}`}>
                      <Icon size={22} />
                    </div>
                    <div>
                      <div className="font-medium text-neutral-200">
                        {method.label}
                      </div>
                      <div className="text-sm text-neutral-400">
                        {method.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h2 className="font-mono text-xl font-semibold text-primary-500 mb-6">
                Connect With Me
              </h2>

              <div className="flex justify-center gap-6">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center justify-center w-24 h-24 bg-bg-elevated border border-neutral-700 rounded-xl text-neutral-400 ${link.color} transition-all duration-200 hover:scale-105 hover:shadow-card`}
                    >
                      <Icon size={28} className="mb-2" />
                      <span className="text-xs font-mono">{link.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terminal-style Footer */}
      <section className="py-24 bg-bg-elevated">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-bg-surface border border-neutral-700 rounded-xl p-8 font-mono"
          >
            <div className="text-accent-500 mb-4">
              $ echo "Open to opportunities"
            </div>
            <div className="space-y-2 text-neutral-200">
              <p>
                Interested in DevOps, Cloud, or AI-powered solutions.
              </p>
              <p className="text-primary-500">
                Reach out — let’s build something impactful.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-700 text-sm text-neutral-400 flex items-center justify-center space-x-2">
              <ExternalLink size={16} />
              <span>Connection stable · Awaiting collaboration</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
