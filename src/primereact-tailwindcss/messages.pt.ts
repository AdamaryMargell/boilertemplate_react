import { classNames } from "primereact/utils";

export const messagesPT = {
    root: ({ state, index }) => {
        return {
            className: classNames('pl-8', {
                'relative pl-8 rounded-md p-4 border-2 border-[#86C1E9]': state.messages[index]?.message.severity === 'info',
                'relative pl-8 rounded-md p-4 border-2 border-[#9EE3D6]': state.messages[index]?.message.severity === 'success',
                'relative pl-8 rounded-md p-4 border-2 border-[#F39C0F]': state.messages[index]?.message.severity === 'warn',
                'relative pl-8 rounded-md p-4 border-2 border-[#F1948B]': state.messages[index]?.message.severity === 'error',
                'relative pl-8 rounded-md p-4 border-2 border-[#CDCDCD]': state.messages[index]?.message.severity === 'secondary',
                'relative pl-8 rounded-md p-4 border-2 border-[#C1C1C1]': state.messages[index]?.message.severity === 'contrast'
            })
        };
    },
    wrapper: 'flex flex-col',
    icon: ({ state, index }) => {
        return {
            className: classNames('absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center p-2', {
                'bg-[#F3F3F3] text-[#3698DB]': state.messages[index]?.message.severity === 'info',
                'bg-[#E2F7F3] text-[#15BB9C]': state.messages[index]?.message.severity === 'success',
                'bg-[#FEF5E7] text-[#F39C0F]': state.messages[index]?.message.severity === 'warn',
                'bg-[#FDEDEC] text-[#E84C3D]': state.messages[index]?.message.severity === 'error',
                'bg-[#F3F3F3] text-[#686868]': state.messages[index]?.message.severity === 'secondary',
                'bg-[#686868] text-[#FFFFFF]': state.messages[index]?.message.severity === 'contrast'
            })
        }
    },
    contentWrapper: 'flex flex-col pl-0', // Contenedor flex para icono y texto
    textContainer: 'flex flex-col pl-0', // Contenedor de texto que ocupa el espacio restante
    summary: {
        className: 'font-bold', // Contenedor flex para alinear icono y título
    },
    detail: 'text-sm',
    button: ({ state, index }) => {
        return {
            className: classNames(
                'absolute right-4 top-4 text-gray-500 hover:text-gray-700',
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