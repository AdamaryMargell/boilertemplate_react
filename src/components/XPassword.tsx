'use client';
import { passwordPT } from '@/primereact-tailwindcss/password.pt';
import { Password, PasswordProps } from 'primereact/password';
import React from 'react'
import { useController, useFormContext } from 'react-hook-form';

type XPasswordProps = {
    name: string;
    label?: string;
    labelRequired?: boolean;
    rules?: any;
    validation?: (val: string) => string | boolean;
    feedback?: boolean;
    validateOnChange?: boolean; // Nuevo prop para control específico
} & Omit<PasswordProps, 'name' | 'value' | 'onChange' | 'feedback'>;

const XPassword = ({
    name,
    label,
    labelRequired,
    rules,
    validation,
    feedback = true,
    validateOnChange = true,
    ...props
}: XPasswordProps) => {
    const { control, trigger } = useFormContext();

    const combinedRules = React.useMemo(() => {
        if (validation) {
            return {
                ...rules,
                validate: validation
            };
        }
        return rules;
    }, [rules, validation]);

    const {
        field: { value, onChange, ref, ...fieldProps },
        fieldState: { error }
    } = useController({
        name,
        control,
        rules: combinedRules,
        defaultValue: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // const newValue = validation ? validation(e.target.value) : e.target.value;
        onChange(e.target.value);
        if (validateOnChange) {
            trigger(name);
        }
    };

    return (
        <div className="flex flex-col gap-1">
            {label && (
                <label htmlFor={name} className={`font-medium ${error ? 'text-red-500' : ''}`}>
                    {label}
                    {labelRequired && <span className="text-red-500"> *</span>}
                </label>
            )}
            <Password
                {...fieldProps}
                {...props}
                id={name}
                name={name}
                ref={ref}
                value={value ?? ''}
                onChange={handleChange}
                className={`w-full ${error ? 'p-invalid' : ''} ${props.className || ''}`}
                pt={passwordPT(!!error)}
                feedback={feedback}
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

export default XPassword;


