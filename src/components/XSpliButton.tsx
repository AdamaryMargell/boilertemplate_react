import { splitButtonPT } from '@/primereact-tailwindcss/splitButton.pt';
import { SplitButton, SplitButtonProps } from 'primereact/splitbutton';
import React, { ReactNode } from 'react'

interface XSplitButtonProps extends SplitButtonProps {
    children?: ReactNode;
}
const XSplitButton = ({ children, ...props }: XSplitButtonProps) => {
    return (
        <SplitButton {...props} pt={{ ...splitButtonPT }}>
            {children}
        </SplitButton>
    )
}
export default XSplitButton;
