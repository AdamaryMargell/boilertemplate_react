import { DeferredContent, DeferredContentProps } from 'primereact/deferredcontent';
import React, { ReactNode } from 'react'

interface XDeferredContentProps extends DeferredContentProps {
    children?: ReactNode;
}
const XDeferredContent: React.FC<XDeferredContentProps> = ({ children, ...props }) => {
    return (
        <DeferredContent {...props}>
            {children}
        </DeferredContent>
    )
}
export default XDeferredContent;