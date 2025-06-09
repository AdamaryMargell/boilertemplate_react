import { tooltipPT } from "@/primereact-tailwindcss/tooltip.pt";
import { Tooltip, TooltipProps } from "primereact/tooltip";
import React, { useId } from "react";

interface XTooltipProps extends TooltipProps {
    children?: React.ReactElement<any>;
}

const XTooltip = ({ children, target, ...props }: XTooltipProps) => {
    const id = useId();
    const tooltipId = `x-tooltip-${id}`;

    if (children) {
        const childWithId = React.cloneElement(children, {
            id: children.props.id || tooltipId,
        });

        return (
            <>
                <Tooltip
                    {...props}
                    target={`#${children.props.id || tooltipId}`}
                    pt={{ ...tooltipPT }}
                />
                {childWithId}
            </>
        );
    }

    return <Tooltip {...props} target={target} pt={{ ...tooltipPT }} />;
};

export default XTooltip;
