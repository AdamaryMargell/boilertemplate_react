import { scrollPanelPT } from "@/primereact-tailwindcss/scrollPanel.pt";
import { ScrollPanel, ScrollPanelProps } from "primereact/scrollpanel";
import { ReactNode } from "react";

interface XScrolPanelProps extends ScrollPanelProps {
    children?: ReactNode;
}
const XScrollPanel = ({ children, ...props }: XScrolPanelProps) => {
    return (
        <ScrollPanel {...props} pt={{...scrollPanelPT}}>
            {children}
        </ScrollPanel>
    )
}

export default XScrollPanel