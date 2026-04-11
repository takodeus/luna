const reTypes = [
  {
    label: "Spatial Entities",
    sub: "Across Fragmented Systems",
    desc: "Match buildings, parcels, and addresses with different formats or identifiers across jurisdictions, sources, and time.",
    use: "Site planning, zoning, valuations, permitting, tax assessments",
    color: "#A8185E",
  },
  {
    label: "Entity Relationships",
    sub: "Across Instruments",
    desc: "Link asset-level data to all related real estate instruments, including debt, equity, insurance, and more.",
    use: "Capital stack transparency, layered risk views, collateral validation",
    color: "#1B70B1",
  },
  {
    label: "Geospatial Entities",
    sub: "Across Time and Sources",
    desc: "Match entities that changed names, split or merged parcels, were restructured or otherwise evolved over time.",
    use: "Historical benchmarking, lien tracking, reinsurance, capital markets",
    color: "#23A98E",
  },
  {
    label: "People, Companies",
    sub: "and Legal Entities",
    desc: "Unify entities like owners, borrowers, managers, and tenants across deals, funds, loan tapes, leases, and registries.",
    use: "Ownership chains, portfolio views, KYC, compliance, underwriting",
    color: "#611FAD",
  },
];

const EntityResolutionSlide = () => (
  <section className="slide" id="s7">
    <div className="slide-n">vi / The First Hard Problem</div>
    <h2 className="luna-h2">
      Entity resolution: the first hard problem.
      <br />
      <span className="luna-accent">Every layer above inherits its errors.</span>
    </h2>

    <div style={{ maxWidth: 960, marginTop: "2rem" }}>
      <div className="luna-pink-banner">
        <div className="luna-source" style={{ color: "rgba(255,255,255,0.5)", marginBottom: "0.7rem" }}>
          The first hard problem
        </div>
        <p className="luna-serif-quote" style={{ color: "#fff", margin: "0 0 0.9rem" }}>
          Is the 'tenant' in System A the same entity as the 'tenant' in System B?
        </p>
        <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.78)", lineHeight: 1.7, margin: 0, maxWidth: 700 }}>
          The ontology tells AI systems what 'tenant,' 'property,' or 'market' means. But before any of that meaning applies, the system must answer a harder question: are these the same real-world object? Without that answer, every layer above operates on a fractured identity model. Metrics drift. Context fragments. Answers contradict.
        </p>
      </div>

      {/* Three problem panels */}
      <div className="luna-grid-3col" style={{ marginTop: "1.5px" }}>
        {[
          { label: "The Scale Problem", text: "Enterprise data environments contain hundreds of millions of records across dozens of systems. Entity resolution at this scale requires probabilistic matching, clustering, and continuous learning. Rigid rule-based joins do not scale." },
          { label: "The Ambiguity Problem", text: "The same legal entity may appear under dozens of name variants, address formats, and identifier schemes across sources. No single canonical ID exists. Resolution must be reliably inferred instead of looked up." },
          { label: "The Stakes Problem", text: "Every downstream AI inference, metric, and recommendation inherits the entity model. A 2% entity resolution error rate at 1B records produces 20M misattributed facts. These invisible errors silently corrupt every output layer." },
        ].map((p, i) => (
          <div key={i} className="luna-card-bordered">
            <div className="luna-source" style={{ color: "#A8185E", marginBottom: "0.7rem" }}>{p.label}</div>
            <div style={{ fontSize: "0.83rem", color: "#000", lineHeight: 1.7 }}>{p.text}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Scale proof */}
    <div style={{ marginTop: "2rem", maxWidth: 960 }}>
      <div className="luna-source" style={{ color: "#A8185E", marginBottom: "1rem" }}>
        LUNA · Entity Resolution at Scale
      </div>
      <div className="luna-grid-5col">
        {[
          { num: "2B+",   label: "Addresses",     accent: "#A8185E" },
          { num: "130M+", label: "Buildings",     accent: "#DF2467" },
          { num: "100M+", label: "Parcels",       accent: "#A8185E" },
          { num: "160M+", label: "Tax Records",   accent: "#A8185E" },
          { num: "12B+",  label: "Relationships", accent: "#DF2467" },
        ].map((s, i) => (
          <div key={i} className="luna-stat-tile" style={{ borderTopColor: s.accent }}>
            <div className="luna-stat-num" style={{ color: s.accent }}>{s.num}</div>
            <div className="luna-source">{s.label}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "1rem", fontSize: "0.78rem", color: "hsl(var(--ink-light))", textAlign: "center", fontStyle: "italic" }}>
        2B addresses × 130M buildings × 100M parcels × 160M tax records = 12 billion+ graph relationships powering every resolution
      </div>
    </div>

    {/* Resolution pipeline */}
    <div className="luna-img-block">
      <div className="luna-source" style={{ marginBottom: "1rem" }}>Resolution Pipeline</div>
      <img src="/luna/Resolution.png" alt="LUNA resolution pipeline" style={{ width: "100%", maxWidth: 860, display: "block" }} />
    </div>

    {/* Four RE entity types */}
    <div className="luna-grid-4col" style={{ marginTop: "2rem", maxWidth: 960 }}>
      {reTypes.map((t, i) => (
        <div key={i} className="luna-card-bordered" style={{ borderLeftColor: t.color, borderLeftWidth: 4, borderLeftStyle: "solid" }}>
          <div style={{ fontSize: "0.82rem", fontWeight: 700, color: t.color, marginBottom: "0.15rem" }}>{t.label}</div>
          <div className="luna-source" style={{ marginBottom: "0.7rem" }}>{t.sub}</div>
          <div style={{ fontSize: "0.78rem", color: "#000", lineHeight: 1.6, marginBottom: "0.8rem" }}>{t.desc}</div>
          <div style={{ borderTop: "1px solid hsl(var(--pink) / 0.15)", paddingTop: "0.6rem" }}>
            <div className="luna-source" style={{ color: t.color, marginBottom: "0.2rem", opacity: 0.8 }}>Sample use cases</div>
            <div style={{ fontSize: "0.74rem", color: "hsl(var(--ink-mid))", lineHeight: 1.5 }}>{t.use}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default EntityResolutionSlide;
