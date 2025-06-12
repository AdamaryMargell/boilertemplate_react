import { classNames } from "primereact/utils";

export const messagesPT = {
    root: ({ state, index }) => {
        return {
            className: classNames('my-3 rounded-md shadow-sm', {
                ' border-2 border-blue-500': state.messages[index]?.message.severity === 'info',
                ' border-2 border-green-500': state.messages[index]?.message.severity === 'success',
                ' border-2 border-orange-500': state.messages[index]?.message.severity === 'warn',
                ' border-2 border-red-500': state.messages[index]?.message.severity === 'error',
                ' border-2 border-purple-500': state.messages[index]?.message.severity === 'secondary',
                ' border-2 border-gray-500': state.messages[index]?.message.severity === 'contrast'
            })
        };
    },
    wrapper: 'flex flex-col p-4 gap-1',
    icon: ({ state, index }) => {
        return {
            className: classNames('w-6 h-6 flex-shrink-0', {
                'bg-blue-50/80  text-blue-500 ': state.messages[index]?.message.severity === 'info',
                'bg-blue-50/80 text-green-500': state.messages[index]?.message.severity === 'success',
                'bg-blue-50/80 text-orange-500': state.messages[index]?.message.severity === 'warn',
                'bg-blue-50/80 text-red-500': state.messages[index]?.message.severity === 'error',
                'bg-blue-50/80 text-purple-500': state.messages[index]?.message.severity === 'secondary',
                'bg-blue-50/80 text-gray-500': state.messages[index]?.message.severity === 'contrast'
            }),
            style: {
                marginTop: '0.125rem' // Ajuste fino de alineación
            }
        }
    },
    contentWrapper: 'flex items-start', // Contenedor flex para icono y texto
    textContainer: 'flex-1', // Contenedor de texto que ocupa el espacio restante
    summary: {
        className: 'text-sm font-semibold flex items-start gap-3', // Contenedor flex para alinear icono y título
        style: {
            lineHeight: '1.25rem' // Ajuste de interlineado para mejor alineación
        }
    },
    detail: 'text-sm text-gray-600 mt-1 pl-8', // Sangría para alinear con el título
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