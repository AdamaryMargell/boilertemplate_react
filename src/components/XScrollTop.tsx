import { scrollTopPT } from '@/primereact-tailwindcss/scrollTop.pt'
import { ScrollTop } from 'primereact/scrolltop'
import React from 'react'

const XScrollTop = ({...props}) => {
    return (
        <ScrollTop {...props} pt={{...scrollTopPT}}
        />
    )
}

export default XScrollTop