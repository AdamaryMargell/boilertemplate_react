import { dataTablePT } from "@/primereact-tailwindcss/dataTable.pt";
import { DataTable, DataTableProps } from "primereact/datatable";
import { ReactNode } from "react";

// Definición correcta con tipo genérico
interface XDataTableProps<TValue> extends DataTableProps<TValue> {
    children?: ReactNode;
}

// Componente con tipo genérico
const XDataTable = <TValue,>({ children, ...props }: XDataTableProps<TValue>) => {
    return (
        <DataTable {...props} pt={dataTablePT}>
            {children}
        </DataTable>
    );
};

export default XDataTable;