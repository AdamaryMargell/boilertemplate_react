'use client';
import React, { useRef, useState } from 'react';
import { Toast } from 'primereact/toast';
import { Steps } from 'primereact/steps';
import XSteps from '@/components/XSteps';
import XToast from '@/components/XToast';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import XButton from '@/components/XButton';
import { confirmDialogPT } from '@/primereact-tailwindcss/confirmDialog.pt';
import XConfirmDialog from '@/components/XConfirmDialog';
import { XDialog } from '@/components/XDialog';

export default function DemoPage() {
    // Ejemplo de uso con React 18/19
    const [open, setOpen] = useState(false);


    return (
        <>
            <XButton label="Show" icon="pi pi-external-link" onClick={() => setOpen(true)} />
            <XDialog visible={open} modal header={'hia'} footer={'jj'} style={{ width: '50rem' }} onHide={() => { if (!open) return; setOpen(false); }}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </XDialog>
        </>
    )
}