import { RadioButton, RadioButtonChangeEvent, RadioButtonProps } from 'primereact/radiobutton';
import { useController, useFormContext } from 'react-hook-form';

interface RadioOption {
    label: string;
    value: any;
    disabled?: boolean;
}

type XRadioGroupProps = {
    name: string;
    label?: string;
    labelRequired?: boolean;
    options: RadioOption[];
    rules?: any;
    validation?: (val: any) => any;
    className?: string;
    layout?: 'vertical' | 'horizontal';
};

const XRadioButton = ({
    name,
    label,
    labelRequired,
    options,
    rules,
    validation,
    className = '',
    layout = 'vertical',
    ...props
}: XRadioGroupProps) => {
    const { control } = useFormContext();

    const {
        field: { value, onChange, ref, ...fieldProps },
        fieldState: { error }
    } = useController({
        name,
        control,
        rules,
        defaultValue: undefined
    });

    const handleChange = (event: RadioButtonChangeEvent) => {
        let newValue = event.value;

        if (validation) {
            newValue = validation(newValue);
        }

        onChange(newValue);
    };

    const containerClass = layout === 'horizontal'
        ? 'flex flex-wrap gap-4'
        : 'space-y-2';

    return (
        <div className={className}>
            {label && (
                <label className={`font-medium block mb-2 ${error ? 'text-red-500' : ''}`}>
                    {label}
                    {labelRequired && <span className="text-red-500"> *</span>}
                </label>
            )}
            <div
                className={containerClass}
                role="radiogroup"
                aria-labelledby={label ? `${name}-label` : undefined}
                aria-describedby={error ? `${name}-error` : undefined}
            >
                {options.map((option, index) => {
                    const optionId = `${name}-${index}`;
                    const isChecked = value === option.value;

                    return (
                        <div
                            key={optionId}
                            className="flex items-center gap-2"
                        >
                            <RadioButton
                                {...fieldProps}
                                {...props}
                                inputId={optionId}
                                name={name}
                                value={option.value}
                                checked={isChecked}
                                onChange={handleChange}
                                disabled={option.disabled}
                                className={`${error ? 'p-invalid' : ''}`}
                                inputRef={index === 0 ? ref : undefined}
                            />
                            <label
                                htmlFor={optionId}
                                className={`cursor-pointer ${error ? 'text-red-500' : ''} ${option.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {option.label}
                            </label>
                        </div>
                    );
                })}
            </div>

            {error?.message && (
                <small
                    id={`${name}-error`}
                    className="text-xs text-red-500 block mt-1"
                >
                    {error.message.toString()}
                </small>
            )}
        </div>
    );
};

export default XRadioButton;