'use client';
import { FloatLabel, type FloatLabelProps } from "primereact/floatlabel";
import { Children, ReactNode } from "react";

type XFloatLabelProps = Omit<FloatLabelProps, "children"> & {
    children: ReactNode;
};

export const XFloatLabel = (props: XFloatLabelProps) => {
    // Convertimos children a array para cumplir con los tipos de PrimeReact
    const childrenArray = Children.toArray(props.children);

    return <FloatLabel {...props} children={childrenArray} />;
};