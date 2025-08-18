// // 'use client';
// // import { inputTextPT, getInputGroupClasses } from '@/primereact-tailwindcss/inputText.pt';
// // import { InputText, InputTextProps } from 'primereact/inputtext';
// // import { useController, useFormContext } from 'react-hook-form';
// // import { ReactNode } from 'react';
// // import XLabel from './XLabel';

// // type XInputGroupProps = {
// //     name: string;
// //     label?: string;
// //     labelRequired?: boolean;
// //     rules?: any;
// //     // validation?: (val: string) => string;
// //     leftAddon?: ReactNode;
// //     rightAddon?: ReactNode;
// //     leftAddonText?: string;
// //     rightAddonText?: string;
// //     children?: ReactNode;
// // } & Omit<InputTextProps, 'name' | 'value' | 'onChange'>;

// // export const XInputGroup = ({
// //     name,
// //     label,
// //     labelRequired,
// //     rules,
// //     validation,
// //     leftAddon,
// //     rightAddon,
// //     leftAddonText,
// //     rightAddonText,
// //     children,
// //     ...props
// // }: XInputGroupProps) => {
// //     const { control } = useFormContext();
// //     const {
// //         field: { value, onChange, ref, ...fieldProps },
// //         fieldState: { error }
// //     } = useController({
// //         name,
// //         control,
// //         rules,
// //         defaultValue: ''
// //     });

// //     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// //         const newValue = validation ? validation(event.target.value) : event.target.value;
// //         onChange(newValue);
// //     };

// //     // Función para renderizar addon
// //     const renderAddon = (addon?: ReactNode, addonText?: string) => {
// //         if (addon) return addon;
// //         if (addonText) return <span>{addonText}</span>;
// //         return null;
// //     };

// //     return (
// //         <div className="flex flex-col gap-1">
// //             {label && (
// //                 <XLabel
// //                     htmlFor={name}
// //                     required={labelRequired}
// //                     error={!!error}
// //                 >
// //                     {label}
// //                 </XLabel>
// //             )}

// //             <div className={getInputGroupClasses(!!error)}>
// //                 {/* Left Addon */}
// //                 {(leftAddon || leftAddonText) && (
// //                     <span className="p-inputgroup-addon">
// //                         {renderAddon(leftAddon, leftAddonText)}
// //                     </span>
// //                 )}

// //                 {/* Input */}
// //                 {children}

// //                 {/* Right Addon */}
// //                 {(rightAddon || rightAddonText) && (
// //                     <span className="p-inputgroup-addon">
// //                         {renderAddon(rightAddon, rightAddonText)}
// //                     </span>
// //                 )}
// //             </div>

// //             {error?.message && (
// //                 <small id={`${name}-error`} className="text-xs text-status-error-default">
// //                     {error.message.toString()}
// //                 </small>
// //             )}
// //         </div>
// //     );
// // };


// 'use client';
// import { ReactNode, cloneElement, isValidElement } from 'react';
// import { useController, useFormContext } from 'react-hook-form';
// import XLabel from './XLabel';
// import { getInputGroupClasses } from '@/primereact-tailwindcss/inputText.pt';

// type XInputGroupProps = {
//     name: string;
//     label?: string;
//     labelRequired?: boolean;
//     rules?: any;
//     validation?: (val: string) => string;
//     children: ReactNode;
//     leftAddon?: ReactNode;
//     rightAddon?: ReactNode;
//     leftAddonText?: string;
//     rightAddonText?: string;
// };

// export const XInputGroup = ({
//     name,
//     label,
//     labelRequired,
//     rules,
//     validation,
//     children,
//     leftAddon,
//     rightAddon,
//     leftAddonText,
//     rightAddonText
// }: XInputGroupProps) => {
//     const { control } = useFormContext();
//     const {
//         field,
//         fieldState: { error }
//     } = useController({
//         name,
//         control,
//         rules,
//         defaultValue: ''
//     });

//     const enhancedChild = isValidElement(children)
//         ? cloneElement(children, {
//             ...field,
//             value: field.value ?? '',
//             onChange: (e: any) => {
//                 const value = e?.value ?? e?.target?.value;
//                 const validated = validation ? validation(value) : value;
//                 field.onChange(validated);
//             },
//             className: `${children.props.className ?? ''} ${error ? 'p-invalid' : ''}`,
//             'aria-describedby': error ? `${name}-error` : undefined
//         })
//         : children;

//     const renderAddon = (addon?: ReactNode, addonText?: string) => {
//         if (addon) return addon;
//         if (addonText) return <span>{addonText}</span>;
//         return null;
//     };

//     return (
//         <div className="flex flex-col gap-1">
//             {label && (
//                 <XLabel htmlFor={name} required={labelRequired} error={!!error}>
//                     {label}
//                 </XLabel>
//             )}

//             <div className={getInputGroupClasses(!!error)}>
//                 {leftAddon || leftAddonText ? (
//                     <span className="p-inputgroup-addon">{renderAddon(leftAddon, leftAddonText)}</span>
//                 ) : null}

//                 {enhancedChild}

//                 {rightAddon || rightAddonText ? (
//                     <span className="p-inputgroup-addon">{renderAddon(rightAddon, rightAddonText)}</span>
//                 ) : null}
//             </div>

//             {error?.message && (
//                 <small id={`${name}-error`} className="text-xs text-status-error-default">
//                     {error.message}
//                 </small>
//             )}
//         </div>
//     );
// };
