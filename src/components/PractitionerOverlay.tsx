import { useState, useEffect, useRef } from 'react';
import PractitionerBriefSlide from '@/components/slides/PractitionerBriefSlide';
import ICMemoSlide from '@/components/slides/ICMemoSlide';
import ArchitectureSlide from '@/components/slides/ArchitectureSlide';
import { sha256Hex } from '@/lib/hash';
import type { PractitionerSection } from '@/pages/Index';

// SHA-256 of the access code. Plaintext no longer ships in the bundle.
const PASSWORD_HASH = '19dec44a826a23bb1363344cb397098775eee677350d1f4e638ca11e9a699a90';
const SESSION_KEY = 'cherre_demo_unlocked';

interface PractitionerOverlayProps {
  isOpen: boolean;
  section: PractitionerSection;
  onSectionChange: (section: PractitionerSection) => void;
  onClose: () => void;
}

const TABS: { id: PractitionerSection; label: string }[] = [
  { id: 'brief', label: 'Practitioner brief' },
  { id: 'demo',  label: 'The demo' },
  { id: 'stack', label: 'The full stack' },
];

const PractitionerOverlay = ({ isOpen, section, onSectionChange, onClose }: PractitionerOverlayProps) => {
  const [unlocked, setUnlocked] = useState(false);
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

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

  // Reset scroll to top when switching sections or opening the overlay.
  useEffect(() => {
    if (isOpen && unlocked && overlayRef.current) {
      overlayRef.current.scrollTop = 0;
    }
  }, [isOpen, unlocked, section]);

  const handleSubmit = async () => {
    const digest = await sha256Hex(value.trim().toLowerCase());
    if (digest === PASSWORD_HASH) {
      sessionStorage.setItem(SESSION_KEY, '1');
      setUnlocked(true);
    } else {
      setError(true);
      setValue('');
      setTimeout(() => setError(false), 1800);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') void handleSubmit();
    if (e.key === 'Escape') onClose();
  };

  return (
    <div
      ref={overlayRef}
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
            Case study.
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
            onClick={() => void handleSubmit()}
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
          <nav className="case-tabs" aria-label="Case study sections">
            {TABS.map((t) => {
              const active = t.id === section;
              return (
                <button
                  key={t.id}
                  className={`case-tab ${active ? 'is-active' : ''}`}
                  onClick={() => onSectionChange(t.id)}
                  aria-current={active ? 'page' : undefined}
                >
                  {t.label}
                </button>
              );
            })}
          </nav>

          <div style={{ display: section === 'brief' ? 'block' : 'none' }}>
            <PractitionerBriefSlide />
          </div>
          <div style={{ display: section === 'demo' ? 'block' : 'none' }}>
            <ICMemoSlide />
          </div>
          <div style={{ display: section === 'stack' ? 'block' : 'none' }}>
            <ArchitectureSlide />
          </div>
        </div>
      )}
    </div>
  );
};

export default PractitionerOverlay;
