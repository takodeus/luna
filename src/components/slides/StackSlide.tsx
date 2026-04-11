const agentSystems = [
  { name: "Portfolio agent",     sub: "Analytics + alerts" },
  { name: "Leasing agent",       sub: "NL + workflows" },
  { name: "Risk agent",          sub: "Scoring + lineage" },
  { name: "Acquisitions agent",  sub: "Comp + signals" },
];

const StackSlide = () => (
  <section className="slide" id="s5">
    <div className="slide-n">xi / The Empty Layer</div>
    <h2 className="luna-h2">
      Built to last. Built to change.
      <br />
      <span className="luna-accent">Built to act.</span>
    </h2>
    <p className="luna-sub" style={{ marginBottom: 0 }}>
      "The universal semantic layer has not yet been achieved by any solution or vendor." (Gartner, April 2025). As enterprises move toward systems built to act, the unresolved layer between systems of record and systems of action becomes strategically decisive.
    </p>

    <div className="luna-stack-diagram">
      {/* Agent tiles */}
      <div className="luna-agent-tiles">
        {agentSystems.map((a, i) => (
          <div key={i} className="luna-agent-tile">
            <div style={{ fontSize: "0.83rem", fontWeight: 600, color: "#A8185E", marginBottom: "0.15rem" }}>{a.name}</div>
            <div className="luna-source">{a.sub}</div>
          </div>
        ))}
        <div className="luna-agent-tile-more">
          <span className="luna-source" style={{ color: "#A8185E" }}>+ more</span>
        </div>
      </div>
      <p style={{ textAlign: "center", fontStyle: "italic", fontSize: "0.78rem", color: "hsl(var(--ink-light))", margin: "0 0 4px" }}>
        Any agent, any interface. As many as the canonical data schema allows.
      </p>

      {/* Arrows */}
      <div className="luna-stack-arrows">
        <span>↑</span><span>↑</span><span>↑</span>
      </div>

      {/* Semantic layer */}
      <div className="luna-semantic-layer">
        <div className="luna-source" style={{ color: "#A8185E", marginBottom: "0.3rem" }}>
          Knowledge graph-powered semantic layer
        </div>
        <div style={{ fontSize: "0.82rem", color: "#000", marginBottom: "0.3rem" }}>
          Entity resolution · Governed meaning · Orchestration for agents
        </div>
        <div className="luna-source" style={{ color: "#A8185E", opacity: 0.65 }}>
          LUNA · MERIDIAN · ATLAS
        </div>
      </div>

      {/* Arrows */}
      <div className="luna-stack-arrows" style={{ opacity: 0.35 }}>
        <span>↑</span><span>↑</span><span>↑</span>
      </div>

      {/* Pyramid tiers */}
      <div className="luna-pyramid-tier" style={{ width: "84%", margin: "0 auto 2px", background: "#23A98E" }}>
        <div>
          <div style={{ fontSize: "0.83rem", fontWeight: 700, color: "#fff", marginBottom: "0.15rem" }}>Systems of innovation</div>
          <div className="luna-pyramid-sub">Intelligence and adaptation: analytics, ML pipelines, copilot interfaces</div>
        </div>
        <div className="luna-pyramid-mode">Mode 2</div>
      </div>

      <div className="luna-pyramid-tier" style={{ width: "92%", margin: "0 auto 2px", background: "#611FAD" }}>
        <div>
          <div style={{ fontSize: "0.83rem", fontWeight: 700, color: "#fff", marginBottom: "0.15rem" }}>Systems of differentiation</div>
          <div className="luna-pyramid-sub">Domain models and governed meaning: business rules, differentiating workflows</div>
        </div>
        <div className="luna-pyramid-mode">Mode 2</div>
      </div>

      <div className="luna-pyramid-tier" style={{ width: "100%", background: "#1B70B1" }}>
        <div>
          <div style={{ fontSize: "0.83rem", fontWeight: 700, color: "#fff", marginBottom: "0.15rem" }}>Systems of record</div>
          <div className="luna-pyramid-sub" style={{ color: "rgba(255,255,255,0.45)" }}>Provenance and trust: ERP, CRE platforms, operational data</div>
        </div>
        <div className="luna-pyramid-mode" style={{ color: "rgba(255,255,255,0.25)" }}>Mode 1</div>
      </div>
    </div>

    <div className="luna-source" style={{ marginTop: "1.5rem", maxWidth: 920 }}>
      Source: Gartner's PACE-Layered Architecture
    </div>
  </section>
);

export default StackSlide;
