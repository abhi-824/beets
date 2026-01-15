import { motion } from "framer-motion";
import AnimatedDots from "./AnimatedDots";

interface HeroProps {
  onOpenVideoModal: () => void;
  onOpenCalendly: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Hero({ onOpenVideoModal, onOpenCalendly }: HeroProps) {
  return (
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
            onClick={onOpenCalendly}
            className="bg-[#7A1E2D] hover:bg-[#9A2838] text-white px-6 py-2.5 rounded-md font-medium transition-all"
          >
            Book a demo
          </button>
          <button
            onClick={onOpenVideoModal}
            className="border border-white/20 hover:border-white/40 px-6 py-2.5 rounded-md text-sm transition-all"
          >
            View demo
          </button>
        </div>
      </motion.div>

      {/* Animated visual */}
      <div className="relative hidden md:flex h-[360px] flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          <AnimatedDots />
        </div>
      </div>
    </section>
  );
}

