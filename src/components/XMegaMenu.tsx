import { megaMenuPT } from '@/primereact-tailwindcss/megaMenu.pt'
import { MegaMenu } from 'primereact/megamenu'
import React from 'react'

const XMegaMenu = ({ ...props }) => {
    return (
        <MegaMenu  {...props} pt={megaMenuPT} />
    )
}

export default XMegaMenu