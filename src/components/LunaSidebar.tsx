import { useState, useEffect } from "react";
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
  { id: "s13", num: "xiii",  label: "The Next Architectural Imperative" },
  { id: "s14", num: "xiv",   label: "The Foundation Is Already Built" },
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
  const [accordionOpen, setAccordionOpen] = useState(false);

  // Keep accordion open while the overlay is active.
  useEffect(() => {
    if (practitionerOpen) setAccordionOpen(true);
  }, [practitionerOpen]);

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

        {/* Restricted — accordion */}
        <div style={{ marginTop: 8 }}>
          <span className="luna-nav-label">Restricted</span>
          <button
            className="luna-restricted-trigger"
            onClick={() => setAccordionOpen((o) => !o)}
            aria-expanded={accordionOpen}
          >
            <span className="luna-restricted-trigger-inner">
              <svg width="11" height="12" viewBox="0 0 20 22" fill="none" style={{ flexShrink: 0, opacity: 0.5 }}>
                <rect x="2" y="10" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M6 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span>Access Required</span>
            </span>
            <svg
              className={`luna-restricted-chevron ${accordionOpen ? 'is-open' : ''}`}
              width="10" height="10" viewBox="0 0 10 10" fill="none"
            >
              <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className={`luna-subnav ${accordionOpen ? 'is-open' : ''}`} style={{ marginLeft: 24, marginRight: 0 }}>
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
