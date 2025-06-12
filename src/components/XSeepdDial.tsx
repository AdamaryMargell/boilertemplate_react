import { speedDialPT } from '@/primereact-tailwindcss/speedDial.pt';
import { SpeedDial, SpeedDialProps } from 'primereact/speeddial';
import React, { ReactNode } from 'react'

interface XSpeedialProps extends SpeedDialProps {
    children?: ReactNode;
}
const XSpeedDial = ({ children, ...props }: XSpeedialProps) => {
    return (
        <SpeedDial {...props} pt={{ ...speedDialPT }}>
            {children}
        </SpeedDial>
    )
}
export default XSpeedDial;
