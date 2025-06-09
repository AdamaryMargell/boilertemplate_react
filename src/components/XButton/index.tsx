import { Button, ButtonProps } from 'primereact/button'
import { buttonPT } from "../../primereact-tailwindcss/button.pt";
import React, { ReactNode } from 'react'

interface XButtonsProps extends ButtonProps {
    children?: ReactNode;
}
const XButton: React.FC<XButtonsProps> = ({ children, ...props }) => {
    return (
        <Button {...props} pt={{ ...buttonPT }}>
            {children}
        </Button>
    )
}
export default XButton;