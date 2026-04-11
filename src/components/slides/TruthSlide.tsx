const layers = [
  {
    num: "01",
    name: "Ontology",
    tag: "What things are",
    desc: "A shared vocabulary for every object in real estate: property, tenant, fund, lease, operator, market. Without it, the word 'property' in Yardi and 'property' in a JV partner's system are just two strings that happen to match. With it, they are the same concept, consistently defined across every source.",
    cherre: "Cherre's real estate ontology covers 50+ entity types, built and validated over 10 years across $3.7T AUM.",
  },
  {
    num: "02",
    name: "Semantic Layer",
    tag: "How things are measured",
    desc: "Governed definitions for every metric: what 'occupancy' means, which leases count, what the denominator is, who can change the rule and when. Every agent, every analyst, and every report draws from the same governed formula, not a local guess. One metric definition, enforced at query time.",
    cherre: "Cherre's semantic layer is versioned and queryable. Definition changes are tracked, not silently applied.",
  },
  {
    num: "03",
    name: "Context Graph",
    tag: "Why things happened",
    desc: "The chain of events and relationships behind every metric. When renewal rates drop 12%, the context graph connects that number to the property manager transition eight months ago, the deferred maintenance backlog, and the competitor incentive campaign in the submarket. The agent stops reporting a number and starts explaining what drove it.",
    cherre: "This is Cherre's primary moat. The context graph is built from 10 years of entity resolution across 150+ real estate data sources.",
  },
  {
    num: "04",
    name: "Reasoning Layer",
    tag: "What should happen next",
    dark: true,
    desc: "Synthesis across all three layers into a recommendation that is explainable, traceable, and defensible. Not 'occupancy is 87%.' Instead: 'Occupancy is 87% by the GAAP-adjusted formula, down 4pts from Q2, driven primarily by the PM transition at these three assets. Recommended action is operational, not pricing.'",
    cherre: "Agent-grade reasoning requires all three layers below it to be stable. Without them, AI improvises and produces outputs no one can stand behind.",
  },
];

const KnowledgeGraphSlide = () => (
  <section className="slide" id="s7">
    <div className="slide-n">vii / Four Questions, Four Layers</div>
    <h2 className="luna-h2">
      Four layers. One question:
      <br />
      <span className="luna-accent">can your AI explain what it knows?</span>
    </h2>
    <p className="luna-sub" style={{ marginBottom: 0 }}>
      Cherre's knowledge graph is the intelligence infrastructure between the system of record and every AI agent that queries it. Each layer handles a distinct problem. All four are required before agent outputs can be trusted.
    </p>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "hsl(var(--pink-border))", border: "1px solid hsl(var(--pink-border))", marginTop: "2.5rem", maxWidth: 960 }}>
      {layers.map((layer, i) => (
        <div key={i} style={{ background: layer.dark ? "hsl(var(--pink))" : "hsl(var(--pink-light))", padding: "2rem 2.2rem", borderLeft: "4px solid hsl(var(--pink))", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "0.8rem" }}>
            <span style={{ fontSize: "0.58rem", fontWeight: 600, color: layer.dark ? "rgba(255,255,255,0.6)" : "hsl(var(--pink))", letterSpacing: "0.2em" }}>{layer.num}</span>
            <span style={{ fontSize: "1.1rem", fontWeight: 600, color: layer.dark ? "#fff" : "hsl(var(--foreground))" }}>{layer.name}</span>
            <span style={{ fontSize: "0.6rem", fontWeight: 600, color: layer.dark ? "rgba(255,255,255,0.5)" : "hsl(var(--ink-light))", letterSpacing: "0.12em", textTransform: "uppercase" }}>{layer.tag}</span>
          </div>
          <p style={{ fontSize: "0.83rem", color: layer.dark ? "rgba(255,255,255,0.85)" : "hsl(var(--foreground))", lineHeight: 1.65, margin: 0 }}>{layer.desc}</p>
          <div style={{ paddingTop: "0.8rem", borderTop: `1px solid ${layer.dark ? "rgba(255,255,255,0.15)" : "hsl(var(--pink-border))"}` }}>
            <div style={{ fontSize: "0.54rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: layer.dark ? "rgba(255,255,255,0.5)" : "hsl(var(--pink))", marginBottom: "0.3rem", opacity: 0.8 }}>Cherre</div>
            <div style={{ fontSize: "0.78rem", color: layer.dark ? "rgba(255,255,255,0.6)" : "hsl(var(--ink-light))", fontStyle: "italic", lineHeight: 1.5 }}>{layer.cherre}</div>
          </div>
        </div>
      ))}
    </div>

    {/* Four-Question Test */}
    <div style={{ marginTop: "2.5rem", maxWidth: 960 }}>
      <div style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "hsl(var(--ink-light))", marginBottom: "1rem" }}>The Four-Question Test: A well-designed knowledge architecture answers all four simultaneously</div>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.83rem" }}>
        <thead>
          <tr style={{ background: "hsl(var(--pink))", color: "#fff" }}>
            {["Question", "Layer", "What it enables"].map((h) => (
              <th key={h} style={{ padding: "0.7rem 1rem", textAlign: "left", fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            { q: "What is this thing?", layer: "Ontology", enables: "Stable meaning across systems, teams, agents, and time." },
            { q: "How is it measured?", layer: "Semantic Layer", enables: "Governed, consistent business logic every user and agent can trust." },
            { q: "What is happening around it?", layer: "Context Graph", enables: "Provenance, explanation trails, and process awareness." },
            { q: "What should happen next?", layer: "Reasoning", enables: "Grounded synthesis that supports judgment and action." },
          ].map((row, i) => {
            const isLast = i === 3;
            return (
            <tr key={i} style={{ borderBottom: "1px solid hsl(var(--pink-border))", background: isLast ? "hsl(var(--pink))" : i % 2 === 0 ? "#fff" : "hsl(var(--pink-light))" }}>
              <td style={{ padding: "0.85rem 1rem", borderLeft: `4px solid ${isLast ? "rgba(255,255,255,0.4)" : "hsl(var(--pink))"}`, color: isLast ? "#fff" : "hsl(var(--pink))", fontWeight: 600 }}>{row.q}</td>
              <td style={{ padding: "0.85rem 1rem", fontWeight: 700, color: isLast ? "#fff" : "hsl(var(--foreground))" }}>{row.layer}</td>
              <td style={{ padding: "0.85rem 1rem", color: isLast ? "rgba(255,255,255,0.85)" : "hsl(var(--foreground))" }}>{row.enables}</td>
            </tr>
            );
          })}
        </tbody>
      </table>
      <div style={{ background: "hsl(var(--pink-light))", border: "1px solid hsl(var(--pink-border))", padding: "0.9rem 1rem", marginTop: "1px", fontSize: "0.83rem", fontWeight: 600, color: "hsl(var(--pink))", textAlign: "center" }}>
        If the system can answer all four with grounded, consistent, and traceable responses, the architecture is working.
      </div>
    </div>
  </section>
);

export default KnowledgeGraphSlide;
