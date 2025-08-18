import { classNames } from "primereact/utils";

export const cardPT = {
    root: {
        className: classNames(
            'bg-white text-[#3C3C3C] border-[0.063rem] rounded-xl  px-5 pt-7 pb-5',
        )
    },
    body: 'p-0',
    title: 'text-xl font-semibold pb-2',
    subtitle: {
        className: classNames(
            'font-normal mb-2 text-[#3C3C3C]'
        )
    },
    content: 'flex flex-row gap-4',
    footer: 'pt-5'
}