const rows = [
  { dim: "What an asset is", erp: "A property ID in a schema", agent: "A resolved entity linked to ownership, fund, operator, and market — across every source" },
  { dim: "What a metric means", erp: "One number per field (NOI, occupancy, renewal rate)", agent: "Governed definition with firm-specific logic, versioned and traceable" },
  { dim: "Why something changed", erp: "New value recorded, prior value overwritten", agent: "Full event chain: what changed, when, what caused it, who had authority" },
  { dim: "Data freshness", erp: "Month-end batch snapshots", agent: "Continuous, event-driven — stale data produces stale recommendations" },
  { dim: "Cross-entity consistency", erp: "Schema consistent within the source system", agent: "Semantic consistency across funds, JV partners, third-party managers, and external sources" },
  { dim: "Audit trail", erp: "Outcome recorded, reasoning absent", agent: "Full reasoning chain — what data, which definition, whose authority, which version" },
];

const MismatchSlide = () => (
  <section className="slide" id="s3">
    <div className="slide-n">iii — The Gap</div>
    <h2 className="luna-h2">
      What AI agents require.
      <br />
      <span className="luna-accent">What the current stack returns.</span>
    </h2>
    <p className="luna-sub" style={{ marginBottom: 0 }}>
      Systems of record were designed for human operators who could fill gaps with judgment. AI agents cannot. Every row below is a query an agent will issue — and a structural gap in what today's data layer can return.
    </p>

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
  </section>
);

export default MismatchSlide;
