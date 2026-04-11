const products = [
  {
    name: "LUNA",
    tag: "Entity Resolution Engine",
    headline: "Best-in-class entity resolution engine, operating on MERIDIAN's graph infrastructure.",
    capabilities: [
      { label: "Spatial entity resolution", body: "U.S. market spatial resolution for properties, parcels, addresses, and buildings across jurisdictions, formats, and identifier schemes." },
      { label: "Legal entity resolution", body: "Legal entity resolution capabilities in alpha, resolving owners, borrowers, managers, and tenants across instruments, registries, and funds." },
      { label: "Graph-scale matching", body: "Probabilistic matching, clustering, and continuous learning at the scale of the full Cherre graph: 4B+ legal entities, 2B+ addresses." },
      { label: "Compounding accuracy", body: "Every correction and human override teaches the system, creating a proprietary learning corpus that compounds with every data relationship." },
    ],
  },
  {
    name: "MERIDIAN",
    tag: "Knowledge Graph Database",
    dark: true,
    headline: "A high-performance GraphDB for complex analytical workloads. SQL and GQL native.",
    capabilities: [
      { label: "Dual query support", body: "Supports both SQL and GQL querying, enabling complex analytical workloads across the graph." },
      { label: "Cherre UDM + ontology", body: "Incorporates the Cherre Universal Data Model, ontology, Semantic Data Models, and Knowledge Graph Model." },
      { label: "Scalable performance", body: "Purpose-built for large-scale analytical queries. Highly scalable architecture with efficient cost management." },
      { label: "Governed by design", body: "Every query inherits LUNA's resolved entities, the ontology's semantic definitions, and full provenance of the underlying graph." },
    ],
  },
  {
    name: "ATLAS",
    tag: "Orchestration Layer",
    headline: "A chat-based orchestration agent that lets users query their private graph in natural language.",
    capabilities: [
      { label: "Natural language interface", body: "Users ask questions directly against client data within their private knowledge graph. No SQL, no BI tooling." },
      { label: "Persistent memory", body: "Organizational and user memory persists across sessions. ATLAS learns context, preferences, and domain-specific terminology." },
      { label: "Extensible skills framework", body: "Performance improves through training and iteration. Skills are composable and extensible." },
      { label: "Full query transparency", body: "Every answer includes complete lineage back to the underlying source data." },
    ],
  }
];

const BuildBuySlide = () => (
  <section className="slide" id="s12">
    <div className="slide-n">xii / What Fills the Layer</div>
    <h2 className="luna-h2">
      Three products. One architecture.
      <br />
      <span className="luna-accent">Built to fill the empty layer.</span>
    </h2>
    <p className="luna-sub" style={{ marginBottom: 0 }}>
      Gartner identifies the open position. The three products below are what fills it.
    </p>

    <div className="luna-grid-3col" style={{ marginTop: "2.5rem", maxWidth: 1040 }}>
      {products.map((p, i) => (
        <div key={i} style={{
          background: p.dark ? "#A8185E" : "#fff",
          padding: "2rem",
          borderTop: `4px solid ${p.dark ? "#DF2467" : "#A8185E"}`,
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
        }}>
          <div>
            <div style={{ fontSize: "1.15rem", fontWeight: 600, letterSpacing: "0.08em", color: p.dark ? "#fff" : "#A8185E", marginBottom: "0.25rem" }}>{p.name}</div>
            <div className="luna-source" style={{ color: p.dark ? "rgba(255,255,255,0.5)" : "hsl(var(--ink-light))" }}>{p.tag}</div>
          </div>
          <div style={{ fontSize: "0.87rem", fontWeight: 500, color: p.dark ? "rgba(255,255,255,0.9)" : "#000", lineHeight: 1.55, paddingBottom: "1rem", borderBottom: `1px solid ${p.dark ? "rgba(255,255,255,0.15)" : "hsl(var(--pink) / 0.15)"}` }}>{p.headline}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
            {p.capabilities.map((c, j) => (
              <div key={j}>
                <div className="luna-source" style={{ color: p.dark ? "rgba(255,255,255,0.6)" : "#A8185E", marginBottom: "0.2rem" }}>{c.label}</div>
                <div style={{ fontSize: "0.79rem", color: p.dark ? "rgba(255,255,255,0.75)" : "#000", lineHeight: 1.65 }}>{c.body}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* Building Blocks */}
    <div className="luna-img-block" style={{ maxWidth: 1040 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "1rem", flexWrap: "wrap" }}>
        <div className="luna-source" style={{ color: "#A8185E" }}>LUNA · 15 Capabilities</div>
        <div className="luna-source">7 Live · 2 Roadmap · 6 Enrichment</div>
      </div>
      <img src="/luna/BuildingBlocks.png" alt="LUNA building blocks grid" style={{ width: "100%", maxWidth: 1000, display: "block" }} />
    </div>

    {/* Split: Gartner / Cherre */}
    <div className="luna-duo-cards-full" style={{ maxWidth: 1040, marginTop: "2rem" }}>
      <div style={{ background: "#A8185E", padding: "1.8rem 2rem", flex: 1 }}>
        <div className="luna-source" style={{ color: "rgba(255,255,255,0.5)", marginBottom: "0.7rem" }}>Industry finding, April 2025</div>
        <p style={{ fontSize: "1rem", fontWeight: 600, color: "#fff", lineHeight: 1.45, margin: "0 0 0.8rem" }}>
          The destination is well-defined: a composite semantic layer working in concert.
        </p>
        <p className="luna-source" style={{ color: "rgba(255,255,255,0.45)", margin: 0 }}>
          No solution has achieved this yet. Cherre is built to be the foundation.
        </p>
      </div>
      <div style={{ background: "#fff", padding: "1.8rem 2rem", flex: 1 }}>
        <div className="luna-source" style={{ color: "#A8185E", marginBottom: "0.7rem" }}>The Cherre Position</div>
        <p style={{ fontSize: "1rem", fontWeight: 600, color: "#000", lineHeight: 1.45, margin: "0 0 0.8rem" }}>
          The canonical graph is already built. That is the hard part.
        </p>
        <p style={{ fontSize: "0.83rem", color: "hsl(var(--ink-mid))", lineHeight: 1.7, margin: 0 }}>
          Because the canonical real estate knowledge graph exists, any semantic layer can be deployed flexibly on top.
        </p>
      </div>
    </div>
  </section>
);

export default BuildBuySlide;
