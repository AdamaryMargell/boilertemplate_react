import { avatargroupPT } from '@/primereact-tailwindcss/avatar.pt';
import { AvatarGroup } from 'primereact/avatargroup';
import React, { ReactNode } from 'react';

interface XAvatarGroupProps {
    children?: ReactNode;
    [key: string]: any; // Para permitir otras props
}

const XAvatarGroup = ({ children, ...props }: XAvatarGroupProps) => {
    return (
        <AvatarGroup {...props} pt={{ ...avatargroupPT }}>
            {children}
        </AvatarGroup>
    );
};

export default XAvatarGroup;