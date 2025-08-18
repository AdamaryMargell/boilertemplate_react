import { Avatar, type AvatarProps } from 'primereact/avatar';
import React, { type ReactNode } from 'react';
import XIcon from '../XIcons/XIcon';

interface XAvatarProps extends AvatarProps {
    children?: ReactNode;
    icon?: string; // Prop para el icono como en Vue
}

const XAvatar: React.FC<XAvatarProps> = ({ children, icon, ...props }) => {
    return (
        <Avatar {...props}>
            {icon ? (
                <XIcon name={`${icon}`} />
            ) : (
                children
            )}
        </Avatar>
    );
};

export default XAvatar;