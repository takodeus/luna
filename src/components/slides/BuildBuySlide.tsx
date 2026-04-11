const options = [
  {
    label: "Build In-House",
    tag: "Option A",
    color: "hsl(var(--ink-light))",
    borderColor: "hsl(var(--rule))",
    bg: "hsl(var(--bg-alt))",
    items: [
      { heading: "Timeline", body: "3–5 years minimum. Cherre has a 10-year head start — every component purpose-built for real estate, not adapted from a general-purpose graph." },
      { heading: "Scope", body: "Entity resolution, ontology engineering, knowledge graph infrastructure, and semantic governance are each full engineering disciplines. This is not a roadmap item." },
      { heading: "Data network", body: "150+ real estate-specific connectors, 4B+ legal entities, 2B+ addresses. The network effect compounds: Cherre's graph gets smarter with every client relationship." },
      { heading: "Opportunity cost", body: "Every quarter spent building what already exists is a quarter Virtuoso goes to market on an unvalidated intelligence substrate." },
    ],
    verdict: "Possible — in 2029. The semantic layer gap exists today. Competitors won't wait.",
    verdictColor: "hsl(var(--ink-mid))",
  },
  {
    label: "Partner with Cherre",
    tag: "Option B",
    color: "hsl(var(--blue))",
    borderColor: "hsl(var(--blue))",
    bg: "#f0f4fb",
    items: [
      { heading: "Speed", body: "Fastest path to closing the capability gap. Cherre's Yardi connectors are already built. Virtuoso gets the intelligence layer in weeks, not years." },
      { heading: "Exclusivity", body: "A partnership is non-exclusive by default. The same deal Yardi signs today, MRI or a well-capitalized new entrant can sign tomorrow." },
      { heading: "Roadmap control", body: "Cherre's priorities remain independent. Virtuoso's intelligence layer develops on someone else's timeline." },
      { heading: "Strategic ceiling", body: "You gain capability. You don't own the moat. The knowledge graph powering Virtuoso also powers your competitors' AI — by design." },
    ],
    verdict: "Closes the gap for now. Leaves the intelligence layer permanently outside Yardi's control.",
    verdictColor: "hsl(var(--blue))",
  },
  {
    label: "Acquire Cherre",
    tag: "Option C · Recommended",
    color: "hsl(var(--pink))",
    borderColor: "hsl(var(--pink))",
    bg: "hsl(var(--pink-light))",
    highlight: true,
    items: [
      { heading: "What Yardi owns", body: "The real estate knowledge graph. The ontology. The entity resolution engine. The semantic and context layer. The only purpose-built intelligence infrastructure in the industry — exclusively." },
      { heading: "What Virtuoso becomes", body: "The only AI real estate copilot running on a fully governed, context-aware, auditable knowledge graph. No competitor can replicate the substrate." },
      { heading: "What Yardi Matrix gains", body: "A structured entity layer that resolves Matrix assets, comps, and operators against the same graph powering operational decisions — closing the internal data gap." },
      { heading: "What competitors face", body: "A 3–5 year build gap, a weaker dataset, or an intelligence vendor with no real estate depth. None of those options close quickly." },
    ],
    verdict: "Yardi becomes the system of record and the intelligence layer. No other company in real estate can claim both.",
    verdictColor: "hsl(var(--pink))",
  },
];

const BuildBuySlide = () => (
  <section className="slide" id="s8">
    <div className="slide-n">viii — Build, Partner, or Acquire</div>
    <h2 className="luna-h2">
      Three paths to the intelligence layer.
      <br />
      <span className="luna-accent">Only one closes the gap permanently.</span>
    </h2>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5px", background: "hsl(var(--pink-border))", border: "1px solid hsl(var(--pink-border))", marginTop: "2.5rem", maxWidth: 1040 }}>
      {options.map((opt, i) => (
        <div key={i} style={{ background: opt.bg, padding: "2.2rem 2rem", borderTop: `4px solid ${opt.borderColor}`, display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          <div>
            <div className="font-mono-luna" style={{ fontSize: "0.56rem", letterSpacing: "0.2em", textTransform: "uppercase", color: opt.color, marginBottom: "0.3rem" }}>{opt.tag}</div>
            <div style={{ fontSize: "1.1rem", fontWeight: 700 }}>{opt.label}</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {opt.items.map((item, j) => (
              <div key={j}>
                <div style={{ fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: opt.color, marginBottom: "0.2rem" }}>{item.heading}</div>
                <div style={{ fontSize: "0.8rem", color: "hsl(var(--ink-mid))", lineHeight: 1.6 }}>{item.body}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "auto", paddingTop: "1.2rem", borderTop: `1px solid ${opt.highlight ? "hsl(var(--pink-border))" : "hsl(var(--rule))"}` }}>
            <div style={{ fontSize: "0.82rem", fontWeight: 500, color: opt.verdictColor, lineHeight: 1.55, fontStyle: "italic" }}>
              {opt.verdict}
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="callout" style={{ marginTop: "2rem", maxWidth: 1040 }}>
      <div className="callout-title">What Cherre Brings to the Table</div>
      <div className="callout-text" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
        {[
          { num: "10 yrs", label: "Purpose-built for real estate — not adapted from a general-purpose graph" },
          { num: "150+", label: "Native connectors — Yardi, Argus, VTS, MRI, and every major data provider" },
          { num: "$3.7T", label: "AUM on the platform — the graph is already trained on the industry's real data" },
          { num: "Patented", label: "Entity resolution engine — probabilistic matching across 4B+ legal entities" },
        ].map((item, i) => (
          <div key={i}>
            <div className="font-serif-luna" style={{ fontSize: "1.8rem", fontWeight: 600, color: "hsl(var(--pink))", lineHeight: 1 }}>{item.num}</div>
            <div style={{ fontSize: "0.78rem", color: "hsl(var(--ink-mid))", lineHeight: 1.5, marginTop: "0.3rem" }}>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BuildBuySlide;
