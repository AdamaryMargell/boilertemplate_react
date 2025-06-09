
import { classNames } from "primereact/utils";

export const galleriaPT = {
    // root: {
    //     className: 'flex flex-col relative'
    // },
    // content: {
    //     className: 'flex flex-col overflow-hidden'
    // },
    // itemwrapper: {
    //     className: 'flex flex-col relative'
    // },
    // itemcontainer: {
    //     className: 'relative flex h-full w-full'
    // },
    // item: {
    //     className: 'flex justify-center items-center h-full w-full'
    // },
    // thumbnailwrapper: {
    //     className: 'flex flex-col overflow-auto shrink-0 bg-black/90 p-2'
    // },
    // thumbnailcontainer: {
    //     className: 'flex flex-row items-center justify-center h-24'
    // },
    // previousthumbnailbutton: {
    //     className: classNames(
    //         'self-center flex shrink-0 justify-center items-center overflow-hidden relative',
    //         'm-2 bg-transparent text-white w-8 h-8 transition duration-200 ease-in-out rounded-full',
    //         'hover:bg-white/10 hover:text-white',
    //         'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
    //     )
    // },
    // thumbnailitemscontainer: {
    //     className: 'overflow-hidden w-full h-full'
    // },
    // thumbnailitems: {
    //     className: 'flex h-full items-center'
    // },

    root: 'flex flex-col',
    content: 'flex flex-col',
    itemwrapper: 'flex flex-col relative',
    itemcontainer: 'relative flex h-full',
    item: 'flex justify-center items-center h-full w-full',
    thumbnailwrapper: 'flex flex-col overflow-auto shrink-0 bg-gray-900 p-2',
    thumbnailcontainer: {
        className: classNames('flex flex-row', 'h-24')
    },
    previousthumbnailbutton: {
        className: classNames(
            'self-center flex shrink-0 justify-center items-center overflow-hidden relative',
            'm-2 bg-transparent text-white w-8 h-8 transition duration-200 ease-in-out rounded-full',
            'hover:bg-white/10 hover:text-white',
            'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
        )
    },
    thumbnailitemscontainer: 'overflow-hidden w-full h-full',
    thumbnailitems: 'flex h-full',
    thumbnailitem: ({ context }: { context: any }) => ({
        className: classNames(
            'flex items-center justify-center cursor-pointer',
            'transition-all duration-300',
            'border-2 border-transparent',
        )
    }),
    nextthumbnailbutton: {
        className: classNames(
            'self-center flex shrink-0 justify-center items-center overflow-hidden relative',
            'm-2 bg-transparent text-white w-8 h-8 transition duration-200 ease-in-out rounded-full',
            'hover:bg-white/10 hover:text-white',
            'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
        )
    },
    indicators: {
        className: classNames('flex items-center justify-center', 'p-4')
    },
    indicator: 'mr-2',
    indicatorbutton: ({ context }: { context: any }) => ({
        className: classNames('w-4 h-4 transition duration-200 rounded-full', 'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]', {
            'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600': !context.highlighted,
            'bg-blue-500 hover:bg-blue-600': context.highlighted
        })
    }),
    mask: {
        className: classNames('fixed top-0 left-0 w-full h-full', 'flex items-center justify-center', 'bg-black bg-opacity-90')
    },
    closebutton: {
        className: classNames(
            'absolute top-0 right-0 flex justify-center items-center overflow-hidden m-2',
            'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out',
            'hover:text-white hover:bg-white/10',
            'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
        )
    },
    closeicon: 'w-6 h-6',
    previousitembutton: {
        className: classNames(
            'inline-flex justify-center items-center overflow-hidden',
            'bg-transparent text-white w-16 h-16 transition duration-200 ease-in-out rounded-md mx-2',
            'fixed top-1/2 mt-[-0.5rem]',
            'left-0',
            'hover:bg-white/10 hover:text-white',
            'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
        )
    },
    nextitembutton: {
        className: classNames(
            'inline-flex justify-center items-center overflow-hidden',
            'bg-transparent text-white w-16 h-16 transition duration-200 ease-in-out rounded-md mx-2',
            'fixed top-1/2 mt-[-0.5rem]',
            'right-0',
            'hover:bg-white/10 hover:text-white',
            'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
        )
    },
    caption: {
        className: classNames('absolute bottom-0 left-0 w-full', 'bg-black/50 text-white p-4')
    },
    transition: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-all duration-150 ease-in-out',
        leaveActiveClass: 'transition-all duration-150 ease-in',
        leaveToClass: 'opacity-0 scale-75'
    }
};

