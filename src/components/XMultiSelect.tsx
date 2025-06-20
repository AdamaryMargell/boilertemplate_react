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

