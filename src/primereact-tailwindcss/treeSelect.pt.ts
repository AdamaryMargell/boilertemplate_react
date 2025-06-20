import { classNames } from "primereact/utils";

const TRANSITIONS = {
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};

export const treeSelectPT = (hasError = false) => ({
    root: ({ props }) => ({
        className: classNames('inline-flex cursor-pointer select-none', 'bg-white border border-gray-400 transition-colors duration-200 ease-in-out rounded-md', 'w-full md:w-80', {
            'opacity-60 select-none pointer-events-none cursor-default': props?.disabled
        },
            hasError && 'border-red-500 animate-shake hover:border-red-500 focus:shadow-[0_0_0_0.2rem_rgba(238,69,68,1)]'
        )
    }),
    labelContainer: {
        className: classNames('overflow-hidden flex flex-auto cursor-pointer')
    },
    label: {
        className: classNames('block overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis', 'text-gray-800', 'p-3 transition duration-200')
    },
    trigger: {
        className: classNames('flex items-center justify-center shrink-0', 'bg-transparent text-gray-600 w-12 rounded-tr-lg rounded-br-lg')
    },
    panel: {
        className: classNames('bg-white text-gray-700 border-0 rounded-md shadow-lg')
    },
    wrapper: {
        className: classNames('max-h-[200px] overflow-auto', 'bg-white text-gray-700 border-0 rounded-md shadow-lg')
    },
    transition: TRANSITIONS.overlay
})