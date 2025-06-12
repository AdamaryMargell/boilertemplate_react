import { paginatorPT } from "@/primereact-tailwindcss/paginator.pt";
import { Paginator, PaginatorProps } from "primereact/paginator";
import { ReactNode } from "react";

interface XPaginatorProps extends PaginatorProps {
    children?: ReactNode;
}

const XPaginator = ({ children, ...props }: XPaginatorProps) => {
    return (
        <Paginator {...props} pt={{ ...paginatorPT }}>
            {children}
        </Paginator>
    )
}

export default XPaginator