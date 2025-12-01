"use client";
import { useEffect, useState } from 'react';
import PhoneInput, { getCountryCallingCode } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import "country-flag-icons/3x2/flags.css";
import PrimeCountrySelect from '@/components/XInputPhoneNumber/CustomCountrySelect';
import { CustomPhoneInput } from '@/components/XInputPhoneNumber/CustomInput';
import { CountryCode } from "libphonenumber-js";
import { useController, useFormContext } from 'react-hook-form';

type XInputPhoneCodeSelectorProps = {
    name: string;
    label?: string;
    labelRequired?: boolean;
    rules?: any;
    validation?: (val: string) => string;
    defaultCountry?: CountryCode;
}

const XInputPhoneCodeSelector = ({
    name,
    label,
    labelRequired,
    rules,
    validation,
    defaultCountry = 'BO'
}: XInputPhoneCodeSelectorProps) => {
    const { control } = useFormContext();
    const {
        field: { value, onChange, ref, ...fieldProps },
        fieldState: { error: fieldError }
    } = useController({
        name,
        control,
        rules,
        defaultValue: ''
    });

    const [country, setCountry] = useState<CountryCode>(defaultCountry);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        // Solo actualizar country después de la hidratación
        if (defaultCountry !== country) {
            setCountry(defaultCountry);
        }
    }, [defaultCountry]);

    const handleChange = (phoneValue?: string) => {
        if (validation) {
            const validatedValue = validation(phoneValue || '');
            onChange(validatedValue);
        } else {
            onChange(phoneValue);
        }
    };

    const handleCountryChange = (newCountry: CountryCode) => {
        setCountry(newCountry);
        // Si hay un valor actual, mantener el número pero cambiar el código de país
        if (value) {
            const nationalNumber = value.replace(/^\+\d+/, '');
            const newValue = newCountry ? `+${getCountryCallingCode(newCountry)}${nationalNumber}` : nationalNumber;
            onChange(newValue);
        }
    };

    // Renderizar placeholder durante SSR
    if (!isClient) {
        return (
            <div className="flex flex-col gap-1">
                {label && (
                    <label htmlFor={name} className={`font-medium ${fieldError ? 'text-status-error-default' : ''}`}>
                        {label}
                        {labelRequired && <span className="text-status-error-default"> *</span>}
                    </label>
                )}
                <div className="w-[260px] h-[50px] px-[16px] py-[10px] border rounded-md border-gray-300 bg-gray-50">
                    <div className="flex items-center h-full">
                        <div className="w-8 h-6 bg-gray-200 rounded mr-2 animate-pulse"></div>
                        <div className="flex-1 h-4 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                </div>
                {fieldError?.message && (
                    <small id={`${name}-error`} className="text-xs text-status-error-default">
                        {fieldError.message}
                    </small>
                )}
            </div>
        );
    }


    const containerClasses = `
    w-full min-w-[200px] max-w-full
    py-[0.625rem] sm:py-[0.313rem] md:py-[0.375rem]
    px-[1rem] sm:px-[0.5rem] md:px-[0.75rem]
    h-11
    border rounded-md
    ${fieldError ? 'border-status-error-default' : 'border-gray-300'}
    focus-within:border-neutral-900 transition-colors duration-200
    text-sm
    flex items-center
    overflow-hidden
`.trim();

    return (
        <div className="flex flex-col gap-1">
            {label && (
                <label htmlFor={name} className={`font-medium ${fieldError ? 'text-status-error-default' : ''}`}>
                    {label}
                    {labelRequired && <span className="text-status-error-default"> *</span>}
                </label>
            )}
            {/* <div className={`w-[260px] h-[50px] px-[16px] py-[10px] gap-[0.625rem] border rounded-md ${fieldError ? 'border-red-500' : 'border-gray-300'} focus-within:border-[#686868] transition-colors duration-200`} suppressHydrationWarning={true}> */}
            <div
                className={containerClasses}
            >
                <PhoneInput
                    {...fieldProps}
                    inputRef={ref}
                    value={value}
                    onChange={handleChange}
                    defaultCountry={country}
                    country={country}
                    onCountryChange={handleCountryChange}
                    countrySelectComponent={PrimeCountrySelect}
                    inputComponent={CustomPhoneInput}
                    international={false}
                    withCountryCallingCode={false}
                    className="!border-none !ring-0 p-0"
                />
            </div>

            {
                fieldError?.message && (
                    <small id={`${name}-error`} className="text-xs text-status-error-default">
                        {fieldError.message}
                    </small>
                )
            }
        </div >
    );
};

export default XInputPhoneCodeSelector;