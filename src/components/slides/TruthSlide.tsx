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
    desc: "Governed definitions for every metric: what 'occupancy' means, which leases count, what the denominator is, who can change the rule and when. Every agent, every analyst, and every report draws from the same governed formula, not a local guess.",
    cherre: "Cherre's semantic layer is versioned and queryable. Definition changes are tracked, not silently applied.",
  },
  {
    num: "03",
    name: "Context Graph",
    tag: "Why things happened",
    desc: "The chain of events and relationships behind every metric. When renewal rates drop 12%, the context graph connects that number to the property manager transition eight months ago, the deferred maintenance backlog, and the competitor incentive campaign in the submarket.",
    cherre: "MERIDIAN's context graph is built from LUNA's ten years of entity resolution across 150+ real estate data sources.",
  },
  {
    num: "04",
    name: "Reasoning Layer",
    tag: "What should happen next",
    dark: true,
    desc: "Synthesis across all three layers into a recommendation that is explainable, traceable, and defensible. Not 'occupancy is 87%.' Instead: 'Occupancy is 87% by the GAAP-adjusted formula, down 4pts from Q2, driven primarily by the PM transition at these three assets.'",
    cherre: "Agent-grade reasoning requires all three layers below it to be stable. Without them, AI improvises and produces outputs no one can stand behind.",
  },
];

const KnowledgeGraphSlide = () => (
  <section className="slide" id="s8">
    <div className="slide-n">vii / Four Questions, Four Layers</div>
    <h2 className="luna-h2">
      Four layers. One question:
      <br />
      <span className="luna-accent">can your AI explain what it knows?</span>
    </h2>
    <p className="luna-sub" style={{ marginBottom: 0 }}>
      Cherre's knowledge graph is the intelligence infrastructure between the system of record and every AI agent that queries it.
    </p>

    <div className="luna-grid-2col" style={{ marginTop: "2.5rem", maxWidth: 960 }}>
      {layers.map((layer, i) => (
        <div key={i} style={{ background: layer.dark ? "#A8185E" : "#fff", padding: "2rem", borderLeft: "4px solid #A8185E", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "0.8rem", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.70rem", fontWeight: 600, color: layer.dark ? "rgba(255,255,255,0.6)" : "#A8185E", letterSpacing: "0.2em" }}>{layer.num}</span>
            <span style={{ fontSize: "1.1rem", fontWeight: 600, color: layer.dark ? "#fff" : "#000" }}>{layer.name}</span>
            <span className="luna-source" style={{ color: layer.dark ? "rgba(255,255,255,0.5)" : "hsl(var(--ink-light))" }}>{layer.tag}</span>
          </div>
          <p style={{ fontSize: "0.83rem", color: layer.dark ? "rgba(255,255,255,0.85)" : "#000", lineHeight: 1.65, margin: 0 }}>{layer.desc}</p>
          <div style={{ paddingTop: "0.8rem", borderTop: `1px solid ${layer.dark ? "rgba(255,255,255,0.15)" : "hsl(var(--pink) / 0.15)"}` }}>
            <div className="luna-source" style={{ color: layer.dark ? "rgba(255,255,255,0.5)" : "#A8185E", marginBottom: "0.3rem" }}>Cherre</div>
            <div style={{ fontSize: "0.78rem", color: layer.dark ? "rgba(255,255,255,0.6)" : "hsl(var(--ink-light))", fontStyle: "italic", lineHeight: 1.5 }}>{layer.cherre}</div>
          </div>
        </div>
      ))}
    </div>

    {/* Four-Question Test */}
    <div style={{ marginTop: "2.5rem", maxWidth: 960 }}>
      <div className="luna-source" style={{ marginBottom: "1rem" }}>The Four-Question Test</div>
      <div className="luna-table-scroll">
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.83rem", minWidth: 600 }}>
          <thead>
            <tr style={{ background: "#A8185E", color: "#fff" }}>
              {["Question", "Layer", "What it enables"].map((h) => (
                <th key={h} style={{ padding: "0.7rem 1rem", textAlign: "left", fontSize: "0.70rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { q: "What is this thing?",        layer: "Ontology",       enables: "Stable meaning across systems, teams, agents, and time.",                           color: "#23A98E" },
              { q: "How is it measured?",         layer: "Semantic Layer", enables: "Governed, consistent business logic every user and agent can trust.",                color: "#A8185E" },
              { q: "What is happening around it?",layer: "Context Graph",  enables: "Provenance, explanation trails, and process awareness.",                            color: "#CC5800" },
              { q: "What should happen next?",    layer: "Reasoning",      enables: "Grounded synthesis that supports judgment and action.",                             color: "#611FAD" },
            ].map((row, i) => (
              <tr key={i} style={{ borderBottom: "1px solid #eee", background: "#fff" }}>
                <td style={{ padding: "0.85rem 1rem", borderLeft: `4px solid ${row.color}`, color: row.color, fontWeight: 600 }}>{row.q}</td>
                <td style={{ padding: "0.85rem 1rem", fontWeight: 700, color: "#000" }}>{row.layer}</td>
                <td style={{ padding: "0.85rem 1rem", color: "#000" }}>{row.enables}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ background: "#A8185E", padding: "1.2rem 2rem", marginTop: "2px" }}>
        <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#fff", textAlign: "center", lineHeight: 1.5 }}>
          If the system can answer all four with grounded, consistent, and traceable responses, the architecture is working.
        </div>
      </div>
    </div>
  </section>
);

export default KnowledgeGraphSlide;
