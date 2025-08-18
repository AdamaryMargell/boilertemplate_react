import React, { useRef } from 'react'
import Icon from './XIcons/XIcon';
import XMessages from '@/components/XMessages';
import { Messages } from 'primereact/messages';
import { useMountEffect } from 'primereact/hooks';

interface XSnackbarProps {
    icon: string;
    severity?: 'success' | 'info' | 'warn' | 'error' | 'secondary' | 'contrast';
    bgCircle?: string;
    classIcon?: string;
    closable?: boolean;
    children?: React.ReactNode;
}
export const XSnackbar = ({
    icon,
    severity = 'contrast',
    bgCircle = '',
    classIcon = '',
    closable,
    children,
}: XSnackbarProps) => {
    // const colors = colorConfig[severity];
    const msgs = useRef<Messages>(null);

    useMountEffect(() => {
        msgs.current?.clear();
        msgs.current?.show([
            {
                sticky: true,
                severity: severity,
                closable: closable,
                content: (
                    <div className="flex">
                        <div className="flex-shrink-0 ">
                            <div className={`absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center ${bgCircle}`}>
                                <Icon name={icon} size={24} category="actions" className={`${classIcon}`} />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            {children}
                        </div>
                    </div>
                )
            },
        ]);
    });

    return (
        <XMessages ref={msgs} />
    );
};

