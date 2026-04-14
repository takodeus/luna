/* ── Full-stack architecture diagram — real implementation details ── */

const pink = "#A8185E";
const pinkMid = "#DF2467";
const teal = "#23A98E";
const blue = "#1B70B1";
const amber = "#CC5800";
const purple = "#611FAD";
const inkMid = "hsl(0 0% 25%)";
const inkLight = "hsl(0 0% 45%)";
const rule = "hsl(336 76% 37% / 0.15)";
const mono = "var(--mono)";
const codeMono = "var(--mono)";
const codeBg = "hsl(336 76% 37% / 0.04)";

/* ── Reusable pieces ── */

const LayerBar = ({ num, name, product, detail }: { num: string; name: string; product?: string; detail?: string }) => (
  <div style={{ background: pink, padding: "0.75rem 1.4rem", display: "flex", alignItems: "baseline", gap: "0.7rem", flexWrap: "wrap" }}>
    <span style={{ fontFamily: mono, fontSize: "0.66rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>{`LAYER ${num}`}</span>
    <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#fff", letterSpacing: "0.04em", textTransform: "uppercase" }}>{name}</span>
    {product && <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "rgba(255,255,255,0.7)", letterSpacing: "0.14em", textTransform: "uppercase" }}>{product}</span>}
    {detail && <span style={{ fontFamily: mono, fontSize: "0.64rem", letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>{detail}</span>}
  </div>
);

const Code = ({ children, color = pink }: { children: React.ReactNode; color?: string }) => (
  <span style={{ fontFamily: codeMono, fontSize: "0.74rem", color, background: "hsl(336 76% 37% / 0.06)", padding: "0.1rem 0.35rem", borderRadius: 2, lineHeight: 1.8 }}>{children}</span>
);

const Tag = ({ children, color = inkLight }: { children: React.ReactNode; color?: string }) => (
  <span style={{ fontFamily: mono, fontSize: "0.60rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color, background: "hsl(336 76% 37% / 0.06)", padding: "0.15rem 0.45rem", borderRadius: 2 }}>{children}</span>
);

const ConnectorLabel = ({ label }: { label: string }) => (
  <div style={{ textAlign: "center", padding: "0.6rem 0" }}>
    <span style={{ fontFamily: mono, fontSize: "0.60rem", letterSpacing: "0.14em", textTransform: "uppercase", color: inkLight }}>{label}</span>
  </div>
);

const CodeBlock = ({ children }: { children: React.ReactNode }) => (
  <div style={{ fontFamily: codeMono, fontSize: "0.72rem", color: inkMid, lineHeight: 1.8, background: codeBg, padding: "0.5rem 0.8rem", borderRadius: 2 }}>
    {children}
  </div>
);

/* ── Layer 6: Agent Consumers ── */
const agentConsumers = [
  { name: "Lookup / List", accent: pink, desc: "Single-entity retrieval, filtered lists, portfolio roll-ups via typed GQL queries", tags: ["get_schema", "execute_graph_query"] },
  { name: "Count / Aggregate", accent: blue, desc: "Metric aggregation with governed definitions, period-over-period comparison", tags: ["COUNT", "GROUP BY", "semantic layer"] },
  { name: "Comparison", accent: teal, desc: "Cross-entity normalization via semantic layer, multi-source attribution", tags: ["ask_user_questions", "create_artifact"] },
  { name: "Explore", accent: amber, desc: "Multi-hop graph traversal, causal reasoning, follow-up generation", tags: ["load_skill", "save_item", "search_items"] },
];

const Layer6 = () => (
  <div>
    <LayerBar num="6" name="Agent Consumers" detail="SSE streaming, typed interfaces" />
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: rule }}>
      {agentConsumers.map((a, i) => (
        <div key={i} style={{ background: "#fff", padding: "1.1rem 1.2rem" }}>
          <div style={{ fontSize: "0.82rem", fontWeight: 700, color: a.accent, marginBottom: "0.3rem" }}>{a.name}</div>
          <div style={{ fontSize: "0.72rem", color: "#000", lineHeight: 1.6, marginBottom: "0.5rem" }}>{a.desc}</div>
          <div style={{ display: "flex", gap: "0.3rem", flexWrap: "wrap" }}>
            {a.tags.map((t, j) => <Tag key={j} color={a.accent}>{t}</Tag>)}
          </div>
        </div>
      ))}
    </div>
    <div style={{ background: "#fff", padding: "0.65rem 1.1rem", borderTop: `1px solid ${rule}`, display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
      <span className="luna-source" style={{ color: inkLight, flexShrink: 0 }}>SSE events</span>
      {["message_start", "content_block_delta", "content_block_stop", "interrupt"].map((e, i) => (
        <Code key={i} color={inkMid}>{e}</Code>
      ))}
    </div>
    <ConnectorLabel label="POST /api/v1/owners/{owner}/agents/atlas/stream" />
  </div>
);

/* ── Layer 5: Orchestration — ATLAS ── */
const atlasPhases = [
  { phase: "Classify", detail: "query type", color: inkMid },
  { phase: "Schema", detail: "gemini-2.5-flash", color: blue },
  { phase: "Reflect", detail: "requirements", color: inkMid },
  { phase: "Discover", detail: "verify filters", color: teal },
  { phase: "Execute", detail: "GQL → Meridian", color: pink },
  { phase: "Synthesize", detail: "follow-ups", color: amber },
];

const Layer5 = () => (
  <div>
    <LayerBar num="4" name="Orchestration" product="ATLAS" detail="LangChain + LangGraph" />
    <div style={{ background: "#fff", padding: "1.1rem 1.4rem" }}>
      <div style={{ fontSize: "0.82rem", fontWeight: 700, color: inkMid, marginBottom: "0.5rem" }}>6-phase query pipeline</div>
      <div style={{ display: "flex", alignItems: "stretch", gap: 0, marginBottom: "0.9rem" }}>
        {atlasPhases.map((p, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 0, flex: 1 }}>
            <div style={{ background: codeBg, border: `1px solid ${rule}`, padding: "0.45rem 0.4rem", flex: 1, textAlign: "center" }}>
              <div style={{ fontFamily: codeMono, fontSize: "0.72rem", color: p.color, fontWeight: 600, marginBottom: "0.1rem" }}>{p.phase}</div>
              <div style={{ fontFamily: mono, fontSize: "0.56rem", color: inkLight }}>{p.detail}</div>
            </div>
            {i < atlasPhases.length - 1 && (
              <span style={{ color: pink, fontSize: "0.65rem", padding: "0 0.1rem", flexShrink: 0, fontWeight: 700 }}>→</span>
            )}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        <div>
          <div className="luna-source" style={{ color: inkLight, marginBottom: "0.3rem" }}>Primary LLM</div>
          <Code color={pink}>gemini-3.1-pro-preview</Code>
          <span style={{ fontFamily: codeMono, fontSize: "0.56rem", color: inkLight, marginLeft: "0.3rem" }}>temp 0.3, thinking "medium"</span>
        </div>
        <div>
          <div className="luna-source" style={{ color: inkLight, marginBottom: "0.3rem" }}>Fallback</div>
          <Code color={inkMid}>gemini-2.5-pro</Code>
          <span style={{ fontFamily: codeMono, fontSize: "0.56rem", color: inkLight, marginLeft: "0.3rem" }}>budget 2048</span>
        </div>
        <div>
          <div className="luna-source" style={{ color: inkLight, marginBottom: "0.3rem" }}>Middleware</div>
          <span style={{ fontFamily: codeMono, fontSize: "0.68rem", color: inkMid }}>180K ctx limit → model_fallback → retry 3x (2s→8s)</span>
        </div>
      </div>
    </div>
    <div style={{ background: "#fff", padding: "0.65rem 1.1rem", borderTop: `1px solid ${rule}`, display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
      <span className="luna-source" style={{ color: inkLight, flexShrink: 0 }}>Graphs</span>
      <Code color={purple}>cherre_knowledge_graph</Code>
      <Code color={purple}>cherre_foundation_knowledge_graph</Code>
      <span style={{ fontFamily: codeMono, fontSize: "0.56rem", color: inkLight }}>PostgreSQL checkpointing, MAX_MESSAGES=50</span>
    </div>
    <ConnectorLabel label="execute_graph_query → Meridian API" />
  </div>
);

/* ── Layer 4: Serving ── */
const servingInterfaces = [
  { name: "Hasura GraphQL", accent: pink, items: ["x-hasura-organization-id JWT", "row-level security per org", "Northstar dataset CRUD", "getIsochrone, hazardhub_risks"] },
  { name: "REST API (Sakura)", accent: blue, items: ["Express + Prisma + PostgreSQL", "/api/v1/ — 15+ route groups", "Auth0 OIDC → Passport.js", "OpenFGA fine-grained authz"] },
  { name: "BigQuery", accent: teal, items: ["prd-2-25-cherre-graph-1.publish", "SA impersonation per tenant", "30-min credential refresh", "Column-level access control"] },
  { name: "MCP Server", accent: amber, items: ["5 read-only tools for agents", "execute_query, list_tables", "describe_table, sample_data", "search_schema — governed, typed"] },
];

const Layer4 = () => (
  <div>
    <LayerBar num="5" name="Serving" detail="four interfaces, tenant-isolated" />
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: rule }}>
      {servingInterfaces.map((s, i) => (
        <div key={i} style={{ background: "#fff", padding: "1rem 1.1rem" }}>
          <div style={{ fontSize: "0.78rem", fontWeight: 700, color: s.accent, marginBottom: "0.35rem" }}>{s.name}</div>
          {s.items.map((item, j) => (
            <div key={j} style={{ fontFamily: mono, fontSize: "0.66rem", color: inkMid, lineHeight: 1.8 }}>{item}</div>
          ))}
        </div>
      ))}
    </div>
    <div style={{ background: "#fff", padding: "0.7rem 1.1rem", borderTop: `1px solid ${rule}`, display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
      <span className="luna-source" style={{ color: inkLight, flexShrink: 0 }}>Tenant isolation</span>
      <Code color={teal}>Hasura JWT row-level</Code>
      <span style={{ color: pink, fontWeight: 700, fontSize: "0.65rem" }}>+</span>
      <Code color={teal}>transform@&#123;tenant_project&#125;.iam</Code>
      <span style={{ color: pink, fontWeight: 700, fontSize: "0.65rem" }}>+</span>
      <Code color={teal}>Spanner FGAC role</Code>
    </div>
    <div style={{ background: "#fff", padding: "0.7rem 1.1rem", borderTop: `1px solid ${rule}`, display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
      <span className="luna-source" style={{ color: inkLight, flexShrink: 0 }}>Cache</span>
      <Code color={amber}>Redis encrypted sessions</Code>
      <span style={{ fontFamily: codeMono, fontSize: "0.56rem", color: inkLight }}>+ LRU in-memory (100 entries, 30-min TTL) + HTTP Cache-Control 30-day</span>
    </div>
  </div>
);

/* ── Layer 2: Entity Resolution — Luna ── */
const pipelineStages = [
  { stage: "Resolve", detail: "4-tier address search", color: pink },
  { stage: "Score", detail: "weighted composite", color: pink },
  { stage: "Calibrate", detail: "confidence 0–1.0", color: teal },
  { stage: "Select", detail: "8 policies", color: blue },
  { stage: "Explain", detail: "30-day TTL", color: amber },
];

const Layer2 = () => (
  <div>
    <div style={{ background: pink, padding: "0.75rem 1.4rem", display: "flex", alignItems: "baseline", gap: "0.7rem", flexWrap: "wrap" }}>
      <span style={{ fontFamily: mono, fontSize: "0.66rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>LAYER 3</span>
      <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#fff", letterSpacing: "0.04em", textTransform: "uppercase" }}>Entity Resolution</span>
      <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "rgba(255,255,255,0.7)", letterSpacing: "0.14em", textTransform: "uppercase" }}>Luna</span>
      <span style={{ fontFamily: mono, fontSize: "0.60rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: pink, background: "#fff", padding: "0.1rem 0.5rem", borderRadius: 2 }}>CORE</span>
      <span style={{ fontFamily: mono, fontSize: "0.64rem", letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>Python 3.11 · FastAPI · Cloud SQL</span>
    </div>
    <div style={{ background: "#fff", padding: "1.1rem 1.4rem" }}>
      {/* Entity types + weights */}
      <div style={{ display: "flex", gap: "1.5rem", marginBottom: "0.9rem", flexWrap: "wrap", alignItems: "baseline" }}>
        <div>
          <span style={{ fontSize: "0.82rem", fontWeight: 700, color: inkMid }}>Entity types</span>
          <div style={{ display: "flex", gap: "0.3rem", marginTop: "0.25rem" }}>
            <Tag color={pink}>ADDRESS</Tag><Tag color={pink}>BUILDING</Tag><Tag color={pink}>PARCEL</Tag>
          </div>
        </div>
        <div>
          <span style={{ fontSize: "0.82rem", fontWeight: 700, color: inkMid }}>Scoring weights</span>
          <div style={{ fontFamily: codeMono, fontSize: "0.70rem", color: inkMid, marginTop: "0.25rem" }}>
            parcel: <strong style={{ color: pink }}>0.5</strong> &nbsp; building: <strong style={{ color: pink }}>0.3</strong> &nbsp; address: <strong style={{ color: pink }}>0.2</strong>
          </div>
        </div>
      </div>
      {/* Pipeline */}
      <div style={{ fontSize: "0.82rem", fontWeight: 700, color: inkMid, marginBottom: "0.5rem" }}>Resolution pipeline · exact → hybrid → single-source → semantic/vector</div>
      <div style={{ display: "flex", alignItems: "stretch", gap: 0, marginBottom: "0.9rem" }}>
        {pipelineStages.map((s, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 0, flex: 1 }}>
            <div style={{ background: codeBg, border: `1px solid ${rule}`, padding: "0.45rem 0.4rem", flex: 1, textAlign: "center" }}>
              <div style={{ fontFamily: codeMono, fontSize: "0.72rem", color: s.color, fontWeight: 600, marginBottom: "0.1rem" }}>{s.stage}</div>
              <div style={{ fontFamily: mono, fontSize: "0.56rem", color: inkLight }}>{s.detail}</div>
            </div>
            {i < pipelineStages.length - 1 && (
              <span style={{ color: pink, fontSize: "0.65rem", padding: "0 0.1rem", flexShrink: 0, fontWeight: 700 }}>→</span>
            )}
          </div>
        ))}
      </div>
      {/* Calibration details */}
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "0.9rem" }}>
        <div style={{ fontFamily: codeMono, fontSize: "0.68rem", color: inkMid }}>
          <span style={{ color: inkLight }}>threshold:</span> 0.9 &nbsp;
          <span style={{ color: inkLight }}>high_margin_boost:</span> 0.30 &nbsp;
          <span style={{ color: inkLight }}>conflict_penalty:</span> 0.15 &nbsp;
          <span style={{ color: inkLight }}>corroboration (3+ src):</span> +0.20
        </div>
      </div>
      {/* Selection + endpoints */}
      <div style={{ display: "flex", gap: "0.3rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
        {["HIGH_CONFIDENCE", "AMBIGUOUS_FORCED", "CONFLICT_FORCED", "NO_MATCH"].map((s, i) => (
          <Tag key={i} color={i === 0 ? teal : inkLight}>{s}</Tag>
        ))}
      </div>
      <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
        <Code color={pinkMid}>POST /v1/owners/&#123;owner&#125;/entity-resolution/resolutions</Code>
        <Code color={inkLight}>GET .../&#123;id&#125;/explanation</Code>
      </div>
      <div style={{ marginTop: "0.25rem", display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
        <span style={{ fontFamily: codeMono, fontSize: "0.54rem", color: inkLight }}>Policies:</span>
        {["default", "high_precision", "high_recall", "parcel_anchor", "cautious"].map((p, i) => (
          <Code key={i} color={inkMid}>{p}</Code>
        ))}
      </div>
    </div>
    <ConnectorLabel label="resolved entity IDs anchor all graph queries" />
  </div>
);

/* ── Layer 3: Knowledge Graph — MERIDIAN ── */
const Layer3 = () => (
  <div>
    <LayerBar num="2" name="Knowledge Graph" product="MERIDIAN" detail="Spanner Graph + BigQuery Graph · SQL + GQL" />
    <div style={{ background: "#fff", padding: "1.1rem 1.3rem" }}>
      <div style={{ display: "flex", gap: "0.4rem", marginBottom: "0.9rem", flexWrap: "wrap" }}>
        <Tag color={pink}>Dynamic DDL introspection</Tag>
        <Tag color={pink}>INFORMATION_SCHEMA.PROPERTY_GRAPHS</Tag>
        <Tag color={pink}>NORMAL | PLAN | PROFILE</Tag>
      </div>
      {/* Graph schema */}
      <div style={{ padding: "0.7rem 0", borderTop: `1px solid ${rule}` }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", marginBottom: "0.4rem" }}>
          <span style={{ fontSize: "0.82rem", fontWeight: 700, color: teal }}>Graph Schema — 35+ node models, 100+ edge models</span>
        </div>
        <CodeBlock>
          <span style={{ color: pink }}>Nodes:</span> cherre_address, building_footprint, parcel, county, cbsa, zip, master_event, party, asset_class, sales_event, tax_event, loan_event ...
          <br />
          <span style={{ color: pink }}>Edges:</span> address_on_building, address_on_parcel, building_on_parcel, sales_address, master_event_party, luna_address_on_building ...
        </CodeBlock>
      </div>
      {/* Spanner graph query */}
      <div style={{ padding: "0.7rem 0", borderTop: `1px solid ${rule}` }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", marginBottom: "0.4rem" }}>
          <span style={{ fontSize: "0.82rem", fontWeight: 700, color: blue }}>Spanner GQL</span>
          <span style={{ fontSize: "0.72rem", fontStyle: "italic", color: inkLight }}>CherreCanonicalGraph — 20+ node DDLs, 17+ edge DDLs</span>
        </div>
        <CodeBlock>
          GRAPH CherreCanonicalGraph MATCH (a:cherre_address)-[e:address_on_building]-&gt;(b:building_footprint) WHERE a.state = @state RETURN a.display_address, b.building_id
        </CodeBlock>
      </div>
      {/* BigQuery graph query */}
      <div style={{ paddingTop: "0.7rem", borderTop: `1px solid ${rule}` }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", marginBottom: "0.4rem" }}>
          <span style={{ fontSize: "0.82rem", fontWeight: 700, color: amber }}>BigQuery Property Graph</span>
          <span style={{ fontSize: "0.72rem", fontStyle: "italic", color: inkLight }}>cherre-graph, bpg — per-owner datasets</span>
        </div>
        <CodeBlock>
          POST /v1/owners/&#123;owner&#125;/bigquery-graph/queries &nbsp;→&nbsp; &#123;sql, useLegacySql, dryRun, labels: &#123;app: "meridian-api", owner, user-id&#125;&#125;
        </CodeBlock>
      </div>
    </div>
    <div style={{ background: "#fff", padding: "0.65rem 1.1rem", borderTop: `1px solid ${rule}`, display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
      <span className="luna-source" style={{ color: inkLight, flexShrink: 0 }}>Auth</span>
      <span style={{ fontFamily: codeMono, fontSize: "0.68rem", color: inkMid }}>ADC → SA impersonation (pod SA → graph-reader SA) → Bearer token</span>
      <span style={{ fontFamily: codeMono, fontSize: "0.56rem", color: inkLight }}>· IAP JWT validation · deny-list regex</span>
    </div>
    <ConnectorLabel label="ingests from" />
  </div>
);

/* ── Layer 1: Ingestion & Storage ── */
const Layer1 = () => (
  <div>
    <LayerBar num="1" name="Ingestion & Storage" detail="dbt · BigQuery · 250+ Singer taps · Dataproc" />
    <div style={{ background: "#fff", padding: "1.1rem 1.3rem" }}>
      {/* dbt execution model */}
      <div style={{ fontSize: "0.82rem", fontWeight: 700, color: inkMid, marginBottom: "0.5rem" }}>dbt project: cherre-graph · 164 projects · 5-layer execution model</div>
      <div style={{ display: "flex", alignItems: "stretch", gap: 0, marginBottom: "0.9rem" }}>
        {[
          { name: "core_sources", detail: "extract + ID gen", color: inkMid },
          { name: "core_dimension", detail: "SHA256 hashed", color: blue },
          { name: "core_edge_calc", detail: "spatial (views)", color: teal },
          { name: "core_domain", detail: "final edge tables", color: pink },
          { name: "core_master", detail: "unified event hub", color: amber },
        ].map((s, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 0, flex: 1 }}>
            <div style={{ background: codeBg, border: `1px solid ${rule}`, padding: "0.45rem 0.35rem", flex: 1, textAlign: "center" }}>
              <div style={{ fontFamily: codeMono, fontSize: "0.72rem", color: s.color, fontWeight: 600, marginBottom: "0.1rem" }}>{s.name}</div>
              <div style={{ fontFamily: mono, fontSize: "0.54rem", color: inkLight }}>{s.detail}</div>
            </div>
            {i < 4 && <span style={{ color: pink, fontSize: "0.65rem", padding: "0 0.1rem", flexShrink: 0, fontWeight: 700 }}>→</span>}
          </div>
        ))}
      </div>
      {/* Partitioning */}
      <CodeBlock>
        <span style={{ color: pink }}>Partitioning:</span> MOD(FARM_FINGERPRINT(pk), 100000) → ~1,921 partitions &nbsp;·&nbsp; <span style={{ color: pink }}>Cluster:</span> primary_key &nbsp;·&nbsp; <span style={{ color: pink }}>PySpark:</span> Dataproc serverless, 10–100 executors
      </CodeBlock>
    </div>
    {/* Source datasets */}
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: rule, borderTop: `1px solid ${rule}` }}>
      {[
        { name: "Foundation", accent: blue, items: ["parcel_boundary_v2", "tax_assessor_v2", "usa_building_footprint_v2", "usa_demographics_v2"] },
        { name: "Transactions", accent: pink, items: ["rca_connect_transactions", "unifiedloanuniverse_all (Trepp)", "buildcentral_constructionwire", "foundation_recorder_cherre"] },
        { name: "Geography + Market", accent: teal, items: ["usa_county / cbsa / zip boundary", "cherre_address (prd-5-address)", "green_street sector/submarket", "ncreif_npi_odce_msa"] },
      ].map((c, i) => (
        <div key={i} style={{ background: "#fff", padding: "1rem 1.1rem" }}>
          <div style={{ fontSize: "0.76rem", fontWeight: 700, color: c.accent, marginBottom: "0.3rem" }}>{c.name}</div>
          {c.items.map((item, j) => (
            <div key={j} style={{ fontFamily: codeMono, fontSize: "0.66rem", color: inkMid, lineHeight: 1.8 }}>{item}</div>
          ))}
        </div>
      ))}
    </div>
    <div style={{ background: "#fff", padding: "0.65rem 1.1rem", borderTop: `1px solid ${rule}`, display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
      <span className="luna-source" style={{ color: inkLight, flexShrink: 0 }}>Ingestion</span>
      <span style={{ fontFamily: codeMono, fontSize: "0.68rem", color: inkMid }}>250+ Singer taps (cherre-singer-ingest v5.2.3+) → SFTP/S3/API → GCS staging → BQ ephemeral → final dataset</span>
    </div>
  </div>
);

/* ── Main diagram ── */
const ArchitectureDiagram = () => (
  <div style={{
    maxWidth: 960,
    marginTop: "2.5rem",
    border: `1px solid ${rule}`,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    gap: 4,
  }}>
    <Layer6 />
    <Layer4 />
    <Layer5 />
    <Layer2 />
    <Layer3 />
    <Layer1 />
  </div>
);

export default ArchitectureDiagram;
