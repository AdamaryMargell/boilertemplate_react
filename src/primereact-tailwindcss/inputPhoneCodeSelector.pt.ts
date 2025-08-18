import { classNames } from "primereact/utils";

const TRANSITIONS = {
    overlay: {
        enterFromClass: 'opacity-0 scale-95',
        enterActiveClass: 'transition-all duration-200 ease-out',
        leaveActiveClass: 'transition-all duration-150 ease-in',
        leaveToClass: 'opacity-0 scale-95'
    }
};

export const inputPhoneSelectorPT = {
    root: ({ props }) => ({
        className: classNames(
            'cursor-pointer inline-flex select-none items-center',
            'bg-neutral-100 transition-all duration-200 ease-in-out rounded-[0.313rem]',
            'hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500',
            'shadow-sm hover:shadow-md',
            'min-w-[80px] max-w-[120px]',
            'h-[30px] sm:h-[20px] md:h-[25px] lg:h-[30px]',
            'py-[12px] sm:py-[8px] md:py-[10px]',
            'pr-[6px] pl-[9px] sm:pr-[4px] sm:pl-[6px] md:pr-[5px] md:pl-[7.5px]',
            'gap-2',
            {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled,
                'bg-gray-50': props.disabled
            },
        )
    }),

    input: ({ props }) => ({
        className: classNames(
            'cursor-pointer block flex flex-auto overflow-hidden overflow-ellipsis whitespace-nowrap relative',
            'bg-transparent border-0 text-gray-700 placeholder-gray-400',
            'px-1 transition duration-200 bg-transparent rounded-lg appearance-none font-medium text-sm',
            'focus:outline-none focus:shadow-none',
            { 'pr-10': props.showClear || !props.editable }
        )
    }),

    trigger: {
        className: classNames(
            'flex items-center justify-center shrink-0 absolute right-0 top-0 bottom-0',
            'text-gray-400 w-10 rounded-r-lg transition-colors duration-200',
            'hover:text-gray-600'
        )
    },

    panel: ({ props }) => ({
        className: classNames(
            'mt-1 border-[1px] border-neutral-500 rounded-md bg-white'
        )
    }),

    wrapper: {
        className: classNames('max-h-[200px] overflow-auto', 'bg-white text-gray-700 rounded-md shadow-lg')
    },

    list: 'py-1 list-none m-0 px-2',

    item: ({ context }) => ({
        className: classNames(
            'cursor-pointer overflow-hidden relative whitespace-nowrap text-sm font-normal ',
            'mx-1 my-0.5 px-3 py-2.5  transition-all duration-150 gap-1 rounded-md border-transparent ',
            'flex items-center',
            {
                'text-neutral-1200': !context.focused && !context.selected,
                'bg-primary-600 !text-white': context.focused && !context.selected,
                'bg-primary-700 !text-white': context.focused && context.selected,
                'bg-blue-50': !context.focused && context.selected,
                'bg-neutral-200 opacity-60 select-none pointer-events-none cursor-default': context.disabled
            }
        )
    }),

    itemgroup: {
        className: classNames(
            'm-0 px-3 py-2 text-gray-600 bg-gray-50 font-semibold text-xs uppercase tracking-wider',
            'cursor-auto border-b border-gray-100'
        )
    },

    header: {
        className: classNames(
            'p-[4px]  text-gray-700 bg-white font-semibold text-sm',
            'rounded-t-lg top-0  z-10'
        )
    },

    filtercontainer: 'relative',

    filterinput: {
        className: classNames(
            'w-full pr-8',
            'font-medium text-sm text-gray-700 bg-white py-2 px-3 border border-gray-300 transition duration-200 rounded-md appearance-none',
            'placeholder-gray-400',
            'hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500'
        )
    },

    filtericon: {
        className: 'absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4'
    },

    clearicon: {
        className: 'text-gray-400 hover:text-gray-600 right-10 absolute top-1/2 transform -translate-y-1/2 cursor-pointer transition-colors duration-200'
    },

    emptymessage: {
        className: 'px-3 py-6 text-gray-500 text-center text-sm italic'
    },

    transition: TRANSITIONS.overlay
};