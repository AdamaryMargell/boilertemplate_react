import React, { ReactNode } from 'react';
import { ButtonGroup } from 'primereact/buttongroup';

interface XButtonGroupProps {
    children?: ReactNode;
    [key: string]: any; // Para permitir otras props
}

const XButtonGroup = ({ children, ...props }: XButtonGroupProps) => {
    return (
        <ButtonGroup {...props}>
            {children}
        </ButtonGroup>
    );
};

export default XButtonGroup;