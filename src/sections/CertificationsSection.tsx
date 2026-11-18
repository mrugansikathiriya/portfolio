import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { Badge } from '../components/Badge';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Credentials"
          title="Professional"
          highlight="Certifications"
          subtitle="Accredited training programs and technical certifications validating practical engineering skills."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const isIIT = cert.issuer.includes('IIT');

            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-slate-900/40 border border-white/[0.08] hover:border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-black/25 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Issuer Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                      <Award className="w-5 h-5" />
                    </div>
                    <Badge variant={isIIT ? 'purple' : 'blue'} size="sm">
                      {cert.issuer}
                    </Badge>
                  </div>

                  {/* Certification Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors mb-2 leading-snug">
                    {cert.title}
                  </h3>

                  {/* Issuer details */}
                  <p className="text-xs text-slate-400 mb-4 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Issued by {cert.issuer}</span>
                  </p>
                </div>

                {/* Footer with date */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5 font-mono text-purple-300">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{cert.issueDate}</span>
                  </div>
                  <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
