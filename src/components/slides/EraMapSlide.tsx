const col = {
  label: { fontSize: "0.70rem", fontWeight: 600 as const, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "hsl(var(--ink-light))", marginBottom: "0.35rem" },
  val: { fontSize: "0.9rem", fontWeight: 600 as const },
};

const sep = { width: 1, background: "hsl(var(--pink-border))", alignSelf: "stretch", margin: "0 0.5rem", flexShrink: 0 };

const EraMapSlide = () => (
  <section className="slide slide-alt" id="s2">
    <div className="slide-n">ii / Era Three: Knowledge Graph</div>
    <h2 className="luna-h2">
      Forty years. Three eras.
      <br />
      <span className="luna-accent">The knowledge graph defines Era Three.</span>
    </h2>
    <p className="luna-sub" style={{ marginBottom: 0 }}>
      Every generation of enterprise software was shaped by its defining architecture. Era Three doesn't just change who uses data. It changes what data infrastructure must be able to do. The knowledge graph is that architecture.
    </p>

    <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1px", maxWidth: 920, background: "hsl(var(--pink-border))", border: "1px solid hsl(var(--pink-border))" }}>

      {/* Column headers */}
      <div style={{ display: "flex", gap: 0, paddingLeft: 172, paddingBottom: "0.64rem", paddingTop: "0.64rem", background: "#fff" }}>
        {["Primary user", "Core job", "Defining architecture"].map((h) => (
          <div key={h} style={{ flex: 1, fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "hsl(var(--ink-light))", textAlign: "center" }}>{h}</div>
        ))}
      </div>

      {/* ERA THREE */}
      <div style={{ display: "flex", alignItems: "center", background: "hsl(var(--pink))", borderLeft: "4px solid hsl(var(--accent))", padding: "1.4rem 1.6rem", gap: 0, position: "relative" }}>
        <div style={{ width: 148, flexShrink: 0, paddingRight: "1.2rem" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "0.64rem", marginBottom: "0.25rem" }}>
            <span style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>Era Three</span>
            <span style={{ fontSize: "0.64rem", fontWeight: 600, background: "#fff", color: "hsl(var(--pink))", padding: "0.05rem 0.4rem", borderRadius: 2, letterSpacing: "0.1em" }}>Now</span>
          </div>
          <div style={{ fontSize: "1.6rem", fontWeight: 600, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1 }}>2024 →</div>
        </div>
        <div style={{ ...sep as any, background: "rgba(255,255,255,0.2)" }} />
        <div style={{ flex: 1, textAlign: "center", padding: "0 0.8rem" }}>
          <div style={{ ...col.val, color: "#fff", fontWeight: 600 }}>AI agents</div>
          <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.6)", marginTop: "0.2rem" }}>Not humans</div>
        </div>
        <div style={{ ...sep as any, background: "rgba(255,255,255,0.2)" }} />
        <div style={{ flex: 1, textAlign: "center", padding: "0 0.8rem" }}>
          <div style={{ ...col.val, color: "#fff" }}>Systems of Action</div>
          <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.6)", marginTop: "0.2rem" }}>Autonomous agents</div>
          <div style={{ fontSize: "0.64rem", color: "rgba(255,255,255,0.4)", marginTop: "0.15rem", fontFamily: "var(--mono)", letterSpacing: "0.1em" }}>Reasoning-capable · Built to act</div>
        </div>
        <div style={{ ...sep as any, background: "rgba(255,255,255,0.2)" }} />
        <div style={{ flex: 1, textAlign: "center", padding: "0 0.8rem" }}>
          <div style={{ ...col.val, color: "#fff", fontWeight: 600 }}>Knowledge Graph</div>
          <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.6)", marginTop: "0.2rem" }}>Context, provenance, meaning</div>
        </div>
      </div>

      {/* ERA TWO */}
      <div style={{ display: "flex", alignItems: "center", background: "#fff", borderLeft: "4px solid hsl(var(--pink-border))", padding: "1.2rem 1.6rem", gap: 0 }}>
        <div style={{ width: 148, flexShrink: 0, paddingRight: "1.2rem" }}>
          <div style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "hsl(var(--ink-light))", marginBottom: "0.25rem" }}>Era Two</div>
          <div style={{ fontSize: "1.45rem", fontWeight: 600, color: "hsl(var(--foreground))", letterSpacing: "-0.02em", lineHeight: 1 }}>2005–2023</div>
        </div>
        <div style={sep as any} />
        <div style={{ flex: 1, textAlign: "center", padding: "0 0.8rem" }}>
          <div style={col.val}>Analysts via BI</div>
          <div style={{ fontSize: "0.72rem", color: "hsl(var(--ink-light))", marginTop: "0.2rem" }}>Dashboards, reports</div>
          <div style={{ fontSize: "0.64rem", color: "hsl(var(--ink-light))", opacity: 0.55, marginTop: "0.15rem", fontFamily: "var(--mono)", letterSpacing: "0.1em" }}>Rules-based · Built to inform</div>
        </div>
        <div style={sep as any} />
        <div style={{ flex: 1, textAlign: "center", padding: "0 0.8rem" }}>
          <div style={col.val}>Connect systems</div>
          <div style={{ fontSize: "0.72rem", color: "hsl(var(--ink-light))", marginTop: "0.2rem" }}>Surface insights</div>
        </div>
        <div style={sep as any} />
        <div style={{ flex: 1, textAlign: "center", padding: "0 0.8rem" }}>
          <div style={col.val}>Data Warehouse + SaaS</div>
          <div style={{ fontSize: "0.72rem", color: "hsl(var(--ink-light))", marginTop: "0.2rem" }}>Cloud integration</div>
        </div>
      </div>

      {/* ERA ONE */}
      <div style={{ display: "flex", alignItems: "center", background: "#fff", borderLeft: "4px solid hsl(var(--pink-border))", padding: "1.2rem 1.6rem", gap: 0, opacity: 0.75 }}>
        <div style={{ width: 148, flexShrink: 0, paddingRight: "1.2rem" }}>
          <div style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "hsl(var(--ink-light))", marginBottom: "0.25rem" }}>Era One</div>
          <div style={{ fontSize: "1.45rem", fontWeight: 600, color: "hsl(var(--foreground))", letterSpacing: "-0.02em", lineHeight: 1 }}>1971–2005</div>
        </div>
        <div style={sep as any} />
        <div style={{ flex: 1, textAlign: "center", padding: "0 0.8rem" }}>
          <div style={col.val}>Finance teams</div>
          <div style={{ fontSize: "0.72rem", color: "hsl(var(--ink-light))", marginTop: "0.2rem" }}>Accounting, audit</div>
        </div>
        <div style={sep as any} />
        <div style={{ flex: 1, textAlign: "center", padding: "0 0.8rem" }}>
          <div style={col.val}>Capture transactions</div>
          <div style={{ fontSize: "0.72rem", color: "hsl(var(--ink-light))", marginTop: "0.2rem" }}>Record and preserve</div>
          <div style={{ fontSize: "0.64rem", color: "hsl(var(--ink-light))", opacity: 0.55, marginTop: "0.15rem", fontFamily: "var(--mono)", letterSpacing: "0.1em" }}>Rules-based · Built to capture</div>
        </div>
        <div style={sep as any} />
        <div style={{ flex: 1, textAlign: "center", padding: "0 0.8rem" }}>
          <div style={col.val}>ERP</div>
          <div style={{ fontSize: "0.72rem", color: "hsl(var(--ink-light))", marginTop: "0.2rem" }}>Systems of record</div>
        </div>
      </div>

    </div>

    {/* Style A: serif statement — Beyond Data Connections */}
    <div style={{ borderTop: "3px solid hsl(var(--pink))", paddingTop: "1.6rem", marginTop: "2rem", maxWidth: 920 }}>
      <div style={{ fontFamily: "var(--mono)", fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "hsl(var(--pink))", marginBottom: "0.8rem" }}>
        Beyond Data Connections
      </div>
      <p style={{ fontFamily: "var(--serif)", fontSize: "1.35rem", fontWeight: 600, fontStyle: "italic", color: "hsl(var(--foreground))", lineHeight: 1.4, margin: "0 0 0.9rem" }}>
        Linear data connections were built for human operators reading reports. They cannot draw inferred relationships, resolve entities across sources, or carry context across a query. That is what every architecture before the knowledge graph was.
      </p>
      <p style={{ fontSize: "0.83rem", color: "hsl(var(--ink-mid))", lineHeight: 1.7, margin: "0 0 0.6rem" }}>
        Industry analysis is unambiguous on this: systems built on relational schemas and text-to-SQL are bound to linear connections. They cannot draw inferred relationships across sources. That capability is structurally unavailable without a knowledge graph. Era One and Era Two infrastructure was not wrong for its time. It is insufficient for Era Three.
      </p>
      <div style={{ fontFamily: "var(--mono)", fontSize: "0.64rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "hsl(var(--ink-light))" }}>
        Gartner, April 2025
      </div>
    </div>
  </section>
);

export default EraMapSlide;
