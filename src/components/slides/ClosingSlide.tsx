const findings = [
  {
    source: "Gartner · April 2025",
    quote: "The universal semantic layer has not yet been achieved by any organization or vendor.",
    context: "The semantic governance layer, what Gartner calls the 'contested' position between systems of record and systems of action, remains structurally unclaimed. The pressure is converging from BI platforms, data management vendors, and AI/ML platforms simultaneously. The organization that occupies this position in real estate establishes a compounding structural advantage.",
  },
  {
    source: "Gartner · June 2025",
    quote: "Over 40% of agentic AI projects will be cancelled by end of 2027.",
    context: "The cause is not model capability. It's data quality and weak operational foundations. AI pilots built on inconsistent entities and drifting metric definitions become wrong at scale, fast. The intelligence layer is not a downstream problem to solve after deployment. It is the precondition for deployment.",
  },
  {
    source: "McKinsey Global Institute · March 2026",
    quote: "$430–550B in annual value is addressable in real estate, construction, and development.",
    context: "None of that value is accessible without governed, traceable AI execution. The gap between what AI can theoretically deliver and what organizations can actually capture is not a model gap. It is a data infrastructure gap: entity resolution, semantic governance, context, and provenance at the asset level.",
  },
];

const ClosingSlide = () => (
  <section className="slide slide-dark" id="s13">
    <div className="slide-n" style={{ color: "rgba(255,255,255,0.5)" }}>xiii / What Comes Next</div>

    <h2 className="luna-h2" style={{ color: "#fff" }}>
      The architecture is defined.
      <br />
      <span style={{ color: "hsl(var(--pink-light))" }}>The window to own it is open.</span>
    </h2>

    <div style={{ display: "flex", flexDirection: "column", gap: "1px", marginTop: "2.5rem", maxWidth: 900 }}>
      {findings.map((f, i) => (
        <div key={i} style={{ background: "rgba(255,255,255,0.08)", borderLeft: "4px solid hsl(var(--pink-light))", padding: "1.8rem 2rem" }}>
          <div style={{ fontSize: "0.56rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "hsl(var(--pink-light))", marginBottom: "0.6rem", opacity: 0.8 }}>{f.source}</div>
          <div style={{ fontSize: "1.05rem", fontWeight: 600, color: "#fff", lineHeight: 1.4, marginBottom: "0.9rem", fontStyle: "italic" }}>
            "{f.quote}"
          </div>
          <div style={{ fontSize: "0.83rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>{f.context}</div>
        </div>
      ))}
    </div>

    <div style={{ marginTop: "2.5rem", maxWidth: 900, padding: "1.6rem 2rem", background: "hsl(var(--pink-light))", borderRadius: 3 }}>
      <div style={{ fontSize: "0.56rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "hsl(var(--pink))", marginBottom: "0.6rem" }}>The Strategic Position</div>
      <div style={{ fontSize: "0.95rem", color: "hsl(var(--foreground))", lineHeight: 1.65, fontWeight: 400 }}>
        The organization that owns the intelligence layer in real estate (entity resolution, semantic governance, the context graph) establishes a position that compounds with every data relationship, every market cycle, and every agent deployment. The layer is unclaimed. The architecture is proven. The question is when, not whether.
      </div>
    </div>

    <div style={{ marginTop: "2.5rem", fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)" }}>
      Cherre · The Intelligence Layer · 2026
    </div>
  </section>
);

export default ClosingSlide;
