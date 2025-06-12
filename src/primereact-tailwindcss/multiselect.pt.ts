import { classNames } from "primereact/utils";

const TRANSITIONS = {
    overlay: {
        timeout: 150,
        classNames: {
            enter: 'opacity-0 scale-75',
            enterActive: 'opacity-100 !scale-100 transition-transform transition-opacity duration-150 ease-in',
            exit: 'opacity-100',
            exitActive: '!opacity-0 transition-opacity duration-150 ease-linear'
        }
    }
};

export const multiselectPT = (hasError = false) => ({
    root: ({ props }) => ({
        className: classNames('inline-flex cursor-pointer select-none', 'bg-white border border-gray-400   transition-colors duration-200 ease-in-out rounded-md', 'w-full md:w-80', {
            'opacity-60 select-none pointer-events-none cursor-default': props.disabled
        }, hasError && 'border-red-500 animate-shake hover:border-red-500 focus:shadow-[0_0_0_0.2rem_rgba(238,69,68,1)]')
    }),
    labelContainer: 'overflow-hidden flex flex-auto cursor-pointer',
    label: ({ props }) => ({
        className: classNames('block overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis', 'text-gray-800', 'p-3 transition duration-200', {
            '!p-3': props.display !== 'chip' && (props.value == null || props.value == undefined),
            '!py-1.5 px-3': props.display === 'chip' && props.value !== null
        })
    }),
    token: {
        className: classNames('py-1 px-2 mr-2 bg-gray-300 text-gray-700 rounded-full', 'cursor-default inline-flex items-center')
    },
    removeTokenIcon: 'ml-2',
    trigger: {
        className: classNames('flex items-center justify-center shrink-0', 'bg-transparent text-gray-600 w-12 rounded-tr-lg rounded-br-lg')
    },
    panel: {
        className: classNames('bg-white text-gray-700 border-0 rounded-md shadow-lg')
    },
    header: {
        className: classNames('p-3 border-b border-gray-300 text-gray-700 bg-gray-100 rounded-t-lg', 'flex items-center justify-between')
    },
    headerCheckboxContainer: {
        className: classNames('inline-flex cursor-pointer select-none align-bottom relative', 'mr-2', 'w-6 h-6')
    },
    headerCheckbox: {
        root: ({ props }) => ({
            className: classNames(
                'flex items-center justify-center',
                'border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]',
                {
                    'border-gray-300 bg-white': !props?.checked,
                    'border-blue-500 bg-blue-500': props?.checked
                }
            )
        })
    },
    headerCheckboxIcon: 'w-4 h-4 transition-all duration-200 text-white text-base',
    closeButton: {
        className: classNames(
            'flex items-center justify-center overflow-hidden relative',
            'w-8 h-8 text-gray-500 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mr-2 last:mr-0',
            'hover:text-gray-700  hover:border-transparent hover:bg-gray-200',
            'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
        )
    },
    closeIcon: 'w-4 h-4 inline-block',
    wrapper: {
        className: classNames('max-h-[200px] overflow-auto', 'bg-white text-gray-700 border-0 rounded-md shadow-lg')
    },
    list: 'py-3 list-none m-0',
    item: ({ context }) => ({
        className: classNames('cursor-pointer font-normal overflow-hidden relative whitespace-nowrap', 'm-0 p-3 border-0  transition-shadow duration-200 rounded-none', {
            'text-gray-700 hover:text-gray-700 hover:bg-gray-200': !context.focused && !context.selected,
            'bg-gray-300 text-gray-700 hover:text-gray-700 hover:bg-gray-200': context.focused && !context.selected,
            'bg-blue-100 text-blue-700': context.focused && context.selected,
            'bg-blue-50 text-blue-700': !context.focused && context.selected
        })
    }),
    checkboxContainer: {
        className: classNames('inline-flex cursor-pointer select-none align-bottom relative', 'mr-2', 'w-6 h-6')
    },
    checkbox: ({ context }) => ({
        className: classNames(
            'flex items-center justify-center',
            'border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200',
            'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]',
            {
                'border-gray-300 bg-white': !context?.selected,
                'border-blue-500 bg-blue-500': context?.selected
            }
        )
    }),
    checkboxIcon: 'w-4 h-4 transition-all duration-200 text-white text-base',
    itemGroup: {
        className: classNames('m-0 p-3 text-gray-800 bg-white font-bold', 'cursor-auto')
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
    filterIcon: '-mt-2 absolute top-1/2',
    clearIcon: 'text-gray-500 right-12 -mt-2 absolute top-1/2',
    transition: TRANSITIONS.overlay
});