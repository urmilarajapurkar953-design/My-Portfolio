import { useState } from 'react';
import { Mail, Globe, Code, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    e.target.reset();
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-20 relative z-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full">
            Get in Touch
          </span>
          <h2 className="font-orbitron text-3xl sm:text-5xl font-extrabold text-white mt-3 drop-shadow-[0_0_20px_rgba(0,212,255,0.3)]">
            Let’s Build Together
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-base sm:text-lg mt-4 leading-relaxed">
            Have a project in mind, looking for a developer, or want to discuss an opportunity? Feel free to reach out.
          </p>
        </div>

        {/* Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          
          {/* Left Info Card */}
          <div className="lg:col-span-2 p-8 bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl flex flex-col justify-between shadow-2xl">
            <div>
              <h3 className="font-orbitron text-xl font-bold text-white mb-4">
                Contact Information
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                I'm actively looking for new opportunities and collaborations. Drop me a message or connect through my profiles below.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:urmilarajapurkar953@gmail.com"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-gray-200 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-150"
                >
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm font-medium truncate">urmilarajapurkar953@gmail.com</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/urmila-rajapurkar"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-gray-200 hover:border-purple-400/50 hover:text-purple-400 transition-all duration-150"
                >
                  <Globe className="w-5 h-5 text-purple-400" />
                  <span className="text-sm font-medium">LinkedIn Profile</span>
                </a>

                <a
                  href="https://github.com/urmilarajapurkar953-design"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-gray-200 hover:border-pink-400/50 hover:text-pink-400 transition-all duration-150"
                >
                  <Code className="w-5 h-5 text-pink-400" />
                  <span className="text-sm font-medium">GitHub Profile</span>
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-gray-400">
              Response time: Within 24 hours
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-3 p-8 sm:p-10 bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors duration-150"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors duration-150"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors duration-150 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:-translate-y-0.5 transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>

              {submitted && (
                <div className="flex items-center justify-center gap-2 text-emerald-400 text-sm font-medium mt-4 bg-emerald-500/10 border border-emerald-500/30 p-3 rounded-xl">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}