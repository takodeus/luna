const quadrants = [
  {
    label: "Entity Governance",
    color: "#fff",
    bg: "hsl(var(--green))",
    engine: "Resolved by LUNA",
    items: [
      "Who owns the canonical definition of a business entity?",
      "How are conflicts between source systems resolved?",
      "How are corrections propagated across dependent systems?",
    ],
    why: "Entity governance is only possible when entity resolution exists at scale. LUNA's probabilistic matching, human override model, and correction corpus are what make canonical definitions achievable rather than aspirational.",
  },
  {
    label: "Metric Governance",
    color: "#fff",
    bg: "hsl(var(--blue))",
    engine: "Governed in MERIDIAN",
    items: [
      "Where is business logic defined, and by whom?",
      "How are changes to metric definitions versioned and communicated?",
      "Which consumers are notified when logic changes?",
    ],
    why: "MERIDIAN's semantic layer is where metric definitions live as governed, versioned objects. Every query against the knowledge graph inherits the definition that was active when the decision was made.",
  },
  {
    label: "Context Governance",
    color: "#fff",
    bg: "hsl(var(--amber))",
    engine: "Stored in MERIDIAN",
    items: [
      "What events are captured, and at what granularity?",
      "How is provenance attributed across automated and human actions?",
      "How long is context retained, and who can query it?",
    ],
    why: "MERIDIAN's context graph turns raw events into explainable history. Without it, AI agents can report what happened but cannot explain why. Provenance, dependencies, and decision traces live here, queryable at any point in time.",
  },
  {
    label: "Reasoning Governance",
    color: "#fff",
    bg: "hsl(var(--pink))",
    engine: "Traced through ATLAS",
    items: [
      "What decisions is AI permitted to make autonomously?",
      "How are AI outputs traced back to source data?",
      "What override mechanisms exist for human correction?",
    ],
    why: "ATLAS provides full query transparency and lineage back to source data. Every answer an agent produces carries the reasoning chain: which entity was resolved, which metric definition applied, which context was active.",
  },
];

const GovernanceSlide = () => (
  <section className="slide" id="s11">
    <div className="slide-n">ix / Governance</div>
    <h2 className="luna-h2">
      Governance is the architecture.
      <br />
      <span className="luna-accent">Not a policy layer on top of it.</span>
    </h2>
    <p className="luna-sub" style={{ marginBottom: 0 }}>
      Traditional data governance checks format, completeness, and access. The harder questions require governance embedded in the architecture itself, answered by the same infrastructure that makes knowledge graphs work.
    </p>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5px", background: "hsl(var(--rule))", border: "1px solid hsl(var(--rule))", marginTop: "2.5rem", maxWidth: 960 }}>
      {quadrants.map((q, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ background: q.bg, padding: "0.7rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div className="font-mono-luna" style={{ fontSize: "0.62rem", letterSpacing: "0.14em", textTransform: "uppercase", color: q.color, fontWeight: 600 }}>{q.label}</div>
            <div className="font-mono-luna" style={{ fontSize: "0.64rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>{q.engine}</div>
          </div>
          <div style={{ background: "#fff", padding: "1.2rem 1.5rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.9rem" }}>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.55rem" }}>
              {q.items.map((item, j) => (
                <li key={j} style={{ fontSize: "0.82rem", color: "hsl(var(--foreground))", lineHeight: 1.6, paddingLeft: "0.9rem", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: q.bg, fontWeight: 700 }}>·</span>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ borderTop: "1px solid hsl(var(--rule))", paddingTop: "0.7rem", fontSize: "0.77rem", color: "hsl(var(--ink-mid))", lineHeight: 1.65, fontStyle: "italic" }}>
              {q.why}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default GovernanceSlide;
