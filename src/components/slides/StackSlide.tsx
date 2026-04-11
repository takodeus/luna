const StackSlide = () => (
  <section className="slide" id="s7">
    <div className="slide-n">vii — The Stack &amp; The Empty Layer</div>
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
          <div className="sl sl-luna">Luna — Intelligence Architecture<span>Semantic governance · provenance · meaning · truth arbitration</span></div>
          <div className="font-mono-luna" style={{ textAlign: "center", color: "hsl(var(--ink-light))", fontSize: "0.7rem", padding: "0.2rem", letterSpacing: "0.1em" }}>↑ structured data ↑</div>
          <div className="sl sl-innov">Systems of Innovation<span>Analytics, ML pipelines, copilot interfaces</span></div>
          <div className="sl sl-empty">← The Fragmented Layer →<span>Semantic governance exists in pieces — no governed whole. No incumbent has built it.</span></div>
          <div className="sl sl-record" style={{ opacity: 0.6 }}>Systems of Record<span>Yardi · MRI · Argus · Chatham — Provenance &amp; Trust, not intelligence</span></div>
        </div>
      </div>

      {/* Gartner placeholder */}
      <div>
        <div className="gartner-fig">
          <div className="gartner-img-wrap">
            <div className="gartner-placeholder">
              <div className="gartner-placeholder-label">Gartner Fig. 4</div>
              <div className="gartner-placeholder-name">Semantic Layer Market — Pressure Diagram</div>
              <div className="gartner-placeholder-hint">Upload PNG to display</div>
            </div>
          </div>
          <p className="gartner-footnote">
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
            <td style={{ fontSize: "0.82rem", color: "hsl(var(--ink-mid))" }}>Leasing, underwriting, compliance, portfolio agents operating with governed context</td>
            <td><span className="pace-new-tag">Built to Act</span></td>
          </tr>
          <tr>
            <td><span className="pace-mode pace-mode-innov">Mode 2</span></td>
            <td><div className="pace-system">Systems of Innovation</div><div className="pace-system-sub">Intelligence &amp; adaptation</div></td>
            <td style={{ fontSize: "0.82rem", color: "hsl(var(--ink-mid))" }}>Analytics, ML pipelines, decision support, copilots</td>
            <td></td>
          </tr>
          <tr>
            <td><span className="pace-mode pace-mode-diff">Mode 1+</span></td>
            <td><div className="pace-system">Systems of Differentiation</div><div className="pace-system-sub">Orchestration &amp; ontologies</div></td>
            <td style={{ fontSize: "0.82rem", color: "hsl(var(--ink-mid))" }}>Semantic governance layer — the currently fragmented, unclaimed position</td>
            <td className="font-mono-luna" style={{ fontSize: "0.6rem", color: "hsl(var(--pink))" }}>Contested</td>
          </tr>
          <tr>
            <td><span className="pace-mode pace-mode-record">Mode 1</span></td>
            <td><div className="pace-system">Systems of Record</div><div className="pace-system-sub">Provenance &amp; trust</div></td>
            <td style={{ fontSize: "0.82rem", color: "hsl(var(--ink-mid))" }}>Yardi, MRI, Argus, VTS, Chatham — transaction ledger, regulatory anchor, no longer strategic layer</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <div className="gartner-fig" style={{ marginTop: "2rem" }}>
        <div className="gartner-img-wrap">
          <div className="gartner-placeholder">
            <div className="gartner-placeholder-label">Gartner Fig. 6 or Fig. 9</div>
            <div className="gartner-placeholder-name">Composite Semantic Layer Architecture / Knowledge Graph-Powered Semantic Layer</div>
            <div className="gartner-placeholder-hint">Upload PNG to display</div>
          </div>
        </div>
        <p className="gartner-footnote">SOURCE: Gartner, Christopher Long, "Rethink Semantic Layers to Support the Future of Analytics and AI," April 2025 (G00826629). Reproduced with attribution.</p>
      </div>
    </div>
  </section>
);

export default StackSlide;
