import { classNames } from "primereact/utils";

// const TRANSITIONS = {
//     overlay: {
//         enterFromClass: 'opacity-0 scale-75',
//         enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
//         leaveActiveClass: 'transition-opacity duration-150 ease-linear',
//         leaveToClass: 'opacity-0'
//     }
// };
// export const mentionPT = (hasError = false) => ({
//     root: 'relative',
//     input: classNames(
//         'w-full !bg-red-500',
//         hasError && 'border-red-500 animate-shake hover:border-red-500'
//     ),
//     panel:
//         'max-h-[200px] overflow-auto bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 border-0 rounded-md shadow-lg',
//     items: 'py-3 list-none m-0',
//     item:
//         'cursor-pointer font-normal overflow-hidden relative whitespace-nowrap m-0 p-3 border-0 transition-shadow duration-200 rounded-none dark:text-white/80 dark:hover:bg-gray-800 hover:text-gray-700 hover:bg-gray-200',
//     transition: TRANSITIONS.overlay,
// });

const TRANSITIONS = {
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};

export const mentionPT = (hasError = false) => ({
    root: {
        className: 'relative'
    },
    input: {
        className: classNames(
            'w-full border border-gray-300 rounded-md p-2',
            'focus:border-primary-500 focus:ring-1 focus:ring-primary-500',
            {
                'border-red-500 hover:border-red-500 focus:border-red-500': hasError,
                'animate-shake': hasError
            }
        )
    },
    panel: {
        className: 'max-h-[200px] overflow-auto bg-white text-gray-700 border border-gray-300 rounded-md shadow-lg mt-1' // Añadido borde al panel
    },
    items: {
        className: 'py-3 list-none m-0'
    },
    item: {
        className: 'cursor-pointer font-normal overflow-hidden relative whitespace-nowrap m-0 p-3 border-0 transition-shadow duration-200 rounded-none hover:text-gray-700 hover:bg-gray-200'
    },
    transition: TRANSITIONS.overlay
});
