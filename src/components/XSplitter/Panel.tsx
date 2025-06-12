'use client';
import { splitterPanelPT } from '@/primereact-tailwindcss/splitter.pt';
import { SplitterPanel, SplitterPanelProps } from 'primereact/splitter';
import { classNames } from 'primereact/utils';
import React, { ReactNode } from 'react';

interface XSplitterPanelProps extends SplitterPanelProps {
    children?: ReactNode;
}

const XSplitterPanel = ({
    children,
    ...props
}: XSplitterPanelProps) => {
    return (
        <SplitterPanel
            {...props}
            pt={splitterPanelPT}
        >
            {children}
        </SplitterPanel>
    );
};

export default XSplitterPanel;