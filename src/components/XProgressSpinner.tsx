import { ProgressSpinner } from 'primereact/progressspinner'
import React from 'react'

import { progressSpinnerPT } from '@/primereact-tailwindcss/progressSpinner.pt'
import './../styles/progressSpiner.css'

const XProgressSpinner = ({ ...props }) => {
    return (
        <ProgressSpinner {...props} pt={progressSpinnerPT} />
    )
}

export default XProgressSpinner