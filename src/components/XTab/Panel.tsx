import { TabPanel, TabPanelProps } from 'primereact/tabview';
import React, { ReactNode } from 'react'

interface XTabPanelProps extends TabPanelProps {
  children: ReactNode;
}

const XTabPanel = ({ children, ...props }: XTabPanelProps) => {
  return (
    <TabPanel {...props}>
      {children}
    </TabPanel>
  )
}

export default XTabPanel