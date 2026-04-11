const CoverSlide = () => (
  <section className="slide" id="s1" style={{ paddingTop: "12vh" }}>
    <div className="slide-n">Cherre · For Yardi · 2026</div>

    <h1 className="luna-h1">
      Virtuoso is live.
      <br />
      The substrate it needs <span className="luna-accent">isn't.</span>
    </h1>
    <p className="luna-sub">
      Yardi has built the AI interface. What it doesn't yet have is the knowledge infrastructure that makes that interface trustworthy at scale — governed definitions, resolved entities, traceable decisions. That layer is what Cherre has spent ten years building.
    </p>

    <div style={{ height: 1, background: "hsl(var(--rule))", maxWidth: 560, margin: "2.5rem 0" }} />

    <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
      {[
        { label: "Audience", value: "Yardi Leadership" },
        { label: "Subject", value: "Acquisition · Partnership" },
        { label: "Context", value: "Real Estate & Capital Markets" },
      ].map((item) => (
        <div key={item.label}>
          <div className="font-mono-luna" style={{ fontSize: "0.58rem", color: "hsl(var(--pink))", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "0.3rem" }}>
            {item.label}
          </div>
          <div style={{ fontSize: "0.9rem", fontWeight: 500 }}>{item.value}</div>
        </div>
      ))}
    </div>

    <div className="stat-row" style={{ marginTop: "3.5rem" }}>
      {[
        { num: "40%+", label: "of agentic AI projects will be cancelled by 2027 — due to data quality, not model quality", source: "Gartner, June 2025" },
        { num: "10 yrs", label: "Cherre's head start building the real estate knowledge graph and entity resolution engine", source: "Cherre, 2026" },
        { num: "$3.7T", label: "AUM currently powered by Cherre's intelligence layer across funds and operators", source: "Cherre, 2026" },
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
