const rows = [
  { dim: "Interaction surface", erp: "Screen UI, export, manual workflow", agent: "Governed API returning semantic context" },
  { dim: "Data freshness", erp: "Month-end batch snapshots", agent: "Continuous, event-driven, real-time" },
  { dim: "Metric definition", erp: "One number per field (NOI, occupancy)", agent: "Institutional meaning with firm-specific logic" },
  { dim: "Decision provenance", erp: "Outcome recorded, reasoning absent", agent: "Full reasoning chain, auditable by design" },
  { dim: "Multi-entity context", erp: "Schema consistent within one system", agent: "Semantic consistency across funds, vehicles, entities" },
  { dim: "Error handling", erp: "Human reviews, corrects, approves", agent: "Governed escalation paths, no human assumed" },
];

const MismatchSlide = () => (
  <section className="slide" id="s3">
    <div className="slide-n">iii — The Mismatch</div>
    <h2 className="luna-h2">
      ERPs were designed for
      <br />
      human operators. <span className="luna-accent">Agents have<br />different requirements.</span>
    </h2>

    <table className="cmp-table">
      <thead>
        <tr>
          <th style={{ width: "30%" }}>Dimension</th>
          <th className="arrow" style={{ width: "4%" }}></th>
          <th style={{ width: "29%" }}>What ERPs provide</th>
          <th className="arrow" style={{ width: "4%" }}></th>
          <th className="col-agent" style={{ width: "33%" }}>What agents require</th>
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
