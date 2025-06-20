'use client';
import { autoCompletePT } from "@/primereact-tailwindcss/autoComplete.pt";
import { AutoComplete, AutoCompleteProps } from "primereact/autocomplete";
import { useRef, useState } from "react";
import { useController, useFormContext } from "react-hook-form";

type XAutoCompleteProps = {
    name: string;
    label?: string;
    labelRequired?: boolean;
    rules?: any;
    validation?: (vay: any) => any;
} & Omit<AutoCompleteProps, 'name' | 'value' | 'onChange'>;

export const XAutoComplete = ({
    name,
    label,
    labelRequired,
    rules,
    validation,
    ...props
}: XAutoCompleteProps) => {
    const { control } = useFormContext();
    const [filteredItems, setFilteredItems] = useState<any[]>([]);
    const autoCompleteRef = useRef<any>(null);
    const {
        field: { value, onChange, ref, ...fieldsProps },
        fieldState: { error }
    } = useController({
        name,
        control,
        rules,
        defaultValue: null
    });

    const searchItems = (event: { query: string }) => {
        if (!props.suggestions || event.query.length < 1) {
            setFilteredItems([]);
            return;
        }

        const query = event.query.toLowerCase();
        const filtered = props.suggestions.filter(item => {
            const itemValue = props.itemLabel && typeof item === 'object'
                ? item[props.itemLabel]
                : item;
            return String(itemValue).toLowerCase().includes(query);
        });

        setFilteredItems(filtered);
    };

    const handleChange = (event: { value: any }) => {
        const newValue = validation ? validation(event.value) : event.value;
        onChange(newValue);
    };


    return (
        <div className="flex flex-col gap-1">
            {label && (
                <label htmlFor={name} className={`font-medium ${error ? 'text-red-500' : ''}`}>
                    <span>{label}</span>
                    {labelRequired && <span className="text-red-500"> *</span>}
                </label>
            )}

            <AutoComplete
                {...fieldsProps}
                {...props}
                ref={(el) => {
                    ref(el);
                    autoCompleteRef.current = el;
                }}
                id={name}
                name={name}
                value={value}
                suggestions={filteredItems}
                completeMethod={searchItems}
                onChange={handleChange}
                className={`w-full ${error ? 'p-invalid' : ''} ${props.className || ''}`}
                aria-describedby={error ? `${name}-error` : undefined}
                pt={autoCompletePT(!!error)}
            />

            {error?.message && (
                <small id={`${name}-error`} className="text-xs text-red-500">
                    {error.message.toString()}
                </small>
            )}
        </div>
    );
};