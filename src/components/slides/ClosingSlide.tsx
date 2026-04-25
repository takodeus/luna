const findings = [
  {
    num: 1,
    color: "#A8185E",
    source: "IBM Institute for Business Value · November 2025",
    headline: "AI ambition and data readiness have separated into two different conversations",
    body: "A global study of 1,700 CDOs across 27 geographies finds that while 81% report their data strategy is integrated with their technology roadmap, only 26% are confident their data can support new AI-enabled revenue streams. The ambition is nearly universal. The infrastructure to act on it is not.",
  },
  {
    num: 2,
    color: "#1B70B1",
    source: "Bain and Company · March 2026",
    headline: "The architecture that worked for models does not work for agents",
    body: "Bain finds that 80% of generative AI use cases met or exceeded expectations, yet only 23% of companies can tie those initiatives to measurable revenue gains or cost reductions. The technology performed. The infrastructure beneath it could not convert performance into outcome. Realizing agentic AI at scale requires a shift to shared context, orchestration layers, and embedded governance.",
  },
  {
    num: 3,
    color: "#23A98E",
    source: "BCG · February 2026",
    headline: "Early movers are not just ahead. They are pulling away.",
    body: "BCG finds that enterprises investing in centralized governance, reusable orchestration layers, and platform-level policy enforcement move from concept to production in weeks, not months. The compounding effect is structural: governed data enables better agent performance, which enables more sophisticated automation, which generates more reliable data. The gap widens with every deployment cycle.",
  },
];

const footnotes = [
  "1. IBM Institute for Business Value, \"Chief Data Officers Redefine Strategies as AI Ambitions Outpace Readiness,\" November 2025.",
  "2. Bain and Company, \"Why Agentic AI Demands a New Architecture,\" March 2026.",
  "3. BCG, \"The $200 Billion Agentic AI Opportunity for Tech Service Providers,\" February 2026.",
];

const ClosingSlide = () => (
  <section className="slide" id="s13" style={{ background: "#FBF8F9" }}>
    <div className="slide-n">xiii / The Next Architectural Imperative</div>

    <h2 className="luna-h2">
      The Next Architectural Imperative
      <br />Is the Semantic Layer
    </h2>
    <p style={{ fontFamily: "var(--serif)", fontSize: "clamp(1rem, 1.6vw, 1.2rem)", fontStyle: "italic", color: "#A8185E", lineHeight: 1.5, maxWidth: 760, margin: "0.5rem 0 0" }}>
      The reasoning era cannot run on reporting-era infrastructure.
    </p>

    <p style={{ fontFamily: "var(--serif)", fontSize: "1.15rem", fontWeight: 600, fontStyle: "italic", color: "#A8185E", lineHeight: 1.55, margin: "1.4rem 0 0", maxWidth: 820 }}>
      From talk to trust.
    </p>

    {/* Three evidence cards */}
    <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginTop: "2rem", maxWidth: 900 }}>
      {findings.map((f) => (
        <div key={f.num} style={{ background: "#fff", borderLeft: `4px solid ${f.color}`, padding: "1.2rem 1.8rem" }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: "0.70rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: f.color, marginBottom: "0.4rem" }}>
            {f.source}
          </div>
          <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "#000", lineHeight: 1.4, marginBottom: "0.5rem" }}>
            {f.headline}
            <sup style={{ fontSize: "0.6em", color: f.color, fontWeight: 700, marginLeft: "1px" }}>{f.num}</sup>
          </div>
          <div style={{ fontSize: "0.82rem", color: "#000", lineHeight: 1.7 }}>{f.body}</div>
        </div>
      ))}
    </div>

    {/* Close — body as text, closing sentence in pink */}
    <div style={{ marginTop: "2rem", maxWidth: 900, display: "flex", flexDirection: "column", gap: "1rem" }}>
      <p style={{ fontSize: "0.90rem", color: "#000", lineHeight: 1.85, margin: 0, maxWidth: 820 }}>
        Tech debt taught enterprises that architecture sets the ceiling on what the business can do next. When that ceiling is reached, incremental improvement is no longer enough. The layer holding the enterprise back has to be rebuilt.
      </p>
      <p style={{ fontFamily: "var(--serif)", fontSize: "1.15rem", fontWeight: 600, fontStyle: "italic", color: "#A8185E", lineHeight: 1.55, margin: 0, maxWidth: 820 }}>
        Data debt is the same problem, one layer up.
      </p>
      <p style={{ fontSize: "0.90rem", color: "#000", lineHeight: 1.85, margin: 0, maxWidth: 820 }}>
        The constraint is not data scarcity. It is data that lacks the meaning agents need to reason from: governed definitions, resolved identities, traceable context, and decision lineage.
      </p>
      <p style={{ fontSize: "0.90rem", color: "#000", lineHeight: 1.85, margin: 0, maxWidth: 820 }}>
        More data will not solve it. Better data will not solve it. The challenge is architectural. To move from reporting to reasoning, enterprises need a layer that can translate data into meaning and meaning into decisions.
      </p>
      <p style={{ fontSize: "0.90rem", color: "#000", lineHeight: 1.85, margin: 0, maxWidth: 820 }}>
        Organizations that build that layer are preparing for the next era of enterprise AI. Organizations that do not are trying to run a reasoning economy on reporting infrastructure.
      </p>

      <p style={{ fontFamily: "var(--serif)", fontSize: "1.15rem", fontWeight: 600, fontStyle: "italic", color: "#A8185E", lineHeight: 1.55, margin: 0, maxWidth: 820 }}>
        That is what makes data debt the new tech debt.
      </p>
    </div>

    {/* Footnotes */}
    <div style={{ marginTop: "1.5rem", maxWidth: 900, display: "flex", flexDirection: "column", gap: "0.2rem" }}>
      {footnotes.map((fn, i) => (
        <div key={i} style={{ fontFamily: "var(--mono)", fontSize: "0.58rem", color: "hsl(var(--ink-light))", lineHeight: 1.5, letterSpacing: "0.04em" }}>{fn}</div>
      ))}
    </div>
  </section>
);

export default ClosingSlide;
