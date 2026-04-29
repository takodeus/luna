import { useState } from 'react';
import {
  INTAKE_EMAIL, RESOLVED_ENTITIES, OBLIGATIONS, DEVIATIONS, ACTION_ITEMS,
  ResolvedEntity, ObligationView, ActionPriority,
} from './cbreData';

// ─── Style tokens ─────────────────────────────────────────────
const BLUE   = '#1B70B1';
const PLUM   = '#A8185E';
const GREEN  = '#23A98E';
const ORANGE = '#CC5800';
const LAVEN  = '#611FAD';
const MONO   = 'ui-monospace, monospace';
const SANS   = 'Montserrat, sans-serif';

// ─── Steps ────────────────────────────────────────────────────
const STEPS = [
  { num: 1, label: 'Intake',            sub: 'Agreement received'                },
  { num: 2, label: 'Luna',              sub: 'Entity resolution',  system: 'luna'     },
  { num: 3, label: 'Meridian',          sub: 'Schema + taxonomy',  system: 'meridian' },
  { num: 4, label: 'Obligation Matrix', sub: 'Owner / Manager · Landlord / Tenant' },
  { num: 5, label: 'Operational View',  sub: 'Action items'                       },
];

// ─── Attribution badge ────────────────────────────────────────
type BadgeType = 'luna' | 'meridian' | 'both';

const BADGE_CFG: Record<BadgeType, { label: string; color: string; bg: string }> = {
  luna:     { label: 'Luna',            color: PLUM,   bg: '#FFF5F8' },
  meridian: { label: 'Meridian',        color: LAVEN,  bg: '#F3F0FF' },
  both:     { label: 'Luna + Meridian', color: ORANGE, bg: '#FFF8EC' },
};

const Badge = ({ type, tooltip }: { type: BadgeType; tooltip?: string }) => {
  const cfg = BADGE_CFG[type];
  return (
    <span title={tooltip} style={{
      fontSize: '0.56rem', fontWeight: 700, fontFamily: SANS,
      padding: '2px 6px', borderRadius: 10,
      background: cfg.bg, color: cfg.color,
      border: `1px solid ${cfg.color}33`,
      letterSpacing: '0.04em',
      cursor: tooltip ? 'help' : 'default',
      whiteSpace: 'nowrap' as const, flexShrink: 0,
    }}>
      {cfg.label}
    </span>
  );
};

// ─── Helpers ──────────────────────────────────────────────────
const statusColor = (s: ResolvedEntity['status']) =>
  s === 'resolved' ? GREEN : s === 'conflict' ? ORANGE : BLUE;
const priorityColor = (p: ActionPriority) =>
  p === 'urgent' ? PLUM : p === 'action' ? ORANGE : '#888';
const priorityBg = (p: ActionPriority) =>
  p === 'urgent' ? '#FFF5F8' : p === 'action' ? '#FFF8EC' : '#F8F8F8';
const severityColor = (s: string) =>
  s === 'deviation' ? ORANGE : s === 'flag' ? PLUM : '#888';

// ─── Stepper ──────────────────────────────────────────────────
const Stepper = ({ active, onStep }: { active: number; onStep: (n: number) => void }) => (
  <div style={{ display: 'flex', alignItems: 'center', padding: '14px 28px', borderBottom: '1px solid #f0f0f0', gap: 0, background: '#FAFAFA' }}>
    {STEPS.map((s, i) => {
      const done = s.num < active;
      const cur  = s.num === active;
      const dotColor = s.system === 'luna' ? PLUM : s.system === 'meridian' ? LAVEN : null;
      const circleColor = cur ? (dotColor ?? BLUE) : done ? GREEN : '#e8e8e8';
      return (
        <div key={s.num} style={{ display: 'flex', alignItems: 'center', flex: i < STEPS.length - 1 ? 1 : 0 }}>
          <button onClick={() => onStep(s.num)}
            style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0' }}>
            <div style={{ width: 26, height: 26, borderRadius: '50%', flexShrink: 0, background: circleColor, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}>
              {done
                ? <svg width="11" height="9" viewBox="0 0 11 9" fill="none"><path d="M1 4.5l2.5 2.5L10 1" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                : <span style={{ fontSize: '0.58rem', fontWeight: 700, fontFamily: SANS, color: cur ? '#fff' : '#bbb' }}>{s.num}</span>
              }
            </div>
            <div style={{ textAlign: 'left' as const }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, fontFamily: SANS, color: cur ? (dotColor ?? BLUE) : done ? '#333' : '#bbb', lineHeight: 1.2 }}>{s.label}</span>
                {dotColor && cur && <Badge type={s.system as BadgeType} />}
              </div>
              <div style={{ fontSize: '0.56rem', fontFamily: SANS, color: '#bbb', lineHeight: 1.2 }}>{s.sub}</div>
            </div>
          </button>
          {i < STEPS.length - 1 && (
            <div style={{ flex: 1, height: 1, background: done ? GREEN : '#e8e8e8', margin: '0 8px', transition: 'background 0.2s' }} />
          )}
        </div>
      );
    })}
  </div>
);

// ─── Step 1: Intake ───────────────────────────────────────────
const IntakeStep = ({ onNext }: { onNext: () => void }) => (
  <div style={{ padding: '24px 28px' }}>
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 18, flexWrap: 'wrap' as const, gap: 10 }}>
      <div>
        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, fontFamily: SANS, color: '#000', margin: '0 0 4px' }}>Contract intake</h2>
        <p style={{ fontSize: '0.76rem', fontFamily: SANS, color: '#888', margin: 0, lineHeight: 1.55 }}>
          Agreement received. Luna and Meridian run before any field is written.
        </p>
      </div>
      <button onClick={onNext} style={{ padding: '8px 16px', background: PLUM, color: '#fff', border: 'none', borderRadius: 5, fontSize: '0.7rem', fontWeight: 700, fontFamily: SANS, cursor: 'pointer', whiteSpace: 'nowrap' as const }}>
        Run Luna →
      </button>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
      <div style={{ border: '1px solid #eee', borderRadius: 6, overflow: 'hidden' }}>
        <div style={{ background: '#F8F8F8', padding: '10px 14px', borderBottom: '1px solid #eee' }}>
          {[{ label: 'From', value: INTAKE_EMAIL.from }, { label: 'To', value: INTAKE_EMAIL.to }, { label: 'Re', value: INTAKE_EMAIL.subject }].map(row => (
            <div key={row.label} style={{ display: 'flex', gap: 8, marginBottom: 3 }}>
              <span style={{ fontSize: '0.62rem', fontWeight: 700, fontFamily: SANS, color: '#bbb', width: 28, flexShrink: 0 }}>{row.label}</span>
              <span style={{ fontSize: '0.68rem', fontFamily: SANS, color: '#555' }}>{row.value}</span>
            </div>
          ))}
        </div>
        <div style={{ padding: '12px 14px' }}>
          <p style={{ fontSize: '0.72rem', fontFamily: SANS, color: '#555', margin: '0 0 10px', lineHeight: 1.6 }}>{INTAKE_EMAIL.body[0]}</p>
          {INTAKE_EMAIL.fields.map(f => (
            <div key={f.label} style={{ display: 'flex', gap: 8, marginBottom: 5 }}>
              <span style={{ fontSize: '0.62rem', fontWeight: 700, fontFamily: SANS, color: '#bbb', width: 88, flexShrink: 0 }}>{f.label}</span>
              <span style={{ fontSize: '0.68rem', fontFamily: MONO, color: '#333' }}>{f.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div style={{ fontSize: '0.6rem', fontWeight: 700, fontFamily: SANS, color: '#999', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 12 }}>Pipeline — what runs on receipt</div>
        {[
          { step: '1', label: 'Extraction agent', detail: 'Reads all 38 pages. Identifies parties, dates, fee schedules, clause language.', color: '#888', bg: '#F8F8F8', badge: null },
          { step: '2', label: 'Luna',              detail: 'Resolves every named entity. Collapses aliases. Surfaces conflicts before extraction begins.', color: PLUM, bg: '#FFF5F8', badge: 'luna' as BadgeType },
          { step: '3', label: 'Meridian',           detail: 'Maps clauses to obligation schema. Enforces taxonomy. Detects deviations from standard form.', color: LAVEN, bg: '#F3F0FF', badge: 'meridian' as BadgeType },
          { step: '4', label: 'Obligation matrix',  detail: 'Structured record across all parties and documents. MDM-ready.', color: GREEN, bg: '#F0FBF7', badge: 'both' as BadgeType },
        ].map(item => (
          <div key={item.step} style={{ display: 'flex', gap: 10, marginBottom: 10, padding: '10px 12px', borderRadius: 5, background: item.bg, border: `1px solid ${item.color}22` }}>
            <div style={{ width: 22, height: 22, borderRadius: '50%', background: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontSize: '0.58rem', fontWeight: 700, fontFamily: SANS, color: '#fff' }}>{item.step}</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
                <span style={{ fontSize: '0.74rem', fontWeight: 700, fontFamily: SANS, color: item.color }}>{item.label}</span>
                {item.badge && <Badge type={item.badge} />}
              </div>
              <p style={{ fontSize: '0.68rem', fontFamily: SANS, color: '#666', margin: 0, lineHeight: 1.5 }}>{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── Step 2: Luna ─────────────────────────────────────────────
const LunaStep = ({ onNext }: { onNext: () => void }) => {
  const [activeKey, setActiveKey] = useState<string | null>('building');
  const active = RESOLVED_ENTITIES.find(e => e.key === activeKey) ?? null;

  return (
    <div style={{ padding: '24px 28px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 18, flexWrap: 'wrap' as const, gap: 10 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', background: PLUM, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5" stroke="#fff" strokeWidth="1.3"/><path d="M5 7l1.5 1.5L9 5" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, fontFamily: SANS, color: PLUM }}>Luna — Entity Resolution</div>
              <div style={{ fontSize: '0.6rem', fontFamily: SANS, color: '#999' }}>5 entities resolved · 1 conflict surfaced</div>
            </div>
          </div>
          <p style={{ fontSize: '0.76rem', fontFamily: SANS, color: '#888', margin: 0, lineHeight: 1.55, maxWidth: 520 }}>
            Before a single obligation is written, Luna resolves every named entity in the agreement. Same entity, different names across documents — Luna collapses them to one canonical record and flags anything that requires attention.
          </p>
        </div>
        <button onClick={onNext} style={{ padding: '8px 16px', background: LAVEN, color: '#fff', border: 'none', borderRadius: 5, fontSize: '0.7rem', fontWeight: 700, fontFamily: SANS, cursor: 'pointer', whiteSpace: 'nowrap' as const }}>
          Run Meridian →
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 16 }}>
        <div>
          <div style={{ fontSize: '0.58rem', fontWeight: 700, fontFamily: SANS, color: '#bbb', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 8 }}>Entities resolved</div>
          {RESOLVED_ENTITIES.map(entity => {
            const sc = statusColor(entity.status);
            const isActive = activeKey === entity.key;
            return (
              <div key={entity.key} onClick={() => setActiveKey(entity.key)}
                style={{ padding: '10px 12px', borderRadius: 5, marginBottom: 6, cursor: 'pointer', border: `1.5px solid ${isActive ? sc : '#eee'}`, background: isActive ? `${sc}08` : '#fff', transition: 'all 0.12s' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
                  <span style={{ fontSize: '0.6rem', fontWeight: 700, fontFamily: SANS, color: '#bbb', textTransform: 'uppercase' as const, letterSpacing: '0.05em' }}>{entity.entityType}</span>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: sc, flexShrink: 0 }} />
                </div>
                <div style={{ fontSize: '0.72rem', fontWeight: 600, fontFamily: SANS, color: isActive ? sc : '#333', lineHeight: 1.3 }}>{entity.canonicalName}</div>
                {entity.aliases.length > 0 && (
                  <div style={{ fontSize: '0.6rem', fontFamily: SANS, color: '#bbb', marginTop: 2 }}>{entity.aliases.length} alias{entity.aliases.length > 1 ? 'es' : ''} collapsed</div>
                )}
              </div>
            );
          })}
        </div>

        {active && (() => {
          const sc = statusColor(active.status);
          return (
            <div style={{ background: '#FAFAFA', borderRadius: 6, border: `1px solid ${sc}22`, overflow: 'hidden' }}>
              <div style={{ padding: '14px 18px', background: `${sc}10`, borderBottom: `1px solid ${sc}22` }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: '0.6rem', fontWeight: 700, fontFamily: SANS, color: sc, textTransform: 'uppercase' as const, letterSpacing: '0.08em' }}>{active.entityType}</span>
                    <Badge type="luna" tooltip="Resolved by Luna — canonical record identified from document text" />
                  </div>
                  <span style={{ fontSize: '0.62rem', fontWeight: 700, fontFamily: SANS, padding: '2px 8px', borderRadius: 10, background: `${sc}18`, color: sc }}>{active.statusLabel}</span>
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, fontFamily: SANS, color: '#000', marginBottom: 4 }}>{active.canonicalName}</div>
                {active.rawName !== active.canonicalName && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                    <span style={{ fontSize: '0.62rem', fontFamily: SANS, color: '#bbb' }}>as written:</span>
                    <span style={{ fontSize: '0.64rem', fontFamily: MONO, color: '#888' }}>{active.rawName}</span>
                  </div>
                )}
                {active.aliases.length > 0 && (
                  <div>
                    <div style={{ fontSize: '0.56rem', fontWeight: 700, fontFamily: SANS, color: '#bbb', textTransform: 'uppercase' as const, letterSpacing: '0.06em', marginBottom: 4 }}>Aliases collapsed by Luna</div>
                    <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' as const }}>
                      {active.aliases.map(a => (
                        <span key={a} style={{ fontSize: '0.6rem', fontFamily: MONO, padding: '1px 6px', borderRadius: 3, background: '#fff', border: `1px solid ${sc}33`, color: '#666' }}>{a}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                <div style={{ padding: '14px 18px', borderRight: '1px solid #eee' }}>
                  <div style={{ fontSize: '0.58rem', fontWeight: 700, fontFamily: SANS, color: '#999', textTransform: 'uppercase' as const, letterSpacing: '0.06em', marginBottom: 8 }}>Resolved record</div>
                  {active.details.map(d => (
                    <div key={d.label} style={{ marginBottom: 7 }}>
                      <div style={{ fontSize: '0.6rem', fontFamily: SANS, color: '#bbb' }}>{d.label}</div>
                      <div style={{ fontSize: '0.72rem', fontFamily: SANS, color: '#333', fontWeight: 500 }}>{d.value}</div>
                    </div>
                  ))}
                </div>
                <div style={{ padding: '14px 18px' }}>
                  <div style={{ fontSize: '0.58rem', fontWeight: 700, fontFamily: SANS, color: '#999', textTransform: 'uppercase' as const, letterSpacing: '0.06em', marginBottom: 8 }}>Prior records surfaced</div>
                  {active.priorRecords.map(r => (
                    <div key={r.label} style={{ marginBottom: 7 }}>
                      <div style={{ fontSize: '0.6rem', fontFamily: SANS, color: '#bbb' }}>{r.label}</div>
                      <div style={{ fontSize: '0.72rem', fontFamily: SANS, color: '#333', fontWeight: 500 }}>{r.value}</div>
                    </div>
                  ))}
                </div>
              </div>
              {active.note && (
                <div style={{ padding: '12px 18px', background: `${ORANGE}10`, borderTop: `1px solid ${ORANGE}22` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1L13 12H1L7 1Z" stroke={ORANGE} strokeWidth="1.2" strokeLinejoin="round"/><path d="M7 5v3M7 10v.5" stroke={ORANGE} strokeWidth="1.2" strokeLinecap="round"/></svg>
                    <span style={{ fontSize: '0.62rem', fontWeight: 700, fontFamily: SANS, color: ORANGE, textTransform: 'uppercase' as const, letterSpacing: '0.06em' }}>Luna conflict alert</span>
                    <Badge type="luna" tooltip="Conflict surfaced by Luna — entity resolved but obligation mismatch detected" />
                  </div>
                  <p style={{ fontSize: '0.74rem', fontFamily: SANS, color: '#444', margin: '0 0 10px', lineHeight: 1.55, fontWeight: 500 }}>{active.note}</p>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button style={{ padding: '6px 12px', background: ORANGE, color: '#fff', border: 'none', borderRadius: 4, fontSize: '0.66rem', fontWeight: 700, fontFamily: SANS, cursor: 'pointer' }}>Flag for review</button>
                    <button style={{ padding: '6px 12px', background: 'none', color: ORANGE, border: `1px solid ${ORANGE}44`, borderRadius: 4, fontSize: '0.66rem', fontWeight: 700, fontFamily: SANS, cursor: 'pointer' }}>Request updated certificate</button>
                  </div>
                </div>
              )}
            </div>
          );
        })()}
      </div>
    </div>
  );
};

// ─── Step 3: Meridian ─────────────────────────────────────────
const MERIDIAN_NODES = [
  { id: 'owner',    label: 'Owner',           type: 'Party',  color: PLUM,  x: 70,  y: 80  },
  { id: 'ob_mgmt',  label: 'Mgmt Obligations',type: 'Schema', color: LAVEN, x: 200, y: 80  },
  { id: 'manager',  label: 'Manager',          type: 'Party',  color: GREEN, x: 330, y: 80  },
  { id: 'landlord', label: 'Landlord',          type: 'Role',   color: PLUM,  x: 70,  y: 220 },
  { id: 'ob_lease', label: 'Lease Obligations',type: 'Schema', color: LAVEN, x: 200, y: 220 },
  { id: 'tenant',   label: 'Tenant',            type: 'Party',  color: BLUE,  x: 330, y: 220 },
  { id: 'vendor',   label: 'Vendor',            type: 'Party',  color: '#888',x: 200, y: 320 },
];
const MERIDIAN_EDGES = [
  { from: 'owner',    to: 'ob_mgmt',  label: 'funds' },
  { from: 'manager',  to: 'ob_mgmt',  label: 'executes' },
  { from: 'landlord', to: 'ob_lease', label: 'enforces' },
  { from: 'tenant',   to: 'ob_lease', label: 'owes' },
  { from: 'manager',  to: 'ob_lease', label: 'monitors' },
  { from: 'vendor',   to: 'ob_mgmt',  label: 'serves' },
];
const MERIDIAN_RULES = [
  { label: 'Party cardinality',        detail: 'Each agreement has exactly one Owner and one Manager. Lease has one Landlord (enforced by Manager) and one or more Tenants. These are not interchangeable labels — they are typed nodes.', badge: 'meridian' as BadgeType },
  { label: 'Obligation taxonomy',      detail: 'Obligation types are normalized: Capital, Operating, Insurance, Reporting, Approval. "Expenditure approval" maps to Operating > Approval — not a freeform string.', badge: 'meridian' as BadgeType },
  { label: 'Geography hierarchy',      detail: 'Property is resolved to Market > Submarket > Address. "Brickell" maps to Miami CBD > Brickell submarket in the canonical hierarchy.', badge: 'both' as BadgeType },
  { label: 'Deviation detection',      detail: 'Meridian compares every extracted clause against the CBRE standard form schema. Deviations flagged by type: threshold, notice period, fee structure, insurance limit.', badge: 'meridian' as BadgeType },
];

const MeridianStep = ({ onNext }: { onNext: () => void }) => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [activeRule, setActiveRule] = useState<string | null>(null);
  const getNode = (id: string) => MERIDIAN_NODES.find(n => n.id === id);

  return (
    <div style={{ padding: '24px 28px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 18, flexWrap: 'wrap' as const, gap: 10 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', background: LAVEN, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="4" cy="4" r="2.5" stroke="#fff" strokeWidth="1.2"/><circle cx="10" cy="4" r="2.5" stroke="#fff" strokeWidth="1.2"/><circle cx="7" cy="10" r="2.5" stroke="#fff" strokeWidth="1.2"/><line x1="6.5" y1="4" x2="7.5" y2="4" stroke="#fff" strokeWidth="1.2"/><line x1="7" y1="6.5" x2="7" y2="7.5" stroke="#fff" strokeWidth="1.2"/></svg>
            </div>
            <div>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, fontFamily: SANS, color: LAVEN }}>Meridian — Knowledge Graph</div>
              <div style={{ fontSize: '0.6rem', fontFamily: SANS, color: '#999' }}>Schema enforcement · Obligation taxonomy · Deviation detection</div>
            </div>
          </div>
          <p style={{ fontSize: '0.76rem', fontFamily: SANS, color: '#888', margin: 0, lineHeight: 1.55, maxWidth: 520 }}>
            Meridian defines what each field means and how entities relate. Owner and Manager are not interchangeable. Obligations have types. Deviations are detected against the standard schema.
          </p>
        </div>
        <button onClick={onNext} style={{ padding: '8px 16px', background: BLUE, color: '#fff', border: 'none', borderRadius: 5, fontSize: '0.7rem', fontWeight: 700, fontFamily: SANS, cursor: 'pointer', whiteSpace: 'nowrap' as const }}>
          View obligation matrix →
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        {/* Graph */}
        <div>
          <div style={{ fontSize: '0.58rem', fontWeight: 700, fontFamily: SANS, color: '#bbb', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 8 }}>Relationship model — click any node</div>
          <div style={{ border: '1px solid #eee', borderRadius: 6, overflow: 'hidden', background: '#FAFAFA' }}>
            <svg viewBox="0 0 400 380" width="100%" style={{ display: 'block' }}>
              {MERIDIAN_EDGES.map((edge, i) => {
                const a = getNode(edge.from); const b = getNode(edge.to);
                if (!a || !b) return null;
                return (
                  <g key={i}>
                    <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#e0e0e0" strokeWidth="1.2" strokeDasharray="4 3"/>
                    <text x={(a.x+b.x)/2} y={(a.y+b.y)/2 - 4} textAnchor="middle" fontSize="7.5" fill="#bbb" fontFamily={SANS}>{edge.label}</text>
                  </g>
                );
              })}
              {MERIDIAN_NODES.map(node => {
                const isActive = activeNode === node.id;
                const isSchema = node.type === 'Schema';
                return (
                  <g key={node.id} onClick={() => setActiveNode(isActive ? null : node.id)} style={{ cursor: 'pointer' }}>
                    {isSchema
                      ? <rect x={node.x-52} y={node.y-18} width={104} height={36} rx={5} fill={isActive ? node.color : '#fff'} stroke={node.color} strokeWidth={isActive ? 2 : 1.2}/>
                      : <circle cx={node.x} cy={node.y} r={26} fill={isActive ? node.color : '#fff'} stroke={node.color} strokeWidth={isActive ? 2 : 1.2}/>
                    }
                    <text x={node.x} y={node.y+(isSchema?4:3)} textAnchor="middle" fontSize="8.5" fontWeight="700" fill={isActive ? '#fff' : node.color} fontFamily={SANS}>{node.label}</text>
                    <text x={node.x} y={node.y+(isSchema?15:15)} textAnchor="middle" fontSize="6.5" fill={isActive ? 'rgba(255,255,255,0.7)' : '#bbb'} fontFamily={SANS}>{node.type}</text>
                  </g>
                );
              })}
            </svg>
          </div>
          {activeNode && (() => {
            const node = getNode(activeNode);
            if (!node) return null;
            const edges = MERIDIAN_EDGES.filter(e => e.from === activeNode || e.to === activeNode);
            return (
              <div style={{ marginTop: 10, padding: '10px 12px', borderRadius: 5, background: `${node.color}08`, border: `1px solid ${node.color}22` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, fontFamily: SANS, color: node.color }}>{node.label}</span>
                  <span style={{ fontSize: '0.58rem', fontFamily: SANS, color: '#bbb' }}>{node.type}</span>
                  <Badge type="meridian" tooltip="Node type defined and enforced by Meridian schema" />
                </div>
                <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' as const }}>
                  {edges.map((e, i) => {
                    const other = getNode(e.from === activeNode ? e.to : e.from);
                    if (!other) return null;
                    return (
                      <span key={i} style={{ fontSize: '0.62rem', fontFamily: SANS, padding: '2px 8px', borderRadius: 10, background: '#fff', border: '1px solid #eee', color: '#555' }}>
                        {e.from === activeNode ? `→ ${e.label} ${other.label}` : `← ${e.label} ${other.label}`}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })()}
        </div>

        {/* Rules */}
        <div>
          <div style={{ fontSize: '0.58rem', fontWeight: 700, fontFamily: SANS, color: '#bbb', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 8 }}>What Meridian enforces</div>
          {MERIDIAN_RULES.map(rule => {
            const isActive = activeRule === rule.label;
            return (
              <div key={rule.label} onClick={() => setActiveRule(isActive ? null : rule.label)}
                style={{ padding: '10px 12px', borderRadius: 5, border: `1px solid ${isActive ? LAVEN : '#eee'}`, background: isActive ? '#F3F0FF' : '#fff', cursor: 'pointer', marginBottom: 8, transition: 'all 0.12s' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                  <span style={{ fontSize: '0.74rem', fontWeight: 700, fontFamily: SANS, color: isActive ? LAVEN : '#333' }}>{rule.label}</span>
                  <Badge type={rule.badge} />
                </div>
                {isActive && <p style={{ fontSize: '0.7rem', fontFamily: SANS, color: '#555', margin: '8px 0 0', lineHeight: 1.55 }}>{rule.detail}</p>}
              </div>
            );
          })}
          <div style={{ marginTop: 14, padding: '12px 14px', background: '#000', borderRadius: 5, borderLeft: `3px solid ${LAVEN}` }}>
            <div style={{ fontSize: '0.58rem', fontWeight: 700, fontFamily: SANS, color: LAVEN, textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 5 }}>Why this matters</div>
            <p style={{ fontSize: '0.74rem', fontFamily: SANS, color: '#fff', margin: 0, lineHeight: 1.6, fontWeight: 500 }}>
              The obligation matrix is not a list of clauses. It is a structured record built from a schema. That is what makes it queryable, comparable across properties, and consistent over time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Step 4: Obligation Matrix ────────────────────────────────
const ObligationMatrixStep = ({ onNext }: { onNext: () => void }) => {
  const [view, setView] = useState<ObligationView>('owner-manager');
  const [activeOb, setActiveOb] = useState<string | null>(null);
  const [activeDev, setActiveDev] = useState<string | null>(null);

  const leftParty  = view === 'owner-manager' ? 'owner'   : 'landlord';
  const rightParty = view === 'owner-manager' ? 'manager' : 'tenant';
  const leftLabel  = view === 'owner-manager' ? 'Owner'   : 'Landlord';
  const rightLabel = view === 'owner-manager' ? 'Manager (CBRE)' : 'Tenant';
  const leftSub    = view === 'owner-manager' ? 'Crestline Capital Partners' : 'Enforced by CBRE on behalf of Owner';
  const rightSub   = view === 'owner-manager' ? 'CBRE Southeast Region' : 'Northside Hospitality Group · Suite 1201';
  const rightColor = view === 'owner-manager' ? GREEN : BLUE;

  const ObCard = ({ ob }: { ob: typeof OBLIGATIONS[0] }) => {
    const isActive = activeOb === ob.id;
    const sc = severityColor(ob.severity);
    return (
      <div onClick={() => setActiveOb(isActive ? null : ob.id)}
        style={{ padding: '8px 10px', borderRadius: 4, border: `1px solid ${isActive ? sc : ob.severity !== 'standard' ? `${sc}44` : '#eee'}`, background: isActive ? `${sc}08` : '#fff', cursor: 'pointer', marginBottom: 6, transition: 'all 0.12s' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
          <p style={{ fontSize: '0.72rem', fontFamily: SANS, color: '#333', margin: 0, lineHeight: 1.5, flex: 1 }}>{ob.text}</p>
          <div style={{ display: 'flex', flexDirection: 'column' as const, alignItems: 'flex-end', gap: 3, flexShrink: 0 }}>
            <span style={{ fontSize: '0.58rem', fontFamily: MONO, color: '#bbb' }}>{ob.section}</span>
            <Badge type="meridian" tooltip="Obligation type enforced by Meridian schema" />
            {ob.severity !== 'standard' && (
              <span style={{ fontSize: '0.56rem', fontWeight: 700, fontFamily: SANS, padding: '1px 5px', borderRadius: 3, background: `${sc}15`, color: sc, textTransform: 'uppercase' as const }}>{ob.severity}</span>
            )}
          </div>
        </div>
        {isActive && ob.deviationNote && (
          <div style={{ marginTop: 8, padding: '7px 9px', background: `${sc}10`, borderRadius: 3, borderLeft: `2px solid ${sc}` }}>
            <p style={{ fontSize: '0.68rem', fontFamily: SANS, color: '#555', margin: 0, lineHeight: 1.55 }}>{ob.deviationNote}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={{ padding: '24px 28px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14, flexWrap: 'wrap' as const, gap: 10 }}>
        <div>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, fontFamily: SANS, color: '#000', margin: '0 0 4px' }}>Obligation matrix</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <p style={{ fontSize: '0.74rem', fontFamily: SANS, color: '#888', margin: 0 }}>Every obligation extracted, typed, and party-assigned.</p>
            <Badge type="both" tooltip="Entities resolved by Luna · Obligation schema enforced by Meridian" />
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ display: 'flex', borderRadius: 6, border: '1px solid #e0e0e0', overflow: 'hidden' }}>
            {(['owner-manager', 'landlord-tenant'] as ObligationView[]).map(v => (
              <button key={v} onClick={() => setView(v)}
                style={{ padding: '7px 12px', fontSize: '0.66rem', fontWeight: 700, fontFamily: SANS, border: 'none', cursor: 'pointer', background: view === v ? BLUE : '#fff', color: view === v ? '#fff' : '#888', transition: 'all 0.15s', whiteSpace: 'nowrap' as const }}>
                {v === 'owner-manager' ? 'Owner / Manager' : 'Landlord / Tenant'}
              </button>
            ))}
          </div>
          <button onClick={onNext} style={{ padding: '8px 14px', background: BLUE, color: '#fff', border: 'none', borderRadius: 5, fontSize: '0.7rem', fontWeight: 700, fontFamily: SANS, cursor: 'pointer', whiteSpace: 'nowrap' as const }}>
            View operational actions →
          </button>
        </div>
      </div>

      <div style={{ marginBottom: 10, fontSize: '0.62rem', fontFamily: SANS, color: '#bbb' }}>
        {view === 'owner-manager' ? 'Source: Management Agreement — Brickell One Tower · May 1, 2026' : 'Source: Lease — Suite 1201 · Northside Retail Partners LLC · Jan 1, 2024'}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
        {[
          { label: leftLabel,  sub: leftSub,  obligations: OBLIGATIONS.filter(o => o.party === leftParty),  color: PLUM       },
          { label: rightLabel, sub: rightSub, obligations: OBLIGATIONS.filter(o => o.party === rightParty), color: rightColor },
        ].map(col => (
          <div key={col.label}>
            <div style={{ padding: '8px 10px', borderRadius: '4px 4px 0 0', background: col.color }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, fontFamily: SANS, color: '#fff' }}>{col.label}</div>
              <div style={{ fontSize: '0.6rem', fontFamily: SANS, color: 'rgba(255,255,255,0.7)' }}>{col.sub}</div>
            </div>
            <div style={{ border: `1px solid ${col.color}22`, borderTop: 'none', borderRadius: '0 0 4px 4px', padding: '10px 10px 4px' }}>
              {col.obligations.map(ob => <ObCard key={ob.id} ob={ob} />)}
            </div>
          </div>
        ))}
      </div>

      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <span style={{ fontSize: '0.62rem', fontWeight: 700, fontFamily: SANS, color: '#999', textTransform: 'uppercase' as const, letterSpacing: '0.08em' }}>Form deviations — {DEVIATIONS.length} identified</span>
          <Badge type="meridian" tooltip="Detected by comparing extracted clauses against Meridian standard form schema" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
          {DEVIATIONS.map(dev => {
            const isActive = activeDev === dev.id;
            const dc = dev.severity === 'material' ? ORANGE : '#888';
            return (
              <div key={dev.id} onClick={() => setActiveDev(isActive ? null : dev.id)}
                style={{ padding: '10px 12px', borderRadius: 5, border: `1px solid ${isActive ? dc : `${dc}44`}`, background: isActive ? `${dc}08` : '#fff', cursor: 'pointer', transition: 'all 0.12s' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 5, flexWrap: 'wrap' as const }}>
                  <span style={{ fontSize: '0.56rem', fontWeight: 700, fontFamily: SANS, padding: '1px 5px', borderRadius: 3, background: `${dc}15`, color: dc, textTransform: 'uppercase' as const }}>{dev.severity}</span>
                  <span style={{ fontSize: '0.58rem', fontFamily: MONO, color: '#bbb' }}>{dev.section}</span>
                  <Badge type="meridian" tooltip="Deviation detected by Meridian — compared against standard form schema" />
                </div>
                <p style={{ fontSize: '0.72rem', fontWeight: 600, fontFamily: SANS, color: '#333', margin: '0 0 4px', lineHeight: 1.35 }}>{dev.title}</p>
                {isActive && (
                  <div style={{ marginTop: 8, borderTop: `1px solid ${dc}22`, paddingTop: 8 }}>
                    {[['Agreement', dev.agreementText, '#555', 400], ['CBRE standard', dev.standardText, '#555', 400], ['Recommendation', dev.recommendation, '#333', 600]].map(([l, v, c, w]) => (
                      <div key={l as string} style={{ marginBottom: 7 }}>
                        <div style={{ fontSize: '0.6rem', fontWeight: 700, fontFamily: SANS, color: '#bbb', textTransform: 'uppercase' as const, letterSpacing: '0.05em', marginBottom: 2 }}>{l as string}</div>
                        <p style={{ fontSize: '0.68rem', fontFamily: SANS, color: c as string, margin: 0, lineHeight: 1.5, fontWeight: w as number }}>{v as string}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ─── Step 5: Operational View ─────────────────────────────────
const OperationalStep = () => {
  const [activeAction, setActiveAction] = useState<string | null>(null);
  const priorityOrder: ActionPriority[] = ['urgent', 'action', 'info'];
  const grouped = priorityOrder.map(p => ({
    priority: p,
    label: p === 'urgent' ? 'Immediate attention' : p === 'action' ? 'Action required' : 'Upcoming',
    items: ACTION_ITEMS.filter(a => a.priority === p),
  }));

  return (
    <div style={{ padding: '24px 28px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 18, flexWrap: 'wrap' as const, gap: 10 }}>
        <div>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, fontFamily: SANS, color: '#000', margin: '0 0 4px' }}>Operational view</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <p style={{ fontSize: '0.76rem', fontFamily: SANS, color: '#888', margin: 0 }}>Every action anchored to a Luna-resolved entity and a Meridian-typed obligation.</p>
            <Badge type="both" tooltip="Luna resolved the entity · Meridian typed the obligation" />
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ padding: '6px 12px', borderRadius: 5, background: '#FFF5F8', border: '1px solid #A8185E22', fontSize: '0.62rem', fontWeight: 700, fontFamily: SANS, color: PLUM }}>{ACTION_ITEMS.filter(a => a.priority === 'urgent').length} urgent</div>
          <div style={{ padding: '6px 12px', borderRadius: 5, background: '#FFF8EC', border: '1px solid #CC580022', fontSize: '0.62rem', fontWeight: 700, fontFamily: SANS, color: ORANGE }}>{ACTION_ITEMS.filter(a => a.priority === 'action').length} action</div>
        </div>
      </div>

      <div style={{ marginBottom: 24 }}>
        {grouped.map(group => (
          <div key={group.priority} style={{ marginBottom: 20 }}>
            <div style={{ fontSize: '0.6rem', fontWeight: 700, fontFamily: SANS, color: priorityColor(group.priority), textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: priorityColor(group.priority) }} />
              {group.label}
            </div>
            {group.items.map(action => {
              const isActive = activeAction === action.id;
              const pc = priorityColor(action.priority);
              return (
                <div key={action.id} onClick={() => setActiveAction(isActive ? null : action.id)}
                  style={{ padding: '12px 14px', borderRadius: 5, border: `1px solid ${isActive ? pc : '#eee'}`, background: isActive ? priorityBg(action.priority) : '#fff', cursor: 'pointer', marginBottom: 8, transition: 'all 0.12s' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3, flexWrap: 'wrap' as const }}>
                        <span style={{ fontSize: '0.78rem', fontWeight: 700, fontFamily: SANS, color: '#000' }}>{action.title}</span>
                        <Badge type="both" tooltip="Entity resolved by Luna · Obligation typed by Meridian" />
                        {action.pulseFeed && (
                          <span style={{ fontSize: '0.55rem', fontWeight: 700, fontFamily: SANS, padding: '1px 5px', borderRadius: 3, background: '#EBF4FB', color: BLUE, border: `1px solid ${BLUE}22` }}>Pulse feed</span>
                        )}
                      </div>
                      <p style={{ fontSize: '0.72rem', fontFamily: SANS, color: '#666', margin: 0, lineHeight: 1.5 }}>{action.description}</p>
                    </div>
                    <div style={{ textAlign: 'right' as const, flexShrink: 0 }}>
                      <div style={{ fontSize: '0.62rem', fontWeight: 700, fontFamily: SANS, color: pc }}>{action.dueLabel}</div>
                      <div style={{ fontSize: '0.58rem', fontFamily: MONO, color: '#ccc', marginTop: 2 }}>{action.source}</div>
                    </div>
                  </div>
                  {isActive && (
                    <div style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid #eee', display: 'flex', gap: 20 }}>
                      <div>
                        <div style={{ fontSize: '0.56rem', fontWeight: 700, fontFamily: SANS, color: '#bbb', textTransform: 'uppercase' as const, letterSpacing: '0.06em', marginBottom: 2 }}>Resolved entity</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                          <span style={{ fontSize: '0.7rem', fontFamily: SANS, color: '#333', fontWeight: 600 }}>{action.entity}</span>
                          <Badge type="luna" tooltip="Resolved by Luna" />
                        </div>
                        <div style={{ fontSize: '0.62rem', fontFamily: SANS, color: '#999' }}>{action.entityType}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.56rem', fontWeight: 700, fontFamily: SANS, color: '#bbb', textTransform: 'uppercase' as const, letterSpacing: '0.06em', marginBottom: 2 }}>Obligation type</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                          <span style={{ fontSize: '0.7rem', fontFamily: SANS, color: '#333', fontWeight: 600 }}>{action.section}</span>
                          <Badge type="meridian" tooltip="Typed by Meridian schema" />
                        </div>
                        <div style={{ fontSize: '0.62rem', fontFamily: MONO, color: '#999' }}>{action.source}</div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div style={{ padding: '16px 20px', background: '#000', borderRadius: 6, display: 'flex', alignItems: 'flex-start', gap: 14 }}>
        <div style={{ width: 2, flexShrink: 0, background: BLUE, borderRadius: 2, alignSelf: 'stretch', minHeight: 44 }} />
        <div>
          <p style={{ fontSize: '0.9rem', fontWeight: 700, fontFamily: SANS, color: '#fff', margin: '0 0 6px', lineHeight: 1.45 }}>
            Pulse already knows when a lease expires.
          </p>
          <p style={{ fontSize: '0.76rem', fontFamily: SANS, color: '#999', margin: 0, lineHeight: 1.6 }}>
            It knows because someone entered that date. Every item marked <span style={{ color: BLUE, fontWeight: 600 }}>Pulse feed</span> above is what makes that entry automatic — extracted from the document, anchored to a <span style={{ color: PLUM, fontWeight: 600 }}>Luna</span>-resolved entity, typed by <span style={{ color: LAVEN, fontWeight: 600 }}>Meridian</span>, ready to route.
          </p>
        </div>
      </div>
    </div>
  );
};

// ─── Shell ────────────────────────────────────────────────────
const CBREDemoSlide = () => {
  const [step, setStep] = useState(1);
  return (
    <section style={{ background: '#fff', borderTop: '3px solid #1B70B1' }}>
      <div style={{ padding: '28px 36px 20px', borderBottom: '1px solid #f0f0f0' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap' as const, gap: 12 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: BLUE }} />
              <span style={{ fontSize: '0.62rem', fontWeight: 700, fontFamily: SANS, color: BLUE, letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>Live Demo — Contract Intelligence</span>
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: SANS, color: '#000', margin: 0, lineHeight: 1.2 }}>Management Agreement Intake</h2>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <Badge type="luna" tooltip="Entity resolution — Luna" />
            <Badge type="meridian" tooltip="Schema + taxonomy — Meridian" />
            <p style={{ fontSize: '0.78rem', fontFamily: SANS, color: '#888', margin: 0 }}>Brickell One Tower · 38 pages · 5 entities · 3 deviations</p>
          </div>
        </div>
      </div>
      <Stepper active={step} onStep={setStep} />
      <div style={{ minHeight: 500 }}>
        {step === 1 && <IntakeStep       onNext={() => setStep(2)} />}
        {step === 2 && <LunaStep         onNext={() => setStep(3)} />}
        {step === 3 && <MeridianStep     onNext={() => setStep(4)} />}
        {step === 4 && <ObligationMatrixStep onNext={() => setStep(5)} />}
        {step === 5 && <OperationalStep />}
      </div>
    </section>
  );
};

export default CBREDemoSlide;
