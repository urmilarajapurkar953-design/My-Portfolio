import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Listen for body class changes to hide Navbar when any project modal is active
  useEffect(() => {
    const checkModal = () => {
      setIsModalOpen(document.body.classList.contains('modal-open'))
    }

    checkModal()

    const observer = new MutationObserver(checkModal)
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] })

    return () => observer.disconnect()
  }, [])

  // Smooth scroll handler for all section links
  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setIsOpen(false)

    if (targetId === '#' || targetId === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const element = document.querySelector(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Completely hide Navbar from DOM when project details modal is active
  if (isModalOpen) return null

  return (
    <header className="fixed inset-x-0 top-5 z-50 mx-auto flex w-full max-w-7xl items-center justify-between px-5 md:px-8 pointer-events-none">
      {/* Brand Logo Pill with Glassmorphism & Blur */}
      <div className="pointer-events-auto rounded-full border border-white/10 bg-[#040416]/85 px-5 py-3 shadow-[0_18px_60px_rgba(0,212,255,0.15)] backdrop-blur-2xl hover:border-cyan-400/50 transition-all duration-300">
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="font-orbitron text-base font-black uppercase tracking-[0.35em] text-white drop-shadow-[0_0_22px_rgba(0,212,255,0.55)]"
        >
          URMILA
        </a>
      </div>

      {/* Desktop Navigation Pill with Glassmorphism & Backdrop Blur */}
      <div className="pointer-events-auto hidden items-center gap-7 md:flex text-sm font-medium text-slate-200 rounded-full border border-white/10 bg-[#040416]/85 px-7 py-3 shadow-[0_18px_60px_rgba(0,212,255,0.15)] backdrop-blur-2xl">
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="transition hover:text-cyan-300">Home</a>
        <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="transition hover:text-cyan-300">About</a>
        <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')} className="transition hover:text-cyan-300">Skills</a>
        <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="transition hover:text-cyan-300">Projects</a>
        <a href="#resume" onClick={(e) => handleNavClick(e, '#resume')} className="transition hover:text-cyan-300">Resume</a>
        <a 
          href="#contact" 
          onClick={(e) => handleNavClick(e, '#contact')}
          className="rounded-full border border-cyan-500/30 bg-cyan-500/15 px-4 py-1.5 text-white transition hover:bg-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,212,255,0.4)]"
        >
          Contact
        </a>
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto md:hidden flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#040416]/85 text-white shadow-lg shadow-cyan-500/10 backdrop-blur-2xl"
        aria-label="Toggle navigation"
      >
        <span className="block h-0.5 w-6 bg-white"></span>
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="pointer-events-auto absolute right-5 top-20 z-50 w-[calc(100%-2rem)] rounded-3xl border border-white/10 bg-[#020010]/95 p-6 shadow-2xl backdrop-blur-2xl md:hidden">
          <nav className="flex flex-col gap-4 text-lg text-slate-100">
            <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="hover:text-cyan-300">Home</a>
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-cyan-300">About</a>
            <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')} className="hover:text-cyan-300">Skills</a>
            <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="hover:text-cyan-300">Projects</a>
            <a href="#resume" onClick={(e) => handleNavClick(e, '#resume')} className="hover:text-cyan-300">Resume</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-cyan-300">Contact</a>
          </nav>
        </div>
      )}
    </header>
  )
}
