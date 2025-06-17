import { terminalPT } from "@/primereact-tailwindcss/terminalPT";
import { Terminal, TerminalProps } from "primereact/terminal"
import { ReactNode } from "react";

interface XTerminalProps extends TerminalProps {
    children?: ReactNode;
}


const XTerminal = ({ children, ...props }: XTerminalProps) => {

    return (
        <Terminal {...props} pt={{ ...terminalPT }} unstyled>
            {children}
        </Terminal>
    )
}

export default XTerminal