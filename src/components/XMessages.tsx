import { messagesPT } from '@/primereact-tailwindcss/messages.pt'
import { Messages } from 'primereact/messages'
import React from 'react'

const XMessages = ({ ...props }) => {
    return (
        <Messages {...props} pt={messagesPT} />
    )
}

export default XMessages