import { classNames } from "primereact/utils";

export const sliderPT = (hasError = false) => ({
    root: ({ props }) => ({
        className: classNames(
            'relative',
            'bg-gray-100 border-0 rounded-6',
            { 'h-1 w-56': props.orientation == 'horizontal', 'w-1 h-56': props.orientation == 'vertical' },
            { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled },
            hasError && '!bg-red-100 !border !border-red-500'
        )
    }),
    range: {
        className: classNames(
            'bg-blue-500 absolute block h-full',
            hasError && '!bg-red-500'
        )
    },
    handle: ({ props }) => ({
        className: classNames(
            'h-4 w-4 bg-white  border-2 border-blue-500 rounded-full transition duration-200',
            'cursor-grab touch-action-none block',
            'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]',
            'hover:bg-blue-500 hover:border hover:border-blue-500',
            {
                'top-[50%] mt-[-0.5715rem] ml-[-0.5715rem]': props.orientation == 'horizontal',
                'left-[50%] mb-[-0.5715rem] ml-[-0.4715rem]': props.orientation == 'vertical'
            },
            hasError && 'border-red-500 animate-shake hover:border-red-500'
        )
    })
});