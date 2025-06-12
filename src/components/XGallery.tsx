import { galleriaPT } from '@/primereact-tailwindcss/galleria.pt';
import { Galleria, GalleriaState } from 'primereact/galleria';
import React, { ReactNode, useEffect, useState } from 'react'

interface XGalleriaProps extends GalleriaState {
    children?: ReactNode;
}
const XGalleria = ({ children, ...props }: XGalleriaProps) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // O un placeholder/skeleton
    }
    return (
        <Galleria {...props} pt={{ ...galleriaPT }}>
            {children}
        </Galleria>
    )
}
export default XGalleria;