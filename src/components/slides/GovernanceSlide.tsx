import ArchitectureDiagram from "../ArchitectureDiagram";

const quadrants = [
  {
    label: "Entity Governance",
    bg: "#23A98E",
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
    bg: "#1B70B1",
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
    bg: "#CC5800",
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
  <section className="slide" id="s10" style={{ justifyContent: "flex-start", minHeight: "auto" }}>
    <div className="slide-n">x / Governance Is the Architecture</div>
    <h2 className="luna-h2">
      Governance is the architecture.
      <br />
      <span className="luna-accent">Not a policy layer on top of it.</span>
    </h2>
    <p className="luna-sub" style={{ marginBottom: 0 }}>
      Traditional data governance checks format, completeness, and access. The harder questions require governance embedded in the architecture itself.
    </p>

    {/* Data governance → Semantic governance: asymmetric shift */}
    <div style={{ marginTop: "1.8rem", maxWidth: 960, display: "flex", gap: "0" }}>
      {/* Left: prior model — muted */}
      <div style={{ flex: "0 0 42%", background: "#F5F4F1", borderLeft: "4px solid #ccc", padding: "1.4rem 1.8rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontFamily: "var(--mono)", fontSize: "0.60rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#777", marginBottom: "0.4rem" }}>The prior model</div>
        <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "#333", marginBottom: "0.4rem" }}>Data governance</div>
        <div style={{ fontSize: "0.80rem", color: "#444", lineHeight: 1.6 }}>Manages format, completeness, and access. Assumes a human closes the loop on exceptions.</div>
      </div>
      {/* Arrow */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 1rem", background: "#F5F4F1", fontSize: "1.4rem", color: "#A8185E", fontWeight: 700, flexShrink: 0 }}>→</div>
      {/* Right: required — strong */}
      <div style={{ flex: 1, background: "#A8185E", padding: "1.4rem 1.8rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontFamily: "var(--mono)", fontSize: "0.60rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "0.4rem" }}>Required for agents</div>
        <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#fff", marginBottom: "0.4rem" }}>Semantic governance</div>
        <div style={{ fontSize: "0.80rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.6 }}>Manages meaning, context, and the reasoning chain itself. Assumes the agent is the loop. These are not the same problem.</div>
      </div>
    </div>

    <div className="luna-grid-2col" style={{ marginTop: "2rem", maxWidth: 960 }}>
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

    <p style={{ fontFamily: "var(--serif)", fontSize: "1.15rem", fontWeight: 600, fontStyle: "italic", color: "#A8185E", lineHeight: 1.55, margin: "2.5rem 0 0", maxWidth: 820 }}>
      This is what the architecture looks like when governance is structural.
    </p>

    <ArchitectureDiagram />
  </section>
);

export default GovernanceSlide;
