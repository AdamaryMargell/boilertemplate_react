import { tabViewPT } from '@/primereact-tailwindcss/tabView.pt';
import { TabView, TabViewProps } from 'primereact/tabview';
import React, { ReactNode } from 'react'

interface XTabViewProps extends TabViewProps {
    children: ReactNode;
}

const XTabView = ({ children, ...props }: XTabViewProps) => {
    return (
        <TabView {...props} pt={tabViewPT}>
            {children}
        </TabView>
    )
}
export default XTabView;