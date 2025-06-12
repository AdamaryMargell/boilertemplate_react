import { panelMenuPT } from '@/primereact-tailwindcss/panelMenu.pt';
import { PanelMenu, PanelMenuProps } from 'primereact/panelmenu';
import React, { ReactNode } from 'react'

interface XPanelMenuProps extends PanelMenuProps {
    children?: ReactNode;
}
const XPanelMenu = ({ children, ...props }: XPanelMenuProps) => {
    return (
        <PanelMenu {...props} pt={{ ...panelMenuPT }}>
            {children}
        </PanelMenu>
    )
}

export default XPanelMenu