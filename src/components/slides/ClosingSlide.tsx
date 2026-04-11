const findings = [
  {
    source: "Gartner · June 2025",
    isQuote: true,
    statement: "Over 40% of agentic AI projects will be cancelled by end of 2027",
    context: "The cause is not model capability. It's data quality and weak operational foundations. AI pilots built on inconsistent entities and drifting metric definitions become wrong at scale, fast. The intelligence layer is not a downstream problem to solve after deployment. It is the precondition for deployment.",
  },
  {
    source: "Gartner · April 2025",
    isQuote: false,
    statement: "Demand for semantic governance is converging on a single open position in the stack — from BI platforms, data management vendors, and AI providers simultaneously",
    context: "The solution that occupies this position first, with governed entity resolution, versioned metric definitions, and traceable context, establishes a structural advantage that compounds with every data relationship and every agent deployment.",
  },
  {
    source: "McKinsey Global Institute · March 2026",
    isQuote: false,
    statement: "$430–550B in annual value is addressable in real estate, construction, and development",
    context: "None of that value is accessible without governed, traceable AI execution. The gap between what AI can theoretically deliver and what solutions can actually capture is not a model gap. It is a data infrastructure gap: entity resolution, semantic governance, context, and provenance at the asset level.",
  },
];

const ClosingSlide = () => (
  <section className="slide" id="s13" style={{ background: "#FBF1F2" }}>
    <div className="slide-n">xiii / What Comes Next</div>

    <h2 className="luna-h2">
      The architecture is defined.
      <br />
      <span className="luna-accent">The window to own it is open.</span>
    </h2>

    <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginTop: "2.5rem", maxWidth: 900 }}>
      {findings.map((f, i) => (
        <div key={i} style={{
          background: "#E2B0C2",
          borderLeft: "4px solid hsl(var(--pink))",
          padding: "1.6rem 2rem",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.6rem" }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: "0.56rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "hsl(var(--pink))" }}>{f.source}</div>
  
          </div>
          <div style={{ fontSize: "1rem", fontWeight: 600, color: "hsl(var(--foreground))", lineHeight: 1.45, marginBottom: "0.8rem", fontStyle: f.isQuote ? "italic" : "normal" }}>
            {f.isQuote ? `"${f.statement}"` : f.statement}
          </div>
          <div style={{ fontSize: "0.82rem", color: "hsl(var(--ink-mid))", lineHeight: 1.7 }}>{f.context}</div>
        </div>
      ))}
    </div>

    <div style={{ marginTop: "2px", maxWidth: 900, padding: "1.4rem 2rem", background: "hsl(var(--pink))", borderLeft: "4px solid hsl(var(--pink))" }}>
      <div style={{ fontFamily: "var(--mono)", fontSize: "0.56rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "0.5rem" }}>The Strategic Position</div>
      <div style={{ fontSize: "0.93rem", color: "#fff", lineHeight: 1.65 }}>
        The solution that owns the intelligence layer in real estate (entity resolution, semantic governance, the context graph) establishes a position that compounds with every data relationship, every market cycle, and every agent deployment. The architecture is proven. The question is when, not whether.
      </div>
    </div>

  </section>
);

export default ClosingSlide;
