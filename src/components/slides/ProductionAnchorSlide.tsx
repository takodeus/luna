import { useState } from "react";

type TileKey = "connect" | "core" | "alpha" | "quality" | null;

interface Tile {
  key: Exclude<TileKey, null>;
  name: string;
  tag: string;
  color: string;
  // PLACEHOLDER COPY — to be replaced with final descriptions
  description: string;
}

// Reading order: TL, TR, BL, BR
// Connect (TL) · Core (TR) / Alpha (BL) · Quality (BR)
const tiles: Tile[] = [
  {
    key: "connect",
    name: "CONNECT",
    tag: "Data In",
    color: "#A8185E",
    description:
      "PLACEHOLDER · Connect description copy goes here. The integration surface where every system of record — ERP, CRE platform, file drop, warehouse — lands and is normalized before it touches the graph.",
  },
  {
    key: "core",
    name: "CORE",
    tag: "Data Through",
    color: "#1B70B1",
    description:
      "PLACEHOLDER · Core description copy goes here. The substrate where entity resolution, governed meaning, and the knowledge graph operate. LUNA resolves identity. MERIDIAN structures the graph.",
  },
  {
    key: "alpha",
    name: "ALPHA",
    tag: "Data Out",
    color: "#611FAD",
    description:
      "PLACEHOLDER · Alpha description copy goes here. Where governed data reaches the surfaces people and systems actually use — reasoning interfaces, BI, agent runtimes, and the AI clients your team already runs.",
  },
  {
    key: "quality",
    name: "QUALITY",
    tag: "Data Integrity",
    color: "#23A98E",
    description:
      "PLACEHOLDER · Quality description copy goes here. Validation, lineage, and rule enforcement that wraps the entire stack — every record carries its resolution history forward.",
  },
];

const alphaProducts = [
  {
    eyebrow: "Reasoning Interface",
    title: "ATLAS",
    titleColor: "#A8185E",
    body: "Chat-based orchestration agent. Ask a question, get a governed answer with full lineage. No SQL, no BI tooling.",
    tags: ["NL Query", "Persistent Memory"],
    pinkTag: true,
    coming: false,
  },
  {
    eyebrow: "Reporting Interface",
    title: "Semantic Layer + BI",
    titleColor: "#000",
    body: "Governed semantic models exposed to your reporting stack. Metrics, dimensions, and lineage that match every dashboard.",
    tags: ["Looker", "Tableau", "Power BI"],
    pinkTag: false,
    coming: false,
  },
  {
    eyebrow: "Build & Deploy",
    title: "Agent STUDIO",
    titleColor: "#000",
    body: "Where your team builds, tests, and deploys intelligent workflows on top of the governed graph.",
    tags: [],
    pinkTag: false,
    coming: false,
  },
  {
    eyebrow: "MCP Connectors",
    title: "Any AI, Any Model",
    titleColor: "#000",
    body: "Governed context delivered straight into the AI tools your team already uses.",
    tags: ["Claude", "ChatGPT", "Copilot"],
    pinkTag: true,
    coming: true,
  },
];

const ProductionAnchorSlide = () => {
  const [active, setActive] = useState<TileKey>(null);

  const handleTileClick = (key: Exclude<TileKey, null>) => {
    setActive((prev) => (prev === key ? null : key));
  };

  return (
    <section className="slide" id="s14" style={{ background: "#fff" }}>
      <div className="slide-n">xiv / The Foundation Is Already Built</div>

      <h2 className="luna-h2">
        This is not a roadmap.
        <br />
        <span className="luna-accent">It is already running.</span>
      </h2>

      <p className="luna-body-text" style={{ maxWidth: 820 }}>
        For Cherre, this is not a future architecture. It is the natural evolution of the platform we have been building for years.
      </p>
      <p className="luna-body-text" style={{ maxWidth: 820, marginTop: "0.6rem" }}>
        The capabilities required for the reasoning era have always been part of that architecture: the ability to connect data across systems, govern meaning across contexts, resolve identity across fragmented records, preserve lineage, and make information usable for decisions.
      </p>

      {/* MAIN ROW — 55% tiles left, 45% scene right */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "55% 45%",
          gap: "2.5rem",
          marginTop: "2.2rem",
          maxWidth: 1200,
          alignItems: "start",
        }}
      >
        {/* LEFT — 2x2 tile grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: "2px",
            background: "#EEE",
            border: "1px solid #EEE",
          }}
        >
          {tiles.map((t) => {
            const isActive = active === t.key;
            const isDimmed = active !== null && !isActive;
            return (
              <button
                key={t.key}
                onClick={() => handleTileClick(t.key)}
                style={{
                  appearance: "none",
                  textAlign: "left",
                  cursor: "pointer",
                  background: isActive ? "#fff" : "#FAFAFA",
                  borderTop: `4px solid ${t.color}`,
                  borderLeft: "none",
                  borderRight: "none",
                  borderBottom: "none",
                  padding: "1.4rem 1.3rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                  minHeight: 180,
                  opacity: isDimmed ? 0.55 : 1,
                  transition: "opacity 0.2s ease, background 0.2s ease",
                  outline: isActive ? `1px solid ${t.color}` : "none",
                  outlineOffset: isActive ? "-1px" : 0,
                  position: "relative",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "0.62rem",
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: t.color,
                      marginBottom: "0.15rem",
                    }}
                  >
                    Cherre
                  </div>
                  <div
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      color: "#000",
                      letterSpacing: "-0.01em",
                      lineHeight: 1,
                      marginBottom: "0.15rem",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "0.78rem",
                      fontStyle: "italic",
                      color: t.color,
                      fontWeight: 600,
                    }}
                  >
                    {t.tag}
                  </div>
                </div>
                <div
                  style={{
                    marginTop: "auto",
                    fontFamily: "var(--mono)",
                    fontSize: "0.58rem",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: isActive ? t.color : "rgba(0,0,0,0.35)",
                  }}
                >
                  {isActive ? "Selected" : t.key === "alpha" ? "Click · 4 products" : "Click to expand"}
                </div>
              </button>
            );
          })}
        </div>

        {/* RIGHT — scene pane */}
        <div
          style={{
            position: "relative",
            minHeight: 420,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          {active === null && <DefaultStackScene />}
          {active === "connect" && <ConnectScene description={tiles[0].description} />}
          {active === "core" && <CoreScene description={tiles[1].description} />}
          {active === "alpha" && <AlphaScene description={tiles[2].description} />}
          {active === "quality" && <QualityScene description={tiles[3].description} />}
        </div>
      </div>

      {/* ALPHA productized cards — full-width row, only when alpha active */}
      {active === "alpha" && (
        <div
          style={{
            marginTop: "2.5rem",
            maxWidth: 1200,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2px",
            background: "#EEE",
            animation: "luna-fade-up 0.4s ease",
          }}
        >
          {alphaProducts.map((p) => (
            <div
              key={p.title}
              style={{
                background: "#FAFAFA",
                padding: "1.4rem 1.3rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.7rem",
                borderTop: p.coming ? `2px dashed #A8185E` : "2px solid transparent",
                position: "relative",
              }}
            >
              {p.coming && (
                <div
                  style={{
                    position: "absolute",
                    top: -1,
                    right: 8,
                    background: "#A8185E",
                    color: "#fff",
                    fontFamily: "var(--mono)",
                    fontSize: "0.55rem",
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    padding: "0.2rem 0.5rem",
                  }}
                >
                  Coming
                </div>
              )}
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(0,0,0,0.5)",
                }}
              >
                {p.eyebrow}
              </div>
              <div
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: p.titleColor,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.15,
                }}
              >
                {p.title}
              </div>
              <p
                style={{
                  fontSize: "0.78rem",
                  color: "#000",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {p.body}
              </p>
              {p.tags.length > 0 && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "auto" }}>
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: "0.6rem",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        padding: "0.3rem 0.55rem",
                        background: p.pinkTag ? "rgba(168,24,94,0.1)" : "rgba(0,0,0,0.06)",
                        color: p.pinkTag ? "#A8185E" : "#000",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <style>{`
        @keyframes luna-fade-up {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes luna-rise-loop {
          0%   { transform: translateY(100%); opacity: 0; }
          15%  { opacity: 0.85; }
          85%  { opacity: 0.85; }
          100% { transform: translateY(-100%); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

/* ── DEFAULT STATE ─────────────────────────────────── */
const DefaultStackScene = () => (
  <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
    <img
      src="/luna/stack.png"
      alt="The Cherre stack"
      style={{
        maxWidth: "100%",
        height: "auto",
        maxHeight: 480,
        objectFit: "contain",
      }}
    />
  </div>
);

/* ── CONNECT ─────────────────────────────────── */
const ConnectScene = ({ description }: { description: string }) => (
  <div style={{ width: "100%", animation: "luna-fade-up 0.4s ease" }}>
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 380,
        overflow: "hidden",
        background: "#fff",
      }}
    >
      <img
        src="/luna/connect-top.png"
        alt=""
        aria-hidden
        style={{
          position: "absolute",
          left: "50%",
          bottom: 0,
          transform: "translateX(-50%)",
          width: "70%",
          height: "auto",
          opacity: 0.85,
          animation: "luna-rise-loop 6s ease-in-out infinite",
        }}
      />
      <img
        src="/luna/connect-base.png"
        alt="Connect — Data In"
        style={{
          position: "absolute",
          inset: 0,
          margin: "auto",
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
          zIndex: 1,
        }}
      />
    </div>
    <SceneDescription description={description} accent="#A8185E" />
  </div>
);

/* ── CORE ─────────────────────────────────── */
const CoreScene = ({ description }: { description: string }) => (
  <div style={{ width: "100%", animation: "luna-fade-up 0.4s ease" }}>
    <div style={{ position: "relative", width: "100%" }}>
      <img
        src="/luna/core.png"
        alt="Core — Data Through"
        style={{ width: "100%", height: "auto", maxHeight: 460, objectFit: "contain", display: "block", margin: "0 auto" }}
      />
      <div
        style={{
          position: "absolute",
          top: "26%",
          left: "4%",
          padding: "0.4rem 0.7rem",
          background: "#fff",
          border: "1px solid #A8185E",
          fontFamily: "var(--mono)",
          fontSize: "0.62rem",
          fontWeight: 700,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "#A8185E",
          boxShadow: "0 2px 8px rgba(168,24,94,0.15)",
        }}
      >
        LUNA · Entity Resolution
      </div>
      <div
        style={{
          position: "absolute",
          top: "62%",
          right: "4%",
          padding: "0.4rem 0.7rem",
          background: "#fff",
          border: "1px solid #23A98E",
          fontFamily: "var(--mono)",
          fontSize: "0.62rem",
          fontWeight: 700,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "#23A98E",
          boxShadow: "0 2px 8px rgba(35,169,142,0.15)",
        }}
      >
        MERIDIAN · Knowledge Graph
      </div>
    </div>
    <SceneDescription description={description} accent="#1B70B1" />
  </div>
);

/* ── ALPHA ─────────────────────────────────── */
const AlphaScene = ({ description }: { description: string }) => (
  <div style={{ width: "100%", animation: "luna-fade-up 0.4s ease" }}>
    <img
      src="/luna/alpha.png"
      alt="Alpha — Data Out"
      style={{ width: "100%", height: "auto", maxHeight: 460, objectFit: "contain", display: "block", margin: "0 auto" }}
    />
    <SceneDescription description={description} accent="#611FAD" />
  </div>
);

/* ── QUALITY (placeholder until asset arrives) ─────────────────────────────────── */
const QualityScene = ({ description }: { description: string }) => (
  <div style={{ width: "100%", animation: "luna-fade-up 0.4s ease" }}>
    <div
      style={{
        width: "100%",
        height: 380,
        background: "#FAFAFA",
        border: "2px dashed #23A98E",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.4rem",
      }}
    >
      <div
        style={{
          fontFamily: "var(--mono)",
          fontSize: "0.62rem",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#23A98E",
        }}
      >
        Quality
      </div>
      <div style={{ fontSize: "0.85rem", color: "rgba(0,0,0,0.5)", fontStyle: "italic" }}>
        Asset pending
      </div>
    </div>
    <SceneDescription description={description} accent="#23A98E" />
  </div>
);

/* ── DESCRIPTION BLOCK (shared) ─────────────────────────────────── */
const SceneDescription = ({ description, accent }: { description: string; accent: string }) => (
  <p
    style={{
      marginTop: "1.2rem",
      fontSize: "0.86rem",
      lineHeight: 1.7,
      color: "#000",
      borderLeft: `2px solid ${accent}`,
      paddingLeft: "1rem",
    }}
  >
    {description}
  </p>
);

export default ProductionAnchorSlide;
