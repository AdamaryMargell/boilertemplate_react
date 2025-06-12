import { classNames } from 'primereact/utils';

// Transición para la aparición y desaparición de los paneles de contenido
const TRANSITIONS = {
    stepper: {
        timeout: 300,
        classNames: {
            enter: 'opacity-0',
            enterActive: 'opacity-100 transition-opacity duration-300',
            exit: 'opacity-100',
            exitActive: 'opacity-0 transition-opacity duration-300'
        }
    }
};

export const stepperPT = {
    // Contenedor principal del Stepper
    root: 'flex flex-col gap-4',

    // Barra de navegación con los pasos
    nav: 'flex items-center justify-between overflow-x-auto p-1',

    // Cada paso individual (<li>)
    step: {
        root: 'relative flex-auto'
    },

    // El encabezado clickeable de cada paso
    header: ({ context, props }) => ({
        className: classNames(
            'flex flex-col items-center gap-2 p-2 rounded-md transition-colors duration-200',
            'border-2 border-red-500',
            {
                'cursor-pointer': !props.disabled,
                'cursor-default': props.disabled
            },
            // Estilos de focus
            'focus:outline-none focus:outline-offset-0 focus:border-purple-300'
        )
    }),

    // El círculo del número
    number: ({ context }) => ({
        className: classNames(
            'flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors duration-300',
            // Estado: Inactivo o no procesado
            {
                'bg-white text-gray-500 border-gray-300': !context.active && !context.processed,
                'bg-gray-100 text-gray-600 border-gray-400': context.processed && !context.active,
                'bg-purple-500 text-white border-purple-500': context.active // Estado: Activo
            }
        )
    }),

    // El título del paso
    title: ({ context }) => ({
        className: classNames(
            'font-medium text-center transition-colors duration-300',
            {
                'text-gray-500': !context.active,
                'text-purple-600': context.active
            }
        )
    }),

    // La línea que conecta los pasos
    separator: ({ context, index, props }) => ({
        className: classNames(
            'absolute top-5 left-[calc(50%+1rem)] w-[calc(100%-2rem)] h-0.5 transition-colors duration-300',
            // Oculta el separador en el último paso
            { 'hidden': index === props.children.length - 1 },
            // Lógica de color de la línea
            {
                '!bg-gray-300': !context.active && !context.processed, // Inactivo
                '!bg-purple-500': context.active || context.processed // Activo o Procesado
            }
        )
    }),

    // Contenedor del panel activo
    panelContainer: 'p-4',

    // Contenido del panel
    content: 'border-0 rounded-md bg-white p-4 text-gray-700',

    // Transición del panel
    transition: TRANSITIONS.stepper
};