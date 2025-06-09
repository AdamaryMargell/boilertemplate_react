import { pickListPT } from "@/primereact-tailwindcss/pickList.pt";
import { PickList, PickListProps } from "primereact/picklist"

interface XPickListProps extends PickListProps {
    dataKey: string;
}
export const XPickList = ({ dataKey, ...props }: XPickListProps) => {
    return (
        <PickList dataKey={dataKey} {...props} pt={{ ...pickListPT }} />
    )
}
