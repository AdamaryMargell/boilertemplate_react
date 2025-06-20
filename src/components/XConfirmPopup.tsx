import { confirmPopupPT } from "@/primereact-tailwindcss/confirmPopup.pt";
import { ConfirmPopup, ConfirmPopupProps } from "primereact/confirmpopup";
import { ReactNode } from "react";

interface XConfirmPopupProps extends ConfirmPopupProps {
    children?: ReactNode;
}
const XConfirmPopup = ({ children, ...props }: XConfirmPopupProps) => {
    return (
        <ConfirmPopup {...props} pt={{ ...confirmPopupPT }}>
            {children}
        </ConfirmPopup>
    )
}

export default XConfirmPopup