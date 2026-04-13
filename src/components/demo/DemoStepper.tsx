interface Step {
  num: number;
  label: string;
  sublabel: string;
}

const STEPS: Step[] = [
  { num: 1, label: 'Text-Only Extraction', sublabel: 'First pass' },
  { num: 2, label: 'Why It Breaks', sublabel: 'Context gap' },
  { num: 3, label: 'Luna', sublabel: 'Entity resolution' },
  { num: 4, label: 'Meridian', sublabel: 'Knowledge graph' },
  { num: 5, label: 'Grounded Output', sublabel: 'Final result' },
];

interface DemoStepperProps {
  activeStep: number;
  onStepClick: (step: number) => void;
}

const DemoStepper = ({ activeStep, onStepClick }: DemoStepperProps) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'stretch',
      borderBottom: '2px solid #f0f0f0',
      background: '#fff',
      overflowX: 'auto',
    }}>
      {STEPS.map((step, i) => {
        const isActive = activeStep === step.num;
        const isDone = activeStep > step.num;
        return (
          <button
            key={step.num}
            onClick={() => onStepClick(step.num)}
            style={{
              flex: '1 1 0',
              minWidth: 120,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '14px 20px',
              background: isActive ? '#fff' : 'transparent',
              border: 'none',
              borderBottom: isActive ? '2px solid #A8185E' : '2px solid transparent',
              borderRight: i < STEPS.length - 1 ? '1px solid #f0f0f0' : 'none',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              position: 'relative',
              marginBottom: -2,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 20,
                height: 20,
                borderRadius: '50%',
                fontSize: '0.65rem',
                fontWeight: 700,
                fontFamily: 'Montserrat, sans-serif',
                background: isActive ? '#A8185E' : isDone ? '#23A98E' : '#e8e8e8',
                color: isActive || isDone ? '#fff' : '#999',
                flexShrink: 0,
              }}>
                {isDone ? (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : step.num}
              </span>
              <span style={{
                fontSize: '0.73rem',
                fontWeight: 700,
                fontFamily: 'Montserrat, sans-serif',
                color: isActive ? '#A8185E' : isDone ? '#000' : '#999',
                letterSpacing: '0.01em',
                whiteSpace: 'nowrap',
              }}>
                {step.label}
              </span>
            </div>
            <span style={{
              fontSize: '0.63rem',
              fontFamily: 'Montserrat, sans-serif',
              color: '#aaa',
              paddingLeft: 28,
              whiteSpace: 'nowrap',
            }}>
              {step.sublabel}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default DemoStepper;
