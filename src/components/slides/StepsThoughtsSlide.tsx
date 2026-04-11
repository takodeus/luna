const steps = [
  "Pull rent roll, unit status, and lease data from source systems",
  "Draft renewal offers based on market comps and tenant history",
  "Route maintenance work orders by priority and vendor availability",
  "Generate LP reports and variance explanations at period end",
  "Flag payment anomalies and surface them for human review",
  "Schedule inspections, update compliance records, log outcomes",
];

const thoughts = [
  "Decisions that require context no system has stored",
  "Trade-offs between tenant retention and revenue optimization",
  "Lease negotiations where relationships and risk coexist",
  "Capital allocation choices across competing asset needs",
  "Escalations where the data says one thing and judgment says another",
  "Any recommendation that must be defensible to an LP or regulator",
];

const StepsThoughtsSlide = () => (
  <section className="slide slide-alt" id="s10">
    <div className="slide-n">x — Automation vs. Judgment</div>
    <h2 className="luna-h2">
      Automate steps aggressively.
      <br />
      <span className="luna-accent">Protect judgment deliberately.</span>
    </h2>
    <p className="luna-sub" style={{ marginBottom: 0 }}>
      Every agentic workflow decomposes into two types of work. The split determines where automation can operate reliably — and where it requires governed infrastructure to do so safely.
    </p>

    <div className="svt-grid">
      <div className="svt-col svt-col-steps">
        <div className="svt-head">Steps — Agents Automate</div>
        <ul className="svt-items">
          {steps.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      </div>
      <div className="svt-col svt-col-thoughts">
        <div className="svt-head">Judgment — Humans Retain</div>
        <ul className="svt-items">
          {thoughts.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
      </div>
      <div className="svt-verdict">
        <strong>The infrastructure implication:</strong> Every step an agent automates requires governed data to execute safely. Entity resolution tells it which property it's acting on. Metric governance tells it which formula applies. The context graph tells it what changed and why. Without that infrastructure, agents automate confidently — and occasionally wrong, at scale, without a trace.
      </div>
    </div>

    <div style={{ marginTop: "2rem", padding: "1.5rem 2rem", background: "hsl(var(--pink))", borderRadius: 3, maxWidth: 860, display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
      <div className="font-serif-luna" style={{ fontSize: "3rem", fontWeight: 600, color: "#fff", lineHeight: 1, flexShrink: 0 }}>$430–550B</div>
      <div>
        <div style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.9)", fontWeight: 500, marginBottom: "0.3rem" }}>
          Annual value opportunity in real estate, construction, and development globally — all of it requiring the kind of governed, traceable AI execution that agent-grade infrastructure enables
        </div>
        <div className="font-mono-luna" style={{ fontSize: "0.58rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          McKinsey Global Institute · March 2026
        </div>
      </div>
    </div>
  </section>
);

export default StepsThoughtsSlide;
