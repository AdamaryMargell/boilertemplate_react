'use client';
import { forwardRef, useEffect, useState } from 'react';
import { CountryCode, getCountryCallingCode, parsePhoneNumber } from 'libphonenumber-js';
import { InputText } from 'primereact/inputtext';
import { inputPhoneSelectorPT } from '@/primereact-tailwindcss/inputPhoneCodeSelector.pt';

interface CustomPhoneInputProps {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    country?: CountryCode;
    [key: string]: any;
}

export const CustomPhoneInput = forwardRef<HTMLInputElement, CustomPhoneInputProps>(
    ({ value, onChange, country, ...props }, ref) => {
        const [nationalNumber, setNationalNumber] = useState('');

        useEffect(() => {
            if (value && country) {
                try {
                    // Parsear el número completo para extraer solo la parte nacional
                    const phoneNumber = parsePhoneNumber(value, country);
                    if (phoneNumber) {
                        setNationalNumber(phoneNumber.nationalNumber);
                    }
                } catch (error) {
                    // Si falla el parsing, intentar extraer manualmente
                    const countryCode = `+${getCountryCallingCode(country)}`;
                    if (value.startsWith(countryCode)) {
                        const national = value.substring(countryCode.length).trim();
                        setNationalNumber(national);
                    } else {
                        // Remover cualquier código de país que pueda estar presente
                        const cleaned = value.replace(/^\+\d+\s?/, '');
                        setNationalNumber(cleaned);
                    }
                }
            } else if (value) {
                // Si no hay país seleccionado, limpiar códigos de país
                const cleaned = value.replace(/^\+\d+\s?/, '');
                setNationalNumber(cleaned);
            } else {
                setNationalNumber('');
            }
        }, [value, country]);

        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const inputValue = e.target.value;

            // Solo permite números, espacios y guiones para el número nacional
            const cleanValue = inputValue.replace(/[^\d\s()-]/g, '');

            setNationalNumber(cleanValue);

            if (onChange && country) {
                // Construir el número completo con el código de país
                const countryCode = `+${getCountryCallingCode(country)}`;
                const fullValue = cleanValue ? `${countryCode}${cleanValue}` : '';

                // Crear un evento simulado con el valor completo
                const syntheticEvent = {
                    ...e,
                    target: {
                        ...e.target,
                        value: fullValue
                    }
                } as React.ChangeEvent<HTMLInputElement>;

                onChange(syntheticEvent);
            } else if (onChange) {
                // Si no hay país, solo pasar el valor limpio
                const syntheticEvent = {
                    ...e,
                    target: {
                        ...e.target,
                        value: cleanValue
                    }
                } as React.ChangeEvent<HTMLInputElement>;
                onChange(syntheticEvent);
            }
        };


        return (
            <InputText
                {...props}
                ref={ref}
                type="tel"
                value={nationalNumber}
                onChange={handleInputChange}
                placeholder="Número de teléfono"
                className={`w-full px-[6px] border border-none outline-none text-sm font-normal`}
            />
        );
    }
);
