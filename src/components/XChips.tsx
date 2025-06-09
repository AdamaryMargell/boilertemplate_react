'use client';

import { chipsPT } from "@/primereact-tailwindcss/chips.pt";
import { Chip } from "primereact/chip";
import { Chips, ChipsChangeEvent, ChipsProps } from "primereact/chips";
import { useController, useFormContext } from "react-hook-form";

type XChipsProps = {
    name: string;
    label?: string;
    labelRequired?: boolean;
    rules?: any;
    validation?: (val: string[]) => string[];
} & Omit<ChipsProps, 'name' | 'value' | 'onChange'>;

export const XChips = ({
    name,
    label,
    labelRequired,
    rules,
    validation,
    ...props
}: XChipsProps) => {
    const { control } = useFormContext();
    const {
        field: { value, onChange, ref, ...fieldProps },
        fieldState: { error }
    } = useController({
        name,
        control,
        rules,
        defaultValue: []
    });

    const handleChange = (e: ChipsChangeEvent) => {
        const chipValue = e.value ?? [];
        const newValue = validation ? validation(chipValue) : chipValue;
        onChange(newValue);
    };

    // const pt = chipsPT(error);

    return (
        <div className="flex flex-col gap-1">
            {label && (
                <label htmlFor={name} className={`font-medium ${error ? 'text-red-500' : ''}`}>
                    {label}
                    {labelRequired && <span className="text-red-500"> *</span>}
                </label>
            )}
            <Chips
                {...fieldProps}
                {...props}
                id={name}
                name={name}
                value={Array.isArray(value) ? value : []}
                ref={ref}
                onChange={handleChange}
                pt={chipsPT(!!error)}
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
