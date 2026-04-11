const CoverSlide = () => (
  <section className="slide" id="s1" style={{ paddingTop: "12vh" }}>
    <div className="slide-n">Cherre · 2026</div>

    <h1 className="luna-h1">
      Systems record activities
      <br />
      without intent.
      <br />
      <span className="luna-accent">Agents need memory, not metrics, to act.</span>
    </h1>
    <p className="luna-sub">
      Metrics survive, but definitions drift. Decisions are logged, but their context disappears. Over time, systems accumulate activity without memory, and AI agents operating on this substrate inherit every gap.
    </p>

    {/* Theme anchor */}
    <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "1.5rem 0" }}>
      <div style={{ height: 1, background: "hsl(var(--pink))", width: 32, flexShrink: 0 }} />
      <div style={{ fontFamily: "var(--mono)", fontSize: "0.58rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "hsl(var(--pink))", fontWeight: 600 }}>
        Knowledge Graph-Powered Semantic Layer
      </div>
      <div style={{ height: 1, background: "hsl(var(--pink-border))", flex: 1 }} />
    </div>

    <div className="stat-row" style={{ marginTop: "1.5rem" }}>
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

    <div className="font-serif-luna" style={{ position: "absolute", right: "6vw", bottom: "8vh", fontSize: "clamp(5rem,14vw,13rem)", fontWeight: 600, color: "hsl(var(--pink-light))", lineHeight: 1, letterSpacing: "-0.04em", userSelect: "none", pointerEvents: "none", fontStyle: "italic" }}>
      2026
    </div>
  </section>
);

export default CoverSlide;
