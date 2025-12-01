'use client';
import { InputNumber, InputNumberProps } from 'primereact/inputnumber';
import { useController, useFormContext } from 'react-hook-form';

type XInputNumberProps = {
    name: string;
    label?: string;
    labelRequired?: boolean;
    rules?: any;
    validation?: (val: number | null) => number | null;
} & Omit<InputNumberProps, 'name' | 'value' | 'onChange' | 'ref'>;

export const XInputNumber = ({
    name,
    label,
    labelRequired,
    rules,
    validation,
    ...props
}: XInputNumberProps) => {
    const { control } = useFormContext();
    const {
        field: { value, onChange, ref },
        fieldState: { error }
    } = useController({
        name,
        control,
        rules,
        defaultValue: null
    });

    const handleChange = (event: { value: number | null }) => {
        let newValue = event.value;
        if (validation) {
            newValue = validation(newValue);
        }
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
            <InputNumber
                {...props}
                inputRef={ref}
                id={name}
                value={value as number | null | undefined}
                onChange={handleChange}
                className={`${error ? 'p-invalid' : ''} ${props.className || ''}`}
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