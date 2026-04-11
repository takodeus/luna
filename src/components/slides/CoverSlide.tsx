const tiles = [
  {
    stat: "40%+",
    color: "hsl(var(--pink))",
    sup: 1,
    body: "of agentic AI projects are projected to be canceled by end-2027, driven by escalating costs, unclear business value, and inadequate risk controls.",
    source: "Gartner · June 2025",
  },
  {
    stat: "96%",
    color: "hsl(var(--blue))",
    sup: 2,
    body: "of IT leaders say AI agent success depends on seamless data integration across all systems.",
    source: "Salesforce · Feb 2026",
  },
  {
    stat: "27% / 50%",
    color: "hsl(var(--amber))",
    sup: 2,
    body: "Only 27% of enterprise applications are integrated, while 50% of AI agents already operate in silos.",
    source: "Salesforce · Feb 2026",
  },
  {
    stat: "77% / 3%",
    color: "hsl(var(--green))",
    sup: 3,
    body: "Among DSAG respondents already using AI productively, 77% run those use cases on non-SAP solutions, versus 3% on SAP's own AI tools.",
    source: "DSAG · 2026",
  },
];

const footnotes = [
  '1. Gartner, "Gartner Predicts Over 40 Percent of Agentic AI Projects Will Be Canceled by End of 2027," June 25, 2025.',
  '2. Salesforce, "Salesforce Announces 2026 Connectivity Report," February 5, 2026.',
  '3. DSAG, "Investment Report 2026: Companies Are Investing More Selectively, AI Is Becoming Established, Cloud Computing Is Being Put to the Test," 2026.',
];

const CoverSlide = () => (
  <section className="slide" id="s1" style={{ paddingTop: "8vh" }}>
    <div className="slide-n">Cherre · 2026</div>

    <h1 className="luna-h1">
      Data Debt Is the New Tech Debt.
    </h1>

    <p style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.05rem, 1.8vw, 1.3rem)", fontWeight: 500, fontStyle: "italic", color: "hsl(var(--foreground))", lineHeight: 1.5, maxWidth: 680, margin: "0.8rem 0 1.2rem" }}>
      The dashboard consumed the last era of enterprise data. The agent will consume the next.
    </p>

    <p style={{ fontSize: "0.87rem", color: "hsl(var(--ink-mid))", lineHeight: 1.8, maxWidth: 680, margin: "0 0 1.4rem" }}>
      Systems of record and workflow platforms were built to capture transactions, enforce process, and organize human work. The next buyer requirement is different: those same records must now be usable by agents. The constraint is no longer only code. It is whether enterprise data carries enough <strong style={{ color: "hsl(var(--foreground))" }}>shared meaning, traceable context, and integration</strong> to support action.
    </p>

    {/* Theme anchor */}
    <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "0 0 1.6rem" }}>
      <div style={{ height: 1, background: "hsl(var(--pink))", width: 32, flexShrink: 0 }} />
      <div style={{ fontFamily: "var(--mono)", fontSize: "0.70rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "hsl(var(--pink))", fontWeight: 600 }}>
        Knowledge Graph-Powered Semantic Layer
      </div>
      <div style={{ height: 1, background: "hsl(var(--pink-border))", flex: 1 }} />
    </div>

    {/* 4 tiles — 2×2 grid */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", background: "hsl(var(--pink-border))", border: "1px solid hsl(var(--pink-border))", maxWidth: 800 }}>
      {tiles.map((tile, i) => (
        <div key={i} style={{ background: "#fff", padding: "1.4rem 1.6rem", borderTop: `3px solid ${tile.color}` }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "0.2rem", marginBottom: "0.5rem" }}>
            <span style={{ fontSize: "1.9rem", fontWeight: 700, color: tile.color, letterSpacing: "-0.02em", lineHeight: 1 }}>{tile.stat}</span>
            <sup style={{ fontSize: "0.65rem", color: tile.color, fontWeight: 700 }}>{tile.sup}</sup>
          </div>
          <p style={{ fontSize: "0.80rem", color: "hsl(var(--foreground))", lineHeight: 1.65, margin: "0 0 0.5rem" }}>{tile.body}</p>
          <div style={{ fontFamily: "var(--mono)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "hsl(var(--ink-light))" }}>{tile.source}</div>
        </div>
      ))}
    </div>

    {/* Footnotes */}
    <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.15rem", maxWidth: 800 }}>
      {footnotes.map((fn, i) => (
        <div key={i} style={{ fontFamily: "var(--mono)", fontSize: "0.58rem", color: "hsl(var(--ink-light))", letterSpacing: "0.04em", lineHeight: 1.5 }}>{fn}</div>
      ))}
    </div>

    <div className="font-serif-luna" style={{ position: "absolute", right: "6vw", bottom: "6vh", fontSize: "clamp(4rem,10vw,9rem)", fontWeight: 600, color: "hsl(var(--pink-light))", lineHeight: 1, letterSpacing: "-0.04em", userSelect: "none", pointerEvents: "none", fontStyle: "italic" }}>
      2026
    </div>
  </section>
);

export default CoverSlide;
