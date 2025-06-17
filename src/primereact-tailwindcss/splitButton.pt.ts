import { classNames } from "primereact/utils";

export const splitButtonPT = {
    root: ({ props }) => ({
        className: classNames(
            'inline-flex relative',
            'rounded-md shadow-sm',
            { 'shadow-lg': props.raised }
        )
    }),

    button: {
        root: ({ parent }) => ({
            className: classNames(
                'bg-[#7866CB] font-semibold px-4 py-2 h-[38px]  text-white hover:bg-[#7866CB] border border-[#7866CB] hover:border-[#7866CB] rounded-l-md border-r-0 focus:z-10 focus:outline-none focus:ring-2 focus:ring-[#7866CB] transition-colors duration-200 flex items-center justify-center',
                { 'rounded-l-full': parent.props.rounded }
            )
        }),
        icon: {
            className: 'mr-2 text-white'
        }
    },

    menubutton: {
        root: ({ parent }) => ({
            className: classNames(
                'relative inline-flex items-center justify-center px-3 py-2 h-[38px] text-white bg-[#7866CB] hover:bg-[#7866CB]  border border-[#7866CB] hover:border-[#7866CB]  rounded-r-md border-l-0 focus:z-10 focus:outline-none focus:ring-2 focus:ring-[#7866CB] transition-colors duration-200',
                { 'rounded-r-full': parent.props.rounded }
            )
        }),
        label: {
            className: 'sr-only'
        }
    },

    overlay: {
        className: 'absolute right-0 z-50 mt-2 origin-top-right'
    },

    menu: {
        className: classNames(
            'bg-white border border-gray-300 rounded-md shadow-md w-48 [&_li]:px-4 [&_li]:py-2 [&_li]:cursor-pointer hover:rounded-md [&_li:hover]:bg-[#F3F4F6] hover:rounded-md [&_li.p-highlight]:border border-purple-500 rounded-md'
        )
    }
};
