import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import DemoVideo from "./components/DemoVideo";
import Features from "./components/Features";
import Blogs from "./components/Blogs";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";
import VideoModal from "./components/VideoModal";

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

  return (
    <div className="bg-[#0B0A08] text-[#EDEBE7] font-sans px-6 scroll-smooth">
      <Navbar />
      <Hero 
        onOpenVideoModal={() => setShowVideoModal(true)}
        onOpenCalendly={openCalendly}
      />
      <Stats />
      <DemoVideo onOpenVideoModal={() => setShowVideoModal(true)} />
      <Features />
      <Blogs />
      <Waitlist />
      <Footer />
      <VideoModal 
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
      />
    </div>
  );
}
