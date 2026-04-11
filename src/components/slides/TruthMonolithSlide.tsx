const truths = [
  {
    label: "System of Record Truth",
    color: "hsl(var(--blue))",
    bg: "#f0f4fb",
    border: "#185FA5",
    items: [
      "Authoritative for transactions — GL trial balance, lease execution, payment post.",
      "Anchors compliance, audit, and regulatory reporting.",
      "Can be pulled directly when legal or financial fidelity is paramount.",
    ],
    tag: "Transactional · Authoritative · Historical",
  },
  {
    label: "Semantic Layer Truth",
    color: "hsl(var(--green))",
    bg: "#f0f7f3",
    border: "#0F6E56",
    items: [
      "Business ontology representation: Assets, Funds, Leases, Investors.",
      "\"Shared meaning\" across silos — the operating language of analytics and copilots.",
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
      "\"Truth in motion\" — facts at time of event: IoT sensor values, payment posts, lease execution milestones.",
      "Temporal resolution: effective dating, sequence of events, deltas.",
      "Crucial for AI agents reasoning about change, trends, or causality.",
    ],
    tag: "Temporal · Causal · Continuous",
  },
];

const TruthMonolithSlide = () => (
  <section className="slide slide-alt" id="s5">
    <div className="slide-n">v — Plural Truth</div>
    <h2 className="luna-h2">
      Truth is no longer monolithic.
      <br />
      <span className="luna-accent">Three kinds. Different authority. Same organization.</span>
    </h2>
    <p className="luna-sub" style={{ marginBottom: 0 }}>
      The "single source of truth" mandate worked when data was slow, centralized, and human-operated. AI agents, distributed operations, and real-time data break every one of those assumptions. The question is no longer which system is right — it's which truth applies to this decision.
    </p>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5px", background: "hsl(var(--rule))", border: "1px solid hsl(var(--rule))", marginTop: "2.5rem", maxWidth: 960 }}>
      {truths.map((t, i) => (
        <div key={i} style={{ background: t.bg, padding: "2rem 2rem", borderTop: `4px solid ${t.border}`, display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <div style={{ fontSize: "1rem", fontWeight: 700, color: t.color, marginBottom: "0.5rem" }}>{t.label}</div>
            <div className="font-mono-luna" style={{ fontSize: "0.54rem", letterSpacing: "0.14em", textTransform: "uppercase", color: t.color, opacity: 0.7 }}>{t.tag}</div>
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            {t.items.map((item, j) => (
              <li key={j} style={{ fontSize: "0.83rem", color: "hsl(var(--ink-mid))", lineHeight: 1.65, paddingLeft: "1rem", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: t.color, fontWeight: 700 }}>·</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* Governance Implications */}
    <div style={{ marginTop: "2rem", maxWidth: 960, border: `2px solid hsl(var(--pink))`, padding: "1.6rem 2rem", background: "#fff" }}>
      <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "hsl(var(--pink))", marginBottom: "0.9rem" }}>Governance Implications</div>
      <div style={{ fontSize: "0.87rem", color: "hsl(var(--ink-mid))", marginBottom: "0.8rem", lineHeight: 1.6 }}>
        <strong style={{ color: "hsl(var(--foreground))" }}>Truth arbitration</strong> becomes a governance function — not a data quality problem. When three valid truths coexist, the organization needs rules for which one governs each decision.
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
        {[
          "Which truth is authoritative for compliance?",
          "Which truth is fit for AI agents?",
          "When can event-driven truth override system truths — e.g., for real-time monitoring?",
        ].map((q, i) => (
          <div key={i} style={{ paddingLeft: "0.9rem", borderLeft: "3px solid hsl(var(--pink-border))", fontSize: "0.81rem", color: "hsl(var(--ink-mid))", lineHeight: 1.6 }}>{q}</div>
        ))}
      </div>
    </div>
  </section>
);

export default TruthMonolithSlide;
