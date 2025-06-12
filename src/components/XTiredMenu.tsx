import { tieredMenuPT } from '@/primereact-tailwindcss/tieredMenu.pt'
import { TieredMenu } from 'primereact/tieredmenu'
import React from 'react'

const XTiredMenu = ({ ...props }) => {
    return (
        <TieredMenu {...props} pt={{ ...tieredMenuPT }} />
    )
}

export default XTiredMenu;