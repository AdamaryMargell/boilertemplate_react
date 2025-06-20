import { dataviewPT } from "@/primereact-tailwindcss/dataView.pt";
import { DataView, DataViewProps } from "primereact/dataview";
import { ReactNode } from "react";

interface XDataViewProps extends DataViewProps {
    children?: ReactNode;
}

const XDataView = ({ children, ...props }: XDataViewProps) => {
    return (
        <DataView {...props} pt={dataviewPT}>
            {children}
        </DataView>
    )
}

export default XDataView