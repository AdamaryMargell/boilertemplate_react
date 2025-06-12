import { tagPT } from '@/primereact-tailwindcss/tag.pt';
import { Tag, TagProps } from 'primereact/tag';
import React, { ReactNode } from 'react'

interface XTagProps extends TagProps {
    children?: ReactNode;
}
const XTag = ({ children, ...props }: XTagProps) => {
    return (
        <Tag {...props} pt={{ ...tagPT }}>
            {children}
        </Tag>
    )
}
export default XTag;