export default function Blogs() {
  const blogPosts = [
    {
      part: "Part 1",
      title: "Cursor for PPT: MCP Server",
      description: "How component-based AI and MCP can automate PowerPoint creation while preserving design consistency, data accuracy, and human control.",
      url: "https://medium.com/@thenarcissistcoder/cursor-for-ppt-mcp-server-7013e6df92f6",
      tag: "Architecture & Design"
    },
    {
      part: "Part 2",
      title: "Building the Product",
      description: "From concept to reality—introducing a chat-based PPT add-in, MCP-powered open-source LLM stack, and streaming orchestration layer.",
      url: "https://medium.com/@thenarcissistcoder/cursor-for-ppt-part-two-4a029ababf7c",
      tag: "Product & Engineering"
    },
    {
      part: "Part 3",
      title: "The Existential Crisis",
      description: "Editing existing slides—sending PPTs as base64, manipulating shapes via MCP tools, and solving real consultant pain points.",
      url: "https://medium.com/@thenarcissistcoder/cursor-for-powerpoint-the-existential-crisis-d504d2139f52",
      tag: "Real-World Implementation"
    }
  ];

  return (
    <section id="blogs" className="border-t border-white/5 max-w-7xl mx-auto px-6 py-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-4">Deep Dives & Case Studies</h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          Explore the engineering and philosophy behind Beets—from MCP architecture to real-world consultant workflows.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((blog, index) => (
          <a
            key={index}
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-black/20 border border-white/10 rounded-xl p-6 hover:border-[#7A1E2D]/50 hover:bg-black/30 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-xs text-[#7A1E2D] font-mono">{blog.part}</span>
              <svg className="w-4 h-4 text-white/40 group-hover:text-white/70 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3 group-hover:text-[#7A1E2D] transition-colors">
              {blog.title}
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              {blog.description}
            </p>
            <div className="mt-6 pt-4 border-t border-white/5">
              <span className="text-xs text-white/40">{blog.tag}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

