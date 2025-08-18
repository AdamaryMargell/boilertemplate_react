// import { Message } from 'primereact/message'
// import React from 'react'

// interface MessageProps{
//     variant?: 'simple' | 'outlined'
// }

// const XMessage: React.FC<MessageProps> = ({ variant, ...props }) => {
    
//     const getVariantClasses = () => {
//     switch (variant) {
//       case 'simple':
//         return 'bg-white p-0 m-0';
//       default:
//         return '';
//     }
//   };
    
//     return (
//         <Message {...props}  className={getVariantClasses()}/>
//     )
// }

// export default XMessage

import { Message, MessageProps as PrimeMessageProps } from 'primereact/message'
import React from 'react'

interface XMessageProps extends Omit<PrimeMessageProps, 'className'> {
    variant?: 'simple' | 'outlined' | 'filled'
    severity?: 'success' | 'info' | 'warn' | 'error' | 'secondary' | 'contrast'
    className?: string
}

const XMessage: React.FC<XMessageProps> = ({ 
    variant = 'filled', 
    severity = 'info',
    className,
    ...props 
}) => {

        const getClassName = () => {
        let classes = className || ''
        if (variant === 'simple') {
            classes += ' p-message-inline-simple'
        } else if (variant === 'outlined') {
            classes += ' p-message-inline-outlined'
        }
        
        return classes.trim()
    }


    return (
        <Message 
            severity={severity}
            className={getClassName()}
            {...props}
        />
    )
}

export default XMessage