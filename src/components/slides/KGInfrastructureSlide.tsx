const pillars = [
  {
    label: "Entity Density Creates Moat",
    desc: "Every resolved entity, connected relationship, and corrected ambiguity makes the graph more accurate, and harder to replicate. The graph compounds: more data in means more precision out.",
  },
  {
    label: "Cross-Source Identity Is Irreplaceable",
    desc: "Knowing that an entity in System A, System B, and a third-party source are the same real-world object cannot be approximated by AI alone. It requires years of probabilistic matching, human feedback, and domain-specific training data.",
  },
  {
    label: "Graph-Native Reasoning",
    desc: "AI systems that traverse relationships in a knowledge graph produce qualitatively different answers than those limited to keyword or vector search. The graph enables multi-hop reasoning: why did this metric change, who is connected to this entity, what patterns preceded this outcome.",
  },
  {
    label: "The Graph Learns From Corrections",
    desc: "Each correction to an entity match or human override of a classification teaches the system, and creates a proprietary, compounding learning corpus. Corrections are more valuable than confirmations. The graph gets smarter with every exception.",
  },
];

const reasoningModels = [
  { label: "Causal", q: "Why did renewal rates drop?", desc: "Traverses graph links from the metric through operational events, PM transitions, and market conditions to surface the root factor." },
  { label: "Comparative", q: "How does Asset A compare to Asset B?", desc: "Normalizes metrics via the semantic layer and aligns entity dimensions before comparing. Apples to apples." },
  { label: "Predictive", q: "Which assets are likely at risk?", desc: "Detects context graph patterns that preceded prior defaults or underperformance and scores current exposure." },
  { label: "Diagnostic", q: "Why is this metric inconsistent?", desc: "Traces data lineage through semantic definitions and isolates where meaning diverges across sources or periods." },
];

const KGInfrastructureSlide = () => (
  <section className="slide slide-alt" id="s8">
    <div className="slide-n">viii / Infrastructure, Not a Feature</div>
    <h2 className="luna-h2">
      The knowledge graph is infrastructure,
      <br />
      <span className="luna-accent">not a feature.</span>
    </h2>
    <p className="luna-sub" style={{ marginBottom: 0 }}>
      Solutions that build this layer gain a structural advantage that compounds over time. The graph doesn't just store data. It accumulates understanding.
    </p>

    {/* Style B: Gartner section title as full-bleed banner */}
    <div style={{ background: "hsl(var(--pink))", padding: "1.8rem 2rem", marginTop: "2rem", maxWidth: 960 }}>
      <div style={{ fontFamily: "var(--mono)", fontSize: "0.52rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "0.7rem" }}>
        Gartner, G00826629 — section heading, p. 6 and pp. 21–22
      </div>
      <p style={{ fontFamily: "var(--serif)", fontSize: "1.45rem", fontWeight: 600, color: "#fff", lineHeight: 1.35, margin: "0 0 0.9rem" }}>
        "The Future of Semantic Layers: Metrics Layers Powered by Knowledge Graph"
      </p>
      <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.78)", lineHeight: 1.7, margin: "0 0 0.5rem", maxWidth: 760 }}>
        Gartner identifies knowledge graphs as the foundation for the future of semantic layers, citing four specific advantages over linear architectures: enhanced contextual understanding, improved data integration across disparate sources, scalability and AI explainability, and relationship inference possibilities not available from typical linear data relationships.
      </p>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "0.8rem", marginTop: "0.3rem" }}>
        <span style={{ fontFamily: "var(--mono)", fontSize: "0.52rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>Gartner also notes: </span>
        <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.65)" }}>
          "the value proposition of knowledge graphs remains unrealized" for most vendors, due to implementation complexity and investment requirements. Cherre has spent ten years solving exactly that problem — in real estate.
        </span>
      </div>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "hsl(var(--pink-border))", border: "1px solid hsl(var(--pink-border))", marginTop: "1.5px", maxWidth: 960 }}>
      {pillars.map((p, i) => (
        <div key={i} style={{ background: "hsl(var(--pink-light))", padding: "1.8rem 2rem", borderTop: "3px solid hsl(var(--pink))" }}>
          <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "hsl(var(--pink))", marginBottom: "0.7rem" }}>{p.label}</div>
          <div style={{ fontSize: "0.83rem", color: "hsl(var(--foreground))", lineHeight: 1.7 }}>{p.desc}</div>
        </div>
      ))}
    </div>

    {/* Reasoning models */}
    <div style={{ marginTop: "2.5rem", maxWidth: 960 }}>
      <div style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "hsl(var(--ink-light))", marginBottom: "1rem" }}>Reasoning Models: How knowledge becomes action</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "1px", background: "hsl(var(--pink-border))", border: "1px solid hsl(var(--pink-border))" }}>
        {reasoningModels.map((r, i) => (
          <div key={i} style={{ background: "#fff", padding: "1.4rem 1.5rem", borderTop: "3px solid hsl(var(--pink))" }}>
            <div style={{ fontSize: "1rem", fontWeight: 600, color: "hsl(var(--pink))", marginBottom: "0.3rem" }}>{r.label}</div>
            <div style={{ fontSize: "0.74rem", fontStyle: "italic", color: "hsl(var(--accent))", marginBottom: "0.7rem" }}>{r.q}</div>
            <div style={{ fontSize: "0.78rem", color: "hsl(var(--foreground))", lineHeight: 1.6 }}>{r.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default KGInfrastructureSlide;
