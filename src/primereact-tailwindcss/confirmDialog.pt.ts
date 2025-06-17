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
    root: {
        className: classNames(
            'relative bg-white text-gray-700 border-0 rounded-md shadow-lg',
            'z-40 transform origin-center',
            'mt-3 absolute left-0 top-0',
            'before:absolute before:w-0 before:-top-3 before:h-0 before:border-transparent before:border-solid before:ml-6 before:border-x-[0.75rem] before:border-b-[0.75rem] before:border-t-0 before:border-b-white',
        )
    },
    content: 'p-5 items-center flex',
    icon: 'text-2xl',
    message: 'ml-4',
    footer: 'flex gap-2 justify-end align-center text-right px-5 py-5 pt-0',
    transition: TRANSITIONS.overlay
}