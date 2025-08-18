import { classNames } from "primereact/utils";

export const tagPT = {
    root: ({ props }) => ({
        className: classNames(
            'inline-flex items-center justify-center',
            'text-xs font-semibold px-2 py-1',
            {
                'bg-gray-500 ': props.severity == 'secondary',
                'bg-[#E2F7F3] text-[#15BB9C]': props.severity == 'success',
                'bg-[#EBF5FB] text-[#3698DB]': props.severity == 'info',
                'bg-[#FEF5E7] text-[#F39C0F]': props.severity == 'warning',
                'bg-[#F1F0FA] text-[#7866CB]': props.severity == 'help',
                'bg-[#FDEDEC] text-[#E84C3D]': props.severity == 'danger'
            },
            {
                'rounded-md': !props.rounded,
                'rounded-full': props.rounded
            }
        )
    }),
    value: 'leading-6',
    icon: 'mr-1 text-sm'
}