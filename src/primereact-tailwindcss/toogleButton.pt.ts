import { classNames } from "primereact/utils";

export const toggleButtonPT = (hasError = false) => ({
    root: ({ props }) => ({
        className: classNames(
            'inline-flex cursor-pointer select-none items-center align-bottom text-center overflow-hidden relative',
            'px-4 py-3 rounded-md text-base w-36',
            'border transition duration-200 ease-in-out',
            {
                'bg-white  border-gray-300  text-gray-700  hover:bg-gray-100  hover:border-gray-300  hover:text-gray-700':
                    !props.checked,
                'bg-blue-500 border-blue-500 text-white hover:bg-blue-600 hover:border-blue-600': props.checked
            },
            { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled },
            hasError && 'border-red-500 animate-shake hover:border-red-500'
        )
    }),
    label: 'font-bold text-center w-full',
    icon: ({ props }) => ({
        className: classNames(' mr-2', {
            'text-gray-600': !props.checked,
            'text-white': props.checked
        })
    })
});