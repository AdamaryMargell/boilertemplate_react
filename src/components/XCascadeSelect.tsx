'use client'
import { cascadeSelectPT } from '@/primereact-tailwindcss/cascadeSelect.pt';
import { CascadeSelect, CascadeSelectProps } from 'primereact/cascadeselect';
import React, { ReactNode, useRef } from 'react'
import { useController, useFormContext } from 'react-hook-form';

type XCascadeSelectProps = {
    name: string;
    label?: string;
    labelRequired?: boolean;
    rules?: any;
    validation?: (val: string) => string;
} & Omit<CascadeSelectProps, 'name' | 'value' | 'onChange'>;
const XCascadeSelect: React.FC<XCascadeSelectProps> = ({
    name,
    label,
    labelRequired,
    rules,
    validation,
    ...props
}) => {

    const { control, setValue, formState: { errors } } = useFormContext();
    const selectRef = useRef<any>(null);

    const {
        field: { value, onChange, ref, ...fieldProps },
        fieldState: { error }
    } = useController({
        name,
        control,
        rules,
        defaultValue: null
    });

    const handleChange = (event: { value: any }) => {
        const newValue = validation ? validation(event.value) : event.value;
        onChange(newValue);
    };

    return (
        <div className="flex flex-col gap-1">
            {label && (
                <label htmlFor={name} className={`font-medium ${error ? 'text-red-500' : ''}`}>
                    <span>{label}</span>
                    {labelRequired && <span className="text-red-500"> *</span>}
                </label>
            )}
            <CascadeSelect
                {...fieldProps}
                {...props}
                ref={(el) => {
                    ref(el);
                    selectRef.current = el;
                }}
                value={value}
                onChange={handleChange}
                className={`w-full ${error ? 'p-invalid' : ''} ${props.className || ''}`}
                aria-describedby={error ? `${name}-error` : undefined}
                pt={{ ...cascadeSelectPT }} />

            {error?.message && (
                <small id={`${name}-error`} className="text-xs text-red-500">
                    {error.message.toString()}
                </small>
            )}
        </div>
    )
}
export default XCascadeSelect;