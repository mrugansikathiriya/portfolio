import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowDown,
  Download,
  Mail,
  MapPin,
  Sparkles,
  Terminal,
  User,
  GraduationCap,
  Award,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GitHubIcon, LinkedInIcon } from '../components/SocialIcons';

export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'photo' | 'code'>('photo');

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
            <span>Open to Full-Stack & Software Engineering Roles</span>
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
            An MSc IT student and Full-Stack Developer specializing in building end-to-end web applications, responsive user interfaces, and robust backend APIs. Focused on scalable architectures, clean code, and solving real-world challenges.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-[length:200%_auto] hover:bg-right transition-all duration-300 shadow-lg shadow-purple-600/25 hover:shadow-purple-600/35 border border-purple-400/30 group text-sm sm:text-base cursor-pointer"
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

        {/* Right Column: Interactive Profile Showcase & Professional Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="lg:col-span-5 flex justify-center w-full"
        >
          <div className="relative w-full max-w-md">
            {/* Ambient Backing Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 via-indigo-500/20 to-cyan-500/30 rounded-3xl blur-xl opacity-60"></div>

            {/* Main Showcase Container */}
            <div className="relative rounded-3xl bg-[#0c101b]/95 border border-white/[0.12] shadow-2xl backdrop-blur-xl overflow-hidden">
              {/* Header with Switcher Tabs */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-white/[0.08]">
                <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-xl border border-white/[0.06]">
                  <button
                    type="button"
                    onClick={() => setActiveTab('photo')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      activeTab === 'photo'
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30 shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <User className="w-3.5 h-3.5" />
                    <span>Portrait</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('code')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      activeTab === 'code'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[11px] font-mono text-slate-400">active</span>
                </div>
              </div>

              {/* Tab Contents */}
              <AnimatePresence mode="wait">
                {activeTab === 'photo' ? (
                  <motion.div
                    key="photo"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="p-5 flex flex-col items-center"
                  >
                    {/* Professional Photograph */}
                    <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 group shadow-lg bg-slate-950">
                      <img
                        src={personalInfo.avatarUrl}
                        alt="Mrugansi Kathiriya - Professional Portrait"
                        className="w-full h-72 sm:h-80 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Gradient Overlay at Bottom of Photo */}
                      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0c101b] via-[#0c101b]/60 to-transparent flex flex-col justify-end p-4">
                        <div className="flex items-center justify-between gap-2">
                          <div>
                            <div className="text-base font-bold text-white tracking-tight drop-shadow-sm">
                              {personalInfo.name}
                            </div>
                            <div className="text-xs text-purple-300 font-medium drop-shadow-sm">
                              {personalInfo.role}
                            </div>
                          </div>
                          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 backdrop-blur-md">
                            ● Open to Roles
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Quick highlights underneath photo */}
                    <div className="w-full mt-4 grid grid-cols-2 gap-2 text-left">
                      <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/[0.06]">
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Master's</div>
                        <div className="text-xs font-bold text-white truncate">CHARUSAT</div>
                        <div className="text-[11px] text-purple-400">MSc IT (2028)</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/[0.06]">
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Bachelor's</div>
                        <div className="text-xs font-bold text-white truncate">VNSGU</div>
                        <div className="text-[11px] text-emerald-400">8.18 CGPA</div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="code"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto"
                  >
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
                        <span className="text-slate-400">role:</span>{' '}
                        <span className="text-purple-300">"Full-Stack Developer"</span>,
                      </div>
                      <div>
                        <span className="text-slate-400">coreLanguages:</span> [
                        <span className="text-purple-300">"JavaScript"</span>,{' '}
                        <span className="text-purple-300">"Java"</span>,{' '}
                        <span className="text-purple-300">"C++"</span>,{' '}
                        <span className="text-purple-300">"Python"</span>,{' '}
                        <span className="text-purple-300">"PHP"</span>
                        ],
                      </div>
                      <div>
                        <span className="text-slate-400">focus:</span> [
                        <span className="text-cyan-300">"Full-Stack Web Dev"</span>,{' '}
                        <span className="text-cyan-300">"REST APIs"</span>,{' '}
                        <span className="text-cyan-300">"Database Systems"</span>
                        ],
                      </div>
                      <div>
                        <span className="text-slate-400">seekingRole:</span>{' '}
                        <span className="text-emerald-400 font-semibold">"Full-Stack / Software Engineer"</span>,
                      </div>
                    </div>
                    <div className="text-slate-400 mt-2">&#125;;</div>

                    {/* Terminal Status Footer */}
                    <div className="mt-4 pt-4 border-t border-white/[0.08] text-[11px] text-slate-400 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="text-slate-300 font-sans">Ready to build & innovate</span>
                      </div>
                      <span className="text-emerald-400">● 100% committed</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Feature Badges Below */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/[0.08] backdrop-blur-md flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">BSc IT Score</div>
                  <div className="text-sm font-bold text-white">8.18 CGPA</div>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/[0.08] backdrop-blur-md flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Master's Degree</div>
                  <div className="text-sm font-bold text-white">MSc IT (2028)</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
