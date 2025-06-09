'use client';

import { InputMask, InputMaskChangeEvent, InputMaskProps } from 'primereact/inputmask';
import { useController, useFormContext } from 'react-hook-form';

type XInputMaskProps = {
    name: string;
    label?: string;
    labelRequired?: boolean;
    rules?: any;
    validation?: (val: string) => string;
} & Omit<InputMaskProps, 'name' | 'value' | 'onChange'>;

export const XInputMask = ({
    name,
    label,
    labelRequired,
    rules,
    validation,
    ...props
}: XInputMaskProps) => {
    const { control } = useFormContext();
    const {
        field: { value, onChange, ref, ...fieldProps },
        fieldState: { error }
    } = useController({
        name,
        control,
        rules,
        defaultValue: ''
    });

    const handleChange = (e: InputMaskChangeEvent) => {
        const inputValue = e.value ?? '';
        const newValue = validation ? validation(inputValue) : inputValue;
        onChange(newValue);
    };

    return (
        <div className="flex flex-col gap-1">
            {label && (
                <label htmlFor={name} className={`font-medium ${error ? 'text-red-500' : ''}`}>
                    {label}
                    {labelRequired && <span className="text-red-500"> *</span>}
                </label>
            )}
            <InputMask
                {...fieldProps}
                {...props}
                id={name}
                name={name}
                value={value || ''}
                ref={ref}
                onChange={handleChange}
                className={`w-full ${error ? 'p-invalid' : ''} ${props.className || ''}`}
                aria-describedby={error ? `${name}-error` : undefined}
            />
            {error?.message && (
                <small id={`${name}-error`} className="text-xs text-red-500">
                    {error.message.toString()}
                </small>
            )}
        </div>
    );
};