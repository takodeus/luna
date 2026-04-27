import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";

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
    eyebrow: "Reasoning Agent",
    title: "ATLAS",
    titleColor: "#611FAD",
    body: "Chat-based orchestration agent. Ask a question, get a governed answer with full lineage. No SQL, no BI tooling.",
  },
  {
    eyebrow: "Reporting Layer",
    title: "BI Delivery",
    titleColor: "#611FAD",
    body: "Governed semantic models exposed to Looker, Tableau, Power BI, and the rest of your reporting stack. Every dashboard reads from Core.",
  },
  {
    eyebrow: "Agent Platform",
    title: "Agent STUDIO",
    titleColor: "#611FAD",
    body: "Build, deploy, and operate agents on the governed graph. Not prompts wrapped around spreadsheets. Reasoning agents on production infrastructure.",
  },
  {
    eyebrow: "MCP",
    title: "Any AI, Any Model",
    titleColor: "#611FAD",
    body: "Cherre's MCP server delivers governed context to Claude for Enterprise, ChatGPT Enterprise, and any MCP-aware agent. Already in production with select Cherre clients.",
    status: "limited" as const,
  },
];

/* ── CORE SUB-TILES ──────── */
const coreProducts = [
  {
    eyebrow: "Entity Resolution",
    title: "LUNA",
    titleColor: "#1B70B1",
    body: "Resolves identity across fragmented records. Every property, every entity, every transaction reconciled to a single canonical reference with full lineage.",
  },
  {
    eyebrow: "Knowledge Graph",
    title: "MERIDIAN",
    titleColor: "#1B70B1",
    body: "The governed knowledge graph. Resolved entities, traceable relationships, full history. The substrate every reasoning surface queries.",
  },
  {
    eyebrow: "Governed Meaning",
    title: "Semantic Layer",
    titleColor: "#1B70B1",
    body: "Governed metric definitions, dimensions, and business logic. Versioned, traceable, and consistent across every dashboard, query, and agent. The single source of truth for what your numbers mean.",
  },
];

/* ── CONNECT SUB-TILES ──────── */
const connectProducts = [
  {
    eyebrow: "Direct Ingestion",
    title: "Pipelines",
    titleColor: "#A8185E",
    body: "Connectors and ingest workflows for ERP, deal management, leasing platforms, and warehouses. Pre-built integrations across the leading systems of record in real assets.",
  },
  {
    eyebrow: "Partner Submissions",
    title: "Submissions",
    titleColor: "#A8185E",
    body: "Streamlines and standardizes data collection from third-party vendors and investment managers. Map your data and set rules to automate ingestion, standardization, and validation.",
  },
  {
    eyebrow: "Market Intelligence",
    title: "Market Data",
    titleColor: "#A8185E",
    body: "Curated public and licensed feeds: comps, demographics, property records, market signals, pre-resolved against your portfolio entities and ready to query alongside your operational data.",
  },
];

interface ProductionAnchorSlideProps {
  architectureOpen: boolean;
  onArchitectureToggle: () => void;
}

const ProductionAnchorSlide = ({ architectureOpen, onArchitectureToggle }: ProductionAnchorSlideProps) => {
  const [active, setActive] = useState<TileKey>(null);
  const [qualityOpen, setQualityOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handler = () => setIsMobile(mq.matches);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleTileClick = (key: Exclude<TileKey, null>) => {
    setQualityOpen(false);
    setActive((prev) => {
      const next = prev === key ? null : key;
      if (next) trackEvent("luna_tile_opened", { tile: key });
      return next;
    });
  };

  const toggleQuality = () => {
    setActive(null);
    setQualityOpen((o) => {
      const next = !o;
      if (next) trackEvent("luna_quality_opened", {});
      return next;
    });
  };

  return (
    <section className="slide" id="s14" style={{ background: "#fff" }}>
      <div className="slide-n">xiv / The Cherre Platform</div>

      <h2 className="luna-h2">
        The platform is Cherre.
        <br />
        <span className="luna-accent">Already running.</span>
      </h2>

      <p className="luna-body-text" style={{ maxWidth: 820, marginTop: "1.2rem", fontSize: "1.05rem" }}>
        For more than a decade, Cherre has been doing the difficult work beneath the visible layer of real assets technology: resolving identities, governing definitions, preserving lineage, and translating fragmented systems into usable meaning. Already deployed across the world's largest investors, managers, and operators. The reasoning era doesn't need to be built. It needs to be deployed on what's already there.
      </p>

      <p style={{ fontFamily: "var(--serif)", fontSize: "1.15rem", fontWeight: 600, fontStyle: "italic", color: "#A8185E", lineHeight: 1.55, margin: "-0.4rem 0 0", maxWidth: 820 }}>
        From pilot to production.
      </p>

      {/* MAIN ROW: desktop side-by-side; mobile accordion. Quality sits as a full-width foundation bar below. */}
      {!isMobile && (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "20% 1fr",
          gap: "2rem",
          marginTop: "2.2rem",
          maxWidth: 1200,
          alignItems: "start",
        }}
      >
        {/* LEFT: vertical 1x3 stack of skinny tiles */}
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

        {/* RIGHT: scene pane (swaps on click) */}
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

      {/* QUALITY FOUNDATION BAR (desktop): full-width horizontal bar beneath the data-flow stack */}
      {!isMobile && (
        <div style={{ maxWidth: 960, marginTop: "1.2rem" }}>
          <button
            onClick={toggleQuality}
            style={{
              appearance: "none",
              width: "100%",
              cursor: "pointer",
              background: qualityOpen ? "#23A98E" : "#FAFAFA",
              borderTop: "4px solid #23A98E",
              borderLeft: "none",
              borderRight: "none",
              borderBottom: "none",
              padding: "1rem 1.4rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1.2rem",
              transition: "background 0.2s ease",
              textAlign: "left",
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", flexWrap: "wrap" }}>
              <span style={{
                fontFamily: "var(--mono)", fontSize: "0.62rem", fontWeight: 700,
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: qualityOpen ? "rgba(255,255,255,0.75)" : "#23A98E",
              }}>Cherre</span>
              <span style={{
                fontSize: "1.15rem", fontWeight: 800, letterSpacing: "0.02em",
                color: qualityOpen ? "#fff" : "#000",
              }}>QUALITY</span>
              <span style={{
                fontFamily: "var(--serif)", fontSize: "0.85rem",
                fontStyle: "italic", fontWeight: 600,
                color: qualityOpen ? "rgba(255,255,255,0.9)" : "#23A98E",
              }}>Data Integrity. The foundation beneath Connect, Core, and Alpha.</span>
            </div>
            <span style={{
              fontFamily: "var(--mono)", fontSize: "0.6rem", fontWeight: 700,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: qualityOpen ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.4)",
              transform: qualityOpen ? "rotate(45deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease", lineHeight: 1,
            } as React.CSSProperties}>+</span>
          </button>
          {qualityOpen && (
        <div
          style={{
            background: "#FAFAFA",
            padding: "1.6rem 2rem",
            display: "flex",
            gap: "2rem",
            alignItems: "flex-start",
            animation: "luna-fade-up 0.3s ease",
          }}
        >
          <div style={{ flex: "0 0 200px" }}>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: "0.62rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#23A98E",
                marginBottom: "0.3rem",
              }}
            >
              Cherre Quality
            </div>
            <div
              style={{
                fontFamily: "var(--serif)",
                fontSize: "0.95rem",
                fontStyle: "italic",
                fontWeight: 600,
                color: "#23A98E",
              }}
              >
              Data Integrity
            </div>
          </div>
          <p
            style={{
              flex: 1,
              fontSize: "0.92rem",
              color: "#000",
              lineHeight: 1.7,
              margin: 0,
              maxWidth: 720,
            }}
          >
            Always-on validation and observability. Every transformation traced from source to system. Full audit trail before data is used.
          </p>
        </div>
          )}
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
                          status={(p as any).status}
                        />
                      ))}
                    </div>
                    <div style={{
                      display: "flex", justifyContent: "center",
                      marginTop: "1rem",
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
                  </div>
                )}
              </div>
            );
          })}

          {/* QUALITY mobile accordion item: orthogonal, independent state */}
          <div style={{ background: "#FAFAFA" }}>
            <button
              onClick={toggleQuality}
              style={{
                appearance: "none",
                width: "100%",
                textAlign: "left",
                cursor: "pointer",
                background: qualityOpen ? "#fff" : "#FAFAFA",
                borderTop: "4px solid #23A98E",
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
                  letterSpacing: "0.2em", textTransform: "uppercase", color: "#23A98E",
                  marginBottom: "0.2rem",
                }}>Cherre</div>
                <div style={{
                  fontSize: "1.25rem", fontWeight: 800, color: "#000",
                  letterSpacing: "-0.01em", lineHeight: 1, marginBottom: "0.25rem",
                }}>QUALITY</div>
                <div style={{
                  fontFamily: "var(--serif)", fontSize: "0.78rem",
                  fontStyle: "italic", color: "#23A98E", fontWeight: 600,
                }}>Data Integrity</div>
              </div>
              <span style={{
                fontSize: "1.4rem", color: "#23A98E", lineHeight: 1,
                transform: qualityOpen ? "rotate(45deg)" : "rotate(0deg)",
                transition: "transform 0.2s ease",
              }}>+</span>
            </button>
            {qualityOpen && (
              <div style={{
                padding: "1rem 1.2rem 1.4rem",
                background: "#fff",
                animation: "luna-fade-up 0.3s ease",
              }}>
                <p style={{
                  fontSize: "0.85rem", color: "#000", lineHeight: 1.7, margin: 0,
                }}>
                  Always-on validation and observability. Every transformation traced from source to system. Full audit trail before data is used.
                </p>
              </div>
            )}
          </div>

          {active === null && (
            <div style={{ background: "#fff", padding: "1rem", display: "flex", justifyContent: "center" }}>
              <img src="/luna/stack.png" alt="The Cherre stack" style={{ width: "100%", maxWidth: 320, height: "auto" }} />
            </div>
          )}
        </div>
      )}

      {/* SUB-TILES BELOW: only when a main tile is active */}
      {!isMobile && active === "alpha" && (
        <SubTileRow color="#611FAD">
          {alphaProducts.map((p) => (
            <ProductCard
              key={p.title}
              eyebrow={p.eyebrow}
              title={p.title}
              titleColor={p.titleColor}
              body={p.body}
              status={(p as any).status}
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
  status,
}: {
  eyebrow: string;
  title: string;
  titleColor: string;
  body: string;
  status?: "beta" | "coming" | "limited";
}) => {
  const isBeta = status === "beta";
  const isComing = status === "coming";
  const isLimited = status === "limited";
  const hasBadge = isBeta || isComing || isLimited;
  const accentColor = isLimited || isBeta ? "#23A98E" : "#A8185E";
  const borderStyle = isComing
    ? `2px dashed #A8185E`
    : isBeta || isLimited
    ? `2px solid #23A98E`
    : "2px solid transparent";
  const badgeText = isLimited ? "Early Access" : isBeta ? "Beta" : "Coming";
  return (
  <div
    style={{
      background: "#FAFAFA",
      padding: "1.4rem 1.3rem",
      display: "flex",
      flexDirection: "column",
      gap: "0.6rem",
      borderTop: borderStyle,
      position: "relative",
      minHeight: 140,
    }}
  >
    {hasBadge && (
      <div
        style={{
          position: "absolute",
          top: -1,
          right: 8,
          background: accentColor,
          color: "#fff",
          fontFamily: "var(--mono)",
          fontSize: "0.55rem",
          fontWeight: 700,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          padding: "0.2rem 0.5rem",
        }}
      >
        {badgeText}
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
};

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
    alt="Alpha, Data Out"
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
    alt="Core, Data Through"
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
    alt="Connect, Data In"
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
