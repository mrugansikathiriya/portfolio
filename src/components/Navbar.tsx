import React, { useState } from 'react';
import { Menu, X, Download, Code2 } from 'lucide-react';
import { navItems, personalInfo } from '../data/portfolioData';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { useActiveSection } from '../hooks/useActiveSection';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollY = useScrollPosition();
  const sectionIds = navItems.map((item) => item.href.replace('#', ''));
  const activeSection = useActiveSection(sectionIds);

  const isScrolled = scrollY > 20;

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080a0f]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <a
          href="#"
          className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-lg py-1 px-1.5"
          aria-label="Mrugansi Kathiriya - Home"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:border-purple-400 transition-colors">
            <Code2 className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-base font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
              Mrugansi<span className="text-purple-400">.dev</span>
            </span>
            <span className="text-[10px] text-slate-400 tracking-wider uppercase font-medium">
              Aspiring SE
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 bg-slate-900/40 p-1.5 rounded-full border border-white/[0.06] backdrop-blur-sm"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-white bg-purple-500/20 border border-purple-500/30 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA / Resume Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={personalInfo.resumeUrl}
            download="Mrugansi_Kathiriya_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-600/20 hover:shadow-purple-600/30 border border-purple-400/30 transition-all transform active:scale-95"
            aria-label="Download Resume"
          >
            <Download className="w-4 h-4" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.06] border border-white/[0.08] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-[#0c0f18]/95 backdrop-blur-xl border-b border-white/[0.08] animate-in fade-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-1.5 mb-4" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'text-white bg-purple-500/20 border border-purple-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <div className="pt-2 border-t border-white/[0.06]">
            <a
              href={personalInfo.resumeUrl}
              download="Mrugansi_Kathiriya_Resume.pdf"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-600/20 border border-purple-400/30 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
