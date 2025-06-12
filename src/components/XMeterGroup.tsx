import React from 'react'
import { MeterGroup } from 'primereact/metergroup';
import { meterGroupPT } from '@/primereact-tailwindcss/meterGroup.pt';

const XMeterGroup = ({ ...props }) => {
    return (
        <MeterGroup {...props} className='p-meetergroup' pt={meterGroupPT} />
    )
}

export default XMeterGroup