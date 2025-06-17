import { classNames } from 'primereact/utils';

export const splitterPT = {
    root: ({ props }) => ({
        className: classNames(
            'flex bg-white border-0',
            {
                'flex-row': props.layout === 'horizontal',
                'flex-col': props.layout === 'vertical'
            }
        )
    }),
    gutter: ({ props }) => ({
        className: classNames(
            'flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors duration-200',
            {
                'w-2 cursor-col-resize': props.layout === 'horizontal',
                'h-2 cursor-row-resize': props.layout === 'vertical'
            }
        )
    }),
    gutterHandler: ({ props }) => ({
        className: classNames(
            'bg-gray-400 rounded-full',
            {
                'w-1 h-8': props.layout === 'horizontal',
                'w-8 h-1': props.layout === 'vertical'
            }
        )
    })
};

export const splitterPanelPT = {
    root: {
        className: classNames(
            'flex overflow-auto p-4'
        )
    }
};