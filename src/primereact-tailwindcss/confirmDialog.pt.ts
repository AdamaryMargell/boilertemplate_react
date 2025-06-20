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

export const confirmDialogPT = {
    // root: ({ props }) => ({
    //     className: classNames(
    //         'bg-white text-gray-700 border border-gray-300 rounded-md shadow-xl',
    //         'z-[9999] transform origin-top',
    //         // Posicionamiento dinámico
    //         'absolute',
    //         // Separación del botón
    //         'mt-1',
    //         // Flecha personalizada
    //         'before:absolute before:w-0 before:-top-2 before:left-6 before:h-0',
    //         'before:border-l-8 before:border-r-8 before:border-b-8',
    //         'before:border-l-transparent before:border-r-transparent before:border-b-white',
    //         // Sombra para la flecha
    //         'after:absolute after:w-0 after:-top-3 after:left-6 after:h-0',
    //         'after:border-l-8 after:border-r-8 after:border-b-8',
    //         'after:border-l-transparent after:border-r-transparent after:border-b-gray-300'
    //     )
    // }),
    // content: 'p-4 items-center flex',
    // icon: 'text-2xl text-orange-500',
    // message: 'ml-3 text-sm',
    // footer: 'px-4 py-3 pt-2 flex justify-end gap-2',
    // acceptButton: 'p-button-sm p-button-danger',
    // rejectButton: 'p-button-sm p-button-outlined p-button-secondary',
    // transition: TRANSITIONS.overlay

    root: ({ props }) => ({
        className: classNames(
            'bg-white text-gray-700 border border-gray-300 rounded-md shadow-xl',
            'z-[9999]',
            // Cambiar de centrado a posición personalizada
            '!relative !transform-none !top-auto !left-auto',
            'w-auto max-w-md'
        )
    }),
    mask: {
        className: classNames(
            'bg-black bg-opacity-40',
            'fixed top-0 left-0 w-full h-full',
            'z-[9998]'
        )
    },
    content: 'p-4 items-center flex',
    icon: 'text-2xl text-orange-500',
    message: 'ml-3 text-sm',
    footer: 'px-4 py-3 pt-2 flex justify-end gap-2',
    acceptButton: 'p-button-sm p-button-danger',
    rejectButton: 'p-button-sm p-button-outlined p-button-secondary',
    transition: TRANSITIONS.overlay
}