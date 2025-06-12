import { badgePT } from '@/primereact-tailwindcss/bage.pt';
import { Badge, BadgeProps } from 'primereact/badge';
import React, { ReactNode } from 'react'

interface XBadgeProps extends BadgeProps {
    children?: ReactNode;
}
const XBadge = ({ children, ...props }: XBadgeProps) => {
    return (
        <Badge {...props} pt={{ ...badgePT }}>
            {children}
        </Badge>
    )
}
export default XBadge;