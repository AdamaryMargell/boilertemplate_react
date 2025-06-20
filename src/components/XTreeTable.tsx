import { treeTablePT } from '@/primereact-tailwindcss/treeTable.pt';
import { TreeTable, TreeTableProps } from 'primereact/treetable';
import React, { ReactNode } from 'react'

interface XTreeTableProps extends TreeTableProps {
    children?: ReactNode;
}

const XTreeTable = ({ children, ...props }: XTreeTableProps) => {
    return (
        <TreeTable {...props} pt={treeTablePT}>
            {children}
        </TreeTable>
    )
}

export default XTreeTable