// import { RadioButton, RadioButtonChangeEvent, RadioButtonProps } from 'primereact/radiobutton';
// import { useController, useFormContext } from 'react-hook-form';

// type XRadioButtonProps = {
//     name: string;
//     label?: string;
//     labelRequired?: boolean;
//     rules?: any;
//     validation?: (val: boolean) => boolean;
//     value: any;
//     isFirstInGroup?: boolean;
// } & Omit<RadioButtonProps, 'name' | 'checked' | 'value' | 'onChange'>;

// const XRadioButton = ({
//     name,
//     label,
//     labelRequired,
//     rules,
//     validation,
//     inputId,
//     value: radioValue,
//     isFirstInGroup = false,
//     ...props
// }: XRadioButtonProps) => {
//     const { control } = useFormContext();

//     const {
//         field: { value, onChange, ref, ...fieldProps },
//         fieldState: { error }
//     } = useController({
//         name,
//         control,
//         rules: isFirstInGroup ? rules : undefined, // Solo aplicar reglas si es el primero del grupo
//         defaultValue: undefined
//     });



//     const handleChange = (event: RadioButtonChangeEvent) => {
//         let newValue = event.value;

//         if (validation) {
//             newValue = validation(newValue);
//         }

//         onChange(newValue);
//     };


//     const isChecked = value === radioValue;

//     const radioId = inputId || `${name}-${radioValue}`;

//     return (
//         <div className="flex align-items-center gap-2">
//             <RadioButton
//                 {...fieldProps}
//                 {...props}
//                 inputId={radioId}
//                 name={name}
//                 inputRef={ref}
//                 value={radioValue}
//                 checked={isChecked}
//                 onChange={handleChange}
//                 className={`${error ? 'p-invalid' : ''} ${props.className || ''}`}
//                 aria-describedby={error ? `${name}-error` : undefined}
//             />
//             {label && (
//                 <label htmlFor={radioId} className={`font-medium ${error ? 'text-red-500' : ''}`}>
//                     {label}
//                     {labelRequired && <span className="text-red-500"> *</span>}
//                 </label>
//             )}

//             {error?.message && (
//                 <small id={`${name}-error`} className="text-xs text-red-500">
//                     {error.message.toString()}
//                 </small>
//             )}
//         </div>
//     )
// }

// export default XRadioButton


// import { RadioButton, RadioButtonChangeEvent, RadioButtonProps } from 'primereact/radiobutton';
// import { useController, useFormContext } from 'react-hook-form';

// type XRadioButtonProps = {
//     name: string;
//     label?: string;
//     labelRequired?: boolean;
//     rules?: any;
//     validation?: (val: any) => any;
//     value: any; // Valor específico del radio button
//     isFirstInGroup?: boolean; // Nueva prop para indicar si es el primero del grupo
// } & Omit<RadioButtonProps, 'name' | 'checked' | 'value' | 'onChange'>;

// const XRadioButton = ({
//     name,
//     label,
//     labelRequired,
//     rules,
//     validation,
//     inputId,
//     value: radioValue,
//     isFirstInGroup = false,
//     ...props
// }: XRadioButtonProps) => {
//     const { control } = useFormContext();

//     const {
//         field: { value, onChange, ref, ...fieldProps },
//         fieldState: { error }
//     } = useController({
//         name,
//         control,
//         rules: isFirstInGroup ? rules : undefined, // Solo aplicar reglas si es el primero del grupo
//         defaultValue: undefined
//     });

//     const handleChange = (event: RadioButtonChangeEvent) => {
//         let newValue = event.value;

//         if (validation) {
//             newValue = validation(newValue);
//         }

//         onChange(newValue);
//     };

//     // Para radio buttons, comparamos el valor actual con el valor específico de este radio
//     const isChecked = value === radioValue;

//     const radioId = inputId || `${name}-${radioValue}`;

//     return (
//         <div className="flex items-center gap-2">
//             <RadioButton
//                 {...fieldProps}
//                 {...props}
//                 inputId={radioId}
//                 name={name}
//                 inputRef={ref}
//                 value={radioValue}
//                 checked={isChecked}
//                 onChange={handleChange}
//                 className={`${error ? 'p-invalid' : ''} ${props.className || ''}`}
//                 aria-describedby={error ? `${name}-error` : undefined}
//             />
//             {label && (
//                 <label
//                     htmlFor={radioId}
//                     className={`cursor-pointer ${error ? 'text-red-500' : ''}`}
//                 >
//                     {label}
//                     {labelRequired && <span className="text-red-500"> *</span>}
//                 </label>
//             )}

//             {/* Solo mostrar error en el primer radio button del grupo */}
//             {error?.message && isFirstInGroup && (
//                 <small
//                     id={`${name}-error`}
//                     className="text-xs text-red-500 block"
//                 >
//                     {error.message.toString()}
//                 </small>
//             )}
//         </div>
//     );
// };

// export default XRadioButton;


// 'use client';
// import { RadioButton, RadioButtonChangeEvent, RadioButtonProps } from 'primereact/radiobutton';
// import { useController, useFormContext } from 'react-hook-form';
// import { useEffect } from 'react';

// type XRadioButtonProps = {
//     name: string;
//     label?: string;
//     labelRequired?: boolean;
//     rules?: any;
//     validation?: (val: any) => any;
//     value: any;
//     orientation?: 'horizontal' | 'vertical';
//     showError?: boolean;
// } & Omit<RadioButtonProps, 'name' | 'checked' | 'value' | 'onChange'>;

// const XRadioButton = ({
//     name,
//     label,
//     labelRequired,
//     rules,
//     validation,
//     value: radioValue,
//     orientation = 'horizontal',
//     showError = true,
//     ...props
// }: XRadioButtonProps) => {
//     const { control } = useFormContext();
//     const {
//         field: { value, onChange, ref, ...fieldProps },
//         fieldState: { error }
//     } = useController({
//         name,
//         control,
//         rules,
//         defaultValue: props.defaultValue || undefined
//     });

//     const handleChange = (event: RadioButtonChangeEvent) => {
//         const newValue = radioValue !== undefined ? event.value : event.checked;
//         onChange(validation ? validation(newValue) : newValue);
//     };

//     const isChecked = radioValue !== undefined ? value === radioValue : Boolean(value);
//     const inputId = props.inputId || `${name}-${radioValue !== undefined ? radioValue : 'standalone'}`;
//     const containerClass = orientation === 'horizontal' ? 'flex items-center gap-2' : 'flex flex-col gap-1';

//     return (
//         <div className={containerClass}>
//             <div className="flex items-center gap-2">
//                 <RadioButton
//                     {...fieldProps}
//                     {...props}
//                     inputId={inputId}
//                     name={name}
//                     inputRef={ref}
//                     value={radioValue}
//                     checked={isChecked}
//                     onChange={handleChange}
//                     className={error ? 'p-invalid' : props.className}
//                 />
//                 {label && (
//                     <label htmlFor={inputId} className={`${error ? 'text-red-500' : ''}`}>
//                         {label}
//                         {labelRequired && <span className="text-red-500"> *</span>}
//                     </label>
//                 )}
//             </div>

//             {showError && error?.message && (
//                 <small className="text-xs text-red-500 block">
//                     {error.message.toString()}
//                 </small>
//             )}
//         </div>
//     );
// };

// export default XRadioButton;

