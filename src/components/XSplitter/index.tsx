'use client';
import { splitterPT } from '@/primereact-tailwindcss/splitter.pt';
import { Splitter, SplitterProps } from 'primereact/splitter';
import React, { ReactNode } from 'react';


interface XSplitterProps extends SplitterProps {
    children: ReactNode;
}

const XSplitter = ({
    children,
    ...props
}: XSplitterProps) => {
    return (
        <Splitter
            {...props}
            pt={splitterPT}
        >
            {children}
        </Splitter>
    );
};

export default XSplitter;