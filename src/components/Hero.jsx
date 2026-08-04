import { Mail, ArrowRight, FileText, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-6 lg:px-20 overflow-hidden">
      
      {/* Background Neon Glows matching your portfolio theme */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Profile Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-md p-8 bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] relative group hover:border-cyan-400/40 transition-all duration-500">
            
            {/* Inner Glow Accent */}
            <div className="absolute -top-12 -left-12 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all duration-500 pointer-events-none" />

            <div className="flex flex-col items-center text-center relative z-10">
              
              {/* Profile Image with Ring Border */}
              <div className="w-36 h-36 rounded-full p-1 bg-gradient-to-tr from-purple-600 to-cyan-400 shadow-xl mb-6">
                <img
                  src="/Urmi-image.png"
                  alt="Urmila Rajapurkar"
                  className="w-full h-full object-cover rounded-full bg-[#090514]"
                />
              </div>

              {/* Name & Title */}
              <h3 className="font-orbitron text-2xl font-bold text-white tracking-wide">
                Urmila Rajapurkar
              </h3>
              <p className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mt-1 mb-6">
                Full Stack Developer
              </p>

              {/* Divider */}
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6" />

              {/* Social & Contact Icons Bar */}
              <div className="flex items-center justify-center gap-4 w-full pt-4 border-t border-white/10">
                <a
                  href="mailto:urmilarajapurkar953@gmail.com"
                  className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-150"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>

                {/* Twitter / X SVG Icon */}
                <a
                  href="https://x.com/Urmilacodes"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-150"
                  title="Twitter / X"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* LinkedIn SVG Icon */}
                <a
                  href="https://www.linkedin.com/in/urmila-rajapurkar"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-300 hover:text-purple-400 hover:border-purple-400/50 hover:bg-purple-500/10 transition-all duration-150"
                  title="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                {/* GitHub SVG Icon */}
                <a
                  href="https://github.com/urmilarajapurkar953-design"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-300 hover:text-pink-400 hover:border-pink-400/50 hover:bg-pink-500/10 transition-all duration-150"
                  title="GitHub"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Right Side: Hero Content */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          {/* Status Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Whether you're here on purpose or just stumbled in... 👀 Welcome! Feel free to explore my work. ✨
          </div>

          {/* Main Headline */}
          <h1 className="font-orbitron text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-[0_0_25px_rgba(0,212,255,0.25)]">
            Hello, Here's who I am & what I do
          </h1>

          {/* Subtitle / Description */}
          <div className="space-y-3">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I'm <span className="text-white font-semibold">Urmila Rajapurkar</span>, a passionate fresher full stack developer crafting fast, scalable, and immersive web applications with React, modern backend tools, and polished user interactions.
            </p>
            
            {/* Read More Link */}
            <div>
              <a 
                href="#about" 
                className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-sm font-semibold tracking-wide transition-colors group cursor-pointer"
              >
                <span>Read More</span>
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg hover:shadow-[0_0_25px_rgba(0,212,255,0.4)] hover:-translate-y-0.5 transition-all duration-150 flex items-center justify-center gap-3 cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#resume"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold border border-white/20 text-white hover:bg-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-150 flex items-center justify-center gap-3 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}