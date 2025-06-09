import { imagePT } from '@/primereact-tailwindcss/image.pt';
import { Image, ImageProps } from 'primereact/image';
import React from 'react';

interface XImageProps extends Omit<ImageProps, 'children'> {
    className?: string;
}

const XImage: React.FC<XImageProps> = (props) => {
    return (
        <Image {...props} pt={{ ...imagePT }} />
    );
};

export default XImage;