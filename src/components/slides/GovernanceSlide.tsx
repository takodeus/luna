const quadrants = [
  {
    label: "Entity Governance",
    bg: "#A8185E",
    engine: "Resolved by LUNA",
    items: [
      "Who owns the canonical definition of a business entity?",
      "How are conflicts between source systems resolved?",
      "How are corrections propagated across dependent systems?",
    ],
    why: "Entity governance is only possible when entity resolution exists at scale. LUNA's probabilistic matching, human override model, and correction corpus are what make canonical definitions achievable.",
  },
  {
    label: "Metric Governance",
    bg: "#A8185E",
    engine: "Governed in MERIDIAN",
    items: [
      "Where is business logic defined, and by whom?",
      "How are changes to metric definitions versioned and communicated?",
      "Which consumers are notified when logic changes?",
    ],
    why: "MERIDIAN's semantic layer is where metric definitions live as governed, versioned objects. Every query inherits the definition that was active when the decision was made.",
  },
  {
    label: "Context Governance",
    bg: "#DF2467",
    engine: "Stored in MERIDIAN",
    items: [
      "What events are captured, and at what granularity?",
      "How is provenance attributed across automated and human actions?",
      "How long is context retained, and who can query it?",
    ],
    why: "MERIDIAN's context graph turns raw events into explainable history. Without it, AI agents can report what happened but cannot explain why.",
  },
  {
    label: "Reasoning Governance",
    bg: "#A8185E",
    engine: "Traced through ATLAS",
    items: [
      "What decisions is AI permitted to make autonomously?",
      "How are AI outputs traced back to source data?",
      "What override mechanisms exist for human correction?",
    ],
    why: "ATLAS provides full query transparency and lineage back to source data. Every answer carries the reasoning chain.",
  },
];

const GovernanceSlide = () => (
  <section className="slide" id="s10">
    <div className="slide-n">ix / Governance</div>
    <h2 className="luna-h2">
      Governance is the architecture.
      <br />
      <span className="luna-accent">Not a policy layer on top of it.</span>
    </h2>
    <p className="luna-sub" style={{ marginBottom: 0 }}>
      Traditional data governance checks format, completeness, and access. The harder questions require governance embedded in the architecture itself.
    </p>

    {/* Data governance → Semantic governance */}
    <div className="luna-duo-cards" style={{ marginTop: "1.8rem", maxWidth: 960 }}>
      <div className="luna-duo-card" style={{ borderLeftColor: "hsl(var(--pink) / 0.3)" }}>
        <div className="luna-source" style={{ color: "hsl(var(--ink-light))", marginBottom: "0.35rem" }}>Data governance</div>
        <div style={{ fontSize: "0.82rem", color: "#000", lineHeight: 1.65 }}>Manages format, completeness, and access. Assumes a human closes the loop on exceptions.</div>
      </div>
      <div className="luna-duo-card" style={{ borderLeftColor: "#A8185E" }}>
        <div className="luna-source" style={{ color: "#A8185E", marginBottom: "0.35rem" }}>Semantic governance</div>
        <div style={{ fontSize: "0.82rem", color: "#000", lineHeight: 1.65 }}>Manages meaning, context, and the reasoning chain itself. Assumes the agent is the loop. These are not the same problem.</div>
      </div>
    </div>

    <div className="luna-grid-2col" style={{ marginTop: "0", maxWidth: 960 }}>
      {quadrants.map((q, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ background: q.bg, padding: "0.7rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
            <div className="luna-source" style={{ color: "#fff" }}>{q.label}</div>
            <div className="luna-source" style={{ color: "rgba(255,255,255,0.6)" }}>{q.engine}</div>
          </div>
          <div style={{ background: "#fff", padding: "1.2rem 1.5rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.9rem" }}>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.55rem" }}>
              {q.items.map((item, j) => (
                <li key={j} style={{ fontSize: "0.82rem", color: "#000", lineHeight: 1.6, paddingLeft: "0.9rem", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: q.bg, fontWeight: 700 }}>·</span>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ borderTop: "1px solid hsl(var(--pink) / 0.15)", paddingTop: "0.7rem", fontSize: "0.77rem", color: "hsl(var(--ink-mid))", lineHeight: 1.65, fontStyle: "italic" }}>
              {q.why}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default GovernanceSlide;
