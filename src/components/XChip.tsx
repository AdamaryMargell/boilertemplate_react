import { Chip, ChipProps } from 'primereact/chip'
import React from 'react'
import XIcon from './XIcons/XIcon';

const XChip: React.FC<ChipProps> = ({ icon, children, ...props }) => {
    const iconElement = icon ? <XIcon key={`icon-${icon}`} className='w-6 h-6' name={`${icon}`} /> : children;
    return <Chip {...props} icon={iconElement} />;
};

export default XChip;