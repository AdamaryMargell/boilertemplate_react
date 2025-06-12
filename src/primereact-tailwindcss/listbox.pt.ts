import { classNames } from "primereact/utils";

export const listboxPT = (hasError = false) => ({
    root: {
        className: classNames(
            'bg-white border border-gray-400 transition-colors duration-200 ease-in-out rounded-md w-full md:w-56',
            { 'border-red-500': hasError }
        )
    },
    wrapper: 'overflow-auto',
    list: 'py-3 list-none m-0',
    item: ({ context }) => ({
        className: classNames(
            'cursor-pointer font-normal overflow-hidden relative whitespace-nowrap',
            'm-0 p-3 border-0 transition-shadow duration-200 rounded-none',
            {
                'text-gray-700 hover:text-gray-700 hover:bg-gray-200': !context.focused && !context.selected,
                'bg-gray-300 text-gray-700 hover:text-gray-700 hover:bg-gray-200': context.focused && !context.selected,
                'bg-blue-100 text-blue-700': context.focused && context.selected,
                'bg-blue-50 text-blue-700': !context.focused && context.selected
            }
        )
    }),
    itemGroup: {
        className: classNames('m-0 p-3 text-gray-800 bg-white font-bold', 'cursor-auto')
    },
    header: {
        className: classNames('p-3 border-b border-gray-300 text-gray-700 bg-gray-100 mt-0 rounded-tl-lg rounded-tr-lg')
    },
    filterContainer: 'relative',
    filterInput: {
        root: {
            className: classNames(
                'pr-7 -mr-7',
                'w-full',
                'font-sans text-base text-gray-700 bg-white py-3 px-3 border border-gray-300 transition duration-200 rounded-lg appearance-none',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            )
        }
    },
    filterIcon: '-mt-2 absolute top-1/2'
});