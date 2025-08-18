import { classNames } from "primereact/utils";

export const selectButtonPT = (hasError = false) => ({
    root: ({ props }) => ({
        className: classNames({ 'opacity-60 select-none pointer-events-none cursor-default': props.disabled })
    }),
    button: ({ context }) => ({
        className: classNames(
            'inline-flex cursor-pointer select-none items-center align-bottom text-center overflow-hidden relative',
            'px-4 py-3',
            'transition duration-200 border border-r-0',
            'first:rounded-l-md first:rounded-tr-none first:rounded-br-none last:border-r last:rounded-tl-none last:rounded-bl-none last:rounded-r-md',
            'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]',
            {
                'bg-white text-gray-700 border-gray-300 hover:bg-gray-50': !context.selected,
                'bg-status-success-default border-blue-500 text-white hover:bg-blue-600': context.selected,
                'opacity-60 select-none pointer-events-none cursor-default': context.disabled
            },
            hasError && 'border-red-500 animate-shake hover:border-red-500'
        )
    }),
    label: 'font-bold'
});