import { menuPT } from '@/primereact-tailwindcss/menu.pt';
import { Menu, MenuProps } from 'primereact/menu';
import React, { forwardRef, ReactNode } from 'react';

interface XMenuProps extends MenuProps {
    children?: ReactNode;
}

const XMenu = forwardRef<Menu, XMenuProps>(({ children, ...props }, ref) => {
    return (
        <Menu
            {...props}
            pt={{ ...menuPT }}
            ref={ref}
        >
            {children}
        </Menu>
    );
});

XMenu.displayName = 'XMenu'; // Esto ayuda en debugging

export default XMenu;
