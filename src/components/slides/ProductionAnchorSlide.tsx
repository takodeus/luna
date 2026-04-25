import { useState } from "react";

type TileKey = "alpha" | "core" | "connect" | null;

interface Tile {
  key: Exclude<TileKey, null>;
  name: string;
  tag: string;
  color: string;
}

// Vertical stack, top → bottom: Alpha · Core · Connect
const tiles: Tile[] = [
  { key: "alpha",   name: "ALPHA",   tag: "Data Out",     color: "#611FAD" },
  { key: "core",    name: "CORE",    tag: "Data Through", color: "#1B70B1" },
  { key: "connect", name: "CONNECT", tag: "Data In",      color: "#A8185E" },
];

/* ── ALPHA SUB-TILES (productized cards, no tag pills) ──────── */
const alphaProducts = [
  {
    eyebrow: "Reasoning Interface",
    title: "ATLAS",
    titleColor: "#A8185E",
    body: "Chat-based orchestration agent. Ask a question, get a governed answer with full lineage. No SQL, no BI tooling.",
    coming: false,
  },
  {
    eyebrow: "Reporting Interface",
    title: "Semantic Layer + BI",
    titleColor: "#000",
    body: "Governed semantic models exposed to your reporting stack. Metrics, dimensions, and lineage that match every dashboard.",
    coming: false,
  },
  {
    eyebrow: "Build & Deploy",
    title: "Agent STUDIO",
    titleColor: "#000",
    body: "Where your team builds, tests, and deploys intelligent workflows on top of the governed graph.",
    coming: false,
  },
  {
    eyebrow: "MCP Connectors",
    title: "Any AI, Any Model",
    titleColor: "#000",
    body: "Governed context delivered straight into the AI tools your team already uses.",
    coming: true,
  },
];

/* ── CORE SUB-TILES ──────── */
const coreProducts = [
  {
    eyebrow: "Entity Resolution",
    title: "LUNA",
    titleColor: "#A8185E",
    body: "Resolves identity across fragmented records. Every property, every entity, every transaction reconciled to a single canonical reference with full lineage.",
  },
  {
    eyebrow: "Knowledge Graph",
    title: "MERIDIAN",
    titleColor: "#23A98E",
    body: "The governed semantic graph. Connects resolved entities to their attributes, relationships, and history — the substrate every reasoning surface queries.",
  },
];

/* ── CONNECT SUB-TILES ──────── */
const connectProducts = [
  {
    eyebrow: "Data Ingestion",
    title: "Pipelines",
    titleColor: "#A8185E",
    body: "Connectors and ingest workflows for ERP, deal management, leasing platforms, and warehouses. Pre-built integrations across the leading systems of record in real assets.",
  },
  {
    eyebrow: "Third-Party Collection",
    title: "Submissions",
    titleColor: "#A8185E",
    body: "Streamlines and standardizes data collection from third-party vendors and investment managers. Map your data and set rules to automate ingestion, standardization, and validation.",
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

      {/* MAIN ROW — 33% tiles left / 66% scene right */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "33% 66%",
          gap: "2rem",
          marginTop: "2.2rem",
          maxWidth: 1200,
          alignItems: "stretch",
        }}
      >
        {/* LEFT — vertical 1x3 stack of skinny tiles */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            background: "#EEE",
            border: "1px solid #EEE",
            maxWidth: 280,
            justifySelf: "start",
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
                  gap: "0.5rem",
                  flex: "1 1 0",
                  minHeight: 0,
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
                      fontSize: "1.35rem",
                      fontWeight: 800,
                      color: "#000",
                      letterSpacing: "-0.01em",
                      lineHeight: 1,
                      marginBottom: "0.2rem",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "0.82rem",
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
                  {isActive ? "Selected" : "Click to expand"}
                </div>
              </button>
            );
          })}
        </div>

        {/* RIGHT — scene pane (swaps on click) */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {active === null && <DefaultStackScene />}
          {active === "alpha" && <AlphaScene />}
          {active === "core" && <CoreScene />}
          {active === "connect" && <ConnectScene />}
        </div>
      </div>

      {/* SUB-TILES BELOW — only when a main tile is active */}
      {active === "alpha" && (
        <SubTileRow color="#611FAD">
          {alphaProducts.map((p) => (
            <ProductCard
              key={p.title}
              eyebrow={p.eyebrow}
              title={p.title}
              titleColor={p.titleColor}
              body={p.body}
              coming={p.coming}
            />
          ))}
        </SubTileRow>
      )}

      {active === "core" && (
        <SubTileRow color="#1B70B1">
          {coreProducts.map((p) => (
            <ProductCard
              key={p.title}
              eyebrow={p.eyebrow}
              title={p.title}
              titleColor={p.titleColor}
              body={p.body}
            />
          ))}
        </SubTileRow>
      )}

      {active === "connect" && (
        <SubTileRow color="#A8185E">
          {connectProducts.map((p) => (
            <ProductCard
              key={p.title}
              eyebrow={p.eyebrow}
              title={p.title}
              titleColor={p.titleColor}
              body={p.body}
            />
          ))}
        </SubTileRow>
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

/* ── SHARED SUB-TILE ROW ──────── */
const SubTileRow = ({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) => {
  const count = Array.isArray(children) ? children.length : 1;
  return (
    <div
      style={{
        marginTop: "2rem",
        maxWidth: 1200,
        display: "grid",
        gridTemplateColumns: `repeat(${count}, 1fr)`,
        gap: "2px",
        background: "#EEE",
        animation: "luna-fade-up 0.4s ease",
      }}
      data-accent={color}
    >
      {children}
    </div>
  );
};

/* ── PRODUCT CARD (used inside SubTileRow) ──────── */
const ProductCard = ({
  eyebrow,
  title,
  titleColor,
  body,
  coming = false,
}: {
  eyebrow: string;
  title: string;
  titleColor: string;
  body: string;
  coming?: boolean;
}) => (
  <div
    style={{
      background: "#FAFAFA",
      padding: "1.4rem 1.3rem",
      display: "flex",
      flexDirection: "column",
      gap: "0.6rem",
      borderTop: coming ? `2px dashed #A8185E` : "2px solid transparent",
      position: "relative",
      minHeight: 140,
    }}
  >
    {coming && (
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
      {eyebrow}
    </div>
    <div
      style={{
        fontSize: "1.05rem",
        fontWeight: 700,
        color: titleColor,
        letterSpacing: "-0.01em",
        lineHeight: 1.15,
      }}
    >
      {title}
    </div>
    <p
      style={{
        fontSize: "0.78rem",
        color: "#000",
        lineHeight: 1.65,
        margin: 0,
      }}
    >
      {body}
    </p>
  </div>
);

/* ── DEFAULT STATE ─────────────────────────────────── */
const DefaultStackScene = () => (
  <img
    src="/luna/stack.png"
    alt="The Cherre stack"
    style={{
      width: "100%",
      maxWidth: 720,
      height: "auto",
      objectFit: "contain",
      display: "block",
    }}
  />
);

/* ── ALPHA ─────────────────────────────────── */
const AlphaScene = () => (
  <img
    src="/luna/alpha.png"
    alt="Alpha — Data Out"
    style={{
      width: "100%",
      maxWidth: 720,
      height: "auto",
      objectFit: "contain",
      display: "block",
      animation: "luna-fade-up 0.4s ease",
    }}
  />
);

/* ── CORE ─────────────────────────────────── */
const CoreScene = () => (
  <img
    src="/luna/core.png"
    alt="Core — Data Through"
    style={{
      width: "100%",
      maxWidth: 720,
      height: "auto",
      objectFit: "contain",
      display: "block",
      animation: "luna-fade-up 0.4s ease",
    }}
  />
);

/* ── CONNECT ─────────────────────────────────── */
const ConnectScene = () => (
  <div
    style={{
      position: "relative",
      width: "100%",
      maxWidth: 720,
      height: 520,
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
        width: "65%",
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

export default ProductionAnchorSlide;
