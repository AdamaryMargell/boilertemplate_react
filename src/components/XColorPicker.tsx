import { colorPickerPT } from '@/primereact-tailwindcss/colorPicker.pt';
import { ColorPicker, ColorPickerProps } from 'primereact/colorpicker';
import React, { ReactNode } from 'react'

interface XColorPickerProps extends ColorPickerProps {
    children?: ReactNode;
}
const XColorPicker: React.FC<XColorPickerProps> = ({ children, ...props }) => {
    return (
        <ColorPicker {...props} pt={{
            ...colorPickerPT,
            input: {
                ...colorPickerPT?.input,
                style: {
                    ...colorPickerPT?.input?.style,
                    backgroundColor: props.value
                }
            }
        }} />
    )
}
export default XColorPicker;