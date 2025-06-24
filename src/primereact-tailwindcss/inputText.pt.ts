import { classNames } from "primereact/utils";

export const inputTextPT = (hasError = false) => ({
    root: ({ props, context }) => ({
        className: classNames(
            'w-full py-2 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
            hasError && 'border-red-500 animate-shake hover:border-red-500',
            {
                'pl-8': context.iconPosition === 'left',
                'pr-8': props.iconPosition === 'right'
            }
        )
    })
});