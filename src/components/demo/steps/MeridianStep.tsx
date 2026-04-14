import { useState } from 'react';
import { MERIDIAN_NODES, MERIDIAN_EDGES, MeridianNode } from '@/data/demoData';

interface MeridianStepProps {
  onNext: () => void;
  onBack: () => void;
}

const NODE_RADIUS = 32;

const GraphView = ({
  selectedNode,
  onSelectNode,
}: {
  selectedNode: string | null;
  onSelectNode: (id: string | null) => void;
}) => {
  const getConnectedIds = (nodeId: string) => {
    const ids = new Set<string>();
    MERIDIAN_EDGES.forEach(e => {
      if (e.from === nodeId) ids.add(e.to);
      if (e.to === nodeId) ids.add(e.from);
    });
    return ids;
  };

  const connected = selectedNode ? getConnectedIds(selectedNode) : new Set<string>();

  const isNodeActive = (id: string) => {
    if (!selectedNode) return true;
    return id === selectedNode || connected.has(id);
  };

  const isEdgeActive = (from: string, to: string) => {
    if (!selectedNode) return true;
    return from === selectedNode || to === selectedNode;
  };

  return (
    <svg
      viewBox="0 0 780 510"
      style={{ width: '100%', height: '100%', overflow: 'visible' }}
      onClick={(e) => {
        if ((e.target as SVGElement).tagName === 'svg') onSelectNode(null);
      }}
    >
      <defs>
        {MERIDIAN_EDGES.map(edge => (
          <marker
            key={`arrow-${edge.from}-${edge.to}`}
            id={`arrow-${edge.from}-${edge.to}`}
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill={edge.color} opacity={isEdgeActive(edge.from, edge.to) ? 0.7 : 0.1} />
          </marker>
        ))}
      </defs>

      {/* Edges */}
      {MERIDIAN_EDGES.map(edge => {
        const fromNode = MERIDIAN_NODES.find(n => n.id === edge.from);
        const toNode = MERIDIAN_NODES.find(n => n.id === edge.to);
        if (!fromNode || !toNode) return null;
        const active = isEdgeActive(edge.from, edge.to);

        // Calculate edge endpoints on circle boundary
        const dx = toNode.x - fromNode.x;
        const dy = toNode.y - fromNode.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const ux = dx / dist;
        const uy = dy / dist;
        const x1 = fromNode.x + ux * NODE_RADIUS;
        const y1 = fromNode.y + uy * NODE_RADIUS;
        const x2 = toNode.x - ux * (NODE_RADIUS + 4);
        const y2 = toNode.y - uy * (NODE_RADIUS + 4);

        // Midpoint for label
        const mx = (x1 + x2) / 2;
        const my = (y1 + y2) / 2;

        return (
          <g key={`${edge.from}-${edge.to}`}>
            <line
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke={edge.color}
              strokeWidth={active ? 1.5 : 0.5}
              strokeDasharray={edge.dashed ? '5,3' : undefined}
              opacity={active ? 0.7 : 0.1}
              markerEnd={`url(#arrow-${edge.from}-${edge.to})`}
              style={{ transition: 'opacity 0.2s ease' }}
            />
            {active && (
              <text
                x={mx} y={my - 5}
                textAnchor="middle"
                style={{
                  fontSize: '0.5rem',
                  fontFamily: 'ui-monospace, monospace',
                  fill: edge.color,
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                }}
              >
                {edge.label}
              </text>
            )}
          </g>
        );
      })}

      {/* Nodes */}
      {MERIDIAN_NODES.map(node => {
        const active = isNodeActive(node.id);
        const isSelected = selectedNode === node.id;

        return (
          <g
            key={node.id}
            transform={`translate(${node.x}, ${node.y})`}
            onClick={(e) => {
              e.stopPropagation();
              onSelectNode(isSelected ? null : node.id);
            }}
            style={{ cursor: 'pointer' }}
          >
            {/* Outer ring for selected */}
            {isSelected && (
              <circle
                r={NODE_RADIUS + 6}
                fill="none"
                stroke={node.color}
                strokeWidth={1.5}
                opacity={0.3}
              />
            )}

            {/* New badge glow */}
            {node.isNew && (
              <circle
                r={NODE_RADIUS + 4}
                fill={node.color}
                opacity={0.1}
              />
            )}

            {/* Main circle */}
            <circle
              r={NODE_RADIUS}
              fill={active ? node.color : '#e8e8e8'}
              opacity={active ? 1 : 0.25}
              style={{ transition: 'all 0.2s ease' }}
            />

            {/* NEW badge */}
            {node.isNew && active && (
              <g transform={`translate(${NODE_RADIUS - 2}, ${-NODE_RADIUS + 4})`}>
                <rect x={-14} y={-8} width={28} height={13} rx={6} fill="#CC5800" />
                <text
                  textAnchor="middle"
                  y={2}
                  style={{
                    fontSize: '0.45rem',
                    fontFamily: 'Montserrat, sans-serif',
                    fill: '#fff',
                    fontWeight: 800,
                    letterSpacing: '0.06em',
                  }}
                >
                  NEW
                </text>
              </g>
            )}

            {/* Node label */}
            {node.label.split(' ').map((word, wi, arr) => {
              const lineCount = arr.length <= 2 ? 1 : Math.ceil(arr.length / 2);
              const lines: string[] = [];
              if (arr.length <= 3) {
                lines.push(arr.slice(0, Math.ceil(arr.length / 2)).join(' '));
                if (arr.length > 1) lines.push(arr.slice(Math.ceil(arr.length / 2)).join(' '));
              } else {
                lines.push(arr.slice(0, 2).join(' '));
                lines.push(arr.slice(2).join(' '));
              }

              if (wi > 0) return null;

              return lines.map((line, li) => (
                <text
                  key={li}
                  y={(li - (lines.length - 1) / 2) * 11}
                  textAnchor="middle"
                  style={{
                    fontSize: '0.55rem',
                    fontFamily: 'Montserrat, sans-serif',
                    fill: active ? '#fff' : '#bbb',
                    fontWeight: 700,
                    pointerEvents: 'none',
                    transition: 'fill 0.2s ease',
                  }}
                >
                  {line}
                </text>
              ));
            })}

            {/* Type badge below node */}
            <text
              y={NODE_RADIUS + 14}
              textAnchor="middle"
              style={{
                fontSize: '0.48rem',
                fontFamily: 'Montserrat, sans-serif',
                fill: active ? node.color : '#ccc',
                fontWeight: 600,
                letterSpacing: '0.04em',
                pointerEvents: 'none',
                transition: 'fill 0.2s ease',
              }}
            >
              {node.sublabel}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

const NodeDetailPanel = ({ node }: { node: MeridianNode }) => {
  const connectedEdges = MERIDIAN_EDGES.filter(e => e.from === node.id || e.to === node.id);

  return (
    <div style={{
      border: '1px solid #eee',
      borderLeft: `3px solid ${node.color}`,
      borderRadius: 6,
      padding: '14px 16px',
      background: '#fff',
      marginBottom: 12,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
        <div style={{
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: node.color,
          flexShrink: 0,
        }} />
        <div>
          <div style={{
            fontSize: '0.82rem',
            fontWeight: 700,
            fontFamily: 'Montserrat, sans-serif',
            color: '#000',
          }}>
            {node.label}
          </div>
          <div style={{
            fontSize: '0.62rem',
            fontFamily: 'Montserrat, sans-serif',
            color: node.color,
            fontWeight: 600,
          }}>
            {node.type}
          </div>
        </div>
        {node.isNew && (
          <span style={{
            marginLeft: 'auto',
            fontSize: '0.6rem',
            fontWeight: 700,
            fontFamily: 'Montserrat, sans-serif',
            padding: '2px 8px',
            borderRadius: 20,
            background: '#FFF8EC',
            color: '#CC5800',
            border: '1px solid #CC580033',
          }}>
            New entity
          </span>
        )}
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
          Relationships ({connectedEdges.length})
        </div>
        {connectedEdges.map((edge, i) => {
          const isOutgoing = edge.from === node.id;
          const otherId = isOutgoing ? edge.to : edge.from;
          const otherNode = MERIDIAN_NODES.find(n => n.id === otherId);
          return (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '4px 0',
              borderBottom: i < connectedEdges.length - 1 ? '1px solid #f5f5f5' : 'none',
            }}>
              <span style={{
                fontSize: '0.6rem',
                fontFamily: 'ui-monospace, monospace',
                fontWeight: 700,
                color: edge.color,
                minWidth: 80,
              }}>
                {isOutgoing ? '+ ' : '< '}{edge.label}
              </span>
              <span style={{
                fontSize: '0.7rem',
                fontFamily: 'Montserrat, sans-serif',
                color: '#555',
              }}>
                {otherNode?.label}
              </span>
              <span style={{
                fontSize: '0.6rem',
                fontFamily: 'Montserrat, sans-serif',
                color: '#bbb',
              }}>
                ({otherNode?.type})
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const MeridianStep = ({ onNext, onBack }: MeridianStepProps) => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const selectedNodeData = MERIDIAN_NODES.find(n => n.id === selectedNode);

  return (
    <div style={{ padding: '24px 28px', maxWidth: 760 }}>
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
          <h2 style={{
            fontSize: '1.2rem',
            fontWeight: 700,
            fontFamily: 'Montserrat, sans-serif',
            color: '#000',
            margin: 0,
          }}>
            Meridian: knowledge graph
          </h2>
          <span style={{
            fontSize: '0.62rem',
            fontWeight: 700,
            fontFamily: 'Montserrat, sans-serif',
            padding: '3px 8px',
            borderRadius: 3,
            background: '#F3F0FF',
            color: '#611FAD',
            border: '1px solid #61..1FAD33',
          }}>
            Cherre Meridian
          </span>
        </div>
        <p style={{
          fontSize: '0.8rem',
          fontFamily: 'Montserrat, sans-serif',
          color: '#666',
          margin: 0,
          lineHeight: 1.6,
        }}>
          Meridian defines how the core concepts relate. Fields are not isolated labels: they are nodes in a relationship model. Click any node to explore its connections. The orange node is the new sub-investment being registered.
        </p>
      </div>

      {/* Graph */}
      <div style={{
        border: '1px solid #eee',
        borderRadius: 8,
        background: '#FAFAFA',
        height: 300,
        padding: 8,
        marginBottom: 16,
        overflow: 'hidden',
      }}>
        <GraphView selectedNode={selectedNode} onSelectNode={setSelectedNode} />
      </div>

      {/* Legend */}
      <div style={{
        display: 'flex',
        gap: 16,
        flexWrap: 'wrap',
        marginBottom: 16,
        padding: '10px 14px',
        background: '#F8F8F8',
        borderRadius: 6,
      }}>
        {[
          { color: '#A8185E', label: 'Capital Pool' },
          { color: '#1B70B1', label: 'Investment' },
          { color: '#CC5800', label: 'Sub-investment / Sector' },
          { color: '#611FAD', label: 'Transaction Type / Committee' },
          { color: '#23A98E', label: 'Geography' },
        ].map(item => (
          <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: item.color,
              flexShrink: 0,
            }} />
            <span style={{
              fontSize: '0.66rem',
              fontFamily: 'Montserrat, sans-serif',
              color: '#555',
            }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Selected node detail */}
      {selectedNodeData ? (
        <NodeDetailPanel node={selectedNodeData} />
      ) : (
        <div style={{
          padding: '12px 16px',
          background: '#F8F8F8',
          borderRadius: 6,
          marginBottom: 12,
          fontSize: '0.74rem',
          fontFamily: 'Montserrat, sans-serif',
          color: '#aaa',
          textAlign: 'center',
        }}>
          Click a node to see its metadata and relationships.
        </div>
      )}

      {/* Key insight */}
      <div style={{
        padding: '12px 16px',
        background: '#F3F0FF',
        border: '1px solid #611FAD33',
        borderLeft: '3px solid #611FAD',
        borderRadius: 6,
        marginBottom: 16,
        fontSize: '0.76rem',
        fontFamily: 'Montserrat, sans-serif',
        color: '#000',
        lineHeight: 1.6,
      }}>
        <strong style={{ color: '#611FAD' }}>Key distinction:</strong> Capital Pool and Investment are not interchangeable labels. They are different node types in the graph with different roles, relationships, and downstream logic. The memo cannot enforce this distinction. Meridian does.
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
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
          See grounded output
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

export default MeridianStep;
