import { menubarPT } from '@/primereact-tailwindcss/menubar.pt';
import { Menubar, MenubarProps } from 'primereact/menubar';
import React, { ReactNode } from 'react'

interface XMenuBar extends MenubarProps {
    children?: ReactNode;
}
const XMenuBar: React.FC<XMenuBar> = ({ children, ...props }) => {
    return (
        <Menubar {...props} pt={{ ...menubarPT }}>
            {children}
        </Menubar>
    )
}
export default XMenuBar;
