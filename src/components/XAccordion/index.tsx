import { Accordion, AccordionProps, AccordionTab } from 'primereact/accordion';
import React, { ReactNode } from 'react';

interface XAccordionProps extends AccordionProps {
    children?: ReactNode;
}

const XAccordion: React.FC<XAccordionProps> = ({ children, ...props }) => {
    return (
        <Accordion {...props}>
            {children}
        </Accordion>
    );
};

export default XAccordion; 