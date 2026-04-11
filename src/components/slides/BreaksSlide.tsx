import { useState } from "react";

const breaks = [
  {
    num: "01 / 04",
    category: "Entity Resolution",
    title: "The same asset lives in five systems with five different IDs.",
    desc: "The property management system has one identifier. The investment platform has another. The JV partner's system has a third. External data providers have their own. An AI agent querying across these systems gets four records for the same asset. Without probabilistic entity resolution, it has no way to know they are the same thing.",
    egLabel: "In Practice — Multi-Source Portfolio Intelligence",
    egText: "An agent attempts to compare in-place rents against submarket benchmarks. The property identifier doesn't match across sources. The comparison fails silently — or proceeds with the wrong asset matched. The recommendation is built on a misidentification the agent has no mechanism to detect.",
  },
  {
    num: "02 / 04",
    category: "Metric Drift",
    title: "Occupancy means something different to every operator.",
    desc: "A system of record stores an occupancy figure. It doesn't store the calculation logic that produced it: whether month-to-month tenants are included, how recently-vacated units are treated, what the denominator is. When an AI agent consolidates across properties managed by different operators, it adds numbers that don't mean the same thing.",
    egLabel: "In Practice — Portfolio-Level Reporting",
    egText: "A portfolio-level occupancy report is generated for an institutional client. Three property managers each apply a different occupancy definition. The consolidated figure is 91.4%. No single property actually has that occupancy. Every operator's number was locally correct. The aggregate is meaningless.",
  },
  {
    num: "03 / 04",
    category: "Missing Context",
    title: "The number exists. The reason it changed doesn't.",
    desc: "Renewal rates dropped 12% at a cluster of assets. The system of record captures the new rate. It doesn't capture that a property manager transitioned eight months ago, that two properties have deferred maintenance complaints, or that a competitor ran an incentive campaign in that submarket. The agent sees the metric. It cannot explain it.",
    egLabel: "In Practice — AI-Generated Recommendations",
    egText: "An AI agent flags underperforming assets and recommends pricing adjustments. The real cause is an operational issue — not a pricing issue. The recommendation is technically coherent and operationally wrong. Without a context graph connecting the metric to the events that explain it, the agent cannot tell the difference.",
  },
  {
    num: "04 / 04",
    category: "Decision Traceability",
    title: "The agent decided. No one can say why.",
    desc: "An AI copilot that cannot explain its reasoning is a liability, not an asset. When a leasing recommendation is challenged, a renewal offer is disputed, or an LP asks what data drove a revaluation, the answer has to exist in the system — not in someone's memory. Systems of record log outcomes. They don't log reasoning chains.",
    egLabel: "In Practice — LP Audit · Regulatory Scrutiny",
    egText: "An institutional LP asks what data informed a lease renewal recommendation on a Class A multifamily asset. The agent generated the recommendation. The ERP recorded the outcome. Neither system can reconstruct the reasoning: which data version was active, which metric definition applied, which agent held authority. The audit produces a gap.",
  },
];

const BreaksSlide = () => {
  const [open, setOpen] = useState<Set<number>>(new Set([0, 1, 2, 3]));
  const toggle = (i: number) => setOpen(prev => {
    const next = new Set(prev);
    next.has(i) ? next.delete(i) : next.add(i);
    return next;
  });

  return (
    <section className="slide slide-alt" id="s4">
      <div className="slide-n">iv — Four Structural Gaps</div>
      <h2 className="luna-h2">
        Not the model's fault.
        <br />
        <span className="luna-accent">The infrastructure beneath it.</span>
      </h2>
      <p className="luna-sub" style={{ marginBottom: 0 }}>
        Every agentic AI failure in real estate traces back to one of four structural gaps in the data layer. Click each to expand.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginTop: "2rem", maxWidth: 900 }}>
        {breaks.map((b, i) => {
          const isOpen = open.has(i);
          return (
            <div
              key={i}
              style={{
                background: isOpen ? "#fff" : "hsl(var(--bg-alt))",
                border: `1px solid ${isOpen ? "hsl(var(--pink-border))" : "hsl(var(--rule))"}`,
                borderLeft: `4px solid ${isOpen ? "hsl(var(--pink))" : "hsl(var(--rule))"}`,
                transition: "border-color 0.15s, background 0.15s",
              }}
            >
              {/* Header — always visible */}
              <button
                onClick={() => toggle(i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.2rem",
                  padding: "1.1rem 1.4rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span style={{ fontFamily: "var(--mono)", fontSize: "0.54rem", letterSpacing: "0.16em", textTransform: "uppercase", color: isOpen ? "hsl(var(--pink))" : "hsl(var(--ink-light))", flexShrink: 0, minWidth: 56 }}>{b.num}</span>
                <span style={{ fontFamily: "var(--mono)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: isOpen ? "hsl(var(--pink))" : "hsl(var(--ink-mid))", flexShrink: 0, minWidth: 140 }}>{b.category}</span>
                <span style={{ fontSize: "0.88rem", fontWeight: 500, color: "hsl(var(--foreground))", flex: 1 }}>{b.title}</span>
                <span style={{ color: "hsl(var(--ink-light))", fontSize: "1.1rem", flexShrink: 0, transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s", lineHeight: 1 }}>›</span>
              </button>

              {/* Expanded content */}
              {isOpen && (
                <div style={{ padding: "0 1.4rem 1.4rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <p style={{ fontSize: "0.83rem", color: "hsl(var(--ink-mid))", lineHeight: 1.7, margin: 0, paddingTop: "0.25rem", borderTop: "1px solid hsl(var(--rule))" }}>
                    {b.desc}
                  </p>
                  <div style={{ background: "hsl(var(--bg-alt))", border: "1px solid hsl(var(--rule))", padding: "1rem 1.2rem" }}>
                    <div style={{ fontFamily: "var(--mono)", fontSize: "0.54rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "hsl(var(--pink))", marginBottom: "0.5rem" }}>{b.egLabel}</div>
                    <div style={{ fontSize: "0.8rem", color: "hsl(var(--ink-mid))", lineHeight: 1.65 }}>{b.egText}</div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BreaksSlide;
