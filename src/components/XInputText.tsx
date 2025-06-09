'use client';
import { InputText, InputTextProps } from 'primereact/inputtext';
import { useController, useFormContext } from 'react-hook-form';

type XInputTextProps = {
    name: string;
    label?: string;
    labelRequired?: boolean;
    rules?: any;
    validation?: (val: string) => string;
} & Omit<InputTextProps, 'name' | 'value' | 'onChange'>;

export const XInputText = ({
    name,
    label,
    labelRequired,
    rules,
    validation,
    ...props
}: XInputTextProps) => {
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

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = validation ? validation(event.target.value) : event.target.value;
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
            <InputText
                {...fieldProps}
                {...props}
                id={name}
                name={name}
                ref={ref}
                value={value ?? ''}
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