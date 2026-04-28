import { useState, useEffect, useRef } from 'react';
import PractitionerBriefSlide from '@/components/slides/PractitionerBriefSlide';
import ICMemoSlide from '@/components/slides/ICMemoSlide';
import CBREPractitionerBriefSlide from '@/components/cbre/CBREPractitionerBriefSlide';
import CBREDemoSlide from '@/components/cbre/CBREDemoSlide';
import { sha256Hex } from '@/lib/hash';
import type { PractitionerSection } from '@/pages/Index';

// SHA-256 hashes — plaintext never ships in the bundle.
const HASH_IC_MEMO = '19dec44a826a23bb1363344cb397098775eee677350d1f4e638ca11e9a699a90';
const HASH_CBRE    = 'a0d8f544220e27b1fb3d3ee3ee5df1a61bb09a8dc7880f31a89bfcac3a32d99b';
const SESSION_KEY      = 'cherre_demo_unlocked';
const SESSION_KEY_CBRE = 'cherre_cbre_unlocked';

type UseCase = 'icmemo' | 'cbre';

interface PractitionerOverlayProps {
  isOpen: boolean;
  section: PractitionerSection;
  onSectionChange: (section: PractitionerSection) => void;
  onClose: () => void;
}

const TABS_IC_MEMO: { id: PractitionerSection; label: string }[] = [
  { id: 'brief', label: 'Use Cases' },
  { id: 'demo',  label: 'Demos' },
];
const TABS_CBRE: { id: PractitionerSection; label: string }[] = [
  { id: 'cbre-brief', label: 'Use Cases' },
  { id: 'cbre-demo',  label: 'Demos' },
];

const PractitionerOverlay = ({ isOpen, section, onSectionChange, onClose }: PractitionerOverlayProps) => {
  const [unlocked, setUnlocked] = useState(false);
  const [useCase, setUseCase] = useState<UseCase>('icmemo');
  // activeTab is owned locally — no longer depends on parent prop for rendering
  const [activeTab, setActiveTab] = useState<PractitionerSection>('brief');
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY_CBRE) === '1') {
      setUseCase('cbre');
      setActiveTab('cbre-brief');
      setUnlocked(true);
    } else if (sessionStorage.getItem(SESSION_KEY) === '1') {
      setUseCase('icmemo');
      setActiveTab('brief');
      setUnlocked(true);
    }
  }, []);

  // Sync parent-driven section changes (e.g. sidebar nav deep-links)
  useEffect(() => {
    if (section && unlocked) setActiveTab(section);
  }, [section]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (!unlocked) setTimeout(() => inputRef.current?.focus(), 300);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen, unlocked]);

  useEffect(() => {
    if (isOpen && unlocked && overlayRef.current) {
      overlayRef.current.scrollTop = 0;
    }
  }, [isOpen, unlocked, activeTab]);

  const handleTabChange = (tab: PractitionerSection) => {
    setActiveTab(tab);
    onSectionChange(tab); // keep parent in sync for analytics
  };

  const handleSubmit = async () => {
    const digest = await sha256Hex(value.trim().toLowerCase());
    if (digest === HASH_IC_MEMO) {
      sessionStorage.setItem(SESSION_KEY, '1');
      setUseCase('icmemo');
      setActiveTab('brief');
      setUnlocked(true);
    } else if (digest === HASH_CBRE) {
      sessionStorage.setItem(SESSION_KEY_CBRE, '1');
      setUseCase('cbre');
      setActiveTab('cbre-brief');  // local — no race condition
      setUnlocked(true);
    } else {
      setError(true);
      setValue('');
      setTimeout(() => setError(false), 1800);
    }
  };

  const handleLock = () => {
    sessionStorage.removeItem(SESSION_KEY);
    sessionStorage.removeItem(SESSION_KEY_CBRE);
    setUnlocked(false);
    setUseCase('icmemo');
    setActiveTab('brief');
    setValue('');
    onClose();
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
            {(useCase === 'cbre' ? TABS_CBRE : TABS_IC_MEMO).map((t) => {
              const active = t.id === activeTab;
              return (
                <button
                  key={t.id}
                  className={`case-tab ${active ? 'is-active' : ''}`}
                  onClick={() => handleTabChange(t.id)}
                  aria-current={active ? 'page' : undefined}
                >
                  {t.label}
                </button>
              );
            })}

            {/* Lock button */}
            <button
              onClick={handleLock}
              aria-label="Lock session"
              title="Lock — requires password to re-enter"
              style={{
                marginLeft: 'auto',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '4px 12px',
                background: 'none',
                border: '1px solid #e0e0e0',
                borderRadius: 20,
                cursor: 'pointer',
                color: '#999',
                fontSize: '0.62rem',
                fontWeight: 700,
                fontFamily: 'Montserrat, sans-serif',
                letterSpacing: '0.04em',
                transition: 'color 0.15s ease, border-color 0.15s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#A8185E';
                e.currentTarget.style.borderColor = '#A8185E';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#999';
                e.currentTarget.style.borderColor = '#e0e0e0';
              }}
            >
              {/* Open padlock icon */}
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                <rect x="1" y="6" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
                <path d="M3.5 6V4a2.5 2.5 0 0 1 5 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                <circle cx="6" cy="9.5" r="1" fill="currentColor" />
              </svg>
              Lock
            </button>
          </nav>

          {useCase === 'icmemo' && (
            <>
              <div style={{ display: activeTab === 'brief' ? 'block' : 'none' }}>
                <PractitionerBriefSlide />
              </div>
              <div style={{ display: activeTab === 'demo' ? 'block' : 'none' }}>
                <ICMemoSlide />
              </div>
            </>
          )}
          {useCase === 'cbre' && (
            <>
              <div style={{ display: activeTab === 'cbre-brief' ? 'block' : 'none' }}>
                <CBREPractitionerBriefSlide />
              </div>
              <div style={{ display: activeTab === 'cbre-demo' ? 'block' : 'none' }}>
                <CBREDemoSlide />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default PractitionerOverlay;
