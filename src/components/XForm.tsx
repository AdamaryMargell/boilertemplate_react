'use client';
import { ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm, UseFormProps, FieldValues } from "react-hook-form";

type FormProps<TFormValues extends FieldValues> = {
    children: ReactNode;
    onSubmit: SubmitHandler<TFormValues>;
    onInvalid?: SubmitHandler<TFormValues>;
    options?: UseFormProps<TFormValues>;
    className?: string;
    autoComplete?: 'on' | 'off';
}
export const XForm = <TFormValues extends FieldValues>({
    children,
    onSubmit,
    onInvalid = () => { },
    options,
    className,
    autoComplete = 'off'
}: FormProps<TFormValues>) => {
    const methods = useForm<TFormValues>(options);
    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit(onSubmit)}
                onInvalid={methods.handleSubmit(onInvalid)}
                className={`space-y-4 ${className || ''}`}
                autoComplete={autoComplete}
                noValidate
            >
                {children}
            </form>
        </FormProvider>
    )
}
