import { toolbarPT } from '@/primereact-tailwindcss/toolbar.pt'
import { Toolbar } from 'primereact/toolbar'
import React from 'react'

const XToolbar = ({ ...props }) => {
    return (
        <Toolbar {...props} pt={{...toolbarPT}}
        />
    )
}

export default XToolbar