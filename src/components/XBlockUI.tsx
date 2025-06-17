import { blockUIPT } from '@/primereact-tailwindcss/blockui.pt';
import { BlockUI, BlockUIProps } from 'primereact/blockui'
import React, { ReactNode } from 'react'

interface XBlockUIProps extends BlockUIProps {
    children?: ReactNode;
}

const XBlockUI = ({ children, ...props }: XBlockUIProps) => {
    return (
        <BlockUI {...props} pt={blockUIPT}>
            {children}
        </BlockUI>
    )
}

export default XBlockUI;