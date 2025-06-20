import { inputIconPT } from '@/primereact-tailwindcss/iconField.pt';
import { InputIcon, InputIconProps } from 'primereact/inputicon';
import React, { ReactNode } from 'react'

interface XInputIconProps extends InputIconProps {
    children?: ReactNode;
}

const XInputIcon = ({ children, ...props }: XInputIconProps) => {
    return (
        <InputIcon {...props} pt={{ ...inputIconPT }}>{children}</InputIcon>
    )
}

export default XInputIcon