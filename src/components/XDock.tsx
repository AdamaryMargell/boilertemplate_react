import { dockPT } from '@/primereact-tailwindcss/dock.pt'
import { Dock } from 'primereact/dock'
import React from 'react'

const XDock = ({ ...props }) => {
    return (
        <Dock {...props} pt={{ ...dockPT }}
        />
    )
}

export default XDock