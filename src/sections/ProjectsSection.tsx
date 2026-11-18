import React from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Layers,
  CheckCircle2,
  Users,
  BarChart3,
  Briefcase,
  TerminalSquare,
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { Badge } from '../components/Badge';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Academic Work"
          title="Featured"
          highlight="Projects"
          subtitle="Real-world academic applications built with focused architecture, secure workflows, and modern web standards."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, index) => {
            const isCareerCraft = project.title.includes('CareerCraft');

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group bg-slate-900/40 border border-white/[0.08] hover:border-purple-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-sm flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Subtle top corner gradient accent */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl pointer-events-none transition-opacity ${
                    isCareerCraft
                      ? 'bg-purple-600/10 group-hover:bg-purple-600/20'
                      : 'bg-cyan-500/10 group-hover:bg-cyan-500/20'
                  }`}
                />

                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center text-purple-400 group-hover:border-purple-500/40 transition-colors">
                      {isCareerCraft ? (
                        <Briefcase className="w-6 h-6 text-purple-400" />
                      ) : (
                        <BarChart3 className="w-6 h-6 text-cyan-400" />
                      )}
                    </div>
                    {project.badge && (
                      <Badge
                        variant={isCareerCraft ? 'purple' : 'blue'}
                        size="sm"
                      >
                        {isCareerCraft && <Users className="w-3 h-3" />}
                        {!isCareerCraft && <TerminalSquare className="w-3 h-3" />}
                        {project.badge}
                      </Badge>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">
                        {project.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="mb-6">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-purple-400" />
                      <span>Tech Stack</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-800/70 text-slate-200 border border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Contributions */}
                  <div className="mb-8">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                      Key Contributions & Engineering Highlights:
                    </div>
                    <ul className="space-y-2.5">
                      {project.contributions.map((contribution, cIdx) => (
                        <li
                          key={cIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-normal"
                        >
                          <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                          <span>{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer: Live Demo Action if available */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  {project.liveDemo ? (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 shadow-md shadow-purple-600/20 border border-purple-400/30 transition-all group/btn"
                    >
                      <span>Explore Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-2 text-xs text-slate-400 font-mono">
                      <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                      <span>Academic Demonstration Project</span>
                    </div>
                  )}

                  <span className="text-xs text-slate-400 font-mono">
                    Project #{index + 1}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
