const breaks = [
  {
    num: "01 / 04 — Entity Resolution",
    title: "The same property lives in five systems with five IDs.",
    desc: "Yardi has a property ID. Yardi Matrix has a different one. A JV partner's system has a third. External data providers have their own. Virtuoso queries across these systems and gets four records for the same asset. Without probabilistic entity resolution, it cannot know they are the same thing.",
    egLabel: "In Practice — Virtuoso · Yardi Matrix",
    egText: "A Virtuoso agent compares in-place rents against Matrix submarket benchmarks. The property identifier doesn't match. The comparison fails silently — or worse, proceeds with the wrong asset matched. The recommendation is built on a misidentification the agent has no way to detect.",
  },
  {
    num: "02 / 04 — Metric Drift",
    title: "Occupancy means something different to every operator.",
    desc: "Yardi stores an occupancy figure. It doesn't store the calculation logic that produced it: whether month-to-month tenants are included, how recently-vacated units are treated, what the denominator is. When Virtuoso consolidates across properties managed by different operators, it adds numbers that don't mean the same thing.",
    egLabel: "In Practice — Virtuoso · Multi-Operator Portfolios",
    egText: "A portfolio-level occupancy report is generated for an institutional client. Three property managers each use a different occupancy definition inside Yardi. The consolidated figure is 91.4%. No single property actually has that occupancy. Every operator's number was locally correct. The aggregate is meaningless.",
  },
  {
    num: "03 / 04 — Missing Context",
    title: "The number exists. The reason it changed doesn't.",
    desc: "Renewal rates dropped 12% at a cluster of assets. Yardi records the new rate. It doesn't record that a property manager transitioned eight months ago, that two properties have deferred maintenance complaints, or that a competitor ran an incentive campaign in that submarket. Virtuoso sees the metric. It cannot explain it.",
    egLabel: "In Practice — Virtuoso Recommendations",
    egText: "Virtuoso flags underperforming assets and recommends pricing adjustments. The real cause is an operational issue — not a pricing issue. The recommendation is technically coherent and operationally wrong. Without a context graph connecting the metric to the events that explain it, the agent cannot tell the difference.",
  },
  {
    num: "04 / 04 — Decision Traceability",
    title: "Virtuoso decided. No one can say why.",
    desc: "An AI copilot that cannot explain its reasoning is a liability, not an asset. When a leasing recommendation is challenged, a renewal offer is disputed, or an LP asks what data drove a revaluation, the answer has to exist in the system — not in the memory of the analyst who approved it. ERPs record outcomes. They don't record reasoning chains.",
    egLabel: "In Practice — LP Audit · Regulatory Scrutiny",
    egText: "An institutional LP asks what data informed a lease renewal recommendation on a Class A multifamily asset. Virtuoso generated the recommendation. Yardi recorded the outcome. Neither system can reconstruct the reasoning: which data version was active, which metric definition applied, which agent had authority. The audit produces a gap.",
  },
];

const BreaksSlide = () => (
  <section className="slide slide-alt" id="s4">
    <div className="slide-n">iv — Four Structural Gaps</div>
    <h2 className="luna-h2">
      Not Virtuoso's fault.
      <br />
      <span className="luna-accent">The infrastructure beneath it.</span>
    </h2>

    <div className="breaks-grid">
      {breaks.map((b, i) => (
        <div className="break-cell" key={i}>
          <div className="break-num">{b.num}</div>
          <div className="break-title">{b.title}</div>
          <div className="break-desc">{b.desc}</div>
          <div className="break-eg">
            <div className="break-eg-lbl">{b.egLabel}</div>
            <div className="break-eg-text">{b.egText}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default BreaksSlide;
