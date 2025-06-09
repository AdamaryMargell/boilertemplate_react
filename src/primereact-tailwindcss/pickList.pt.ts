import { classNames } from "primereact/utils";

export const pickListPT = {
    root: 'flex flex-col xl:flex-row',
    controls: 'flex flex-row xl:flex-col justify-center p-5',
    moveUpButton: {
        root: {
            className: classNames(
                'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                'text-white bg-blue-500 border border-blue-500 rounded-md',
                'transition duration-200 ease-in-out',
                'justify-center px-0 py-3',
                'mr-2 xl:mb-2',
            )
        },
        label: 'flex-initial w-0'
    },
    moveTopButton: {
        root: {
            className: classNames(
                'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                'text-white bg-blue-500 border border-blue-500 rounded-md',
                'transition duration-200 ease-in-out',
                'justify-center px-0 py-3',
                'mr-2 xl:mb-2',
            )
        },
        label: 'flex-initial w-0'
    },
    moveDownButton: {
        root: {
            className: classNames(
                'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                'text-white bg-blue-500 border border-blue-500 rounded-md',
                'transition duration-200 ease-in-out',
                'justify-center px-0 py-3',
                'mr-2 xl:mb-2',
            )
        },
        label: 'flex-initial w-0'
    },
    moveBottomButton: {
        root: {
            className: classNames(
                'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                'text-white bg-blue-500 border border-blue-500 rounded-md',
                'transition duration-200 ease-in-out',
                'justify-center px-0 py-3',
                'mr-2 xl:mb-2',
            )
        },
        label: 'flex-initial w-0'
    },
    listWrapper: 'grow shrink basis-2/4',
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
        className: classNames('relative cursor-pointer overflow-hidden', 'py-3 px-5 m-0 border-none text-gray-600', 'transition duration-200', {
            'text-blue-700 bg-blue-500/20': context.selected,
            'text-gray-600': !context.selected
        })
    }),
    buttons: 'flex flex-row xl:flex-col justify-center p-5',
    movetotargetbutton: {
        root: {
            className: classNames(
                'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0',
                'text-white bg-blue-500 border border-blue-500 rounded-md',
                'transition duration-200 ease-in-out',
                'justify-center px-0 py-3',
                'mr-2 xl:mb-2',
            )
        },
        label: 'flex-initial w-0'
    },
    movealltotargetbutton: {
        root: {
            className: classNames(
                'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                'text-white bg-blue-500 border border-blue-500 rounded-md',
                'transition duration-200 ease-in-out',
                'justify-center px-0 py-3', // icon only
                'mr-2 xl:mb-2',
            )
        },
        label: 'flex-initial w-0'
    },
    movetosourcebutton: {
        root: {
            className: classNames(
                'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                'text-white bg-blue-500 border border-blue-500 rounded-md',
                'transition duration-200 ease-in-out',
                'justify-center px-0 py-3', // icon only
                'mr-2 xl:mb-2', // orderlist button
            )
        },
        label: 'flex-initial w-0'
    },
    movealltosourcebutton: {
        root: {
            className: classNames(
                'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                'text-white bg-blue-500 border border-blue-500 rounded-md',
                'transition duration-200 ease-in-out',
                'justify-center px-0 py-3', // icon only
                'mr-2 xl:mb-2', // orderlist button
            )
        },
        label: 'flex-initial w-0'
    },
    targetcontrols: 'flex flex-col justify-center p-5',
    targetwrapper: 'grow shrink basis-2/4',
    targetheader: {
        className: classNames(
            'bg-slate-50 text-slate-700 border border-gray-300 p-5 font-bold border-b-0 rounded-t-md',
        )
    },
    targetlist: {
        className: classNames(
            'list-none m-0 p-0 overflow-auto min-h-[12rem] max-h-[24rem]',
            'border border-gray-300 bg-white text-gray-600 py-3 px-0 rounded-b-md outline-none',
        )
    },
    transition: {
        timeout: 0,
        classNames: {
            enter: '!transition-none',
            enterActive: '!transition-none',
            exit: '!transition-none',
            exitActive: '!transition-none'
        }
    }
}