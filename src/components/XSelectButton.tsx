import { selectButtonPT } from "@/primereact-tailwindcss/selectButton.pt";
import { SelectButton, SelectButtonChangeEvent, SelectButtonProps } from "primereact/selectbutton";
import { useController, useFormContext } from 'react-hook-form';

type XSelectButtonProps = {
    name: string;
    label?: string;
    labelRequired?: boolean;
    description?: string;
    rules?: any;
    validation?: (val: any) => any;
} & Omit<SelectButtonProps, 'name' | 'value' | 'onChange'>;

const XSelectButton = ({
    name,
    label,
    labelRequired,
    description,
    rules,
    validation,
    ...props
}: XSelectButtonProps) => {
    const { control } = useFormContext();

    const {
        field: { value, onChange, ref, ...fieldProps },
        fieldState: { error }
    } = useController({
        name,
        control,
        rules,
        defaultValue: props.multiple ? [] : undefined
    });

    const handleChange = (event: SelectButtonChangeEvent) => {
        let newValue = event.value;

        if (validation) {
            newValue = validation(newValue);
        }

        onChange(newValue);
    };

    return (
        <div className="flex flex-col gap-2">
            {/* Label del campo */}
            {label && (
                <label
                    htmlFor={name}
                    className={`font-medium ${error ? 'text-red-500' : ''}`}
                >
                    {label}
                    {labelRequired && <span className="text-red-500"> *</span>}
                </label>
            )}
            {/* SelectButton */}
            <SelectButton
                {...fieldProps}
                {...props}
                id={name}
                name={name}
                ref={ref}
                value={value}
                onChange={handleChange}
                className={`${error ? 'p-invalid' : ''} ${props.className || ''}`}
                aria-describedby={error ? `${name}-error` : undefined}
                pt={selectButtonPT(!!error)}
            />

            {/* Mensaje de error */}
            {error?.message && (
                <small
                    id={`${name}-error`}
                    className="text-xs text-red-500"
                >
                    {error.message.toString()}
                </small>
            )}
        </div>
    );
};

export default XSelectButton;