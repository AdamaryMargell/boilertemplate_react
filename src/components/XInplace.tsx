import { Inplace, InplaceContent, InplaceDisplay } from "primereact/inplace";
import { ReactNode } from "react"

interface XInputProps {
    display?: ReactNode;
    content?: ReactNode;
}
export const XInplace: React.FC<XInputProps> = ({
    display,
    content,
    ...props
}) => {
    return (
        <Inplace {...props}>
            {display && <InplaceDisplay>{display}</InplaceDisplay>}
            {content && <InplaceContent>{content}</InplaceContent>}
        </Inplace>
    )
}
