'use client';
import { checkBoxPT } from '@/primereact-tailwindcss/checkbox.pt';
import { Checkbox, CheckboxChangeEvent, CheckboxProps } from 'primereact/checkbox';
import { useController, useFormContext } from 'react-hook-form';

type XCheckboxProps = {
    name: string;
    label?: string;
    labelRequired?: boolean;
    rules?: any;
    validation?: (val: boolean) => boolean;
} & Omit<CheckboxProps, 'name' | 'checked' | 'value' | 'onChange'>;

export const XCheckbox = ({
    name,
    label,
    labelRequired,
    rules,
    validation,
    ...props
}: XCheckboxProps) => {
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

    const handleChange = (event: CheckboxChangeEvent) => {
        const checkedValue = event.checked ?? false;
        const newValue = validation ? validation(checkedValue) : checkedValue;
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
            <Checkbox
                {...fieldProps}
                {...props}
                id={name}
                name={name}
                ref={ref}
                checked={Boolean(value)}
                onChange={handleChange}
                className={`w-full ${error ? 'p-invalid' : ''} ${props.className || ''}`}
                aria-describedby={error ? `${name}-error` : undefined}
                pt={checkBoxPT(!!error)}
            />
            {error?.message && (
                <small id={`${name}-error`} className="text-xs text-red-500">
                    {error.message.toString()}
                </small>
            )}
        </div>
    );
};