const pillars = [
  { label: "Entity Density Creates Moat", desc: "Every resolved entity, connected relationship, and corrected ambiguity makes the graph more accurate, and harder to replicate. The graph compounds: more data in means more precision out." },
  { label: "Cross-Source Identity Is Irreplaceable", desc: "Knowing that an entity in System A, System B, and a third-party source are the same real-world object cannot be approximated by AI alone. It requires years of probabilistic matching, human feedback, and domain-specific training data." },
  { label: "Graph-Native Reasoning", desc: "AI systems that traverse relationships in a knowledge graph produce qualitatively different answers than those limited to keyword or vector search. The graph enables multi-hop reasoning." },
  { label: "The Graph Learns From Corrections", desc: "Each correction to an entity match or human override of a classification teaches the system, and creates a proprietary, compounding learning corpus. The graph gets smarter with every exception." },
];

const reasoningModels = [
  { label: "Causal", color: "#A8185E", q: "Why did renewal rates drop?", desc: "Traverses graph links from the metric through operational events, PM transitions, and market conditions to surface the root factor." },
  { label: "Comparative", color: "#A8185E", q: "How does Asset A compare to Asset B?", desc: "Normalizes metrics via the semantic layer and aligns entity dimensions before comparing." },
  { label: "Predictive", color: "#A8185E", q: "Which assets are likely at risk?", desc: "Detects context graph patterns that preceded prior defaults or underperformance and scores current exposure." },
  { label: "Diagnostic", color: "#A8185E", q: "Why is this metric inconsistent?", desc: "Traces data lineage through semantic definitions and isolates where meaning diverges across sources." },
];

interface Props {
  onImageClick?: (src: string) => void;
}

const KGInfrastructureSlide = ({ onImageClick }: Props) => (
  <section className="slide" id="s9">
    <div className="slide-n">ix / Infrastructure, Not a Feature</div>
    <h2 className="luna-h2">
      The knowledge graph is infrastructure,
      <br />
      <span className="luna-accent">not a feature.</span>
    </h2>
    <p className="luna-sub" style={{ marginBottom: 0 }}>
      Solutions that build this layer gain a structural advantage that compounds over time.
    </p>

    <div className="luna-pink-banner" style={{ marginTop: "2rem", maxWidth: 960 }}>
      <div className="luna-source" style={{ color: "rgba(255,255,255,0.5)", marginBottom: "0.7rem" }}>
        Gartner, April 2025 · section heading
      </div>
      <p className="luna-serif-quote" style={{ color: "#fff", margin: "0 0 0.9rem" }}>
        "The Future of Semantic Layers: Metrics Layers Powered by Knowledge Graph"
      </p>
      <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.78)", lineHeight: 1.7, margin: "0 0 0.5rem", maxWidth: 760 }}>
        Knowledge graphs provide four structural advantages over linear architectures: enhanced contextual understanding, improved integration, scalability with AI explainability, and relationship inference structurally unavailable from linear data connections.
      </p>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "0.8rem", marginTop: "0.3rem" }}>
        <span className="luna-source" style={{ color: "rgba(255,255,255,0.45)" }}>The industry finding: </span>
        <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.65)" }}>
          For most vendors, the value proposition of knowledge graphs remains unrealized due to implementation complexity. Cherre has spent ten years solving exactly that problem.
        </span>
      </div>
    </div>

    {/* Hub-and-spoke — click to enlarge */}
    <div className="luna-hub-spoke">
      <img
        src="/luna/Unified.png"
        alt="LUNA entity resolution hub"
        className="luna-hub-img luna-enlargeable-img"
        onClick={() => onImageClick?.("/luna/Unified.png")}
      />
      <div>
        <div className="luna-source" style={{ color: "#A8185E", marginBottom: "0.6rem" }}>The Graph in Practice</div>
        <p style={{ fontSize: "0.85rem", color: "#000", lineHeight: 1.7, margin: "0 0 0.5rem" }}>
          LUNA resolves across three canonical entity types, Address, Building, and Parcel, drawing from 12 data source categories simultaneously.
        </p>
        <p style={{ fontSize: "0.78rem", color: "hsl(var(--ink-light))", margin: 0, fontStyle: "italic" }}>
          This is not a data connection. It is a graph that accumulates meaning with every resolved entity.
        </p>
        <div className="luna-tap-hint">Tap image to enlarge</div>
      </div>
    </div>

    <div className="luna-grid-2col" style={{ marginTop: "1.5px", maxWidth: 960 }}>
      {pillars.map((p, i) => (
        <div key={i} className="luna-card-bordered">
          <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#A8185E", marginBottom: "0.7rem" }}>{p.label}</div>
          <div style={{ fontSize: "0.83rem", color: "#000", lineHeight: 1.7 }}>{p.desc}</div>
        </div>
      ))}
    </div>

    {/* Reasoning models */}
    <div style={{ marginTop: "2.5rem", maxWidth: 960 }}>
      <div className="luna-source" style={{ marginBottom: "1rem" }}>Reasoning Models: How knowledge becomes action</div>
      <div className="luna-grid-4col">
        {reasoningModels.map((r, i) => (
          <div key={i} className="luna-card-bordered">
            <div style={{ fontSize: "1rem", fontWeight: 600, color: r.color || "#A8185E", marginBottom: "0.3rem" }}>{r.label}</div>
            <div style={{ fontSize: "0.74rem", fontStyle: "italic", color: "#DF2467", marginBottom: "0.7rem" }}>{r.q}</div>
            <div style={{ fontSize: "0.78rem", color: "#000", lineHeight: 1.6 }}>{r.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default KGInfrastructureSlide;