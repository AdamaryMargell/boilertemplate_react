'use client';
import { Knob, KnobProps } from 'primereact/knob';
import { useController, useFormContext } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';

type XKnobProps = {
    name: string;
    label?: string;
    labelRequired?: boolean;
    rules?: any;
    validation?: (val: number) => number;
    target?: (value: number) => void; // Nueva prop para onChange inmediato
} & Omit<KnobProps, 'name' | 'value' | 'onChange' | 'valueTemplate'> & {
    valueTemplate?: (value: string) => React.ReactNode;
};

const XKnob = ({
    name,
    label,
    labelRequired,
    rules,
    validation,
    valueTemplate,
    target,
    ...props
}: XKnobProps) => {
    const { control, trigger } = useFormContext();
    const knobRef = useRef<any>(null);
    const [isMounted, setIsMounted] = useState(false);
    const [localValue, setLocalValue] = useState<number>(0);

    const {
        field: { value, onChange },
        fieldState: { error }
    } = useController({
        name,
        control,
        rules,
        defaultValue: props.defaultValue ?? props.min ?? 0
    });
    useEffect(() => {
        setLocalValue(value);
    }, [value]);
    useEffect(() => {
        if (target && isMounted) {
            target(localValue);
        }
    }, [localValue, target, isMounted]);

    useEffect(() => {
        setIsMounted(true);

        if (knobRef.current) {
            knobRef.current.focus = () => {
                // No hay un método focus real para Knob, pero podemos destacarlo visualmente
                const element = document.getElementById(name);
                element?.classList.add('ring-2', 'ring-primary-500');
                setTimeout(() => {
                    element?.classList.remove('ring-2', 'ring-primary-500');
                }, 1000);
            };
        }

        return () => setIsMounted(false);
    }, [name]);

    if (!isMounted) return null;

    const handleChange = async (e: { value: number }) => {
        const newValue = validation ? validation(e.value) : e.value;
        setLocalValue(newValue);
        onChange(newValue);
        if (rules) {
            await trigger(name);
        }
    };

    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label className={`font-medium ${error ? 'text-red-500' : ''}`}>
                    {label}
                    {labelRequired && <span className="text-red-500"> *</span>}
                </label>
            )}

            <Knob
                {...props}
                ref={knobRef}
                id={name}
                value={localValue}
                onChange={handleChange}
                className={`${error ? 'p-invalid' : ''} ${props.className || ''}`}
            />
            {error?.message && (
                <small id={`${name}-error`} className="text-xs text-red-500">
                    {error.message.toString()}
                </small>
            )}
        </div>
    );
};

export default XKnob;