import { panelPT } from '@/primereact-tailwindcss/panel.pt';
import { Panel, PanelProps } from 'primereact/panel';
import React, { ReactNode } from 'react'

interface XPanelProps extends PanelProps {
    children?: ReactNode;
}
const XPanel: React.FC<XPanelProps> = ({ children, ...props }) => {
    return (
        <Panel {...props} pt={{ ...panelPT }}>
            {children}
        </Panel>
    )
}
export default XPanel;
