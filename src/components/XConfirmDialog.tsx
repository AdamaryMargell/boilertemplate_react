'use client';
import { confirmDialogPT } from '@/primereact-tailwindcss/confirmDialog.pt';
import { ConfirmDialog, ConfirmDialogProps } from 'primereact/confirmdialog';
import React, { ReactNode } from 'react'

interface XConfirmDialogProps extends ConfirmDialogProps {
    children?: ReactNode;
}
const XConfirmDialog = ({ children, ...props }: XConfirmDialogProps) => {
    return (
        <ConfirmDialog {...props} pt={{ ...confirmDialogPT }}>
            {children}
        </ConfirmDialog>
    )
}

export default XConfirmDialog
