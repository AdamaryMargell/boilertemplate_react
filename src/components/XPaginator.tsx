import { Paginator, PaginatorProps } from "primereact/paginator";
import { ReactNode } from "react";

interface XPaginatorProps extends PaginatorProps {
    children?: ReactNode;
}

const XPaginator = ({ children, ...props }: XPaginatorProps) => {
    return (
        <Paginator {...props}>
            {children}
        </Paginator>
    )
}

export default XPaginator