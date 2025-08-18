import { Badge, BadgeProps } from 'primereact/badge';
import React, { ReactNode } from 'react'
import '../styles/badge.css';

interface XBadgeProps extends BadgeProps {
    children?: ReactNode;
}
const XBadge = ({ children, ...props }: XBadgeProps) => {
    return (
        <Badge {...props}>
            {children}
        </Badge>
    )
}
export default XBadge;