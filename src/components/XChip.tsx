import { chipPT } from '@/primereact-tailwindcss/chip.pt'
import { Chip } from 'primereact/chip'
import React from 'react'

const XChip = ({ ...props }) => {
    return (
        <Chip {...props} pt={{ ...chipPT }} />
    )
}

export default XChip