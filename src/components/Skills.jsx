import { useEffect, useRef } from 'react';
import { Code2, Layout, Server, Database, Wrench } from 'lucide-react';

export default function Skills() {
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

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-6 h-6 text-cyan-400" />,
      skills: ["JavaScript", "Java"],
      borderColor: "hover:border-cyan-400/50",
    },
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6 text-purple-400" />,
      skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap"],
      borderColor: "hover:border-purple-400/50",
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6 text-pink-400" />,
      skills: ["Node.js", "Express.js", "REST APIs"],
      borderColor: "hover:border-pink-400/50",
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6 text-emerald-400" />,
      skills: ["MongoDB", "MySQL", "PostgreSQL"],
      borderColor: "hover:border-emerald-400/50",
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-6 h-6 text-amber-400" />,
      skills: ["Git", "GitHub", "VSCode", "Postman", "Firebase"],
      borderColor: "hover:border-amber-400/50",
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 lg:px-20 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full">
            Expertise
          </span>
          <h2 className="font-orbitron text-3xl sm:text-5xl font-extrabold text-white mt-3 drop-shadow-[0_0_20px_rgba(0,212,255,0.3)]">
            Technical Skills
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`opacity-0 translate-y-10 transition-all duration-700 ease-out group p-8 bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl ${category.borderColor} hover:-translate-y-2 hover:duration-150 shadow-xl`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 transition-colors duration-150 group-hover:border-white/20">
                  {category.icon}
                </div>
                <h3 className="font-orbitron text-lg font-bold text-white tracking-wide">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl text-sm font-medium bg-white/[0.03] border border-white/10 text-gray-200 transition-colors duration-150 group-hover:border-white/25"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}