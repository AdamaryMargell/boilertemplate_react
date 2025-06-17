import { datascrollerPT } from "@/primereact-tailwindcss/datascroller.pt";
import { DataScroller, DataScrollerProps } from "primereact/datascroller";
import { ReactNode, forwardRef } from "react";

interface XDataScrollerProps extends DataScrollerProps {
    children?: ReactNode;
}

const XDataScroller = forwardRef<DataScroller, XDataScrollerProps>(
    ({ children, ...props }, ref) => {
        return (
            <DataScroller
                {...props}
                ref={ref}
                pt={{ ...datascrollerPT }}
                unstyled
            >
                {children}
            </DataScroller>
        );
    }
);

XDataScroller.displayName = 'XDataScroller';

export default XDataScroller;