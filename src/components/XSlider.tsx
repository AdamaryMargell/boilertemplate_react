// import { sliderPT } from '@/primereact-tailwindcss/slider.pt';
// import { Slider, SliderChangeEvent, SliderProps } from 'primereact/slider';
// import React, { ReactNode, useEffect, useRef, useState } from 'react'
// import { useController, useFormContext } from 'react-hook-form';

// type XSliderProps = {
//     name: string;
//     label?: string;
//     labelRequired?: boolean;
//     rules?: any;
//     validation?: (val: number | number[]) => number | number[];
//     showValue?: boolean;
//     valueTemplate?: (value: number | number[]) => React.ReactNode;
// } & Omit<SliderProps, 'name' | 'value' | 'onChange'>;

// const XSlider = ({
//     name,
//     label,
//     labelRequired,
//     rules,
//     validation,
//     showValue = true,
//     valueTemplate,
//     ...props
// }: XSliderProps) => {
//     const { control, trigger } = useFormContext();

//     const {
//         field: { value, onChange, ref },
//         fieldState: { error, isTouched }
//     } = useController({
//         name,
//         control,
//         rules,
//         defaultValue: props.range ? [props.min, props.max] : props.min
//     });

//     const [displayValue, setDisplayValue] = useState<number | number[]>(value);

//     const handleChange = (e: SliderChangeEvent) => {
//         const newValue = validation ? validation(e.value) : e.value;
//         onChange(newValue);

//         // Solo activar validación si el campo ha sido tocado
//         if (isTouched) {
//             trigger(name);
//         }
//     };

//     useEffect(() => {
//         setDisplayValue(value);
//     }, [value]);

//     const renderValue = () => {
//         if (!showValue) return null;

//         if (valueTemplate) {
//             return valueTemplate(value);
//         }

//         if (Array.isArray(value)) {
//             return (
//                 <div className="flex justify-between text-sm text-gray-600 mt-1">
//                     <span>{value[0]}</span>
//                     <span>{value[1]}</span>
//                 </div>
//             );
//         }

//         return <div className="text-sm text-gray-600 mt-1">{value}</div>;
//     };

//     return (
//         <div className="flex flex-col gap-2">
//             {label && (
//                 <label htmlFor={name} className={`font-medium ${error ? 'text-red-500' : ''}`}>
//                     {label}
//                     {labelRequired && <span className="text-red-500"> *</span>}
//                 </label>
//             )}

//             <Slider
//                 {...props}
//                 ref={ref}
//                 id={name}
//                 value={value}
//                 onChange={handleChange}
//                 className={`w-full ${error ? 'p-invalid' : ''} ${props.className || ''}`}
//                 pt={sliderPT}
//                 aria-describedby={error ? `${name}-error` : undefined}
//             />

//             {renderValue()}

//             {error?.message && (
//                 <small id={`${name}-error`} className="text-xs text-red-500">
//                     {error.message.toString()}
//                 </small>
//             )}
//         </div>
//     )
// }

// export default XSlider

'use client';
import { Slider, SliderChangeEvent, SliderProps } from 'primereact/slider';
import { useController, useFormContext } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import { sliderPT } from '@/primereact-tailwindcss/slider.pt';

type XSliderProps = {
    name: string;
    label?: string;
    labelRequired?: boolean;
    rules?: any;
    validation?: (val: number | number[]) => boolean | string;
    showValue?: boolean;
    valueTemplate?: (value: number | number[]) => React.ReactNode;
} & Omit<SliderProps, 'name' | 'value' | 'onChange'>;

const XSlider = ({
    name,
    label,
    labelRequired,
    rules,
    validation,
    showValue = true,
    valueTemplate,
    ...props
}: XSliderProps) => {
    const { control, trigger } = useFormContext();
    const sliderRef = useRef<any>(null);

    const combinedRules = {
        ...rules,
        ...(validation && {
            validate: (value: number | number[]) => validation(value)
        })
    };

    const {
        field: { value, onChange },
        fieldState: { error }
    } = useController({
        name,
        control,
        rules: combinedRules,
        defaultValue: props.range ? [props.min || 0, props.max || 100] : props.min || 0
    });

    // Añadir método focus al ref para que funcione con react-hook-form
    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.focus = () => {
                // Destacar visualmente el slider cuando se intenta hacer focus
                const sliderElement = document.getElementById(name);
                sliderElement?.classList.add('ring-2', 'ring-primary-500', 'transition-all');
                setTimeout(() => {
                    sliderElement?.classList.remove('ring-2', 'ring-primary-500');
                }, 1000);
            };
        }
    }, [name]);

    const handleChange = (e: SliderChangeEvent) => {
        //const newValue = validation ? validation(e.value) : e.value;
        onChange(e.value);
        trigger(name);
    };

    const renderValue = () => {
        if (!showValue) return null;

        if (valueTemplate) {
            return valueTemplate(value);
        }

        if (Array.isArray(value)) {
            return (
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                    <span>{value[0]}</span>
                    <span>{value[1]}</span>
                </div>
            );
        }

        return <div className="text-sm text-gray-600 mt-1">{value}</div>;
    };

    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label htmlFor={name} className={`font-medium ${error ? 'text-red-500' : ''}`}>
                    {label}
                    {labelRequired && <span className="text-red-500"> *</span>}
                </label>
            )}

            <Slider
                {...props}
                ref={sliderRef}
                id={name}
                value={value}
                onChange={handleChange}
                className={`${error ? 'p-invalid' : ''} ${props.className || ''}`}
                pt={sliderPT(!!error)}
                aria-describedby={error ? `${name}-error` : undefined}
            />

            {renderValue()}

            {error?.message && (
                <small id={`${name}-error`} className="text-xs text-red-500">
                    {error.message.toString()}
                </small>
            )}
        </div>
    );
};

export default XSlider;