import { classNames } from "primereact/utils";

export const megaMenuPT = {
    root: ({ props }) => ({
        className: classNames('bg-gray-100  border border-gray-300   rounded-md', 'flex relative', {
            'p-2 items-center': props.orientation == 'horizontal',
            'flex-col w-48 p-0 py-1': props.orientation !== 'horizontal'
        })
    }),
    menu: {
        className: classNames('m-0 sm:p-0 list-none relative', 'outline-none', 'flex items-center flex-wrap flex-row top-auto left-auto relative bg-transparent shadow-none w-auto')
    },
    menuitem: ({ props, context }) => ({
        className: classNames(
            'transition-shadow duration-200',
            { 'rounded-md': props.orientation == 'horizontal' },
            {
                'text-gray-700 ': !context.active,
                'bg-blue-50 text-blue-700 ': context.active
            },
            {
                'w-auto': props.orientation === 'horizontal',
                'w-full': props.orientation !== 'horizontal'
            },
            {
                'hover:text-gray-700  hover:bg-gray-200': !context.active,
                'hover:bg-blue-200 ': context.active
            }
        )
    }),
    headeraction: {
        className: classNames('select-none', 'cursor-pointer flex items-center no-underline overflow-hidden relative', 'py-3 px-5 select-none')
    },
    action: {
        className: classNames('select-none', 'cursor-pointer flex items-center no-underline overflow-hidden relative', 'py-3 px-5 select-none')
    },
    icon: {
        className: 'mr-2'
    },
    submenuicon: ({ props }) => ({
        className: classNames({
            'ml-2': props.orientation === 'horizontal',
            'ml-auto': props.orientation !== 'horizontal'
        })
    }),
    panel: ({ props }) => ({
        className: classNames('py-1 bg-white  border-0 shadow-md w-auto', 'absolute z-10', {
            'left-full top-0': props.orientation !== 'horizontal'
        })
    }),
    grid: 'flex',
    column: 'w-1/2',
    submenu: {
        className: classNames('m-0 list-none', 'py-1 w-48')
    },
    submenuheader: {
        className: classNames('m-0 py-3 px-5 text-gray-700 bg-white  font-semibold rounded-tr-md rounded-tl-md')
    }
}