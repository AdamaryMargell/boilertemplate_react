import { classNames } from "primereact/utils";

export const badgePT = {
    root: ({ props, context }: { props: any, context: any }) => {
        // Detectar si el badge tiene múltiples caracteres
        const value = props.value || '';
        const hasMultipleChars = value.toString().length > 1;

        return {
            className: classNames(
                'text-center inline-block',
                'font-medium',
                {
                    'text-white': props.severity !== 'contrast',
                    '!text-neutral-1200': props.severity === 'contrast',
                },
                {
                    'bg-neutral-700': props.severity == 'secondary',
                    'bg-status-success-default': props.severity == 'success',
                    'bg-status-error-default ': props.severity == 'danger',
                    'bg-status-information-default': props.severity == 'info',
                    'bg-status-warning-default': props.severity == 'warning',
                    'bg-white': props.severity == 'contrast',
                },
                {
                    // Tamaño large
                    'text-lg min-w-[1.8rem] h-[1.8rem] leading-[1.8rem] px-[6px]': props.size == 'large',

                    // Tamaño por defecto (small)
                    'text-sm min-w-[1.25rem] h-[1.25rem] leading-[1.25rem] px-[4px]': props.size == null,

                    // Tamaño normal (medium)
                    'text-md min-w-[1.5rem] h-[1.5rem] leading-[1.5rem] px-[6px]': props.size == 'normal',
                },
                {
                    // Border-radius para cada tamaño
                    'rounded-full':
                        (props.size == 'large' && !hasMultipleChars) ||
                        (props.size == null && !hasMultipleChars) ||
                        (props.size == 'normal' && !hasMultipleChars),

                    'rounded-[6px]':
                        (props.size == 'large' && hasMultipleChars) ||
                        (props.size == 'normal' && hasMultipleChars),

                    'rounded-[4px]': props.size == null && hasMultipleChars,
                }
            )
        };
    }
}