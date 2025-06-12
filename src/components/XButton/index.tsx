import React, { ReactNode, forwardRef } from 'react';
import { Button, ButtonProps } from 'primereact/button';
import { buttonPT } from "../../primereact-tailwindcss/button.pt";

interface XButtonsProps extends ButtonProps {
    children?: ReactNode;
}

const XButton = forwardRef<any, XButtonsProps>(({ children, ...props }, ref) => {
    return (
        <Button ref={ref} {...props} pt={{ ...buttonPT }}>
            {children}
        </Button>
    );
});

export default XButton;
