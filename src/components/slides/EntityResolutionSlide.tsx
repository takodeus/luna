const problems = [
  {
    label: "The Scale Problem",
    text: "Enterprise data environments contain hundreds of millions of records across dozens of systems. Entity resolution at this scale requires probabilistic matching, clustering, and continuous learning, and must avoid rigid, rule-based joins.",
  },
  {
    label: "The Ambiguity Problem",
    text: "The same legal entity may appear under dozens of name variants, address formats, and identifier schemes across sources. No single canonical ID exists. Therefore resolution must be reliably inferred instead of looked up.",
  },
  {
    label: "The Stakes Problem",
    text: "Every downstream AI inference, metric, and recommendation inherits the entity model. A 2% entity resolution error rate at 1B records produces 20M misattributed facts. These invisible errors will silently corrupt every output layer.",
  },
];

const reTypes = [
  {
    label: "Spatial Entities",
    sub: "Across Fragmented Systems",
    desc: "Match buildings, parcels, and addresses with different formats or identifiers across jurisdictions, sources, and time.",
    use: "Site planning, zoning, valuations, permitting, tax assessments",
  },
  {
    label: "Entity Relationships",
    sub: "Across Instruments",
    desc: "Link asset-level data to all related real estate instruments, including debt, equity, insurance, and more.",
    use: "Capital stack transparency, layered risk views, collateral validation",
  },
  {
    label: "Geospatial Entities",
    sub: "Across Time and Sources",
    desc: "Match entities that changed names, split or merged parcels, were restructured or otherwise evolved over time.",
    use: "Historical benchmarking, lien tracking, reinsurance, capital markets",
  },
  {
    label: "People, Companies",
    sub: "and Legal Entities",
    desc: "Unify entities like owners, borrowers, managers, and tenants across deals, funds, loan tapes, leases, and registries.",
    use: "Ownership chains, portfolio views, KYC, compliance, underwriting",
  },
];

const EntityResolutionSlide = () => (
  <section className="slide" id="s6">
    <div className="slide-n">vi / Entity Resolution</div>
    <h2 className="luna-h2">
      Entity resolution: the first hard problem.
      <br />
      <span className="luna-accent">Every layer above it inherits its errors.</span>
    </h2>

    {/* Same Entity? callout */}
    <div style={{ display: "flex", gap: "1px", background: "hsl(var(--pink-border))", border: "1px solid hsl(var(--pink-border))", marginTop: "2rem", maxWidth: 960 }}>
      <div style={{ background: "hsl(var(--pink))", color: "#fff", padding: "1.4rem 1.8rem", minWidth: 140, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <span style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", textAlign: "center", lineHeight: 1.4 }}>Same Entity?</span>
      </div>
      <div style={{ background: "hsl(var(--pink-light))", padding: "1.4rem 1.8rem", fontSize: "0.85rem", color: "hsl(var(--foreground))", lineHeight: 1.7 }}>
        The ontology tells AI systems what a 'tenant,' 'property,' or 'market' means, but before any of that meaning can be applied, the system must answer a harder question: whether the 'tenant' in System A and the 'tenant' in System B are the same entity. Without solving this, every layer above (semantic, contextual, reasoning) operates on a fractured identity model where metrics drift, context fragments, and answers contradict.
      </div>
    </div>

    {/* Three problems */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1px", background: "hsl(var(--pink-border))", border: "1px solid hsl(var(--pink-border))", marginTop: "1px", maxWidth: 960 }}>
      {problems.map((p, i) => (
        <div key={i} style={{ background: "hsl(var(--pink-light))", padding: "1.4rem 1.6rem", borderTop: "3px solid hsl(var(--pink))" }}>
          <div style={{ fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "hsl(var(--pink))", marginBottom: "0.7rem" }}>{p.label}</div>
          <div style={{ fontSize: "0.82rem", color: "hsl(var(--foreground))", lineHeight: 1.65 }}>{p.text}</div>
        </div>
      ))}
    </div>

    {/* Four RE types */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "1px", background: "hsl(var(--pink-border))", border: "1px solid hsl(var(--pink-border))", marginTop: "2rem", maxWidth: 960 }}>
      {reTypes.map((t, i) => (
        <div key={i} style={{ background: "#fff", padding: "1.2rem 1.4rem", borderLeft: "4px solid hsl(var(--pink))" }}>
          <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "hsl(var(--pink))", marginBottom: "0.15rem" }}>{t.label}</div>
          <div style={{ fontSize: "0.54rem", fontWeight: 600, letterSpacing: "0.1em", color: "hsl(var(--ink-light))", marginBottom: "0.7rem", textTransform: "uppercase" }}>{t.sub}</div>
          <div style={{ fontSize: "0.78rem", color: "hsl(var(--foreground))", lineHeight: 1.6, marginBottom: "0.8rem" }}>{t.desc}</div>
          <div style={{ borderTop: "1px solid hsl(var(--pink-border))", paddingTop: "0.6rem" }}>
            <div style={{ fontSize: "0.52rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "hsl(var(--pink))", marginBottom: "0.2rem", opacity: 0.8 }}>Sample use cases</div>
            <div style={{ fontSize: "0.74rem", color: "hsl(var(--ink-light))", lineHeight: 1.5 }}>{t.use}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default EntityResolutionSlide;
