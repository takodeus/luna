const products = [
  {
    name: "CONNECT",
    tag: "Data In",
    color: "#A8185E",
    proof: "150+ integrations. AI-powered ingestion. Custom connectors via STUDIO Mode.",
    bridge: "The entry point where entity resolution begins. Every source unified before it reaches the graph.",
  },
  {
    name: "CORE",
    tag: "Data Through",
    color: "#1B70B1",
    proof: "Universal Data Model. Physical and legal entity resolution. Real estate ontology knowledge graph.",
    bridge: "The layer where LUNA and MERIDIAN operate. Resolution, governed meaning, graph traversal.",
  },
  {
    name: "QUALITY",
    tag: "Data Integrity",
    color: "#23A98E",
    proof: "Always-on validation. Full transformation lineage. Business-rule enforcement at scale.",
    bridge: "Provenance and confidence are structural here. Every edge carries its resolution history.",
  },
  {
    name: "ALPHA",
    tag: "Data Out",
    color: "#611FAD",
    proof: "Delivery to warehouses, BI tools, and AI agents. Bridge into Agent STUDIO for agentic workflows.",
    bridge: "Where ATLAS operates. Governed data delivered to systems built to act on it.",
  },
];

const ProductionAnchorSlide = () => (
  <section className="slide" id="s14" style={{ background: "#fff" }}>
    <div className="slide-n">xiv / The Foundation Is Already Built</div>

    <h2 className="luna-h2">
      This is not a roadmap.
      <br />
      <span className="luna-accent">It is already running.</span>
    </h2>

    <p className="luna-body-text" style={{ maxWidth: 780 }}>
      Every capability described in this document has a production foundation. LUNA, MERIDIAN, and ATLAS are not greenfield projects. They are the explicit, composable surface of infrastructure that has been operating inside Cherre for years across the leading investors, managers, and operators in real assets.
    </p>

    {/* Four product anchors */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
        gap: "2px",
        marginTop: "2rem",
        maxWidth: 960,
      }}
    >
      {products.map((p) => (
        <div
          key={p.name}
          style={{
            background: "#FAFAFA",
            borderTop: `4px solid ${p.color}`,
            padding: "1.4rem 1.3rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.9rem",
          }}
        >
          {/* Name + tag */}
          <div>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: "0.62rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: p.color,
                marginBottom: "0.15rem",
              }}
            >
              Cherre
            </div>
            <div
              style={{
                fontSize: "1.25rem",
                fontWeight: 800,
                color: "#000",
                letterSpacing: "-0.01em",
                lineHeight: 1,
                marginBottom: "0.15rem",
              }}
            >
              {p.name}
            </div>
            <div
              style={{
                fontFamily: "var(--serif)",
                fontSize: "0.78rem",
                fontStyle: "italic",
                color: p.color,
                fontWeight: 600,
              }}
            >
              {p.tag}
            </div>
          </div>

          {/* What it does today */}
          <p
            style={{
              fontSize: "0.79rem",
              color: "#000",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {p.proof}
          </p>

          {/* How it connects to the architecture */}
          <div
            style={{
              borderTop: `1px solid ${p.color}22`,
              paddingTop: "0.7rem",
              fontSize: "0.74rem",
              color: "hsl(var(--ink-mid))",
              lineHeight: 1.65,
              fontStyle: "italic",
            }}
          >
            {p.bridge}
          </div>
        </div>
      ))}
    </div>

    {/* Closing statement */}
    <div
      style={{
        marginTop: "2rem",
        maxWidth: 960,
        background: "#0D0D0D",
        padding: "2rem 2.2rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.9rem",
      }}
    >
      <div
        style={{
          fontFamily: "var(--mono)",
          fontSize: "0.62rem",
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.3)",
        }}
      >
        The bottom line
      </div>
      <p
        style={{
          fontFamily: "var(--serif)",
          fontSize: "1.1rem",
          fontStyle: "italic",
          color: "#fff",
          lineHeight: 1.65,
          margin: 0,
          maxWidth: 780,
        }}
      >
        The semantic layer is not being built from scratch. The decade of entity resolution, graph construction, governed definitions, and cross-source identity work that makes LUNA, MERIDIAN, and ATLAS possible already exists in production.
      </p>
      <p
        style={{
          fontSize: "0.83rem",
          color: "rgba(255,255,255,0.55)",
          lineHeight: 1.75,
          margin: 0,
          maxWidth: 780,
        }}
      >
        What changes now is the interface. The primitives are being surfaced as composable, named infrastructure so the firms running on Cherre today can build the next era of intelligent systems on top of a foundation they already trust.
      </p>

      {/* Three primitives — minimal */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "2px",
          marginTop: "0.5rem",
        }}
      >
        {[
          { name: "LUNA", role: "Entity Resolution", color: "#A8185E" },
          { name: "MERIDIAN", role: "Knowledge Graph", color: "#23A98E" },
          { name: "ATLAS", role: "Reasoning Interface", color: "#1B70B1" },
        ].map((l) => (
          <div
            key={l.name}
            style={{
              borderTop: `2px solid ${l.color}`,
              paddingTop: "0.7rem",
            }}
          >
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                color: l.color,
                marginBottom: "0.15rem",
              }}
            >
              {l.name}
            </div>
            <div
              style={{
                fontSize: "0.72rem",
                color: "rgba(255,255,255,0.45)",
                letterSpacing: "0.02em",
              }}
            >
              {l.role}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductionAnchorSlide;
