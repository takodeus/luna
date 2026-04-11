interface NavItem { id: string; num: string; label: string; }

const navItems: NavItem[] = [
  { id: "s1",  num: "i",     label: "The Data Infrastructure" },
  { id: "s2",  num: "ii",    label: "Era Three: Knowledge Graph" },
  { id: "s3",  num: "iii",   label: "What Agents Require" },
  { id: "s4",  num: "iv",    label: "Four Structural Gaps" },
  { id: "s5",  num: "v",     label: "Truth Is No Longer Monolithic" },
  { id: "s6",  num: "vi",    label: "The First Hard Problem" },
  { id: "s7",  num: "vii",   label: "Four Questions, Four Layers" },
  { id: "s8",  num: "viii",  label: "Infrastructure, Not a Feature" },
  { id: "s9",  num: "ix",    label: "Governance Is the Architecture" },
  { id: "s10", num: "x",     label: "Automation vs. Judgment" },
  { id: "s11", num: "xi",    label: "The Empty Layer" },
  { id: "s12", num: "xii",   label: "What Fills the Layer" },
  { id: "s13", num: "xiii",  label: "What Comes Next" },
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
            The Data Infrastructure
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
