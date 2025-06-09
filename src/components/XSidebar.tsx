import { sidebarPT } from '@/primereact-tailwindcss/sidebar.pt';
import { Sidebar, SidebarProps } from 'primereact/sidebar';
import React, { ReactNode } from 'react'

interface XSidebarProps extends SidebarProps {
    children?: ReactNode;
}
const XSidebar: React.FC<XSidebarProps> = ({ children, ...props }) => {
    return (
        <Sidebar {...props} pt={{ ...sidebarPT }}>
            {children}
        </Sidebar>
    )
}
export default XSidebar;
