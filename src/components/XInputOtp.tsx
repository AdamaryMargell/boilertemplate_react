'use client';

import { InputOtp, InputOtpChangeEvent, InputOtpProps } from "primereact/inputotp";
import { useRef } from "react";
import { useController, useFormContext } from "react-hook-form";

type XInputOtpProps = {
    name: string;
    label?: string;
    labelRequired?: boolean;
    rules?: any;
    validation?: (val: number | null | string | undefined) => number | null | string | undefined;
} & Omit<InputOtpProps, 'name' | 'value' | 'onChange'>
const XInputOtp = ({
    name,
    label,
    labelRequired,
    rules,
    validation,
    ...props
}: XInputOtpProps) => {

    const { control } = useFormContext();
    const inputOtpRef = useRef<any>(null);

    const {
        field: { value, onChange, ref },
        fieldState: { error }
    } = useController({
        name,
        control,
        rules,
        defaultValue: null
    });

    const handleChange = (e: InputOtpChangeEvent) => {
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
            <InputOtp
                {...props}
                ref={(el) => {
                    ref(el);
                    inputOtpRef.current = el;
                }}
                id={name}
                value={value || ''}
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
    )
}

export default XInputOtp