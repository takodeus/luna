interface WhyBreaksStepProps {
  onNext: () => void;
  onBack: () => void;
}

const failures = [
  {
    field: 'Capital Pool vs. Investment',
    color: '#A8185E',
    bg: '#FFF5F8',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8.5" stroke="#A8185E" strokeWidth="1.3" />
        <path d="M7 10h6M10 7v6" stroke="#A8185E" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    memoProblem: 'The memo says "expand the Harwick Capital Partners IV portfolio."',
    modelAction: 'The model sees a named entity associated with the deal and assigns it as the Investment.',
    actualAnswer: 'Harwick Capital Partners IV is the fund vehicle (Capital Pool). The investment is a deal held within that fund. The memo does not make this role distinction explicit.',
    fix: 'Luna resolves the entity type and role from the entity graph, not the memo text.',
  },
  {
    field: 'Sector: the model was right, and still wrong',
    color: '#CC5800',
    bg: '#FFF8EC',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L18 17H2L10 2z" stroke="#CC5800" strokeWidth="1.3" fill="none" />
        <path d="M10 8v4M10 14v.5" stroke="#CC5800" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    memoProblem: 'The memo describes a retail podium. The correct memo-level answer is: Retail.',
    modelAction: 'The model extracts "Retail" with 91% confidence. This is the correct reading of the memo.',
    actualAnswer: 'The resolved parent entity (Stonegate Office Portfolio) is classified as Office in the MDM. This deal adds a retail component to an office investment. The conflict is invisible in the memo and only detectable through entity resolution.',
    fix: 'Luna surfaces the MDM sector for the resolved entity and flags the mismatch. Human review required.',
  },
  {
    field: 'Transaction Type: linguistically correct, taxonomically wrong',
    color: '#611FAD',
    bg: '#F8F5FF',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="3" width="14" height="14" rx="2" stroke="#611FAD" strokeWidth="1.3" />
        <path d="M7 10h6M10 7l3 3-3 3" stroke="#611FAD" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    memoProblem: 'The memo says "proposed acquisition." The word is unambiguous in plain English.',
    modelAction: 'The model correctly extracts "Acquisition" as the transaction type. This is linguistically accurate.',
    actualAnswer: 'A bridge loan structured solely to fund an acquisition can appear as two records in the system. Economically, it is one transaction. Wrong taxonomy means wrong performance attribution. "Acquisition" is the right word. "Portfolio Add-on" is the right normalized value.',
    fix: 'Meridian enforces the transaction type taxonomy and maps "acquisition of existing portfolio asset" to "Portfolio Add-on."',
  },
];

const WhyBreaksStep = ({ onNext, onBack }: WhyBreaksStepProps) => {
  return (
    <div style={{ padding: '24px 28px', maxWidth: 760 }}>
      <div style={{ marginBottom: 22 }}>
        <h2 style={{
          fontSize: '1.2rem',
          fontWeight: 700,
          fontFamily: 'Montserrat, sans-serif',
          color: '#000',
          margin: '0 0 8px',
        }}>
          Why it breaks
        </h2>
        <div style={{
          fontSize: '0.92rem',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 600,
          color: '#A8185E',
          fontStyle: 'italic',
          borderLeft: '3px solid #A8185E',
          paddingLeft: 12,
          marginBottom: 10,
          lineHeight: 1.5,
        }}>
          The memo is a snapshot. The logic lives outside it.
        </div>
        <p style={{
          fontSize: '0.8rem',
          fontFamily: 'Montserrat, sans-serif',
          color: '#666',
          margin: 0,
          lineHeight: 1.6,
        }}>
          The text-only model read the memo correctly. That is not the problem. The problem is that the correct interpretation of several fields requires knowledge that is not in the memo: entity roles, parent classifications, and business taxonomy. None of that lives in the document.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {failures.map((f, i) => (
          <div key={i} style={{
            border: `1px solid ${f.color}33`,
            borderLeft: `3px solid ${f.color}`,
            borderRadius: 6,
            background: f.bg,
            padding: '16px 18px',
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12 }}>
              {f.icon}
              <span style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                fontFamily: 'Montserrat, sans-serif',
                color: '#000',
                lineHeight: 1.3,
              }}>
                {f.field}
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
              {[
                { label: 'What the memo says', text: f.memoProblem, accent: '#666' },
                { label: 'What the model did', text: f.modelAction, accent: '#666' },
                { label: 'What was actually needed', text: f.actualAnswer, accent: f.color },
              ].map((col, ci) => (
                <div key={ci}>
                  <div style={{
                    fontSize: '0.58rem',
                    fontWeight: 700,
                    fontFamily: 'Montserrat, sans-serif',
                    color: col.accent,
                    textTransform: 'uppercase',
                    letterSpacing: '0.07em',
                    marginBottom: 5,
                  }}>
                    {col.label}
                  </div>
                  <p style={{
                    fontSize: '0.74rem',
                    fontFamily: 'Montserrat, sans-serif',
                    color: '#000',
                    lineHeight: 1.6,
                    margin: 0,
                  }}>
                    {col.text}
                  </p>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: 12,
              paddingTop: 10,
              borderTop: `1px solid ${f.color}22`,
              fontSize: '0.72rem',
              fontFamily: 'Montserrat, sans-serif',
              color: f.color,
              fontWeight: 600,
            }}>
              Fix: {f.fix}
            </div>
          </div>
        ))}
      </div>

      {/* Summary callout */}
      <div style={{
        marginTop: 20,
        padding: '14px 18px',
        background: '#000',
        borderRadius: 6,
        display: 'flex',
        alignItems: 'flex-start',
        gap: 12,
      }}>
        <div style={{
          width: 2,
          flexShrink: 0,
          background: '#A8185E',
          borderRadius: 2,
          alignSelf: 'stretch',
          minHeight: 40,
        }} />
        <p style={{
          fontSize: '0.82rem',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 600,
          color: '#fff',
          margin: 0,
          lineHeight: 1.6,
        }}>
          The fix was definitional, not technical. The decision logic already existed. It just lived in people, not systems.
        </p>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginTop: 20,
        paddingTop: 8,
        borderTop: '1px solid #f0f0f0',
      }}>
        <button
          onClick={onNext}
          style={{
            padding: '10px 20px',
            background: '#A8185E',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            fontSize: '0.74rem',
            fontWeight: 700,
            fontFamily: 'Montserrat, sans-serif',
            cursor: 'pointer',
            letterSpacing: '0.02em',
          }}
        >
          Resolve with Luna
        </button>
          <button
            onClick={onBack}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'Montserrat, sans-serif', fontSize: '0.68rem',
              color: '#bbb', padding: '4px 0 0',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#A8185E')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#bbb')}
          >
            Back
          </button>

      </div>
    </div>
  );
};

export default WhyBreaksStep;
