import { useCallback, useEffect, useState } from "react";
import LunaSidebar from "@/components/LunaSidebar";
import CoverSlide from "@/components/slides/CoverSlide";
import EraMapSlide from "@/components/slides/EraMapSlide";
import MismatchSlide from "@/components/slides/MismatchSlide";
import BreaksSlide from "@/components/slides/BreaksSlide";
import TruthMonolithSlide from "@/components/slides/TruthMonolithSlide";
import EntityResolutionSlide from "@/components/slides/EntityResolutionSlide";
import TruthSlide from "@/components/slides/TruthSlide";
import KGInfrastructureSlide from "@/components/slides/KGInfrastructureSlide";
import GovernanceSlide from "@/components/slides/GovernanceSlide";
import StepsThoughtsSlide from "@/components/slides/StepsThoughtsSlide";
import StackSlide from "@/components/slides/StackSlide";
import BuildBuySlide from "@/components/slides/BuildBuySlide";
import ClosingSlide from "@/components/slides/ClosingSlide";
import ProductionAnchorSlide from "@/components/slides/ProductionAnchorSlide";
import ArchitectureSlide from "@/components/slides/ArchitectureSlide";
import PractitionerOverlay from "@/components/PractitionerOverlay";
import ImageLightbox from "@/components/ImageLightbox";
import { allSlideIds, slideLabel } from "@/lib/slides";
import { trackEvent } from "@/lib/analytics";

export type PractitionerSection = 'brief' | 'demo' | 'cbre-brief' | 'cbre-demo';

const Index = () => {
  const [activeSlide, setActiveSlide] = useState("s1");
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [practitionerOpen, setPractitionerOpen] = useState(false);
  const [practitionerSection, setPractitionerSection] = useState<PractitionerSection>('brief');
  const [architectureOpen, setArchitectureOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
    setProgress(pct);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Track which slides a visitor actually sees, once per session per slide.
  // Threshold is 0.4 visible AND must remain visible for 1.5s before firing.
  useEffect(() => {
    const seen = new Set<string>();
    const dwellTimers = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const id = e.target.id;
          if (e.isIntersecting) {
            setActiveSlide(id);

            if (!seen.has(id)) {
              const timer = window.setTimeout(() => {
                if (!seen.has(id)) {
                  seen.add(id);
                  trackEvent("luna_slide_viewed", {
                    slide_id: id,
                    slide_label: slideLabel(id),
                  });
                }
                dwellTimers.delete(id);
              }, 1500);
              dwellTimers.set(id, timer);
            }
          } else {
            const t = dwellTimers.get(id);
            if (t !== undefined) {
              clearTimeout(t);
              dwellTimers.delete(id);
            }
          }
        });
      },
      { threshold: 0.4 }
    );
    allSlideIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => {
      observer.disconnect();
      dwellTimers.forEach((t) => clearTimeout(t));
    };
  }, [architectureOpen]);

  const handleNavigate = (id: string) => {
    trackEvent("luna_nav_clicked", { slide_id: id, slide_label: slideLabel(id) });
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleArchitectureToggle = (source: "sidebar" | "slide") => {
    setArchitectureOpen((prev) => {
      const next = !prev;
      trackEvent(next ? "luna_architecture_opened" : "luna_architecture_closed", { source });
      if (next) {
        // Wait for mount, then scroll into view.
        requestAnimationFrame(() => {
          setTimeout(() => {
            document.getElementById("s15")?.scrollIntoView({ behavior: "smooth" });
          }, 30);
        });
      }
      return next;
    });
  };

  const handleArchitectureOpenFromSidebar = () => {
    if (!architectureOpen) {
      handleArchitectureToggle("sidebar");
    } else {
      document.getElementById("s15")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePractitionerOpen = (section: PractitionerSection = 'brief') => {
    trackEvent("luna_practitioner_opened", { section });
    setMenuOpen(false);
    setPractitionerSection(section);
    setPractitionerOpen(true);
  };

  const handleLightbox = (src: string | null) => {
    if (src) trackEvent("luna_lightbox_opened", { image: src });
    setLightboxSrc(src);
  };

  return (
    <>
      <div className="luna-progress-bar">
        <div className="luna-progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <div className="luna-mobile-bar">
        <button className="luna-mobile-brand" onClick={scrollToTop} aria-label="Back to top">
          Cherre
        </button>
        <button className={`luna-menu-btn ${menuOpen ? "is-open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
      <LunaSidebar
        activeSlide={activeSlide}
        progress={progress}
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={handleNavigate}
        onPractitionerOpen={handlePractitionerOpen}
        practitionerOpen={practitionerOpen}
        practitionerSection={practitionerSection}
        architectureOpen={architectureOpen}
        onArchitectureToggle={() => handleArchitectureToggle("sidebar")}
        onArchitectureNavigate={handleArchitectureOpenFromSidebar}
      />
      <main className="luna-main">
        <CoverSlide />
        <EraMapSlide />
        <MismatchSlide />
        <BreaksSlide />
        <StackSlide />
        <TruthMonolithSlide />
        <EntityResolutionSlide onImageClick={handleLightbox} />
        <TruthSlide />
        <KGInfrastructureSlide onImageClick={handleLightbox} />
        <GovernanceSlide />
        <StepsThoughtsSlide />
        <BuildBuySlide onImageClick={handleLightbox} />
        <ClosingSlide />
        <ProductionAnchorSlide
          architectureOpen={architectureOpen}
          onArchitectureToggle={() => handleArchitectureToggle("slide")}
        />
        {architectureOpen && <ArchitectureSlide />}
      </main>
      <PractitionerOverlay
        isOpen={practitionerOpen}
        section={practitionerSection}
        onSectionChange={setPractitionerSection}
        onClose={() => setPractitionerOpen(false)}
      />
      {practitionerOpen && (
        <div style={{
          position: 'fixed', top: 16, right: 20, zIndex: 10010,
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          {/* Lock / logout button */}
          <button
            onClick={() => {
              sessionStorage.removeItem('cherre_demo_unlocked');
              sessionStorage.removeItem('cherre_cbre_unlocked');
              setPractitionerOpen(false);
            }}
            aria-label="Lock and sign out"
            title="Lock — clears session"
            style={{
              width: 40, height: 40, borderRadius: '50%',
              border: '1px solid #e0e0e0', background: '#fff',
              color: '#A8185E', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            }}
          >
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
              <rect x="1" y="8" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.4" />
              <path d="M4 8V6a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              <circle cx="8" cy="12.5" r="1.5" fill="currentColor" />
            </svg>
          </button>
          {/* Close button */}
          <button
            onClick={() => setPractitionerOpen(false)}
            aria-label="Close practitioner overlay"
            style={{
              width: 40, height: 40, borderRadius: '50%',
              border: '1px solid #e0e0e0', background: '#fff',
              color: '#000', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      )}
      <ImageLightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </>
  );
};

export default Index;
