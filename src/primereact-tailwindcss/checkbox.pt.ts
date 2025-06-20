import { classNames } from "primereact/utils";

export const checkBoxPT = (hasError = false) => ({
    root: {
        className: classNames('cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6',)
    },
    input: {
        className: classNames('absolute appearance-none top-0 left-0 size-full p-0 m-0 opacity-0 z-10 outline-none cursor-pointer')
    },
    box: ({ props, context }) => ({
        className: classNames(
            'flex items-center justify-center',
            'border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200',
            {
                'border-gray-300 bg-white': !context.checked,
                'border-blue-500 bg-blue-500': context.checked
            },
            {
                'hover:border-blue-500  focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] ': !props.disabled,
                'cursor-default opacity-60': props.disabled
            },
            hasError && 'border-red-500 animate-shake hover:border-red-500'
        )
    }),
    icon: 'w-4 h-4 transition-all duration-200 text-white text-base'
})