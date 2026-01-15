export default function Features() {
  return (
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
  );
}

