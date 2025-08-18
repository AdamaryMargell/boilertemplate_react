import { classNames } from "primereact/utils";

export const inputNumberPT = (hasError = false) => ({
    root: 'w-full inline-flex',
    input: {
        root: ({ context }) => ({
            className: classNames(
                'm-0',
                'font-sans text-base text-gray-600  bg-white border border-gray-300 p-2 transition-colors duration-200 appearance-none rounded-lg',
                'hover:border-blue-500 ',
                'focus:outline-none focus:!border-secondary-600 focus:shadow-[0_0_0.125rem_0_rgba(var(--secondary-600),0.5)] outline-none',
                { 'opacity-60 select-none pointer-events-none cursor-default': context.disabled },
                hasError && 'border-red-500 animate-shake hover:border-red-500'
            )
        })
    },
});