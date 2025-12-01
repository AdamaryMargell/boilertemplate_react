import { ToggleButton, ToggleButtonProps } from 'primereact/togglebutton';

const XToggleButton = ({
    ...props
}: ToggleButtonProps) => {

    return (

    <ToggleButton {...props} />
    )
}
XToggleButton.displayName = 'XToggleButton';
export default XToggleButton