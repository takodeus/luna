const products = [
  {
    name: "CONNECT",
    tagline: "Data In.",
    color: "#A8185E",
    bg: "#FDF0F6",
    description:
      "150+ integrations. AI-powered ingestion. Custom connectors built in STUDIO Mode. Every source your firm touches, unified before it reaches your models.",
    verbs: ["Connect", "Feed", "Submit", "Create"],
  },
  {
    name: "CORE",
    tagline: "Data Through.",
    color: "#1B70B1",
    bg: "#EFF6FD",
    description:
      "A universal data model for real assets. Physical and legal entity resolution. A knowledge graph built on a real estate ontology. One governed structure beneath every workflow.",
    verbs: ["Model", "Resolve", "Enrich", "Govern"],
  },
  {
    name: "QUALITY",
    tagline: "Data Integrity.",
    color: "#23A98E",
    bg: "#EEF9F6",
    description:
      "Validate, trace, monitor, and govern at scale. Every transformation tracked. Every business rule enforced. Full auditability from source to system.",
    verbs: ["Validate", "Trace", "Monitor", "Govern"],
  },
  {
    name: "ALPHA",
    tagline: "Data Out.",
    color: "#611FAD",
    bg: "#F5F0FD",
    description:
      "Deliver trusted data to every downstream environment: warehouses, BI tools, agentic workflows. The fuel for what comes next.",
    verbs: ["Deliver", "Visualize", "Operationalize", "Ignite"],
  },
];

const CherreFoundationSlide = () => (
  <section className="slide" id="sb1" style={{ background: "#FAFAFA" }}>
    <div className="slide-n">i / Where We Are Today</div>

    <h2 className="luna-h2">
      The platform you run on.
      <br />
      <span className="luna-accent">Already working.</span>
    </h2>

    <p className="luna-body-text" style={{ maxWidth: 760 }}>
      Cherre was built to solve the hardest operational problem in real assets: getting data in, through, and out in a form that can actually be used. The four products below are live, production-grade, and operating across the leading investors, managers, and operators in the industry.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "2px",
        marginTop: "2rem",
        maxWidth: 940,
      }}
    >
      {products.map((p) => (
        <div
          key={p.name}
          style={{
            background: p.bg,
            borderTop: `4px solid ${p.color}`,
            padding: "1.5rem 1.4rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.6rem",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: p.color,
                marginBottom: "0.2rem",
              }}
            >
              Cherre
            </div>
            <div
              style={{
                fontSize: "1.35rem",
                fontWeight: 800,
                color: "#000",
                letterSpacing: "-0.01em",
                lineHeight: 1,
                marginBottom: "0.2rem",
              }}
            >
              {p.name}
            </div>
            <div
              style={{
                fontFamily: "var(--serif)",
                fontSize: "0.82rem",
                fontStyle: "italic",
                color: p.color,
                fontWeight: 600,
              }}
            >
              {p.tagline}
            </div>
          </div>

          <p style={{ fontSize: "0.80rem", color: "#000", lineHeight: 1.7, margin: 0 }}>
            {p.description}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "auto" }}>
            {p.verbs.map((v) => (
              <span
                key={v}
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "0.58rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: p.color,
                  background: "rgba(0,0,0,0.04)",
                  padding: "3px 8px",
                  borderRadius: 2,
                }}
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>

    <p
      style={{
        fontSize: "0.82rem",
        color: "hsl(var(--ink-light))",
        lineHeight: 1.7,
        maxWidth: 820,
        marginTop: "2rem",
        fontStyle: "italic",
      }}
    >
      This is not the starting point of a pitch. It is the foundation of what comes next. Everything that follows was built on top of what you already use.
    </p>
  </section>
);

export default CherreFoundationSlide;
