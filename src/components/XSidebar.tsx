import { Sidebar, SidebarProps } from 'primereact/sidebar';
import React, { ReactNode } from 'react'

interface XSidebarProps extends SidebarProps {
    children?: ReactNode;
}
const XSidebar = ({ children, ...props }: XSidebarProps) => {
    return (
        <Sidebar {...props}>
            {children}
        </Sidebar>
    )
}
export default XSidebar;
