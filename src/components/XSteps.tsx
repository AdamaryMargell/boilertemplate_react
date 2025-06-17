import { stepsPT } from '@/primereact-tailwindcss/steps.pt';
import { Steps, StepsProps } from 'primereact/steps';
import React, { ReactNode } from 'react'

interface XStepsProps extends StepsProps {
    children?: ReactNode;
}

const XSteps = ({ children, ...props }: XStepsProps) => {
    return (
        <Steps {...props} pt={{ ...stepsPT }} className="steps" unstyled>
            {children}
        </Steps>
    )
}

export default XSteps

// 'use client';
// import React from 'react';

// interface StepItem {
//     label: string;
// }

// interface XStepsProps {
//     steps: StepItem[];
//     currentStep: number;
//     className?: string;
// }

// export const XSteps = ({ steps, currentStep, className = '' }: XStepsProps) => {
//     return (
//         <div className={`steps-container ${className}`}>
//             <div className="steps-progress-bar">
//                 {steps.map((_, index) => (
//                     <div
//                         key={`progress-${index}`}
//                         className={`progress-step ${index < currentStep ? 'completed' : ''} ${index === currentStep ? 'active' : ''}`}
//                     />
//                 ))}
//             </div>
//             <div className="steps-content">
//                 {steps.map((step, index) => (
//                     <div
//                         key={index}
//                         className={`step ${index < currentStep ? 'completed' : ''} ${index === currentStep ? 'active' : ''}`}
//                     >
//                         <div className="step-number">{index + 1}</div>
//                         <div className="step-label">{step.label}</div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };