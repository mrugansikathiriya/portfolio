import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  ExternalLink,
  Copy,
  Check,
  Send,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { GitHubIcon, LinkedInIcon } from '../components/SocialIcons';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Connect &"
          highlight="Collaborate"
          subtitle="Interested in full-stack web development, engineering opportunities, or technical collaboration? Feel free to reach out directly."
        />

        {/* Contact Banner & Direct CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-purple-950/40 via-slate-900/60 to-cyan-950/30 border border-purple-500/20 rounded-3xl p-8 sm:p-12 backdrop-blur-md shadow-2xl relative overflow-hidden text-center mb-10"
        >
          {/* Ambient Corner Blur */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6">
              <Mail className="w-7 h-7" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Drop Me a Message
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              I am actively seeking full-stack developer and software engineering opportunities. Whether you have an open position, an exciting web project, or want to discuss technology, my inbox is always open.
            </p>

            {/* Main Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 w-full">
              <a
                href={`mailto:${personalInfo.email}?subject=Full-Stack%20Development%20Inquiry%20-%20Portfolio`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-[length:200%_auto] hover:bg-right transition-all duration-300 shadow-lg shadow-purple-600/30 border border-purple-400/30 text-sm sm:text-base"
              >
                <Send className="w-4 h-4" />
                <span>Send Email Directly</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-800 hover:text-white border border-white/10 hover:border-purple-500/30 transition-all text-sm sm:text-base"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-purple-400" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Email Address Display */}
            <div className="mt-6 font-mono text-xs text-purple-300/90 bg-slate-900/60 px-4 py-2 rounded-lg border border-white/[0.06]">
              {personalInfo.email}
            </div>
          </div>
        </motion.div>

        {/* 3 Contact Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Email Channel */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="group p-5 rounded-2xl bg-slate-900/40 border border-white/[0.08] hover:border-purple-500/30 backdrop-blur-sm transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400 mb-3 group-hover:scale-105 transition-transform">
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">Email</div>
              <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors mt-0.5 truncate">
                {personalInfo.email}
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs text-purple-400 font-medium mt-4">
              <span>Write Email</span>
              <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>

          {/* LinkedIn Channel */}
          <a
            href={personalInfo.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-slate-900/40 border border-white/[0.08] hover:border-cyan-500/30 backdrop-blur-sm transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-105 transition-transform">
                <LinkedInIcon className="w-4 h-4" />
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">LinkedIn</div>
              <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors mt-0.5">
                mrugansi-kathiriya
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs text-cyan-400 font-medium mt-4">
              <span>Connect on LinkedIn</span>
              <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>

          {/* GitHub Channel */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-slate-900/40 border border-white/[0.08] hover:border-indigo-500/30 backdrop-blur-sm transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 mb-3 group-hover:scale-105 transition-transform">
                <GitHubIcon className="w-4 h-4" />
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">GitHub</div>
              <div className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors mt-0.5">
                mrugansikathiriya
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs text-indigo-400 font-medium mt-4">
              <span>View Repositories</span>
              <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
