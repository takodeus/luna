import { useState } from "react";

type TileKey = "alpha" | "core" | "connect" | null;

interface Tile {
  key: Exclude<TileKey, null>;
  name: string;
  tag: string;
  color: string;
}

// Vertical stack order: Alpha (top) → Core (mid) → Connect (bottom)
// Mirrors the stack image's tier order: Data Out → Data Through → Data In
const tiles: Tile[] = [
  { key: "alpha",   name: "ALPHA",   tag: "Data Out",     color: "#611FAD" },
  { key: "core",    name: "CORE",    tag: "Data Through", color: "#1B70B1" },
  { key: "connect", name: "CONNECT", tag: "Data In",      color: "#A8185E" },
];

interface SubTile {
  eyebrow: string;
  title: string;
  titleColor?: string;
  body: string;
  coming?: boolean;
}

const connectSubTiles: SubTile[] = [
  {
    eyebrow: "Direct Ingress",
    title: "Pipelines",
    body: "Pre-built connectors to 100+ third-party data providers and the systems your organization already runs — ERP, deal management, leasing, valuation. Automatic ingestion, routing, and validation without disrupting existing workflows.",
  },
  {
    eyebrow: "Partner Ingress",
    title: "Submissions",
    body: "The Data Submissions Portal. Standardizes data collection from third-party service providers, property managers, fund administrators, and JV partners. Mapping, validation, and approval workflows on a single dashboard.",
  },
];

const coreSubTiles: SubTile[] = [
  {
    eyebrow: "Identity",
    title: "LUNA",
    titleColor: "#A8185E",
    body: "Entity resolution. Collapses fragmented records across systems and providers into single canonical entities — properties, parties, instruments — with full lineage of every match.",
  },
  {
    eyebrow: "Structure",
    title: "MERIDIAN",
    titleColor: "#23A98E",
    body: "The knowledge graph. Governed relationships between resolved entities and their attributes. The substrate that makes data joinable, queryable, and reasonable across the enterprise.",
  },
];

const alphaSubTiles: SubTile[] = [
  {
    eyebrow: "Reasoning Interface",
    title: "ATLAS",
    titleColor: "#A8185E",
    body: "Chat-based orchestration agent. Ask a question, get a governed answer with full lineage. No SQL, no BI tooling.",
  },
  {
    eyebrow: "Reporting Interface",
    title: "Semantic Layer + BI",
    body: "Governed semantic models exposed to your reporting stack. Metrics, dimensions, and lineage that match every dashboard.",
  },
  {
    eyebrow: "Build & Deploy",
    title: "Agent STUDIO",
    body: "Where your team builds, tests, and deploys intelligent workflows on top of the governed graph.",
  },
  {
    eyebrow: "MCP Connectors",
    title: "Any AI, Any Model",
    body: "Governed context delivered straight into the AI tools your team already uses.",
    coming: true,
  },
];

const STACK_HEIGHT = 480; // px — the maxHeight of the stack image, drives tile column height

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

      {/* MAIN ROW — 33% tiles left, 66% scene right */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "33% 66%",
          gap: "2.5rem",
          marginTop: "2.2rem",
          maxWidth: 1280,
          alignItems: "start",
        }}
      >
        {/* LEFT — vertical stack of 3 skinny tiles, total height = stack image height */}
        <div
          style={{
            display: "grid",
            gridTemplateRows: "1fr 1fr 1fr",
            gap: "2px",
            background: "#EEE",
            border: "1px solid #EEE",
            height: STACK_HEIGHT,
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
                  padding: "1.2rem 1.4rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  opacity: isDimmed ? 0.55 : 1,
                  transition: "opacity 0.2s ease, background 0.2s ease",
                  outline: isActive ? `1px solid ${t.color}` : "none",
                  outlineOffset: isActive ? "-1px" : 0,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: t.color,
                      marginBottom: "0.2rem",
                    }}
                  >
                    Cherre
                  </div>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 800,
                      color: "#000",
                      letterSpacing: "-0.01em",
                      lineHeight: 1,
                      marginBottom: "0.3rem",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "0.85rem",
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
                    fontFamily: "var(--mono)",
                    fontSize: "0.58rem",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: isActive ? t.color : "rgba(0,0,0,0.35)",
                  }}
                >
                  {isActive ? "Selected" : "Click to expand"}
                </div>
              </button>
            );
          })}
        </div>

        {/* RIGHT — scene pane (image on top, sub-tiles below when active) */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            gap: "1.5rem",
          }}
        >
          {/* TOP — image area, fixed height matching stack */}
          <div
            style={{
              height: STACK_HEIGHT,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {active === null && <DefaultStackScene />}
            {active === "connect" && <ConnectSceneImage />}
            {active === "core" && <CoreSceneImage />}
            {active === "alpha" && <AlphaSceneImage />}
          </div>

          {/* BELOW — sub-tiles for the active layer */}
          {active === "connect" && <SubTileRow tiles={connectSubTiles} accent="#A8185E" cols={2} />}
          {active === "core"    && <SubTileRow tiles={coreSubTiles}    accent="#1B70B1" cols={2} />}
          {active === "alpha"   && <SubTileRow tiles={alphaSubTiles}   accent="#611FAD" cols={4} />}
        </div>
      </div>

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

/* ── DEFAULT STATE — stack image ─────────────────────────────────── */
const DefaultStackScene = () => (
  <img
    src="/luna/stack.png"
    alt="The Cherre stack"
    style={{
      maxWidth: "100%",
      maxHeight: STACK_HEIGHT,
      height: "auto",
      width: "auto",
      objectFit: "contain",
    }}
  />
);

/* ── CONNECT scene image ─────────────────────────────────── */
const ConnectSceneImage = () => (
  <div
    style={{
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      animation: "luna-fade-up 0.4s ease",
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
        width: "60%",
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
);

/* ── CORE scene image ─────────────────────────────────── */
const CoreSceneImage = () => (
  <img
    src="/luna/core.png"
    alt="Core — Data Through"
    style={{
      maxHeight: "100%",
      maxWidth: "100%",
      height: "auto",
      width: "auto",
      objectFit: "contain",
      animation: "luna-fade-up 0.4s ease",
    }}
  />
);

/* ── ALPHA scene image ─────────────────────────────────── */
const AlphaSceneImage = () => (
  <img
    src="/luna/alpha.png"
    alt="Alpha — Data Out"
    style={{
      maxHeight: "100%",
      maxWidth: "100%",
      height: "auto",
      width: "auto",
      objectFit: "contain",
      animation: "luna-fade-up 0.4s ease",
    }}
  />
);

/* ── SUB-TILE ROW (shared) ─────────────────────────────────── */
const SubTileRow = ({ tiles, accent, cols }: { tiles: SubTile[]; accent: string; cols: number }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      gap: "2px",
      background: "#EEE",
      animation: "luna-fade-up 0.4s ease",
    }}
  >
    {tiles.map((t) => (
      <div
        key={t.title}
        style={{
          background: "#FAFAFA",
          padding: "1.2rem 1.2rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.55rem",
          borderTop: t.coming ? `2px dashed ${accent}` : `2px solid transparent`,
          position: "relative",
          minHeight: 150,
        }}
      >
        {t.coming && (
          <div
            style={{
              position: "absolute",
              top: -1,
              right: 8,
              background: accent,
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
            fontSize: "0.58rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(0,0,0,0.5)",
          }}
        >
          {t.eyebrow}
        </div>
        <div
          style={{
            fontSize: "1rem",
            fontWeight: 700,
            color: t.titleColor ?? "#000",
            letterSpacing: "-0.01em",
            lineHeight: 1.15,
          }}
        >
          {t.title}
        </div>
        <p
          style={{
            fontSize: "0.78rem",
            color: "#000",
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          {t.body}
        </p>
      </div>
    ))}
  </div>
);

export default ProductionAnchorSlide;
