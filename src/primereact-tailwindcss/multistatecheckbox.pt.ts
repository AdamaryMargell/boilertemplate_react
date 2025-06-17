import { classNames } from "primereact/utils";

export const multistatecheckboxPT = (hasError = false) => ({
    root: {
        className: classNames('cursor-pointer inline-flex  relative select-none align-bottom', 'w-6 h-6')
    },
    checkbox: ({ props }) => ({
        className: classNames(
            'flex items-center justify-center ',
            'border-2 w-6 h-6 rounded-lg transition-colors duration-200',
            hasError && 'border-red-500 animate-shake hover:border-red-500 focus:shadow-[0_0_0_0.2rem_rgba(238,69,68,1)]',
            {
                'border-blue-500 text-white': props.value || !props.value,
                'border-gray-300 text-gray-600 bg-white': props.value == null
            },
            {
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]': !props.disabled,
                'cursor-default opacity-60': props.disabled
            }
        )
    })
});