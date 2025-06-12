import { classNames } from "primereact/utils";

export const progressbarPT = {
    root: {
        className: classNames(
            'overflow-hidden relative',
            'border-0 h-6 bg-gray-200 rounded-md',
            'w-full'
        )
    },
    value: ({ props }) => ({
        className: classNames(
            'border-0 m-0 bg-gray-900',
            {
                'transition-all duration-1000 ease-in-out h-full': props.mode !== 'indeterminate',
                'absolute h-full before:absolute before:top-0 before:left-0 before:bottom-0 before:bg-inherit before:animate-progress-indeterminate before:will-change-[left,right] after:absolute after:top-0 after:left-0 after:bottom-0 after:bg-inherit after:animate-progress-indeterminate-short after:will-change-[left,right] after:delay-1000': props.mode === 'indeterminate'
            }
        ),
        style: props.mode !== 'indeterminate' ? { width: `${props.value}%` } : undefined
    }),
    label: {
        className: classNames(
            'inline-block text-white text-xs font-medium',
            'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
        )
    }
};

