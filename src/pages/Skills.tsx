import { useState } from 'react';
import { motion } from 'framer-motion';
import { TerminalHeader } from '../components/TerminalHeader';
import { Typewriter } from '../components/Typewriter';
import {
  Cloud,
  Container,
  Code,
  Cpu,
  Terminal as TerminalIcon,
} from 'lucide-react';
import { SKILLS_BY_CATEGORY } from '../data/portfolio';

export const Skills = () => {
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  /* =========================
     CATEGORY CONFIG
  ========================== */
  const categories = [
    {
      id: 'cloud',
      title: 'Cloud Platforms',
      icon: Cloud,
      skills: SKILLS_BY_CATEGORY.cloud,
      color: 'text-blue-500',
    },
    {
      id: 'containers',
      title: 'Containers & CI/CD',
      icon: Container,
      skills: SKILLS_BY_CATEGORY.containers,
      color: 'text-blue-400',
    },
    {
      id: 'devops',
      title: 'DevOps & Automation',
      icon: TerminalIcon,
      skills: SKILLS_BY_CATEGORY.devops,
      color: 'text-primary-500',
    },
    {
      id: 'development',
      title: 'Programming & Scripting',
      icon: Code,
      skills: SKILLS_BY_CATEGORY.development,
      color: 'text-orange-500',
    },
    {
      id: 'ai',
      title: 'GenAI & Intelligent Automation',
      icon: Cpu,
      skills: SKILLS_BY_CATEGORY.ai,
      color: 'text-purple-500',
    },
    {
      id: 'tools',
      title: 'Collaboration & Tools',
      icon: TerminalIcon,
      skills: SKILLS_BY_CATEGORY.tools,
      color: 'text-green-500',
    },
  ];

  /* =========================
     TERMINAL COMMANDS
  ========================== */
  const commands = {
    help: [
      'Available commands:',
      '  ls <category>     - List skills in a category',
      '  cat <skill>       - Show skill details',
      '  levels            - Show proficiency levels',
      '  clear             - Clear terminal',
      '  help              - Show this help',
    ],
    levels: [
      'Proficiency Levels:',
      '  Beginner (30%)     - Basic understanding',
      '  Intermediate (60%) - Hands-on experience',
      '  Advanced (80%)     - Production usage',
      '  Expert (90%+)      - Deep expertise',
    ],
    clear: () => setTerminalOutput([]),
    default: (input: string) => [
      `Command not found: ${input}`,
      'Type "help" to see available commands.',
    ],
  };

  const findSkillByName = (name: string) => {
    const allSkills = Object.values(SKILLS_BY_CATEGORY).flat();
    return allSkills.find(
      skill => skill.name.toLowerCase() === name.toLowerCase()
    );
  };

  const executeCommand = (input: string) => {
    setIsProcessing(true);

    const cmd = input.toLowerCase().trim();
    const args = cmd.split(' ');
    const mainCmd = args[0];

    setTimeout(() => {
      let output: string[] = [];

      switch (mainCmd) {
        case 'help':
          output = commands.help;
          break;

        case 'levels':
          output = commands.levels;
          break;

        case 'clear':
          commands.clear();
          setIsProcessing(false);
          return;

        case 'ls': {
          const categoryId = args[1];
          const category = categories.find(c => c.id === categoryId);

          if (category) {
            output = [
              `${category.title}:`,
              ...category.skills.map(
                skill => `  ${skill.name} (${skill.level}%)`
              ),
            ];
          } else {
            output = [
              'Available categories:',
              ...categories.map(
                c => `  ${c.id} - ${c.title}`
              ),
            ];
          }
          break;
        }

        case 'cat': {
          const skillName = args.slice(1).join(' ');
          const skill = findSkillByName(skillName);

          if (skill) {
            output = [
              `Skill        : ${skill.name}`,
              `Category     : ${skill.category}`,
              `Proficiency  : ${skill.level}%`,
            
            ];
          } else {
            output = [`Skill "${skillName}" not found`];
          }
          break;
        }

        default:
          output = commands.default(cmd);
      }

      setTerminalOutput(prev => [
        ...prev,
        `$ ${input}`,
        ...output,
        '',
      ]);
      setCurrentInput('');
      setIsProcessing(false);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && currentInput.trim() && !isProcessing) {
      executeCommand(currentInput);
    }
  };

  return (
    <div className="min-h-screen bg-bg-page">
      <TerminalHeader
        command="ls -la skills/"
        description="Exploring my DevOps, Cloud, and GenAI skill set"
      />

      {/* =========================
         SKILL CARDS
      ========================== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-4xl font-bold text-primary-500 mb-4">
              Technical Expertise
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              A practical DevOps skill set focused on AWS, automation, and intelligent systems
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-bg-surface border border-neutral-700 rounded-xl"
                >
                  <div className="border-b border-neutral-700 p-6 flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-neutral-800 ${category.color}`}>
                      <Icon size={22} />
                    </div>
                    <h3 className="font-mono text-xl text-primary-500">
                      {category.title}
                    </h3>
                  </div>

                  <div className="p-6 grid sm:grid-cols-2 gap-4">
                    {category.skills.map(skill => (
                      <div
                        key={skill.name}
                        className="bg-bg-elevated border border-neutral-700 p-4 rounded-lg"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-7 h-7 opacity-80"
                          />
                          <span className="font-mono text-neutral-200">
                            {skill.name}
                          </span>
                        </div>

                        <div className="text-xs text-neutral-400 mb-1">
                          Proficiency
                        </div>
                        <div className="w-full bg-neutral-700 h-2 rounded">
                          <div
                            className="h-2 bg-primary-500 rounded"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================
         INTERACTIVE TERMINAL
      ========================== */}
      <section className="py-24 bg-bg-surface/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-bg-elevated border border-neutral-700 rounded-xl overflow-hidden">
            <div className="p-4 border-b border-neutral-700 font-mono text-sm text-neutral-400">
              skills-terminal
            </div>

            <div className="p-6 font-mono text-sm h-96 overflow-y-auto bg-bg-page">
              {terminalOutput.length === 0 && (
                <Typewriter
                  text="Type 'help' to explore my skills using terminal commands."
                  delay={25}
                />
              )}

              {terminalOutput.map((line, i) => (
                <div
                  key={i}
                  className={
                    line.startsWith('$')
                      ? 'text-accent-500'
                      : 'text-neutral-200'
                  }
                >
                  {line}
                </div>
              ))}

              {isProcessing && (
                <div className="text-accent-500">$ processing...</div>
              )}

              <div className="flex items-center mt-2">
                <span className="text-accent-500 mr-2">$</span>
                <input
                  value={currentInput}
                  onChange={e => setCurrentInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  disabled={isProcessing}
                  className="flex-1 bg-transparent outline-none text-primary-500"
                  placeholder="enter command..."
                />
              </div>
            </div>
          </div>

          {/* =========================
             QUICK COMMANDS (FIXED)
          ========================== */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { cmd: 'help', desc: 'Show commands' },
              { cmd: 'ls cloud', desc: 'Cloud skills' },
              { cmd: 'levels', desc: 'Proficiency guide' },
              { cmd: 'cat Docker', desc: 'Skill details' },
            ].map(item => (
              <button
                key={item.cmd}
                onClick={() => {
                  if (!isProcessing) {
                    executeCommand(item.cmd);
                  }
                }}
                className="p-3 bg-bg-elevated border border-neutral-700 rounded-lg text-left hover:border-primary-500/50 transition-colors group"
              >
                <div className="font-mono text-sm text-primary-500 group-hover:text-primary-400">
                  $ {item.cmd}
                </div>
                <div className="text-xs text-neutral-400 mt-1">
                  {item.desc}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
