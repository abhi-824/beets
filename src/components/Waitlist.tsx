import { useState } from "react";
import { ArrowRight } from 'lucide-react';

export default function Waitlist() {
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
                className={`p-4 rounded-lg border ${banner.type === 'success'
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
  );
}

