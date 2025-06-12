import { treePT } from '@/primereact-tailwindcss/tree.pt';
import { Tree, TreeProps } from 'primereact/tree';
import React, { ReactNode } from 'react'

interface XTreeProps extends TreeProps {
    children?: ReactNode;
}

const XTree = ({ children, ...props }: XTreeProps) => {
    return (
        <Tree {...props} pt={{...treePT}} >
            {children}
        </Tree>
    )
}

export default XTree