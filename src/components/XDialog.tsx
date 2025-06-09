import { dialogPT } from "@/primereact-tailwindcss/dialog.pt";
import { Dialog, DialogProps } from "primereact/dialog";

interface XDialogProps extends Omit<DialogProps, 'visible' | 'onHide'> {
    visible: boolean;
    onHide: () => void;
    header?: React.ReactNode;
    footer?: React.ReactNode;
}

export const XDialog: React.FC<XDialogProps> = ({
    visible,
    onHide,
    header,
    footer,
    children,
    ...props
}) => {
    return (
        <Dialog
            visible={visible}
            onHide={onHide}
            modal
            {...props}
            header={header}
            footer={footer}
            pt={{ ...dialogPT }}
        >
            {children}
        </Dialog >
    );
};