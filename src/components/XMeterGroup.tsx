// import React, { useEffect } from 'react';
// import { MeterGroup } from 'primereact/metergroup';
// import { meterGroupPT } from '@/primereact-tailwindcss/meterGroup.pt';
// import '../styles/meeterGroup.css';
// const XMeterGroup = ({ values, className, ...props }) => {
//     // Validación y valor por defecto
//     const validatedValue = values && Array.isArray(values) ? values : [];

//     // Aplicar colores usando CSS variables después del render
//     useEffect(() => {
//         if (validatedValue.length > 0) {
//             const meterElements = document.querySelectorAll('.p-metergroup-meter');
//             const labelElements = document.querySelectorAll('.p-metergroup-label-type');

//             validatedValue.forEach((item, index) => {
//                 if (item.color) {
//                     // Aplicar color a las barras
//                     if (meterElements[index]) {
//                         meterElements[index].style.backgroundColor = item.color;
//                     }
//                     // Aplicar color a los indicadores de las etiquetas
//                     if (labelElements[index]) {
//                         labelElements[index].style.backgroundColor = item.color;
//                     }
//                 }
//             });
//         }
//     }, [validatedValue]);

//     // Si no hay datos válidos, mostrar un placeholder
//     if (!validatedValue.length) {
//         return (
//             <div className={`w-full ${className || ''}`}>
//                 <div className="bg-gray-200 rounded-full h-6 w-full">
//                     <div className="bg-gray-300 h-full rounded-full w-0 transition-all duration-500"></div>
//                 </div>
//                 <p className="text-sm text-gray-500 mt-2">No hay datos para mostrar</p>
//             </div>
//         );
//     }

//     return (
//         <div className={`w-full ${className || ''}`}>
//             <MeterGroup
//                 values={validatedValue}
//                 {...props}
//                 pt={meterGroupPT}
//                 className="w-full"
//             />
//         </div>
//     );
// };

// export default XMeterGroup;


// CustomMeterGroup.tsx
import React from 'react';

// Interfaces
export interface MeterItem {
    label: string;
    value: number;
    color?: string;
}

export interface MeterItemWithPercentage extends MeterItem {
    percentage: number;
}

export interface XMeterGroupProps {
    value?: MeterItem[];
    orientation?: 'horizontal' | 'vertical';
    labelPosition?: 'start' | 'end';
    labelOrientation?: 'horizontal' | 'vertical';
    className?: string;
    showLabels?: boolean;
    showValues?: boolean;
    height?: string;
    animated?: boolean;
}

const XMeterGroup: React.FC<XMeterGroupProps> = ({ 
    value = [], 
    orientation = 'horizontal',
    labelPosition = 'end',
    labelOrientation = 'horizontal',
    className = '',
    showLabels = true,
    showValues = true,
    height = 'h-6',
    animated = true
}) => {
    // Calcular el total para los porcentajes
    const total: number = value.reduce((sum: number, item: MeterItem) => sum + (item.value || 0), 0);
    
    // Calcular porcentajes
    const itemsWithPercentages: MeterItemWithPercentage[] = value.map((item: MeterItem) => ({
        ...item,
        percentage: total > 0 ? (item.value / total) * 100 : 0
    }));

    // Componente de barra de medición
    const MeterBar: React.FC = () => (
        <div className={`bg-gray-200 rounded-full overflow-hidden ${height} w-full shadow-inner`}>
            <div className="flex h-full">
                {itemsWithPercentages.map((item: MeterItemWithPercentage, index: number) => (
                    <div
                        key={index}
                        className={`${animated ? 'transition-all duration-700 ease-out' : ''}`}
                        style={{
                            width: `${item.percentage}%`,
                            backgroundColor: item.color || `hsl(${index * 137.5}, 70%, 50%)`,
                            minWidth: item.percentage > 0 ? '2px' : '0'
                        }}
                        title={`${item.label}: ${item.value} (${item.percentage.toFixed(1)}%)`}
                    />
                ))}
            </div>
        </div>
    );

    // Componente de etiquetas
    const Labels: React.FC = () => {
        if (!showLabels) return null;

        const labelClasses: string = `flex gap-4 ${
            labelOrientation === 'vertical' ? 'flex-col' : 'flex-row flex-wrap'
        }`;

        return (
            <div className={labelClasses}>
                {itemsWithPercentages.map((item: MeterItemWithPercentage, index: number) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                        <div
                            className="w-3 h-3 rounded-full flex-shrink-0"
                            style={{
                                backgroundColor: item.color || `hsl(${index * 137.5}, 70%, 50%)`
                            }}
                        />
                        <span className="font-medium text-gray-700 whitespace-nowrap">
                            {item.label}
                        </span>
                        {showValues && (
                            <span className="font-semibold text-gray-900 ml-1">
                                {item.value} ({item.percentage.toFixed(1)}%)
                            </span>
                        )}
                    </div>
                ))}
            </div>
        );
    };

    // Si no hay datos
    if (!value || value.length === 0) {
        return (
            <div className={`w-full ${className}`}>
                <div className={`bg-gray-200 rounded-full ${height} w-full`}>
                    <div className="bg-gray-300 h-full rounded-full w-0" />
                </div>
                {showLabels && (
                    <p className="text-sm text-gray-500 mt-2">No hay datos disponibles</p>
                )}
            </div>
        );
    }

    // Layout vertical
    if (orientation === 'vertical') {
        return (
            <div className={`w-full ${className}`}>
                {labelPosition === 'start' && showLabels && (
                    <div className="mb-3">
                        <Labels />
                    </div>
                )}
                <MeterBar />
                {labelPosition === 'end' && showLabels && (
                    <div className="mt-3">
                        <Labels />
                    </div>
                )}
            </div>
        );
    }

    // Layout horizontal (default)
    return (
        <div className={`w-full ${className}`}>
            <div className={`flex items-center ${orientation === 'horizontal' ? 'gap-4' : ''}`}>
                {labelPosition === 'start' && showLabels && (
                    <div className="flex-shrink-0">
                        <Labels />
                    </div>
                )}
                <div className="flex-1">
                    <MeterBar />
                </div>
                {labelPosition === 'end' && showLabels && (
                    <div className="flex-shrink-0">
                        <Labels />
                    </div>
                )}
            </div>
        </div>
    );
};

export default XMeterGroup;