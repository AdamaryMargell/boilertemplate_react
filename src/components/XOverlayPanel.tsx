import { overlaypanelPT } from '@/primereact-tailwindcss/overlaypanel.pt';
import { OverlayPanel, OverlayPanelProps } from 'primereact/overlaypanel';
import React, { forwardRef, ReactNode } from 'react'

interface XOverlayPanelProps extends OverlayPanelProps {
    children?: ReactNode;
}
const XOverlayPanel = forwardRef<OverlayPanel, XOverlayPanelProps>(({
    children,
    ...props
}, ref) => {
    return (
        <OverlayPanel ref={ref}  {...props} pt={{ ...overlaypanelPT }}>
            {children}
        </OverlayPanel>
    )
});

XOverlayPanel.displayName = 'XOverlayPanel';

export default XOverlayPanel;
