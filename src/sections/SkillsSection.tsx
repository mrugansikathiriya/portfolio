import React from 'react';
import { motion } from 'framer-motion';
import {
  Cloud,
  Code2,
  Cpu,
  Database,
  Globe,
  Wrench,
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-purple-400" />,
  Cpu: <Cpu className="w-5 h-5 text-cyan-400" />,
  Globe: <Globe className="w-5 h-5 text-indigo-400" />,
  Database: <Database className="w-5 h-5 text-emerald-400" />,
  Wrench: <Wrench className="w-5 h-5 text-amber-400" />,
  Cloud: <Cloud className="w-5 h-5 text-sky-400" />,
};

const categoryBorderColors: Record<string, string> = {
  Code2: 'hover:border-purple-500/40 group-hover:text-purple-400',
  Cpu: 'hover:border-cyan-500/40 group-hover:text-cyan-400',
  Globe: 'hover:border-indigo-500/40 group-hover:text-indigo-400',
  Database: 'hover:border-emerald-500/40 group-hover:text-emerald-400',
  Wrench: 'hover:border-amber-500/40 group-hover:text-amber-400',
  Cloud: 'hover:border-sky-500/40 group-hover:text-sky-400',
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Capabilities"
          title="Technical"
          highlight="Skillset"
          subtitle="Organized across programming, core computer science, web engineering, databases, and cloud technologies."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const icon = iconMap[category.iconName] || <Code2 className="w-5 h-5 text-purple-400" />;
            const hoverBorder = categoryBorderColors[category.iconName] || 'hover:border-purple-500/40';

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`group bg-slate-900/40 border border-white/[0.08] ${hoverBorder} rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center shrink-0">
                        {icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors">
                          {category.title}
                        </h3>
                        {category.description && (
                          <p className="text-xs text-slate-400 line-clamp-1">
                            {category.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Skills Grid / Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-slate-800/60 text-slate-200 border border-white/[0.06] hover:border-white/20 hover:bg-slate-800 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-500 group-hover:bg-purple-400 transition-colors"></span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Count */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                  <span>{category.skills.length} Competencies</span>
                  <span className="text-slate-400 font-mono">Verified Stack</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
