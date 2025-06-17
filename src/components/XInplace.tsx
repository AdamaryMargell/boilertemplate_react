// import { Inplace } from "primereact/inplace";
// import { ReactNode } from "react"

// interface XInplaceProps {
//     children?: ReactNode;
// }
// export const XInplace = ({ children, ...props }: XInplaceProps) => {
//     return (
//         <Inplace {...props}>
//             {children}
//         </Inplace>
//     )
// }

'use client';
import { inplacePT } from '@/primereact-tailwindcss/inplace.pt';
import { Inplace, InplaceProps } from 'primereact/inplace';
import { ReactNode } from 'react';

interface XInplaceProps extends InplaceProps {
    children?: ReactNode;
};

export const XInplace = ({ children, ...props }: XInplaceProps) => {
    return (
        <Inplace {...props} pt={inplacePT}>
            {children}
        </Inplace>
    );
};