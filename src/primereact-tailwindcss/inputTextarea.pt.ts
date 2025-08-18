import { classNames } from "primereact/utils";

export const inputtextareaPT = (hasError = false) => ({
    root: ({ context }) => ({
        className: classNames(
            'm-0',
            'h-[60px] md:h-[80px] lg:h-[100px]',
            'p-[5px] md:p-[8px] lg:p-[10px]',
            'gap-[10px]',
            'border rounded-md focus:outline-none',
            'hover:border-neutral-900 focus:border-neutral-900 transition-colors duration-200',
            'text-sm text-neutral-1200',
            { 'opacity-60 select-none pointer-events-none cursor-default': context.disabled },
            hasError && 'border-status-error-default animate-shake hover:border-status-error-default text-status-error-default'
        )
    })

});