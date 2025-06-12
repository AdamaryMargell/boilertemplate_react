import { tabMenuPT } from '@/primereact-tailwindcss/tabMenu.pt'
import { TabMenu } from 'primereact/tabmenu'
import React from 'react'

const XTabMenu = ({ ...props }) => {
    return (
        <TabMenu {...props} pt={{ ...tabMenuPT }} />
    )
}

export default XTabMenu