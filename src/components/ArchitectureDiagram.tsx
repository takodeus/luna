/* ── Full-stack architecture diagram — light theme, matches site ── */

const pink = "#A8185E";
const pinkMid = "#DF2467";
const teal = "#23A98E";
const blue = "#1B70B1";
const amber = "#CC5800";
const inkMid = "hsl(0 0% 25%)";
const inkLight = "hsl(0 0% 45%)";
const rule = "hsl(336 76% 37% / 0.15)";
const mono = "var(--mono)";
const codeMono = "'SF Mono','Fira Code','Consolas',monospace";

/* ── Tiny reusable pieces ── */

const LayerBar = ({ num, name, product, detail }: { num: string; name: string; product?: string; detail?: string }) => (
  <div style={{ background: pink, padding: "0.55rem 1.2rem", display: "flex", alignItems: "baseline", gap: "0.7rem", flexWrap: "wrap" }}>
    <span style={{ fontFamily: mono, fontSize: "0.56rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>{`LAYER ${num}`}</span>
    <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#fff", letterSpacing: "0.04em", textTransform: "uppercase" }}>{name}</span>
    {product && <span style={{ fontSize: "0.60rem", fontWeight: 700, color: "rgba(255,255,255,0.7)", letterSpacing: "0.14em", textTransform: "uppercase" }}>{product}</span>}
    {detail && <span style={{ fontFamily: mono, fontSize: "0.50rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>{detail}</span>}
  </div>
);

const Code = ({ children, color = pink }: { children: React.ReactNode; color?: string }) => (
  <span style={{ fontFamily: codeMono, fontSize: "0.64rem", color, background: "hsl(336 76% 37% / 0.06)", padding: "0.1rem 0.35rem", borderRadius: 2, lineHeight: 1.8 }}>{children}</span>
);

const Tag = ({ children, color = inkLight }: { children: React.ReactNode; color?: string }) => (
  <span style={{ fontFamily: mono, fontSize: "0.50rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color, background: "hsl(336 76% 37% / 0.06)", padding: "0.15rem 0.45rem", borderRadius: 2 }}>{children}</span>
);

const ConnectorLabel = ({ label }: { label: string }) => (
  <div style={{ textAlign: "center", padding: "0.35rem 0" }}>
    <span style={{ fontFamily: mono, fontSize: "0.50rem", letterSpacing: "0.14em", textTransform: "uppercase", color: inkLight }}>{label}</span>
  </div>
);

/* ── Layer 6: Agent Consumers ── */
const agentConsumers = [
  { name: "Retrieval", accent: pink, desc: "Daily, weekly, portfolio queries, synthetic roll-ups, market summaries", tags: ["read_*", "GraphQL"] },
  { name: "Workflow", accent: blue, desc: "Data collection, approval routing, exception triggers, alerting and escalation", tags: ["run_*", "set_*", "notify_*"] },
  { name: "Monitoring", accent: teal, desc: "SLA exceptions, threshold crossings, notification pipelines", tags: ["graphQL_sub", "cron"] },
  { name: "Causal reasoning", accent: amber, desc: "Multi-hop reasoning, root cause analysis, cross-source attribution", tags: ["traverse_*", "explain_*"] },
];

const Layer6 = () => (
  <div>
    <LayerBar num="6" name="Agent Consumers" detail="hit runtime, typed interfaces" />
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: rule }}>
      {agentConsumers.map((a, i) => (
        <div key={i} style={{ background: "#fff", padding: "0.9rem 1rem" }}>
          <div style={{ fontSize: "0.72rem", fontWeight: 700, color: a.accent, marginBottom: "0.3rem" }}>{a.name}</div>
          <div style={{ fontSize: "0.62rem", color: "#000", lineHeight: 1.6, marginBottom: "0.5rem" }}>{a.desc}</div>
          <div style={{ display: "flex", gap: "0.3rem", flexWrap: "wrap" }}>
            {a.tags.map((t, j) => <Tag key={j} color={a.accent}>{t}</Tag>)}
          </div>
        </div>
      ))}
    </div>
    <ConnectorLabel label="queries via REST | GraphQL · typed interfaces" />
  </div>
);

/* ── Layer 5: Orchestration — ATLAS ── */
const Layer5 = () => (
  <div>
    <LayerBar num="5" name="Orchestration" product="ATLAS" />
    <div style={{ background: "#fff", padding: "0.9rem 1.2rem" }}>
      <div className="luna-source" style={{ color: inkLight, marginBottom: "0.5rem" }}>Query execution path</div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", flexWrap: "wrap", lineHeight: 2 }}>
        <Code color={amber}>incoming_query</Code>
        <span style={{ color: inkLight, fontSize: "0.64rem" }}>(lang + user)</span>
        <span style={{ color: pink, fontWeight: 700 }}>→</span>
        <Code>capabilities_framework</Code>
        <span style={{ color: pink, fontWeight: 700 }}>→</span>
        <Code color={teal}>query_[thing | aggregate]</Code>
        <span style={{ color: inkMid, fontSize: "0.58rem" }}>.context + syntax + confirm</span>
        <span style={{ color: pink, fontWeight: 700 }}>→</span>
        <Code color={pinkMid}>execute</Code>
      </div>
    </div>
    <ConnectorLabel label="semantic RD → SQL engine" />
  </div>
);

/* ── Layer 4: Serving ── */
const servingInterfaces = [
  { name: "Hasura GraphQL", items: ["subscriptions", "field-level RBAC", "dedicated read-replicas"] },
  { name: "REST API", items: ["cursor pagination", "versioned paths", "batch endpoints"] },
  { name: "SQL (BigQuery)", items: ["direct connectivity", "entity-scoped access", "tenant-isolated"] },
  { name: "MCP", items: ["tool interfaces", "typed actions", "streaming responses"] },
];

const Layer4 = () => (
  <div>
    <LayerBar num="4" name="Serving" detail="four interfaces, tenant-isolated, cached" />
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: rule }}>
      {servingInterfaces.map((s, i) => (
        <div key={i} style={{ background: "#fff", padding: "0.7rem 0.9rem" }}>
          <div style={{ fontSize: "0.68rem", fontWeight: 700, color: "#000", marginBottom: "0.35rem" }}>{s.name}</div>
          {s.items.map((item, j) => (
            <div key={j} style={{ fontFamily: mono, fontSize: "0.56rem", color: inkMid, lineHeight: 1.8 }}>{item}</div>
          ))}
        </div>
      ))}
    </div>
    <div style={{ background: "#fff", padding: "0.5rem 0.9rem", borderTop: `1px solid ${rule}`, display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap" }}>
      <span className="luna-source" style={{ color: inkLight, flexShrink: 0 }}>Tenant isolation</span>
      <Code color={teal}>service-level security BQ3</Code>
      <span style={{ color: pink, fontWeight: 700, fontSize: "0.7rem" }}>→</span>
      <Code color={teal}>column-restricted views</Code>
      <span style={{ color: pink, fontWeight: 700, fontSize: "0.7rem" }}>→</span>
      <Code color={teal}>self-managed BQ</Code>
    </div>
    <div style={{ background: "#fff", padding: "0.5rem 0.9rem", borderTop: `1px solid ${rule}`, display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap" }}>
      <span className="luna-source" style={{ color: inkLight, flexShrink: 0 }}>Cache</span>
      <Code color={amber}>query-hash + tenant-ID</Code>
      <span style={{ color: pink, fontWeight: 700, fontSize: "0.7rem" }}>→</span>
      <Code color={amber}>automatic cache</Code>
      <span style={{ color: pink, fontWeight: 700, fontSize: "0.7rem" }}>→</span>
      <Code color={amber}>eviction on graph snapshot</Code>
    </div>
  </div>
);

/* ── Layer 3: Knowledge Graph — MERIDIAN ── */
const Layer3 = () => (
  <div>
    <LayerBar num="3" name="Knowledge Graph" product="MERIDIAN" />
    <div style={{ background: "#fff", padding: "0.8rem 1.1rem" }}>
      <div style={{ display: "flex", gap: "0.4rem", marginBottom: "0.7rem", flexWrap: "wrap" }}>
        <Tag color={pink}>schema engine (matching / aggregation)</Tag>
        <Tag color={pink}>graph engine (traversal / pattern match)</Tag>
        <Tag color={pink}>typed query optimizer</Tag>
      </div>
      {/* 3a: Context graph */}
      <div style={{ padding: "0.7rem 0", borderTop: `1px solid ${rule}` }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", marginBottom: "0.4rem" }}>
          <span className="luna-source" style={{ color: teal }}>3a: Context Graph</span>
          <span style={{ fontSize: "0.62rem", fontStyle: "italic", color: inkLight }}>"why did it happen?"</span>
        </div>
        <div style={{ fontFamily: codeMono, fontSize: "0.62rem", color: inkMid, lineHeight: 1.8, background: "hsl(336 76% 37% / 0.04)", padding: "0.4rem 0.7rem", borderRadius: 2 }}>
          MATCH (e:ENTITY)-[:CAUSED_BY]-&gt;(ev:EVENT) WHERE ev.timestamp &gt; $cutoff RETURN PATTERN p1 AND above
        </div>
      </div>
      {/* 3b: Semantic layer */}
      <div style={{ padding: "0.7rem 0", borderTop: `1px solid ${rule}` }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", marginBottom: "0.4rem" }}>
          <span className="luna-source" style={{ color: blue }}>3b: Semantic Layer</span>
          <span style={{ fontSize: "0.62rem", fontStyle: "italic", color: inkLight }}>"how is it measured?"</span>
        </div>
        <div style={{ fontFamily: codeMono, fontSize: "0.62rem", color: inkMid, lineHeight: 1.8, background: "hsl(336 76% 37% / 0.04)", padding: "0.4rem 0.7rem", borderRadius: 2 }}>
          SELECT metric_val(kpi_id, date_range, partition, NRR_corrected_adj(kpi, a(i), a(i)) &gt; date)
        </div>
      </div>
      {/* 3c: Ontology */}
      <div style={{ paddingTop: "0.7rem", borderTop: `1px solid ${rule}` }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", marginBottom: "0.4rem" }}>
          <span className="luna-source" style={{ color: amber }}>3c: Ontology / Cherre UDM</span>
          <span style={{ fontSize: "0.62rem", fontStyle: "italic", color: inkLight }}>"what is this thing?"</span>
        </div>
        <div style={{ fontFamily: codeMono, fontSize: "0.62rem", color: inkMid, lineHeight: 1.8, background: "hsl(336 76% 37% / 0.04)", padding: "0.4rem 0.7rem", borderRadius: 2 }}>
          Property →&nbsp;[:OWNED_BY]&nbsp;→ Owner →&nbsp;[:MANAGES]&nbsp;→ Fund →&nbsp;[:CONTAINS]&nbsp;→ Portfolio
        </div>
      </div>
    </div>
    <ConnectorLabel label="ingests from" />
  </div>
);

/* ── Layer 2: Entity Resolution — Luna ── */
const pipelineStages = [
  { stage: "pre-filter", detail: "geo + type + hash", color: inkMid },
  { stage: "block / index", detail: "blocks(records)", color: pink },
  { stage: "pairwise scores", detail: "model predictions", color: pink },
  { stage: "link / fuse", detail: "13+ entity types", color: teal },
  { stage: "verify", detail: "audit logs", color: teal },
];

const Layer2 = () => (
  <div>
    <div style={{ background: pink, padding: "0.55rem 1.2rem", display: "flex", alignItems: "baseline", gap: "0.7rem", flexWrap: "wrap" }}>
      <span style={{ fontFamily: mono, fontSize: "0.56rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>LAYER 2</span>
      <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#fff", letterSpacing: "0.04em", textTransform: "uppercase" }}>Entity Resolution</span>
      <span style={{ fontSize: "0.60rem", fontWeight: 700, color: "rgba(255,255,255,0.7)", letterSpacing: "0.14em", textTransform: "uppercase" }}>Luna</span>
      <span style={{ fontFamily: mono, fontSize: "0.50rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: pink, background: "#fff", padding: "0.1rem 0.5rem", borderRadius: 2 }}>CORE</span>
    </div>
    <div style={{ background: "#fff", padding: "0.9rem 1.2rem" }}>
      <div className="luna-source" style={{ color: inkLight, marginBottom: "0.6rem" }}>Resolution pipeline · sequential stages, each narrows candidate set</div>
      <div style={{ display: "flex", alignItems: "stretch", gap: 0, marginBottom: "0.8rem" }}>
        {pipelineStages.map((s, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 0, flex: 1 }}>
            <div style={{ background: "hsl(336 76% 37% / 0.04)", border: `1px solid ${rule}`, padding: "0.5rem 0.5rem", flex: 1, textAlign: "center" }}>
              <div style={{ fontFamily: codeMono, fontSize: "0.62rem", color: s.color, fontWeight: 600, marginBottom: "0.15rem" }}>{s.stage}</div>
              <div style={{ fontFamily: mono, fontSize: "0.48rem", color: inkLight }}>{s.detail}</div>
            </div>
            {i < pipelineStages.length - 1 && (
              <span style={{ color: pink, fontSize: "0.7rem", padding: "0 0.2rem", flexShrink: 0, fontWeight: 700 }}>→</span>
            )}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
        <Code color={pinkMid}>POST /v1/resolve</Code>
        <Code color={pinkMid}>POST /v1/resolve/batch</Code>
        <Code color={inkLight}>LinkMatchExplanation</Code>
        <Code color={inkLight}>UnifiedEntityID</Code>
      </div>
      <div style={{ marginTop: "0.3rem" }}>
        <Code color={pinkMid}>POST /v1/resolve/reverse</Code>
      </div>
    </div>
    <ConnectorLabel label="all queries routed against canonical entity IDs from" />
  </div>
);

/* ── Layer 1: Ingestion & Storage ── */
const ingestionCols = [
  { name: "dbt", accent: blue, items: ["~18 model connections", "API ingest pipelines", "SQL transformations"] },
  { name: "BigQuery", accent: pink, items: ["structured (facility, etc.)", "column-level access", "CSL/API/DB (live)"] },
  { name: "Source connectors", accent: teal, items: ["100+ CRE sources", "CSV, API, DB (live)", "Recorders"] },
];

const Layer1 = () => (
  <div>
    <LayerBar num="1" name="Ingestion & Storage" />
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: rule }}>
      {ingestionCols.map((c, i) => (
        <div key={i} style={{ background: "#fff", padding: "0.7rem 0.9rem" }}>
          <div style={{ fontSize: "0.68rem", fontWeight: 700, color: c.accent, marginBottom: "0.3rem" }}>{c.name}</div>
          {c.items.map((item, j) => (
            <div key={j} style={{ fontFamily: mono, fontSize: "0.56rem", color: inkMid, lineHeight: 1.8 }}>{item}</div>
          ))}
        </div>
      ))}
    </div>
    <div style={{ background: "#fff", padding: "0.5rem 0.9rem", borderTop: `1px solid ${rule}`, display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap" }}>
      <span className="luna-source" style={{ color: inkLight, flexShrink: 0 }}>Systems of record</span>
      {["Yardi", "RealPage", "VTS", "partner exports", "MLS", "tax", "census", "satellites", "Recorders"].map((s, i) => (
        <span key={i} style={{ fontFamily: mono, fontSize: "0.56rem", color: inkMid }}>
          {s}{i < 8 && <span style={{ color: inkLight, margin: "0 0.15rem" }}>·</span>}
        </span>
      ))}
    </div>
  </div>
);

/* ── Main diagram ── */
const ArchitectureDiagram = () => (
  <div style={{
    maxWidth: 960,
    marginTop: "2.5rem",
    marginBottom: "-2vh",
    border: `1px solid ${rule}`,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    gap: 0,
  }}>
    <Layer6 />
    <Layer5 />
    <Layer4 />
    <Layer2 />
    <Layer3 />
    <Layer1 />
  </div>
);

export default ArchitectureDiagram;
