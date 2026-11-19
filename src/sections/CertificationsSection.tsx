import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Eye,
  FileText,
  ShieldCheck,
  X,
} from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { Badge } from '../components/Badge';
import type { CertificationItem } from '../types';

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Credentials"
          title="Professional"
          highlight="Certifications"
          subtitle="Accredited training programs and technical certifications validating practical engineering skills. Verified certificates available for review."
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

                <div>
                  {/* Action Buttons for Certificate PDF */}
                  {cert.fileUrl && (
                    <div className="pt-3 pb-4 flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setSelectedCert(cert)}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-purple-300 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/25 hover:border-purple-500/40 transition-all cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Quick Preview</span>
                        </button>
                        <a
                          href={cert.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 hover:text-white border border-white/10 hover:border-white/20 transition-all"
                          title="Open PDF in new tab"
                        >
                          <FileText className="w-3.5 h-3.5 text-cyan-400" />
                          <span>View PDF</span>
                          <ExternalLink className="w-3 h-3 text-slate-400" />
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Footer with date & verification */}
                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-1.5 font-mono text-purple-300">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{cert.issueDate}</span>
                    </div>
                    <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Verified</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Certificate Preview Modal */}
      <AnimatePresence>
        {selectedCert && selectedCert.fileUrl && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl h-[85vh] bg-[#0c101b] border border-white/[0.15] rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-4 bg-slate-900/90 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      {selectedCert.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {selectedCert.issuer} • {selectedCert.issueDate}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedCert.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-white/10 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open in New Tab</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedCert(null)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* PDF Viewer Body */}
              <div className="flex-1 w-full bg-slate-950 relative overflow-hidden">
                <iframe
                  src={`${selectedCert.fileUrl}#toolbar=0&navpanes=0`}
                  title={`${selectedCert.title} preview`}
                  className="w-full h-full border-0"
                />
              </div>

              {/* Modal Footer */}
              <div className="px-5 py-3 bg-slate-900/80 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Officially Verified Certificate</span>
                </span>
                <span className="font-mono text-purple-300">
                  {selectedCert.issueDate}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
