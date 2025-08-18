'use client';
import React, { useEffect, useState } from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: string;
    className?: string;
}

const XIcon = ({
    name,
    className = 'iconify',
    ...props
}: IconProps) => {
    const [IconCustomer, setIconCustomer] = useState<React.FC<React.SVGProps<SVGSVGElement>> | null>(null);
    const [loadingError, setLoadingError] = useState(false);
    const [attemptedPath, setAttemptedPath] = useState('');

    useEffect(() => {
        let isMounted = true;
        setLoadingError(false);
        const loadIcon = async () => {
            try {
                const normalizedName = name
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                console.log(`Intentando cargar: @/assets/icons/${normalizedName}.svg`);
                const iconPath = `@/assets/icons/${normalizedName}.svg`;
                setAttemptedPath(iconPath);

                const iconModule = await import(`@/assets/icons/${normalizedName}.svg`);

                if (isMounted) {
                    setIconCustomer(() => iconModule.default);
                    console.log(` Icono cargado: ${iconPath}`);
                }
            } catch (err) {
                console.error(` Error loading icon ${name} from ${attemptedPath}:`, err);
                if (isMounted) {
                    setLoadingError(true);
                }
            }

        };
        loadIcon();
        return () => {
            isMounted = false;
        };
    }, [name]);

    if (loadingError) {
        return <span className={`icon-error ${className}`}>❌</span>;
    }

    if (!IconCustomer) {
        return <span className={`icon-loading ${className}`} />;
    }

    return (
        <IconCustomer
            key={`icon-${name}`}
            className={className}
            {...props}
        />
    );
};

export default XIcon;

