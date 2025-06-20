import { classNames } from "primereact/utils";

export const dataviewPT = {
    content: {
        className: classNames(
            'bg-white blue-gray-700 border-0 p-0',
        )
    },
    grid: 'flex flex-wrap ml-0 mr-0 mt-0 bg-white',
    header: 'bg-gray-100 text-gray-800  border-gray-200  border-t border-b p-4 font-bold'
};
export const dataviewlayoutoptions = {
    listbutton: ({ props }) => ({
        className: classNames(
            'items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom justify-center border',
            'transition duration-200',
            'w-12 pt-3 pb-3 rounded-lg rounded-r-none',
            props.layout === 'list' ? 'bg-blue-500 border-blue-500 text-white' : 'bg-white border-gray-300 text-blue-gray-700'
        )
    }),
    gridbutton: ({ props }) => ({
        className: classNames(
            'items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom justify-center border',
            'transition duration-200',
            'w-12 pt-3 pb-3 rounded-lg rounded-l-none',
            props.layout === 'grid' ? 'bg-blue-500 border-blue-500 text-white' : 'bg-white border-gray-300 text-blue-gray-700'
        )
    })
}