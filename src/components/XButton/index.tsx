import React, { ReactNode, forwardRef } from 'react';
import { Button, ButtonProps } from 'primereact/button';

interface XButtonsProps extends ButtonProps {
    children?: ReactNode;
}

const XButton = forwardRef<any, XButtonsProps>(({ children, ...props }, ref) => {
    return (
        <Button ref={ref} {...props}>
            {children}
        </Button>
    );
});

export default XButton;
