import { StyleClass, StyleClassProps } from 'primereact/styleclass';
import React, { ReactNode } from 'react'

interface XStyleClassProps extends StyleClassProps {
    children?: ReactNode;
}

const XStyleClass = ({ children, ...props }: XStyleClassProps) => {
    return (
        <StyleClass {...props}>
            {children}
        </StyleClass>
    )
}

export default XStyleClass