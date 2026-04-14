import { useState } from 'react';
import { LUNA_ENTITIES, LunaEntity } from '@/data/demoData';

interface LunaStepProps {
  onFieldFocus: (phrase: string | null) => void;
  onNext: () => void;
  onBack: () => void;
}

type ConflictAction = null | 'flagged' | 'registered';

const ConfidenceMeter = ({ value }: { value: number }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <div style={{ flex: 1, height: 4, background: '#eee', borderRadius: 2, overflow: 'hidden' }}>
      <div style={{
        width: `${value}%`,
        height: '100%',
        background: value >= 95 ? '#23A98E' : value >= 80 ? '#CC5800' : '#A8185E',
        borderRadius: 2,
        transition: 'width 0.6s ease',
      }} />
    </div>
    <span style={{
      fontSize: '0.68rem',
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 700,
      color: '#000',
      minWidth: 32,
    }}>
      {value}%
    </span>
  </div>
);

const EntityCard = ({
  entity,
  onResolve,
  resolved,
}: {
  entity: LunaEntity;
  onResolve: () => void;
  resolved: boolean;
}) => {
  return (
    <div style={{
      border: `1px solid ${resolved ? '#23A98E' : '#eee'}`,
      borderLeft: `3px solid ${resolved ? '#23A98E' : '#A8185E'}`,
      borderRadius: 6,
      overflow: 'hidden',
      marginBottom: 12,
      transition: 'border-color 0.2s ease',
    }}>
      {/* Entity header */}
      <div style={{
        padding: '12px 16px',
        background: resolved ? '#F0FBF7' : '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #f5f5f5',
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              fontSize: '0.6rem',
              fontWeight: 700,
              fontFamily: 'Montserrat, sans-serif',
              padding: '2px 6px',
              borderRadius: 3,
              background: '#A8185E',
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Found in memo
            </span>
            <span style={{
              fontSize: '0.62rem',
              fontFamily: 'ui-monospace, monospace',
              color: '#aaa',
            }}>
              {entity.rawName}
            </span>
          </div>
          {resolved && (
            <div style={{
              marginTop: 4,
              fontSize: '0.68rem',
              fontFamily: 'Montserrat, sans-serif',
              color: '#23A98E',
              fontWeight: 600,
            }}>
              Resolved
            </div>
          )}
        </div>
        {!resolved ? (
          <button
            onClick={onResolve}
            style={{
              padding: '7px 14px',
              background: '#A8185E',
              color: '#fff',
              border: 'none',
              borderRadius: 4,
              fontSize: '0.7rem',
              fontWeight: 700,
              fontFamily: 'Montserrat, sans-serif',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            Resolve
          </button>
        ) : (
          <span style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            fontSize: '0.7rem',
            fontFamily: 'Montserrat, sans-serif',
            color: '#23A98E',
            fontWeight: 600,
          }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" stroke="#23A98E" strokeWidth="1.3" />
              <path d="M4 7l2.5 2.5L10 5" stroke="#23A98E" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Confirmed
          </span>
        )}
      </div>

      {/* Resolution details - shown when resolved */}
      {resolved && (
        <div style={{ padding: '14px 16px', background: '#FAFFFE' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
            <div>
              <div style={{
                fontSize: '0.58rem',
                fontWeight: 700,
                fontFamily: 'Montserrat, sans-serif',
                color: '#999',
                textTransform: 'uppercase',
                letterSpacing: '0.07em',
                marginBottom: 4,
              }}>
                Canonical Name
              </div>
              <div style={{
                fontSize: '0.8rem',
                fontFamily: 'ui-monospace, monospace',
                fontWeight: 600,
                color: '#000',
              }}>
                {entity.canonicalName}
              </div>
            </div>
            <div>
              <div style={{
                fontSize: '0.58rem',
                fontWeight: 700,
                fontFamily: 'Montserrat, sans-serif',
                color: '#999',
                textTransform: 'uppercase',
                letterSpacing: '0.07em',
                marginBottom: 4,
              }}>
                Entity Type
              </div>
              <div style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                fontFamily: 'Montserrat, sans-serif',
                color: '#A8185E',
              }}>
                {entity.entityType}
              </div>
            </div>
          </div>

          <div style={{ marginBottom: 14 }}>
            <div style={{
              fontSize: '0.58rem',
              fontWeight: 700,
              fontFamily: 'Montserrat, sans-serif',
              color: '#999',
              textTransform: 'uppercase',
              letterSpacing: '0.07em',
              marginBottom: 4,
            }}>
              Known Aliases
            </div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {entity.aliases.map(a => (
                <span key={a} style={{
                  fontSize: '0.66rem',
                  fontFamily: 'ui-monospace, monospace',
                  padding: '2px 7px',
                  background: '#fff',
                  border: '1px solid #e0e0e0',
                  borderRadius: 3,
                  color: '#555',
                }}>
                  {a}
                </span>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 14 }}>
            <div style={{
              fontSize: '0.58rem',
              fontWeight: 700,
              fontFamily: 'Montserrat, sans-serif',
              color: '#999',
              textTransform: 'uppercase',
              letterSpacing: '0.07em',
              marginBottom: 4,
            }}>
              Role in this memo
            </div>
            <div style={{
              fontSize: '0.74rem',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 600,
              color: '#23A98E',
            }}>
              {entity.role}
            </div>
          </div>

          <div style={{ marginBottom: 8 }}>
            <div style={{
              fontSize: '0.58rem',
              fontWeight: 700,
              fontFamily: 'Montserrat, sans-serif',
              color: '#999',
              textTransform: 'uppercase',
              letterSpacing: '0.07em',
              marginBottom: 4,
            }}>
              Confidence
            </div>
            <ConfidenceMeter value={entity.confidence} />
          </div>

          <div>
            <div style={{
              fontSize: '0.58rem',
              fontWeight: 700,
              fontFamily: 'Montserrat, sans-serif',
              color: '#999',
              textTransform: 'uppercase',
              letterSpacing: '0.07em',
              marginBottom: 6,
            }}>
              Prior Appearances ({entity.priorAppearances.length})
            </div>
            {entity.priorAppearances.map((p, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '5px 0',
                borderBottom: i < entity.priorAppearances.length - 1 ? '1px solid #f0f0f0' : 'none',
              }}>
                <div style={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  background: '#23A98E',
                  flexShrink: 0,
                }} />
                <span style={{
                  fontSize: '0.7rem',
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#555',
                }}>
                  {p}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const SectorConflictAlert = ({
  conflictAction,
  onFlag,
  onRegister,
}: {
  conflictAction: ConflictAction;
  onFlag: () => void;
  onRegister: () => void;
}) => (
  <div style={{
    border: '2px solid #CC5800',
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 12,
    boxShadow: '0 2px 12px rgba(204,88,0,0.08)',
  }}>
    <div style={{
      background: '#CC5800',
      padding: '10px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
    }}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1.5L14.5 13.5H1.5L8 1.5z" stroke="#fff" strokeWidth="1.4" fill="rgba(255,255,255,0.15)" />
        <path d="M8 6.5v3M8 11v.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span style={{
        fontSize: '0.72rem',
        fontWeight: 700,
        fontFamily: 'Montserrat, sans-serif',
        color: '#fff',
        letterSpacing: '0.04em',
      }}>
        Sector mismatch detected
      </span>
    </div>

    <div style={{ padding: '14px 16px', background: '#FFFAF5' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
        <div style={{
          padding: '10px 12px',
          border: '1px solid #e0e0e0',
          borderRadius: 4,
          background: '#fff',
        }}>
          <div style={{
            fontSize: '0.58rem',
            fontWeight: 700,
            fontFamily: 'Montserrat, sans-serif',
            color: '#999',
            textTransform: 'uppercase',
            letterSpacing: '0.07em',
            marginBottom: 4,
          }}>
            Entity on record (MDM)
          </div>
          <div style={{
            fontSize: '0.8rem',
            fontWeight: 700,
            fontFamily: 'Montserrat, sans-serif',
            color: '#1B70B1',
          }}>
            Office
          </div>
          <div style={{
            fontSize: '0.65rem',
            fontFamily: 'Montserrat, sans-serif',
            color: '#888',
            marginTop: 2,
          }}>
            Stonegate Office Portfolio
          </div>
        </div>
        <div style={{
          padding: '10px 12px',
          border: '1px solid #e0e0e0',
          borderRadius: 4,
          background: '#fff',
        }}>
          <div style={{
            fontSize: '0.58rem',
            fontWeight: 700,
            fontFamily: 'Montserrat, sans-serif',
            color: '#999',
            textTransform: 'uppercase',
            letterSpacing: '0.07em',
            marginBottom: 4,
          }}>
            Memo narrative describes
          </div>
          <div style={{
            fontSize: '0.8rem',
            fontWeight: 700,
            fontFamily: 'Montserrat, sans-serif',
            color: '#CC5800',
          }}>
            Retail
          </div>
          <div style={{
            fontSize: '0.65rem',
            fontFamily: 'Montserrat, sans-serif',
            color: '#888',
            marginTop: 2,
          }}>
            400 Stonegate retail podium
          </div>
        </div>
      </div>

      <p style={{
        fontSize: '0.76rem',
        fontFamily: 'Montserrat, sans-serif',
        color: '#000',
        lineHeight: 1.65,
        margin: '0 0 14px',
      }}>
        This transaction may represent a new retail sub-investment under an existing office entity, not a reclassification of the parent. The memo extraction is correct. The business interpretation requires human confirmation before writing to the MDM.
      </p>

      {conflictAction === null && (
        <div style={{ display: 'flex', gap: 10 }}>
          <button
            onClick={onFlag}
            style={{
              padding: '8px 16px',
              background: '#fff',
              border: '1.5px solid #CC5800',
              borderRadius: 4,
              fontSize: '0.71rem',
              fontWeight: 700,
              fontFamily: 'Montserrat, sans-serif',
              color: '#CC5800',
              cursor: 'pointer',
            }}
          >
            Flag for human review
          </button>
          <button
            onClick={onRegister}
            style={{
              padding: '8px 16px',
              background: '#CC5800',
              border: 'none',
              borderRadius: 4,
              fontSize: '0.71rem',
              fontWeight: 700,
              fontFamily: 'Montserrat, sans-serif',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            Register as retail sub-investment
          </button>
        </div>
      )}

      {conflictAction === 'flagged' && (
        <div style={{
          padding: '8px 12px',
          background: '#FFF8EC',
          border: '1px solid #CC5800',
          borderRadius: 4,
          fontSize: '0.72rem',
          fontFamily: 'Montserrat, sans-serif',
          color: '#CC5800',
          fontWeight: 600,
        }}>
          Flagged for human review. This record will not write to MDM until confirmed.
        </div>
      )}

      {conflictAction === 'registered' && (
        <div style={{
          padding: '8px 12px',
          background: '#F0FBF7',
          border: '1px solid #23A98E',
          borderRadius: 4,
          fontSize: '0.72rem',
          fontFamily: 'Montserrat, sans-serif',
          color: '#23A98E',
          fontWeight: 600,
        }}>
          Registered as: Office / Retail Add-on. New sub-investment entity created under Stonegate Office Portfolio.
        </div>
      )}
    </div>
  </div>
);

const LunaStep = ({ onFieldFocus, onNext, onBack }: LunaStepProps) => {
  const [resolvedIds, setResolvedIds] = useState<Set<string>>(new Set());
  const [conflictAction, setConflictAction] = useState<ConflictAction>(null);

  const handleResolve = (entity: LunaEntity) => {
    setResolvedIds(prev => new Set([...prev, entity.id]));
    onFieldFocus(entity.id === 'sop' ? 'Stonegate Office Portfolio' : 'Harwick Capital Partners IV portfolio');
  };

  const allResolved = LUNA_ENTITIES.every(e => resolvedIds.has(e.id));
  const stoneGateResolved = resolvedIds.has('sop');

  return (
    <div style={{ padding: '24px 28px', maxWidth: 760 }}>
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
          <h2 style={{
            fontSize: '1.2rem',
            fontWeight: 700,
            fontFamily: 'Montserrat, sans-serif',
            color: '#000',
            margin: 0,
          }}>
            Luna: entity resolution
          </h2>
          <span style={{
            fontSize: '0.62rem',
            fontWeight: 700,
            fontFamily: 'Montserrat, sans-serif',
            padding: '3px 8px',
            borderRadius: 3,
            background: '#FFF5F8',
            color: '#A8185E',
            border: '1px solid #f2c0d3',
          }}>
            Cherre Luna
          </span>
        </div>
        <p style={{
          fontSize: '0.8rem',
          fontFamily: 'Montserrat, sans-serif',
          color: '#666',
          margin: 0,
          lineHeight: 1.6,
        }}>
          Luna resolves named entities from the memo to their canonical record in the entity graph. This answers the question: who or what is this, really? Click Resolve on each entity to see the result.
        </p>
      </div>

      {/* How Luna works - compact */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 8,
        marginBottom: 20,
        padding: '12px 14px',
        background: '#F8F8F8',
        borderRadius: 6,
        border: '1px solid #eee',
      }}>
        {[
          { label: 'Multi-tier search', desc: 'ID match, name match, semantic match with calibrated confidence.' },
          { label: 'Entity graph resolution', desc: 'Maps aliases, renames, and restructures to one canonical record.' },
          { label: 'Role inference', desc: 'Determines entity function: fund vehicle, investment entity, operator, etc.' },
        ].map(item => (
          <div key={item.label}>
            <div style={{
              fontSize: '0.62rem',
              fontWeight: 700,
              fontFamily: 'Montserrat, sans-serif',
              color: '#A8185E',
              marginBottom: 3,
            }}>
              {item.label}
            </div>
            <div style={{
              fontSize: '0.7rem',
              fontFamily: 'Montserrat, sans-serif',
              color: '#666',
              lineHeight: 1.5,
            }}>
              {item.desc}
            </div>
          </div>
        ))}
      </div>

      {/* Entities */}
      <div style={{
        fontSize: '0.62rem',
        fontWeight: 700,
        fontFamily: 'Montserrat, sans-serif',
        color: '#999',
        textTransform: 'uppercase',
        letterSpacing: '0.07em',
        marginBottom: 10,
      }}>
        Entities found in memo ({LUNA_ENTITIES.length})
      </div>

      {LUNA_ENTITIES.map(entity => (
        <EntityCard
          key={entity.id}
          entity={entity}
          resolved={resolvedIds.has(entity.id)}
          onResolve={() => handleResolve(entity)}
        />
      ))}

      {/* Sector conflict - appears after Stonegate is resolved */}
      {stoneGateResolved && (
        <div style={{ marginTop: 8 }}>
          <div style={{
            fontSize: '0.62rem',
            fontWeight: 700,
            fontFamily: 'Montserrat, sans-serif',
            color: '#CC5800',
            textTransform: 'uppercase',
            letterSpacing: '0.07em',
            marginBottom: 10,
          }}>
            Luna conflict alert
          </div>
          <SectorConflictAlert
            conflictAction={conflictAction}
            onFlag={() => setConflictAction('flagged')}
            onRegister={() => setConflictAction('registered')}
          />
        </div>
      )}

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingTop: 12,
        borderTop: '1px solid #f0f0f0',
      }}>
        <p style={{
          fontSize: '0.76rem',
          fontFamily: 'Montserrat, sans-serif',
          color: '#888',
          margin: 0,
        }}>
          {allResolved
            ? 'Entities resolved. Ground the schema relationships in Meridian.'
            : 'Resolve all entities to continue.'}
        </p>
        <button
          onClick={onNext}
          disabled={!allResolved}
          style={{
            padding: '10px 20px',
            background: allResolved ? '#A8185E' : '#e0e0e0',
            color: allResolved ? '#fff' : '#aaa',
            border: 'none',
            borderRadius: 4,
            fontSize: '0.74rem',
            fontWeight: 700,
            fontFamily: 'Montserrat, sans-serif',
            cursor: allResolved ? 'pointer' : 'not-allowed',
            letterSpacing: '0.02em',
            transition: 'all 0.15s ease',
          }}
        >
          Ground with Meridian
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
            ← Back
          </button>

      </div>
    </div>
  );
};

export default LunaStep;
