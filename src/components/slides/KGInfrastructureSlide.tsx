const pillars = [
  {
    label: "Entity Density Creates Moat",
    color: "hsl(var(--pink))",
    bg: "hsl(var(--pink-light))",
    border: "hsl(var(--pink-border))",
    desc: "Every resolved entity, connected relationship, and corrected ambiguity makes the graph more accurate — and harder to replicate. The graph compounds: more data in means more precision out.",
  },
  {
    label: "Cross-Source Identity Is Irreplaceable",
    color: "hsl(var(--blue))",
    bg: "#f0f4fb",
    border: "#b5d4f4",
    desc: "Knowing that an entity in System A, System B, and a third-party source are the same real-world object cannot be approximated by AI alone. It requires years of probabilistic matching, human feedback, and domain-specific training data.",
  },
  {
    label: "Graph-Native Reasoning",
    color: "hsl(var(--green))",
    bg: "#f0f7f3",
    border: "#9FE1CB",
    desc: "AI systems that traverse relationships in a knowledge graph produce qualitatively different answers than those limited to keyword or vector search. The graph enables multi-hop reasoning: why did this metric change, who is connected to this entity, what patterns preceded this outcome.",
  },
  {
    label: "The Graph Learns From Corrections",
    color: "hsl(var(--amber))",
    bg: "#fef9ef",
    border: "#FAC775",
    desc: "Each correction to an entity match or human override of a classification teaches the system — and creates a proprietary, compounding learning corpus. Corrections are more valuable than confirmations. The graph gets smarter with every exception.",
  },
];

const reasoningModels = [
  { label: "Causal", q: "Why did renewal rates drop?", desc: "Traverses graph links from the metric through operational events, PM transitions, and market conditions to surface the root factor.", color: "#534AB7" },
  { label: "Comparative", q: "How does Asset A compare to Asset B?", desc: "Normalizes metrics via the semantic layer and aligns entity dimensions before comparing — apples to apples.", color: "hsl(var(--blue))" },
  { label: "Predictive", q: "Which assets are likely at risk?", desc: "Detects context graph patterns that preceded prior defaults or underperformance and scores current exposure.", color: "hsl(var(--green))" },
  { label: "Diagnostic", q: "Why is this metric inconsistent?", desc: "Traces data lineage through semantic definitions and isolates where meaning diverges across sources or periods.", color: "hsl(var(--amber))" },
];

const KGInfrastructureSlide = () => (
  <section className="slide slide-alt" id="s8">
    <div className="slide-n">viii — Knowledge Graph</div>
    <h2 className="luna-h2">
      The knowledge graph is infrastructure,
      <br />
      <span className="luna-accent">not a feature.</span>
    </h2>
    <p className="luna-sub" style={{ marginBottom: 0 }}>
      Organizations that build this layer gain a structural advantage that compounds over time. The graph doesn't just store data — it accumulates understanding.
    </p>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5px", background: "hsl(var(--rule))", border: "1px solid hsl(var(--rule))", marginTop: "2rem", maxWidth: 960 }}>
      {pillars.map((p, i) => (
        <div key={i} style={{ background: p.bg, padding: "1.8rem 2rem", borderTop: `3px solid ${p.color}` }}>
          <div style={{ fontSize: "0.9rem", fontWeight: 700, color: p.color, marginBottom: "0.7rem" }}>{p.label}</div>
          <div style={{ fontSize: "0.83rem", color: "hsl(var(--ink-mid))", lineHeight: 1.7 }}>{p.desc}</div>
        </div>
      ))}
    </div>

    {/* Reasoning models */}
    <div style={{ marginTop: "2.5rem", maxWidth: 960 }}>
      <div className="font-mono-luna" style={{ fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "hsl(var(--ink-light))", marginBottom: "1rem" }}>Reasoning Models — How knowledge becomes action</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "1.5px", background: "hsl(var(--rule))", border: "1px solid hsl(var(--rule))" }}>
        {reasoningModels.map((r, i) => (
          <div key={i} style={{ background: "#fff", padding: "1.4rem 1.5rem", borderTop: `3px solid ${r.color}` }}>
            <div style={{ fontSize: "1rem", fontWeight: 700, color: r.color, marginBottom: "0.3rem" }}>{r.label}</div>
            <div style={{ fontSize: "0.74rem", fontStyle: "italic", color: r.color, opacity: 0.8, marginBottom: "0.7rem" }}>{r.q}</div>
            <div style={{ fontSize: "0.78rem", color: "hsl(var(--ink-mid))", lineHeight: 1.6 }}>{r.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default KGInfrastructureSlide;
