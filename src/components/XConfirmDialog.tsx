// 'use client';
// import { confirmDialogPT } from '@/primereact-tailwindcss/confirmDialog.pt';
// import { ConfirmDialog, ConfirmDialogProps } from 'primereact/confirmdialog';
// import React, { ReactNode } from 'react'

// interface XConfirmDialogProps extends ConfirmDialogProps {
//     children?: ReactNode;
// }
// const XConfirmDialog = ({ children, ...props }: XConfirmDialogProps) => {
//     return (
//         <ConfirmDialog {...props} pt={{ ...confirmDialogPT }}>
//             {children}
//         </ConfirmDialog>
//     )
// }

// export default XConfirmDialog

'use client'; // Asegúrate de que esto está en la primera línea
import { confirmDialogPT } from '@/primereact-tailwindcss/confirmDialog.pt';
import { ConfirmDialog, ConfirmDialogProps } from 'primereact/confirmdialog';
import React from 'react';

interface XConfirmDialogProps extends ConfirmDialogProps {
    children?: React.ReactNode;
}

const XConfirmDialog = ({ children, ...props }: XConfirmDialogProps) => {
    // Filtra explícitamente `ref` para evitar el warning de React 19
    const { ref, ...filteredProps } = props as any;
    return (
        <ConfirmDialog {...filteredProps} pt={{ ...confirmDialogPT }}>
            {children}
        </ConfirmDialog>
    );
};

export default XConfirmDialog;