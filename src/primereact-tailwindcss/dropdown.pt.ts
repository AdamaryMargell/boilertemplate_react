import { classNames } from "primereact/utils";

const TRANSITIONS = {
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
export const dropdownPT = (hasError = false) => ({
    root: ({ props }) => ({
        className: classNames(
            'cursor-pointer inline-flex relative select-none',
            'bg-with border border-gray-400 transition-colors duration-200 ease-in-out rounded-md',
            'w-full md:w-56',
            'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]',
            { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled },
            hasError && 'border-red-500 animate-shake hover:border-red-500 focus:shadow-[0_0_0_0.2rem_rgba(238,69,68,1)]'

        )
    }),
    input: ({ props }) => ({
        className: classNames(
            'cursor-pointer block flex flex-auto overflow-hidden overflow-ellipsis whitespace-nowrap relative',
            'bg-transparent border-0 text-gray-800',
            'p-3 transition duration-200 bg-transparent rounded appearance-none font-sans text-base',
            'focus:outline-none focus:shadow-none',
            { 'pr-7': props.showClear }
        )
    }),
    trigger: {
        className: classNames('flex items-center justify-center shrink-0', 'bg-transparent text-gray-500 w-12 rounded-tr-lg rounded-br-lg')
    },
    wrapper: {
        className: classNames('max-h-[200px] overflow-auto', 'bg-white text-gray-700 border-0 rounded-md shadow-lg')
    },
    list: 'py-3 list-none m-0',
    item: ({ context }) => ({
        className: classNames(
            'cursor-pointer font-normal overflow-hidden relative whitespace-nowrap',
            'm-0 p-3 border-0  transition-shadow duration-200 rounded-none',
            'hover:text-gray-700 hover:bg-gray-200',
            {
                'text-gray-700': !context.focused && !context.selected,
                'bg-gray-300 text-gray-700': context.focused && !context.selected,
                'bg-blue-400 text-blue-700': context.focused && context.selected,
                'bg-blue-50 text-blue-700': !context.focused && context.selected,
                'opacity-60 select-none pointer-events-none cursor-default': context.disabled
            }
        )
    }),
    itemgroup: {
        className: classNames('m-0 p-3 text-gray-800 bg-white font-bold', 'cursor-auto')
    },
    header: {
        className: classNames('p-3 border-b border-gray-300 text-gray-700 bg-gray-100 mt-0 rounded-tl-lg rounded-tr-lg')
    },
    filtercontainer: 'relative',
    filterinput: {
        className: classNames(
            'pr-7 -mr-7',
            'w-full',
            'font-sans text-base text-gray-700 bg-white py-3 px-3 border border-gray-300 transition duration-200 rounded-lg appearance-none',
            'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
        )
    },
    filtericon: '-mt-2 absolute top-1/2',
    clearicon: 'text-gray-500 right-12 -mt-2 absolute top-1/2',
    transition: TRANSITIONS.overlay
});