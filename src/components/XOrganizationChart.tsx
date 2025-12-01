import { OrganizationChart, OrganizationChartProps } from "primereact/organizationchart"
import { ReactNode } from "react";

interface XOrganizationChartProps extends OrganizationChartProps {
    children?: ReactNode;
}

const XOrganizationChart = ({ children, ...props }: XOrganizationChartProps) => {
    return (
        <OrganizationChart {...props}>
            {children}
        </OrganizationChart>
    )
}

export default XOrganizationChart;