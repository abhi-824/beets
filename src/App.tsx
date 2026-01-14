import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight } from 'lucide-react';
import AnimatedDots from "./components/AnimatedDots";

export default function BeetsLanding() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;

    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  const openCalendly = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/abhi-moudgil15/30min?background_color=1d1d1d&text_color=ffffff&primary_color=7a1e2d'
      });
    }
    return false;
  };

  const [formData, setFormData] = useState({
    email: '',
    mobile: '',
    role: '',
    frustration: '',
    value: ''
  });

  const [banner, setBanner] = useState({ show: false, message: '', type: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const roles = [
    'Consultant (Strategy / Ops / Analytics)',
    'Product Manager',
    'Founder / Operator',
    'Engineer',
    'Others'
  ];

  const handleSubmit = async () => {
    if (!formData.email || !formData.mobile || !formData.role) {
      setBanner({
        show: true,
        message: '✗ Please fill in all required fields.',
        type: 'error'
      });
      setTimeout(() => setBanner({ show: false, message: '', type: '' }), 5000);
      return;
    }

    setIsSubmitting(true);
    setBanner({ show: false, message: '', type: '' });

    const formDataToSubmit = new FormData();
    formDataToSubmit.append('entry.1530822429', formData.email);
    formDataToSubmit.append('entry.1910402843', formData.mobile);
    formDataToSubmit.append('entry.367741878', formData.role);
    formDataToSubmit.append('entry.1308069185', formData.frustration);
    formDataToSubmit.append('entry.988477348', formData.value);

    try {
      await fetch('https://docs.google.com/forms/d/e/1FAIpQLSffLSSeJaQYJOadVaCEUKru-1460a6JVFD9WsflewjwmEPRRA/formResponse', {
        method: 'POST',
        body: formDataToSubmit,
        mode: 'no-cors'
      });

      setBanner({
        show: true,
        message: '✓ Welcome to the waitlist! We\'ll be in touch soon.',
        type: 'success'
      });

      setFormData({
        email: '',
        mobile: '',
        role: '',
        frustration: '',
        value: ''
      });

      setTimeout(() => {
        setBanner({ show: false, message: '', type: '' });
      }, 7000);
    } catch (error) {
      setBanner({
        show: true,
        message: '✗ Something went wrong. Please try again.',
        type: 'error'
      });

      setTimeout(() => {
        setBanner({ show: false, message: '', type: '' });
      }, 7000);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="bg-[#0B0A08] text-[#EDEBE7] font-sans px-6 scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0B0A08]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Beets" className="h-10" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-white hover:text-[#9A2838] transition-colors">
                Features
              </a>
              
              <a href="#blogs" className="text-sm font-medium text-white hover:text-[#9A2838] transition-colors">
                Blogs
              </a>
              <a href="#waitlist" className="text-sm bg-[#7A1E2D] hover:bg-[#9A2838] text-white font-semibold px-6 py-2.5 rounded-lg transition-all shadow-lg shadow-[#7A1E2D]/20">
              Join Waitlist
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-white/70 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-32 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-4xl font-semibold leading-tight">
          <span className="text-[#7A1E2D]">Beets</span>: Cursor‑style AI editing<br />for PowerPoint
          </h1>
          <p className="mt-6 text-white/60 max-w-xl">
            Beets lives inside PowerPoint. Chat with your deck, review every suggested change, and accept or reject edits component‑by‑component.
          </p>
          <div className="mt-8 flex gap-4">
            <button
              onClick={openCalendly}
              className="bg-[#7A1E2D] hover:bg-[#9A2838] text-white px-6 py-2.5 rounded-md font-medium transition-all"
            >
              Book a demo
            </button>
            <button
              onClick={() => setShowVideoModal(true)}
              className="border border-white/20 hover:border-white/40 px-6 py-2.5 rounded-md text-sm transition-all"
            >
              View demo
            </button>
          </div>
        </motion.div>

        {/* Animated visual - Replace with your GIF */}
        <div className="relative h-[360px] flex items-center justify-center">
          {/* Option 1: Use your GIF (uncomment and add your GIF path) */}
          {/* <img src="assets/hero-animation.gif" alt="Animation" className="w-full h-full object-contain" /> */}

          {/* Option 2: Placeholder with animated dots */}
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          <AnimatedDots />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5 flex justify-around">
        <div className="flex justify-around w-full max-w-7xl text-sm">
          <div className="flex flex-col items-center max-w-[220px]">

            <svg className="w-6 h-6 mb-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <p className="text-lg font-medium">Chat-native</p>
            <p className="text-white/50">Edit decks conversationally</p>
          </div>
          <div className="flex flex-col items-center max-w-[220px]">

            <svg className="w-6 h-6 mb-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
            </svg>
            <p className="text-lg font-medium">Component diffs</p>
            <p className="text-white/50">Text, charts, layouts</p>
          </div>
          <div className="flex flex-col items-center max-w-[220px]">

            <svg className="w-6 h-6 mb-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="text-lg font-medium">Cross-file context</p>
            <p className="text-white/50">@xlsx, @docs, @csv</p>
          </div>
          <div className="flex flex-col items-center max-w-[220px]">

            <svg className="w-6 h-6 mb-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <p className="text-lg font-medium">Memory built-in</p>
            <p className="text-white/50">Understands your deck</p>
          </div>
        </div>
      </section>
      {/* Workflow */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-3xl font-semibold mb-6">Designed for control</h2>
          <p className="text-white/60 max-w-lg">
            Beets never edits blindly. Every change is previewed, diffed, and reversible. You stay in control at all times.
          </p>
          <ul className="mt-8 space-y-4 text-sm text-white/70">
            <li>• Accept / reject per slide or component</li>
            <li>• Timeline of previous edits</li>
            <li>• Deterministic, repeatable output</li>
          </ul>
        </div>

        {/* Mock terminal */}
        <div className="bg-black/40 border border-white/10 rounded-xl p-4 text-xs text-white/70">
          <p className="mb-2">&gt; From @analysis.xlsx create a pie chart</p>
          <p className="text-[#7A1E2D]">Beets:</p>
          <p>• Parsed revenue categories</p>
          <p>• Generated pie chart</p>
          <p>• Waiting for approval</p>
        </div>
      </section>
      <section id="blogs" className="border-t border-white/5 max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4">Deep Dives & Case Studies</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Explore the engineering and philosophy behind Beets—from MCP architecture to real-world consultant workflows.
          </p>
        </div>

        <div id="blog" className="grid md:grid-cols-3 gap-8">
          {/* Blog 1 */}
          <a
            href="https://medium.com/@thenarcissistcoder/cursor-for-ppt-mcp-server-7013e6df92f6"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-black/20 border border-white/10 rounded-xl p-6 hover:border-[#7A1E2D]/50 hover:bg-black/30 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-xs text-[#7A1E2D] font-mono">Part 1</span>
              <svg className="w-4 h-4 text-white/40 group-hover:text-white/70 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3 group-hover:text-[#7A1E2D] transition-colors">
              Cursor for PPT: MCP Server
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              How component-based AI and MCP can automate PowerPoint creation while preserving design consistency, data accuracy, and human control.
            </p>
            <div className="mt-6 pt-4 border-t border-white/5">
              <span className="text-xs text-white/40">Architecture & Design</span>
            </div>
          </a>

          {/* Blog 2 */}
          <a
            href="https://medium.com/@thenarcissistcoder/cursor-for-ppt-part-two-4a029ababf7c"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-black/20 border border-white/10 rounded-xl p-6 hover:border-[#7A1E2D]/50 hover:bg-black/30 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-xs text-[#7A1E2D] font-mono">Part 2</span>
              <svg className="w-4 h-4 text-white/40 group-hover:text-white/70 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3 group-hover:text-[#7A1E2D] transition-colors">
              Building the Product
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              From concept to reality—introducing a chat-based PPT add-in, MCP-powered open-source LLM stack, and streaming orchestration layer.
            </p>
            <div className="mt-6 pt-4 border-t border-white/5">
              <span className="text-xs text-white/40">Product & Engineering</span>
            </div>
          </a>

          {/* Blog 3 */}
          <a
            href="https://medium.com/@thenarcissistcoder/cursor-for-powerpoint-the-existential-crisis-d504d2139f52"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-black/20 border border-white/10 rounded-xl p-6 hover:border-[#7A1E2D]/50 hover:bg-black/30 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-xs text-[#7A1E2D] font-mono">Part 3</span>
              <svg className="w-4 h-4 text-white/40 group-hover:text-white/70 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3 group-hover:text-[#7A1E2D] transition-colors">
              The Existential Crisis
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Editing existing slides—sending PPTs as base64, manipulating shapes via MCP tools, and solving real consultant pain points.
            </p>
            <div className="mt-6 pt-4 border-t border-white/5">
              <span className="text-xs text-white/40">Real-World Implementation</span>
            </div>
          </a>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="border-t border-white/5 max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-xs text-[#7A1E2D] font-mono uppercase tracking-wider px-3 py-1 bg-[#7A1E2D]/10 rounded-full border border-[#7A1E2D]/20">
                  Early Access
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Join the <span className="text-[#7A1E2D]">Beets</span> Waitlist
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                Be among the first to experience AI-powered PowerPoint automation. Get early access, exclusive updates, and help shape the future of presentation creation.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#7A1E2D]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-[#7A1E2D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Priority Access</h4>
                  <p className="text-sm text-white/60">Get notified first when Beets launches</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#7A1E2D]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-[#7A1E2D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Exclusive Updates</h4>
                  <p className="text-sm text-white/60">Behind-the-scenes development insights</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#7A1E2D]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-[#7A1E2D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Shape the Product</h4>
                  <p className="text-sm text-white/60">Your feedback drives our roadmap</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-black/40 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm text-white/70">Email *</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 outline-none focus:border-[#7A1E2D]/50 focus:bg-white/10 transition-all"
                />
              </div>

              {/* Mobile */}
              <div className="space-y-2">
                <label className="text-sm text-white/70">Mobile Number *</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 outline-none focus:border-[#7A1E2D]/50 focus:bg-white/10 transition-all"
                />
              </div>

              {/* Role */}
              <div className="space-y-3">
                <label className="text-sm text-white/70">What best describes your role? *</label>
                <div className="space-y-2">
                  {roles.map((role, index) => (
                    <label key={index} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="role"
                        value={role}
                        checked={formData.role === role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-4 h-4 border-white/20 text-[#7A1E2D] focus:ring-[#7A1E2D] accent-[#7A1E2D]"
                      />
                      <span className="text-sm text-white/80 group-hover:text-white transition-colors">
                        {role}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Frustration */}
              <div className="space-y-2">
                <label className="text-sm text-white/70">What frustrates you the most when working on PowerPoint?</label>
                <textarea
                  placeholder="Share your biggest pain points..."
                  value={formData.frustration}
                  onChange={(e) => setFormData({ ...formData, frustration: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 outline-none focus:border-[#7A1E2D]/50 focus:bg-white/10 transition-all resize-none"
                />
              </div>

              {/* Value */}
              <div className="space-y-2">
                <label className="text-sm text-white/70">How valuable would a tool like Beets be for you?</label>
                <textarea
                  placeholder="Tell us what would make the biggest impact..."
                  value={formData.value}
                  onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 outline-none focus:border-[#7A1E2D]/50 focus:bg-white/10 transition-all resize-none"
                />
              </div>

              {/* Banner */}
              {banner.show && (
                <div 
                  className={`p-4 rounded-lg border ${
                    banner.type === 'success' 
                      ? 'bg-green-500/10 border-green-500/30 text-green-400' 
                      : 'bg-red-500/10 border-red-500/30 text-red-400'
                  }`}
                >
                  {banner.message}
                </div>
              )}

              {/* Submit Button */}
              <button 
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full flex items-center justify-between px-6 py-4 bg-[#7A1E2D] hover:bg-[#8B2333] rounded-lg font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Submitting...' : 'Join Waitlist'}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t border-white/5 py-10 text-center text-white/40 text-sm">
        © {new Date().getFullYear()} Beets
      </footer>

      {/* Video Modal */}
      {showVideoModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setShowVideoModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full text-white transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* YouTube iframe */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/k3hnXg1Ap5g?autoplay=1"
              title="Beets Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}