import { InputSwitch, InputSwitchChangeEvent, InputSwitchProps } from 'primereact/inputswitch';
import { useController, useFormContext } from 'react-hook-form';
import React from 'react'
import { inputSwitchPT } from '@/primereact-tailwindcss/inputSwitch.pt';

type XInputSwitchProps = {
    name: string;
    label?: string;
    labelRequired?: boolean;
    description?: string;
    rules?: any;
    validation?: (val: boolean) => boolean;
} & Omit<InputSwitchProps, 'name' | 'checked' | 'value' | 'onChange'>;

const XInputSwitch = ({
    name,
    label,
    labelRequired,
    description,
    rules,
    validation,
    ...props
}: XInputSwitchProps) => {

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

    const handleChange = (event: InputSwitchChangeEvent) => {
        const switchValue = event.value !== undefined ? event.value : event.checked;
        const newValue = validation ? validation(switchValue) : switchValue;
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
            <InputSwitch
                {...fieldProps}
                {...props}
                id={name}
                name={name}
                ref={ref}
                checked={Boolean(value)}
                onChange={handleChange}
                className={`w-full ${error ? 'p-invalid' : ''} ${props.className || ''}`}
                aria-describedby={error ? `${name}-error` : undefined}
                pt={inputSwitchPT(!!error)}
            />
            {description && !error?.message && (
                <small id={name} className="text-xs text-gray-500">
                    {description}
                </small>
            )}
            {error?.message && (
                <small id={`${name}-error`} className="text-xs text-red-500">
                    {error.message.toString()}
                </small>
            )}
        </div>
    )
}

export default XInputSwitch