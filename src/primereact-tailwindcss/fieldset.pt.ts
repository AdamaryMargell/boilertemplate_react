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

export const fieldsetPT = {
    root: {
        className: classNames(
            'border border-gray-300 bg-white text-gray-700 rounded-md block mx-2 my-0.5 pl-4 pr-5 inline-size-min', // Borders, background, text color, spacing, and inline size.
        )
    },
    legend: ({ props }) => ({
        className: classNames(
            'border border-gray-300 text-gray-700 bg-gray-50 font-bold rounded-md',
            {
                'p-0 transition-none hover:bg-gray-100 hover:border-gray-300 hover:text-gray-900': props.toggleable,
                'p-5': !props.toggleable
            }
        )
    }),
    toggler: ({ props }) => ({
        className: classNames('flex items-center justify-center', {
            'p-5 text-gray-700 rounded-md transition-none cursor-pointer overflow-hidden relative select-none hover:text-gray-900 focus:focus:shadow-[inset_0_0_0_0.2rem_rgba(191,219,254,1)]':
                props.toggleable
        })
    }),
    togglerIcon: 'mr-2 inline-block', // Margin and display style.
    legendTitle: 'flex items-center justify-center leading-none', // alignments, and leading style.
    content: 'p-5', // Padding.
    transition: TRANSITIONS.toggleable
}