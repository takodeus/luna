const problems = [
  {
    label: "The Scale Problem",
    color: "hsl(var(--green))",
    bg: "#f0f7f3",
    text: "Enterprise data environments contain hundreds of millions of records across dozens of systems. Entity resolution at this scale requires probabilistic matching, clustering, and continuous learning, and must avoid rigid, rule-based joins.",
  },
  {
    label: "The Ambiguity Problem",
    color: "hsl(var(--blue))",
    bg: "#f0f4fb",
    text: "The same legal entity may appear under dozens of name variants, address formats, and identifier schemes across sources. No single canonical ID exists. Therefore resolution must be reliably inferred instead of looked up.",
  },
  {
    label: "The Stakes Problem",
    color: "hsl(var(--amber))",
    bg: "#fef9ef",
    text: "Every downstream AI inference, metric, and recommendation inherits the entity model. A 2% entity resolution error rate at 1B records produces 20M misattributed facts. These invisible errors will silently corrupt every output layer.",
  },
];

const reTypes = [
  {
    label: "Spatial Entities",
    sub: "Across Fragmented Systems",
    desc: "Match buildings, parcels, and addresses with different formats or identifiers across jurisdictions, sources, and time.",
    use: "Site planning, zoning, valuations, permitting, tax assessments",
    color: "hsl(var(--pink))",
  },
  {
    label: "Entity Relationships",
    sub: "Across Instruments",
    desc: "Link asset-level data to all related real estate instruments, including debt, equity, insurance, and more.",
    use: "Capital stack transparency, layered risk views, collateral validation",
    color: "hsl(var(--pink-mid))",
  },
  {
    label: "Geospatial Entities",
    sub: "Across Time and Sources",
    desc: "Match entities that changed names, split or merged parcels, were restructured or otherwise evolved over time.",
    use: "Historical benchmarking, lien tracking, reinsurance, capital markets",
    color: "hsl(var(--blue))",
  },
  {
    label: "People, Companies",
    sub: "and Legal Entities",
    desc: "Unify entities like owners, borrowers, managers, and tenants across deals, funds, loan tapes, leases, and registries.",
    use: "Ownership chains, portfolio views, KYC, compliance, underwriting",
    color: "hsl(var(--green))",
  },
];

const EntityResolutionSlide = () => (
  <section className="slide" id="s5">
    <div className="slide-n">v — Entity Resolution</div>
    <h2 className="luna-h2">
      Entity resolution: the first hard problem.
      <br />
      <span className="luna-accent">Every layer above it inherits its errors.</span>
    </h2>

    {/* Same Entity? callout */}
    <div style={{ display: "flex", gap: "1.5px", background: "hsl(var(--rule))", border: "1px solid hsl(var(--rule))", marginTop: "2rem", maxWidth: 960 }}>
      <div style={{ background: "hsl(var(--pink))", color: "#fff", padding: "1.4rem 1.8rem", minWidth: 140, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <span style={{ fontFamily: "var(--mono)", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", textAlign: "center", lineHeight: 1.4 }}>Same Entity?</span>
      </div>
      <div style={{ background: "hsl(var(--bg-alt))", padding: "1.4rem 1.8rem", fontSize: "0.85rem", color: "hsl(var(--ink-mid))", lineHeight: 1.7 }}>
        The ontology tells AI systems what a 'tenant,' 'property,' or 'market' means — but before any of that meaning can be applied, the system must answer a harder question: whether the 'tenant' in System A and the 'tenant' in System B are the same entity. Without solving this, every layer above — semantic, contextual, reasoning — operates on a fractured identity model where metrics drift, context fragments, and answers contradict.
      </div>
    </div>

    {/* Three problems */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5px", background: "hsl(var(--rule))", border: "1px solid hsl(var(--rule))", marginTop: "1.5px", maxWidth: 960 }}>
      {problems.map((p, i) => (
        <div key={i} style={{ background: p.bg, padding: "1.4rem 1.6rem", borderTop: `3px solid ${p.color}` }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: "0.58rem", letterSpacing: "0.16em", textTransform: "uppercase", color: p.color, fontWeight: 700, marginBottom: "0.7rem" }}>{p.label}</div>
          <div style={{ fontSize: "0.82rem", color: "hsl(var(--ink-mid))", lineHeight: 1.65 }} dangerouslySetInnerHTML={{ __html: p.text.replace(/([A-Z][a-z]+ resolution at this scale requires probabilistic matching)/, '<strong>$1</strong>').replace(/(resolution must be reliably inferred instead of looked up)/, '<strong>$1</strong>').replace(/(invisible errors will silently corrupt every output layer)/, '<strong>$1</strong>') }} />
        </div>
      ))}
    </div>

    {/* Four RE types */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "1.5px", background: "hsl(var(--rule))", border: "1px solid hsl(var(--rule))", marginTop: "2rem", maxWidth: 960 }}>
      {reTypes.map((t, i) => (
        <div key={i} style={{ background: "#fff", padding: "1.2rem 1.4rem", borderLeft: `4px solid ${t.color}` }}>
          <div style={{ fontSize: "0.82rem", fontWeight: 700, color: t.color, marginBottom: "0.15rem" }}>{t.label}</div>
          <div style={{ fontFamily: "var(--mono)", fontSize: "0.54rem", letterSpacing: "0.1em", color: "hsl(var(--ink-light))", marginBottom: "0.7rem", textTransform: "uppercase" }}>{t.sub}</div>
          <div style={{ fontSize: "0.78rem", color: "hsl(var(--ink-mid))", lineHeight: 1.6, marginBottom: "0.8rem" }}>{t.desc}</div>
          <div style={{ borderTop: "1px solid hsl(var(--rule))", paddingTop: "0.6rem" }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: "0.52rem", letterSpacing: "0.12em", textTransform: "uppercase", color: t.color, marginBottom: "0.2rem", opacity: 0.8 }}>Sample use cases</div>
            <div style={{ fontSize: "0.74rem", color: "hsl(var(--ink-light))", lineHeight: 1.5 }}>{t.use}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default EntityResolutionSlide;
