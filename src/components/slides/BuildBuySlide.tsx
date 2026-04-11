const products = [
  {
    tag: "Cherre CONNECT",
    label: "Data In",
    color: "hsl(var(--blue))",
    borderColor: "hsl(var(--blue))",
    bg: "#f0f4fb",
    items: [
      { heading: "What it does", body: "Unifies complex data flows across industry-specific, multi-system, multi-vendor pipelines — direct integrations, external APIs, document ingestion, and custom logic." },
      { heading: "Connectors", body: "150+ native connectors across every major real estate application and data provider — operational, financial, market, and document sources." },
      { heading: "Empty layer problem it solves", body: "Fragmented source data with no canonical entry point. Every downstream intelligence layer requires clean, unified data in before it can govern meaning through." },
    ],
    verdict: "The ingestion and unification layer. Data arrives governed from the start.",
    verdictColor: "hsl(var(--blue))",
  },
  {
    tag: "Cherre CORE",
    label: "Data Through",
    color: "hsl(var(--green))",
    borderColor: "hsl(var(--green))",
    bg: "#f0f7f3",
    items: [
      { heading: "What it does", body: "Standardizes through a Universal Data Model; resolves entities probabilistically across 4B+ legal entities and 2B+ addresses; builds and maintains the real estate knowledge graph." },
      { heading: "Ontology", body: "Purpose-built real estate ontology covering 50+ entity types — property, tenant, fund, lease, operator, market — validated across $3.7T AUM over 10 years." },
      { heading: "Empty layer problem it solves", body: "No canonical entity layer. Definitions buried in BI logic. The same asset exists in five systems under five IDs with no authoritative resolution." },
    ],
    verdict: "The semantic and context layer. Where data acquires meaning, identity, and lineage.",
    verdictColor: "hsl(var(--green))",
  },
  {
    tag: "Cherre QUALITY",
    label: "Data Integrity",
    color: "hsl(var(--amber))",
    borderColor: "hsl(var(--amber))",
    bg: "#fef9ef",
    items: [
      { heading: "What it does", body: "Monitors data in real time. Validates against business rules. Detects mapping drift, join anomalies, and definition drift as pipelines run — not after the damage is done." },
      { heading: "Governance", body: "Enterprise-grade observability and validation with lineage, exceptions, and visibility into every event. SOC 1/2, GDPR, ISO 27001 compliant." },
      { heading: "Empty layer problem it solves", body: "Semantic failures that occur silently in mapping, joins, and reconciliation. Clean pipelines carrying semantically broken data produce faster answers to the wrong questions." },
    ],
    verdict: "The observability layer. Meaning governance enforced continuously, not retroactively.",
    verdictColor: "hsl(var(--amber))",
  },
  {
    tag: "Cherre ALPHA",
    label: "Data Out",
    color: "hsl(var(--pink))",
    borderColor: "hsl(var(--pink))",
    bg: "hsl(var(--pink-light))",
    highlight: true,
    items: [
      { heading: "What it does", body: "Exposes governed data to any downstream environment — dashboards, cloud platforms, AI agents, and agentic workflows — with full lineage and provenance intact." },
      { heading: "Agent readiness", body: "Data products optimized for AI consumption: APIs, embeddings, and semantic queries that let agents work reliably on governed, traceable, context-rich data." },
      { heading: "Empty layer problem it solves", body: "AI operating on unresolved entities and drifting metrics becomes wrong at scale. ALPHA ensures every output is grounded in governed definitions — explainable and auditable." },
    ],
    verdict: "The delivery layer. Intelligence that agents and humans can act on and stand behind.",
    verdictColor: "hsl(var(--pink))",
  },
];

const BuildBuySlide = () => (
  <section className="slide" id="s11">
    <div className="slide-n">xi — What Fills the Layer</div>
    <h2 className="luna-h2">
      The architecture of the intelligence layer
      <br />
      <span className="luna-accent">is known. Four components fill it.</span>
    </h2>
    <p className="luna-sub" style={{ marginBottom: 0 }}>
      Gartner identifies the unclaimed position. McKinsey quantifies what's at stake. The four capabilities below are what that layer requires — and what Cherre has spent ten years building, purpose-built for real estate.
    </p>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "1.5px", background: "hsl(var(--pink-border))", border: "1px solid hsl(var(--pink-border))", marginTop: "2.5rem", maxWidth: 1100 }}>
      {products.map((opt, i) => (
        <div key={i} style={{ background: opt.bg, padding: "1.8rem 1.6rem", borderTop: `4px solid ${opt.borderColor}`, display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <div className="font-mono-luna" style={{ fontSize: "0.54rem", letterSpacing: "0.18em", textTransform: "uppercase", color: opt.color, marginBottom: "0.2rem" }}>{opt.tag}</div>
            <div style={{ fontSize: "1rem", fontWeight: 700 }}>{opt.label}</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {opt.items.map((item, j) => (
              <div key={j}>
                <div style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: opt.color, marginBottom: "0.15rem" }}>{item.heading}</div>
                <div style={{ fontSize: "0.77rem", color: "hsl(var(--ink-mid))", lineHeight: 1.6 }}>{item.body}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "auto", paddingTop: "1rem", borderTop: `1px solid hsl(var(--rule))` }}>
            <div style={{ fontSize: "0.79rem", fontWeight: 500, color: opt.verdictColor, lineHeight: 1.5, fontStyle: "italic" }}>
              {opt.verdict}
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="callout" style={{ marginTop: "2rem", maxWidth: 1100 }}>
      <div className="callout-title">The Gartner Finding</div>
      <div className="callout-text">
        "The universal semantic layer has not yet been achieved by any organization or vendor." — Gartner, April 2025 (G00826629). <strong>The position is open. The architecture above is what fills it.</strong>
      </div>
    </div>
  </section>
);

export default BuildBuySlide;
