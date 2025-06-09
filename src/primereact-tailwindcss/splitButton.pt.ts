import { classNames } from "primereact/utils";

// export const splitButtonPT = {
//     root: ({ props }) => ({
//         className: classNames('inline-flex relative',
//             'rounded-md', { 'shadow-lg': props.raised })
//     }),
//     button: {
//         root: ({ context }: { context: any }) => ({
//             className: `flex items-center 
//                         gap-2 px-4 py-2 
//                         text-sm font-medium 
//                         text-white 
//                         bg-${context.active ? 'blue-600' : 'blue-500'} 
//                         hover:bg-blue-600 rounded-l-md 
//                         border border-blue-500`
//         }),
//         icon: 'mr-2'
//     },
//     menubutton: {
//         root: ({ context }: { context: any }) => ({
//             className: `px-3 py-2 
//                         text-sm font-medium text-white 
//                         bg-${context.active ? 'blue-600' : 'blue-500'} 
//                         hover:bg-blue-600 rounded-r-md border border-blue-500 border-l-0`
//         }),
//         icon: {
//             className: 'text-white'
//         }
//     },
//     menu: {
//         className: 'absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
//     },
//     menulist: {
//         className: 'py-1'
//     },
//     menuitem: {
//         className: ({ context }: { context: { active: boolean } }) =>
//             classNames(
//                 'block px-4 py-2 text-sm',
//                 {
//                     'bg-gray-100 text-gray-900': !context.active,
//                     '!bg-blue-500 !text-white': context.active
//                 }
//             )
//     },
//     actionicon: {
//         className: 'mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500'
//     },
//     separator: {
//         className: 'my-1 border-t border-gray-200'
//     }

// };


// export const splitButtonPT = {
//     root: {
//         className: 'inline-flex rounded-md shadow-sm'
//     },
//     button: {
//         root: {
//             className: 'flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-l-md border border-blue-600 focus:z-10 focus:ring-2 focus:ring-blue-500'
//         },
//         icon: {
//             className: 'mr-2 text-white'
//         }
//     },
//     menubutton: {
//         root: {
//             className: 'inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-r-md border border-blue-600 border-l-0 focus:z-10 focus:ring-2 focus:ring-blue-500'
//         },
//         icon: {
//             className: 'text-white'
//         }
//     },
//     menu: {
//         className: 'absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
//     },
//     menulist: {
//         className: 'py-1'
//     },
//     menuitem: ({ context }: { context: { active: boolean } }) => ({
//         className: `block px-4 py-2 text-sm ${context.active ? '!bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`
//     }),
//     actionicon: {
//         className: 'mr-3 h-5 w-5 text-gray-400'
//     },
//     separator: {
//         className: 'my-1 border-t border-gray-200'
//     }
// }


// export const splitButtonPT = {
//     root: {
//         className: 'inline-flex rounded-md shadow-sm'
//     },
//     button: {
//         root: {
//             className: 'flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-cyan-600 hover:bg-blue-700 rounded-l-md border border-blue-600 focus:z-10'
//         },
//         icon: {
//             className: 'mr-2 text-white'
//         }
//     },
//     menubutton: {
//         root: {
//             className: 'inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-r-md border border-blue-600 border-l-0 focus:z-10'
//         }
//     },
//     menu: {
//         className: '!absolute !right-0 !z-10 !mt-2 !w-56 !origin-top-right !rounded-md !bg-gray-800 !shadow-lg !ring-1 !ring-black !ring-opacity-5 !focus:outline-none'
//     },
//     menulist: {
//         className: '!py-1'
//     },
//     menuitem: {
//         className: '!block !px-4 !py-2 !text-sm !text-gray-700 hover:!bg-gray-800 !rounded-none'
//     },
//     menuitemlink: {
//         className: '!flex !items-center !w-full'
//     },
//     actionicon: {
//         className: '!mr-3 !h-5 !w-5 !text-gray-400'
//     },
//     separator: {
//         className: '!my-1 !border-t !border-gray-200'
//     }
// };

export const splitButtonPT = {
    root: ({ props }) => ({
        className: classNames('inline-flex relative', 'rounded-md', { 'shadow-lg': props.raised })
    }),
    button: {
        root: ({ parent }) => ({
            className: classNames('rounded-r-none border-r-0', { 'rounded-l-full': parent.props.rounded }, 'flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-cyan-600 hover:bg-blue-700 rounded-l-md border border-blue-600 focus:z-10')

        }),
        icon: {
            className: 'mr-2 text-white'
        }
    },
    menu: {
        className: classNames('!absolute !right-0 !z-10 !mt-2 !w-56 !origin-top-right !rounded-md !bg-red-900 !shadow-lg !ring-1 !ring-black !ring-opacity-5 !focus:outline-none')
    },
    menulist: 'relative',
    menuitem: {
        className: '!block !px-4 !py-2 !text-sm !text-gray-700 hover:!bg-gray-800 !rounded-none'
    },
    menubutton: {
        root: ({ parent }) => ({
            className: classNames('rounded-l-none', { 'rounded-r-full': parent.props.rounded })
        }),
        label: 'hidden'
    }
}
