interface DemoVideoProps {
  onOpenVideoModal: () => void;
}

export default function DemoVideo({ onOpenVideoModal }: DemoVideoProps) {
  return (
    <section className="border-t border-white/5 max-w-7xl mx-auto px-6 py-32">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        {/* Video on the left */}
        <div className="relative aspect-video bg-black/40 border border-white/10 rounded-xl overflow-hidden cursor-pointer group hover:border-[#7A1E2D]/50 transition-all"
          onClick={onOpenVideoModal}
        >
          {/* Thumbnail/Preview */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/60 to-black/80">
            {/* Play button overlay */}
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full bg-[#7A1E2D]/90 hover:bg-[#7A1E2D] flex items-center justify-center transition-all group-hover:scale-110 shadow-lg shadow-black/50">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            {/* YouTube thumbnail - using the video ID from the modal */}
            <img 
              src="https://img.youtube.com/vi/nLI1lgSZS0s/maxresdefault.jpg" 
              alt="Demo video thumbnail" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
            />
          </div>
        </div>

        {/* Heading on the right */}
        <div>
          <h2 className="text-3xl font-semibold mb-6">Watch this demo video</h2>
          <p className="text-white/60 max-w-lg mb-6">
            See Beets in action. Watch how AI-powered editing works seamlessly inside PowerPoint, giving you complete control over every change.
          </p>
          <button
            onClick={onOpenVideoModal}
            className="inline-flex items-center gap-2 bg-[#7A1E2D] hover:bg-[#9A2838] text-white px-6 py-2.5 rounded-md font-medium transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Play Demo
          </button>
        </div>
      </div>
    </section>
  );
}

