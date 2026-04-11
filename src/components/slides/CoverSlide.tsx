const CoverSlide = () => (
  <section className="slide" id="s1" style={{ paddingTop: "10vh" }}>
    <div className="slide-n">Cherre · 2026</div>

    <h1 className="luna-h1">
      Tech Debt Is Now Data Debt.
    </h1>

    <p style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.05rem, 1.8vw, 1.35rem)", fontWeight: 500, color: "hsl(var(--foreground))", lineHeight: 1.5, maxWidth: 680, margin: "1rem 0 1.6rem" }}>
      Systems of record and workflow platforms were built to capture transactions, enforce process, and organize human work. The next buyer requirement is different: those same records must now be usable by agents.
    </p>

    <div style={{ height: 1, background: "hsl(var(--rule))", maxWidth: 680, margin: "0 0 1.8rem" }} />

    <p style={{ fontSize: "0.95rem", color: "hsl(var(--ink-mid))", lineHeight: 1.8, maxWidth: 680, margin: "0 0 1.8rem" }}>
      For customers of systems of record and workflow platforms, the issue is no longer only whether a platform can capture transactions, enforce process, or power reporting. It is whether the record those systems accumulate can be used by an agent to interpret, decide, and act. That requires more than transactional integrity. It requires a <strong style={{ color: "hsl(var(--foreground))" }}>knowledge graph-powered semantic layer</strong> that preserves meaning, carries context, connects data across systems, and makes automation trustworthy enough to scale. In that shift, systems of record do not disappear. But without that layer above them, they risk becoming <strong style={{ color: "hsl(var(--foreground))" }}>systems of delay</strong>.
    </p>

    {/* Theme anchor */}
    <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "0 0 1.8rem" }}>
      <div style={{ height: 1, background: "hsl(var(--pink))", width: 32, flexShrink: 0 }} />
      <div style={{ fontFamily: "var(--mono)", fontSize: "0.70rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "hsl(var(--pink))", fontWeight: 600 }}>
        Knowledge Graph-Powered Semantic Layer
      </div>
      <div style={{ height: 1, background: "hsl(var(--pink-border))", flex: 1 }} />
    </div>

    <div className="stat-row">
      {[
        { num: "40%+", label: "of agentic AI projects will be cancelled by 2027, due to data quality, not model quality", source: "Gartner, June 2025" },
        { num: "$430–550B", label: "annual value at stake in real estate, construction, and development, all of it requiring governed, traceable AI", source: "McKinsey Global Institute, March 2026" },
        { num: "$3.7T", label: "AUM powered by Cherre's intelligence layer across institutional funds and operators globally", source: "Cherre, 2026" },
      ].map((stat, i) => (
        <div className="stat-cell" key={i}>
          <div className="stat-num">{stat.num}</div>
          <div className="stat-label">{stat.label}</div>
          <div className="stat-source">{stat.source}</div>
        </div>
      ))}
    </div>

    <div className="font-serif-luna" style={{ position: "absolute", right: "6vw", bottom: "6vh", fontSize: "clamp(4rem,12vw,11rem)", fontWeight: 600, color: "hsl(var(--pink-light))", lineHeight: 1, letterSpacing: "-0.04em", userSelect: "none", pointerEvents: "none", fontStyle: "italic" }}>
      2026
    </div>
  </section>
);

export default CoverSlide;
