import { useEffect, useRef } from 'react';
import { ExternalLink, Code2 } from 'lucide-react';

export default function Projects() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "AI Resume Builder",
      description: "Full-stack AI-powered resume builder featuring resume parsing, secure JWT authentication, OpenAI integration, and real-time previews.",
      image: "/project-view/AI-Resume-Builder.png",
      liveLink: "https://ai-resume-builder-fronted-yvgr.onrender.com/",
      tools: ["React", "Node.js", "Express", "MongoDB", "OpenAI"],
      borderColor: "hover:border-cyan-400/50",
    },
    {
      title: "Animated SaaS Web Application",
      description: "Production-style SaaS web application built with Next.js App Router, featuring advanced Framer Motion animations and dynamic pricing tiers.",
      image: "/project-view/Animated-SaaS.png",
      liveLink: "https://animated-saas-web-application.netlify.app/",
      tools: ["Next.js", "Tailwind CSS", "Framer Motion"],
      borderColor: "hover:border-purple-400/50",
    },
    {
      title: "Vingo Food Delivery",
      description: "Full-stack food delivery platform featuring real-time order tracking with Socket.IO, secure Razorpay payments, and user authentication.",
      image: "/project-view/Vingo-food.png",
      liveLink: "https://vingo-food-delivery-yi6q.onrender.com/home",
      tools: ["React.js", "Redux Toolkit", "Node.js", "MongoDB", "Socket.IO"],
      borderColor: "hover:border-pink-400/50",
    },
    {
      title: "VirtualR - SaaS Landing Page",
      description: "Modern, responsive SaaS product landing page built with React and Tailwind CSS featuring reusable workflow and pricing components.",
      image: "/project-view/VirtualR.png",
      liveLink: "https://software-website-gray.vercel.app/",
      tools: ["React", "Tailwind CSS", "React Router"],
      borderColor: "hover:border-emerald-400/50",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 lg:px-20 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full">
            Portfolio
          </span>
          <h2 className="font-orbitron text-3xl sm:text-5xl font-extrabold text-white mt-3 drop-shadow-[0_0_20px_rgba(0,212,255,0.3)]">
            Featured Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`opacity-0 translate-y-10 transition-all duration-700 ease-out group p-6 sm:p-8 bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl ${project.borderColor} hover:-translate-y-2 hover:duration-150 shadow-xl flex flex-col justify-between`}
            >
              <div>
                {/* Project Image Preview Box */}
                <div className="relative h-52 sm:h-60 overflow-hidden rounded-2xl border border-white/10 mb-6 bg-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020010] via-transparent opacity-60" />
                </div>

                {/* Title */}
                <h3 className="font-orbitron text-xl font-bold text-white tracking-wide mb-3 flex items-center justify-between">
                  <span>{project.title}</span>
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack Pills (Short tool explanation) */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl text-xs font-medium bg-white/[0.03] border border-white/10 text-cyan-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Live Preview Button */}
              <div>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 rounded-xl font-semibold bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Preview</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}