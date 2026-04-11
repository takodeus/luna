const StackSlide = () => {
  const base = import.meta.env.BASE_URL ?? "/";
  const imgPath = `${base}gartner-fig4.png`.replace("//", "/");

  return (
    <section className="slide" id="s11">
      <div className="slide-n">xi — The Stack &amp; The Empty Layer</div>
      <h2 className="luna-h2">
        The universal semantic layer
        <br />
        <span className="luna-accent">
          has not yet been achieved
          <br />
          by any organization or vendor.
        </span>
      </h2>
      <p style={{ fontSize: "0.82rem", color: "hsl(var(--ink-light))", marginTop: "0.5rem" }}>
        Gartner, April 2025 (G00826629)
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start", marginTop: "2.5rem", maxWidth: 960 }}>

        {/* Stack Diagram */}
        <div>
          <div className="stack-head">Agentic Stack — 2027+</div>
          <div className="stack-col">
            <div className="sl sl-action">Systems of Action<span>Autonomous agents: leasing, underwriting, compliance, portfolio</span></div>
            <div className="font-mono-luna" style={{ textAlign: "center", color: "hsl(var(--pink))", fontSize: "0.7rem", padding: "0.2rem", letterSpacing: "0.1em" }}>↑ governed context ↑</div>
            <div className="sl sl-luna">Cherre — Intelligence Architecture<span>Semantic governance · entity resolution · context graph · meaning</span></div>
            <div className="font-mono-luna" style={{ textAlign: "center", color: "hsl(var(--ink-light))", fontSize: "0.7rem", padding: "0.2rem", letterSpacing: "0.1em" }}>↑ structured data ↑</div>
            <div className="sl sl-innov">Systems of Innovation<span>Analytics, ML pipelines, copilot interfaces</span></div>
            <div className="sl sl-empty">← The Fragmented Layer →<span>No incumbent owns this. The semantic layer is contested, incomplete, and unbuilt at real estate scale.</span></div>
            <div className="sl sl-record" style={{ opacity: 0.6 }}>Systems of Record<span>Yardi · MRI · Argus · Chatham — Provenance &amp; Trust, not intelligence</span></div>
          </div>
        </div>

        {/* Gartner Fig 4 */}
        <div>
          <div className="gartner-fig">
            <div className="gartner-img-wrap" style={{ minHeight: "auto", background: "none", padding: 0 }}>
              <img
                src={imgPath}
                alt="Gartner Figure 4: Semantic Layer Market — market pressure converging on traditional semantic layer platforms from BI reporting, data management, and AI/DSML platforms"
                style={{ width: "100%", display: "block", border: "1px solid hsl(var(--rule))" }}
              />
            </div>
            <p className="gartner-footnote" style={{ marginTop: "0.75rem" }}>
              SOURCE: Gartner, Christopher Long, "Rethink Semantic Layers to Support the Future of Analytics and AI," April 2025 (G00826629). Reproduced with attribution. Gartner does not endorse any vendor, product or service depicted.
            </p>
          </div>
        </div>

      </div>

      {/* Pace table */}
      <div style={{ marginTop: "2.5rem" }}>
        <table className="pace-table">
          <thead>
            <tr>
              <th>Mode</th>
              <th>Layer</th>
              <th>What it does</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="pace-row-new">
              <td><span className="pace-mode pace-mode-action">Mode 3 · New</span></td>
              <td><div className="pace-system">Systems of Action</div><div className="pace-system-sub">Autonomous agents</div></td>
              <td style={{ fontSize: "0.82rem", color: "hsl(var(--ink-mid))" }}>Leasing, underwriting, compliance, portfolio agents — operating with governed context</td>
              <td><span className="pace-new-tag">Built to Act</span></td>
            </tr>
            <tr>
              <td><span className="pace-mode pace-mode-innov">Mode 2</span></td>
              <td><div className="pace-system">Systems of Innovation</div><div className="pace-system-sub">Intelligence &amp; adaptation</div></td>
              <td style={{ fontSize: "0.82rem", color: "hsl(var(--ink-mid))" }}>Analytics, ML pipelines, decision support, copilot interfaces</td>
              <td></td>
            </tr>
            <tr>
              <td><span className="pace-mode pace-mode-diff">Mode 1+</span></td>
              <td><div className="pace-system">Systems of Differentiation</div><div className="pace-system-sub">Semantic governance layer</div></td>
              <td style={{ fontSize: "0.82rem", color: "hsl(var(--ink-mid))" }}>Ontology, entity resolution, metric governance, context graph — the currently fragmented, unclaimed layer</td>
              <td className="font-mono-luna" style={{ fontSize: "0.6rem", color: "hsl(var(--pink))" }}>Contested</td>
            </tr>
            <tr>
              <td><span className="pace-mode pace-mode-record">Mode 1</span></td>
              <td><div className="pace-system">Systems of Record</div><div className="pace-system-sub">Provenance &amp; trust</div></td>
              <td style={{ fontSize: "0.82rem", color: "hsl(var(--ink-mid))" }}>Yardi, MRI, Argus, VTS, Chatham — the transaction ledger. Necessary, but no longer the strategic layer.</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default StackSlide;
