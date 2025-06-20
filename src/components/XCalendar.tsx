import { configurePrimeReactLocale } from "@/config/primeLocale";
import { calendarPT } from "@/primereact-tailwindcss/calendar.pt";
import { Calendar, CalendarProps } from "primereact/calendar";
import { Nullable } from "primereact/ts-helpers";
import { FormEvent } from "react";
import { useController, useFormContext } from 'react-hook-form';

type XCalendarProps = {
    name: string;
    label?: string;
    labelRequired?: boolean;
    rules?: any;
    // validation?: (val: Nullable<Date>) => Nullable<Date>;
    validation?: {
        required?: string | boolean;
        minDate?: Date;
        maxDate?: Date;
    };
} & Omit<CalendarProps, 'name' | 'value' | 'onChange'>;

const XCalendar = ({
    name,
    label,
    labelRequired,
    rules,
    validation,
    ...props
}: XCalendarProps) => {

    const { control, trigger } = useFormContext();
    configurePrimeReactLocale();
    const {
        field: { value, onChange, ref, ...fieldProps },
        fieldState: { error }
    } = useController({
        name,
        control,
        rules: {
            ...rules,
            validate: {
                ...(validation?.required && {
                    required: (val: Nullable<Date>) =>
                        !!val || (typeof validation.required === 'string' ? validation.required : 'Campo requerido')
                }),
                ...(validation?.minDate && {
                    minDate: (val: Nullable<Date>) =>
                        !val || val >= validation.minDate! || `Fecha mínima: ${validation.minDate.toLocaleDateString()}`
                }),
                ...(validation?.maxDate && {
                    maxDate: (val: Nullable<Date>) =>
                        !val || val <= validation.maxDate! || `Fecha máxima: ${validation.maxDate.toLocaleDateString()}`
                })
            }
        },
        defaultValue: null as Nullable<Date>
    });

    const handleChange = (e: { value: Nullable<Date> }) => {
        if (e.value && !(e.value instanceof Date)) {
            return;
        }
        onChange(e.value);
        trigger(name);
    };

    return (
        <div className="flex flex-col gap-1">
            {label && (
                <label htmlFor={name} className={`font-medium ${error ? 'text-red-500' : ''}`}>
                    {label}
                    {labelRequired && <span className="text-red-500"> *</span>}
                </label>
            )}
            <Calendar
                {...fieldProps}
                {...props}
                id={name}
                name={name}
                ref={ref}
                value={value ?? ''}
                onChange={handleChange}
                className={`w-full ${error ? 'p-invalid' : ''} ${props.className || ''}`}
                aria-describedby={error ? `${name}-error` : undefined}
                locale="es"
                pt={calendarPT}
            />
            {error?.message && (
                <small id={`${name}-error`} className="text-xs text-red-500">
                    {error.message.toString()}
                </small>
            )}
        </div>
    )
}

export default XCalendar