export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden px-6 pt-28 pb-16 lg:px-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(58,20,112,0.45),_transparent_26%),radial-gradient(circle_at_right,_rgba(0,212,255,0.15),_transparent_20%),linear-gradient(180deg,#020010_0%,#050318_45%,#020010_100%)]" />
      <div className="absolute left-0 top-16 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="absolute bottom-10 left-20 h-64 w-64 rounded-full bg-pink-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-white/5 px-5 py-2 text-sm text-cyan-200 shadow-[0_0_30px_rgba(0,212,255,0.16)]">
            <span className="inline-flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            Galaxy portfolio live now
          </div>

          <h1 className="font-orbitron text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            Urmila Rajapurkar
          </h1>

          <div className="text-lg font-semibold uppercase tracking-[0.25em] text-pink-400">
            Full Stack Developer
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I build immersive, neon-inspired web experiences with React, modern backend tools, and polished user interactions.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
            <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 px-8 py-4 text-sm font-semibold text-white shadow-[0_16px_50px_rgba(123,47,190,0.25)] transition hover:-translate-y-1">
              Explore Projects
            </a>
            <a href="#resume" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10">
              View Resume
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center text-sm text-slate-300 shadow-[0_25px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl">
              <div className="text-3xl font-bold text-white">4</div>
              Live projects
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center text-sm text-slate-300 shadow-[0_25px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl">
              <div className="text-3xl font-bold text-white">Full Stack</div>
              Web apps
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center text-sm text-slate-300 shadow-[0_25px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl">
              <div className="text-3xl font-bold text-white">Resume</div>
              Inline viewer
            </div>
          </div>
        </div>

        <div className="relative rounded-[40px] border border-white/10 bg-white/5 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <div className="absolute -right-10 top-6 h-24 w-24 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -left-10 bottom-10 h-24 w-24 rounded-full bg-pink-500/20 blur-3xl" />
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Portfolio Snapshot</p>
              <h3 className="text-2xl font-semibold text-white">Metaverse inspired UI</h3>
            </div>
            <p className="text-slate-300 leading-7">
              A vibrant, animated portfolio inspired by deep-space neon visuals and interactive design systems.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-white shadow-[0_20px_40px_rgba(0,212,255,0.12)]">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Skills</p>
                <p className="mt-3 text-base">React, Next.js, Node, Tailwind</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-white shadow-[0_20px_40px_rgba(255,107,107,0.12)]">
                <p className="text-sm uppercase tracking-[0.3em] text-pink-300">Focus</p>
                <p className="mt-3 text-base">Modern frontend & backend</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
