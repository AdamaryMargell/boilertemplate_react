// 'use client';
// import { multiselectPT } from '@/primereact-tailwindcss/multiselect.pt';
// import { MultiSelect, MultiSelectProps } from 'primereact/multiselect';
// import { useEffect, useMemo, useRef, useState } from "react";
// import { useController, useFormContext } from "react-hook-form";

// type XMultiSelectProps = {
//     name: string;
//     label?: string;
//     labelRequired?: boolean;
//     rules?: any;
//     validation?: (val: any) => any;
// } & Omit<MultiSelectProps, 'name' | 'value' | 'onChange'>;

// const XMultiSelect = ({
//     name,
//     label,
//     labelRequired,
//     rules,
//     validation,
//     ...props
// }: XMultiSelectProps) => {

//     const { control } = useFormContext();
//     const multiSelectRef = useRef<any>(null);
//     const [internalValue, setInternalValue] = useState<any[]>([]);
//     const [isReady, setIsReady] = useState(false);

//     const {
//         field: { value, onChange, ref, ...fieldsProps },
//         fieldState: { error }
//     } = useController({
//         name,
//         control,
//         rules
//     });

//     // Sincronización bidireccional con react-hook-form
//     useEffect(() => {
//         if (Array.isArray(value)) {
//             setInternalValue(value);
//         } else if (value === undefined || value === null) {
//             setInternalValue([]);
//             // Establecer array vacío en el formulario si viene undefined
//             if (!isReady) {
//                 onChange([]);
//                 setIsReady(true);
//             }
//         }
//     }, [value, onChange, isReady]);

//     // Handler de cambio que actualiza ambos estados
//     const handleChange = (event: { value: any }) => {
//         const newValue = Array.isArray(event.value) ? event.value : [];
//         const finalValue = validation ? validation(newValue) : newValue;

//         setInternalValue(finalValue); // Actualizar estado interno
//         onChange(finalValue); // Actualizar react-hook-form
//     };

//     // Validación de opciones válidas
//     useEffect(() => {
//         if (!props.options || internalValue.length === 0) return;

//         const { optionValue } = props;
//         let hasInvalidValues = false;

//         const validValues = internalValue.filter(val => {
//             const isValid = props.options!.some(opt => {
//                 if (optionValue && typeof opt === 'object' && opt !== null) {
//                     const optVal = (opt as any)[optionValue];
//                     const itemVal = typeof val === 'object' && val !== null ?
//                         (val as any)[optionValue] : val;
//                     return optVal === itemVal;
//                 } else {
//                     return opt === val;
//                 }
//             });

//             if (!isValid) hasInvalidValues = true;
//             return isValid;
//         });

//         if (hasInvalidValues) {
//             setInternalValue(validValues);
//             onChange(validValues);
//         }
//     }, [props.options, props.optionValue, internalValue, onChange]);

//     console.log('[XMultiSelect] Nuclear Debug:', {
//         name,
//         formValue: value,
//         internalValue,
//         isReady,
//         valueType: typeof value
//     });

//     // No renderizar hasta que esté listo
//     if (!isReady && (value === undefined || value === null)) {
//         return (
//             <div className="flex flex-col gap-1">
//                 {label && (
//                     <label className="font-medium">
//                         <span>{label}</span>
//                         {labelRequired && <span className="text-red-500"> *</span>}
//                     </label>
//                 )}
//                 <div className="h-10 bg-gray-100 animate-pulse rounded"></div>
//             </div>
//         );
//     }

//     return (
//         <div className="flex flex-col gap-1">
//             {label && (
//                 <label htmlFor={name} className={`font-medium ${error ? 'text-red-500' : ''}`}>
//                     <span>{label}</span>
//                     {labelRequired && <span className="text-red-500"> *</span>}
//                 </label>
//             )}
//             <MultiSelect
//                 {...fieldsProps}
//                 {...props}
//                 ref={(el) => {
//                     ref(el);
//                     multiSelectRef.current = el;
//                 }}
//                 id={name}
//                 name={name}
//                 value={internalValue} // Usar el estado interno que SIEMPRE es array
//                 aria-describedby={error ? `${name}-error` : undefined}
//                 onChange={handleChange}
//                 pt={multiselectPT(!!error)}
//                 placeholder={internalValue.length === 0 ? props.placeholder : undefined}
//                 showClear={internalValue.length > 0}
//                 filter={props.filter !== false}
//                 filterBy={props.filterBy || (props.optionValue ? undefined : 'label')}
//                 emptyMessage={props.emptyMessage || 'No hay opciones disponibles'}
//                 emptyFilterMessage={props.emptyFilterMessage || 'No se encontraron resultados'}
//             />
//             {error?.message && (
//                 <small id={`${name}-error`} className="text-xs text-red-500">
//                     {error.message.toString()}
//                 </small>
//             )}
//         </div>
//     );
// };

// export default XMultiSelect;


'use client';
import { multiselectPT } from '@/primereact-tailwindcss/multiselect.pt';
import { MultiSelect, MultiSelectProps } from 'primereact/multiselect';
import { useEffect, useMemo, useRef, useState } from "react";
import { useController, useFormContext } from "react-hook-form";

type XMultiSelectProps = {
    name: string;
    label?: string;
    labelRequired?: boolean;
    rules?: any;
    validation?: (val: any[], options?: any[]) => string | boolean | undefined;
} & Omit<MultiSelectProps, 'name' | 'value' | 'onChange'>;

const XMultiSelect = ({
    name,
    label,
    labelRequired,
    rules,
    validation,
    ...props
}: XMultiSelectProps) => {
    const { control } = useFormContext();
    const multiSelectRef = useRef<any>(null);
    const [internalValue, setInternalValue] = useState<any[]>([]);

    const {
        field: { value, onChange, ref, ...fieldsProps },
        fieldState: { error }
    } = useController({
        name,
        control,
        rules: {
            ...rules,
            validate: (val: any[]) => {
                // Validación por límite máximo
                if (props.maxSelectedLabels && val?.length > props.maxSelectedLabels) {
                    return `No puedes seleccionar más de ${props.maxSelectedLabels} opciones`;
                }

                // Validación personalizada del padre
                if (validation) {
                    const result = validation(val, props.options);
                    if (typeof result === 'string') return result;
                    if (result === false) return 'Selección inválida';
                }

                return true;
            }
        },
        defaultValue: []
    });

    // Sincronización entre el valor del formulario y el estado interno
    useEffect(() => {
        if (value === undefined || value === null) {
            setInternalValue([]);
        } else {
            setInternalValue(Array.isArray(value) ? value : [value]);
        }
    }, [value]);

    const handleChange = (event: { value: any }) => {
        let newValue = event.value;

        // Aplicar validación externa antes de actualizar
        if (validation) {
            const validationResult = validation(newValue, props.options);
            if (validationResult === false) {
                return; // No actualizar si la validación falla
            }
        }

        // Aplicar límite máximo
        if (props.maxSelectedLabels && newValue.length > props.maxSelectedLabels) {
            newValue = newValue.slice(0, props.maxSelectedLabels);
        }

        const normalized = Array.isArray(newValue) ? newValue : [newValue];
        setInternalValue(normalized);
        onChange(normalized);
    };

    return (
        <div className="flex flex-col gap-1">
            {label && (
                <label htmlFor={name} className={`font-medium ${error ? 'text-red-500' : ''}`}>
                    <span>{label}</span>
                    {labelRequired && <span className="text-red-500"> *</span>}
                </label>
            )}
            <MultiSelect
                {...fieldsProps}
                {...props}
                ref={(el) => {
                    ref(el);
                    multiSelectRef.current = el;
                }}
                id={name}
                name={name}
                value={internalValue}
                aria-describedby={error ? `${name}-error` : undefined}
                onChange={handleChange}
                pt={multiselectPT(!!error)}
                placeholder={internalValue.length === 0 ? props.placeholder : undefined}
                showClear={internalValue.length > 0}
                maxSelectedLabels={props.maxSelectedLabels || 3}
            />
            {error?.message && (
                <small id={`${name}-error`} className="text-xs text-red-500">
                    {error.message.toString()}
                </small>
            )}
        </div>
    )
}

export default XMultiSelect;