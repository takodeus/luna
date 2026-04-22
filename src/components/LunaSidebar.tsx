import type { PractitionerSection } from "@/pages/Index";

interface NavItem { id: string; num: string; label: string; }

const navItems: NavItem[] = [
  { id: "s1",  num: "i",     label: "The Semantic Infrastructure" },
  { id: "s2",  num: "ii",    label: "Three Eras. Built to Act." },
  { id: "s3",  num: "iii",   label: "What AI Agents Require" },
  { id: "s4",     num: "iv",    label: "Four Structural Gaps" },
  { id: "s5",  num: "v",     label: "The Empty Layer" },
  { id: "s6",  num: "vi",    label: "Three Kinds of Truths" },
  { id: "s7",  num: "vii",   label: "The First Hard Problem" },
  { id: "s8",  num: "viii",  label: "Four Questions, Four Layers" },
  { id: "s9",  num: "ix",    label: "Infrastructure, Not a Feature" },
  { id: "s10", num: "x",     label: "Governance Is the Architecture" },
  { id: "s11", num: "xi",    label: "Automate Steps. Protect Judgment." },
  { id: "s12", num: "xii",   label: "What Fills the Layer" },
  { id: "s13",    num: "xiii",  label: "The Next Architectural Imperative" },
];

const caseItems: { id: PractitionerSection; label: string }[] = [
  { id: 'brief', label: 'The Brief' },
  { id: 'demo',  label: 'The Demo' },
  { id: 'stack', label: 'The Stack' },
];

interface LunaSidebarProps {
  activeSlide: string;
  progress: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
  onPractitionerOpen: (section?: PractitionerSection) => void;
  practitionerOpen: boolean;
  practitionerSection: PractitionerSection;
}

const LunaSidebar = ({
  activeSlide,
  progress,
  isOpen,
  onClose,
  onNavigate,
  onPractitionerOpen,
  practitionerOpen,
  practitionerSection,
}: LunaSidebarProps) => {
  const handleNav = (id: string) => {
    onNavigate(id);
    if (window.innerWidth <= 900) onClose();
  };

  return (
    <>
      <div className={`luna-overlay ${isOpen ? "open" : ""}`} onClick={onClose} />
      <nav className={`luna-sidebar ${isOpen ? "open" : ""}`}>
        <button
          className="luna-sidebar-logo"
          onClick={() => handleNav("s1")}
          style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", width: "100%" }}
          title="Back to top"
        >
          <img src="/luna/cherre-icon.jpg" alt="Cherre" style={{ width: 36, height: 36, objectFit: "contain", borderRadius: 4, flexShrink: 0 }} />
          <div className="luna-logo-text">
            <strong>Cherre</strong><br />The Semantic Infrastructure
          </div>
        </button>

        <span className="luna-nav-label">Contents</span>
        <div className="luna-nav">
          {navItems.map((item) => (
            <button key={item.id} className={`luna-nav-item ${activeSlide === item.id ? "active" : ""}`} onClick={() => handleNav(item.id)}>
              <span className="luna-nav-num">{item.num}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Case study — locked section with sub-navigation */}
        <div style={{ padding: '12px 16px 0', marginTop: 8 }}>
          <span className="luna-nav-label" style={{ padding: 0, marginBottom: 8, display: 'block' }}>Restricted</span>
          <button
            className="luna-nav-item luna-nav-locked"
            onClick={() => { onPractitionerOpen('brief'); if (window.innerWidth <= 900) onClose(); }}
            style={{ width: '100%' }}
          >
            <span className="luna-nav-num" style={{ opacity: 0.6 }}>
              <svg width="12" height="13" viewBox="0 0 20 22" fill="none" style={{ display: 'block' }}>
                <rect x="2" y="10" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M6 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
            <span>Case study</span>
          </button>

          <div className="luna-subnav">
            {caseItems.map((item, i) => {
              const active = practitionerOpen && practitionerSection === item.id;
              return (
                <button
                  key={item.id}
                  className={`luna-nav-item luna-subnav-item ${active ? 'active' : ''}`}
                  onClick={() => { onPractitionerOpen(item.id); if (window.innerWidth <= 900) onClose(); }}
                >
                  <span className="luna-nav-num">{String(i + 1).padStart(2, '0')}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="luna-sidebar-progress">
          <div className="luna-sidebar-progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="luna-sidebar-footer">
          <span className="luna-sidebar-tag">Cherre Inc Copyright 2026</span>
        </div>
      </nav>
    </>
  );
};

export default LunaSidebar;
