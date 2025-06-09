// import { classNames } from "primereact/utils";

// export const carouselPT = {
//     root: 'flex flex-col',
//     content: 'flex flex-col overflow-auto',
//     container: ({ props }) => ({
//         className: classNames('flex', {
//             'flex-row': props.orientation !== 'vertical',
//             'flex-col': props.orientation == 'vertical'
//         })
//     }),
//     previousbutton: {
//         className: classNames('flex justify-center items-center self-center overflow-hidden relative shrink-0 grow-0', 'w-8 h-8 text-gray-600 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mx-2')
//     },
//     itemscontent: 'overflow-hidden w-full',
//     itemscontainer: ({ props }) => ({
//         className: classNames('flex ', {
//             'flex-row': props.orientation !== 'vertical',
//             'flex-col h-full': props.orientation == 'vertical',
//         })
//     }),
//     item: ({ props }) => ({
//         className: classNames('flex shrink-0 grow', {
//             'w-1/3': props.orientation !== 'vertical',
//             'w-full': props.orientation == 'vertical'
//         })
//     }),
//     indicators: {
//         className: classNames('flex flex-row justify-center flex-wrap')
//     },
//     indicator: 'mr-2 mb-2',
//     indicatorbutton: ({ context }) => ({
//         className: classNames('w-8 h-2 transition duration-200 rounded-0', 'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]', {
//             'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600': !context.active,
//             'bg-blue-500 hover:bg-blue-600': context.active
//         })
//     })
// }

import { classNames } from "primereact/utils";

export const carouselPT = {
    root: 'flex flex-col',
    content: 'flex flex-col overflow-auto',
    container: ({ props }) => ({
        className: classNames('flex', {
            'flex-row': props.orientation !== 'vertical',
            'flex-col': props.orientation == 'vertical'
        })
    }),
    previousbutton: {
        className: classNames(
            'flex justify-center items-center self-center overflow-hidden relative -0 grow-0',
            'w-8 h-8 tshrinkext-red-600 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mx-2',
            'focus:outline-none focus:ring-2 focus:ring-blue-300',
        )
    },
    nextbutton: {
        className: classNames(
            'flex justify-center items-center self-center overflow-hidden relative -0 grow-0 ',
            'w-8 h-8 tshrinkext-red-600 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mx-2',
            'focus:outline-none focus:ring-2 focus:ring-blue-300',
        )
    },
    itemscontent: {
        className: 'overflow-hidden w-full'
    },
    itemscontainer: ({ props }) => ({
        className: classNames('flex ', {
            'flex-row': props.orientation !== 'vertical',
            'flex-col h-full': props.orientation == 'vertical',
        })
    }),
    item: {
        className: 'px-3 flex-shrink-0 w-1/3' // Ajuste de padding entre items
    },
    indicators: {
        className: 'flex justify-center mt-6'
    },
    indicator: {
        className: 'mx-1.5'
    },
    indicatorbutton: ({ context }) => ({
        className: classNames(
            'w-3 h-3 rounded-full transition-all duration-300',
            {
                'bg-gray-300 hover:bg-gray-400': !context.active,
                'bg-gray-900 w-6': context.active
            }
        )
    })
};