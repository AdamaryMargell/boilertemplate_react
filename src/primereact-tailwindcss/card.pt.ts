import { classNames } from "primereact/utils";

export const cardPT = {
    root: {
        className: classNames(
            'bg-white text-gray-700 shadow-md rounded-md',
        )
    },
    body: 'p-5', 
    title: 'text-2xl font-bold mb-2', 
    subtitle: {
        className: classNames(
            'font-normal mb-2 text-gray-600'
        )
    },
    content: 'py-5',
    footer: 'pt-5'
}