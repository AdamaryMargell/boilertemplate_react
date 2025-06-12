import { menuPT } from '@/primereact-tailwindcss/menu.pt';
import { Menu, MenuProps } from 'primereact/menu';
import React, { ReactNode } from 'react'

interface XMenuProps extends MenuProps {
    children?: ReactNode;
}
const XMenu = ({ children, ...props }: XMenuProps) => {
    return (
        <Menu {...props} pt={{ ...menuPT }}>
            {children}
        </Menu>
    )
}

export default XMenu