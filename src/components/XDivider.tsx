import { dividerPT } from '@/primereact-tailwindcss/divider.pt'
import { Divider } from 'primereact/divider'
import React from 'react'

const XDivider = ({ ...props }) => {
    return (
        <Divider {...props} pt={{ ...dividerPT }} />
    )
}

export default XDivider