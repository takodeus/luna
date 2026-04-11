const products = [
  {
    name: "LUNA",
    tag: "Entity Resolution Engine",
    headline: "Best-in-class entity resolution built on the scale of the Cherre graph.",
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
      { label: "Dual query support", body: "Supports both SQL and GQL querying, enabling complex analytical workloads across the graph without requiring teams to choose a single query paradigm." },
      { label: "Cherre UDM + ontology", body: "Incorporates the Cherre Universal Data Model, ontology, Semantic Data Models, and Knowledge Graph Model, delivering governed meaning at query time." },
      { label: "Scalable performance", body: "Purpose-built for large-scale analytical queries. Highly scalable architecture with efficient cost management for sophisticated, multi-hop workloads." },
      { label: "Governed by design", body: "The intelligence layer isn't layered on top. It's embedded. Every query inherits the entity resolution, semantic governance, and provenance of the underlying graph." },
    ],
  },
  {
    name: "ATLAS",
    tag: "Orchestration Layer",
    headline: "A chat-based orchestration agent that lets users query their private graph in natural language.",
    capabilities: [
      { label: "Natural language interface", body: "Users ask questions directly against client data within their private knowledge graph. No SQL, no BI tooling, no data team dependency." },
      { label: "Persistent memory", body: "Organizational and user memory persists across sessions. ATLAS learns context, preferences, and domain-specific terminology over time." },
      { label: "Extensible skills framework", body: "Performance improves through training and iteration. Skills are composable and extensible. Each deployment gets smarter with use." },
      { label: "Full query transparency", body: "Every answer includes complete lineage back to the underlying source data, along with the rules and policies applied throughout the reasoning process." },
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
      Gartner identifies the open position. The three products below are what fills it: an orchestration agent, an entity resolution engine, and a knowledge graph database, purpose-built for real estate at institutional scale.
    </p>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1px", background: "hsl(var(--pink-border))", border: "1px solid hsl(var(--pink-border))", marginTop: "2.5rem", maxWidth: 1040 }}>
      {products.map((p, i) => (
        <div key={i} style={{
          background: p.dark ? "hsl(var(--pink))" : "hsl(var(--pink-light))",
          padding: "2rem 2rem",
          borderTop: `4px solid ${p.dark ? "hsl(var(--accent))" : "hsl(var(--pink))"}`,
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
        }}>
          {/* Product name + tag */}
          <div>
            <div style={{
              fontSize: "1.15rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: p.dark ? "#fff" : "hsl(var(--pink))",
              marginBottom: "0.25rem",
            }}>{p.name}</div>
            <div style={{
              fontSize: "0.56rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: p.dark ? "rgba(255,255,255,0.5)" : "hsl(var(--ink-light))",
            }}>{p.tag}</div>
          </div>

          {/* Headline */}
          <div style={{
            fontSize: "0.87rem",
            fontWeight: 500,
            color: p.dark ? "rgba(255,255,255,0.9)" : "hsl(var(--foreground))",
            lineHeight: 1.55,
            paddingBottom: "1rem",
            borderBottom: `1px solid ${p.dark ? "rgba(255,255,255,0.15)" : "hsl(var(--pink-border))"}`,
          }}>{p.headline}</div>

          {/* Capabilities */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
            {p.capabilities.map((c, j) => (
              <div key={j}>
                <div style={{
                  fontSize: "0.62rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: p.dark ? "rgba(255,255,255,0.6)" : "hsl(var(--pink))",
                  marginBottom: "0.2rem",
                }}>{c.label}</div>
                <div style={{
                  fontSize: "0.79rem",
                  color: p.dark ? "rgba(255,255,255,0.75)" : "hsl(var(--foreground))",
                  lineHeight: 1.65,
                }}>{c.body}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className="callout" style={{ marginTop: "2rem", maxWidth: 1040 }}>
      <div className="callout-title">The Gartner Finding</div>
      <div className="callout-text">
        Gartner (April 2025, G00826629) identifies the semantic governance layer as the open position in the enterprise stack. <strong>LUNA, MERIDIAN, and ATLAS are the architecture that fills it.</strong>
      </div>
    </div>
  </section>
);

export default BuildBuySlide;
