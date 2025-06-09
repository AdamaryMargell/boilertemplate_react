import { speedDialPT } from '@/primereact-tailwindcss/speedDial.pt';
import { SpeedDial, SpeedDialProps } from 'primereact/speeddial';
import React, { ReactNode } from 'react'

interface XSpeedialProps extends SpeedDialProps {
    children?: ReactNode;
}
const XSpeedDial: React.FC<XSpeedialProps> = ({ children, ...props }) => {
    return (
        <SpeedDial {...props} pt={{ ...speedDialPT }}>
            {children}
        </SpeedDial>
    )
}
export default XSpeedDial;
