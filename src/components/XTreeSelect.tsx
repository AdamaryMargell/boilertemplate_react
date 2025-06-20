'use client';
import { TreeSelect, TreeSelectProps, TreeSelectChangeEvent } from 'primereact/treeselect';
import { useController, useFormContext } from 'react-hook-form';
import { useMemo } from 'react';
import { treeSelectPT } from '@/primereact-tailwindcss/treeSelect.pt';

type XTreeSelectValue = string | string[] | null | undefined;

type XTreeSelectProps = {
    name: string;
    label?: string;
    labelRequired?: boolean;
    rules?: any;
    validation?: (val: XTreeSelectValue) => string | boolean | undefined;
    multiple?: boolean;
} & Omit<TreeSelectProps, 'name' | 'selectionMode' | 'value' | 'onChange'>;

export const XTreeSelect = ({
    name,
    label,
    labelRequired,
    rules,
    validation,
    multiple = false,
    className,
    ...props
}: XTreeSelectProps) => {
    const { control, trigger } = useFormContext();

    const {
        field: { value, onChange, ref, ...fieldProps },
        fieldState: { error, isTouched, isDirty },
    } = useController({
        name,
        control,
        rules: {
            ...rules,
            validate: (val: XTreeSelectValue) => {
                if (validation) {
                    const result = validation(val);
                    if (typeof result === 'string') return result;
                    if (result === false) return 'Invalid selection';
                }
                return true;
            }
        },
        defaultValue: multiple ? [] : null,
    });

    const handleChange = (e: TreeSelectChangeEvent) => {
        onChange(e.value);
        // Disparar validación solo si el campo ha sido tocado
        if (isTouched || isDirty) {
            trigger(name);
        }
    };

    const selectionMode = useMemo(() => multiple ? 'multiple' : 'single', [multiple]);

    return (
        <div className="flex flex-col gap-1">
            {label && (
                <label htmlFor={name} className={`font-medium ${error ? 'text-red-500' : ''}`}>
                    {label}
                    {labelRequired && <span className="text-red-500"> *</span>}
                </label>
            )}

            <TreeSelect
                {...fieldProps}
                {...props}
                inputId={name}
                ref={ref}
                value={value}
                onChange={handleChange}
                selectionMode={selectionMode}
                className={`${error ? 'p-invalid' : ''} ${className || ''}`}
                aria-describedby={error ? `${name}-error` : undefined}
                pt={treeSelectPT(!!error)}
            />

            {error?.message && (
                <small id={`${name}-error`} className="text-xs text-red-500">
                    {error.message}
                </small>
            )}
        </div>
    );
};