import { useEffect, useRef, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6 lg:px-20 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full">
            Planet Profile
          </span>
          <h2 className="font-orbitron text-3xl sm:text-4xl font-extrabold text-white mt-3 drop-shadow-[0_0_20px_rgba(0,212,255,0.3)]">
            About Me
          </h2>
        </div>

        {/* Glassmorphism Space Card */}
        <div className={`p-8 sm:p-12 bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] relative overflow-hidden group hover:border-cyan-400/50 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Decorative Corner Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl group-hover:bg-cyan-500/25 transition-all duration-500 pointer-events-none" />

          <div className="space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed relative z-10">
            
            {/* Paragraph 1 */}
            <p className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              I'm <span className="text-white font-semibold">Urmila Rajapurkar</span>, a Full Stack Developer who enjoys building applications that are fast, scalable, and intuitive to use. I like working across both frontend and backend, turning ideas into complete products that solve real problems.
            </p>

            {/* Paragraph 2 */}
            <p className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              I believe good software is more than clean code—it's about creating experiences that are reliable, accessible, and enjoyable for users. I'm constantly learning new technologies, improving my problem-solving skills, and challenging myself through projects that push me to grow as a developer.
            </p>

            {/* Paragraph 3 */}
            <p className={`transition-all duration-700 delay-700 text-gray-400 text-sm sm:text-base italic border-l-2 border-cyan-400 pl-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              When I'm not building applications, you'll usually find me exploring new tools, refining my skills, or experimenting with ideas that help me become a better engineer.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}