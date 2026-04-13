import { useState } from 'react';
import DemoStepper from '@/components/demo/DemoStepper';
import MemoPanel from '@/components/demo/MemoPanel';
import TextOnlyStep from '@/components/demo/steps/TextOnlyStep';
import WhyBreaksStep from '@/components/demo/steps/WhyBreaksStep';
import LunaStep from '@/components/demo/steps/LunaStep';
import MeridianStep from '@/components/demo/steps/MeridianStep';
import GroundedOutputStep from '@/components/demo/steps/GroundedOutputStep';

const ICMemoSlide = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [highlightPhrase, setHighlightPhrase] = useState<string | null>(null);

  const handleStepClick = (step: number) => {
    setActiveStep(step);
    setHighlightPhrase(null);
  };

  const handleNext = () => {
    setActiveStep(s => Math.min(s + 1, 5));
    setHighlightPhrase(null);
  };

  return (
    <section
      id="s-demo"
      style={{
        minHeight: '100vh',
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        borderTop: '3px solid #A8185E',
      }}
    >
      {/* Section header */}
      <div style={{
        padding: '28px 36px 20px',
        borderBottom: '1px solid #f0f0f0',
        background: '#fff',
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 6,
            }}>
              <div style={{
                width: 5,
                height: 5,
                borderRadius: '50%',
                background: '#A8185E',
                flexShrink: 0,
              }} />
              <span style={{
                fontSize: '0.62rem',
                fontWeight: 700,
                fontFamily: 'Montserrat, sans-serif',
                color: '#A8185E',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>
                Live Demo
              </span>
            </div>
            <h2 style={{
              fontSize: '1.6rem',
              fontWeight: 700,
              fontFamily: 'Montserrat, sans-serif',
              color: '#000',
              margin: 0,
              lineHeight: 1.2,
            }}>
              IC Memo Extraction Workflow
            </h2>
          </div>
          <p style={{
            fontSize: '0.8rem',
            fontFamily: 'Montserrat, sans-serif',
            color: '#888',
            margin: 0,
            lineHeight: 1.5,
            maxWidth: 400,
            textAlign: 'right',
          }}>
            Walk through a real extraction failure and see exactly why grounding in entity resolution and a knowledge graph changes the result.
          </p>
        </div>
      </div>

      {/* Stepper */}
      <DemoStepper activeStep={activeStep} onStepClick={handleStepClick} />

      {/* Two-panel body */}
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '320px 1fr',
        minHeight: 0,
        overflow: 'hidden',
      }}>
        {/* Left: Memo panel — fixed */}
        <div style={{
          height: '100%',
          minHeight: 600,
          position: 'sticky',
          top: 0,
          overflowY: 'auto',
          borderRight: '1px solid #eee',
        }}>
          <MemoPanel highlightPhrase={highlightPhrase} />
        </div>

        {/* Right: Active step content */}
        <div style={{
          overflowY: 'auto',
          background: '#fff',
        }}>
          {activeStep === 1 && (
            <TextOnlyStep
              onFieldFocus={setHighlightPhrase}
              onNext={handleNext}
            />
          )}
          {activeStep === 2 && (
            <WhyBreaksStep onNext={handleNext} />
          )}
          {activeStep === 3 && (
            <LunaStep
              onFieldFocus={setHighlightPhrase}
              onNext={handleNext}
            />
          )}
          {activeStep === 4 && (
            <MeridianStep onNext={handleNext} />
          )}
          {activeStep === 5 && (
            <GroundedOutputStep onFieldFocus={setHighlightPhrase} />
          )}
        </div>
      </div>
    </section>
  );
};

export default ICMemoSlide;
