import { cardPT } from '@/primereact-tailwindcss/card.pt';
import { Card, CardProps } from 'primereact/card';
import React, { ReactNode } from 'react'

interface XCardProps extends CardProps {
    children?: ReactNode;
}
const XCard: React.FC<XCardProps> = ({ children, ...props }) => {
    return (
        <Card {...props} pt={{ ...cardPT }}>
            {children}
        </Card>
    )
}
export default XCard;