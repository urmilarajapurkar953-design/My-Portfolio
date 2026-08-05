import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-5 z-50 mx-auto flex w-full max-w-7xl items-center justify-between px-5 md:px-8">
      <div className="rounded-full border border-white/10 bg-[#040416]/80 px-5 py-3 shadow-[0_18px_60px_rgba(0,212,255,0.12)] backdrop-blur-xl">
        <span className="font-orbitron text-base font-black uppercase tracking-[0.35em] text-white drop-shadow-[0_0_22px_rgba(0,212,255,0.55)]">
          URMILA
        </span>
      </div>

      <div className="hidden items-center gap-8 md:flex text-sm font-medium text-slate-200">
        <a href="#about" className="transition hover:text-cyan-300">About</a>
        <a href="#skills" className="transition hover:text-cyan-300">Skills</a>
        <a href="#projects" className="transition hover:text-cyan-300">Projects</a>
        <a href="#resume" className="transition hover:text-cyan-300">Resume</a>
        <a href="#contact" className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-white transition hover:bg-cyan-500/20">
          Contact
        </a>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white shadow-lg shadow-cyan-500/10"
        aria-label="Toggle navigation"
      >
        <span className="block h-0.5 w-6 bg-white"></span>
      </button>

      {isOpen && (
        <div className="absolute right-5 top-20 z-50 w-[calc(100%-2rem)] rounded-3xl border border-white/10 bg-[#020010]/95 p-6 shadow-2xl backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-4 text-lg text-slate-100">
            <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-cyan-300">About</a>
            <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-cyan-300">Skills</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-cyan-300">Projects</a>
            <a href="#resume" onClick={() => setIsOpen(false)} className="hover:text-cyan-300">Resume</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-cyan-300">Contact</a>
          </nav>
        </div>
      )}
    </header>
  )
}
