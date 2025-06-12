import { fieldsetPT } from '@/primereact-tailwindcss/fieldset.pt';
import { Fieldset, FieldsetProps } from 'primereact/fieldset';
import React, { ReactNode } from 'react'

interface XFieldsetProps extends FieldsetProps {
    children?: ReactNode;
}

const XFieldset = ({ children, ...props }: XFieldsetProps) => {
    return (
        <Fieldset {...props} pt={{ ...fieldsetPT }}>
            {children}
        </Fieldset>
    )
}

export default XFieldset