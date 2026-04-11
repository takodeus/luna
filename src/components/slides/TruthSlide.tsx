const layers = [
  {
    num: "01",
    name: "Ontology",
    tag: "What things are",
    color: "var(--green)",
    bg: "#f0f7f3",
    desc: "A shared vocabulary for every object in real estate — property, tenant, fund, lease, operator, market. Without it, the word 'property' in Yardi and 'property' in a JV partner's system are just two strings that happen to match. With it, they are the same concept, consistently defined across every source.",
    cherre: "Cherre's real estate ontology covers 50+ entity types — built and validated over 10 years across $3.7T AUM.",
  },
  {
    num: "02",
    name: "Semantic Layer",
    tag: "How things are measured",
    color: "var(--blue)",
    bg: "#f0f4fb",
    desc: "Governed definitions for every metric: what 'occupancy' means, which leases count, what the denominator is, who can change the rule and when. Every agent, every analyst, and every report draws from the same governed formula — not a local guess. One metric definition, enforced at query time.",
    cherre: "Cherre's semantic layer is versioned and queryable. Definition changes are tracked, not silently applied.",
  },
  {
    num: "03",
    name: "Context Graph",
    tag: "Why things happened",
    color: "hsl(var(--pink))",
    bg: "hsl(var(--pink-light))",
    desc: "The chain of events and relationships behind every metric. When renewal rates drop 12%, the context graph connects that number to the property manager transition eight months ago, the deferred maintenance backlog, and the competitor incentive campaign in the submarket. The agent stops reporting a number and starts explaining what drove it.",
    cherre: "This is Cherre's primary moat. The context graph is built from 10 years of entity resolution across 150+ real estate data sources.",
  },
  {
    num: "04",
    name: "Reasoning Layer",
    tag: "What should happen next",
    color: "hsl(var(--pink-mid))",
    bg: "hsl(var(--foreground))",
    dark: true,
    desc: "Synthesis across all three layers into a recommendation that is explainable, traceable, and defensible. Not 'occupancy is 87%.' Instead: 'Occupancy is 87% by the GAAP-adjusted formula, down 4pts from Q2, driven primarily by the PM transition at these three assets — recommended action is operational, not pricing.'",
    cherre: "Agent-grade reasoning requires all three layers below it to be stable. Without them, AI improvises — and produces outputs no one can stand behind.",
  },
];

const KnowledgeGraphSlide = () => (
  <section className="slide" id="s7">
    <div className="slide-n">vii — The Knowledge Graph</div>
    <h2 className="luna-h2">
      Four layers. One question:
      <br />
      <span className="luna-accent">can your AI explain what it knows?</span>
    </h2>
    <p className="luna-sub" style={{ marginBottom: 0 }}>
      Cherre's knowledge graph is the intelligence infrastructure between the system of record and every AI agent that queries it. Each layer handles a distinct problem. All four are required before agent outputs can be trusted.
    </p>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5px", background: "hsl(var(--rule))", border: "1px solid hsl(var(--rule))", marginTop: "2.5rem", maxWidth: 960 }}>
      {layers.map((layer, i) => (
        <div key={i} style={{ background: layer.dark ? "hsl(var(--foreground))" : layer.bg, padding: "2rem 2.2rem", borderLeft: `4px solid ${layer.color}`, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "0.8rem" }}>
            <span className="font-mono-luna" style={{ fontSize: "0.58rem", color: layer.color, letterSpacing: "0.2em" }}>{layer.num}</span>
            <span style={{ fontSize: "1.1rem", fontWeight: 700, color: layer.dark ? "#fff" : "inherit" }}>{layer.name}</span>
            <span className="font-mono-luna" style={{ fontSize: "0.6rem", color: layer.dark ? "rgba(240,235,243,0.35)" : "hsl(var(--ink-light))", letterSpacing: "0.12em", textTransform: "uppercase" }}>{layer.tag}</span>
          </div>
          <p style={{ fontSize: "0.83rem", color: layer.dark ? "rgba(240,235,243,0.75)" : "hsl(var(--ink-mid))", lineHeight: 1.65, margin: 0 }}>{layer.desc}</p>
          <div style={{ paddingTop: "0.8rem", borderTop: `1px solid ${layer.dark ? "rgba(255,255,255,0.08)" : "hsl(var(--rule))"}` }}>
            <div className="font-mono-luna" style={{ fontSize: "0.54rem", letterSpacing: "0.16em", textTransform: "uppercase", color: layer.color, marginBottom: "0.3rem", opacity: 0.8 }}>Cherre</div>
            <div style={{ fontSize: "0.78rem", color: layer.dark ? "rgba(240,235,243,0.5)" : "hsl(var(--ink-light))", fontStyle: "italic", lineHeight: 1.5 }}>{layer.cherre}</div>
          </div>
        </div>
      ))}
    </div>

    {/* Four-Question Test */}
    <div style={{ marginTop: "2.5rem", maxWidth: 960 }}>
      <div className="font-mono-luna" style={{ fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "hsl(var(--ink-light))", marginBottom: "1rem" }}>The Four-Question Test — A well-designed knowledge architecture answers all four simultaneously</div>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.83rem" }}>
        <thead>
          <tr style={{ background: "hsl(var(--foreground))", color: "#f0ebf3" }}>
            {["Question", "Layer", "What it enables"].map((h) => (
              <th key={h} style={{ padding: "0.7rem 1rem", textAlign: "left", fontFamily: "var(--mono)", fontSize: "0.58rem", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500 }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            { q: "What is this thing?", qColor: "hsl(var(--green))", layer: "Ontology", enables: "Stable meaning across systems, teams, agents, and time." },
            { q: "How is it measured?", qColor: "hsl(var(--blue))", layer: "Semantic Layer", enables: "Governed, consistent business logic every user and agent can trust." },
            { q: "What is happening around it?", qColor: "hsl(var(--amber))", layer: "Context Graph", enables: "Provenance, explanation trails, and process awareness." },
            { q: "What should happen next?", qColor: "hsl(var(--pink))", layer: "Reasoning", enables: "Grounded synthesis that supports judgment and action." },
          ].map((row, i) => (
            <tr key={i} style={{ borderBottom: "1px solid hsl(var(--rule))", background: i % 2 === 0 ? "#fff" : "hsl(var(--bg-alt))" }}>
              <td style={{ padding: "0.85rem 1rem", borderLeft: `4px solid ${row.qColor}`, color: row.qColor, fontWeight: 500 }}>{row.q}</td>
              <td style={{ padding: "0.85rem 1rem", fontWeight: 600 }}>{row.layer}</td>
              <td style={{ padding: "0.85rem 1rem", color: "hsl(var(--ink-mid))" }}>{row.enables}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ background: "hsl(var(--pink-light))", border: "1px solid hsl(var(--pink-border))", padding: "0.9rem 1rem", marginTop: "1.5px", fontSize: "0.83rem", fontWeight: 500, color: "hsl(var(--pink))", textAlign: "center" }}>
        If the system can answer all four with grounded, consistent, and traceable responses, the architecture is working.
      </div>
    </div>
  </section>
);

export default KnowledgeGraphSlide;
