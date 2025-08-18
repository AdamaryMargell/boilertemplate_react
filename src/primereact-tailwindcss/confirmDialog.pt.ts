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

    root: ({ props }) => ({
        className: classNames(
            'bg-white text-gray-700 border  rounded-[16px] shadow-xl',
            'z-[9999]',
            'w-[500px] h-[408px]',
            'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
            'flex flex-col'
            // Cambiar de centrado a posición personalizada
            // '!relative !transform-none !top-auto !left-auto',
            // 'w-auto max-w-md'
        )
    }),
    header: {
        className: classNames(
            'h-[65px] w-full',
            'pt-[48px] pr-[24px] pb-[24px] pl-[24px]',
            'flex items-center justify-center',
        )
    },
    mask: {
        className: classNames(
            'bg-black bg-opacity-40',
            'fixed top-0 left-0 w-full h-full',
            'z-[9998]'
        )
    },

    content: {
        className: classNames(
            // Content area que contiene ícono y mensaje
            'flex-1 flex flex-col items-center justify-center',
            'pb-[24px] px-[24px] t-0 mt-0 pt-0  gap-[32px]',
            'text-center'
        )
    },

    icon: {
        className: classNames(
            // Ícono: w=101px, h=101px
            'w-[101px] h-[101px] gap-[32px]',
            'text-green-500 mb-4',
            'flex items-center justify-center'
        )
    },
    message: {
        className: classNames(
            // Mensaje con ancho específico
            'text-gray-700 text-sm leading-relaxed',
            'max-w-[400px] mx-auto',
            'mb-6'
        )
    },

    footer: {
        className: classNames(
            'h-auto w-full',
            'pb-[24px] px-[24px]',
            'flex justify-center',
            'border-t border-neutral-500'
        )
    },
    acceptButton: {
        className: classNames(
            'w-[130px] h-[32px]',
            '',
            'px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700',
            'transition-colors duration-200',
            'font-medium text-sm'
        )
    },

    rejectButton: {
        className: classNames(
            'w-[130px] h-[32px]',
            'px-6 py-2 text-primary-600 rounded-[4px]',
            'transition-colors duration-200',
            'font-medium text-sm'
        )
    },
    transition: TRANSITIONS.overlay
}