const ClosingSlide = () => (
  <section className="slide slide-pink" id="s9">
    <div className="slide-n">ix — The Proposition</div>

    <p className="closing-q">
      "Yardi owns the ledger.
      <br /><br />
      <em>Cherre owns the context.</em>
      <br /><br />
      Together, you own
      <br />
      the only AI stack in real estate
      <br />
      that is both."
    </p>

    <div style={{ width: 60, height: 2, background: "rgba(255,255,255,0.25)", margin: "2.5rem 0 2rem" }} />

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", maxWidth: 700 }}>
      {[
        {
          label: "The acquisition case",
          body: "Cherre's knowledge graph + Yardi's system of record = a structural position no competitor can replicate without starting a decade late. Virtuoso becomes the only AI copilot in real estate with owned, exclusive intelligence infrastructure beneath it.",
        },
        {
          label: "The partnership case",
          body: "If acquisition isn't the right conversation today, a structured partnership is the interim path. But a partnership is non-exclusive. Every month it runs without an exclusivity clause is a month MRI or a new entrant can close the same deal.",
        },
      ].map((item, i) => (
        <div key={i} style={{ borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "1.2rem" }}>
          <div className="font-mono-luna" style={{ fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "0.5rem" }}>{item.label}</div>
          <div style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.65 }}>{item.body}</div>
        </div>
      ))}
    </div>

    <div style={{ marginTop: "3rem" }} />
    <div className="font-mono-luna" style={{ fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>
      Cherre · For Yardi Leadership · 2026
    </div>
  </section>
);

export default ClosingSlide;
