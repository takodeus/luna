const breaks = [
  {
    num: "01 / 04 — The Interaction Inversion",
    title: "Agents don't log in.",
    desc: 'A UI-first architecture returns field dumps, not semantic context. The agent cannot distinguish "vacant" from "under-renovation" from "lease-expired." The distinction determines the entire downstream recommendation.',
    egLabel: "In Practice — Yardi · MRI · RealPage",
    egText: 'A leasing co-pilot queries occupancy and receives a table. It has no way to know that three "vacant" units carry different meanings, different urgency, and different action paths.',
  },
  {
    num: "02 / 04 — The Temporal Mismatch",
    title: "ERPs record what was.",
    desc: "Batch architectures produce month-end snapshots. Agents operating on 28-day-old occupancy, pricing, or covenant data make decisions as if nothing has changed. For leasing velocity decisions, that is functionally the same as wrong.",
    egLabel: "In Practice — All ERP Platforms",
    egText: "A renewal recommendation is issued for a tenant who signed with a competitor two weeks ago. The system of record had no mechanism to know — and no architecture to surface the gap.",
  },
  {
    num: "03 / 04 — The Semantic Collapse",
    title: "NOI means three different things.",
    desc: "Yardi stores a number. It does not store the institutional logic that governs how that number should be read, compared, or acted upon. When agents consolidate across entities, they do arithmetic on meaning they were never given.",
    egLabel: "In Practice — Argus · Yardi · MRI",
    egText: "A cross-fund performance agent consolidates NOI across three vehicles. The same field name, three calculation methodologies. The composite figure no GP would sign — and the agent has no way to know it is wrong.",
  },
  {
    num: "04 / 04 — The Provenance Void",
    title: "The outcome exists. The reasoning doesn't.",
    desc: "ERPs record that a decision was made. They do not record why — what data was consulted, who interpreted it, which assumptions governed. Under LP audit or SEC scrutiny, that gap is a material control deficiency.",
    egLabel: "In Practice — All ERP Platforms",
    egText: "An auditor asks: what data informed the Q3 revaluation? The system shows the number changed. It cannot show why. No reasoning chain. No agent trail. No auditability.",
  },
];

const BreaksSlide = () => (
  <section className="slide slide-alt" id="s4">
    <div className="slide-n">iv — Four Structural Breaks</div>
    <h2 className="luna-h2">
      Not feature gaps.
      <br />
      <span className="luna-accent">Architectural misalignments.</span>
    </h2>

    <div className="breaks-grid">
      {breaks.map((b, i) => (
        <div className="break-cell" key={i}>
          <div className="break-num">{b.num}</div>
          <div className="break-title">{b.title}</div>
          <div className="break-desc">{b.desc}</div>
          <div className="break-eg">
            <div className="break-eg-lbl">{b.egLabel}</div>
            <div className="break-eg-text">{b.egText}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default BreaksSlide;
