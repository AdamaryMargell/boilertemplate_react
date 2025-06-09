import { toastPT } from "@/primereact-tailwindcss/toast.pt";
import { Toast, ToastProps } from "primereact/toast";
import React, { forwardRef, useId } from "react";

interface XTooltipProps extends ToastProps {
    children?: React.ReactElement<any>;
}
const XToast = forwardRef<Toast, XTooltipProps>(({
    children,
    ...props
}, ref) => {
    return (
        <>
            <Toast ref={ref} {...props} pt={{ ...toastPT }} />
        </>
    )
});

export default XToast;