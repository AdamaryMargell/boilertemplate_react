import { avatarPT } from '@/primereact-tailwindcss/avatar.pt';
import { Avatar, AvatarProps } from 'primereact/avatar';
import React, { ReactNode } from 'react'

interface XAvatarProps extends AvatarProps{
    children?: ReactNode;
}
const XAvatar: React.FC<XAvatarProps> = ({children, ...props}) => {
    return (
        <Avatar {...props} pt={{...avatarPT}}>
            {children}
        </Avatar>
    )
}
export default XAvatar;

