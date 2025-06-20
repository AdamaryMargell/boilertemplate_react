import { triStateCheckboxPT } from '@/primereact-tailwindcss/triStateCkeckbox.pt';
import { TriStateCheckbox, TriStateCheckboxProps } from 'primereact/tristatecheckbox';
import { ReactNode } from 'react';

interface XTriStateCheckboxProps extends TriStateCheckboxProps {
    children?: ReactNode;
}

const XTriStateCheckbox = ({
    children,
    ...props
}: XTriStateCheckboxProps) => {
    return (
        <TriStateCheckbox
            {...props}
            pt={triStateCheckboxPT}
        >
            {children}
        </TriStateCheckbox>
    );
};

export default XTriStateCheckbox;