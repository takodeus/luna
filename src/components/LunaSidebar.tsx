interface NavItem { id: string; num: string; label: string; }

const navItems: NavItem[] = [
  { id: "s1",  num: "i",     label: "The Data Infrastructure" },
  { id: "s2",  num: "ii",    label: "Era Three: Built to Act" },
  { id: "s3",  num: "iii",   label: "What Agents Require" },
  { id: "s4",  num: "iv",    label: "Four Structural Gaps" },
  { id: "s5",  num: "v",     label: "The Empty Layer" },
  { id: "s6",  num: "vi",    label: "Truth Is No Longer Monolithic" },
  { id: "s7",  num: "vii",   label: "The First Hard Problem Is Meaning" },
  { id: "s8",  num: "viii",  label: "Four Questions, Four Layers" },
  { id: "s9",  num: "ix",    label: "Infrastructure, Not a Feature" },
  { id: "s10", num: "x",     label: "Governance Is the Architecture" },
  { id: "s11", num: "xi",    label: "Automation Needs Judgment" },
  { id: "s12", num: "xii",   label: "What Fills the Layer" },
  { id: "s13", num: "xiii",  label: "The Record Stays. The Power Moves." },
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

        <button
          className="luna-sidebar-logo"
          onClick={() => handleNav("s1")}
          style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", width: "100%" }}
          title="Back to top"
        >
          <img
            src="/luna/cherre-icon.jpg"
            alt="Cherre — back to top"
            style={{ width: 36, height: 36, objectFit: "contain", borderRadius: 4, flexShrink: 0 }}
          />
          <div className="luna-logo-text">
            <strong>Cherre</strong>
            <br />
            The Data Infrastructure
          </div>
        </button>

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
            Cherre Inc Copyright 2026
          </span>
        </div>
      </nav>
    </>
  );
};

export default LunaSidebar;
