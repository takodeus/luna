const layers = [
  {
    mode: "Mode 3",
    modeSub: "Built to Act",
    modeColor: "hsl(var(--pink))",
    rows: [
      { label: "Systems of action", sub: "Autonomous agents — agentic AI delivering decisions and execution", fill: "hsl(var(--pink))", text: "#fff", subText: "rgba(255,255,255,0.65)", height: 56 },
    ],
  },
  {
    mode: null,
    modeSub: null,
    modeColor: null,
    rows: [
      { label: "Semantic governance layer", sub: "LUNA · MERIDIAN · ATLAS — entity resolution, knowledge graph, orchestration", fill: "none", dashed: true, text: "hsl(var(--pink))", subText: "hsl(var(--pink-mid))", height: 60 },
    ],
  },
  {
    mode: "Mode 2",
    modeSub: "Built to Change",
    modeColor: "#4A3888",
    rows: [
      { label: "Systems of innovation", sub: "Intelligence & adaptation — analytics, ML pipelines, copilot interfaces", fill: "#4A3888", text: "#fff", subText: "rgba(255,255,255,0.6)", height: 50 },
      { label: "Systems of differentiation", sub: "Orchestration & plural ontologies — domain models, governed definitions", fill: "#2E2460", text: "#fff", subText: "rgba(255,255,255,0.6)", height: 50 },
    ],
  },
  {
    mode: "Mode 1",
    modeSub: "Built to Last",
    modeColor: "hsl(var(--foreground))",
    rows: [
      { label: "Systems of record", sub: "Provenance & trust — operational data, transaction ledgers, source systems", fill: "hsl(var(--foreground))", text: "#fff", subText: "rgba(255,255,255,0.45)", height: 50 },
    ],
  },
];

const StackSlide = () => (
  <section className="slide" id="s11">
    <div className="slide-n">xi — The Empty Layer</div>
    <h2 className="luna-h2">
      Rethinking Gartner's bi-modal pace layered strategy.
      <br />
      <span className="luna-accent">Tri-modal. Built to act.</span>
    </h2>
    <p className="luna-sub" style={{ marginBottom: 0 }}>
      "The universal semantic layer has not yet been achieved by any organization or vendor." — Gartner, April 2025 (G00826629). The position between systems of record and systems of action remains open.
    </p>

    <div style={{ display: "flex", gap: 0, marginTop: "2rem", maxWidth: 920, flexDirection: "column" }}>
      {layers.map((group, gi) => (
        <div key={gi} style={{ display: "flex", gap: 0, marginBottom: group.rows[0]?.dashed ? 0 : "2px" }}>
          {/* Mode label column */}
          <div style={{
            width: 88,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "0.15rem",
            background: group.modeColor ? `${group.modeColor}12` : "transparent",
            borderLeft: group.modeColor ? `3px solid ${group.modeColor}40` : "3px solid transparent",
            padding: "0.4rem 0",
          }}>
            {group.mode && (
              <>
                <span style={{ fontFamily: "var(--mono)", fontSize: "0.56rem", letterSpacing: "0.14em", textTransform: "uppercase", color: group.modeColor!, fontWeight: 600 }}>{group.mode}</span>
                <span style={{ fontFamily: "var(--mono)", fontSize: "0.48rem", letterSpacing: "0.1em", color: group.modeColor!, opacity: 0.65 }}>{group.modeSub}</span>
              </>
            )}
          </div>

          {/* Row bars */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2px" }}>
            {group.rows.map((row, ri) => (
              <div key={ri} style={{
                height: row.height,
                background: row.dashed ? "hsl(var(--pink-light))" : row.fill,
                border: row.dashed ? "2px dashed #D4537E" : "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "0 1.4rem",
                gap: "0.2rem",
              }}>
                <span style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: row.text }}>{row.label}</span>
                <span style={{ fontSize: "0.75rem", color: row.subText, lineHeight: 1.4 }}>{row.sub}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    <p className="font-mono-luna" style={{ fontSize: "0.58rem", letterSpacing: "0.1em", color: "hsl(var(--ink-light))", marginTop: "1.5rem", maxWidth: 920 }}>
      SOURCE: Gartner, Christopher Long, "Rethink Semantic Layers to Support the Future of Analytics and AI," April 2025 (G00826629). Adapted from Gartner's Bi-Modal Pace Layered Strategy — extended to tri-modal with Mode 3 (Built to Act). Gartner does not endorse any vendor, product or service depicted.
    </p>
  </section>
);

export default StackSlide;
