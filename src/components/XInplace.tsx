import { Inplace, InplaceContent, InplaceDisplay } from "primereact/inplace";
import { ReactNode } from "react"

interface XInputProps {
    display?: ReactNode;
    content?: ReactNode;
}
export const XInplace = ({
    display,
    content,
    ...props
}: XInputProps) => {
    return (
        <Inplace {...props}>
            {display && <InplaceDisplay>{display}</InplaceDisplay>}
            {content && <InplaceContent>{content}</InplaceContent>}
        </Inplace>
    )
}
