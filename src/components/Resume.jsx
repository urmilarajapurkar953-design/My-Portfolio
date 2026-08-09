import { useEffect, useRef } from 'react';
import { Eye, Download } from 'lucide-react';

export default function Resume() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="resume" className="py-24 px-6 lg:px-20 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Box Container with Smooth Reveal */}
        <div
          ref={containerRef}
          className="opacity-0 translate-y-10 transition-all duration-700 ease-out p-10 sm:p-16 lg:p-20 bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          
          {/* Left Text Info */}
          <div className="text-center lg:text-left max-w-2xl">
            <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full inline-block">
              view Resume
            </span>
            <h2 className="font-orbitron text-3xl sm:text-5xl font-extrabold text-white mt-4 drop-shadow-[0_0_20px_rgba(0,212,255,0.3)]">
              My Resume
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mt-4 leading-relaxed">
              Choose whether you would like to view my professional resume directly in your browser or download a copy to review my complete education, certifications, and technical background.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-5 w-full lg:w-auto shrink-0">
            {/* View Option */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg hover:shadow-[0_0_25px_rgba(0,212,255,0.5)] hover:-translate-y-0.5 transition-all duration-150 flex items-center justify-center gap-3 cursor-pointer text-center"
            >
              <Eye className="w-5 h-5" />
              <span>View Resume</span>
            </a>

            {/* Download Option */}
            <a
              href="/resume.pdf"
              download="Urmila_Rajapurkar_Resume.pdf"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold border border-white/20 text-white hover:bg-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-150 flex items-center justify-center gap-3 cursor-pointer text-center"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}