import { fileuploadPT } from '@/primereact-tailwindcss/fileupload.pt'
import { FileUpload } from 'primereact/fileupload'
import React from 'react'

const XFileUpload = ({ ...props }) => {
    return (
        <FileUpload {...props} pt={{ ...fileuploadPT }} unstyled />
    )
}

export default XFileUpload