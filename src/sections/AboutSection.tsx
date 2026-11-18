import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Lightbulb,
  Target,
  UserCheck,
  Zap,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { Badge } from '../components/Badge';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Introduction"
          title="About"
          highlight="My Journey"
          subtitle="A dedicated technologist passionate about engineering scalable systems and solving real-world challenges."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Story & Professional Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-slate-900/40 border border-white/[0.08] hover:border-purple-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-sm flex flex-col justify-between transition-all"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Professional Background</h3>
                  <p className="text-xs text-slate-400">Continuous learner & software craftsman</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                {personalInfo.summary.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Career Objective Box */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] bg-purple-950/20 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-6 sm:p-8 rounded-b-2xl border-t-purple-500/20">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-purple-300 uppercase tracking-wider mb-1">
                    Career Objective
                  </h4>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    {personalInfo.careerObjective}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Pillars & Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Academic Track Card */}
            <div className="bg-slate-900/40 border border-white/[0.08] hover:border-indigo-500/30 rounded-2xl p-6 backdrop-blur-sm transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Academic Pathway</h4>
                  <p className="text-xs text-slate-400">Rigorous CS Foundation</p>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Currently pursuing <span className="text-white font-medium">MSc IT</span> at{' '}
                <span className="text-indigo-300">Charotar University of Science and Technology (CHARUSAT)</span>, built on a strong{' '}
                <span className="text-white font-medium">BSc IT</span> degree from VNSGU with an{' '}
                <span className="text-emerald-400 font-semibold">8.18 CGPA</span>.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="purple" size="sm">MSc IT (2028)</Badge>
                <Badge variant="blue" size="sm">BSc IT (8.18 CGPA)</Badge>
                <Badge variant="default" size="sm">Surat, India</Badge>
              </div>
            </div>

            {/* Development Interests */}
            <div className="bg-slate-900/40 border border-white/[0.08] hover:border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm transition-all flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Core Engineering Interests</h4>
                  <p className="text-xs text-slate-400">Areas of passion & practice</p>
                </div>
              </div>

              <div className="space-y-2.5">
                {personalInfo.interests.map((interest, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-950/40 border border-white/[0.04] text-slate-300 text-sm hover:border-cyan-500/20 hover:text-white transition-all"
                  >
                    <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
