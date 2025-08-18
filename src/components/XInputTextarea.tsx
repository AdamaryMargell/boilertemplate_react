import { InputTextarea, InputTextareaProps } from 'primereact/inputtextarea';
import { useController, useFormContext } from 'react-hook-form';
import XLabel from './XLabel';

type XInputTextareaProps = {
    name: string;
    label?: string;
    labelRequired?: boolean;
    rules?: any;
    validation?: (val: string) => string | null;
} & Omit<InputTextareaProps, 'name' | 'value' | 'onChange'>;

const XInputTextarea = ({
    name,
    label,
    labelRequired,
    rules,
    validation,
    ...props
}: XInputTextareaProps) => {
    const { control } = useFormContext();
    const {
        field: { value, onChange, ref, ...fieldProps },
        fieldState: { error }
    } = useController({
        name,
        control,
        rules,
        defaultValue: props.defaultValue || ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = validation ? validation(event.target.value) : event.target.value;
        onChange(newValue);

        if (props.onInput) {
            props.onInput(event);
        }
    };

    return (
        <div className="flex flex-col gap-1">
            {label && (
                <XLabel
                    htmlFor={name}
                    required={labelRequired}
                    error={!!error}
                >
                    {label}
                </XLabel>
            )}
            <InputTextarea
                {...fieldProps}
                {...props}
                id={name}
                name={name}
                ref={ref}
                value={value ?? ''}
                onChange={handleChange}
                className={`w-full ${error ? 'p-invalid' : ''} ${props.className || ''}`}
                aria-describedby={error ? `${name}-error` : undefined}
            />
            {error?.message && (
                <small id={`${name}-error`} className="text-[12px] text-red">
                    {error.message.toString()}
                </small>
            )}
        </div>
    )
}

export default XInputTextarea;