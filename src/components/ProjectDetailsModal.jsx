import React, { useEffect } from 'react';
import { ExternalLink, X, CheckCircle2, Cpu, Rocket, Sparkles } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

export default function ProjectDetailsModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    // Lock scroll and hide fixed navbar while modal is active
    document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-open');
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.body.style.overflow = 'auto';
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Modal Card Backdrop Overlay */}
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-[#090514]/95 border border-cyan-500/30 rounded-3xl shadow-[0_0_60px_rgba(0,212,255,0.25)] overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:px-8 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Sparkles className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-orbitron text-xl sm:text-2xl font-bold text-white tracking-wide">
                {project.title}
              </h3>
              <p className="text-xs text-cyan-400/80 font-mono mt-0.5">Engineering Architecture & Details</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-gray-300 hover:text-white transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-8 custom-scrollbar">

          {/* Full Uncropped Screenshot Banner Container */}
          <div className="relative group rounded-2xl border border-white/15 bg-black/60 p-2 sm:p-3 overflow-hidden flex items-center justify-center shadow-inner">
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noreferrer"
              className="block relative cursor-pointer overflow-hidden w-full flex justify-center"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full max-h-[420px] object-contain rounded-xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.01]" 
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                <span className="text-xs font-semibold px-4 py-2 rounded-full bg-cyan-500/90 text-white shadow-xl backdrop-blur-md flex items-center gap-1.5 transform scale-95 group-hover:scale-100 transition-transform">
                  <ExternalLink className="w-4 h-4" />
                  Launch Live Deployed Site
                </span>
              </div>
            </a>
          </div>

          {/* Action Links Bar */}
          <div className="flex flex-wrap gap-4">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-6 rounded-xl font-semibold bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg hover:shadow-[0_0_25px_rgba(0,212,255,0.5)] transition-all flex items-center justify-center gap-2 text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Visit Live App</span>
              </a>
            )}

            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="py-3 px-6 rounded-xl font-semibold bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all flex items-center justify-center gap-2 text-sm"
              >
                <SiGithub className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Rocket className="w-4 h-4 text-cyan-400" />
              Overview
            </h4>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed bg-white/[0.03] p-4 sm:p-5 rounded-2xl border border-white/5">
              {project.details?.overview || project.description}
            </p>
          </div>

          {/* Engineering Story */}
          {project.details?.engineeringStory && project.details.engineeringStory.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                The Engineering Story
              </h4>
              <div className="space-y-3">
                {project.details.engineeringStory.map((story, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/20 transition-all"
                  >
                    <h5 className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      {story.title}
                    </h5>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      {story.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features */}
          {project.details?.keyFeatures && project.details.keyFeatures.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                Key Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.details.keyFeatures.map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Icons & Labels */}
          <div>
            <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-3">
              Tech Stack Used
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {project.techItems?.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs font-medium hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all"
                >
                  <span className="text-base">{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:px-8 border-t border-white/10 bg-white/[0.02] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-sm font-semibold bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
}
