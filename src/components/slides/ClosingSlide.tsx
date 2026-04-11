const findings = [
  {
    num: 1,
    source: "Gartner · June 2025",
    isQuote: true,
    headline: "Over 40% of agentic AI projects will be cancelled by end of 2027",
    body: "The problem is not a shortage of models. It is weak business value, inadequate risk controls, and brittle operational foundations. The layer between record and action is not a downstream enhancement. It is a precondition for deployment.",
  },
  {
    num: 2,
    source: "Salesforce · February 2026",
    isQuote: false,
    headline: "The bottleneck is shifting from model access to shared context",
    body: "Nearly all IT leaders say agent success depends on seamless integration across systems, yet only 27% of enterprise applications are integrated and 50% of AI agents already operate in silos.",
  },
  {
    num: 3,
    source: "DSAG · 2026",
    isQuote: false,
    headline: "The installed base is not automatically winning the next layer",
    body: "Among respondents already running AI use cases in production, 77% say they are using non-SAP solutions, versus 3% using SAP solutions. The race to own the intelligence layer is already underway.",
  },
  {
    num: 4,
    source: "McKinsey Global Institute · March 2026",
    isQuote: false,
    headline: "$430–550B in annual value across real estate, construction, and development",
    body: "That value comes from redesigning domains and embedding agents into core workflows — not from adding isolated copilots.",
  },
];

const footnotes = [
  "1. Gartner, "Gartner Predicts Over 40 Percent of Agentic AI Projects Will Be Canceled by End of 2027," June 25, 2025.",
  "2. Salesforce, "Salesforce Announces 2026 Connectivity Report," February 5, 2026.",
  "3. DSAG, "Investment Report 2026: Companies Are Investing More Selectively, AI Is Becoming Established, Cloud Computing Is Being Put to the Test," 2026.",
  "4. McKinsey, "How Agentic AI Can Reshape Real Estate's Operating Model," March 4, 2026.",
];

const ClosingSlide = () => (
  <section className="slide" id="s13" style={{ background: "#FBF1F2" }}>
    <div className="slide-n">xiii / What Comes Next</div>

    <h2 className="luna-h2">
      The control point is visible.
      <br />
      <span className="luna-accent">The ownership race has started.</span>
    </h2>

    {/* Four evidence cards */}
    <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginTop: "2rem", maxWidth: 900 }}>
      {findings.map((f) => (
        <div key={f.num} style={{ background: "#E2B0C2", borderLeft: "4px solid hsl(var(--pink))", padding: "1.2rem 1.8rem" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "0.4rem" }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: "0.70rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "hsl(var(--pink))" }}>
              {f.source}
            </div>
          </div>
          <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "hsl(var(--foreground))", lineHeight: 1.4, marginBottom: "0.5rem" }}>
            {f.isQuote ? <span>"{f.headline}"</span> : f.headline}
            <sup style={{ fontSize: "0.6em", color: "hsl(var(--pink))", fontWeight: 700, marginLeft: "1px" }}>{f.num}</sup>
          </div>
          <div style={{ fontSize: "0.82rem", color: "#4B1528", lineHeight: 1.7 }}>{f.body}</div>
        </div>
      ))}
    </div>

    {/* Strategic position */}
    <div style={{ marginTop: "2px", maxWidth: 900, padding: "1.2rem 1.8rem", background: "hsl(var(--foreground))" }}>
      <div style={{ fontFamily: "var(--mono)", fontSize: "0.70rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "0.5rem" }}>
        The strategic position
        <sup style={{ fontSize: "0.7em", color: "hsl(var(--pink-mid))", marginLeft: "1px" }}>1234</sup>
      </div>
      <div style={{ fontSize: "0.90rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: "0.8rem" }}>
        The record will remain in systems of record. The control point will not. The winner will be the platform that turns fragmented records into agent-ready context through entity resolution, governed meaning, traceable context, and orchestration. In real estate, that is the intelligence layer.
      </div>
      <div style={{ fontFamily: "var(--serif)", fontSize: "1.15rem", fontWeight: 600, fontStyle: "italic", color: "#fff", lineHeight: 1.45 }}>
        The record stays where it is. The power moves to the layer that makes it usable by agents.
      </div>
    </div>

    {/* Footnotes */}
    <div style={{ marginTop: "1.5rem", maxWidth: 900, display: "flex", flexDirection: "column", gap: "0.2rem" }}>
      {footnotes.map((fn, i) => (
        <div key={i} style={{ fontFamily: "var(--mono)", fontSize: "0.58rem", color: "hsl(var(--ink-light))", lineHeight: 1.5, letterSpacing: "0.04em" }}>{fn}</div>
      ))}
    </div>
  </section>
);

export default ClosingSlide;
