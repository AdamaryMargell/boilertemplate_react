import { messagePT } from '@/primereact-tailwindcss/message.pt'
import { Message } from 'primereact/message'
import React from 'react'

const XMessage = ({ ...props }) => {
    return (
        <Message {...props} pt={{ ...messagePT }} />
    )
}

export default XMessage