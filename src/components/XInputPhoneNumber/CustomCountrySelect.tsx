'use client';
import { CountryCode, getCountryCallingCode } from 'libphonenumber-js';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import React, { forwardRef } from 'react';
import "country-flag-icons/3x2/flags.css";
import { dropdownPT } from '@/primereact-tailwindcss/dropdown.pt';
import '../../styles/phoneNumber.css';
import { inputPhoneSelectorPT } from '@/primereact-tailwindcss/inputPhoneCodeSelector.pt';

// Tipos específicos para lo que espera react-phone-number-input
interface PhoneInputCountrySelectProps {
    value?: CountryCode;
    onChange: (value: CountryCode) => void;
    options: Array<{
        value?: CountryCode;
        label: string;
    }>;
    labels: Record<CountryCode, string>;
    disabled?: boolean;
    name?: string;
    tabIndex?: string | number;
}

const PrimeCountrySelect = forwardRef<HTMLSelectElement, PhoneInputCountrySelectProps>(
    ({ value, onChange, options, labels, disabled, name, tabIndex }, ref) => {
        // Transformar las opciones para PrimeReact
        const countries = options
            .filter((opt) => opt.value)
            .map((opt) => {
                const countryCode = opt.value!;
                const countryName = (labels?.[countryCode]) || opt.label || countryCode;


                return {
                    code: countryCode,
                    name: countryName,
                    callingCode: `+${getCountryCallingCode(countryCode)}`,
                    flagClass: `flag:${countryCode}`
                };
            });
        // Encontrar el país seleccionado
        const selectedCountry = countries.find(country => country.code === value) || null;

        // Template para mostrar las opciones
        const countryOptionTemplate = (option: typeof countries[0]) => (
            <div className="flex items-center gap-2 py-1">
                <span
                    className={option.flagClass}
                    style={{
                        width: '20px',
                        height: '15px',
                        borderRadius: '2px',
                        display: 'inline-block',
                        backgroundSize: 'cover'
                    }}
                />
                <span className="text-gray-700 font-medium">({option.callingCode})</span>
                <span className="text-gray-600">{option.name}</span>
            </div>
        );

        // Template para mostrar el valor seleccionado
        const selectedValueTemplate = (option: typeof countries[0] | null) => {
            if (!option) {
                return <span className="text-gray-400">Seleccione un país</span>;
            }

            return (
                <div className="flex items-center gap-2 py-1">
                    <span
                        className={option.flagClass}
                        style={{
                            width: '15.2381px',
                            height: '11.2px',
                            borderRadius: '2px',
                            border: '1px'
                        }}
                    />
                    <span className="text-[#A3A3A3] font-medium">{option.callingCode}</span>
                </div>
            );
        };

        const handleDropdownChange = (e: DropdownChangeEvent) => {
            const selectedCountryCode = e.value?.code;

            if (selectedCountryCode && onChange) {
                onChange(selectedCountryCode);
            }
        };

        return (
            <div className="country-select-wrapper">
                <Dropdown
                    value={selectedCountry}
                    options={countries}
                    onChange={handleDropdownChange}
                    optionLabel="name"
                    valueTemplate={selectedValueTemplate}
                    itemTemplate={countryOptionTemplate}
                    placeholder="Seleccione un país"
                    disabled={disabled}
                    filter
                    filterBy="name,callingCode"
                    filterPlaceholder="Buscar país..."
                    showClear={false}
                    emptyMessage="No se encontraron países"
                    emptyFilterMessage="No se encontraron países que coincidan"
                    // pt={inputPhoneSelectorPT}
                    pt={{
                        ...inputPhoneSelectorPT,
                        ...dropdownPT
                    }}
                />

                {/* Select oculto para compatibilidad con react-phone-number-input */}
                <select
                    ref={ref}
                    value={value || ''}
                    onChange={(e) => onChange(e.target.value as CountryCode)}
                    name={name}
                    tabIndex={tabIndex}
                    style={{ display: 'none' }}
                >
                    <option value="">Seleccione un país</option>
                    {options.map((option) => (
                        <option key={option.value || 'empty'} value={option.value || ''}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
);

PrimeCountrySelect.displayName = 'PrimeCountrySelect';

export default PrimeCountrySelect;
