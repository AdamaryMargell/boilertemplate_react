import React, { ReactNode } from 'react';
import { Stepper, StepperProps } from 'primereact/stepper';
import { StepperPanel, StepperPanelProps } from 'primereact/stepperpanel';

interface XStepperPanelProps extends StepperPanelProps {
  children: ReactNode;
}

const XStepperPanel = ({ children, ...props }: XStepperPanelProps) => {
  return (
    <StepperPanel {...props}>
      {children}
    </StepperPanel>
  )
}

export default XStepperPanel