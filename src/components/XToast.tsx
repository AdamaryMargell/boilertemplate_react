import { Toast, ToastMessage } from "primereact/toast";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import XIcon from "./XIcons/XIcon";

// interface XTooltipProps extends ToastProps {
//     children?: React.ReactElement<any>;
//     icon?: string;
//     iconClassName?: string;
// }
// const XToast = forwardRef<Toast, XTooltipProps>(({
//     icon,
//     iconClassName,
//     children,
//     ...props
// }, ref) => {
// const iconElement = icon ? <XIcon key={`icon-${icon}`} className={`${iconClassName}`} name={`${icon}`} /> : children;

//     return (

//         <>
//             <Toast ref={ref} {...props} icon={iconElement} />
//         </>
//     )
// });

// export default XToast;


interface XToastMessage extends Omit<ToastMessage, 'icon'> {
    icon?: string | React.ReactNode;
}

interface XToastRef {
    show: (message: XToastMessage) => void;
}

const XToast = forwardRef<XToastRef, {}>((props, ref) => {
    const toastRef = useRef<Toast>(null);

    useImperativeHandle(ref, () => ({
        show: (message: XToastMessage) => {
            const { icon, ...restOfMessage } = message;

            let processedIcon;
            if (typeof icon === 'string') {
                processedIcon = <XIcon name={icon} className="p-toast-message-icon" />;
            } else {
                processedIcon = icon;
            }

            toastRef.current?.show({
                ...restOfMessage,
                icon: processedIcon
            });
        },
    }));

    return (<Toast ref={toastRef} {...props} />)
});

export default XToast;
