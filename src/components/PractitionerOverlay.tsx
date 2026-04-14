import { useState, useEffect, useRef } from 'react';
import PractitionerBriefSlide from '@/components/slides/PractitionerBriefSlide';
import ICMemoSlide from '@/components/slides/ICMemoSlide';

const PASSWORD = 'groundedtruth';
const SESSION_KEY = 'cherre_demo_unlocked';

interface PractitionerOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const PractitionerOverlay = ({ isOpen, onClose }: PractitionerOverlayProps) => {
  const [unlocked, setUnlocked] = useState(false);
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === '1') {
      setUnlocked(true);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (!unlocked) setTimeout(() => inputRef.current?.focus(), 300);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen, unlocked]);

  const handleSubmit = () => {
    if (value.trim().toLowerCase() === PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, '1');
      setUnlocked(true);
    } else {
      setError(true);
      setValue('');
      setTimeout(() => setError(false), 1800);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSubmit();
    if (e.key === 'Escape') onClose();
  };

  return (
    <div
      className={`practitioner-overlay ${isOpen ? 'is-open' : ''}`}
      aria-hidden={!isOpen}
    >
      {!unlocked ? (
        <div className="practitioner-gate">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
            <div style={{
              width: 52, height: 52, borderRadius: '50%',
              background: 'rgba(168, 24, 94, 0.08)',
              border: '1.5px solid rgba(168, 24, 94, 0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
                <rect x="2" y="10" width="16" height="11" rx="2" stroke="#A8185E" strokeWidth="1.5" />
                <path d="M6 10V7a4 4 0 0 1 8 0v3" stroke="#A8185E" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="10" cy="15.5" r="1.5" fill="#A8185E" />
              </svg>
            </div>
          </div>

          <div style={{
            fontSize: '0.6rem', fontWeight: 700, fontFamily: 'Montserrat, sans-serif',
            color: '#A8185E', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10,
          }}>
            Restricted
          </div>

          <h2 style={{
            fontSize: '1.4rem', fontWeight: 700, fontFamily: 'Montserrat, sans-serif',
            color: '#000', margin: '0 0 10px', lineHeight: 1.25,
          }}>
            How we built this.
          </h2>
          <p style={{
            fontSize: '0.78rem', fontFamily: 'Montserrat, sans-serif',
            color: '#888', margin: '0 0 32px', lineHeight: 1.6,
          }}>
            This section contains the practitioner brief and live demo. Ask your Cherre contact for access.
          </p>

          <div style={{ position: 'relative', marginBottom: 12 }}>
            <input
              ref={inputRef}
              type="password"
              value={value}
              onChange={(e) => { setValue(e.target.value); setError(false); }}
              onKeyDown={handleKeyDown}
              placeholder="Enter password"
              style={{
                width: '100%', padding: '12px 16px',
                fontFamily: 'Montserrat, sans-serif', fontSize: '0.82rem',
                border: `1.5px solid ${error ? '#A8185E' : '#e0e0e0'}`,
                borderRadius: 6, outline: 'none', color: '#000',
                background: error ? 'rgba(168,24,94,0.04)' : '#fff',
                transition: 'border-color 0.15s ease, background 0.15s ease',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div style={{ height: 20, marginBottom: 12 }}>
            {error && (
              <p style={{
                fontSize: '0.68rem', fontFamily: 'Montserrat, sans-serif',
                color: '#A8185E', margin: 0, fontWeight: 600,
              }}>
                Incorrect password. Try again.
              </p>
            )}
          </div>

          <button
            onClick={handleSubmit}
            style={{
              width: '100%', padding: '12px', background: '#A8185E', color: '#fff',
              border: 'none', borderRadius: 6, fontSize: '0.76rem', fontWeight: 700,
              fontFamily: 'Montserrat, sans-serif', cursor: 'pointer',
              letterSpacing: '0.04em', transition: 'opacity 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.88')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Unlock
          </button>

          <p style={{
            marginTop: 28, fontSize: '0.6rem', fontFamily: 'Montserrat, sans-serif',
            color: '#ccc', textTransform: 'uppercase', letterSpacing: '0.08em',
          }}>
            Cherre Confidential
          </p>
        </div>
      ) : (
        <div className="practitioner-content">
          <PractitionerBriefSlide />
          <ICMemoSlide />
        </div>
      )}
    </div>
  );
};

export default PractitionerOverlay;
