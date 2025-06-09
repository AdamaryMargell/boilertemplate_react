import { classNames } from "primereact/utils";

const TRANSITIONS = {
    overlay: {
        classNames: {
            enter: 'opacity-0 scale-75',
            enterActive: 'opacity-100 !scale-100 transition-transform transition-opacity duration-150 ease-in',
            exit: 'opacity-100',
            exitActive: '!opacity-0 transition-opacity duration-150 ease-linear'
        }
    }
};

export const overlaypanelPT = {
    root: {
        className: classNames(
            'bg-white text-gray-700 border-0 rounded-md shadow-lg',
            'z-40 transform origin-center',
            'absolute',
            'before:absolute before:w-0 before:-top-3 before:h-0 before:border-transparent before:border-solid before:ml-6 before:border-x-[0.75rem] before:border-b-[0.75rem] before:border-t-0 before:border-b-white',
        )
    },
    closeButton: 'flex items-center justify-center overflow-hidden absolute top-0 right-0 w-6 h-6',
    content: 'p-5 items-center flex',
    transition: TRANSITIONS.overlay
}