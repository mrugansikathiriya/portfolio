import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  Download,
  Mail,
  MapPin,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GitHubIcon, LinkedInIcon } from '../components/SocialIcons';

export const HeroSection: React.FC = () => {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Introduction & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-purple-500/10 text-purple-300 border border-purple-500/25 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Software Engineering Opportunities</span>
          </div>

          {/* Greeting & Name */}
          <div className="space-y-1 mb-4">
            <p className="text-base sm:text-lg font-medium text-purple-400 tracking-wide flex items-center gap-2">
              <span>Hello, I'm</span>
              <span className="w-8 h-[1px] bg-purple-500/50 inline-block"></span>
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {personalInfo.name}
            </h1>
          </div>

          {/* Professional Title */}
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              {personalInfo.role}
            </h2>
            <div className="flex items-center gap-2 text-slate-400 text-sm mt-2">
              <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
              <span>{personalInfo.location}</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300 font-medium">MSc IT Student @ CHARUSAT</span>
            </div>
          </div>

          {/* Short & Engaging Intro */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
            An MSc IT student with strong foundations in data structures, algorithms, object-oriented programming, and full-stack web engineering. Driven to engineer reliable, scalable, and impactful software solutions.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-[length:200%_auto] hover:bg-right transition-all duration-300 shadow-lg shadow-purple-600/25 hover:shadow-purple-600/35 border border-purple-400/30 group text-sm sm:text-base"
            >
              <span>View My Projects</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href={personalInfo.resumeUrl}
              download="Mrugansi_Kathiriya_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/60 hover:bg-slate-800/80 hover:text-white border border-white/10 hover:border-purple-500/40 transition-all text-sm sm:text-base group"
            >
              <Download className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Links & Connectivity */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/[0.08] w-full max-w-md">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
              Connect:
            </span>
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl text-slate-400 hover:text-white bg-slate-900/50 hover:bg-purple-500/10 border border-white/10 hover:border-purple-500/30 transition-all"
                aria-label="GitHub Profile"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl text-slate-400 hover:text-white bg-slate-900/50 hover:bg-purple-500/10 border border-white/10 hover:border-purple-500/30 transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl text-slate-400 hover:text-white bg-slate-900/50 hover:bg-purple-500/10 border border-white/10 hover:border-purple-500/30 transition-all"
                aria-label="Email Mrugansi"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <span className="text-xs text-slate-400 font-mono ml-auto">
              Surat, India
            </span>
          </div>
        </motion.div>

        {/* Right Column: Premium Visual Element (Developer Terminal & Metrics Card) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="lg:col-span-5 flex justify-center w-full"
        >
          <div className="relative w-full max-w-md">
            {/* Ambient Backing Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 via-indigo-500/20 to-cyan-500/30 rounded-2xl blur-xl opacity-60"></div>

            {/* Terminal Window */}
            <div className="relative rounded-2xl bg-[#0c101b]/90 border border-white/[0.12] shadow-2xl backdrop-blur-xl overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-purple-400" />
                  <span>mrugansi.profile.ts</span>
                </div>
                <div className="w-12"></div>
              </div>

              {/* Code Content */}
              <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto">
                <div className="text-slate-400 mb-2">
                  <span className="text-purple-400">const</span> developer = &#123;
                </div>
                <div className="pl-4 space-y-1">
                  <div>
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-cyan-300">"{personalInfo.name}"</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">degree:</span>{' '}
                    <span className="text-emerald-300">"MSc IT (2028)"</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">university:</span>{' '}
                    <span className="text-cyan-300">"CHARUSAT"</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">undergraduate:</span>{' '}
                    <span className="text-emerald-300">"BSc IT (CGPA: 8.18)"</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">location:</span>{' '}
                    <span className="text-amber-300">"Surat, Gujarat, India"</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">coreLanguages:</span> [
                    <span className="text-purple-300">"Java"</span>,{' '}
                    <span className="text-purple-300">"C++"</span>,{' '}
                    <span className="text-purple-300">"JS"</span>,{' '}
                    <span className="text-purple-300">"Python"</span>,{' '}
                    <span className="text-purple-300">"PHP"</span>
                    ],
                  </div>
                  <div>
                    <span className="text-slate-400">focus:</span> [
                    <span className="text-cyan-300">"Web Development"</span>,{' '}
                    <span className="text-cyan-300">"DSA"</span>,{' '}
                    <span className="text-cyan-300">"REST APIs"</span>
                    ],
                  </div>
                  <div>
                    <span className="text-slate-400">seekingRole:</span>{' '}
                    <span className="text-emerald-400 font-semibold">true</span>,
                  </div>
                </div>
                <div className="text-slate-400 mt-2">&#125;;</div>

                {/* Live Terminal Output / Status */}
                <div className="mt-4 pt-4 border-t border-white/[0.08] text-[11px] text-slate-400 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-slate-300 font-sans">Ready to build & innovate</span>
                  </div>
                  <span className="text-emerald-400">● 100% committed</span>
                </div>
              </div>
            </div>

            {/* Quick Feature Badges Floating Around */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/[0.08] backdrop-blur-md">
                <div className="text-xs text-slate-400 font-medium">BSc IT Score</div>
                <div className="text-lg font-bold text-white mt-0.5">8.18 CGPA</div>
                <div className="text-[11px] text-cyan-400">VNSGU (2023–2026)</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/[0.08] backdrop-blur-md">
                <div className="text-xs text-slate-400 font-medium">Current Program</div>
                <div className="text-lg font-bold text-white mt-0.5">MSc IT</div>
                <div className="text-[11px] text-purple-400">CHARUSAT (Class of '28)</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
