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
import PractitionerOverlay from "@/components/PractitionerOverlay";
import ImageLightbox from "@/components/ImageLightbox";

const slideIds = ["s1","s2","s3","s4","s5","s6","s7","s8","s9","s10","s11","s12","s13"];

const Index = () => {
  const [activeSlide, setActiveSlide] = useState("s1");
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [practitionerOpen, setPractitionerOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
    setProgress(pct);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSlide(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    slideIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePractitionerOpen = () => {
    setMenuOpen(false);
    setPractitionerOpen(true);
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
      />
      <main className="luna-main">
        <CoverSlide />
        <EraMapSlide />
        <MismatchSlide />
        <BreaksSlide />
        <StackSlide />
        <TruthMonolithSlide />
        <EntityResolutionSlide onImageClick={setLightboxSrc} />
        <TruthSlide />
        <KGInfrastructureSlide onImageClick={setLightboxSrc} />
        <GovernanceSlide />
        <StepsThoughtsSlide />
        <BuildBuySlide onImageClick={setLightboxSrc} />
        <ClosingSlide />
      </main>
      <PractitionerOverlay
        isOpen={practitionerOpen}
        onClose={() => setPractitionerOpen(false)}
      />
      <ImageLightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </>
  );
};

export default Index;
