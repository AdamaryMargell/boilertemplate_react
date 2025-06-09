import { classNames } from "primereact/utils";

export const chipsPT = (hasError = false) => ({
    root: ({ props }) => ({
        className: classNames('flex', {
            'opacity-60 select-none pointer-events-none cursor-default': props.disabled,
        })
    }),
    container: {
        className: classNames(
            'm-0 py-1.5 px-3 list-none cursor-text overflow-hidden flex items-center flex-wrap',
            'w-full',
            'font-sans text-base text-gray-600  bg-white p-3 border border-gray-300  transition-colors duration-200 appearance-none rounded-lg',
            'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]',
            hasError && 'border-red-500 animate-shake hover:border-red-500 focus:shadow-[0_0_0_0.2rem_rgba(238,69,68,1)]'
        )
    },
    inputToken: {
        className: classNames('py-1.5 px-0', 'flex flex-1 inline-flex')
    },
    input: {
        className: classNames('font-sans text-base text-gray-700  p-0 m-0', 'border-0 outline-none bg-transparent shadow-none rounded-none w-full')
    },
    token: {
        className: classNames('py-1 px-2 mr-2 bg-gray-300  text-gray-700  rounded-full', 'cursor-default inline-flex items-center')
    },
    removeTokenIcon: 'ml-2'
});