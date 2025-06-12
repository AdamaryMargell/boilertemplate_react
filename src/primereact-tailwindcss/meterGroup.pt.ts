import { classNames } from "primereact/utils";

export const meterGroupPT = {
    root: ({ props }) => ({
        className: classNames('meter-group-container', {
            'horizontal-layout': props.orientation === 'horizontal',
            'vertical-layout': props.orientation === 'vertical'
        })
    }),
    metercontainer: {
        className: 'meter-container bg-gray-100 rounded-full overflow-hidden h-8'
    },
    meter: {
        className: 'meter-bar h-full transition-all duration-1000 ease-out'
    },
    labellist: ({ props }) => ({
        className: classNames('label-list', {
            'label-start': props.labelPosition === 'start',
            'label-end': props.labelPosition === 'end',
            'label-horizontal': props.labelOrientation === 'horizontal',
            'label-vertical': props.labelOrientation === 'vertical'
        })
    }),
    labelitem: {
        className: 'label-item flex items-center mb-2 last:mb-0'
    },
    labeltype: {
        className: 'label-type w-3 h-3 rounded-full mr-2'
    },
    label: {
        className: 'label-text text-sm font-medium text-gray-700'
    },
    value: {
        className: 'value-text text-sm font-semibold text-gray-900 ml-auto'
    }
};
