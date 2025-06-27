'use client';

import React, { useEffect, useState } from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: string;
    size?: number | string;
    className?: string;
}


const XIcon = ({
    name,
    size = 24,
    className = '',
    ...props
}: IconProps) => {
    const [IconComponent, setIconComponent] = useState<React.FC<React.SVGProps<SVGSVGElement>> | null>(null);
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
                    setIconComponent(() => iconModule.default);
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
        return (
            <div
                className={`bg-red-100 border border-red-400 text-red-700 px-2 py-1 rounded text-xs ${className}`}
                style={{ width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                title={`Icono ${name} no encontrado en ${attemptedPath}`}
            >
                ❌
            </div>
        );
    }

    if (!IconComponent) {
        return (
            <div
                className={`bg-gray-100 animate-pulse rounded ${className}`}
                style={{ width: size, height: size }}
            />
        );
    }

    return (
        <IconComponent
            width={size}
            height={size}
            className={className}
            {...props}
        />
    );
};

export default XIcon;
