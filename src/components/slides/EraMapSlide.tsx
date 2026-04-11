const col = {
  label: { fontFamily: "var(--mono)", fontSize: "0.56rem", letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "hsl(var(--ink-light))", marginBottom: "0.35rem" },
  val: { fontSize: "0.9rem", fontWeight: 500 },
};

const sep = { width: 1, background: "hsl(var(--rule))", alignSelf: "stretch", margin: "0 0.5rem", flexShrink: 0 };

const EraMapSlide = () => (
  <section className="slide slide-alt" id="s2">
    <div className="slide-n">ii — The Shift</div>
    <h2 className="luna-h2">
      Forty years. Three eras.
      <br />
      <span className="luna-accent">The knowledge graph defines Era Three.</span>
    </h2>
    <p className="luna-sub" style={{ marginBottom: 0 }}>
      Every generation of enterprise software was shaped by its defining architecture. Era Three doesn't just change who uses data — it changes what data infrastructure must be able to do. The knowledge graph is that architecture.
    </p>

    <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "3px", maxWidth: 920 }}>

      {/* Column headers */}
      <div style={{ display: "flex", gap: 0, paddingLeft: 172, paddingBottom: "0.5rem" }}>
        {["Primary user", "Core job", "Defining architecture"].map((h) => (
          <div key={h} style={{ flex: 1, fontFamily: "var(--mono)", fontSize: "0.54rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "hsl(var(--ink-light))", textAlign: "center" }}>{h}</div>
        ))}
      </div>

      {/* ERA THREE — top, highlighted */}
      <div style={{ display: "flex", alignItems: "center", background: "hsl(var(--foreground))", borderLeft: "4px solid hsl(var(--pink))", padding: "1.4rem 1.6rem", gap: 0, position: "relative" }}>
        <div style={{ width: 148, flexShrink: 0, paddingRight: "1.2rem" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "0.25rem" }}>
            <span style={{ fontFamily: "var(--mono)", fontSize: "0.54rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "hsl(var(--pink))" }}>Era Three</span>
            <span style={{ fontFamily: "var(--mono)", fontSize: "0.52rem", background: "hsl(var(--pink))", color: "#fff", padding: "0.05rem 0.4rem", borderRadius: 2, letterSpacing: "0.1em" }}>Now</span>
          </div>
          <div style={{ fontFamily: "var(--serif)", fontSize: "1.6rem", fontWeight: 600, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1 }}>2024 →</div>
        </div>
        <div style={sep} />
        <div style={{ flex: 1, textAlign: "center", padding: "0 0.8rem" }}>
          <div style={{ ...col.val, color: "hsl(var(--pink-mid))", fontWeight: 700 }}>AI agents</div>
          <div style={{ fontSize: "0.72rem", color: "rgba(240,235,243,0.4)", marginTop: "0.2rem" }}>Not humans</div>
        </div>
        <div style={sep} />
        <div style={{ flex: 1, textAlign: "center", padding: "0 0.8rem" }}>
          <div style={{ ...col.val, color: "#f0ebf3" }}>Govern meaning</div>
          <div style={{ fontSize: "0.72rem", color: "rgba(240,235,243,0.4)", marginTop: "0.2rem" }}>Interpret, act, trace</div>
        </div>
        <div style={sep} />
        <div style={{ flex: 1, textAlign: "center", padding: "0 0.8rem" }}>
          <div style={{ ...col.val, color: "hsl(var(--pink))", fontWeight: 700 }}>Knowledge Graph</div>
          <div style={{ fontSize: "0.72rem", color: "rgba(240,235,243,0.4)", marginTop: "0.2rem" }}>Context, provenance, meaning</div>
        </div>
      </div>

      {/* ERA TWO */}
      <div style={{ display: "flex", alignItems: "center", background: "#fff", borderLeft: "4px solid hsl(var(--rule))", padding: "1.2rem 1.6rem", gap: 0 }}>
        <div style={{ width: 148, flexShrink: 0, paddingRight: "1.2rem" }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: "0.54rem", letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "hsl(var(--ink-light))", marginBottom: "0.25rem" }}>Era Two</div>
          <div style={{ fontFamily: "var(--serif)", fontSize: "1.45rem", fontWeight: 600, color: "hsl(var(--foreground))", letterSpacing: "-0.02em", lineHeight: 1 }}>2005–2023</div>
        </div>
        <div style={sep} />
        <div style={{ flex: 1, textAlign: "center", padding: "0 0.8rem" }}>
          <div style={col.val}>Analysts via BI</div>
          <div style={{ fontSize: "0.72rem", color: "hsl(var(--ink-light))", marginTop: "0.2rem" }}>Dashboards, reports</div>
        </div>
        <div style={sep} />
        <div style={{ flex: 1, textAlign: "center", padding: "0 0.8rem" }}>
          <div style={col.val}>Connect systems</div>
          <div style={{ fontSize: "0.72rem", color: "hsl(var(--ink-light))", marginTop: "0.2rem" }}>Surface insights</div>
        </div>
        <div style={sep} />
        <div style={{ flex: 1, textAlign: "center", padding: "0 0.8rem" }}>
          <div style={col.val}>Data Warehouse + SaaS</div>
          <div style={{ fontSize: "0.72rem", color: "hsl(var(--ink-light))", marginTop: "0.2rem" }}>Cloud integration</div>
        </div>
      </div>

      {/* ERA ONE */}
      <div style={{ display: "flex", alignItems: "center", background: "#fff", borderLeft: "4px solid hsl(var(--rule))", padding: "1.2rem 1.6rem", gap: 0, opacity: 0.75 }}>
        <div style={{ width: 148, flexShrink: 0, paddingRight: "1.2rem" }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: "0.54rem", letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "hsl(var(--ink-light))", marginBottom: "0.25rem" }}>Era One</div>
          <div style={{ fontFamily: "var(--serif)", fontSize: "1.45rem", fontWeight: 600, color: "hsl(var(--foreground))", letterSpacing: "-0.02em", lineHeight: 1 }}>1971–2005</div>
        </div>
        <div style={sep} />
        <div style={{ flex: 1, textAlign: "center", padding: "0 0.8rem" }}>
          <div style={col.val}>Finance teams</div>
          <div style={{ fontSize: "0.72rem", color: "hsl(var(--ink-light))", marginTop: "0.2rem" }}>Accounting, audit</div>
        </div>
        <div style={sep} />
        <div style={{ flex: 1, textAlign: "center", padding: "0 0.8rem" }}>
          <div style={col.val}>Capture transactions</div>
          <div style={{ fontSize: "0.72rem", color: "hsl(var(--ink-light))", marginTop: "0.2rem" }}>Record and preserve</div>
        </div>
        <div style={sep} />
        <div style={{ flex: 1, textAlign: "center", padding: "0 0.8rem" }}>
          <div style={col.val}>ERP</div>
          <div style={{ fontSize: "0.72rem", color: "hsl(var(--ink-light))", marginTop: "0.2rem" }}>Systems of record</div>
        </div>
      </div>

    </div>

    <div className="callout" style={{ marginTop: "2rem", maxWidth: 920 }}>
      <div className="callout-title">The Era Three Implication</div>
      <div className="callout-text">
        ERPs and data warehouses were built for human operators reading reports. AI agents make API calls requiring semantic context — which definition applies, which entity owns this asset across every source, what chain of events explains the anomaly. That context has never lived in the system of record. The knowledge graph is the architecture that carries it.
      </div>
    </div>
  </section>
);

export default EraMapSlide;
