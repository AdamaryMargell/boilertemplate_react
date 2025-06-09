import { classNames } from "primereact/utils";

export const progressbarPT = {
    progressbar: {
        root: {
            className: classNames(
                'overflow-hidden relative',
                'border-0 h-6 bg-gray-800 rounded-md'
            )
        },
        value: ({ props }) => ({
            className: classNames(
                'border-0 m-0 bg-blue-500',
                {
                    // Estilo para modo determinante
                    'transition-width duration-1000 ease-in-out h-full': props.mode !== 'indeterminate',

                    // Estilo para modo indeterminante
                    'absolute h-full': props.mode === 'indeterminate'
                }
            ),
            style: props.mode !== 'indeterminate' ? { width: `${props.value}%` } : undefined
        }),
        label: {
            className: classNames(
                'inline-flex text-white leading-6',
                'absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'
            )
        }
    }
};

