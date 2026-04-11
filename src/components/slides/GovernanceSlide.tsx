const quadrants = [
  {
    label: "Entity Governance",
    color: "#fff",
    bg: "hsl(var(--green))",
    items: [
      "Who owns the canonical definition of a business entity?",
      "How are conflicts between source systems resolved?",
      "How are corrections propagated across dependent systems?",
    ],
  },
  {
    label: "Metric Governance",
    color: "#fff",
    bg: "hsl(var(--blue))",
    items: [
      "Where is business logic defined — and by whom?",
      "How are changes to metric definitions versioned and communicated?",
      "Which consumers are notified when logic changes?",
    ],
  },
  {
    label: "Context Governance",
    color: "#fff",
    bg: "hsl(var(--amber))",
    items: [
      "What events are captured, and at what granularity?",
      "How is provenance attributed across automated and human actions?",
      "How long is context retained, and who can query it?",
    ],
  },
  {
    label: "Reasoning Governance",
    color: "#fff",
    bg: "hsl(var(--pink))",
    items: [
      "What decisions is AI permitted to make autonomously?",
      "How are AI outputs traced back to source data?",
      "What override mechanisms exist for human correction?",
    ],
  },
];

const GovernanceSlide = () => (
  <section className="slide" id="s8">
    <div className="slide-n">viii — Governance</div>
    <h2 className="luna-h2">
      Governance is the architecture.
      <br />
      <span className="luna-accent">Not a policy layer on top of it.</span>
    </h2>
    <p className="luna-sub" style={{ marginBottom: 0 }}>
      Data governance checks format, completeness, and access. The harder questions — are interpretations consistent, are definitions versioned, can AI decisions be traced — require a different kind of governance embedded in the architecture itself.
    </p>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5px", background: "hsl(var(--rule))", border: "1px solid hsl(var(--rule))", marginTop: "2.5rem", maxWidth: 900 }}>
      {quadrants.map((q, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ background: q.bg, padding: "0.75rem 1.5rem" }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: "0.62rem", letterSpacing: "0.14em", textTransform: "uppercase", color: q.color, fontWeight: 600 }}>{q.label}</div>
          </div>
          <div style={{ background: "#fff", padding: "1.4rem 1.5rem", flex: 1 }}>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {q.items.map((item, j) => (
                <li key={j} style={{ fontSize: "0.83rem", color: "hsl(var(--ink-mid))", lineHeight: 1.6, paddingLeft: "0.9rem", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: q.bg, fontWeight: 700 }}>·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>

    <div className="callout" style={{ marginTop: "2rem", maxWidth: 900 }}>
      <div className="callout-title">Why This Matters for AI</div>
      <div className="callout-text">
        Traditional data governance checks whether data is present and correctly formatted. It doesn't ask whether definitions are consistent across decisions, whether context is retained long enough to explain an outcome, or whether an agent's recommendation can be traced back to source data with authority. Those questions require governance embedded at the architecture level — not applied after the fact.
      </div>
    </div>
  </section>
);

export default GovernanceSlide;
