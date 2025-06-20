import { classNames } from "primereact/utils";

export const inputMaskPT = (hasError = false) => ({
    root: ({ props, context }) => ({
        className: classNames(
            'm-0',
            'font-sans text-gray-600 bg-white border transition-colors duration-200 appearance-none rounded-lg',
            {
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]':
                    !context.disabled,
                'hover:border-blue-500': !props.invalid && !context.disabled,
                'opacity-60 select-none pointer-events-none cursor-default': context.disabled,
                'border-gray-300': !props.invalid,
                'border-red-500 hover:border-red-500/80 focus:border-red-500':
                    props.invalid && !context.disabled,
                'border-red-500/50': props.invalid && context.disabled,
            },
            {
                'text-lg px-4 py-4': props.size === 'large',
                'text-xs px-2 py-2': props.size === 'small',
                'p-3 text-base': !props.size || typeof props.size === 'number'
            },
            {
                'pl-8': context.iconPosition === 'left',
                'pr-8': props.iconPosition === 'right'
            },
            hasError && 'border-red-500 animate-shake hover:border-red-500'
        ),
    }),
});