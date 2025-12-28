import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Code2, FileText } from 'lucide-react';
import { Grid3DBackground } from '../components/Grid3D';
import { Typewriter } from '../components/Typewriter';
import { HERO_CONTENT, SKILLS } from '../data/portfolio';

export const Home = () => {
  const stats = [
    { label: 'Hands-on Experience', value: '3 mon' },
    { label: 'Cloud Platform', value: 'AWS' },
    { label: 'Projects Built', value: '4' },
    { label: 'Technologies Used', value: '10+' },
  ];

  const featuredSkills = SKILLS.slice(0, 6);

  return (
    <div className="min-h-screen bg-bg-page relative overflow-hidden">
      <Grid3DBackground />

      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="font-mono text-2xl md:text-3xl font-bold tracking-wide">
              <span className="text-accent-500 mr-3">$</span>
              <span className="text-primary-500">whoami</span>
            </div>

            <div className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary-500">
              <Typewriter text="DevOps & Cloud Engineer" delay={70} />
              <span className="terminal-cursor ml-2" />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="text-lg md:text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
            >
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-4 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-bg-surface transition font-semibold rounded-lg shadow-glow"
              >
                <Code2 className="mr-2 h-5 w-5" />
                View Projects
              </Link>

              {/* Resume hosted on AWS S3 + CloudFront */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-neutral-600 bg-neutral-800 text-neutral-200 hover:border-primary-500 hover:text-primary-500 transition font-semibold rounded-lg"
              >
                <FileText className="mr-2 h-5 w-5" />
                View Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 bg-bg-surface/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-bg-elevated border border-neutral-700 p-6 rounded-lg text-center hover:border-primary-500/50 transition"
              >
                <div className="font-mono text-3xl font-bold text-primary-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE SKILLS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              Core Technologies
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Tools I use to design, automate, and operate cloud-native systems
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {featuredSkills.map(skill => (
              <div
                key={skill.name}
                className="bg-bg-elevated border border-neutral-700 p-4 rounded-lg text-center hover:border-primary-500/50 transition"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-8 h-8 mx-auto mb-3 opacity-80"
                />
                <div className="font-mono text-sm text-neutral-200">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/skills"
              className="inline-flex items-center text-primary-500 hover:text-primary-400 font-mono"
            >
              View all skills
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-bg-elevated/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-bg-elevated border border-primary-500/20 p-12 rounded-2xl shadow-glow">
            <h2 className="font-mono text-3xl font-bold text-primary-500 mb-6">
              Build. Automate. Improve.
            </h2>
            <p className="text-lg text-neutral-200 mb-8">
              I enjoy working on cloud infrastructure, CI/CD pipelines, and AI-powered automation that makes systems reliable and scalable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-primary-500 text-bg-surface rounded-lg font-semibold"
              >
                Start a Conversation
              </Link>
              <a
                href="https://github.com/HariniMuruganantham"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-neutral-600 text-neutral-200 hover:border-primary-500 hover:text-primary-500 rounded-lg font-semibold transition"
              >
                <Github className="inline mr-2 h-5 w-5" />
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
