const CoverSlide = () => (
  <section className="slide" id="s1" style={{ paddingTop: "12vh" }}>
    <div className="slide-n">Cherre · 2026</div>

    <h1 className="luna-h1">
      Systems record outcomes.
      <br />
      The meaning is <span className="luna-accent">lost.</span>
    </h1>
    <p className="luna-sub">
      Metrics survive, but definitions drift. Decisions are logged, but their context disappears. Over time, organizations accumulate activity without memory, and AI agents operating on this substrate inherit every gap.
    </p>

    <div style={{ height: 1, background: "hsl(var(--rule))", maxWidth: 560, margin: "2.5rem 0" }} />

    <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
      {[
        { label: "Industry", value: "Real Estate & Capital Markets" },
        { label: "Topic", value: "The Intelligence Layer" },
        { label: "Published", value: "Cherre · 2026" },
      ].map((item) => (
        <div key={item.label}>
          <div style={{ fontSize: "0.58rem", fontWeight: 600, color: "hsl(var(--pink))", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "0.3rem" }}>
            {item.label}
          </div>
          <div style={{ fontSize: "0.9rem", fontWeight: 500 }}>{item.value}</div>
        </div>
      ))}
    </div>

    <div className="stat-row" style={{ marginTop: "3.5rem" }}>
      {[
        { num: "40%+", label: "of agentic AI projects will be cancelled by 2027 due to data quality, not model quality", source: "Gartner, June 2025" },
        { num: "$430–550B", label: "annual value at stake in real estate, construction, and development, all requiring governed, traceable AI", source: "McKinsey Global Institute, March 2026" },
        { num: "$3.7T", label: "AUM powered by Cherre's intelligence layer across institutional funds and operators globally", source: "Cherre, 2026" },
      ].map((stat, i) => (
        <div className="stat-cell" key={i}>
          <div className="stat-num">{stat.num}</div>
          <div className="stat-label">{stat.label}</div>
          <div className="stat-source">{stat.source}</div>
        </div>
      ))}
    </div>

    <div style={{ position: "absolute", right: "6vw", bottom: "8vh", fontSize: "clamp(5rem,14vw,13rem)", fontWeight: 600, color: "hsl(var(--pink-light))", lineHeight: 1, letterSpacing: "-0.04em", userSelect: "none", pointerEvents: "none", fontStyle: "italic" }}>
      2026
    </div>
  </section>
);

export default CoverSlide;
