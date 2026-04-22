import ArchitectureDiagram from "../ArchitectureDiagram";

const ArchitectureSlide = () => (
  <section
    style={{
      background: "#fff",
      borderTop: "3px solid #A8185E",
      padding: "64px 48px 80px",
    }}
  >
    <div
      style={{
        fontSize: "0.62rem",
        fontWeight: 700,
        fontFamily: "Montserrat, sans-serif",
        color: "#A8185E",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        marginBottom: 14,
      }}
    >
      The Full Stack
    </div>
    <h2 className="luna-h2" style={{ marginTop: 0 }}>
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

