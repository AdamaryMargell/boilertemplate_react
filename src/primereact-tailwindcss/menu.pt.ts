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

export const menuPT = {
    root: 'py-1 bg-white text-gray-700  border border-gray-300  rounded-md w-48',
    menu: {
        className: classNames('m-0 p-0 list-none', 'outline-none')
    },
    content: ({ state }) => ({
        className: classNames(
            'text-gray-700  transition-shadow duration-200 rounded-none',
            'hover:text-gray-700 hover:bg-gray-200 ', // Hover
            {
                'bg-gray-300 text-gray-700': state.focused
            }
        )
    }),
    action: {
        className: classNames('text-gray-700 py-3 px-5 select-none', 'cursor-pointer flex items-center no-underline overflow-hidden relative')
    },
    menuitem: {
        className: classNames('hover:bg-gray-200')
    },
    icon: 'text-gray-600 mr-2',
    submenuheader: {
        className: classNames('m-0 p-3 text-gray-700  font-bold rounded-tl-none rounded-tr-none')
    },
    separator: 'border-t border-gray-300 my-1',
    transition: TRANSITIONS.overlay
}