const eras = [
  {
    tag: "Era One",
    years: "1971 — 2005",
    items: [
      { label: "Primary User", value: "Finance & accounting teams" },
      { label: "Interaction Mode", value: "Form-based UI, batch workflows" },
      { label: "Core Job", value: "Capture and preserve transactions" },
      { label: "Data Problem", value: "Scarcity — data was hard to produce" },
    ],
  },
  {
    tag: "Era Two",
    years: "2005 — 2023",
    items: [
      { label: "Primary User", value: "Analysts via dashboards and BI" },
      { label: "Interaction Mode", value: "Cloud SaaS, APIs, self-service BI" },
      { label: "Core Job", value: "Connect systems, surface insights" },
      { label: "Data Problem", value: "Integration — data was siloed" },
    ],
  },
  {
    tag: "Era Three",
    years: "2024 →",
    now: true,
    items: [
      { label: "Primary User", value: "AI agents — not humans" },
      { label: "Interaction Mode", value: "API calls requiring semantic context" },
      { label: "Core Job", value: "Interpret, decide, act autonomously" },
      { label: "Data Problem", value: "Meaning — no governed context", highlight: true },
    ],
  },
];

const EraMapSlide = () => (
  <section className="slide slide-alt" id="s2">
    <div className="slide-n">ii — Era Map</div>
    <h2 className="luna-h2">
      Forty years. Three eras.
      <br />
      <span className="luna-accent">One assumption just broke.</span>
    </h2>

    <div className="era-wrap">
      {eras.map((era, i) => (
        <div className="era-col" key={i}>
          {era.now && <div className="era-now-badge">Now</div>}
          <div className="era-tag">{era.tag}</div>
          <div className="era-years">{era.years}</div>
          <div className="era-row">
            {era.items.map((item, j) => (
              <div key={j}>
                <div className="era-item-lbl">{item.label}</div>
                <div className="era-item-val" style={item.highlight ? { color: "#fff", fontWeight: 600 } : undefined}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default EraMapSlide;
