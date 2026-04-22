const rows = [
  {
    today: "CONNECT",
    todayRole: "Brings data in from 150+ sources.",
    todayColor: "#A8185E",
    arrow: true,
    tomorrow: "LUNA",
    tomorrowRole: "Resolves what that data means — which entity is which, with confidence scores and full audit trail.",
    tomorrowColor: "#A8185E",
  },
  {
    today: "CORE",
    todayRole: "Harmonizes data through a universal model and knowledge graph.",
    todayColor: "#1B70B1",
    arrow: true,
    tomorrow: "MERIDIAN",
    tomorrowRole: "Executes the graph as a live, queryable reasoning surface. Context, not just structure.",
    tomorrowColor: "#1B70B1",
  },
  {
    today: "QUALITY",
    todayRole: "Validates, traces, and monitors every transformation.",
    todayColor: "#23A98E",
    arrow: true,
    tomorrow: "LUNA + MERIDIAN",
    tomorrowRole: "Embed provenance, confidence, and lineage into every edge and every resolution. Quality becomes structural.",
    tomorrowColor: "#23A98E",
  },
  {
    today: "ALPHA",
    todayRole: "Delivers trusted data to downstream systems and agents.",
    todayColor: "#611FAD",
    arrow: true,
    tomorrow: "ATLAS",
    tomorrowRole: "A reasoning interface that understands what the data means, not just what it contains. Agents that act, not just retrieve.",
    tomorrowColor: "#611FAD",
  },
];

const BridgeSlide = () => (
  <section className="slide" id="sb2" style={{ background: "#fff" }}>
    <div className="slide-n">ii / The Bridge</div>

    <h2 className="luna-h2">
      We did not change direction.
      <br />
      <span className="luna-accent">We went deeper.</span>
    </h2>

    <p className="luna-body-text" style={{ maxWidth: 780 }}>
      CONNECT, CORE, QUALITY, and ALPHA were built to solve the operational data problem. They still do. What changed is that we identified the primitives that make each product work, and we built them into composable, exposed infrastructure. What was implicit is now explicit. What was internal is now available to you.
    </p>

    <p
      style={{
        fontFamily: "var(--serif)",
        fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
        fontStyle: "italic",
        color: "#A8185E",
        lineHeight: 1.55,
        maxWidth: 720,
        margin: "0.5rem 0 2rem",
        borderLeft: "3px solid #A8185E",
        paddingLeft: "1.2rem",
      }}
    >
      Every capability below was already running inside your platform. We are now naming it, exposing it, and letting you build on top of it directly.
    </p>

    {/* Bridge table */}
    <div style={{ display: "flex", flexDirection: "column", gap: "2px", maxWidth: 940 }}>
      {/* Header */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 40px 1fr",
          gap: "2px",
          marginBottom: "4px",
        }}
      >
        <div
          style={{
            fontFamily: "var(--mono)",
            fontSize: "0.64rem",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "hsl(var(--ink-light))",
            padding: "0 1rem",
          }}
        >
          What you have today
        </div>
        <div />
        <div
          style={{
            fontFamily: "var(--mono)",
            fontSize: "0.64rem",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "hsl(var(--ink-light))",
            padding: "0 1rem",
          }}
        >
          What powers it next
        </div>
      </div>

      {rows.map((r) => (
        <div
          key={r.today}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 40px 1fr",
            gap: "2px",
            alignItems: "stretch",
          }}
        >
          {/* Today card */}
          <div
            style={{
              background: "#FAFAFA",
              borderLeft: `4px solid ${r.todayColor}`,
              padding: "1rem 1.2rem",
            }}
          >
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: "0.70rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: r.todayColor,
                marginBottom: "0.3rem",
              }}
            >
              {r.today}
            </div>
            <div style={{ fontSize: "0.82rem", color: "#000", lineHeight: 1.65 }}>{r.todayRole}</div>
          </div>

          {/* Arrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: r.todayColor,
              fontSize: "1.1rem",
              fontWeight: 700,
            }}
          >
            {"\u2192"}
          </div>

          {/* Tomorrow card */}
          <div
            style={{
              background: "#FAFAFA",
              borderLeft: `4px solid ${r.tomorrowColor}`,
              padding: "1rem 1.2rem",
            }}
          >
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: "0.70rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: r.tomorrowColor,
                marginBottom: "0.3rem",
              }}
            >
              {r.tomorrow}
            </div>
            <div style={{ fontSize: "0.82rem", color: "#000", lineHeight: 1.65 }}>{r.tomorrowRole}</div>
          </div>
        </div>
      ))}
    </div>

    <p
      style={{
        fontSize: "0.82rem",
        color: "#000",
        lineHeight: 1.75,
        maxWidth: 820,
        marginTop: "2rem",
      }}
    >
      This is not a product replacement. The platform you run is not going away. What you are about to see is the engine layer: the primitives that make entity resolution, graph reasoning, and agentic action possible at the depth the next era requires.
    </p>
  </section>
);

export default BridgeSlide;
