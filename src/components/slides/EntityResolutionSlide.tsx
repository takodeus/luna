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
    color: "#4A3888",
  },
  {
    label: "People, Companies",
    sub: "and Legal Entities",
    desc: "Unify entities like owners, borrowers, managers, and tenants across deals, funds, loan tapes, leases, and registries.",
    use: "Ownership chains, portfolio views, KYC, compliance, underwriting",
    color: "#2E2460",
  },
];

const EntityResolutionSlide = () => (
  <section className="slide" id="s6">
    <div className="slide-n">vi / The First Hard Problem</div>
    <h2 className="luna-h2">
      Entity resolution: the first hard problem.
      <br />
      <span className="luna-accent">Every layer above inherits its errors.</span>
    </h2>

    {/* Option C: Full-width dark banner */}
    <div style={{ maxWidth: 960, marginTop: "2rem" }}>
      <div style={{ background: "hsl(var(--pink))", padding: "1.8rem 2rem" }}>
        <div className="font-mono-luna" style={{ fontSize: "0.54rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "0.7rem" }}>
          The first hard problem
        </div>
        <p style={{ fontFamily: "var(--serif)", fontSize: "1.45rem", fontWeight: 600, fontStyle: "italic", color: "#fff", lineHeight: 1.35, marginBottom: "0.9rem", margin: "0 0 0.9rem" }}>
          Is the 'tenant' in System A the same entity as the 'tenant' in System B?
        </p>
        <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.78)", lineHeight: 1.7, margin: 0, maxWidth: 700 }}>
          The ontology tells AI systems what a 'tenant,' 'property,' or 'market' means, but before any of that meaning can be applied, the system must answer a harder question: whether these are the same real-world object. Without solving this, every layer above (semantic, contextual, reasoning) operates on a fractured identity model where metrics drift, context fragments, and answers contradict.
        </p>
      </div>

      {/* Three problem panels — dark text on pale rose */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5px", background: "hsl(var(--rule))", marginTop: "1.5px" }}>
        {[
          {
            label: "The Scale Problem",
            text: "Enterprise data environments contain hundreds of millions of records across dozens of systems. Entity resolution at this scale requires probabilistic matching, clustering, and continuous learning, and must avoid rigid, rule-based joins.",
          },
          {
            label: "The Ambiguity Problem",
            text: "The same legal entity may appear under dozens of name variants, address formats, and identifier schemes across sources. No single canonical ID exists. Resolution must be reliably inferred instead of looked up.",
          },
          {
            label: "The Stakes Problem",
            text: "Every downstream AI inference, metric, and recommendation inherits the entity model. A 2% entity resolution error rate at 1B records produces 20M misattributed facts. These invisible errors silently corrupt every output layer.",
          },
        ].map((p, i) => (
          <div key={i} style={{ background: "#FBF1F2", padding: "1.4rem 1.6rem", borderTop: "3px solid hsl(var(--pink))" }}>
            <div className="font-mono-luna" style={{ fontSize: "0.56rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "hsl(var(--pink))", fontWeight: 700, marginBottom: "0.7rem" }}>{p.label}</div>
            <div style={{ fontSize: "0.83rem", color: "hsl(var(--foreground))", lineHeight: 1.7, fontWeight: 400 }}>{p.text}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Scale proof point — five headline numbers */}
    <div style={{ background: "hsl(var(--foreground))", padding: "1.6rem 2rem", marginTop: "1.5px", maxWidth: 960 }}>
      <div style={{ fontFamily: "var(--mono)", fontSize: "0.52rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "1rem" }}>
        LUNA · Entity Resolution at Scale
      </div>
      <div style={{ display: "flex", gap: 0, alignItems: "stretch" }}>
        {[
          { num: "2B+", label: "Addresses", color: "rgba(255,255,255,0.9)" },
          { num: "130M+", label: "Buildings", color: "hsl(var(--pink-mid))" },
          { num: "100M+", label: "Parcels", color: "hsl(var(--pink))" },
          { num: "160M+", label: "Tax Records", color: "#9B8BE0" },
          { num: "12B+", label: "Relationships", color: "#DF2467" },
        ].map((s, i, arr) => (
          <div key={i} style={{ flex: 1, textAlign: "center", padding: "0.5rem 0", borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
            <div style={{ fontSize: "1.9rem", fontWeight: 700, color: s.color, lineHeight: 1, letterSpacing: "-0.02em" }}>{s.num}</div>
            <div style={{ fontFamily: "var(--mono)", fontSize: "0.52rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginTop: "0.35rem" }}>{s.label}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "1rem", fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", textAlign: "center", fontStyle: "italic" }}>
        2B addresses × 130M buildings × 100M parcels × 160M tax records = 12 billion+ graph relationships powering every resolution
      </div>
    </div>

    {/* Resolution pipeline diagram */}
    <div style={{ marginTop: "1.5px", maxWidth: 960, background: "#fff", border: "1px solid hsl(var(--rule))", padding: "1.6rem 2rem" }}>
      <div style={{ fontFamily: "var(--mono)", fontSize: "0.52rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "hsl(var(--ink-light))", marginBottom: "1rem" }}>
        Resolution Pipeline
      </div>
      <img src="/luna/Resolution.png" alt="LUNA resolution pipeline: Input to Standardize to Geocode through Address Store 2B+, Building Data 130M+, Parcel Data 100M+, Tax + APN 160M+ into Matching Engine with Confidence Score and AI Explain" style={{ width: "100%", maxWidth: 860, display: "block" }} />
    </div>

    {/* Four RE entity types */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "1.5px", background: "hsl(var(--rule))", border: "1px solid hsl(var(--rule))", marginTop: "2rem", maxWidth: 960 }}>
      {reTypes.map((t, i) => (
        <div key={i} style={{ background: "#fff", padding: "1.2rem 1.4rem", borderLeft: `4px solid ${t.color}` }}>
          <div style={{ fontSize: "0.82rem", fontWeight: 700, color: t.color, marginBottom: "0.15rem" }}>{t.label}</div>
          <div className="font-mono-luna" style={{ fontSize: "0.54rem", letterSpacing: "0.1em", color: "hsl(var(--ink-light))", marginBottom: "0.7rem", textTransform: "uppercase" }}>{t.sub}</div>
          <div style={{ fontSize: "0.78rem", color: "hsl(var(--foreground))", lineHeight: 1.6, marginBottom: "0.8rem" }}>{t.desc}</div>
          <div style={{ borderTop: "1px solid hsl(var(--rule))", paddingTop: "0.6rem" }}>
            <div className="font-mono-luna" style={{ fontSize: "0.52rem", letterSpacing: "0.12em", textTransform: "uppercase", color: t.color, marginBottom: "0.2rem", opacity: 0.8 }}>Sample use cases</div>
            <div style={{ fontSize: "0.74rem", color: "hsl(var(--ink-mid))", lineHeight: 1.5 }}>{t.use}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default EntityResolutionSlide;
