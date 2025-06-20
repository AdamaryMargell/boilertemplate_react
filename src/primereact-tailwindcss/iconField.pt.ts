import { classNames } from "primereact/utils";

export const iconFieldPT = {
    root: {
        className: classNames('relative flex items-center')
    }
}

export const inputIconPT = {
    root: ({ context }) => ({
        className: classNames('absolute left-3 top-1/2 transform -translate-y-1/2', {
            'left-2': context.iconPosition === 'left',
            'right-2': context.iconPosition === 'right'
        })
    })
}