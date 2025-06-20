import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: string;
    size?: number | string;
    className?: string;
    color?: string;
}

const Icon = ({ name, size = 24, color = 'currentColor', className = "", ...props }: IconProps) => {
    const [SvgComponent, setSvgComponent] = React.useState<
        React.FC<React.SVGProps<SVGSVGElement>> | null
    >(null);

    React.useEffect(() => {
        import(`@/assets/icons/${name}.svg`)
            .then((module) => {
                setSvgComponent(() => module.default);
            })
            .catch(() => {
                console.error(`Icon "${name}" not found`);
            });
    }, [name]);

    if (!SvgComponent) {
        return (
            <div
                className={className}
                style={{ width: size, height: size }}
            />
        );
    }

    return SvgComponent ? (
        <SvgComponent
            width={size}
            height={size}
            className={`inline-block ${className}`}
            style={{ color }}
            {...props}
        />
    ) : null;
};

export default Icon;


// import React from 'react';

// interface IconProps extends React.SVGProps<SVGSVGElement> {
//     name: string;
//     size?: number | string;
//     category?: string;
//     color?: string;
// }

// const Icon = ({
//     name,
//     size = 24,
//     category = 'actions',
//     className = '',
//     color,
//     ...props
// }: IconProps) => {
//     // Solución: Proporciona null como valor inicial
//     const ImportedIconRef = React.useRef<React.FC<React.SVGProps<SVGSVGElement>> | null>(null);
//     const [loading, setLoading] = React.useState(true);

//     React.useEffect(() => {
//         setLoading(true);
//         const importIcon = async () => {
//             try {
//                 // Usamos dynamic import con template literals
//                 const { default: namedImport } = await import(
//                     `@/assets/icons/${category}/${name}.svg`
//                 );
//                 ImportedIconRef.current = namedImport;
//             } catch (err) {
//                 console.error(`Error loading icon ${name}:`, err);
//                 ImportedIconRef.current = null;
//             } finally {
//                 setLoading(false);
//             }
//         };
//         importIcon();
//     }, [name, category]);

//     if (!loading && ImportedIconRef.current) {
//         const { current: ImportedIcon } = ImportedIconRef;
//         return (
//             <ImportedIcon
//                 width={size}
//                 height={size}
//                 className={`icon ${className}`}
//                 style={{ color }}
//                 {...props}
//             />
//         );
//     }

//     return <div style={{ width: size, height: size }} />;
// };

// export default Icon;


// import React from 'react';

// interface IconProps extends React.SVGProps<SVGSVGElement> {
//     name: string;
//     size?: number | string;
//     category?: string;
//     color?: string;
// }

// const Icon = ({
//     name,
//     size = 24,
//     category = 'actions',
//     className = '',
//     color = 'currentColor',
//     ...props
// }: IconProps) => {
//     const [SvgComponent, setSvgComponent] = React.useState<React.FC<React.SVGProps<SVGSVGElement>> | null>(null);
//     const [error, setError] = React.useState(false);

//     React.useEffect(() => {
//         const loadIcon = async () => {
//             try {
//                 // Importación dinámica con verificación
//                 const imported = await import(`@/assets/icons/${name}.svg`);

//                 // Asegurarse que el default export es un componente válido
//                 if (!imported.default || typeof imported.default !== 'function') {
//                     throw new Error('Invalid SVG component');
//                 }

//                 // Crear componente wrapper para control de props
//                 const WrappedComponent = (props: React.SVGProps<SVGSVGElement>) => (
//                     <imported.default
//                         {...props}
//                         fill={color}
//                         className={`inline-block ${props.className || ''}`}
//                     />
//                 );

//                 setSvgComponent(() => WrappedComponent);
//             } catch (err) {
//                 console.error(`Failed to load icon ${name}:`, err);
//                 setError(true);
//             }
//         };

//         loadIcon();
//     }, [name, category, color]);

//     if (error) {
//         return (
//             <div
//                 className={`inline-flex items-center justify-center bg-red-100 text-red-500 ${className}`}
//                 style={{ width: size, height: size }}
//             >
//                 !
//             </div>
//         );
//     }

//     if (!SvgComponent) {
//         return <div style={{ width: size, height: size }} className={className} />;
//     }

//     return (
//         <SvgComponent
//             width={size}
//             height={size}
//             className={`icon ${className}`}
//             {...props}
//         />
//     );
// };

// export default Icon;