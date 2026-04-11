const truths = [
  {
    label: "System of Record Truth",
    color: "#A8185E",
    tag: "Transactional · Authoritative · Historical",
    items: [
      "Authoritative for booked transactions: GL trial balance, lease execution, payment post.",
      "Anchors compliance, audit, and regulatory reporting.",
      "The non-negotiable ground truth when legal or financial fidelity is paramount.",
    ],
  },
  {
    label: "Semantic Layer Truth",
    color: "#A8185E",
    tag: "Definitional · Governed · Shared",
    arbitration: true,
    items: [
      "Represents shared business meaning across assets, funds, leases, investors, and operating entities.",
      "Preserves definitions across time, not just across tables.",
      "Provides the governed context that analytics, copilots, and agents require to interpret record truth and event truth correctly.",
      "Serves as the arbitration layer between record truth and truth in motion.",
    ],
  },
  {
    label: "Event Stream Truth",
    color: "#DF2467",
    tag: "Temporal · Causal · Continuous",
    items: [
      "The state of the world at the time of the event: operational events, state changes, milestones, and observed conditions.",
      "Preserves sequence, timing, and causality: the when and the order that record systems discard.",
      "Required for AI agents reasoning about what is changing, not only what was recorded.",
    ],
  },
];

const TruthMonolithSlide = () => (
  <section className="slide" id="s6">
    <div className="slide-n">v / Plural Truth</div>
    <h2 className="luna-h2">
      Truth is no longer monolithic.
      <br />
      <span className="luna-accent">Three kinds. Different authority. One decision fabric.</span>
    </h2>
    <p className="luna-sub" style={{ marginBottom: 0 }}>
      The "single source of truth" mandate worked for a narrower class of enterprise questions. AI agents, distributed operations, and real-time data expand the problem. The question is no longer only which system is authoritative. It is which form of truth governs this decision.
    </p>

    <div style={{ margin: "1.5rem 0 0", padding: "1rem 1.4rem", background: "#fff", borderLeft: "4px solid #A8185E", maxWidth: 960, fontSize: "0.92rem", color: "#000", lineHeight: 1.65 }}>
      In an agentic enterprise, the winning platform is no longer only the one that stores the record. It is the one that can arbitrate meaning across record truth, semantic truth, and event truth well enough for agents to act with trust.
    </div>

    <div className="luna-grid-3col" style={{ marginTop: "2rem", maxWidth: 960 }}>
      {truths.map((t, i) => (
        <div key={i} className="luna-card-bordered" style={{ borderTopColor: t.color, borderTopWidth: 4, borderTopStyle: "solid", padding: "2rem" }}>
          <div>
            <div style={{ fontSize: "1rem", fontWeight: 700, color: t.color, marginBottom: "0.4rem" }}>{t.label}</div>
            <div style={{ fontSize: "0.64rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: t.color, opacity: 0.7 }}>{t.tag}</div>
            {t.arbitration && (
              <div style={{ marginTop: "0.5rem", display: "inline-block", fontFamily: "var(--mono)", fontSize: "0.60rem", letterSpacing: "0.12em", textTransform: "uppercase", background: "#A8185E", color: "#fff", padding: "0.15rem 0.6rem", borderRadius: 2 }}>
                The arbitration layer
              </div>
            )}
          </div>
          <ul style={{ margin: "1rem 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.7rem" }}>
            {t.items.map((item, j) => (
              <li key={j} style={{ fontSize: "0.83rem", color: "#000", lineHeight: 1.65, paddingLeft: "1rem", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: t.color, fontWeight: 700 }}>·</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* Governance Implications */}
    <div style={{ marginTop: "1.5px", maxWidth: 960, borderLeft: "4px solid #A8185E", padding: "1.6rem 2rem", background: "#fff" }}>
      <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "#A8185E", marginBottom: "0.9rem" }}>Governance Implications</div>
      <div style={{ fontSize: "0.87rem", color: "#000", marginBottom: "0.8rem", lineHeight: 1.65 }}>
        <strong style={{ color: "#A8185E" }}>Truth arbitration</strong> becomes a governance function, not a data quality problem.
      </div>
      <div className="luna-grid-3col">
        {[
          "Which truth is authoritative for compliance?",
          "Which truth is fit for AI agents?",
          "When does event-driven truth override system truth, for example in real-time monitoring?",
        ].map((q, i) => (
          <div key={i} style={{ paddingLeft: "0.9rem", borderLeft: "3px solid hsl(var(--pink) / 0.2)", fontSize: "0.81rem", color: "#000", lineHeight: 1.65 }}>{q}</div>
        ))}
      </div>
    </div>
  </section>
);

export default TruthMonolithSlide;
