import { useState } from 'react';
import { motion } from 'framer-motion';
import { TerminalHeader } from '../components/TerminalHeader';
import { ExternalLink, Github, Filter, Cpu, Cloud } from 'lucide-react';
import { PROJECTS_BY_CATEGORY } from '../data/portfolio';

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'devops' | 'ai'>('all');

  /* =========================
     FILTER CONFIG
  ========================== */
  const filters = [
    {
      id: 'all',
      label: 'All Projects',
      count: PROJECTS_BY_CATEGORY.all.length,
    },
    {
      id: 'devops',
      label: 'DevOps & Cloud',
      count:
        PROJECTS_BY_CATEGORY.devops.length +
        PROJECTS_BY_CATEGORY.devopsAI.length,
    },
    {
      id: 'ai',
      label: 'AI / GenAI',
      count: PROJECTS_BY_CATEGORY.ai.length,
    },
  ];

  const getProjects = () => {
    if (activeFilter === 'devops') {
      return [
        ...PROJECTS_BY_CATEGORY.devops,
        ...PROJECTS_BY_CATEGORY.devopsAI,
      ];
    }
    if (activeFilter === 'ai') {
      return PROJECTS_BY_CATEGORY.ai;
    }
    return PROJECTS_BY_CATEGORY.all;
  };

  const getBadge = (category: string) => {
    if (category === 'ai') {
      return {
        label: 'AI / GenAI',
        icon: <Cpu size={14} />,
        className:
          'bg-purple-500/20 text-purple-500 border border-purple-500/30',
      };
    }
    return {
      label: 'DevOps & Cloud',
      icon: <Cloud size={14} />,
      className:
        'bg-primary-500/20 text-primary-500 border border-primary-500/30',
    };
  };

  return (
    <div className="min-h-screen bg-bg-page">
      {/* Terminal Header */}
      <TerminalHeader
        command="kubectl get projects"
        description="Real-world DevOps, Cloud, and AI implementations"
      />

      {/* Filters */}
      <section className="py-12 bg-bg-surface/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id as any)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-mono transition ${
                  activeFilter === filter.id
                    ? 'bg-primary-500 text-bg-surface shadow-glow'
                    : 'bg-bg-elevated border border-neutral-700 text-neutral-300 hover:border-primary-500/50'
                }`}
              >
                <Filter size={14} />
                <span>{filter.label}</span>
                <span className="text-xs bg-neutral-800 px-2 py-0.5 rounded-full">
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getProjects().map((project, index) => {
              const badge = getBadge(project.category);

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-bg-surface border border-neutral-700 rounded-xl overflow-hidden hover:border-primary-500/50 transition"
                >
                  {/* Image */}
                  <div className="relative aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-mono flex items-center gap-1 ${badge.className}`}
                    >
                      {badge.icon}
                      {badge.label}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="font-mono text-xl text-primary-500">
                      {project.title}
                    </h3>

                    <p className="text-neutral-300 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map(tech => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-neutral-800 border border-neutral-700 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2 py-1 text-xs text-neutral-400">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4 pt-2">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-neutral-400 hover:text-primary-500 font-mono text-sm"
                        >
                          <Github size={16} />
                          Code
                        </a>
                      )}
                      {project.websiteLink && (
                        <a
                          href={project.websiteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-neutral-400 hover:text-primary-500 font-mono text-sm"
                        >
                          <ExternalLink size={16} />
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {getProjects().length === 0 && (
            <div className="text-center py-24 text-neutral-400 font-mono">
              No projects found.
            </div>
          )}
        </div>
      </section>

      {/* Terminal Summary */}
      <section className="py-24 bg-bg-elevated">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-bg-surface border border-neutral-700 rounded-xl p-8 font-mono">
            <div className="text-accent-500 mb-4">$ cat project_summary.txt</div>

            <div className="space-y-2 text-neutral-200">
              <div className="flex justify-between">
                <span>Total Projects</span>
                <span className="text-primary-500">
                  {PROJECTS_BY_CATEGORY.all.length}
                </span>
              </div>
              <div className="flex justify-between">
                <span>DevOps & Cloud</span>
                <span className="text-primary-500">
                  {PROJECTS_BY_CATEGORY.devops.length +
                    PROJECTS_BY_CATEGORY.devopsAI.length}
                </span>
              </div>
              <div className="flex justify-between">
                <span>AI / GenAI</span>
                <span className="text-primary-500">
                  {PROJECTS_BY_CATEGORY.ai.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
