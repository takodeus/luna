const RulesReasoningSlide = () => (
  <section className="slide" id="s5">
    <div className="slide-n">v / Rules to Reasoning</div>
    <h2 className="luna-h2">
      The shift that changes
      <br />
      <span className="luna-accent">the requirement.</span>
    </h2>

    <div style={{ display: "flex", flexDirection: "column", gap: "1.5px", marginTop: "2rem", maxWidth: 860 }}>

      {/* Block 1 */}
      <div style={{ background: "hsl(var(--bg-alt))", padding: "1.6rem 2rem", borderLeft: "4px solid hsl(var(--pink-border))" }}>
        <p style={{ fontSize: "0.87rem", color: "hsl(var(--foreground))", lineHeight: 1.8, margin: 0 }}>
          Rules-based systems were designed for human operators who could fill the gaps. A rules engine enforces policy. A human reads the exception and decides. The system records the outcome.
        </p>
      </div>

      {/* Block 2 */}
      <div style={{ background: "hsl(var(--bg-alt))", padding: "1.6rem 2rem", borderLeft: "4px solid hsl(var(--pink))" }}>
        <p style={{ fontSize: "0.87rem", color: "hsl(var(--foreground))", lineHeight: 1.8, margin: 0 }}>
          Agents cannot do that. They do not read exceptions. They inherit infrastructure. When the infrastructure carries incomplete meaning or no reasoning chain, the agent does not pause and ask. It proceeds.
        </p>
      </div>

      {/* Block 3: The two shifts */}
      <div style={{ background: "hsl(var(--foreground))", padding: "2rem 2.4rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5px", marginBottom: "1.6rem" }}>
          <div style={{ padding: "1.4rem 1.8rem", background: "rgba(255,255,255,0.04)", borderTop: "2px solid rgba(255,255,255,0.12)" }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "0.5rem" }}>From</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", fontWeight: 600, color: "rgba(255,255,255,0.45)", fontStyle: "italic", marginBottom: "0.7rem" }}>Data governance</div>
            <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.65 }}>Manages format, completeness, and access. Assumes a human closes the loop.</div>
          </div>
          <div style={{ padding: "1.4rem 1.8rem", background: "rgba(255,255,255,0.04)", borderTop: "2px solid hsl(var(--pink))" }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "hsl(var(--pink-mid))", marginBottom: "0.5rem" }}>To</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", fontWeight: 600, color: "#fff", fontStyle: "italic", marginBottom: "0.7rem" }}>Semantic governance</div>
            <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.65 }}>Manages meaning, context, and the reasoning chain itself. Assumes the agent is the loop.</div>
          </div>
          <div style={{ padding: "1.4rem 1.8rem", background: "rgba(255,255,255,0.04)", borderTop: "2px solid rgba(255,255,255,0.12)" }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "0.5rem" }}>From</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", fontWeight: 600, color: "rgba(255,255,255,0.45)", fontStyle: "italic", marginBottom: "0.7rem" }}>Data lineage</div>
            <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.65 }}>Records what moved and where. The audit trail of data in transit.</div>
          </div>
          <div style={{ padding: "1.4rem 1.8rem", background: "rgba(255,255,255,0.04)", borderTop: "2px solid hsl(var(--pink))" }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "hsl(var(--pink-mid))", marginBottom: "0.5rem" }}>To</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", fontWeight: 600, color: "#fff", fontStyle: "italic", marginBottom: "0.7rem" }}>Decision lineage</div>
            <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.65 }}>Records why the agent concluded what it did: which definition applied, which authority it trusted, which version of the world it was operating on.</div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.2rem", fontFamily: "var(--serif)", fontSize: "1rem", fontStyle: "italic", color: "rgba(255,255,255,0.65)", lineHeight: 1.55 }}>
          The enterprise already has the first of each. Almost none have the second.
        </div>
      </div>

    </div>
  </section>
);

export default RulesReasoningSlide;
