import { classNames } from "primereact/utils";

export const inputtextareaPT = (hasError = false) => ({
    root: ({ context }) => ({
        className: classNames(
            'm-0',
            'font-sans text-base text-gray-600  bg-white  p-3 border border-gray-300 transition-colors duration-200 appearance-none rounded-lg',
            'hover:border-blue-500 focus:outline-none focus:outline-offset-0 ',
            { 'opacity-60 select-none pointer-events-none cursor-default': context.disabled },
            hasError && 'border-red-500 animate-shake hover:border-red-500'
        )
    })

});