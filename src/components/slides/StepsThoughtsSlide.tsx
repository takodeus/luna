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
  <section className="slide" id="s11">
    <div className="slide-n">x / Automate Steps. Protect Judgment.</div>
    <h2 className="luna-h2">
      Automate steps aggressively.
      <br />
      <span className="luna-accent">Protect judgment deliberately.</span>
    </h2>
    <p className="luna-sub" style={{ marginBottom: 0 }}>
      Every agentic workflow decomposes into two types of work. The split determines where automation can operate reliably, and where it requires governed infrastructure to do so safely.
    </p>

    <div className="svt-grid">
      <div className="svt-col svt-col-steps">
        <div className="svt-head">Steps: Agents Automate</div>
        <ul className="svt-items">
          {steps.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      </div>
      <div className="svt-col svt-col-thoughts">
        <div className="svt-head">Judgment: Humans Retain</div>
        <ul className="svt-items">
          {thoughts.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
      </div>
      <div className="svt-verdict">
        <strong>The knowledge graph is what makes automation safe.</strong> Entity resolution (LUNA) tells the agent which property it is acting on across every source system. The semantic layer (MERIDIAN) tells it which metric definition governs the calculation. MERIDIAN's context graph tells it what changed and why. Without that infrastructure, agents automate confidently and occasionally wrong, at scale, without a trace.
      </div>
    </div>

  </section>
);

export default StepsThoughtsSlide;
