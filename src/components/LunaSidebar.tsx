import { useState, useEffect } from "react";
import type { PractitionerSection } from "@/pages/Index";
import { slides as navItems, slideChildren } from "@/lib/slides";

const caseItems: { id: PractitionerSection; label: string }[] = [
  { id: 'brief', label: 'Use Cases' },
  { id: 'demo',  label: 'Demos' },
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
  architectureOpen: boolean;
  onArchitectureToggle: () => void;
  onArchitectureNavigate: () => void;
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
  architectureOpen,
  onArchitectureToggle,
  onArchitectureNavigate,
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
          {navItems.map((item) => {
            const children = slideChildren[item.id] ?? [];
            const hasExpandable = children.length > 0;
            return (
              <div key={item.id}>
                <div style={{ display: "flex", alignItems: "stretch" }}>
                  <button
                    className={`luna-nav-item ${activeSlide === item.id ? "active" : ""}`}
                    onClick={() => handleNav(item.id)}
                    style={{ flex: 1 }}
                  >
                    <span className="luna-nav-num">{item.num}</span>
                    <span>{item.label}</span>
                  </button>
                  {hasExpandable && (
                    <button
                      onClick={(e) => { e.stopPropagation(); onArchitectureToggle(); }}
                      aria-expanded={architectureOpen}
                      aria-label={architectureOpen ? "Collapse Platform Architecture" : "Expand Platform Architecture"}
                      style={{
                        appearance: "none",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "0 0.6rem",
                        display: "flex",
                        alignItems: "center",
                        color: "inherit",
                      }}
                    >
                      <svg
                        className={`luna-restricted-chevron ${architectureOpen ? 'is-open' : ''}`}
                        width="10" height="10" viewBox="0 0 10 10" fill="none"
                      >
                        <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  )}
                </div>
                {hasExpandable && architectureOpen && children.map((child) => (
                  <button
                    key={child.id}
                    className={`luna-nav-item luna-subnav-item ${activeSlide === child.id ? "active" : ""}`}
                    onClick={() => {
                      onArchitectureNavigate();
                      if (window.innerWidth <= 900) onClose();
                    }}
                    style={{ paddingLeft: "2.75rem", animation: "luna-fade-up 0.25s ease" }}
                  >
                    <span className="luna-nav-num" aria-hidden="true">↳</span>
                    <span>{child.label}</span>
                  </button>
                ))}
              </div>
            );
          })}
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
              <span>Cherre Only</span>
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
          <span className="luna-sidebar-tag">© Cherre · Analytics in use</span>
        </div>
      </nav>
    </>
  );
};

export default LunaSidebar;
