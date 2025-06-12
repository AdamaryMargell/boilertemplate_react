import { listboxPT } from '@/primereact-tailwindcss/listBox.pt';
import { ListBox, ListBoxProps } from 'primereact/listbox';
import { classNames } from 'primereact/utils';
import React, { useRef } from 'react'
import { useController, useFormContext } from 'react-hook-form';

type XListBoxProps = {
    name: string;
    label?: string;
    labelRequired?: boolean;
    rules?: any;
    validation?: (val: any) => any;
} & Omit<ListBoxProps, 'name' | 'value' | 'onChange'>;

const XListBox = ({
    name,
    label,
    labelRequired,
    rules,
    validation,
    ...props
}: XListBoxProps) => {
    const { control } = useFormContext();
    const dropdownRef = useRef<any>(null);
    const {
        field: { value, onChange, ref, ...fieldsProps },
        fieldState: { error }
    } = useController({
        name,
        control,
        rules,
        defaultValue: props.multiple ? [] : null
    });

    const handleChange = (e: { value: any }) => {
        const newValue = validation ? validation(e.value) : e.value;
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
            <ListBox
                {...fieldsProps}
                {...props}
                ref={(el) => {
                    ref(el);
                    dropdownRef.current = el;
                }}
                id={name}
                name={name}
                value={value}
                className={`
                    w-full 
                    ${error ? 'p-invalid' : ''} 
                    ${props.className || ''}
                `}
                aria-describedby={error ? `${name}-error` : undefined}
                onChange={handleChange}
                pt={listboxPT(!!error)}
            />
            {error?.message && (
                <small id={`${name}-error`} className="text-xs text-red-500">
                    {error.message.toString()}
                </small>
            )}
        </div>
    )
}

export default XListBox