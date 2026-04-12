const EraMapSlide = () => (
  <section className="slide" id="s2">
    <div className="slide-n">ii / Three Eras. Built to Act.</div>
    <h2 className="luna-h2">
      Forty years. Three eras.
      <br />
      <span className="luna-accent">The knowledge graph defines Era Three.</span>
    </h2>
    <p className="luna-sub" style={{ marginBottom: 0 }}>
      Every generation of enterprise software was shaped by its defining architecture. Era Three does not just change who uses data. It changes what data infrastructure must be able to do. The knowledge graph is that architecture.
    </p>

    <div className="era-timeline">
      {/* ERA THREE */}
      <div className="era-row-block era-row-active">
        <div className="era-row-label">
          <div className="era-row-label-inner">
            <span className="era-row-tag" style={{ color: "rgba(255,255,255,0.7)" }}>Era Three</span>
            <span className="era-now-pill">Now</span>
          </div>
          <div className="era-row-year" style={{ color: "#fff" }}>2024 →</div>
          <div style={{ fontFamily: "var(--serif)", fontSize: "1rem", fontWeight: 700, fontStyle: "italic", color: "#fff", marginTop: "0.6rem", lineHeight: 1.2 }}>Built to act.</div>
        </div>
        <div className="era-row-cells">
          <div className="era-row-cell">
            <div className="era-cell-val" style={{ color: "#fff" }}>AI agents</div>
            <div className="era-cell-sub" style={{ color: "rgba(255,255,255,0.6)" }}>Not humans</div>
          </div>
          <div className="era-row-cell">
            <div className="era-cell-val" style={{ color: "#fff" }}>Systems of Action</div>
            <div className="era-cell-sub" style={{ color: "rgba(255,255,255,0.6)" }}>Autonomous agents</div>
          </div>
          <div className="era-row-cell">
            <div className="era-cell-val" style={{ color: "#fff" }}>Knowledge Graph</div>
            <div className="era-cell-sub" style={{ color: "rgba(255,255,255,0.6)" }}>Context, provenance, meaning</div>
          </div>
        </div>
      </div>

      {/* ERA TWO */}
      <div className="era-row-block">
        <div className="era-row-label">
          <span className="era-row-tag">Era Two</span>
          <div className="era-row-year">2005–2023</div>
          <div style={{ fontFamily: "var(--serif)", fontSize: "1rem", fontWeight: 700, fontStyle: "italic", color: "hsl(var(--ink-mid))", marginTop: "0.6rem", lineHeight: 1.2 }}>Built to inform.</div>
        </div>
        <div className="era-row-cells">
          <div className="era-row-cell">
            <div className="era-cell-val">Analysts via BI</div>
            <div className="era-cell-sub">Dashboards, reports</div>
          </div>
          <div className="era-row-cell">
            <div className="era-cell-val">Connect systems</div>
            <div className="era-cell-sub">Surface insights</div>
          </div>
          <div className="era-row-cell">
            <div className="era-cell-val">Data Warehouse + SaaS</div>
            <div className="era-cell-sub">Cloud integration</div>
          </div>
        </div>
      </div>

      {/* ERA ONE */}
      <div className="era-row-block" style={{ opacity: 0.75 }}>
        <div className="era-row-label">
          <span className="era-row-tag">Era One</span>
          <div className="era-row-year">1971–2005</div>
          <div style={{ fontFamily: "var(--serif)", fontSize: "1rem", fontWeight: 700, fontStyle: "italic", color: "hsl(var(--ink-light))", marginTop: "0.6rem", lineHeight: 1.2 }}>Built to capture.</div>
        </div>
        <div className="era-row-cells">
          <div className="era-row-cell">
            <div className="era-cell-val">Finance teams</div>
            <div className="era-cell-sub">Accounting, audit</div>
          </div>
          <div className="era-row-cell">
            <div className="era-cell-val">Capture transactions</div>
            <div className="era-cell-sub">Record and preserve</div>
          </div>
          <div className="era-row-cell">
            <div className="era-cell-val">ERP</div>
            <div className="era-cell-sub">Systems of record</div>
          </div>
        </div>
      </div>
    </div>

    {/* Beyond Rows and Columns */}
    <div className="luna-statement-block">
      <div className="luna-source" style={{ color: "hsl(var(--pink))", marginBottom: "0.8rem" }}>
        Beyond Rows and Columns
      </div>
      <p className="luna-serif-quote" style={{ margin: "0 0 0.9rem" }}>
        A data warehouse is a dictionary with no sentences. It stores terms but not the grammar that connects them: ownership chains, causal relationships, definitional history. Text-to-SQL can retrieve what was stored. It cannot infer what was never modeled.
      </p>
      <p style={{ fontSize: "0.83rem", color: "#000", lineHeight: 1.7, margin: "0 0 0.6rem" }}>
        Relational schemas and warehouses were built to store facts in rows and columns. They answer what the value is. They cannot answer what it means, how it relates, or why it changed. That is the structural limit every architecture before the knowledge graph inherits. Era One and Era Two infrastructure was not wrong for its time. It cannot do what Era Three requires.
      </p>
    </div>
  </section>
);

export default EraMapSlide;
