import { Ripple, RippleProps } from 'primereact/ripple';
import React, { ReactNode } from 'react'

interface XRippleProps extends RippleProps {
    children?: ReactNode;
}
const XRipple = ({ children, ...props }: XRippleProps) => {
    return (
        <Ripple {...props}>
            {children}
        </Ripple>
    )
}

export default XRipple