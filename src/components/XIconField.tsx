import { iconFieldPT } from '@/primereact-tailwindcss/iconField.pt';
import { IconField, IconFieldProps } from 'primereact/iconfield'
import React, { ReactNode } from 'react'

interface XIconFieldProps extends IconFieldProps {
    children?: ReactNode;
}

const XIconField = ({ children, ...props }: XIconFieldProps) => {
    return (
        <IconField {...props} pt={{ ...iconFieldPT }}>
            {children}
        </IconField>
    )
}

export default XIconField