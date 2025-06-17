import { classNames } from "primereact/utils";

export const messagesPT = {
    root: ({ state, index }) => {
        return {
            className: classNames('my-3 rounded-lg border bg-white shadow-sm relative ml-6', {
                'border-blue-400 bg-blue-50/30': state.messages[index]?.message.severity === 'info',
                'border-green-400 bg-green-50/30': state.messages[index]?.message.severity === 'success',
                'border-orange-400 bg-orange-50/30': state.messages[index]?.message.severity === 'warn',
                'border-red-400 bg-red-50/30': state.messages[index]?.message.severity === 'error',
                'border-purple-400 bg-purple-50/30': state.messages[index]?.message.severity === 'secondary',
                'border-gray-400 bg-gray-50/30': state.messages[index]?.message.severity === 'contrast'
            })
        };
    },
    wrapper: 'flex flex-col p-4 gap-1',
    icon: ({ state, index }) => {
        return {
            className: classNames('w-6 h-6 flex-shrink-0 rounded-full flex items-center justify-center absolute -left-3 top-[2.5rem] border-2 border-white', {
                'bg-blue-500 text-white': state.messages[index]?.message.severity === 'info',
                'bg-green-500 text-white': state.messages[index]?.message.severity === 'success',
                'bg-orange-500 text-white': state.messages[index]?.message.severity === 'warn',
                'bg-red-500 text-white': state.messages[index]?.message.severity === 'error',
                'bg-purple-500 text-white': state.messages[index]?.message.severity === 'secondary',
                'bg-gray-500 text-white': state.messages[index]?.message.severity === 'contrast'
            })
        }
    },
    contentWrapper: 'flex items-start', // Contenedor flex para icono y texto
    textContainer: 'flex-1', // Contenedor de texto que ocupa el espacio restante
    summary: {
        className: 'text-sm font-semibold flex items-start gap-3 pl-2', // Contenedor flex para alinear icono y título
        style: {
            lineHeight: '1.25rem' // Ajuste de interlineado para mejor alineación
        }
    },
    detail: 'text-sm text-gray-600 mt-1 pl-2', 
    button: ({ state, index }) => {
        return {
            className: classNames(
                'w-6 h-6 rounded-full bg-transparent transition-colors duration-200',
                'ml-auto overflow-hidden relative -mt-1 -mr-1',
                'flex items-center justify-center',
                'hover:bg-gray-200/50',
                {
                    'text-blue-500 hover:bg-blue-100/50': state.messages[index]?.message.severity === 'info',
                    'text-green-500 hover:bg-green-100/50': state.messages[index]?.message.severity === 'success',
                    'text-orange-500 hover:bg-orange-100/50': state.messages[index]?.message.severity === 'warn',
                    'text-red-500 hover:bg-red-100/50': state.messages[index]?.message.severity === 'error',
                    'text-purple-500 hover:bg-purple-100/50': state.messages[index]?.message.severity === 'secondary',
                    'text-gray-500 hover:bg-gray-100/50': state.messages[index]?.message.severity === 'contrast'
                }
            )
        }
    },
    transition: {
        enterFromClass: 'opacity-0 translate-y-2',
        enterActiveClass: 'transition-all duration-200 ease-out',
        leaveFromClass: 'max-h-40 opacity-100',
        leaveActiveClass: 'overflow-hidden transition-all duration-200 ease-in',
        leaveToClass: 'max-h-0 opacity-0 !m-0'
    }
};