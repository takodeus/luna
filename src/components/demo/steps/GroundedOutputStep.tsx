import { useState } from 'react';
import { DEMO_FIELDS, DemoField } from '@/data/demoData';

interface GroundedOutputStepProps {
  onFieldFocus: (phrase: string | null) => void;
}

const resolvedByLabel: Record<string, { label: string; color: string; bg: string }> = {
  luna:     { label: 'Luna',            color: '#A8185E', bg: '#FFF5F8' },
  meridian: { label: 'Meridian',        color: '#611FAD', bg: '#F3F0FF' },
  both:     { label: 'Luna + Meridian', color: '#CC5800', bg: '#FFF8EC' },
};

const DeltaBadge = ({ field }: { field: DemoField }) => {
  if (field.status === 'correct') return null;
  const cfg = resolvedByLabel[field.resolvedBy ?? ''];
  if (!cfg) return null;
  return (
    <span style={{
      fontSize: '0.58rem',
      fontWeight: 700,
      fontFamily: 'Montserrat, sans-serif',
      padding: '2px 7px',
      borderRadius: 20,
      background: cfg.bg,
      border: `1px solid ${cfg.color}44`,
      color: cfg.color,
      letterSpacing: '0.04em',
      whiteSpace: 'nowrap',
    }}>
      {cfg.label}
    </span>
  );
};

const ComparisonRow = ({
  field,
  isActive,
  onClick,
}: {
  field: DemoField;
  isActive: boolean;
  onClick: () => void;
}) => {
  const changed = field.status !== 'correct';
  const isConflict = field.status === 'conflict';

  return (
    <>
      <tr
        onClick={changed ? onClick : undefined}
        style={{
          cursor: changed ? 'pointer' : 'default',
          background: isActive ? '#FFF5F8' : 'transparent',
          borderLeft: isActive ? '3px solid #A8185E' : '3px solid transparent',
          transition: 'background 0.12s ease',
        }}
      >
        {/* Field label */}
        <td style={{
          padding: '10px 14px',
          fontSize: '0.72rem',
          fontWeight: 600,
          fontFamily: 'Montserrat, sans-serif',
          color: '#555',
          whiteSpace: 'nowrap',
          borderBottom: '1px solid #f5f5f5',
          width: '14%',
        }}>
          {field.label}
        </td>

        {/* Before */}
        <td style={{
          padding: '10px 14px',
          fontSize: '0.72rem',
          fontFamily: 'Montserrat, sans-serif',
          color: changed ? '#aaa' : '#000',
          borderBottom: '1px solid #f5f5f5',
          width: '26%',
        }}>
          <span style={{
            fontFamily: 'ui-monospace, monospace',
            textDecoration: changed ? 'line-through' : 'none',
            textDecorationColor: '#ccc',
          }}>
            {field.textOnly}
          </span>
        </td>

        {/* Arrow */}
        <td style={{
          padding: '10px 6px',
          borderBottom: '1px solid #f5f5f5',
          width: '4%',
          textAlign: 'center',
        }}>
          {changed && (
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M1 5h12M9 1l4 4-4 4" stroke={isConflict ? '#CC5800' : '#A8185E'} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </td>

        {/* After */}
        <td style={{
          padding: '10px 14px',
          fontSize: '0.72rem',
          fontFamily: 'Montserrat, sans-serif',
          borderBottom: '1px solid #f5f5f5',
          width: '28%',
        }}>
          <span style={{
            fontFamily: 'ui-monospace, monospace',
            fontWeight: changed ? 700 : 400,
            color: changed ? (isConflict ? '#CC5800' : '#000') : '#000',
            background: changed ? (isConflict ? '#FFF8EC' : '#F0FBF7') : 'transparent',
            padding: changed ? '1px 6px' : undefined,
            borderRadius: 3,
          }}>
            {field.grounded}
          </span>
        </td>

        {/* Resolved by */}
        <td style={{
          padding: '10px 14px',
          borderBottom: '1px solid #f5f5f5',
          width: '18%',
        }}>
          <DeltaBadge field={field} />
          {!changed && (
            <span style={{
              fontSize: '0.58rem',
              fontWeight: 700,
              fontFamily: 'Montserrat, sans-serif',
              padding: '2px 7px',
              borderRadius: 20,
              background: '#F0FBF7',
              border: '1px solid #23A98E44',
              color: '#23A98E',
              letterSpacing: '0.04em',
            }}>
              Confirmed
            </span>
          )}
        </td>

        {/* Confidence delta */}
        <td style={{
          padding: '10px 14px',
          borderBottom: '1px solid #f5f5f5',
          width: '10%',
        }}>
          {changed && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span style={{ fontSize: '0.6rem', fontFamily: 'Montserrat, sans-serif', color: '#bbb', lineHeight: 1 }}>
                {field.confidence}%
              </span>
              <span style={{ fontSize: '0.68rem', fontWeight: 700, fontFamily: 'Montserrat, sans-serif', color: '#23A98E', lineHeight: 1 }}>
                {field.groundedConfidence}%
              </span>
            </div>
          )}
          {!changed && (
            <span style={{ fontSize: '0.68rem', fontWeight: 600, fontFamily: 'Montserrat, sans-serif', color: '#23A98E' }}>
              {field.groundedConfidence}%
            </span>
          )}
        </td>
      </tr>

      {/* Inline correction note when row is active */}
      {isActive && (
        <tr style={{ background: '#FFFBFD' }}>
          <td colSpan={6} style={{
            padding: '0 14px 12px 32px',
            borderBottom: '1px solid #f5f5f5',
          }}>
            <div style={{
              fontSize: '0.72rem',
              fontFamily: 'Montserrat, sans-serif',
              color: '#555',
              lineHeight: 1.6,
              borderLeft: `2px solid ${isConflict ? '#CC5800' : '#A8185E'}`,
              paddingLeft: 10,
            }}>
              {field.correctionNote}
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

const GroundedOutputStep = ({ onFieldFocus }: GroundedOutputStepProps) => {
  const [activeField, setActiveField] = useState<string | null>(null);
  const changedCount = DEMO_FIELDS.filter(f => f.status !== 'correct').length;

  const handleRowClick = (field: DemoField) => {
    if (field.status === 'correct') return;
    const next = activeField === field.key ? null : field.key;
    setActiveField(next);
    onFieldFocus(next ? field.memoPhrase : null);
  };

  return (
    <div style={{ padding: '24px 28px', maxWidth: 820 }}>
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
            Grounded output
          </h2>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              fontFamily: 'Montserrat, sans-serif',
              padding: '4px 10px',
              borderRadius: 4,
              background: '#F0FBF7',
              color: '#23A98E',
              border: '1px solid #23A98E33',
            }}>
              {changedCount} fields corrected
            </span>
            <span style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              fontFamily: 'Montserrat, sans-serif',
              padding: '4px 10px',
              borderRadius: 4,
              background: '#F8F8F8',
              color: '#555',
            }}>
              Avg confidence: 98%
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
          After Luna resolves entities and Meridian enforces the schema, the extraction matches how the business actually thinks about this deal. Click any corrected field to see the explanation.
        </p>
      </div>

      {/* Summary stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 10,
        marginBottom: 18,
      }}>
        {[
          {
            label: 'Entity resolution',
            system: 'Luna',
            count: DEMO_FIELDS.filter(f => f.resolvedBy === 'luna').length,
            color: '#A8185E',
            bg: '#FFF5F8',
          },
          {
            label: 'Schema + taxonomy',
            system: 'Meridian',
            count: DEMO_FIELDS.filter(f => f.resolvedBy === 'meridian').length,
            color: '#611FAD',
            bg: '#F3F0FF',
          },
          {
            label: 'Conflict resolution',
            system: 'Luna + Meridian',
            count: DEMO_FIELDS.filter(f => f.resolvedBy === 'both').length,
            color: '#CC5800',
            bg: '#FFF8EC',
          },
        ].map(item => (
          <div key={item.label} style={{
            padding: '12px 14px',
            borderRadius: 6,
            background: item.bg,
            border: `1px solid ${item.color}22`,
          }}>
            <div style={{
              fontSize: '1.4rem',
              fontWeight: 700,
              fontFamily: 'Montserrat, sans-serif',
              color: item.color,
              lineHeight: 1,
              marginBottom: 4,
            }}>
              {item.count}
            </div>
            <div style={{
              fontSize: '0.64rem',
              fontWeight: 700,
              fontFamily: 'Montserrat, sans-serif',
              color: item.color,
              marginBottom: 1,
            }}>
              {item.system}
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

      {/* Comparison table */}
      <div style={{
        border: '1px solid #eee',
        borderRadius: 6,
        overflow: 'hidden',
        marginBottom: 20,
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#F8F8F8', borderBottom: '2px solid #eee' }}>
              {[
                { label: 'Field', w: '14%' },
                { label: 'Text-only', w: '26%' },
                { label: '', w: '4%' },
                { label: 'Grounded', w: '28%' },
                { label: 'Resolved by', w: '18%' },
                { label: 'Confidence', w: '10%' },
              ].map((h, i) => (
                <th key={i} style={{
                  padding: '9px 14px',
                  textAlign: 'left',
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#999',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  width: h.w,
                  whiteSpace: 'nowrap',
                }}>
                  {h.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {DEMO_FIELDS.map(field => (
              <ComparisonRow
                key={field.key}
                field={field}
                isActive={activeField === field.key}
                onClick={() => handleRowClick(field)}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Architecture footer */}
      <div style={{
        padding: '14px 18px',
        background: '#F8F8F8',
        borderRadius: 6,
        border: '1px solid #eee',
        marginBottom: 16,
      }}>
        <div style={{
          fontSize: '0.58rem',
          fontWeight: 700,
          fontFamily: 'Montserrat, sans-serif',
          color: '#999',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          marginBottom: 10,
        }}>
          Pipeline
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 0,
          flexWrap: 'wrap',
        }}>
          {[
            { label: 'IC Memo', sub: 'Source document', color: '#888', bg: '#fff' },
            { arrow: true },
            { label: 'Extraction agent', sub: 'LLM pass', color: '#888', bg: '#fff' },
            { arrow: true },
            { label: 'Luna', sub: 'Entity resolution', color: '#A8185E', bg: '#FFF5F8' },
            { arrow: true },
            { label: 'Meridian', sub: 'Knowledge graph', color: '#611FAD', bg: '#F3F0FF' },
            { arrow: true },
            { label: 'Grounded output', sub: 'MDM-ready', color: '#23A98E', bg: '#F0FBF7' },
          ].map((item, i) => {
            if ('arrow' in item) {
              return (
                <svg key={`arrow-${i}`} width="20" height="12" viewBox="0 0 20 12" fill="none" style={{ flexShrink: 0, margin: '0 2px' }}>
                  <path d="M1 6h16M13 2l4 4-4 4" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              );
            }
            return (
              <div key={item.label} style={{
                padding: '6px 10px',
                borderRadius: 4,
                background: item.bg,
                border: `1px solid ${item.color}22`,
                flexShrink: 0,
              }}>
                <div style={{
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  fontFamily: 'Montserrat, sans-serif',
                  color: item.color,
                  lineHeight: 1.2,
                }}>
                  {item.label}
                </div>
                <div style={{
                  fontSize: '0.58rem',
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#aaa',
                  lineHeight: 1.2,
                }}>
                  {item.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Takeaway */}
      <div style={{
        padding: '16px 20px',
        background: '#000',
        borderRadius: 6,
        display: 'flex',
        alignItems: 'flex-start',
        gap: 14,
      }}>
        <div style={{
          width: 2,
          flexShrink: 0,
          background: '#A8185E',
          borderRadius: 2,
          alignSelf: 'stretch',
          minHeight: 44,
        }} />
        <div>
          <p style={{
            fontSize: '0.9rem',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            color: '#fff',
            margin: '0 0 8px',
            lineHeight: 1.45,
          }}>
            We stored what happened. Not why it was decided.
          </p>
          <p style={{
            fontSize: '0.76rem',
            fontFamily: 'Montserrat, sans-serif',
            color: '#999',
            margin: '0 0 10px',
            lineHeight: 1.6,
          }}>
            This is the gap between data lineage and decision lineage. Luna and Meridian make the reasoning chain queryable: not just what was extracted, but under which definition, governed by which rules, resolved against which entity record.
          </p>
          <p style={{
            fontSize: '0.76rem',
            fontFamily: 'Montserrat, sans-serif',
            color: '#A8185E',
            fontWeight: 600,
            margin: 0,
            lineHeight: 1.5,
          }}>
            Not better data. Better institutional memory.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GroundedOutputStep;
