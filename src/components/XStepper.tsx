
// import React, { ReactNode, forwardRef } from 'react';
// import { Stepper, StepperProps } from 'primereact/stepper';
// import { stepperPT } from '@/primereact-tailwindcss/stepper.pt';

// interface XStepperProps extends StepperProps {
//   children: ReactNode;
// }

// const XStepper = forwardRef<any, XStepperProps>(({ children, ...props }, ref) => {
//   return (
//     <Stepper ref={ref} {...props} pt={{ ...stepperPT }} >
//       {children}
//     </Stepper>
//   );
// });

// XStepper.displayName = 'XStepper';

// export default XStepper;


'use client';
import React, { ReactNode, forwardRef, CSSProperties } from 'react';
import { Stepper, StepperProps } from 'primereact/stepper';
import { stepperPT } from '@/primereact-tailwindcss/stepper.pt';

interface XStepperProps extends StepperProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

const XStepper = forwardRef<any, XStepperProps>(({ children, ...props }, ref) => {
  return (
    <Stepper ref={ref} {...props} pt={{ ...stepperPT }}>
      {children}
    </Stepper>
  );
});

XStepper.displayName = 'XStepper';
export default XStepper;