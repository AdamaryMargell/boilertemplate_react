import { breadCrumbPT } from '@/primereact-tailwindcss/breadCrumb.pt'
import { BreadCrumb } from 'primereact/breadcrumb'
import React from 'react'

const XBreadCrumb = ({ ...props }) => {
    return (
        <BreadCrumb {...props} pt={{ ...breadCrumbPT }} />
    )
}

export default XBreadCrumb