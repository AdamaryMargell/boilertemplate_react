import { classNames } from "primereact/utils";

export const tabMenuPT = {
    root: 'overflow-x-auto',
    menu: {
        className: classNames('flex m-0 p-0 list-none flex-nowrap', 'bg-white border-solid border-gray-300 border-b-2', 'outline-none no-underline text-base list-none')
    },
    menuitem: 'mr-0',
    action: ({ context, parent }) => ({
        className: classNames(
            'cursor-pointer select-none flex items-center relative no-underline overflow-hidden',
            'border-b-2 p-5 font-bold rounded-t-lg ',
            'focus:outline-none focus:outline-offset-0 focus:shadow-[inset_0_0_0_0.2rem_rgba(191,219,254,1)]',
            {
                'border-gray-300 bg-white text-gray-700 hover:bg-white hover:border-gray-400 hover:text-gray-600': parent.activeIndex !== context.index, // Condition-based hover styles.
                'bg-white border-blue-500 text-blue-500': parent.state.activeIndex === context.index // Condition-based active styles.
            }
        ),
        style: { top: '2px' }
    }),
    icon: 'mr-2'
}