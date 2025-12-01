import { Toolbar } from 'primereact/toolbar'
import React from 'react'

const XToolbar = ({ ...props }) => {
    return (
        <Toolbar {...props} />
    )
}

XToolbar.displayName = 'XToolbar';
export default XToolbar