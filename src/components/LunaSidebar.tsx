import { useEffect, useState } from "react";

interface NavItem {
  id: string;
  num: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: "s1", num: "i", label: "The Interaction Layer Has Moved" },
  { id: "s2", num: "ii", label: "Era Map" },
  { id: "s3", num: "iii", label: "The Mismatch" },
  { id: "s4", num: "iv", label: "Four Structural Breaks" },
  { id: "s5", num: "v", label: "Truth Is Not Monolithic" },
  { id: "s6", num: "vi", label: "Steps vs. Thoughts" },
  { id: "s7", num: "vii", label: "The Stack & The Empty Layer" },
  { id: "s8", num: "viii", label: "The Question" },
];

interface LunaSidebarProps {
  activeSlide: string;
  progress: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
}

const LunaSidebar = ({ activeSlide, progress, isOpen, onClose, onNavigate }: LunaSidebarProps) => {
  const handleNav = (id: string) => {
    onNavigate(id);
    if (window.innerWidth <= 900) onClose();
  };

  return (
    <>
      <div className={`luna-overlay ${isOpen ? "open" : ""}`} onClick={onClose} />
      <nav className={`luna-sidebar ${isOpen ? "open" : ""}`}>
        <div className="luna-sidebar-logo">
          <div className="luna-logo-mark">L</div>
          <div className="luna-logo-text">
            <strong>Luna</strong>
            <br />
            The Intelligence Architecture
          </div>
        </div>

        <span className="luna-nav-label">Presentation</span>

        <div className="luna-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`luna-nav-item ${activeSlide === item.id ? "active" : ""}`}
              onClick={() => handleNav(item.id)}
            >
              <span className="luna-nav-num">{item.num}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <div className="luna-sidebar-progress">
          <div className="luna-sidebar-progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <div className="luna-sidebar-footer">
          <span className="luna-sidebar-tag">
            Real Estate · Capital Markets
            <br />
            <span>Cherre</span> · Luna · 2026
          </span>
        </div>
      </nav>
    </>
  );
};

export default LunaSidebar;
