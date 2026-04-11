const steps = [
  "Pull context from systems (rent roll, unit status, vendor history)",
  "Draft a standardized message, notice, or work order",
  "Route for approval based on policy thresholds",
  "Schedule work, update status, log the outcome",
  "Close the loop — confirm, notify, record",
  "Flag anomalies and surface them for human review",
];

const thoughts = [
  "Exceptions that require discretion and context",
  "Trade-offs between competing stakeholder interests",
  "Decisions that carry financial or reputational risk",
  "Negotiations, escalations, and relationship moments",
  "Judgments that govern agent behavior going forward",
  "Anything requiring regulatory accountability",
];

const StepsThoughtsSlide = () => (
  <section className="slide slide-alt" id="s6">
    <div className="slide-n">vi — The Operating Model Move</div>
    <h2 className="luna-h2">
      Automate steps aggressively.
      <br />
      <span className="luna-accent">Protect thoughts deliberately.</span>
    </h2>
    <p className="luna-sub" style={{ marginBottom: 0 }}>
      Every domain decomposes into two ingredients. Getting this wrong is why most agentic deployments stall.
    </p>

    <div className="svt-grid">
      <div className="svt-col svt-col-steps">
        <div className="svt-head">Steps — Automate</div>
        <ul className="svt-items">
          {steps.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      </div>
      <div className="svt-col svt-col-thoughts">
        <div className="svt-head">Thoughts — Protect</div>
        <ul className="svt-items">
          {thoughts.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
      </div>
      <div className="svt-verdict">
        <strong>The implication for your platform:</strong> agents will own steps completely — and they need your data to do it. The question is whether you have built the meaning infrastructure that lets them execute steps safely, or whether they will improvise through your data and produce unauditable outputs.
        <br /><br />
        <span className="font-mono-luna" style={{ fontSize: "0.58rem", color: "rgba(240,235,243,0.3)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Source: McKinsey, "How Agentic AI Can Reshape Real Estate's Operating Model," March 2026
        </span>
      </div>
    </div>

    <div style={{ marginTop: "2rem", padding: "1.5rem 2rem", background: "hsl(var(--pink))", borderRadius: 3, maxWidth: 860, display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
      <div className="font-serif-luna" style={{ fontSize: "3rem", fontWeight: 600, color: "#fff", lineHeight: 1, flexShrink: 0 }}>$430–550B</div>
      <div>
        <div style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.9)", fontWeight: 500, marginBottom: "0.3rem" }}>
          Annual value opportunity in real estate, construction, and development globally
        </div>
        <div className="font-mono-luna" style={{ fontSize: "0.58rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          McKinsey Global Institute · March 2026
        </div>
      </div>
    </div>
  </section>
);

export default StepsThoughtsSlide;
