import { useState } from "react";

const breaks = [
  {
    num: "01 / 04",
    category: "Entity Resolution",
    title: "The same asset lives in five systems with five different IDs.",
    desc: "The property management system has one identifier. The investment platform has another. The JV partner's system has a third. External data providers have their own. An AI agent querying across these systems gets four records for the same asset. Without probabilistic entity resolution, it has no way to know they are the same thing.",
    egLabel: "In Practice: Multi-Source Portfolio Intelligence",
    egText: "An agent attempts to compare in-place rents against submarket benchmarks. The property identifier doesn't match across sources. The comparison fails silently, or proceeds with the wrong asset matched. The recommendation is built on a misidentification the agent has no mechanism to detect.",
  },
  {
    num: "02 / 04",
    category: "Metric Drift",
    title: "Occupancy means something different to every operator.",
    desc: "A system of record stores an occupancy figure. It doesn't store the calculation logic that produced it: whether month-to-month tenants are included, how recently vacated units are treated, what the denominator is. When an AI agent consolidates across properties managed by different operators, it adds numbers that don't mean the same thing.",
    egLabel: "In Practice: Portfolio-Level Reporting",
    egText: "A portfolio-level occupancy report is generated for an institutional client. Three property managers each apply a different occupancy definition. The consolidated figure is 91.4%. No single property actually has that occupancy. Every operator's number was locally correct. The aggregate is meaningless.",
  },
  {
    num: "03 / 04",
    category: "Missing Context",
    title: "The number exists. The reason it changed doesn't.",
    desc: "Renewal rates dropped 12% at a cluster of assets. The system of record captures the new rate. It doesn't capture that a property manager transitioned eight months ago, that two properties have deferred maintenance complaints, or that a competitor ran an incentive campaign in that submarket. The agent sees the metric. It cannot explain it.",
    egLabel: "In Practice: AI-Generated Recommendations",
    egText: "An AI agent flags underperforming assets and recommends pricing adjustments. The real cause is an operational issue, not a pricing issue. The recommendation is technically coherent and operationally wrong. Without a context graph connecting the metric to the events that explain it, the agent cannot tell the difference.",
  },
  {
    num: "04 / 04",
    category: "Decision Lineage",
    title: "The agent decided. No one can say why.",
    desc: "Data lineage records what moved. Decision lineage records why the agent concluded what it did: which definition applied, which authority it trusted, and what version of the world it was operating on. Systems of record log outcomes. Almost none log reasoning chains, and that is what agents, auditors, and LPs increasingly require.",
    egLabel: "In Practice: LP Audit and Regulatory Scrutiny",
    egText: "An institutional LP asks what data informed a lease renewal recommendation on a Class A multifamily asset. The agent generated the recommendation. The ERP recorded the outcome. Neither system can reconstruct the reasoning: which data version was active, which metric definition applied, which agent held authority. The audit produces a gap.",
  },
];

const BreaksSlide = () => {
  const [open, setOpen] = useState<Set<number>>(new Set());
  const toggle = (i: number) => setOpen(prev => {
    const next = new Set(prev);
    next.has(i) ? next.delete(i) : next.add(i);
    return next;
  });

  return (
    <section className="slide" id="s4">
      <div className="slide-n">iv / Four Structural Gaps</div>
      <h2 className="luna-h2">
        Not the model's fault.
        <br />
        <span className="luna-accent">The infrastructure beneath it.</span>
      </h2>
      <p className="luna-sub" style={{ marginBottom: 0 }}>
        Every agentic AI failure in real estate traces back to one of four structural gaps in the data layer. Expand each to see it in practice.
      </p>

      <div className="luna-accordion-list">
        {breaks.map((b, i) => {
          const isOpen = open.has(i);
          return (
            <div key={i} className="luna-accordion-item">
              <div className="luna-accordion-header">
                <span className="luna-accordion-num">{b.num}</span>
                <span className="luna-accordion-cat">{b.category}</span>
                <span className="luna-accordion-title">{b.title}</span>
              </div>

              <div className="luna-accordion-body">
                <p style={{ fontSize: "0.83rem", color: "hsl(var(--ink-mid))", lineHeight: 1.7, margin: "0 0 0.9rem", borderTop: "1px solid hsl(var(--pink) / 0.15)", paddingTop: "0.7rem" }}>
                  {b.desc}
                </p>

                <button
                  onClick={() => toggle(i)}
                  style={{
                    display: "flex", alignItems: "center", gap: "0.5rem",
                    background: "none", border: "none", cursor: "pointer",
                    padding: 0, marginBottom: isOpen ? "0.7rem" : 0,
                  }}
                >
                  <span className="luna-source" style={{ color: "#A8185E" }}>{b.egLabel}</span>
                  <span style={{ color: "#A8185E", fontSize: "0.9rem", transform: isOpen ? "rotate(90deg)" : "none", transition: "transform 0.2s", lineHeight: 1 }}>›</span>
                </button>

                {isOpen && (
                  <div style={{ background: "#fff", border: "1px solid hsl(var(--pink) / 0.15)", padding: "1rem 1.2rem", marginBottom: "0.4rem" }}>
                    <div style={{ fontSize: "0.8rem", color: "hsl(var(--ink-mid))", lineHeight: 1.65 }}>{b.egText}</div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BreaksSlide;
