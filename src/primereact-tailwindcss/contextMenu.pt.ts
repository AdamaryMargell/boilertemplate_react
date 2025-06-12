import { classNames } from "primereact/utils";

export const contextMenuPT = {
    root: 'py-1 bg-white text-gray-700 border-none shadow-md rounded-lg w-52',
    menu: {
        className: classNames('m-0 p-0 list-none', 'outline-none')
    },
    menuitem: 'relative',
    content: ({ context }) => ({
        className: classNames(
            'transition-shadow duration-200 rounded-none',
            'hover:text-gray-700  hover:bg-gray-200', // Hover
            {
                'text-gray-700': !context.focused && !context.active,
                'bg-gray-300 text-gray-700': context.focused && !context.active,
                'bg-blue-500 text-blue-700': context.focused && context.active,
                'bg-blue-50 text-blue-700': !context.focused && context.active
            }
        )
    }),
    action: {
        className: classNames('cursor-pointer flex items-center no-underline overflow-hidden relative', 'text-gray-700 py-3 px-5 select-none')
    },
    icon: 'text-gray-600 mr-2',
    label: 'text-gray-600 ',
    transition: {
        timeout: { enter: 250 },
        classNames: {
            enter: 'opacity-0',
            enterActive: '!opacity-100 transition-opacity duration-250'
        }
    }
}