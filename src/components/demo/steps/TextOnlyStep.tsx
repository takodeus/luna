import { useState } from 'react';
import { DEMO_FIELDS, DemoField } from '@/data/demoData';

interface TextOnlyStepProps {
  onFieldFocus: (phrase: string | null) => void;
  onNext: () => void;
}

const StatusBadge = ({ status, confidence }: { status: DemoField['status']; confidence: number }) => {
  const cfg = {
    correct: { bg: '#F0FBF7', border: '#23A98E', color: '#23A98E', label: 'OK' },
    wrong:   { bg: '#FFF5F8', border: '#A8185E', color: '#A8185E', label: 'Review' },
    conflict: { bg: '#FFF8EC', border: '#CC5800', color: '#CC5800', label: 'Conflict' },
  }[status];

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      <span style={{
        fontSize: '0.6rem',
        fontWeight: 700,
        fontFamily: 'Montserrat, sans-serif',
        padding: '2px 7px',
        borderRadius: 20,
        background: cfg.bg,
        border: `1px solid ${cfg.border}`,
        color: cfg.color,
        letterSpacing: '0.04em',
        whiteSpace: 'nowrap',
      }}>
        {cfg.label}
      </span>
      <span style={{
        fontSize: '0.65rem',
        fontFamily: 'Montserrat, sans-serif',
        color: confidence >= 90 ? '#23A98E' : confidence >= 75 ? '#CC5800' : '#A8185E',
        fontWeight: 600,
        whiteSpace: 'nowrap',
      }}>
        {confidence}%
      </span>
    </div>
  );
};

const FieldRow = ({
  field,
  isActive,
  onClick,
}: {
  field: DemoField;
  isActive: boolean;
  onClick: () => void;
}) => {
  const isProblematic = field.status !== 'correct';

  return (
    <tr
      onClick={onClick}
      style={{
        cursor: isProblematic ? 'pointer' : 'default',
        background: isActive ? '#FFF5F8' : isProblematic ? '#FFFAFA' : '#fff',
        borderLeft: isActive ? '3px solid #A8185E' : '3px solid transparent',
        transition: 'all 0.12s ease',
      }}
    >
      <td style={{
        padding: '10px 14px',
        fontSize: '0.72rem',
        fontWeight: 600,
        fontFamily: 'Montserrat, sans-serif',
        color: '#555',
        whiteSpace: 'nowrap',
        borderBottom: '1px solid #f5f5f5',
      }}>
        {field.label}
      </td>
      <td style={{
        padding: '10px 14px',
        fontSize: '0.74rem',
        fontFamily: 'Montserrat, sans-serif',
        color: '#000',
        borderBottom: '1px solid #f5f5f5',
      }}>
        <span style={{
          fontFamily: 'ui-monospace, monospace',
          background: field.status === 'conflict' ? '#FFF8EC' : field.status === 'wrong' ? '#FFF5F8' : 'transparent',
          padding: field.status !== 'correct' ? '1px 6px' : undefined,
          borderRadius: 3,
          fontSize: '0.73rem',
        }}>
          {field.textOnly}
        </span>
      </td>
      <td style={{
        padding: '10px 14px',
        borderBottom: '1px solid #f5f5f5',
      }}>
        <StatusBadge status={field.status} confidence={field.confidence} />
      </td>
      <td style={{
        padding: '10px 14px',
        borderBottom: '1px solid #f5f5f5',
      }}>
        {isProblematic && (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ opacity: 0.4 }}>
            <path d="M7 1L13 12H1L7 1z" stroke="#A8185E" strokeWidth="1.2" fill="none"/>
            <path d="M7 5v3M7 10v.5" stroke="#A8185E" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        )}
      </td>
    </tr>
  );
};

const TextOnlyStep = ({ onFieldFocus, onNext }: TextOnlyStepProps) => {
  const [activeField, setActiveField] = useState<string | null>(null);

  const handleFieldClick = (field: DemoField) => {
    if (field.status === 'correct') return;
    const next = activeField === field.key ? null : field.key;
    setActiveField(next);
    onFieldFocus(next ? field.memoPhrase : null);
  };

  const activeFieldData = DEMO_FIELDS.find(f => f.key === activeField);
  const wrongCount = DEMO_FIELDS.filter(f => f.status === 'wrong').length;
  const conflictCount = DEMO_FIELDS.filter(f => f.status === 'conflict').length;

  return (
    <div style={{ padding: '24px 28px', maxWidth: 760 }}>
      {/* Header */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
          <h2 style={{
            fontSize: '1.2rem',
            fontWeight: 700,
            fontFamily: 'Montserrat, sans-serif',
            color: '#000',
            margin: 0,
          }}>
            Text-only extraction
          </h2>
          <div style={{ display: 'flex', gap: 8 }}>
            <span style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              fontFamily: 'Montserrat, sans-serif',
              padding: '4px 10px',
              borderRadius: 4,
              background: '#F5F5F5',
              color: '#555',
            }}>
              Eval set match: 91%
            </span>
            <span style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              fontFamily: 'Montserrat, sans-serif',
              padding: '4px 10px',
              borderRadius: 4,
              background: '#FFF5F8',
              color: '#A8185E',
              border: '1px solid #f2c0d3',
            }}>
              Looks correct on paper
            </span>
          </div>
        </div>
        <p style={{
          fontSize: '0.8rem',
          fontFamily: 'Montserrat, sans-serif',
          color: '#666',
          margin: 0,
          lineHeight: 1.6,
        }}>
          First-pass extraction using the memo text alone. Click any flagged field to see the phrase it came from and why it may be wrong.
        </p>
      </div>

      {/* Score summary */}
      <div style={{
        display: 'flex',
        gap: 10,
        marginBottom: 16,
      }}>
        {[
          { label: 'Correct', count: DEMO_FIELDS.filter(f => f.status === 'correct').length, color: '#23A98E', bg: '#F0FBF7' },
          { label: 'Needs review', count: wrongCount, color: '#A8185E', bg: '#FFF5F8' },
          { label: 'Conflict', count: conflictCount, color: '#CC5800', bg: '#FFF8EC' },
        ].map(item => (
          <div key={item.label} style={{
            padding: '8px 14px',
            borderRadius: 6,
            background: item.bg,
            border: `1px solid ${item.color}22`,
          }}>
            <div style={{
              fontSize: '1.2rem',
              fontWeight: 700,
              fontFamily: 'Montserrat, sans-serif',
              color: item.color,
              lineHeight: 1,
              marginBottom: 3,
            }}>
              {item.count}
            </div>
            <div style={{
              fontSize: '0.62rem',
              fontFamily: 'Montserrat, sans-serif',
              color: '#888',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div style={{
        border: '1px solid #eee',
        borderRadius: 6,
        overflow: 'hidden',
        marginBottom: 16,
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#F8F8F8', borderBottom: '2px solid #eee' }}>
              {['Field', 'Extracted Value', 'Confidence', ''].map(h => (
                <th key={h} style={{
                  padding: '9px 14px',
                  textAlign: 'left',
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#999',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {DEMO_FIELDS.map(field => (
              <FieldRow
                key={field.key}
                field={field}
                isActive={activeField === field.key}
                onClick={() => handleFieldClick(field)}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Detail panel for active field */}
      {activeFieldData && (
        <div style={{
          border: `1px solid ${activeFieldData.status === 'conflict' ? '#CC5800' : '#A8185E'}`,
          borderLeft: `3px solid ${activeFieldData.status === 'conflict' ? '#CC5800' : '#A8185E'}`,
          borderRadius: 6,
          padding: '14px 16px',
          background: activeFieldData.status === 'conflict' ? '#FFFBF5' : '#FFF7FA',
          marginBottom: 16,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <span style={{
              fontSize: '0.62rem',
              fontWeight: 700,
              fontFamily: 'Montserrat, sans-serif',
              color: activeFieldData.status === 'conflict' ? '#CC5800' : '#A8185E',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}>
              {activeFieldData.status === 'conflict' ? 'Conflict detected' : 'Why this may be wrong'}
            </span>
            <span style={{
              fontSize: '0.68rem',
              fontFamily: 'Montserrat, sans-serif',
              color: '#aaa',
            }}>
              {activeFieldData.label}
            </span>
          </div>
          <p style={{
            fontSize: '0.77rem',
            fontFamily: 'Montserrat, sans-serif',
            color: '#000',
            lineHeight: 1.7,
            margin: 0,
          }}>
            {activeFieldData.wrongReason}
          </p>
        </div>
      )}

      {/* CTA */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 8,
        borderTop: '1px solid #f0f0f0',
      }}>
        <p style={{
          fontSize: '0.76rem',
          fontFamily: 'Montserrat, sans-serif',
          color: '#888',
          margin: 0,
          lineHeight: 1.5,
        }}>
          The eval set scored this output at 91%. In production, it failed. See why.
        </p>
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
            whiteSpace: 'nowrap',
            letterSpacing: '0.02em',
          }}
        >
          Why it breaks
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

export default TextOnlyStep;
