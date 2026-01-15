import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
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
          <div className="md:hidden flex items-center gap-3">
            {/* Mobile Join Waitlist */}
            <a
              href="#waitlist"
              className="text-xs bg-[#7A1E2D] hover:bg-[#9A2838] text-white font-semibold px-4 py-2 rounded-md transition-all"
            >
              Join Waitlist
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-white/70 hover:text-white"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-[#0B0A08]/95 backdrop-blur-md"
          >
            <motion.div
              initial={{ y: -8 }}
              animate={{ y: 0 }}
              exit={{ y: -8 }}
              transition={{ duration: 0.2 }}
              className="px-6 py-6 flex flex-col gap-4"
            >
              <a
                href="#features"
                className="text-sm font-medium text-white hover:text-[#9A2838]"
                onClick={() => setTimeout(() => setMobileOpen(false), 900)}
              >
                Features
              </a>

              <a
                href="#blogs"
                className="text-sm font-medium text-white hover:text-[#9A2838]"
                onClick={() => setTimeout(() => setMobileOpen(false), 900)}
              >
                Blogs
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

