const agentSystems = [
  { name: "Portfolio agent",     sub: "Analytics + alerts" },
  { name: "Leasing agent",       sub: "NL + workflows" },
  { name: "Risk agent",          sub: "Scoring + lineage" },
  { name: "Acquisitions agent",  sub: "Comp + signals" },
];

const StackSlide = () => (
  <section className="slide" id="s11">
    <div className="slide-n">xi / The Empty Layer</div>
    <h2 className="luna-h2">
      Built to last. Built to change.
      <br />
      <span className="luna-accent">Built to act.</span>
    </h2>
    <p className="luna-sub" style={{ marginBottom: 0 }}>
      "The universal semantic layer has not yet been achieved by any solution or vendor." (Gartner, April 2025, G00826629). As enterprises move from systems built to store and inform toward systems built to act, the unresolved layer between systems of record and systems of action becomes strategically decisive.
    </p>

    <div style={{ marginTop: "2rem", maxWidth: 920 }}>

      {/* Agent tiles — individually deployable, unbounded */}
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", justifyContent: "center", marginBottom: "6px" }}>
        {agentSystems.map((a, i) => (
          <div key={i} style={{ border: "1.5px solid hsl(var(--pink))", padding: "0.65rem 1.1rem", background: "#fff", minWidth: 148, flex: "0 0 auto" }}>
            <div style={{ fontSize: "0.83rem", fontWeight: 600, color: "hsl(var(--pink))", marginBottom: "0.15rem" }}>{a.name}</div>
            <div style={{ fontFamily: "var(--mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "hsl(var(--ink-light))" }}>{a.sub}</div>
          </div>
        ))}
        <div style={{ border: "1.5px dashed hsl(var(--pink-border))", padding: "0.65rem 1rem", background: "hsl(var(--pink-light))", display: "flex", alignItems: "center", justifyContent: "center", minWidth: 64 }}>
          <span style={{ fontFamily: "var(--mono)", fontSize: "0.70rem", letterSpacing: "0.1em", color: "hsl(var(--pink))" }}>+ more</span>
        </div>
      </div>
      <p style={{ textAlign: "center", fontStyle: "italic", fontSize: "0.78rem", color: "hsl(var(--ink-light))", margin: "0 0 4px" }}>
        Any agent, any interface. As many as the canonical data schema allows.
      </p>

      {/* Upward arrows from semantic layer to agents */}
      <div style={{ display: "flex", justifyContent: "center", gap: "3.5rem", color: "hsl(var(--pink))", fontSize: "1rem", opacity: 0.5, lineHeight: 1, margin: "2px 0" }}>
        <span>↑</span><span>↑</span><span>↑</span>
      </div>

      {/* Semantic layer — Cherre Pink, full width, the control plane */}
      <div style={{ background: "hsl(var(--pink-light))", border: "2.5px solid hsl(var(--pink))", padding: "1.3rem 2rem", textAlign: "center", width: "100%", boxSizing: "border-box" }}>
        <div style={{ fontFamily: "var(--mono)", fontSize: "0.70rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "hsl(var(--pink))", fontWeight: 700, marginBottom: "0.3rem" }}>
          Knowledge graph-powered semantic layer
        </div>
        <div style={{ fontSize: "0.82rem", color: "hsl(var(--ink-mid))", marginBottom: "0.3rem" }}>
          Entity resolution · Governed meaning · Orchestration for agents
        </div>
        <div style={{ fontFamily: "var(--mono)", fontSize: "0.64rem", letterSpacing: "0.12em", color: "hsl(var(--pink))", opacity: 0.65 }}>
          LUNA · MERIDIAN · ATLAS
        </div>
      </div>

      {/* Upward arrows from lower tiers */}
      <div style={{ display: "flex", justifyContent: "center", gap: "3.5rem", color: "hsl(var(--pink))", fontSize: "1rem", opacity: 0.35, lineHeight: 1, margin: "2px 0" }}>
        <span>↑</span><span>↑</span><span>↑</span>
      </div>

      {/* Systems of Innovation — 84% width, centered (pyramid taper) */}
      <div style={{ width: "84%", margin: "0 auto 2px", background: "hsl(var(--amber))", padding: "0.85rem 1.6rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: "0.83rem", fontWeight: 700, color: "#fff", marginBottom: "0.15rem" }}>Systems of innovation</div>
          <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.55)" }}>Intelligence and adaptation: analytics, ML pipelines, copilot interfaces</div>
        </div>
        <div style={{ fontFamily: "var(--mono)", fontSize: "0.62rem", letterSpacing: "0.12em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", flexShrink: 0, marginLeft: "1rem" }}>Mode 2</div>
      </div>

      {/* Systems of Differentiation — 92% width */}
      <div style={{ width: "92%", margin: "0 auto 2px", background: "hsl(var(--blue))", padding: "0.85rem 1.6rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: "0.83rem", fontWeight: 700, color: "#fff", marginBottom: "0.15rem" }}>Systems of differentiation</div>
          <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.55)" }}>Domain models & governed meaning: business rules, differentiating workflows</div>
        </div>
        <div style={{ fontFamily: "var(--mono)", fontSize: "0.62rem", letterSpacing: "0.12em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", flexShrink: 0, marginLeft: "1rem" }}>Mode 2</div>
      </div>

      {/* Systems of Record — 100% width, widest base */}
      <div style={{ width: "100%", background: "hsl(var(--green))", padding: "0.85rem 1.6rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: "0.83rem", fontWeight: 700, color: "#fff", marginBottom: "0.15rem" }}>Systems of record</div>
          <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)" }}>Provenance and trust: ERP, CRE platforms, operational data</div>
        </div>
        <div style={{ fontFamily: "var(--mono)", fontSize: "0.62rem", letterSpacing: "0.12em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", flexShrink: 0, marginLeft: "1rem" }}>Mode 1</div>
      </div>

    </div>

    <p className="font-mono-luna" style={{ fontSize: "0.64rem", letterSpacing: "0.08em", color: "hsl(var(--ink-light))", marginTop: "1.5rem", maxWidth: 920 }}>
      Source: Gartner's PACE-Layered Architecture
    </p>
  </section>
);

export default StackSlide;
