export default function Stats() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
      <div className="grid text-center grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-full text-sm">
        <div className="flex flex-col items-center text-center mx-auto max-w-[220px]">
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
  );
}

