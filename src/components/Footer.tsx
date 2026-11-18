import React from 'react';
import { ArrowUp, Code2, Mail } from 'lucide-react';
import { navItems, personalInfo } from '../data/portfolioData';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#07090e] py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base font-bold text-white tracking-tight">
                {personalInfo.name}
              </div>
              <div className="text-xs text-slate-400">
                {personalInfo.subtitle}
              </div>
            </div>
          </div>

          {/* Footer Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Footer Navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={personalInfo.resumeUrl}
              download="Mrugansi_Kathiriya_Resume.pdf"
              className="text-xs sm:text-sm text-purple-400 hover:text-purple-300 font-medium transition-colors"
            >
              Resume PDF
            </a>
          </nav>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900/60 border border-white/10 hover:border-purple-500/30 transition-all"
              aria-label="GitHub Profile"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900/60 border border-white/10 hover:border-purple-500/30 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900/60 border border-white/10 hover:border-purple-500/30 transition-all"
              aria-label="Email Mrugansi"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={handleScrollToTop}
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900/60 border border-white/10 hover:border-purple-500/30 transition-all ml-2"
              title="Back to Top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="w-full pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3 text-center sm:text-left">
          <p>
            © {currentYear} {personalInfo.name}. Built with React, TypeScript & Tailwind CSS.
          </p>
          <p className="font-mono text-slate-400">
            {personalInfo.location}
          </p>
        </div>
      </div>
    </footer>
  );
};
