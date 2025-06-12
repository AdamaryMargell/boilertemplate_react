import { accordionPT } from '@/primereact-tailwindcss/accordion.pt';
import { Accordion, AccordionProps, AccordionTab } from 'primereact/accordion';
import React, { ReactNode } from 'react';

interface XAccordionProps extends AccordionProps {
    children?: ReactNode;
}

const XAccordion = ({ children, ...props }: XAccordionProps) => {
    return (
        <Accordion {...props} pt={{ ...accordionPT }}>
            {children}
        </Accordion>
    );
};

export default XAccordion; 