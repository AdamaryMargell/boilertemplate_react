import { classNames } from "primereact/utils";

export const orderListPT = {
    root: 'flex',
    controls: 'flex flex-col justify-center p-5',
    moveupbutton: {
        root: ({ context }) => ({
            className: classNames(
                'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0',
                'text-white bg-blue-500 border border-blue-500 rounded-md',
                'transition duration-200 ease-in-out',
                'justify-center px-0 py-3',
                'mb-2 w-12',
                {
                    'cursor-default pointer-events-none opacity-60': context.disabled
                }
            )
        }),
        label: null
    },
    movetopbutton: {
        root: ({ context }) => ({
            className: classNames(
                'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0',
                'text-white bg-blue-500 border border-blue-500 rounded-md',
                'transition duration-200 ease-in-out',
                'justify-center px-0 py-3',
                'mb-2',
                {
                    'cursor-default pointer-events-none opacity-60': context.disabled
                }
            )
        }),
        label: null
    },
    movedownbutton: {
        root: ({ context }) => ({
            className: classNames(
                'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0',
                'text-white bg-blue-500 border border-blue-500 rounded-md',
                'transition duration-200 ease-in-out',
                'justify-center px-0 py-3',
                'mb-2',
                {
                    'cursor-default pointer-events-none opacity-60': context.disabled
                }
            )
        }),
        label: null
    },
    movebottombutton: {
        root: ({ context }) => ({
            className: classNames(
                'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0',
                'text-white bg-blue-500 border border-blue-500 rounded-md',
                'transition duration-200 ease-in-out',
                'justify-center px-0 py-3',
                'mb-2',
                {
                    'cursor-default pointer-events-none opacity-60': context.disabled
                }
            )
        }),
        label: null
    },
    container: 'flex-auto',
    header: {
        className: classNames(
            'bg-slate-50 text-slate-700 border border-gray-300 p-5 font-bold border-b-0 rounded-t-md',
        )
    },
    list: {
        className: classNames(
            'list-none m-0 p-0 overflow-auto min-h-[12rem] max-h-[24rem]',
            'border border-gray-300 bg-white text-gray-600 py-3 px-0 rounded-b-md outline-none',
        )
    },
    item: ({ context }) => ({
        className: classNames(
            'relative cursor-pointer overflow-hidden py-3 px-5 m-0 border-none text-gray-600 transition duration-200',
            {
                'text-blue-700 bg-blue-500/20': context.selected
            }
        )
    })
};
