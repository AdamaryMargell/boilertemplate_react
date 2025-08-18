import { classNames } from "primereact/utils";

// Función para generar PassThrough con tamaños personalizados
export const createAvatarPT = (customSize?: string) => ({
    root: ({ props, state }) => ({
        className: classNames(
            'flex items-center justify-center',
            {
                'rounded-lg': props.shape == 'square',
                'rounded-full': props.shape == 'circle'
            },
            {
                // Tamaños estándar de PrimeReact
                'text-[14px] h-[42px] w-[42px] p-[10px]': props.size == 'normal' && !customSize,
                'h-[54px] w-[54px] text-[16px] p-[16px]': props.size == 'large' && !customSize,
                'w-[72px] h-[69px] text-[24px] p-[20px]': props.size == 'xlarge' && !customSize,

                // Tamaños personalizados
                'text-[10px] h-[32px] w-[32px]': customSize == 'xs',
                'text-[12px] h-[40px] w-[40px]': customSize == 'sm',
                'text-[16px] h-[54px] w-[54px]': customSize == 'md',
                'text-[24px] h-[72px] w-[72px]': customSize == 'lg',
            },
            {
                // Padding solo para texto, no para imágenes
                'p-[8px]': customSize == 'xs' && !props.image,
                'p-[12px]': customSize == 'sm' && !props.image,
                'p-[16px]': customSize == 'md' && !props.image,
                'p-[20px]': customSize == 'lg' && !props.image,
            },
            {
                '-ml-4 border-2 border-white': state.isNestedInAvatarGroup
            }
        )
    }),
    image: {
        className: 'h-full w-full object-cover'
    }
});

// PassThrough estándar para uso directo
export const avatarPT = createAvatarPT();

// PassThrough para AvatarGroup
export const avatargroupPT = {
    root: 'flex items-center'
};

// Tipos para TypeScript
export type CustomAvatarSize = 'xs' | 'sm' | 'md' | 'lg';