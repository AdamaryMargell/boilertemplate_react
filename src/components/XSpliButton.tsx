import { splitButtonPT } from '@/primereact-tailwindcss/splitButton.pt';
import { SplitButton, SplitButtonProps } from 'primereact/splitbutton';
import React, { ReactNode } from 'react'

interface XSplitButtonProps extends SplitButtonProps {
    children?: ReactNode;
}
const XSplitButton = ({ children, ...props }: XSplitButtonProps) => {
    const baseButtonStyles = ` bg-[#7866CB] font-semibold 
    px-4 py-2 h-[38px] 
    text-white hover:bg-[#7866CB]
    border border-[#7866CB] hover:border-[#7866CB]
    rounded-l-md border-r-0
    focus:z-10 focus:outline-none focus:ring-2 focus:ring-[#7866CB]
    transition-colors duration-200
    flex items-center justify-center`;

    const baseMenuButtonStyles = `relative inline-flex items-center justify-center
    px-3 py-2 h-[38px]
    text-white bg-[#7866CB] hover:bg-[#7866CB] 
    border border-[#7866CB] hover:border-[#7866CB] 
    rounded-r-md border-l-0
    focus:z-10 focus:outline-none focus:ring-2 focus:ring-[#7866CB]
    transition-colors duration-200`;

    const menuStyles = `bg-white border border-gray-300 rounded-md shadow-md w-48
    [&_li]:px-4 [&_li]:py-2 [&_li]:cursor-pointer hover:rounded-md 
    [&_li:hover]:bg-[#F3F4F6] hover:rounded-md
    [&_li.p-highlight]:border border-[#CDCDCD] rounded-md`

    return (
        <SplitButton {...props}
            className="border-0 shadow-none inline-flex"
            buttonClassName={baseButtonStyles}
            menuButtonClassName={baseMenuButtonStyles}
            menuClassName={menuStyles}>
            {children}
        </SplitButton>
    )
}
export default XSplitButton;


