const rows = [
  { dim: "What an asset is", erp: "A property ID in a schema", agent: "A resolved entity linked to ownership, fund, operator, and market across every source" },
  { dim: "What a metric means", erp: "One number per field (NOI, occupancy, renewal rate)", agent: "Governed definition with firm-specific logic, versioned and traceable" },
  { dim: "Why something changed", erp: "New value recorded, prior value overwritten", agent: "Full event chain: what changed, when, what caused it, who had authority" },
  { dim: "Data freshness", erp: "Month-end batch snapshots", agent: "Continuous, event-driven. Stale data produces stale recommendations" },
  { dim: "Cross-entity consistency", erp: "Schema consistent within the source system", agent: "Semantic consistency across funds, JV partners, third-party managers, and external sources" },
  { dim: "Audit trail", erp: "Outcome recorded, reasoning absent", agent: "Full reasoning chain: what data, which definition, whose authority, which version" },
];

const MismatchSlide = () => (
  <section className="slide" id="s3">
    <div className="slide-n">iii / What AI Agents Require</div>
    <h2 className="luna-h2">
      What AI agents require.
      <br />
      <span className="luna-accent">What the current stack returns.</span>
    </h2>
    <p className="luna-sub" style={{ marginBottom: 0 }}>
      Systems of record were built for a world where exceptions got escalated to people. AI agents do not escalate. They inherit whatever the infrastructure gives them. Every row below is a gap in what that infrastructure currently returns.
    </p>

    <div className="luna-table-scroll">
      <table className="cmp-table">
        <thead>
          <tr>
            <th style={{ width: "26%" }}>What agents need to know</th>
            <th className="arrow" style={{ width: "4%" }}></th>
            <th style={{ width: "31%" }}>What systems of record provide today</th>
            <th className="arrow" style={{ width: "4%" }}></th>
            <th className="col-agent" style={{ width: "35%" }}>What agent-grade infrastructure provides</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td>{row.dim}</td>
              <td className="arrow">→</td>
              <td className="col-erp">{row.erp}</td>
              <td className="arrow">→</td>
              <td className="col-agent">{row.agent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Rules → Reasoning */}
    <div style={{ maxWidth: 960, display: "flex", gap: "0", marginTop: "1.5rem", marginBottom: "2rem" }}>
      <div style={{ flex: "0 0 42%", background: "#F5F4F1", borderLeft: "4px solid #ccc", padding: "1.2rem 1.6rem" }}>
        <div style={{ fontFamily: "var(--mono)", fontSize: "0.60rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#666", marginBottom: "0.4rem" }}>Rules-based systems</div>
        <div style={{ fontSize: "0.82rem", color: "#333", lineHeight: 1.65 }}>A rules engine enforces policy. A human reads the exception and decides. The system records the outcome.</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 1rem", background: "#F5F4F1", fontSize: "1.4rem", color: "#A8185E", fontWeight: 700, flexShrink: 0 }}>→</div>
      <div style={{ flex: 1, background: "#A8185E", padding: "1.2rem 1.6rem" }}>
        <div style={{ fontFamily: "var(--mono)", fontSize: "0.60rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "0.4rem" }}>Reasoning-capable agents</div>
        <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.88)", lineHeight: 1.65 }}>Agents do not read exceptions. They inherit infrastructure. When the infrastructure carries incomplete meaning or no reasoning chain, the agent does not pause and ask. It proceeds.</div>
      </div>
    </div>

    {/* Gartner quote */}
    <div className="luna-pink-banner">
      <div className="luna-source" style={{ color: "rgba(255,255,255,0.5)", marginBottom: "0.6rem" }}>
        Gartner, G00826629, p. 17, on AI and BI tool semantic layers
      </div>
      <p style={{ fontSize: "1.15rem", fontWeight: 500, color: "#fff", lineHeight: 1.45, margin: "0 0 0.7rem" }}>
        Systems built on linear data models "lack the inference capabilities to move from 'what happened' to 'why it happened'."
      </p>
      <p style={{ fontSize: "0.83rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.65, margin: 0, maxWidth: 760 }}>
        Every row in the table above is a version of this gap. The agent can retrieve what the system recorded. It cannot explain what the system never stored: the meaning behind the metric, the entity behind the ID, the context behind the event. That requires a knowledge graph, not a data connection.
      </p>
    </div>
  </section>
);

export default MismatchSlide;
