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
  <section className="slide" id="s9">
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
    <div style={{ background: "#A8185E", padding: "1.8rem 2rem", marginTop: "2rem", maxWidth: 960 }}>
      <div style={{ fontFamily: "var(--mono)", fontSize: "0.64rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "0.7rem" }}>
        Gartner, April 2025 · section heading
      </div>
      <p style={{ fontFamily: "var(--serif)", fontSize: "1.45rem", fontWeight: 600, color: "#fff", lineHeight: 1.35, margin: "0 0 0.9rem" }}>
        "The Future of Semantic Layers: Metrics Layers Powered by Knowledge Graph"
      </p>
      <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.78)", lineHeight: 1.7, margin: "0 0 0.5rem", maxWidth: 760 }}>
        Knowledge graphs provide four structural advantages over linear architectures: enhanced contextual understanding of data relationships, improved integration across disparate sources, scalability with built-in AI explainability, and relationship inference that is structurally unavailable from linear data connections.
      </p>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "0.8rem", marginTop: "0.3rem" }}>
        <span style={{ fontFamily: "var(--mono)", fontSize: "0.64rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>The industry finding: </span>
        <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.65)" }}>
          For most vendors, the value proposition of knowledge graphs remains unrealized due to implementation complexity and the investment required to build at scale. Cherre has spent ten years solving exactly that problem, in real estate.
        </span>
      </div>
    </div>

    {/* Unified hub-and-spoke diagram */}
    <div style={{ marginTop: "1.5px", maxWidth: 960, background: "#fff", border: "1px solid hsl(var(--pink) / 0.15)", padding: "1.4rem 2rem", display: "flex", alignItems: "center", gap: "2rem" }}>
      <img src="/luna/Unified.png" alt="LUNA entity resolution hub showing Address, Building, and Parcel nodes connected to 12 data source types including Tax Assessor, Recorder, USPS CASS, Geocoding, Places API, Sales, Loans, Leasing, Construction, Benchmarking, and 1st Party data" style={{ width: 280, flexShrink: 0, display: "block" }} />
      <div>
        <div style={{ fontFamily: "var(--mono)", fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#A8185E", marginBottom: "0.6rem" }}>The Graph in Practice</div>
        <p style={{ fontSize: "0.85rem", color: "#000", lineHeight: 1.7, margin: "0 0 0.5rem" }}>
          LUNA resolves across three canonical entity types, Address, Building, and Parcel, drawing from 12 data source categories simultaneously. Every resolution carries confidence scores, full source attribution, and bidirectional traversal back to the canonical graph stored in MERIDIAN.
        </p>
        <p style={{ fontSize: "0.78rem", color: "hsl(var(--ink-light))", margin: 0, fontStyle: "italic" }}>
          This is not a data connection. It is a graph that accumulates meaning with every resolved entity.
        </p>
      </div>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "hsl(var(--pink) / 0.15)", border: "1px solid hsl(var(--pink) / 0.15)", marginTop: "1.5px", maxWidth: 960 }}>
      {pillars.map((p, i) => (
        <div key={i} style={{ background: "#fff", padding: "1.8rem 2rem", borderTop: "3px solid #A8185E" }}>
          <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#A8185E", marginBottom: "0.7rem" }}>{p.label}</div>
          <div style={{ fontSize: "0.83rem", color: "#000", lineHeight: 1.7 }}>{p.desc}</div>
        </div>
      ))}
    </div>

    {/* Reasoning models */}
    <div style={{ marginTop: "2.5rem", maxWidth: 960 }}>
      <div style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "hsl(var(--ink-light))", marginBottom: "1rem" }}>Reasoning Models: How knowledge becomes action</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "1px", background: "hsl(var(--pink) / 0.15)", border: "1px solid hsl(var(--pink) / 0.15)" }}>
        {reasoningModels.map((r, i) => (
          <div key={i} style={{ background: "#fff", padding: "1.4rem 1.5rem", borderTop: "3px solid #A8185E" }}>
            <div style={{ fontSize: "1rem", fontWeight: 600, color: "#A8185E", marginBottom: "0.3rem" }}>{r.label}</div>
            <div style={{ fontSize: "0.74rem", fontStyle: "italic", color: "#DF2467", marginBottom: "0.7rem" }}>{r.q}</div>
            <div style={{ fontSize: "0.78rem", color: "#000", lineHeight: 1.6 }}>{r.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default KGInfrastructureSlide;
