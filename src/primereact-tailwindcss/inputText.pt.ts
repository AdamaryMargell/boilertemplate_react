import { classNames } from "primereact/utils";

export const inputTextPT = (hasError = false) => ({
    root: ({ props, context }) => ({
        className: classNames(
            'w-full',
            'h-[2.5rem]',
            'py-[0.375rem]',
            'px-[0.75rem]',
            'text-md',
            'm-0',
            'border rounded-md focus:outline-none',
            'hover:border-neutral-900 focus:border-neutral-900 transition-colors duration-200',
            'text-neutral-1200',
            'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]',
            // Estados
            hasError && 'border-status-error-default animate-shake hover:border-status-error-default text-status-error-default',
            hasError && 'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]',
            !hasError && 'border-gray-300',
            {
                'pl-8': context.iconPosition === 'left',
                'pr-8': props.iconPosition === 'right'
            }
        )
    })
});

// import { classNames } from "primereact/utils";

// export const inputTextPT = (hasError = false) => ({
//     root: ({ props, context, parent }) => {
//         // Detectar automáticamente si está dentro de un InputGroup
//         const isInInputGroup = parent?.props?.className?.includes('p-inputgroup') ||
//             context?.inInputGroup ||
//             // Verificar en el DOM si el padre tiene la clase p-inputgroup
//             (typeof window !== 'undefined' && parent?.ref?.current?.closest?.('.p-inputgroup'));

//         return {
//             className: classNames(
//                 // Estilos base que siempre se aplican
//                 'w-full transition-colors duration-200 text-sm text-neutral-1200',

//                 // Estilos condicionales basados en si está en un grupo o no
//                 {
//                     // Cuando NO está en InputGroup
//                     'bg-white border rounded-md hover:border-neutral-900 focus:border-neutral-900 m-0 focus:outline-none': !isInInputGroup,
//                     'h-[2.5rem] sm:h-[1.875rem] md:h-[2.5rem] lg:h-[3.125rem]': !isInInputGroup,
//                     'py-[0.375rem] sm:py-[0.313rem] md:py-[0.375rem] lg:py-[0.625rem]': !isInInputGroup,
//                     'px-[0.75rem] sm:px-[0.188rem] md:px-[0.75rem] lg:px-[1rem]': !isInInputGroup,
//                     'border-gray-300': !isInInputGroup && !hasError,
//                     'border-status-error-default animate-shake hover:border-status-error-default': !isInInputGroup && hasError,

//                     // Cuando SÍ está en InputGroup - Eliminar TODOS los estilos de borde
//                     'border-0 rounded-none focus:ring-0 focus:border-0 focus:outline-0 shadow-none': isInInputGroup,
//                     'bg-transparent m-0 p-0': isInInputGroup,

//                     // Estados de error para texto
//                     'text-status-error-default': hasError,

//                     // Padding para iconos (solo cuando no está en grupo)
//                     'pl-8': context?.iconPosition === 'left' && !isInInputGroup,
//                     'pr-8': props?.iconPosition === 'right' && !isInInputGroup
//                 }
//             ),
//             // Estilos inline para casos extremos
//             style: isInInputGroup ? {
//                 border: 'none',
//                 outline: 'none',
//                 boxShadow: 'none',
//                 borderRadius: '0',
//                 background: 'transparent'
//             } : {}
//         };
//     }
// });

// // Función auxiliar para aplicar clases de error a InputGroup
// export const getInputGroupClasses = (hasError = false, additionalClasses = '') => {
//     return classNames(
//         'p-inputgroup flex-1',
//         {
//             'input-group-error': hasError
//         },
//         additionalClasses
//     );
// };

// import { classNames } from "primereact/utils";

// export const inputTextPT = (hasError = false) => ({
//     root: ({ props, context }) => ({
//         className: classNames(
//             // Solo estilos específicos que no están en CSS global
//             hasError && 'animate-shake',
//             {
//                 'pl-8': context.iconPosition === 'left',
//                 'pr-8': props.iconPosition === 'right'
//             }
//             // Los estilos base ya están definidos en CSS global
//         )
//     })
// });