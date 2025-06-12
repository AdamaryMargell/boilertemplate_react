import { contextMenuPT } from '@/primereact-tailwindcss/contextMenu.pt'
import { ContextMenu } from 'primereact/contextmenu'
import React from 'react'

const XContextMenu = ({ ...props }) => {
    return (
        <ContextMenu
            {...props} pt={contextMenuPT}
        />
    )
}

export default XContextMenu