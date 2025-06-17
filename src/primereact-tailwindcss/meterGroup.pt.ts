import { classNames } from "primereact/utils";

export const meterGroupPT = {
    root: ({ props }) => ({
        className: classNames('w-full', {
            'flex flex-col': props.orientation === 'vertical',
            'flex flex-row items-center': props.orientation === 'horizontal'
        })
    }),
    metercontainer: {
        className: 'bg-gray-200 rounded-full overflow-hidden h-6 w-full shadow-inner'
    },
    meter: ({ props }) => ({
        className: 'h-full transition-all duration-500 ease-out',
        style: {
            backgroundColor: props.color || '#3b82f6'
        }
    }),
    labellist: ({ props }) => ({
        className: classNames('flex gap-4', {
            'mb-3': props.labelPosition === 'start',
            'mt-3': props.labelPosition === 'end',
            'flex-col': props.labelOrientation === 'vertical',
            'flex-row flex-wrap': props.labelOrientation === 'horizontal'
        })
    }),
    labelitem: {
        className: 'flex items-center gap-2 text-sm'
    },
    labeltype: ({ props }) => ({
        className: 'w-3 h-3 rounded-full flex-shrink-0',
        style: {
            backgroundColor: props.color || '#3b82f6'
        }
    }),
    label: {
        className: 'font-medium text-gray-700 min-w-0'
    },
    value: {
        className: 'font-semibold text-gray-900 ml-auto'
    }
};