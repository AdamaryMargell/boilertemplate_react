import { classNames } from 'primereact/utils';

export const scrollTopPT = {
    root: ({ props }) => ({
        className: classNames(
            props.target === 'parent' ? 'absolute bottom-4 right-4' : 'fixed bottom-4 right-4',
            'z-50 flex items-center justify-center',
            {
                '!bg-blue-500 hover:bg-blue-600 text-white rounded-md h-8 w-8': props.target === 'parent',
                '!bg-gray-700 hover:bg-gray-800 h-12 w-12 rounded-full text-white': props.target !== 'parent'
            }
        )
    }),
    transition: {
        enterFromClass: 'opacity-0',
        enterActiveClass: 'transition-opacity duration-150',
        leaveActiveClass: 'transition-opacity duration-150',
        leaveToClass: 'opacity-0'
    }
};
