import { useState, useEffect, useRef } from 'react';

const PASSWORD = 'groundedtruth';
const SESSION_KEY = 'cherre_demo_unlocked';

interface DemoGateProps {
  children: React.ReactNode;
}

const DemoGate = ({ children }: DemoGateProps) => {
  const [unlocked, setUnlocked] = useState(false);
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [revealing, setRevealing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === '1') {
      setUnlocked(true);
    }
  }, []);

  useEffect(() => {
    if (!unlocked) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [unlocked]);

  const handleSubmit = () => {
    if (value.trim().toLowerCase() === PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, '1');
      setRevealing(true);
      setTimeout(() => setUnlocked(true), 600);
    } else {
      setError(true);
      setValue('');
      setTimeout(() => setError(false), 1800);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSubmit();
  };

  if (unlocked) {
    return <>{children}</>;
  }

  return (
    <div style={{
      opacity: revealing ? 0 : 1,
      transition: 'opacity 0.6s ease',
    }}>
      <section
        id="s-practitioner"
        style={{
          minHeight: '100vh',
          background: '#fff',
          borderTop: '3px solid #A8185E',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 40px',
        }}
      >
        <div style={{
          maxWidth: 420,
          width: '100%',
          textAlign: 'center',
        }}>
          {/* Lock icon */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 28,
          }}>
            <div style={{
              width: 52,
              height: 52,
              borderRadius: '50%',
              background: '#FFF5F8',
              border: '1.5px solid #A8185E22',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
                <rect x="2" y="10" width="16" height="11" rx="2" stroke="#A8185E" strokeWidth="1.5" />
                <path d="M6 10V7a4 4 0 0 1 8 0v3" stroke="#A8185E" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="10" cy="15.5" r="1.5" fill="#A8185E" />
              </svg>
            </div>
          </div>

          {/* Label */}
          <div style={{
            fontSize: '0.6rem',
            fontWeight: 700,
            fontFamily: 'Montserrat, sans-serif',
            color: '#A8185E',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: 10,
          }}>
            Restricted
          </div>

          {/* Headline */}
          <h2 style={{
            fontSize: '1.4rem',
            fontWeight: 700,
            fontFamily: 'Montserrat, sans-serif',
            color: '#000',
            margin: '0 0 10px',
            lineHeight: 1.25,
          }}>
            How we built this.
          </h2>
          <p style={{
            fontSize: '0.78rem',
            fontFamily: 'Montserrat, sans-serif',
            color: '#888',
            margin: '0 0 32px',
            lineHeight: 1.6,
          }}>
            This section contains the practitioner brief and live demo. Ask your Cherre contact for access.
          </p>

          {/* Input */}
          <div style={{ position: 'relative', marginBottom: 12 }}>
            <input
              ref={inputRef}
              type="password"
              value={value}
              onChange={(e) => { setValue(e.target.value); setError(false); }}
              onKeyDown={handleKeyDown}
              placeholder="Enter password"
              style={{
                width: '100%',
                padding: '12px 16px',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.82rem',
                border: `1.5px solid ${error ? '#A8185E' : '#e0e0e0'}`,
                borderRadius: 6,
                outline: 'none',
                color: '#000',
                background: error ? '#FFF5F8' : '#fff',
                transition: 'border-color 0.15s ease, background 0.15s ease',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* Error message */}
          <div style={{
            height: 20,
            marginBottom: 12,
          }}>
            {error && (
              <p style={{
                fontSize: '0.68rem',
                fontFamily: 'Montserrat, sans-serif',
                color: '#A8185E',
                margin: 0,
                fontWeight: 600,
              }}>
                Incorrect password. Try again.
              </p>
            )}
          </div>

          {/* Button */}
          <button
            onClick={handleSubmit}
            style={{
              width: '100%',
              padding: '12px',
              background: '#A8185E',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              fontSize: '0.76rem',
              fontWeight: 700,
              fontFamily: 'Montserrat, sans-serif',
              cursor: 'pointer',
              letterSpacing: '0.04em',
              transition: 'opacity 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.88')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Unlock
          </button>

          {/* Footer */}
          <p style={{
            marginTop: 28,
            fontSize: '0.6rem',
            fontFamily: 'Montserrat, sans-serif',
            color: '#ccc',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}>
            Cherre Confidential
          </p>
        </div>
      </section>
    </div>
  );
};

export default DemoGate;
