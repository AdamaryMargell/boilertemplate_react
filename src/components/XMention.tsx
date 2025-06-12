import { mentionPT } from '@/primereact-tailwindcss/mention.pt';
import { Mention, MentionProps } from 'primereact/mention';
import { useRef } from 'react';
import { useController, useFormContext } from 'react-hook-form';

type XMentionProps = {
    name: string;
    label?: string;
    labelRequired?: boolean;
    rules?: any;
    validation?: (val: string) => string;
} & Omit<MentionProps, 'name' | 'value' | 'onChange'>;
const XMention = ({
    name,
    label,
    labelRequired,
    rules,
    validation,
    ...props
}: XMentionProps) => {
    const { control } = useFormContext();
    const mentionRef = useRef<any>(null);
    const {
        field: { value, onChange, ref, ...fieldProps },
        fieldState: { error }
    } = useController({
        name,
        control,
        rules,
        defaultValue: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = validation ? validation(event.target.value) : event.target.value;
        onChange(newValue);
    };


    return (
        <div className="flex flex-col gap-1">
            {label && (
                <label htmlFor={name} className={`font-medium ${error ? 'text-red-500' : ''}`}>
                    {label}
                    {labelRequired && <span className="text-red-500"> *</span>}
                </label>
            )}
            <Mention
                {...fieldProps}
                {...props}
                id={name}
                name={name}
                ref={(el) => {
                    ref(el);
                    mentionRef.current = el;
                }}
                value={value ?? ''}
                onChange={handleChange}
                className={`w-full ${error ? 'p-invalid' : ''} ${props.className || ''}`}
                aria-describedby={error ? `${name}-error` : undefined}
                pt={mentionPT(!!error)}
            />
            {error?.message && (
                <small id={`${name}-error`} className="text-xs text-red-500">
                    {error.message.toString()}
                </small>
            )}
        </div>)
}

export default XMention