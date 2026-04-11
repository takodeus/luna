const truths = [
  {
    label: "System of Record Truth",
    color: "hsl(var(--blue))",
    bg: "#f0f4fb",
    border: "hsl(var(--blue))",
    tag: "Transactional · Authoritative · Historical",
    items: [
      "Authoritative for booked transactions: GL trial balance, lease execution, payment post.",
      "Anchors compliance, audit, and regulatory reporting.",
      "The non-negotiable ground truth when legal or financial fidelity is paramount.",
    ],
  },
  {
    label: "Semantic Layer Truth",
    color: "hsl(var(--pink))",
    bg: "hsl(var(--pink-light))",
    border: "hsl(var(--pink))",
    tag: "Definitional · Governed · Shared",
    arbitration: true,
    items: [
      "Represents shared business meaning across assets, funds, leases, investors, and operating entities.",
      "Preserves definitions across time — not just across tables.",
      "Provides the governed context that analytics, copilots, and agents require to interpret record truth and event truth correctly.",
      "Serves as the arbitration layer between record truth and truth in motion.",
    ],
  },
  {
    label: "Event Stream Truth",
    color: "hsl(var(--amber))",
    bg: "#fef9ef",
    border: "hsl(var(--amber))",
    tag: "Temporal · Causal · Continuous",
    items: [
      "The state of the world at the time of the event: operational events, state changes, milestones, and observed conditions.",
      "Preserves sequence, timing, and causality — the when and the order that record systems discard.",
      "Required for AI agents reasoning about what is changing, not only what was recorded.",
    ],
  },
];

const TruthMonolithSlide = () => (
  <section className="slide slide-alt" id="s5">
    <div className="slide-n">v / Plural Truth</div>
    <h2 className="luna-h2">
      Truth is no longer monolithic.
      <br />
      <span className="luna-accent">Three kinds. Different authority. One decision fabric.</span>
    </h2>
    <p className="luna-sub" style={{ marginBottom: 0 }}>
      The "single source of truth" mandate worked for a narrower class of enterprise questions: booked transactions, centralized reporting, and human-operated workflows. AI agents, distributed operations, and real-time data expand the problem. The question is no longer only which system is authoritative. It is which form of truth governs this decision.
    </p>

    {/* Market position sentence */}
    <div style={{ margin: "1.5rem 0 0", padding: "1rem 1.4rem", background: "#fff", borderLeft: "4px solid hsl(var(--pink))", maxWidth: 960, fontSize: "0.92rem", color: "hsl(var(--foreground))", lineHeight: 1.65 }}>
      In an agentic enterprise, the winning platform is no longer only the one that stores the record. It is the one that can arbitrate meaning across record truth, semantic truth, and event truth well enough for agents to act with trust.
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr 1fr", gap: "1.5px", background: "hsl(var(--pink-border))", border: "1px solid hsl(var(--pink-border))", marginTop: "2rem", maxWidth: 960 }}>
      {truths.map((t, i) => (
        <div key={i} style={{ background: t.bg, padding: "2rem", borderTop: `4px solid ${t.border}`, display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <div style={{ fontSize: "1rem", fontWeight: 700, color: t.color, marginBottom: "0.4rem" }}>{t.label}</div>
            <div style={{ fontSize: "0.64rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: t.color, opacity: 0.7 }}>{t.tag}</div>
            {t.arbitration && (
              <div style={{ marginTop: "0.5rem", display: "inline-block", fontFamily: "var(--mono)", fontSize: "0.60rem", letterSpacing: "0.12em", textTransform: "uppercase", background: "hsl(var(--pink))", color: "#fff", padding: "0.15rem 0.6rem", borderRadius: 2 }}>
                The arbitration layer
              </div>
            )}
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.7rem" }}>
            {t.items.map((item, j) => (
              <li key={j} style={{ fontSize: "0.83rem", color: "hsl(var(--foreground))", lineHeight: 1.65, paddingLeft: "1rem", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: t.color, fontWeight: 700 }}>·</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* Governance Implications */}
    <div style={{ marginTop: "1.5px", maxWidth: 960, borderLeft: "4px solid hsl(var(--pink))", padding: "1.6rem 2rem", background: "hsl(var(--pink-light))" }}>
      <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "hsl(var(--pink))", marginBottom: "0.9rem" }}>Governance Implications</div>
      <div style={{ fontSize: "0.87rem", color: "hsl(var(--foreground))", marginBottom: "0.8rem", lineHeight: 1.65 }}>
        <strong style={{ color: "hsl(var(--pink))" }}>Truth arbitration</strong> becomes a governance function, not a data quality problem. When multiple valid truths coexist, governance determines which one is authoritative for which decision.
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
        {[
          "Which truth is authoritative for compliance?",
          "Which truth is fit for AI agents?",
          "When does event-driven truth override system truth — for example, in real-time monitoring?",
        ].map((q, i) => (
          <div key={i} style={{ paddingLeft: "0.9rem", borderLeft: "3px solid hsl(var(--pink-border))", fontSize: "0.81rem", color: "hsl(var(--foreground))", lineHeight: 1.65 }}>{q}</div>
        ))}
      </div>
    </div>
  </section>
);

export default TruthMonolithSlide;
