import { organizationChartPT } from "@/primereact-tailwindcss/organizationChart.pt";
import { OrganizationChart, OrganizationChartProps } from "primereact/organizationchart"
import { ReactNode } from "react";

interface XOrganizationChartProps extends OrganizationChartProps {
    children?: ReactNode;
}

const XOrganizationChart = ({ children, ...props }: XOrganizationChartProps) => {
    return (
        <OrganizationChart {...props} pt={{ ...organizationChartPT }}>
            {children}
        </OrganizationChart>
    )
}

export default XOrganizationChart;