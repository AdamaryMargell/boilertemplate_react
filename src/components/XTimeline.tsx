import { timelinePT } from '@/primereact-tailwindcss/timeline.pt';
import { Timeline } from 'primereact/timeline';
import React from 'react'
const XTimeline = ({ ...props }) => {
    return (
        <Timeline {...props} pt={{ ...timelinePT }} />
    )
}
export default XTimeline;