type SingleTile = {
  kind: "single"; stat: string; warning: string; color: string; sup: number; body: string; source: string;
};
type SplitTile = {
  kind: "split"; warning: string; color: string; sup: number;
  left: { stat: string; label: string }; right: { stat: string; label: string };
  body: string; source: string;
};
type Tile = SingleTile | SplitTile;

const tiles: Tile[] = [
  {
    kind: "single",
    stat: "40%+",
    warning: "canceled",
    color: "hsl(var(--pink))",
    sup: 1,
    body: "of agentic AI projects are projected to be canceled by end-2027, driven by escalating costs, unclear business value, and inadequate risk controls.",
    source: "Gartner · June 2025",
  },
  {
    kind: "single",
    stat: "96%",
    warning: "say integration is decisive",
    color: "hsl(var(--blue))",
    sup: 2,
    body: "of IT leaders say AI agent success depends on seamless data integration across all systems.",
    source: "Salesforce · Feb 2026",
  },
  {
    kind: "split",
    warning: "Integration is failing as agents proliferate",
    color: "hsl(var(--amber))",
    sup: 2,
    left:  { stat: "27%", label: "of enterprise apps are integrated" },
    right: { stat: "50%", label: "of AI agents already operate in silos" },
    body: "Two independent findings from the same report — low integration and high fragmentation — compounding in the same environment.",
    source: "Salesforce · Feb 2026",
  },
  {
    kind: "split",
    warning: "Productive AI already running outside SAP",
    color: "hsl(var(--green))",
    sup: 3,
    left:  { stat: "77%", label: "using non-SAP solutions" },
    right: { stat: "3%",  label: "using SAP's own AI tools" },
    body: "Among DSAG respondents already running AI productively in production.",
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

    <h1 className="luna-h1" style={{ maxWidth: 620 }}>
      Data Debt Is the New Tech Debt.
    </h1>

    <p style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.05rem, 1.8vw, 1.3rem)", fontWeight: 500, fontStyle: "italic", color: "hsl(var(--foreground))", lineHeight: 1.5, maxWidth: 560, margin: "0.8rem 0 1.2rem" }}>
      The dashboard consumed the last era of enterprise data. The agent will consume the next.
    </p>

    <p style={{ fontSize: "0.87rem", color: "hsl(var(--ink-mid))", lineHeight: 1.8, maxWidth: 620, margin: "0 0 1.8rem" }}>
      Systems of record and workflow platforms were built to capture transactions, enforce process, and organize human work. The next buyer requirement is different: those same records must now be usable by agents. The constraint is no longer only code. It is whether enterprise data carries enough <strong style={{ color: "hsl(var(--foreground))" }}>shared meaning, traceable context, and integration</strong> to support action.
    </p>

    {/* 4 tiles — 2×2 grid */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", background: "hsl(var(--pink-border))", border: "1px solid hsl(var(--pink-border))", maxWidth: 800 }}>
      {tiles.map((tile, i) => (
        <div key={i} style={{ background: "#fff", padding: "1.4rem 1.6rem", borderTop: `3px solid ${tile.color}` }}>
          {tile.kind === "single" ? (
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.35rem", marginBottom: "0.55rem", flexWrap: "wrap" }}>
              <span style={{ fontSize: "1.65rem", fontWeight: 700, color: tile.color, letterSpacing: "-0.02em", lineHeight: 1 }}>{tile.stat}</span>
              <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "hsl(var(--foreground))", lineHeight: 1.3 }}>{tile.warning}</span>
              <sup style={{ fontSize: "0.6em", color: tile.color, fontWeight: 700, marginLeft: "1px" }}>{tile.sup}</sup>
            </div>
          ) : (
            <>
              <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "hsl(var(--foreground))", lineHeight: 1.3, marginBottom: "0.8rem" }}>
                {tile.warning}<sup style={{ fontSize: "0.6em", color: tile.color, fontWeight: 700, marginLeft: "1px" }}>{tile.sup}</sup>
              </div>
              <div style={{ display: "flex", gap: "0", marginBottom: "0.7rem" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "1.65rem", fontWeight: 700, color: tile.color, letterSpacing: "-0.02em", lineHeight: 1, marginBottom: "0.2rem" }}>{tile.left.stat}</div>
                  <div style={{ fontSize: "0.74rem", color: "hsl(var(--ink-mid))", lineHeight: 1.4 }}>{tile.left.label}</div>
                </div>
                <div style={{ width: "1px", background: "hsl(var(--pink-border))", margin: "0 0.9rem", flexShrink: 0, alignSelf: "stretch" }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "1.65rem", fontWeight: 700, color: tile.color, letterSpacing: "-0.02em", lineHeight: 1, marginBottom: "0.2rem" }}>{tile.right.stat}</div>
                  <div style={{ fontSize: "0.74rem", color: "hsl(var(--ink-mid))", lineHeight: 1.4 }}>{tile.right.label}</div>
                </div>
              </div>
            </>
          )}
          <p style={{ fontSize: "0.79rem", color: "hsl(var(--ink-mid))", lineHeight: 1.65, margin: "0 0 0.5rem" }}>{tile.body}</p>
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
  </section>
);

export default CoverSlide;
