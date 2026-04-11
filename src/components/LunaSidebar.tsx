import cherreIcon from "@/assets/cherre_icon.png";

interface NavItem { id: string; num: string; label: string; }

const navItems: NavItem[] = [
  { id: "s1",  num: "i",     label: "The Intelligence Layer" },
  { id: "s2",  num: "ii",    label: "Three Eras" },
  { id: "s3",  num: "iii",   label: "What Agents Require" },
  { id: "s4",  num: "iv",    label: "Four Structural Gaps" },
  { id: "s5",  num: "v",     label: "Plural Truth" },
  { id: "s6",  num: "vi",    label: "Entity Resolution" },
  { id: "s7",  num: "vii",   label: "Knowledge Architecture" },
  { id: "s8",  num: "viii",  label: "Knowledge Graph" },
  { id: "s9",  num: "ix",    label: "Governance" },
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
          <img src={cherreIcon} alt="Cherre" className="luna-logo-mark" style={{ width: 32, height: 32, objectFit: 'contain' }} />
          <div className="luna-logo-text">
            <strong>Cherre</strong>
            <br />
            Data Infrastructure
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
            Cherre Inc. Copyright 2026
          </span>
        </div>
      </nav>
    </>
  );
};

export default LunaSidebar;
