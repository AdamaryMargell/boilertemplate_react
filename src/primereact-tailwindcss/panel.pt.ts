import { classNames } from "primereact/utils";

const TRANSITIONS = {
    toggleable: {
        enterFromClass: 'max-h-0',
        enterActiveClass: 'overflow-hidden transition-all duration-500 ease-in-out',
        enterToClass: 'max-h-40	',
        leaveFromClass: 'max-h-40',
        leaveActiveClass: 'overflow-hidden transition-all duration-500 ease-in',
        leaveToClass: 'max-h-0'
    }
};

export const panelPT = {
    root: 'mb-4',
    header: ({ props }: { props: any; }) => ({
        className: classNames(
            'flex items-center justify-between', // flex and alignments
            'border border-gray-900 bg-gray-900 text-white rounded-tl-lg rounded-tr-lg', // borders and colors
            { 'p-5': !props.toggleable, 'py-3 px-5': props.toggleable } // condition
        )
    }),
    title: 'leading-none font-bold',
    toggler: {
        className: classNames(
            'inline-flex items-center justify-center overflow-hidden relative no-underline', // alignments
            'w-8 h-8 text-gray-600 border-0 bg-transparent rounded-full transition duration-200 ease-in-out', // widths, borders, and transitions
            'hover:text-gray-900 hover:border-transparent hover:bg-gray-200 dark:hover:text-white/80 dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]', // hover
            'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]' // focus
        )
    },
    togglerIcon: 'inline-block',
    toggleableContent: {
        className: classNames(
            'border border-gray-300 text-gray-700  rounded-lg',
        )
    },
    content: {
        className: classNames(
            'border-t-0 last:rounded-br-lg last:rounded-bl-lg m-4 mt-4'
        )
    },
    transition: TRANSITIONS.toggleable

}

