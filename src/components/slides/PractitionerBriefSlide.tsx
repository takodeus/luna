import { useEffect, useRef } from 'react';

const beats = [
  {
    num: '01',
    tag: 'How we started',
    anchor: 'We thought it was an extraction problem. It was not.',
    cols: [
      {
        label: 'What they asked for',
        items: [
          'Extract 9 fields from IC memos: Capital Pool, Investment, Transaction Type, Sector, Region, Sub-region, Committee, Transaction Name, Memo Date.',
          'Match those fields against current master data in the MDM.',
          'Build toward live deployment where the same agents reconcile data from other systems.',
          'Flag complex memos for human review. Allow users to override agent decisions.',
        ],
      },
      {
        label: 'What we assumed',
        items: [
          'Standard extraction problem. Define labels, build an eval set, optimize for accuracy.',
          'The fields would be present in the memo. We would read them out.',
          'Ground truth would be stable. Accuracy would be measurable.',
        ],
      },
      {
        label: 'What was actually true',
        items: [
          'None of the nine fields are explicitly stated. They have to be inferred from deal language.',
          'The same concept surfaces differently across every deal. No two memos use the same framing.',
          'There is no stable ground truth. The correct value depends on how the firm interprets the deal, not on what the memo says.',
        ],
      },
    ],
    callout: {
      label: 'What We Were Optimizing For',
      text: 'We were not extracting data. We were replicating how someone interprets a deal. Three human attempts had already failed. That is a fundamentally different problem. It requires the system to reason, not read.',
    },
  },
  {
    num: '02',
    tag: 'The first failure',
    anchor: 'The system passed the test. It did not match how the business thinks.',
    cols: [
      {
        label: 'What looked fine',
        items: [
          'High accuracy on the evaluation set. Outputs were clean and consistent.',
          'The nine fields were being returned. Values looked reasonable.',
          'Eval set match: 91%.',
        ],
      },
      {
        label: 'What broke on real memos',
        items: [
          'Capital Pool and Investment were being confused. The system did not understand the distinction.',
          'Transaction Type labels drifted. The same deal type labelled differently depending on how the memo framed it.',
          'Sector mapping inconsistent across geographies and vintages.',
          'Accuracy held on test data. It did not hold when the memos got harder.',
        ],
      },
    ],
    callout: {
      label: 'The root problem',
      text: 'We had optimized for label matching, not business logic alignment. The eval set rewarded the right answer for the wrong reason. The system learned to pattern-match on surface language instead of understanding what the field actually means to the firm.',
    },
  },
  {
    num: '03',
    tag: 'Calibration',
    anchor: 'There was no single consistent definition for some fields. We had to build one.',
    cols: [
      {
        label: 'The shift in approach',
        items: [
          'We stopped asking: "Is this output correct?"',
          'We started asking: "How do you decide this?"',
          'That question changed every session with the client.',
        ],
      },
      {
        label: 'What we uncovered',
        items: [
          'The decision logic was not documented anywhere. It existed in the heads of people who had been doing this for years.',
          'Fund accounting, the IC, and LP reporting had three different answers to the same question — not because anyone was wrong, but because the definitions were never reconciled across functions.',
          'A bridge loan structured solely to fund an acquisition appeared as two records in the system. Economically, one transaction. Wrong performance attribution.',
        ],
      },
      {
        label: 'What we built instead',
        items: [
          'Explicit decision factors per field: not just labels, but the reasoning behind them.',
          'Normalized definitions that held across deal types and vintages.',
          'Confidence-aware outputs. The system flags uncertainty rather than forcing a guess.',
          'A rules engine versioned over time, every change timestamped with the business reason behind it.',
        ],
      },
    ],
    callout: {
      label: 'The key moment',
      text: 'The memo is a local snapshot. The logic lives outside it. The firm had been making consistent decisions for years using rules that no one had ever written down. Our job became making those rules explicit, not just for the agents, but for the firm itself.',
      accent: true,
    },
  },
  {
    num: '04',
    tag: 'What Fixed It',
    anchor: 'Once we stopped treating it as an extraction problem, the outputs started matching how the business operates.',
    isLast: true,
  },
];

const BeatCard = ({ beat, index }: { beat: typeof beats[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('pb-visible'); },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="pb-beat"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Beat number + tag */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
        <div style={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          background: '#A8185E',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          <span style={{
            fontSize: '0.65rem',
            fontWeight: 700,
            fontFamily: 'Montserrat, sans-serif',
            color: '#fff',
            letterSpacing: '0.04em',
          }}>
            {beat.num}
          </span>
        </div>
        <span style={{
          fontSize: '0.62rem',
          fontWeight: 700,
          fontFamily: 'Montserrat, sans-serif',
          color: '#A8185E',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        }}>
          {beat.tag}
        </span>
      </div>

      {/* Anchor headline */}
      <p style={{
        fontSize: '1.05rem',
        fontWeight: 700,
        fontFamily: 'Montserrat, sans-serif',
        color: '#000',
        lineHeight: 1.35,
        margin: '0 0 18px',
        maxWidth: 640,
      }}>
        {beat.anchor}
      </p>

      {/* Columns */}
      {beat.cols && (
        <div className="pb-cols" style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${beat.cols.length}, 1fr)`,
          gap: 16,
          marginBottom: beat.callout ? 18 : 0,
        }}>
          {beat.cols.map((col) => (
            <div key={col.label}>
              <div style={{
                fontSize: '0.58rem',
                fontWeight: 700,
                fontFamily: 'Montserrat, sans-serif',
                color: '#A8185E',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: 8,
                paddingBottom: 5,
                borderBottom: '1px solid #f0e0e8',
              }}>
                {col.label}
              </div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {col.items.map((item, ii) => (
                  <li key={ii} style={{
                    display: 'flex',
                    gap: 8,
                    marginBottom: 6,
                    fontSize: '0.74rem',
                    fontFamily: 'Montserrat, sans-serif',
                    color: '#333',
                    lineHeight: 1.55,
                  }}>
                    <span style={{
                      width: 4,
                      height: 1,
                      background: '#A8185E',
                      flexShrink: 0,
                      marginTop: 10,
                    }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Last beat: Luna + Meridian fix cards */}
      {beat.isLast && (
        <div className="pb-cols" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 18 }}>
          {[
            {
              name: 'Luna',
              role: 'Entity Resolution',
              color: '#A8185E',
              bg: '#FFF5F8',
              items: [
                'Resolves who and what each entity actually is, regardless of how it is named in the memo.',
                'Eliminated Capital Pool vs. Investment confusion at the source.',
                'Handles aliases, renames, and fund restructures. Same entity, five names, one resolved record.',
              ],
            },
            {
              name: 'Meridian',
              role: 'Knowledge Graph',
              color: '#611FAD',
              bg: '#F3F0FF',
              items: [
                'Defines what each field means and how fields relate to each other.',
                'Capital Pool and Investment are not interchangeable. The graph enforces that distinction.',
                'Provides consistent taxonomy for Transaction Type, Region, and Sector across all memos.',
              ],
            },
          ].map((card) => (
            <div key={card.name} style={{
              padding: '14px 16px',
              borderRadius: 6,
              background: card.bg,
              border: `1px solid ${card.color}22`,
              borderLeft: `3px solid ${card.color}`,
            }}>
              <div style={{ marginBottom: 10 }}>
                <div style={{
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  fontFamily: 'Montserrat, sans-serif',
                  color: card.color,
                  marginBottom: 1,
                }}>
                  {card.name}
                </div>
                <div style={{
                  fontSize: '0.62rem',
                  fontWeight: 600,
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#888',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}>
                  {card.role}
                </div>
              </div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {card.items.map((item, ii) => (
                  <li key={ii} style={{
                    display: 'flex',
                    gap: 8,
                    marginBottom: 6,
                    fontSize: '0.72rem',
                    fontFamily: 'Montserrat, sans-serif',
                    color: '#333',
                    lineHeight: 1.5,
                  }}>
                    <span style={{
                      width: 4,
                      height: 1,
                      background: card.color,
                      flexShrink: 0,
                      marginTop: 9,
                    }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Callout */}
      {beat.callout && (
        <div style={{
          padding: '13px 16px',
          borderRadius: 6,
          background: beat.callout.accent ? '#000' : '#F8F8F8',
          borderLeft: `3px solid #A8185E`,
          border: beat.callout.accent ? 'none' : '1px solid #eee',
          borderLeftWidth: 3,
          borderLeftStyle: 'solid',
          borderLeftColor: '#A8185E',
        }}>
          <div style={{
            fontSize: '0.58rem',
            fontWeight: 700,
            fontFamily: 'Montserrat, sans-serif',
            color: beat.callout.accent ? '#A8185E' : '#A8185E',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: 6,
          }}>
            {beat.callout.label}
          </div>
          <p style={{
            fontSize: '0.78rem',
            fontFamily: 'Montserrat, sans-serif',
            color: beat.callout.accent ? '#fff' : '#333',
            lineHeight: 1.65,
            margin: 0,
            fontWeight: beat.callout.accent ? 500 : 400,
          }}>
            {beat.callout.text}
          </p>
        </div>
      )}
    </div>
  );
};

const PractitionerBriefSlide = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('pb-visible'); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="s-practitioner"
      style={{
        background: '#fff',
        borderTop: '3px solid #A8185E',
        paddingBottom: 80,
      }}
    >
      <style>{`
        .pb-beat {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.5s ease, transform 0.5s ease;
          padding: 36px 48px;
          border-bottom: 1px solid #f0f0f0;
        }
        .pb-beat.pb-visible {
          opacity: 1;
          transform: none;
        }
        .pb-header {
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .pb-header.pb-visible {
          opacity: 1;
          transform: none;
        }
        @media (max-width: 900px) {
          .pb-beat {
            padding: 24px 16px;
          }
          .pb-header {
            padding: 28px 16px 20px !important;
          }
        }
      `}</style>

      {/* Section header */}
      <div
        ref={headerRef}
        className="pb-header"
        style={{
          padding: '40px 48px 32px',
          borderBottom: '2px solid #f0f0f0',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#A8185E' }} />
          <span style={{
            fontSize: '0.62rem',
            fontWeight: 700,
            fontFamily: 'Montserrat, sans-serif',
            color: '#A8185E',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>
            Practitioner Brief
          </span>
        </div>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 700,
          fontFamily: 'Montserrat, sans-serif',
          color: '#000',
          margin: '0 0 10px',
          lineHeight: 1.15,
        }}>
          How we actually built this.<br />What we got wrong first.
        </h2>
        <p style={{
          fontSize: '0.88rem',
          fontFamily: 'Montserrat, sans-serif',
          color: '#666',
          margin: 0,
          lineHeight: 1.65,
          maxWidth: 680,
        }}>
          A firm with roughly 1,000 historical investment committee memos. Nine fields per memo. The goal: train agents to read those memos, master past deals, and resolve them against current MDM definitions. They had tried this three times with humans before. All three failed. Here is what building the agentic workflow took.
        </p>
      </div>

      {/* Beats */}
      {beats.map((beat, i) => (
        <BeatCard key={beat.num} beat={beat} index={i} />
      ))}

      {/* Closing line */}
      <div className="pb-closing" style={{
        margin: '0 48px',
        paddingTop: 40,
        borderTop: '1px solid #eee',
        display: 'flex',
        alignItems: 'flex-start',
        gap: 16,
      }}>
        <div style={{
          width: 2,
          background: '#A8185E',
          borderRadius: 2,
          alignSelf: 'stretch',
          minHeight: 48,
          flexShrink: 0,
        }} />
        <p style={{
          fontSize: '1.05rem',
          fontWeight: 600,
          fontFamily: 'Montserrat, sans-serif',
          color: '#000',
          lineHeight: 1.5,
          margin: 0,
        }}>
          We started with extraction.<br />
          We ended up{' '}
          <span style={{ color: '#A8185E' }}>formalizing how the firm thinks about deals.</span>
          <br />
          That is what a knowledge graph with entity resolution enables. Not better data. Better institutional memory.
        </p>
      </div>
    </section>
  );
};

export default PractitionerBriefSlide;
