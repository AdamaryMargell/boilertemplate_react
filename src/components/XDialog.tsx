// import { dialogPT } from "@/primereact-tailwindcss/dialog.pt";
// import { Dialog, DialogProps } from "primereact/dialog";
// import { ReactNode } from "react";

// interface XDialogProps extends Omit<DialogProps, 'visible' | 'onHide'> {
//     children: ReactNode;
// }

// export const XDialog = ({

//     children,
//     ...props
// }: XDialogProps) => {
//     return (
//         <Dialog
//             {...props}
//             pt={{ ...dialogPT }}
//         >
//             {children}
//         </Dialog >
//     );
// };

'use client';
import { dialogPT } from "@/primereact-tailwindcss/dialog.pt";
import { Dialog, DialogProps } from "primereact/dialog";
import { ReactNode, ForwardedRef, forwardRef } from "react";

interface XDialogProps extends DialogProps {
    children: ReactNode;

}

const XDialog = forwardRef<HTMLDivElement, XDialogProps>(
    ({ children, ...props }, ref) => {
        // Manejo de la compatibilidad entre React 18 y 19
        const dialogProps = {
            ...props,
            pt: { ...dialogPT, ...props.pt }
        };

        return (
            <Dialog {...dialogProps}>
                {children}
            </Dialog>
        );
    }
);

XDialog.displayName = 'XDialog';

export { XDialog };