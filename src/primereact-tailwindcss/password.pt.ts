import { classNames } from "primereact/utils";

const TRANSITIONS = {
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};

export const passwordPT = (hasError = false) => ({
    root: ({ props }) => ({
        className: classNames('relative', {
            'opacity-60 select-none pointer-events-none cursor-default': props.disabled
        })
    }),
    input: {
        className: classNames(
            'w-full border border-gray-300 rounded-md p-2 pr-10',
            'focus:border-primary-500 focus:ring-1 focus:ring-primary-500',
            {
                'border-red-500 hover:border-red-500 focus:border-red-500': hasError,
                'animate-shake': hasError
            }
        )
    },
    panel: 'p-5 bg-white ¿ text-gray-700 dark:text-white/80 shadow-md rounded-md',
    meter: 'mb-2 bg-gray-300 dark:bg-gray-700 h-3',
    meterlabel: ({ state, props }) => ({
        className: classNames(
            'transition-width duration-1000 ease-in-out h-full',
            {
                'bg-red-500': state.meter?.strength == 'weak',
                'bg-orange-500': state.meter?.strength == 'medium',
                'bg-green-500': state.meter?.strength == 'strong'
            },
            { 'pr-[2.5rem] ': props.toggleMask }
        )
    }),
    showicon: {
        className: classNames('absolute top-1/2 -mt-2', 'right-3 text-gray-600 ')
    },
    hideicon: {
        className: classNames('absolute top-1/2 -mt-2', 'right-3 text-gray-600')
    },
    inputIcon: {
        root: 'mt-0'
    },
    transition: TRANSITIONS.overlay
});