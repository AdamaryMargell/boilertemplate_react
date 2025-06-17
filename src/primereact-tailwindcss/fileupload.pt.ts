import { classNames } from "primereact/utils";

export const fileuploadPT = {
    input: 'hidden',
    buttonbar: {
        className: classNames('flex flex-wrap', 'bg-gray-50 p-5 border border-solid border-gray-300 text-gray-700  rounded-tr-lg rounded-tl-lg gap-2 border-b-0')
    },
    basicButton: {
        className: classNames('text-white bg-blue-500 border border-blue-500 p-3 px-5 rounded-md text-base', 'overflow-hidden relative')
    },
    chooseButton: {
        className: classNames('text-white bg-blue-500 border border-blue-500 p-3 px-5 rounded-md text-base', 'overflow-hidden relative')
    },
    chooseIcon: 'mr-2 inline-block',
    chooseButtonLabel: 'flex-1 font-bold',
    uploadButton: {
        icon: 'mr-2'
    },
    cancelButton: {
        icon: 'mr-2'
    },
    content: {
        className: classNames('relative', 'bg-white p-8 border border-gray-300 text-gray-700  rounded-b-lg')
    },
    file: {
        className: classNames('flex items-center flex-wrap', 'p-4 border border-gray-300 rounded gap-2 mb-2', 'last:mb-0')
    },
    thumbnail: 'shrink-0',
    fileName: 'mb-2',
    fileSize: 'mr-2',
    uploadIcon: 'mr-2'
}