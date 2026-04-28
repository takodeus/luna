import { useEffect, useRef } from 'react';

const beats = [
  {
    num: '01',
    tag: 'The volume problem',
    anchor: 'A 38-page PDF arrived. Someone had to read it.',
    body: 'A firm managing hundreds of properties. Each one has a management agreement. Each agreement is 30 to 50 pages, plus exhibits, amendments, and side letters. Each renewal cycle generates a new version. A new agreement arrives and someone opens a PDF.',
    callout: {
      label: 'The real challenge',
      text: 'Reading a single agreement is not hard. Reading every clause of every agreement, at every renewal, consistently, across hundreds of properties, is not a human-scale problem. The risk is not incompetence. It is volume.',
      accent: false,
    },
    cols: [
      {
        label: 'What gets missed under volume',
        items: [
          'Non-standard termination clauses accepted because the deviation is buried in §11.2 of a 38-page document.',
          'Approval thresholds that are 50% below portfolio standard — meaning routine maintenance now requires owner sign-off.',
          'Insurance obligations that reference the wrong coverage limit for this specific asset class.',
          'Tenant insurance certificates that lapsed 30 days ago because no one tracks them across 60 leases.',
        ],
      },
      {
        label: 'What manual review costs',
        items: [
          '4 to 6 hours per agreement for a thorough senior-level review.',
          'No institutional memory — the reviewer\'s notes live in their inbox, not in a system.',
          'No cross-property comparison — you cannot easily ask "how does this clause compare to our standard across the portfolio?"',
          'No ongoing monitoring — the agreement is read once, then filed.',
        ],
      },
    ],
  },
  {
    num: '02',
    tag: 'Two documents, one obligation',
    anchor: 'CBRE sits in the middle of two contracts simultaneously. Most tracking systems only know about one.',
    body: 'The management agreement governs what CBRE owes the Owner. But CBRE also has a fiduciary duty to enforce the lease on the Owner\'s behalf — which means monitoring what the Tenant owes, and making sure they deliver it.',
    callout: null,
    diagram: true,
    cols: [
      {
        label: 'Management agreement obligations',
        items: [
          'CBRE must operate within the approved budget, collect rents, maintain books, and deliver monthly reports.',
          'CBRE must obtain competitive bids for expenses above the threshold — and that threshold varies by agreement.',
          'CBRE must flag anything requiring Owner approval before committing.',
        ],
      },
      {
        label: 'Lease obligations (enforced by CBRE)',
        items: [
          'Each tenant has different insurance requirements, alteration approval thresholds, and operating hour obligations.',
          'Tenant financial statement requirements vary by lease — annual, quarterly, or not at all.',
          'Restoration obligations at lease expiry differ by suite — what was built out, what must be removed.',
          'A single building can have 60 leases. Each one is different.',
        ],
      },
    ],
    callout2: {
      label: 'The tracking gap',
      text: 'Right now, these obligations live in two places: the agreements themselves (PDFs) and the property manager\'s memory. When the PM changes, the institutional knowledge leaves with them.',
      accent: true,
    },
  },
  {
    num: '03',
    tag: 'What the agent actually does',
    anchor: 'The agent reads the document stack. Resolves every entity. Builds the obligation record. Flags what matters.',
    body: 'Not a workflow tool that routes a document someone else read. The agent reads it.',
    callout: null,
    isLast: true,
  },
];

const BeatCard = ({ beat, index }: { beat: typeof beats[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('cb-visible'); },
      { threshold: 0.06 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="cb-beat" style={{ animationDelay: `${index * 0.05}s` }}>
      {/* Beat number + tag */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
        <div style={{
          width: 36, height: 36, borderRadius: '50%', background: '#1B70B1',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <span style={{ fontSize: '0.65rem', fontWeight: 700, fontFamily: 'Montserrat, sans-serif', color: '#fff', letterSpacing: '0.04em' }}>
            {beat.num}
          </span>
        </div>
        <span style={{ fontSize: '0.62rem', fontWeight: 700, fontFamily: 'Montserrat, sans-serif', color: '#1B70B1', textTransform: 'uppercase' as const, letterSpacing: '0.1em' }}>
          {beat.tag}
        </span>
      </div>

      {/* Anchor */}
      <p style={{ fontSize: '1.05rem', fontWeight: 700, fontFamily: 'Montserrat, sans-serif', color: '#000', lineHeight: 1.35, margin: '0 0 10px', maxWidth: 640 }}>
        {beat.anchor}
      </p>
      {beat.body && (
        <p style={{ fontSize: '0.8rem', fontFamily: 'Montserrat, sans-serif', color: '#555', lineHeight: 1.65, margin: '0 0 18px', maxWidth: 680 }}>
          {beat.body}
        </p>
      )}

      {/* Diagram for beat 2 */}
      {beat.diagram && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0, marginBottom: 18, padding: '16px 0' }}>
          {[
            { label: 'Owner', sub: 'Crestline Capital Partners', color: '#A8185E', bg: '#FFF5F8' },
            null,
            { label: 'CBRE', sub: 'Manager + Enforcer', color: '#1B70B1', bg: '#EBF4FB', bold: true },
            null,
            { label: 'Tenant', sub: 'Northside Hospitality Group', color: '#23A98E', bg: '#F0FBF7' },
          ].map((item, i) => {
            if (!item) return (
              <div key={i} style={{ display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: 2, margin: '0 6px' }}>
                <svg width="32" height="12" viewBox="0 0 32 12" fill="none">
                  <path d="M1 6h28M25 2l5 4-5 4" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontSize: '0.55rem', fontFamily: 'Montserrat, sans-serif', color: '#ccc' }}>Agreement</span>
              </div>
            );
            return (
              <div key={item.label} style={{ padding: '12px 16px', borderRadius: 6, background: item.bg, border: `1.5px solid ${item.color}33`, minWidth: 130, textAlign: 'center' as const }}>
                <div style={{ fontSize: item.bold ? '1rem' : '0.85rem', fontWeight: 700, fontFamily: 'Montserrat, sans-serif', color: item.color }}>{item.label}</div>
                <div style={{ fontSize: '0.6rem', fontFamily: 'Montserrat, sans-serif', color: '#999', marginTop: 2 }}>{item.sub}</div>
              </div>
            );
          })}
        </div>
      )}

      {/* Columns */}
      {beat.cols && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 18 }}>
          {beat.cols.map((col) => (
            <div key={col.label}>
              <div style={{ fontSize: '0.58rem', fontWeight: 700, fontFamily: 'Montserrat, sans-serif', color: '#1B70B1', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 8, paddingBottom: 5, borderBottom: '1px solid #ddeef8' }}>
                {col.label}
              </div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {col.items.map((item, ii) => (
                  <li key={ii} style={{ display: 'flex', gap: 8, marginBottom: 6, fontSize: '0.74rem', fontFamily: 'Montserrat, sans-serif', color: '#333', lineHeight: 1.55 }}>
                    <span style={{ width: 4, height: 1, background: '#1B70B1', flexShrink: 0, marginTop: 10 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Last beat: what the agent does */}
      {beat.isLast && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginBottom: 18 }}>
          {[
            { step: '1', label: 'Reads the document stack', detail: 'Management agreement + all active leases. 38 pages or 380. Every clause, every exhibit.', color: '#1B70B1', bg: '#EBF4FB' },
            { step: '2', label: 'Resolves every entity', detail: 'Building, Owner, Manager, Tenant, Vendor, Guarantor. Canonical records, aliases collapsed, prior history surfaced.', color: '#A8185E', bg: '#FFF5F8' },
            { step: '3', label: 'Builds the obligation record', detail: 'Structured matrix across all parties. Standard vs. non-standard. Deviations flagged with recommendations. Action items prioritized.', color: '#23A98E', bg: '#F0FBF7' },
          ].map((card) => (
            <div key={card.step} style={{ padding: '14px 16px', borderRadius: 6, background: card.bg, borderLeft: `3px solid ${card.color}` }}>
              <div style={{ width: 24, height: 24, borderRadius: '50%', background: card.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                <span style={{ fontSize: '0.62rem', fontWeight: 700, fontFamily: 'Montserrat, sans-serif', color: '#fff' }}>{card.step}</span>
              </div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, fontFamily: 'Montserrat, sans-serif', color: card.color, marginBottom: 6, lineHeight: 1.3 }}>{card.label}</div>
              <div style={{ fontSize: '0.72rem', fontFamily: 'Montserrat, sans-serif', color: '#444', lineHeight: 1.55 }}>{card.detail}</div>
            </div>
          ))}
        </div>
      )}

      {/* Callout */}
      {beat.callout && !beat.callout.accent && (
        <div style={{ padding: '13px 16px', borderRadius: 6, background: '#F8F8F8', borderLeft: '3px solid #1B70B1', border: '1px solid #eee', borderLeftWidth: 3, borderLeftStyle: 'solid', borderLeftColor: '#1B70B1' }}>
          <div style={{ fontSize: '0.58rem', fontWeight: 700, fontFamily: 'Montserrat, sans-serif', color: '#1B70B1', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 6 }}>{beat.callout.label}</div>
          <p style={{ fontSize: '0.78rem', fontFamily: 'Montserrat, sans-serif', color: '#333', lineHeight: 1.65, margin: 0 }}>{beat.callout.text}</p>
        </div>
      )}
      {'callout2' in beat && beat.callout2 && (
        <div style={{ padding: '13px 16px', borderRadius: 6, background: '#000', borderLeft: '3px solid #1B70B1' }}>
          <div style={{ fontSize: '0.58rem', fontWeight: 700, fontFamily: 'Montserrat, sans-serif', color: '#1B70B1', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 6 }}>{beat.callout2.label}</div>
          <p style={{ fontSize: '0.78rem', fontFamily: 'Montserrat, sans-serif', color: '#fff', lineHeight: 1.65, margin: 0, fontWeight: 500 }}>{beat.callout2.text}</p>
        </div>
      )}
    </div>
  );
};

const CBREPractitionerBriefSlide = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('cb-visible'); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ background: '#fff', paddingBottom: 80 }}>
      <style>{`
        .cb-beat { opacity: 0; transform: translateY(18px); transition: opacity 0.5s ease, transform 0.5s ease; padding: 36px 48px; border-bottom: 1px solid #f0f0f0; }
        .cb-beat.cb-visible { opacity: 1; transform: none; }
        .cb-header { opacity: 0; transform: translateY(14px); transition: opacity 0.5s ease, transform 0.5s ease; }
        .cb-header.cb-visible { opacity: 1; transform: none; }
      `}</style>

      {/* Header */}
      <div ref={headerRef} className="cb-header" style={{ padding: '40px 48px 32px', borderBottom: '2px solid #f0f0f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#1B70B1' }} />
          <span style={{ fontSize: '0.62rem', fontWeight: 700, fontFamily: 'Montserrat, sans-serif', color: '#1B70B1', letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>
            Practitioner Brief — Contract Intelligence
          </span>
        </div>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'Montserrat, sans-serif', color: '#000', margin: '0 0 10px', lineHeight: 1.15 }}>
          The agreement was read once.<br />Then it was filed.
        </h2>
        <p style={{ fontSize: '0.88rem', fontFamily: 'Montserrat, sans-serif', color: '#666', margin: 0, lineHeight: 1.65, maxWidth: 680 }}>
          Property management firms execute hundreds of management agreements and maintain thousands of active leases. The obligations in those documents govern everything: approvals, reporting, insurance, maintenance, vendor spend. Most of those obligations are tracked in spreadsheets, if they are tracked at all.
        </p>
      </div>

      {beats.map((beat, i) => <BeatCard key={beat.num} beat={beat} index={i} />)}

      {/* Closing */}
      <div style={{ margin: '0 48px', paddingTop: 40, borderTop: '1px solid #eee', display: 'flex', alignItems: 'flex-start', gap: 16 }}>
        <div style={{ width: 2, background: '#1B70B1', borderRadius: 2, alignSelf: 'stretch', minHeight: 48, flexShrink: 0 }} />
        <p style={{ fontSize: '1.05rem', fontWeight: 600, fontFamily: 'Montserrat, sans-serif', color: '#000', lineHeight: 1.5, margin: 0 }}>
          The agreement is not a filing artifact.<br />
          It is a{' '}
          <span style={{ color: '#1B70B1' }}>living obligation record</span>
          {' '}that should surface action items, flag deviations, and feed the systems your team already uses.
        </p>
      </div>
    </section>
  );
};

export default CBREPractitionerBriefSlide;
