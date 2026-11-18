import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  Award,
  CheckCircle,
  Building2,
} from 'lucide-react';
import { educationList } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { Badge } from '../components/Badge';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Academic History"
          title="Educational"
          highlight="Background"
          subtitle="Formal higher education in Information Technology with a strong track record of academic achievement."
        />

        <div className="relative">
          {/* Central Timeline Vertical Line */}
          <div
            className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-purple-500/50 via-indigo-500/30 to-cyan-500/10 hidden sm:block"
            aria-hidden="true"
          />

          <div className="space-y-8 sm:space-y-12">
            {educationList.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-center gap-6 sm:gap-10 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Badge on Desktop */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#080a0f] border-2 border-purple-500/60 shadow-lg shadow-purple-500/20 items-center justify-center z-10">
                    <GraduationCap className="w-5 h-5 text-purple-400" />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full sm:w-[calc(50%-2rem)] bg-slate-900/40 border border-white/[0.08] hover:border-purple-500/30 rounded-2xl p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-black/25 ${
                      isEven ? 'sm:text-left' : 'sm:text-left'
                    }`}
                  >
                    {/* Header: Period & Status */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-400 font-mono">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.grade && (
                          <Badge variant="blue" size="sm">
                            <Award className="w-3 h-3" />
                            {item.grade}
                          </Badge>
                        )}
                        <Badge
                          variant={item.status === 'In Progress' ? 'purple' : 'success'}
                          size="sm"
                        >
                          {item.status}
                        </Badge>
                      </div>
                    </div>

                    {/* Degree & Field */}
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                      {item.degree}
                    </h3>
                    <p className="text-xs sm:text-sm text-purple-300/90 font-medium mb-3">
                      {item.field}
                    </p>

                    {/* Institution */}
                    <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 mb-4 bg-slate-800/40 p-2.5 rounded-xl border border-white/[0.04]">
                      <Building2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="font-medium text-slate-200">
                        {item.institution}
                      </span>
                    </div>

                    {/* Key Highlights */}
                    {item.highlights && item.highlights.length > 0 && (
                      <div className="space-y-1.5 pt-1">
                        {item.highlights.map((highlight, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed"
                          >
                            <CheckCircle className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
