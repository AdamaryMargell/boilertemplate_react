import { menubarPT } from '@/primereact-tailwindcss/menubar.pt';
import { Menubar, MenubarProps } from 'primereact/menubar';
import React, { ReactNode } from 'react'

interface XMenuBarProps extends MenubarProps {
    children?: ReactNode;
}
const XMenuBar = ({ children, ...props }: XMenuBarProps) => {
    return (
        <Menubar {...props} pt={{ ...menubarPT }}>
            {children}
        </Menubar>
    )
}
export default XMenuBar;
