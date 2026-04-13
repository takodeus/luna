import { MEMO_FULL } from '@/data/demoData';

interface MemoPanelProps {
  highlightPhrase: string | null;
}

const MemoParagraph = ({
  text,
  highlight,
}: {
  text: string;
  highlight: string | null;
}) => {
  if (!highlight || !text.toLowerCase().includes(highlight.toLowerCase())) {
    return <span>{text}</span>;
  }
  const idx = text.toLowerCase().indexOf(highlight.toLowerCase());
  const before = text.slice(0, idx);
  const match = text.slice(idx, idx + highlight.length);
  const after = text.slice(idx + highlight.length);
  return (
    <span>
      {before}
      <mark style={{
        background: '#FFF3C4',
        borderBottom: '2px solid #CC5800',
        borderRadius: 2,
        padding: '0 2px',
        fontWeight: 600,
        color: '#000',
      }}>
        {match}
      </mark>
      {after}
    </span>
  );
};

const MemoPanel = ({ highlightPhrase }: MemoPanelProps) => {
  const lines = MEMO_FULL.split('\n');

  return (
    <div style={{
      height: '100%',
      overflowY: 'auto',
      background: '#FAFAFA',
      borderRight: '1px solid #eee',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Panel header */}
      <div style={{
        padding: '16px 20px 12px',
        borderBottom: '1px solid #eee',
        background: '#fff',
        position: 'sticky',
        top: 0,
        zIndex: 2,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: '#A8185E',
          }} />
          <span style={{
            fontSize: '0.65rem',
            fontWeight: 700,
            fontFamily: 'Montserrat, sans-serif',
            color: '#A8185E',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}>
            IC Memo Input
          </span>
        </div>
        {highlightPhrase && (
          <div style={{
            marginTop: 8,
            padding: '5px 10px',
            background: '#FFF3C4',
            border: '1px solid #CC5800',
            borderRadius: 4,
            fontSize: '0.68rem',
            fontFamily: 'Montserrat, sans-serif',
            color: '#CC5800',
            fontWeight: 600,
          }}>
            Highlighted: &quot;{highlightPhrase}&quot;
          </div>
        )}
      </div>

      {/* Memo content */}
      <div style={{
        padding: '20px 22px',
        flex: 1,
      }}>
        {lines.map((line, i) => {
          const isEmpty = line.trim() === '';
          const isSectionHead = line === line.toUpperCase() && line.trim().length > 3 && !line.includes(':');
          const isMetaLine = line.startsWith('Date:') || line.startsWith('Prepared by:') || line.startsWith('Re:') || line.startsWith('Transaction Name:') || line.startsWith('Proposed') || line.startsWith('Expected') || line.startsWith('Structure:');

          if (isEmpty) return <div key={i} style={{ height: 10 }} />;

          if (isSectionHead) {
            return (
              <div key={i} style={{
                fontSize: '0.62rem',
                fontWeight: 700,
                fontFamily: 'Montserrat, sans-serif',
                color: '#A8185E',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginTop: 16,
                marginBottom: 6,
                paddingBottom: 4,
                borderBottom: '1px solid #f0e0e8',
              }}>
                {line}
              </div>
            );
          }

          if (isMetaLine) {
            const colonIdx = line.indexOf(':');
            const fieldLabel = colonIdx > -1 ? line.slice(0, colonIdx) : '';
            const fieldValue = colonIdx > -1 ? line.slice(colonIdx + 1) : line;
            return (
              <div key={i} style={{
                fontSize: '0.74rem',
                fontFamily: 'Montserrat, sans-serif',
                lineHeight: 1.7,
                color: '#000',
                marginBottom: 2,
              }}>
                {fieldLabel && (
                  <span style={{ color: '#555', fontWeight: 600 }}>{fieldLabel}:</span>
                )}
                <MemoParagraph text={fieldValue} highlight={highlightPhrase} />
              </div>
            );
          }

          return (
            <p key={i} style={{
              fontSize: '0.76rem',
              fontFamily: 'Montserrat, sans-serif',
              lineHeight: 1.75,
              color: '#000',
              margin: '0 0 6px',
            }}>
              <MemoParagraph text={line} highlight={highlightPhrase} />
            </p>
          );
        })}
      </div>

      {/* Footer note */}
      <div style={{
        padding: '10px 20px',
        borderTop: '1px solid #eee',
        background: '#fff',
        fontSize: '0.62rem',
        fontFamily: 'Montserrat, sans-serif',
        color: '#bbb',
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
      }}>
        Anonymized demo content
      </div>
    </div>
  );
};

export default MemoPanel;
