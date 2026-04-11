const CoverSlide = () => (
  <section className="slide" id="s1" style={{ paddingTop: "12vh" }}>
    <div className="slide-n">Luna · The Intelligence Architecture · 2026</div>

    <h1 className="luna-h1">
      The Interaction
      <br />
      Layer Has <span className="luna-accent">Moved.</span>
    </h1>
    <p className="luna-sub">
      What happens to systems of record when agents become the primary user of enterprise data — and why the gap between the ERP and the agent is the most important position in real estate technology right now.
    </p>

    <div style={{ height: 1, background: "hsl(var(--rule))", maxWidth: 560, margin: "2.5rem 0" }} />

    <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
      {[
        { label: "Audience", value: "ERP & PropTech Leadership" },
        { label: "Horizon", value: "2026 — 2030" },
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
        { num: "⅔", label: "of enterprises worldwide have experimented with agents", source: "McKinsey, April 2026" },
        { num: "<10%", label: "have scaled them to deliver tangible value", source: "McKinsey, April 2026" },
        { num: "8/10", label: "companies cite data limitations as the primary blocker", source: "McKinsey, April 2026" },
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
