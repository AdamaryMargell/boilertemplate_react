import { InputSwitch, InputSwitchProps } from 'primereact/inputswitch';

const XInputSwitch = ({
    ...props
}: InputSwitchProps) => {
    return (
        <InputSwitch {...props}/>
    )
}

XInputSwitch.displayName = 'XInputSwitch';

export default XInputSwitch