import { imagePT } from '@/primereact-tailwindcss/image.pt';
import { Image, ImageProps } from 'primereact/image';
import React from 'react';

const XImage = ({ ...props }) => {
    return (
        <Image {...props} pt={{ ...imagePT }} />
    );
};

export default XImage;