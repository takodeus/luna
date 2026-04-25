import { useEffect, useState } from "react";

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handler = () => setIsMobile(mq.matches);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleTileClick = (key: Exclude<TileKey, null>) => {
    setActive((prev) => (prev === key ? null : key));
  };

  return (
    <section className="slide" id="s14" style={{ background: "#fff" }}>
      <div className="slide-n">xiv / The Cherre Platform</div>

      <h2 className="luna-h2">
        This is not a roadmap.
        <br />
        <span className="luna-accent">The platform has always been running.</span>
      </h2>

      <p className="luna-body-text" style={{ maxWidth: 820, marginTop: "1.2rem", fontWeight: 600, fontSize: "1.05rem" }}>
        For Cherre, this is not a future architecture. It is the natural evolution of the platform we have been building for years.
      </p>
      <p className="luna-body-text" style={{ maxWidth: 820, marginTop: "0.5rem" }}>
        The capabilities required for the reasoning era have always been part of that architecture: the ability to connect data across systems, govern meaning across contexts, resolve identity across fragmented records, preserve lineage, and make information usable for decisions.
      </p>

      {/* MAIN ROW — desktop: side-by-side; mobile: accordion */}
      {!isMobile && (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "22% 66%",
          gap: "2rem",
          marginTop: "2.2rem",
          maxWidth: 1200,
          alignItems: "start",
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
            maxWidth: 188,
            minWidth: 168,
            width: "100%",
            height: 420,
            justifySelf: "start",
            overflow: "hidden",
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
                  padding: "1.2rem 1rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  flex: "1 1 0",
                  minHeight: 0,
                  minWidth: 0,
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
                      overflowWrap: "anywhere",
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
                      overflowWrap: "anywhere",
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
                      overflowWrap: "anywhere",
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
                    overflowWrap: "anywhere",
                  }}
                >
                  {isActive ? "Selected" : "Click +"}
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
            height: 420,
            width: "100%",
          }}
        >
          {active === null && <DefaultStackScene />}
          {active === "alpha" && <AlphaScene />}
          {active === "core" && <CoreScene />}
          {active === "connect" && <ConnectScene />}
        </div>
      </div>
      )}

      {/* MOBILE ACCORDION */}
      {isMobile && (
        <div
          style={{
            marginTop: "1.8rem",
            maxWidth: 560,
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            background: "#EEE",
            border: "1px solid #EEE",
          }}
        >
          {tiles.map((t) => {
            const isActive = active === t.key;
            const subProducts =
              t.key === "alpha" ? alphaProducts :
              t.key === "core" ? coreProducts :
              connectProducts;
            return (
              <div key={t.key} style={{ background: "#FAFAFA" }}>
                <button
                  onClick={() => handleTileClick(t.key)}
                  style={{
                    appearance: "none",
                    width: "100%",
                    textAlign: "left",
                    cursor: "pointer",
                    background: isActive ? "#fff" : "#FAFAFA",
                    borderTop: `4px solid ${t.color}`,
                    borderLeft: "none",
                    borderRight: "none",
                    borderBottom: "none",
                    padding: "1.1rem 1.2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                  }}
                >
                  <div>
                    <div style={{
                      fontFamily: "var(--mono)", fontSize: "0.6rem", fontWeight: 700,
                      letterSpacing: "0.2em", textTransform: "uppercase", color: t.color,
                      marginBottom: "0.2rem",
                    }}>Cherre</div>
                    <div style={{
                      fontSize: "1.25rem", fontWeight: 800, color: "#000",
                      letterSpacing: "-0.01em", lineHeight: 1, marginBottom: "0.25rem",
                    }}>{t.name}</div>
                    <div style={{
                      fontFamily: "var(--serif)", fontSize: "0.78rem",
                      fontStyle: "italic", color: t.color, fontWeight: 600,
                    }}>{t.tag}</div>
                  </div>
                  <span style={{
                    fontSize: "1.4rem", color: t.color, lineHeight: 1,
                    transform: isActive ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                  }}>+</span>
                </button>
                {isActive && (
                  <div style={{
                    padding: "1rem 1rem 1.4rem",
                    background: "#fff",
                    animation: "luna-fade-up 0.3s ease",
                  }}>
                    <div style={{
                      display: "flex", justifyContent: "center",
                      marginBottom: "1rem",
                    }}>
                      <img
                        src={`/luna/${t.key}.png`}
                        alt={t.name}
                        style={{
                          width: "100%", maxWidth: 280, height: "auto",
                          objectFit: "contain", display: "block",
                        }}
                      />
                    </div>
                    <div style={{
                      display: "grid", gridTemplateColumns: "1fr",
                      gap: "2px", background: "#EEE",
                    }}>
                      {subProducts.map((p) => (
                        <ProductCard
                          key={p.title}
                          eyebrow={p.eyebrow}
                          title={p.title}
                          titleColor={p.titleColor}
                          body={p.body}
                          coming={(p as any).coming}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          {active === null && (
            <div style={{ background: "#fff", padding: "1rem", display: "flex", justifyContent: "center" }}>
              <img src="/luna/stack.png" alt="The Cherre stack" style={{ width: "100%", maxWidth: 320, height: "auto" }} />
            </div>
          )}
        </div>
      )}

      {/* SUB-TILES BELOW — only when a main tile is active */}
      {!isMobile && active === "alpha" && (
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

      {!isMobile && active === "core" && (
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

      {!isMobile && active === "connect" && (
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
        @keyframes luna-connect-rise {
          0%   { transform: translate(-50%, 100%); opacity: 0; }
          25%  { opacity: 1; }
          80%  { transform: translate(-50%, 5%); opacity: 1; }
          100% { transform: translate(-50%, 0%); opacity: 1; }
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
      width: "auto",
      maxWidth: 420,
      maxHeight: 420,
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
      width: "auto",
      maxWidth: 320,
      maxHeight: 420,
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
      width: "auto",
      maxWidth: 320,
      maxHeight: 420,
      height: "auto",
      objectFit: "contain",
      display: "block",
      animation: "luna-fade-up 0.4s ease",
    }}
  />
);

/* ── CONNECT ─────────────────────────────────── */
const ConnectScene = () => (
  <img
    src="/luna/connect.png"
    alt="Connect — Data In"
    style={{
      width: "auto",
      maxWidth: 320,
      maxHeight: 420,
      height: "auto",
      objectFit: "contain",
      display: "block",
      animation: "luna-fade-up 0.4s ease",
    }}
  />
);

export default ProductionAnchorSlide;
