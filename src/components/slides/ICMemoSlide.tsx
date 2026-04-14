import { useState, useRef, useEffect } from 'react';
import DemoStepper from '@/components/demo/DemoStepper';
import MemoPanel from '@/components/demo/MemoPanel';
import TextOnlyStep from '@/components/demo/steps/TextOnlyStep';
import WhyBreaksStep from '@/components/demo/steps/WhyBreaksStep';
import LunaStep from '@/components/demo/steps/LunaStep';
import MeridianStep from '@/components/demo/steps/MeridianStep';
import GroundedOutputStep from '@/components/demo/steps/GroundedOutputStep';

const TOTAL_STEPS = 5;

const ICMemoSlide = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [highlightPhrase, setHighlightPhrase] = useState<string | null>(null);
  const topRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleStepClick = (step: number) => {
    setActiveStep(step);
    setHighlightPhrase(null);
    scrollToTop();
  };

  const handleNext = () => {
    const next = Math.min(activeStep + 1, TOTAL_STEPS);
    setActiveStep(next);
    setHighlightPhrase(null);
    scrollToTop();
  };

  const handleBack = () => {
    const prev = Math.max(activeStep - 1, 1);
    setActiveStep(prev);
    setHighlightPhrase(null);
    scrollToTop();
  };

  return (
    <section
      id="s-demo"
      style={{ background: '#fff', borderTop: '3px solid #A8185E' }}
    >
      {/* Anchor for scroll-to-top */}
      <div ref={topRef} />

      {/* Sticky header + stepper */}
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: '#fff',
        borderBottom: '2px solid #f0f0f0',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
      }}>
        {/* Header row */}
        <div style={{
          padding: '20px 36px 14px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#A8185E', flexShrink: 0 }} />
              <span style={{
                fontSize: '0.62rem', fontWeight: 700, fontFamily: 'Montserrat, sans-serif',
                color: '#A8185E', letterSpacing: '0.1em', textTransform: 'uppercase',
              }}>
                Live Demo
              </span>
            </div>
            <h2 style={{
              fontSize: '1.4rem', fontWeight: 700, fontFamily: 'Montserrat, sans-serif',
              color: '#000', margin: 0, lineHeight: 1.2,
            }}>
              IC Memo Extraction Workflow
            </h2>
          </div>
          <p style={{
            fontSize: '0.78rem', fontFamily: 'Montserrat, sans-serif',
            color: '#888', margin: 0, lineHeight: 1.5, maxWidth: 380, textAlign: 'right',
          }}>
            Walk through a real extraction failure and see exactly why grounding in entity resolution and a knowledge graph changes the result.
          </p>
        </div>

        {/* Stepper */}
        <DemoStepper activeStep={activeStep} onStepClick={handleStepClick} />
      </div>

      {/* Two-panel body */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '420px 1fr',
        minHeight: '70vh',
      }}>
        {/* Left: Memo panel — compact, scrollable within its column */}
        <div style={{
          borderRight: '1px solid #eee',
          overflowY: 'auto',
          maxHeight: '80vh',
          position: 'sticky',
          top: 120,
          alignSelf: 'start',
        }}>
          <MemoPanel highlightPhrase={highlightPhrase} />
        </div>

        {/* Right: Step content */}
        <div style={{ background: '#fff', padding: '0' }}>
          {activeStep === 1 && <TextOnlyStep onFieldFocus={setHighlightPhrase} onNext={handleNext} />}
          {activeStep === 2 && <WhyBreaksStep onNext={handleNext} onBack={handleBack} />}
          {activeStep === 3 && <LunaStep onFieldFocus={setHighlightPhrase} onNext={handleNext} onBack={handleBack} />}
          {activeStep === 4 && <MeridianStep onNext={handleNext} onBack={handleBack} />}
          {activeStep === 5 && <GroundedOutputStep onFieldFocus={setHighlightPhrase} onBack={handleBack} />}


        </div>
      </div>
    </section>
  );
};

export default ICMemoSlide;
