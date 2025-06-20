import { classNames } from "primereact/utils";

const TRANSITIONS = {
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};

export const confirmPopupPT = {
    root: {
        className: classNames(
            'bg-white text-gray-700 border-0 rounded-md shadow-lg',
            'z-[999] transform origin-center',
            'mt-3 absolute',
            'before:absolute before:w-0 before:-top-3 before:h-0 before:border-transparent before:border-solid before:ml-6 before:border-x-[0.75rem] before:border-b-[0.75rem] before:border-t-0 before:border-b-white',
        )
    },
    content: 'p-5 items-center flex',
    icon: 'text-2xl',
    message: 'ml-4',
    footer: 'text-right px-5 py-5 pt-0 ',
    transition: TRANSITIONS.overlay
}


