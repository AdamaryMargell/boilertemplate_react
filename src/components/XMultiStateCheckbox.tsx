'use client';

import { MultiStateCheckbox, MultiStateCheckboxChangeEvent, MultiStateCheckboxProps } from 'primereact/multistatecheckbox';
import { useController, useFormContext } from 'react-hook-form';
import { ReactNode, useMemo } from 'react';
import { multistatecheckboxPT } from '@/primereact-tailwindcss/multistatecheckbox.pt';

type XMultiStateCheckboxProps = {
    name: string;
    label?: string;
    labelRequired?: boolean;
    rules?: any;
    validation?: (val: any) => any;
    options?: {
        value: any;
        icon?: ReactNode | string;
        style?: React.CSSProperties;
    }[];
    defaultValue?: any;
} & Omit<MultiStateCheckboxProps, 'options' | 'value' | 'onChange'>;

const XMultiStateCheckbox = ({
    name,
    label,
    labelRequired,
    rules,
    validation,
    options = [],
    defaultValue,
    ...props
}: XMultiStateCheckboxProps) => {
    const { control } = useFormContext();

    const initialValue = useMemo(() => {
        if (defaultValue !== undefined) return defaultValue;
        if (props.unselectable) return null;
        if (options.length > 0) return options[0].value;
        return false;
    }, [defaultValue, props.unselectable, options]);

    const {
        field: { value, onChange, ref, ...fieldProps },
        fieldState: { error }
    } = useController({
        name,
        control,
        rules,
        defaultValue: initialValue
    });

    const handleChange = (event: MultiStateCheckboxChangeEvent) => {
        let newValue;

        if (event.value && typeof event.value === 'object' && 'value' in event.value) {
            newValue = event.value.value;
        } else {
            newValue = event.value;
        }

        const finalValue = validation ? validation(newValue) : newValue;
        onChange(finalValue);
    };

    const processedOptions = useMemo(() => {
        return options.map(option => ({
            value: option.value,
            icon: typeof option.icon === 'string' ? option.icon : option.icon,
            style: option.style
        }));
    }, [options]);

    const currentValue = useMemo(() => {
        const matchingOption = options.find(opt => opt.value === value);
        return matchingOption ? matchingOption.value : value;
    }, [value, options]);



    return (
        <div className="flex flex-col gap-1">
            {label && (
                <label htmlFor={name} className={`font-medium ${error ? 'text-red-500' : ''}`}>
                    {label}
                    {labelRequired && <span className="text-red-500"> *</span>}
                </label>
            )}

            <div className='flex'>
                <MultiStateCheckbox
                    id={name}
                    ref={ref}
                    value={currentValue}
                    options={processedOptions}
                    onChange={handleChange}
                    optionValue="value"
                    pt={multistatecheckboxPT(!!error)}
                    {...fieldProps}
                    {...props}
                />
                <span className="pl-4">
                    {value !== null && value !== undefined ? String(value) : 'no value'}
                </span>
            </div>

            {error?.message && (
                <small className="text-red-500 block mt-1">
                    {String(error.message)}
                </small>
            )}
        </div>
    );
};

export default XMultiStateCheckbox;