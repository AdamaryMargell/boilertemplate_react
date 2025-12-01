import { SelectButton, SelectButtonProps } from "primereact/selectbutton";

const XSelectButton = ({
    ...props
}: SelectButtonProps) => {

    return (
        <SelectButton {...props} />
    );
};

XSelectButton.displayName = 'XSelectButton';
export default XSelectButton;