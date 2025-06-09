import { orderListPT } from "@/primereact-tailwindcss/orderList.pt";
import { OrderList, OrderListProps } from "primereact/orderlist"
import { ReactNode } from "react"

interface XOrderListProps extends OrderListProps {
    dataKey: string;
    children?: ReactNode;
};
const XOrderList = ({ dataKey, ...props }: XOrderListProps) => {
    return (
        <OrderList dataKey={dataKey} {...props} pt={{ ...orderListPT }}/>
    )
}

export default XOrderList;