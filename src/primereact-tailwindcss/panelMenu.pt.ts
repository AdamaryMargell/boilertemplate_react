import { classNames } from "primereact/utils";

const TRANSITIONS = {
    toggleable: {
        timeout: 500,
        classNames: {
            enter: 'max-h-0',
            enterActive: '!max-h-40 overflow-hidden transition-all duration-500 ease-in-out',
            exit: 'max-h-40',
            exitActive: '!max-h-0 overflow-hidden transition-all duration-500 ease-in'
        }
    },
};


export const panelMenuPT = {
    root: 'w-full md:w-[25rem]',
    panel: 'mb-1',
    header: {
        className: classNames(
            'outline-none',
            'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]' // Focus
        )
    },
    headercontent: {
        className: classNames(
            'border border-solid border-gray-300 text-gray-700  bg-gray-100  rounded-md transition-shadow duration-200',
            'hover:bg-gray-200  hover:text-gray-700 '
        )
    },
    headeraction: {
        className: classNames('flex items-center select-none cursor-pointer relative no-underline', 'text-gray-700 p-5 font-bold')
    },
    submenuicon: 'mr-2',
    headericon: 'mr-2',
    menucontent: 'py-1 border border-t-0 border-gray-300 bg-white text-gray-700 rounded-t-none rounded-br-md rounded-bl-md',
    menu: {
        className: classNames('outline-none', 'm-0 p-0 list-none')
    },
    menuitem: ({ context }) => ({
        className: classNames(
            'text-gray-700 transition-shadow duration-200 border-none rounded-none',
            'hover:bg-gray-200  hover:text-gray-700', // Hover
            {
                'bg-gray-300 text-gray-700': context.focused
            }
        )
    }),
    action: {
        className: classNames('text-gray-700 py-3 px-5 select-none', 'flex items-center cursor-pointer no-underline relative overflow-hidden')
    },
    icon: 'mr-2',
    submenu: 'p-0 pl-4 m-0 list-none',
    transition: TRANSITIONS.toggleable
}