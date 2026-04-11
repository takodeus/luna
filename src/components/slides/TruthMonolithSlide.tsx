const truths = [
  {
    label: "System of Record Truth",
    color: "hsl(var(--pink))",
    bg: "hsl(var(--pink-light))",
    border: "hsl(var(--pink))",
    items: [
      "Authoritative for transactions: GL trial balance, lease execution, payment post.",
      "Anchors compliance, audit, and regulatory reporting.",
      "Can be pulled directly when legal or financial fidelity is paramount.",
    ],
    tag: "Transactional · Authoritative · Historical",
  },
  {
    label: "Semantic Layer Truth",
    color: "hsl(var(--pink))",
    bg: "hsl(var(--pink-light))",
    border: "hsl(var(--accent))",
    items: [
      "Business ontology representation: Assets, Funds, Leases, Investors.",
      "Shared meaning across silos, the operating language of analytics and copilots.",
      "Becomes the operating fabric for cross-team workflows and decision support.",
    ],
    tag: "Definitional · Governed · Shared",
  },
  {
    label: "Event Stream Truth",
    color: "hsl(var(--pink))",
    bg: "hsl(var(--pink-light))",
    border: "hsl(var(--pink))",
    items: [
      "Truth in motion: facts at time of event including IoT sensor values, payment posts, lease execution milestones.",
      "Temporal resolution: effective dating, sequence of events, deltas.",
      "Crucial for AI agents reasoning about change, trends, or causality.",
    ],
    tag: "Temporal · Causal · Continuous",
  },
];

const TruthMonolithSlide = () => (
  <section className="slide slide-alt" id="s5">
    <div className="slide-n">v / Plural Truth</div>
    <h2 className="luna-h2">
      Truth is no longer monolithic.
      <br />
      <span className="luna-accent">Three kinds. Different authority. Same system.</span>
    </h2>
    <p className="luna-sub" style={{ marginBottom: 0 }}>
      The "single source of truth" mandate worked when data was slow, centralized, and human-operated. AI agents, distributed operations, and real-time data break every one of those assumptions. The question is no longer which system is right. It's which truth applies to this decision.
    </p>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1px", background: "hsl(var(--pink-border))", border: "1px solid hsl(var(--pink-border))", marginTop: "2.5rem", maxWidth: 960 }}>
      {truths.map((t, i) => (
        <div key={i} style={{ background: t.bg, padding: "2rem 2rem", borderTop: `4px solid ${t.border}`, display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <div style={{ fontSize: "1rem", fontWeight: 600, color: t.color, marginBottom: "0.64rem" }}>{t.label}</div>
            <div style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: t.color, opacity: 0.7 }}>{t.tag}</div>
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            {t.items.map((item, j) => (
              <li key={j} style={{ fontSize: "0.83rem", color: "hsl(var(--foreground))", lineHeight: 1.65, paddingLeft: "1rem", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: t.color, fontWeight: 700 }}>·</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* Governance Implications */}
    <div style={{ marginTop: "2rem", maxWidth: 960, borderLeft: "4px solid hsl(var(--pink))", padding: "1.6rem 2rem", background: "hsl(var(--pink-light))" }}>
      <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "hsl(var(--pink))", marginBottom: "0.9rem" }}>Governance Implications</div>
      <div style={{ fontSize: "0.87rem", color: "hsl(var(--foreground))", marginBottom: "0.8rem", lineHeight: 1.6 }}>
        <strong style={{ color: "hsl(var(--pink))" }}>Truth arbitration</strong> becomes a governance function, not a data quality problem. When three valid truths coexist, the system needs rules for which one governs each decision.
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
        {[
          "Which truth is authoritative for compliance?",
          "Which truth is fit for AI agents?",
          "When can event-driven truth override system truths, for example in real-time monitoring?",
        ].map((q, i) => (
          <div key={i} style={{ paddingLeft: "0.9rem", borderLeft: "3px solid hsl(var(--pink-border))", fontSize: "0.81rem", color: "hsl(var(--foreground))", lineHeight: 1.6 }}>{q}</div>
        ))}
      </div>
    </div>
  </section>
);

export default TruthMonolithSlide;
