import ArchitectureDiagram from "../ArchitectureDiagram";

const ArchitectureSlide = () => (
  <section className="slide" id="s14" style={{ justifyContent: "flex-start", minHeight: "auto" }}>
    <div className="slide-n">xiv / The Full Stack</div>
    <h2 className="luna-h2">
      Six layers.
      <br />
      <span className="luna-accent">One governed architecture.</span>
    </h2>
    <p className="luna-sub" style={{ marginBottom: 0 }}>
      From ingestion through agent consumption, every layer is purpose-built, tenant-isolated, and traceable.
    </p>

    <ArchitectureDiagram />
  </section>
);

export default ArchitectureSlide;
