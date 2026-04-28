import { useState } from 'react';
import {
  INTAKE_EMAIL, RESOLVED_ENTITIES, OBLIGATIONS, DEVIATIONS, ACTION_ITEMS,
  ResolvedEntity, ObligationView, ActionPriority,
} from './cbreData';

// ─── Shared style tokens ──────────────────────────────────────
const BLUE   = '#1B70B1';
const PLUM   = '#A8185E';
const GREEN  = '#23A98E';
const ORANGE = '#CC5800';
const MONO   = 'ui-monospace, monospace';
const SANS   = 'Montserrat, sans-serif';

// ─── Step constants ───────────────────────────────────────────
const STEPS = [
  { num: 1, label: 'Contract Intake',      sub: 'Entity resolution' },
  { num: 2, label: 'Obligation Matrix',    sub: 'Owner/Manager · Landlord/Tenant' },
  { num: 3, label: 'Operational View',     sub: 'Action items across all documents' },
];

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
  <div style={{ display: 'flex', alignItems: 'center', padding: '16px 28px', borderBottom: '1px solid #f0f0f0', gap: 0, background: '#FAFAFA' }}>
    {STEPS.map((s, i) => {
      const done = s.num < active;
      const cur  = s.num === active;
      return (
        <div key={s.num} style={{ display: 'flex', alignItems: 'center', flex: i < STEPS.length - 1 ? 1 : 0 }}>
          <button
            onClick={() => onStep(s.num)}
            style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0' }}
          >
            <div style={{
              width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
              background: cur ? BLUE : done ? GREEN : '#e8e8e8',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s',
            }}>
              {done
                ? <svg width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M1 5l3 3 7-7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                : <span style={{ fontSize: '0.6rem', fontWeight: 700, fontFamily: SANS, color: cur ? '#fff' : '#bbb' }}>{s.num}</span>
              }
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, fontFamily: SANS, color: cur ? BLUE : done ? '#333' : '#bbb', lineHeight: 1.2 }}>{s.label}</div>
              <div style={{ fontSize: '0.58rem', fontFamily: SANS, color: '#bbb', lineHeight: 1.2 }}>{s.sub}</div>
            </div>
          </button>
          {i < STEPS.length - 1 && (
            <div style={{ flex: 1, height: 1, background: done ? GREEN : '#e8e8e8', margin: '0 12px', transition: 'background 0.2s' }} />
          )}
        </div>
      );
    })}
  </div>
);

// ─── Entity card ──────────────────────────────────────────────
const EntityCard = ({ entity, isActive, onClick }: { entity: ResolvedEntity; isActive: boolean; onClick: () => void }) => {
  const sc = statusColor(entity.status);
  return (
    <div
      onClick={onClick}
      style={{
        padding: '12px 14px', borderRadius: 6, border: `1.5px solid ${isActive ? sc : '#eee'}`,
        background: isActive ? (entity.status === 'conflict' ? '#FFF8EC' : entity.status === 'new' ? '#EBF4FB' : '#F8F8F8') : '#fff',
        cursor: 'pointer', transition: 'all 0.15s ease', marginBottom: 8,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
        <span style={{ fontSize: '0.62rem', fontWeight: 700, fontFamily: SANS, color: '#999', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{entity.entityType}</span>
        <span style={{ fontSize: '0.58rem', fontWeight: 700, fontFamily: SANS, padding: '2px 7px', borderRadius: 10, background: `${sc}18`, color: sc }}>{entity.statusLabel}</span>
      </div>
      <div style={{ fontSize: '0.78rem', fontFamily: MONO, color: '#555', marginBottom: 2 }}>{entity.rawName}</div>
      {entity.rawName !== entity.canonicalName && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4h8M6 1l3 3-3 3" stroke={sc} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, fontFamily: SANS, color: sc }}>{entity.canonicalName}</span>
        </div>
      )}
    </div>
  );
};

// ─── Entity detail drawer ─────────────────────────────────────
const EntityDetail = ({ entity }: { entity: ResolvedEntity }) => {
  const sc = statusColor(entity.status);
  return (
    <div style={{ background: '#FAFAFA', borderRadius: 6, border: `1px solid ${sc}22`, overflow: 'hidden' }}>
      <div style={{ padding: '14px 16px', background: `${sc}10`, borderBottom: `1px solid ${sc}22` }}>
        <div style={{ fontSize: '0.6rem', fontWeight: 700, fontFamily: SANS, color: sc, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>{entity.entityType} — Resolved Record</div>
        <div style={{ fontSize: '0.9rem', fontWeight: 700, fontFamily: SANS, color: '#000' }}>{entity.canonicalName}</div>
        {entity.aliases.length > 0 && (
          <div style={{ marginTop: 6, display: 'flex', gap: 4, flexWrap: 'wrap' }}>
            {entity.aliases.map(a => (
              <span key={a} style={{ fontSize: '0.6rem', fontFamily: MONO, padding: '1px 6px', borderRadius: 3, background: '#fff', border: `1px solid ${sc}33`, color: '#666' }}>{a}</span>
            ))}
          </div>
        )}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
        <div style={{ padding: '14px 16px', borderRight: '1px solid #eee' }}>
          <div style={{ fontSize: '0.58rem', fontWeight: 700, fontFamily: SANS, color: '#999', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>Details</div>
          {entity.details.map(d => (
            <div key={d.label} style={{ marginBottom: 6 }}>
              <div style={{ fontSize: '0.6rem', fontFamily: SANS, color: '#bbb' }}>{d.label}</div>
              <div style={{ fontSize: '0.72rem', fontFamily: SANS, color: '#333', fontWeight: 500 }}>{d.value}</div>
            </div>
          ))}
        </div>
        <div style={{ padding: '14px 16px' }}>
          <div style={{ fontSize: '0.58rem', fontWeight: 700, fontFamily: SANS, color: '#999', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>Prior Records</div>
          {entity.priorRecords.map(r => (
            <div key={r.label} style={{ marginBottom: 6 }}>
              <div style={{ fontSize: '0.6rem', fontFamily: SANS, color: '#bbb' }}>{r.label}</div>
              <div style={{ fontSize: '0.72rem', fontFamily: SANS, color: '#333', fontWeight: 500 }}>{r.value}</div>
            </div>
          ))}
        </div>
      </div>
      {entity.note && (
        <div style={{ padding: '10px 16px', background: `${ORANGE}10`, borderTop: `1px solid ${ORANGE}22` }}>
          <div style={{ fontSize: '0.58rem', fontWeight: 700, fontFamily: SANS, color: ORANGE, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 3 }}>Flag</div>
          <p style={{ fontSize: '0.72rem', fontFamily: SANS, color: '#555', margin: 0, lineHeight: 1.55 }}>{entity.note}</p>
        </div>
      )}
    </div>
  );
};

// ─── Step 1: Intake ───────────────────────────────────────────
const IntakeStep = ({ onNext }: { onNext: () => void }) => {
  const [activeEntity, setActiveEntity] = useState<string | null>(null);
  const active = RESOLVED_ENTITIES.find(e => e.key === activeEntity) ?? null;

  return (
    <div style={{ padding: '24px 28px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 18, flexWrap: 'wrap', gap: 10 }}>
        <div>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, fontFamily: SANS, color: '#000', margin: '0 0 4px' }}>Contract intake</h2>
          <p style={{ fontSize: '0.76rem', fontFamily: SANS, color: '#888', margin: 0, lineHeight: 1.55 }}>Agreement received. Luna resolves every entity in the document stack before extraction begins. Click any entity to see the resolved record.</p>
        </div>
        <button onClick={onNext} style={{ padding: '8px 16px', background: BLUE, color: '#fff', border: 'none', borderRadius: 5, fontSize: '0.7rem', fontWeight: 700, fontFamily: SANS, cursor: 'pointer', whiteSpace: 'nowrap' }}>
          View obligation matrix →
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        {/* Left: intake summary */}
        <div>
          {/* Email card */}
          <div style={{ border: '1px solid #eee', borderRadius: 6, overflow: 'hidden', marginBottom: 16 }}>
            <div style={{ background: '#F8F8F8', padding: '10px 14px', borderBottom: '1px solid #eee' }}>
              {[
                { label: 'From', value: INTAKE_EMAIL.from },
                { label: 'To',   value: INTAKE_EMAIL.to },
                { label: 'Re',   value: INTAKE_EMAIL.subject },
              ].map(row => (
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

          {/* Analysis complete badge */}
          <div style={{ padding: '10px 14px', background: '#F0FBF7', border: '1px solid #23A98E33', borderRadius: 6, display: 'flex', alignItems: 'center', gap: 10 }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke={GREEN} strokeWidth="1.2" /><path d="M5 8l2 2 4-4" stroke={GREEN} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <div>
              <div style={{ fontSize: '0.68rem', fontWeight: 700, fontFamily: SANS, color: GREEN }}>Analysis complete — 5 entities resolved, 1 conflict surfaced</div>
              <div style={{ fontSize: '0.6rem', fontFamily: SANS, color: '#888' }}>Obligation matrix ready · 3 form deviations identified · 1 tenant flag</div>
            </div>
          </div>
        </div>

        {/* Right: entity resolution */}
        <div>
          <div style={{ fontSize: '0.6rem', fontWeight: 700, fontFamily: SANS, color: '#999', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
            Entity resolution — Luna
          </div>
          {RESOLVED_ENTITIES.map(entity => (
            <EntityCard
              key={entity.key}
              entity={entity}
              isActive={activeEntity === entity.key}
              onClick={() => setActiveEntity(activeEntity === entity.key ? null : entity.key)}
            />
          ))}
          {active && (
            <div style={{ marginTop: 12 }}>
              <EntityDetail entity={active} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── Step 2: Obligation Matrix ────────────────────────────────
const ObligationMatrixStep = ({ onNext }: { onNext: () => void }) => {
  const [view, setView] = useState<ObligationView>('owner-manager');
  const [activeObligation, setActiveObligation] = useState<string | null>(null);
  const [activeDeviation, setActiveDeviation] = useState<string | null>(null);

  const leftParty  = view === 'owner-manager' ? 'owner'    : 'landlord';
  const rightParty = view === 'owner-manager' ? 'manager'  : 'tenant';
  const leftLabel  = view === 'owner-manager' ? 'Owner'    : 'Landlord';
  const rightLabel = view === 'owner-manager' ? 'Manager (CBRE)' : 'Tenant';
  const leftSub    = view === 'owner-manager' ? 'Crestline Capital Partners' : 'Enforced by CBRE on behalf of Owner';
  const rightSub   = view === 'owner-manager' ? 'CBRE Southeast Region' : 'Northside Hospitality Group · Suite 1201';
  const rightColor = view === 'owner-manager' ? GREEN : BLUE;

  const leftObligations  = OBLIGATIONS.filter(o => o.party === leftParty);
  const rightObligations = OBLIGATIONS.filter(o => o.party === rightParty);

  const ObligationCard = ({ ob }: { ob: typeof OBLIGATIONS[0] }) => {
    const isActive = activeObligation === ob.id;
    const sc = severityColor(ob.severity);
    return (
      <div
        onClick={() => setActiveObligation(isActive ? null : ob.id)}
        style={{ padding: '8px 10px', borderRadius: 4, border: `1px solid ${isActive ? sc : ob.severity !== 'standard' ? `${sc}44` : '#eee'}`, background: isActive ? `${sc}08` : '#fff', cursor: ob.deviationNote ? 'pointer' : 'default', marginBottom: 6, transition: 'all 0.12s' }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
          <p style={{ fontSize: '0.72rem', fontFamily: SANS, color: '#333', margin: 0, lineHeight: 1.5, flex: 1 }}>{ob.text}</p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 3, flexShrink: 0 }}>
            <span style={{ fontSize: '0.58rem', fontFamily: MONO, color: '#bbb' }}>{ob.section}</span>
            {ob.severity !== 'standard' && (
              <span style={{ fontSize: '0.56rem', fontWeight: 700, fontFamily: SANS, padding: '1px 5px', borderRadius: 3, background: `${sc}15`, color: sc, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                {ob.severity}
              </span>
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
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, flexWrap: 'wrap', gap: 10 }}>
        <div>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, fontFamily: SANS, color: '#000', margin: '0 0 4px' }}>Obligation matrix</h2>
          <p style={{ fontSize: '0.76rem', fontFamily: SANS, color: '#888', margin: 0 }}>Toggle between views. Click flagged items to see deviation details.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {/* View toggle */}
          <div style={{ display: 'flex', borderRadius: 6, border: '1px solid #e0e0e0', overflow: 'hidden' }}>
            {(['owner-manager', 'landlord-tenant'] as ObligationView[]).map(v => (
              <button
                key={v}
                onClick={() => setView(v)}
                style={{ padding: '7px 12px', fontSize: '0.66rem', fontWeight: 700, fontFamily: SANS, border: 'none', cursor: 'pointer', background: view === v ? BLUE : '#fff', color: view === v ? '#fff' : '#888', transition: 'all 0.15s', whiteSpace: 'nowrap' }}
              >
                {v === 'owner-manager' ? 'Owner / Manager' : 'Landlord / Tenant'}
              </button>
            ))}
          </div>
          <button onClick={onNext} style={{ padding: '8px 14px', background: BLUE, color: '#fff', border: 'none', borderRadius: 5, fontSize: '0.7rem', fontWeight: 700, fontFamily: SANS, cursor: 'pointer', whiteSpace: 'nowrap' }}>
            View operational actions →
          </button>
        </div>
      </div>

      {/* Source label */}
      <div style={{ marginBottom: 12, fontSize: '0.62rem', fontFamily: SANS, color: '#bbb' }}>
        {view === 'owner-manager' ? 'Source: Property Management Agreement — Brickell One Tower · May 1, 2026' : 'Source: Lease — Suite 1201 · Northside Retail Partners LLC · Jan 1, 2024'}
      </div>

      {/* Two-column matrix */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
        {[
          { label: leftLabel, sub: leftSub, obligations: leftObligations, color: PLUM },
          { label: rightLabel, sub: rightSub, obligations: rightObligations, color: rightColor },
        ].map(col => (
          <div key={col.label}>
            <div style={{ padding: '8px 10px', borderRadius: '4px 4px 0 0', background: col.color, marginBottom: 0 }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, fontFamily: SANS, color: '#fff' }}>{col.label}</div>
              <div style={{ fontSize: '0.6rem', fontFamily: SANS, color: 'rgba(255,255,255,0.7)' }}>{col.sub}</div>
            </div>
            <div style={{ border: `1px solid ${col.color}22`, borderTop: 'none', borderRadius: '0 0 4px 4px', padding: '10px 10px 4px' }}>
              {col.obligations.map(ob => <ObligationCard key={ob.id} ob={ob} />)}
            </div>
          </div>
        ))}
      </div>

      {/* Deviations */}
      <div>
        <div style={{ fontSize: '0.62rem', fontWeight: 700, fontFamily: SANS, color: '#999', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
          Form deviations — {DEVIATIONS.length} identified
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
          {DEVIATIONS.map(dev => {
            const isActive = activeDeviation === dev.id;
            const dc = dev.severity === 'material' ? ORANGE : '#888';
            return (
              <div
                key={dev.id}
                onClick={() => setActiveDeviation(isActive ? null : dev.id)}
                style={{ padding: '10px 12px', borderRadius: 5, border: `1px solid ${isActive ? dc : `${dc}44`}`, background: isActive ? `${dc}08` : '#fff', cursor: 'pointer', transition: 'all 0.12s' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
                  <span style={{ fontSize: '0.56rem', fontWeight: 700, fontFamily: SANS, padding: '1px 5px', borderRadius: 3, background: `${dc}15`, color: dc, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{dev.severity}</span>
                  <span style={{ fontSize: '0.58rem', fontFamily: MONO, color: '#bbb' }}>{dev.section}</span>
                </div>
                <p style={{ fontSize: '0.72rem', fontWeight: 600, fontFamily: SANS, color: '#333', margin: '0 0 4px', lineHeight: 1.35 }}>{dev.title}</p>
                {isActive && (
                  <div style={{ marginTop: 8, borderTop: `1px solid ${dc}22`, paddingTop: 8 }}>
                    <div style={{ fontSize: '0.62rem', fontWeight: 700, fontFamily: SANS, color: '#bbb', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 3 }}>Agreement</div>
                    <p style={{ fontSize: '0.68rem', fontFamily: SANS, color: '#555', margin: '0 0 8px', lineHeight: 1.5 }}>{dev.agreementText}</p>
                    <div style={{ fontSize: '0.62rem', fontWeight: 700, fontFamily: SANS, color: '#bbb', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 3 }}>CBRE standard</div>
                    <p style={{ fontSize: '0.68rem', fontFamily: SANS, color: '#555', margin: '0 0 8px', lineHeight: 1.5 }}>{dev.standardText}</p>
                    <div style={{ fontSize: '0.62rem', fontWeight: 700, fontFamily: SANS, color: dc, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 3 }}>Recommendation</div>
                    <p style={{ fontSize: '0.68rem', fontFamily: SANS, color: '#333', margin: 0, lineHeight: 1.5, fontWeight: 500 }}>{dev.recommendation}</p>
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

// ─── Step 3: Operational View ─────────────────────────────────
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
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 18, flexWrap: 'wrap', gap: 10 }}>
        <div>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, fontFamily: SANS, color: '#000', margin: '0 0 4px' }}>Operational view</h2>
          <p style={{ fontSize: '0.76rem', fontFamily: SANS, color: '#888', margin: 0, lineHeight: 1.55 }}>
            Obligations across all documents surfaced as prioritized action items. Every item anchored to a resolved entity.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ padding: '6px 12px', borderRadius: 5, background: '#FFF5F8', border: '1px solid #A8185E22', fontSize: '0.62rem', fontWeight: 700, fontFamily: SANS, color: PLUM }}>
            {ACTION_ITEMS.filter(a => a.priority === 'urgent').length} urgent
          </div>
          <div style={{ padding: '6px 12px', borderRadius: 5, background: '#FFF8EC', border: '1px solid #CC580022', fontSize: '0.62rem', fontWeight: 700, fontFamily: SANS, color: ORANGE }}>
            {ACTION_ITEMS.filter(a => a.priority === 'action').length} action
          </div>
        </div>
      </div>

      {/* Action groups */}
      <div style={{ marginBottom: 24 }}>
        {grouped.map(group => (
          <div key={group.priority} style={{ marginBottom: 20 }}>
            <div style={{ fontSize: '0.6rem', fontWeight: 700, fontFamily: SANS, color: priorityColor(group.priority), textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: priorityColor(group.priority) }} />
              {group.label}
            </div>
            {group.items.map(action => {
              const isActive = activeAction === action.id;
              const pc = priorityColor(action.priority);
              return (
                <div
                  key={action.id}
                  onClick={() => setActiveAction(isActive ? null : action.id)}
                  style={{ padding: '12px 14px', borderRadius: 5, border: `1px solid ${isActive ? pc : '#eee'}`, background: isActive ? priorityBg(action.priority) : '#fff', cursor: 'pointer', marginBottom: 8, transition: 'all 0.12s' }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                        <span style={{ fontSize: '0.78rem', fontWeight: 700, fontFamily: SANS, color: '#000' }}>{action.title}</span>
                        {action.pulseFeed && (
                          <span style={{ fontSize: '0.55rem', fontWeight: 700, fontFamily: SANS, padding: '1px 5px', borderRadius: 3, background: '#EBF4FB', color: BLUE, border: `1px solid ${BLUE}22` }}>Pulse feed</span>
                        )}
                      </div>
                      <p style={{ fontSize: '0.72rem', fontFamily: SANS, color: '#666', margin: 0, lineHeight: 1.5 }}>{action.description}</p>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ fontSize: '0.62rem', fontWeight: 700, fontFamily: SANS, color: pc }}>{action.dueLabel}</div>
                      <div style={{ fontSize: '0.58rem', fontFamily: MONO, color: '#ccc', marginTop: 2 }}>{action.source}</div>
                    </div>
                  </div>
                  {isActive && (
                    <div style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid #eee', display: 'flex', gap: 14 }}>
                      <div>
                        <div style={{ fontSize: '0.58rem', fontWeight: 700, fontFamily: SANS, color: '#bbb', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>Resolved entity</div>
                        <div style={{ fontSize: '0.7rem', fontFamily: SANS, color: '#333', fontWeight: 600 }}>{action.entity}</div>
                        <div style={{ fontSize: '0.62rem', fontFamily: SANS, color: '#999' }}>{action.entityType}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.58rem', fontWeight: 700, fontFamily: SANS, color: '#bbb', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>Source document</div>
                        <div style={{ fontSize: '0.7rem', fontFamily: SANS, color: '#333', fontWeight: 600 }}>{action.section}</div>
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

      {/* Pulse framing footer */}
      <div style={{ padding: '16px 20px', background: '#000', borderRadius: 6, display: 'flex', alignItems: 'flex-start', gap: 14 }}>
        <div style={{ width: 2, flexShrink: 0, background: BLUE, borderRadius: 2, alignSelf: 'stretch', minHeight: 44 }} />
        <div>
          <p style={{ fontSize: '0.9rem', fontWeight: 700, fontFamily: SANS, color: '#fff', margin: '0 0 6px', lineHeight: 1.45 }}>
            Pulse already knows when a lease expires.
          </p>
          <p style={{ fontSize: '0.76rem', fontFamily: SANS, color: '#999', margin: 0, lineHeight: 1.6 }}>
            It knows because someone entered that date. Every item marked <span style={{ color: BLUE, fontWeight: 600 }}>Pulse feed</span> above is what makes that entry automatic, accurate, and complete — extracted from the document itself, anchored to a resolved entity, ready to route.
          </p>
        </div>
      </div>
    </div>
  );
};

// ─── Main demo shell ──────────────────────────────────────────
const CBREDemoSlide = () => {
  const [step, setStep] = useState(1);

  return (
    <section style={{ background: '#fff', borderTop: '3px solid #1B70B1' }}>
      {/* Header */}
      <div style={{ padding: '28px 36px 20px', borderBottom: '1px solid #f0f0f0' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: BLUE }} />
              <span style={{ fontSize: '0.62rem', fontWeight: 700, fontFamily: SANS, color: BLUE, letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>Live Demo — Contract Intelligence</span>
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: SANS, color: '#000', margin: 0, lineHeight: 1.2 }}>
              Management Agreement Intake
            </h2>
          </div>
          <p style={{ fontSize: '0.78rem', fontFamily: SANS, color: '#888', margin: 0, lineHeight: 1.55, maxWidth: 380, textAlign: 'right' as const }}>
            Brickell One Tower · 38-page agreement · 5 entities resolved · 3 form deviations · 1 tenant conflict
          </p>
        </div>
      </div>

      <Stepper active={step} onStep={setStep} />

      <div style={{ minHeight: 500 }}>
        {step === 1 && <IntakeStep onNext={() => setStep(2)} />}
        {step === 2 && <ObligationMatrixStep onNext={() => setStep(3)} />}
        {step === 3 && <OperationalStep />}
      </div>
    </section>
  );
};

export default CBREDemoSlide;
