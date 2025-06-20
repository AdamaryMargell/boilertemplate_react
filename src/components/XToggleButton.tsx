import React from 'react'
import { ToggleButton, ToggleButtonChangeEvent, ToggleButtonProps } from 'primereact/togglebutton';
import { useController, useFormContext } from 'react-hook-form';
import { toggleButtonPT } from '@/primereact-tailwindcss/toogleButton.pt';

type XToggleButtonProps = {
    name: string;
    label?: string;
    labelRequired?: boolean;
    description?: string;
    rules?: any;
    validation?: (val: boolean) => boolean;
} & Omit<ToggleButtonProps, 'name' | 'checked' | 'value' | 'onChange'>;

const XToggleButton = ({
    name,
    label,
    labelRequired,
    description,
    rules,
    validation,
    ...props
}: XToggleButtonProps) => {

    const { control } = useFormContext();
    const {
        field: { value, onChange, ref, ...fieldProps },
        fieldState: { error }
    } = useController({
        name,
        control,
        rules,
        defaultValue: false
    });

    const handleChange = (e: { value: boolean }) => {
        const newValue = validation ? validation(e.value) : e.value;
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
            <ToggleButton
                {...fieldProps}
                {...props}
                id={name}
                name={name}
                ref={ref}
                checked={Boolean(value)}
                onChange={handleChange}
                className={`${error ? 'p-invalid' : ''} ${props.className || ''}`}
                aria-describedby={error ? `${name}-error` : undefined}
                pt={toggleButtonPT(!!error)}
            />
            {error?.message && (
                <small id={`${name}-error`} className="text-xs text-red-500">
                    {error.message.toString()}
                </small>
            )}
        </div>
    )
}

export default XToggleButton