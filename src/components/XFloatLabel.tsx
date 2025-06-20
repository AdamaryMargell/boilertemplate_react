'use client';
import { floatLabelPT } from "@/primereact-tailwindcss/floatLabel.pt";
import { FloatLabel, type FloatLabelProps } from "primereact/floatlabel";
import { ReactNode } from "react";

interface XFloatLabelProps extends FloatLabelProps {
    children?: ReactNode[];
}
const XFloatLabel = ({ children, ...props }: XFloatLabelProps) => {

    return (
        <FloatLabel {...props} pt={floatLabelPT}>
            {children}
        </FloatLabel>
    )
};

export default XFloatLabel;