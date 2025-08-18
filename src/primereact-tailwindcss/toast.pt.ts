import { classNames } from "primereact/utils";

export const toastPT = {
    root: {
        className: classNames(
            'w-[350px]',
        ),
    },
    message: ({ state, index }: { state: any, index: any }) => ({
        className: classNames(
            'my-4 rounded-[8px] w-full relative',
            'shadow-sm', // Borde izquierdo más prominente
            {
                'bg-status-success-invert border-[1px] border-status-success-default text-status-success-default':
                    state.messages[index] && state.messages[index].message.severity == 'success',

                'bg-status-information-invert border-[1px]  border-status-information-default text-status-information-default':
                    state.messages[index] && state.messages[index].message.severity == 'info',

                'bg-status-warning-invert border-[1px] border-status-warning-default text-status-warning-default':
                    state.messages[index] && state.messages[index].message.severity == 'warn',

                'bg-status-error-invert border-[1px] border-status-error-default text-status-error-default':
                    state.messages[index] && state.messages[index].message.severity == 'error',

                'bg-neutral-100 border-l-neutral-900 border-[1px] border-neutral-900 text-neutral-900':
                    state.messages[index] && state.messages[index].message.severity == 'secondary',

                'bg-neutral-1300 border-l-neutral-1300 border-[1px] border-neutral-1300 !text-white':
                    state.messages[index] && state.messages[index].message.severity == 'contrast'
            })
    }),
    content: 'flex items-start p-[16px] pr-[40px] gap-[8px] font-medium',
    icon: 'w-[18px] h-[18px] flex-shrink-0 -translate-y-[1px]',
    text: 'flex flex-col flex-1 min-w-0',
    summary: {
        className: ' text-[16px] leading-[18px] -mt-[1px]',
    },
    detail: ({ state, index }: { state: any, index: any }) => ({
        className: classNames(
            'block text-[14px]',
            {
                'text-white': state.messages[index] && state.messages[index].message.severity === 'contrast',
                'text-neutral-1200': state.messages[index] && state.messages[index].message.severity !== 'contrast'
            }
        )
    }),
    closebutton: {
        className: 'absolute right-3 top-3 w-4 h-4 cursor-pointer hover:opacity-70 transition-opacity duration-200'
    },
    transition: {
        enterFromClass: 'opacity-0 translate-x-0 translate-y-2/4 translate-z-0',
        enterActiveClass: 'transition-transform transition-opacity duration-300',
        leaveFromClass: 'max-h-40',
        leaveActiveClass: 'transition-all duration-500 ease-in',
        leaveToClass: 'max-h-0 opacity-0 mb-0 overflow-hidden'
    }
}