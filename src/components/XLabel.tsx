import React from 'react';

type XLabelProps = {
    htmlFor: string;
    children: React.ReactNode;
    required?: boolean;
    error?: boolean;
}

const XLabel = ({
    htmlFor,
    children,
    required = false,
    error = false,
}: XLabelProps) => {
    return (
        <label
            htmlFor={htmlFor}
            className={`
                inline-flex items-center gap-[2px]
                font-medium text-[#3C3C3C]
                ${error ? 'text-red' : ''}
            `}
        >
            {children}
            {required && (
                <span
                    className={`
                        text-red
                        inline-block
                    `}
                >
                    *
                </span>
            )}
        </label>
    )
}

export default XLabel