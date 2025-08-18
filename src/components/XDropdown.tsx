import { dropdownPT } from "@/primereact-tailwindcss/dropdown.pt";
import { Dropdown, DropdownProps } from "primereact/dropdown";
import { useEffect, useRef, useState } from "react";
import { useController, useFormContext } from "react-hook-form";

type XDropDownProps = {
    name: string;
    label?: string;
    labelRequired?: boolean;
    rules?: any;
    validation?: (val: any) => any;
} & Omit<DropdownProps, 'name' | 'value' | 'onChange'>;

const XDropdown = ({
    name,
    label,
    labelRequired,
    rules,
    validation,
    ...props
}: XDropDownProps) => {

    const { control } = useFormContext();
    const dropdownRef = useRef<any>(null);
    const {
        field: { value, onChange, ref, ...fieldsProps },
        fieldState: { error }
    } = useController({
        name,
        control,
        rules,
        defaultValue: null
    });

    const handleChange = (event: { value: any }) => {
        console.log('Valor seleccionado:', event.value);
        const newValue = validation ? validation(event.value) : event.value;
        console.log('Valor después de validación:', newValue);
        onChange(newValue);
    };

    useEffect(() => {
        if (value === null || value === undefined || !props.options) return;

        const valueExists = props.options.some(option => {
            if (props.optionValue) {
                return option[props.optionValue] === value || option === value;
            }
            return option === value;
        });

        if (!valueExists) {
            onChange(null);
        }
    }, [props.options, props.optionValue, value, onChange]);

    return (
        <div className="flex flex-col gap-1">
            {label && (
                <label htmlFor={name} className={`font-medium ${error ? 'text-red-500' : ''}`}>
                    <span>{label}</span>
                    {labelRequired && <span className="text-red-500"> *</span>}
                </label>
            )}
            <Dropdown
                {...fieldsProps}
                {...props}
                ref={(el) => {
                    ref(el);
                    dropdownRef.current = el;
                }}
                id={name}
                name={name}
                value={value}
                aria-describedby={error ? `${name}-error` : undefined}
                onChange={handleChange}
                className={`${error ? 'p-invalid' : ''} ${props.className || ''}`}
                placeholder={value ? undefined : props.placeholder}
                showClear={!!value}
            />
            {error?.message && (
                <small id={`${name}-error`} className="text-[12px] text-red-500">
                    {error.message.toString()}
                </small>
            )}
        </div>
    )
}

export default XDropdown;
