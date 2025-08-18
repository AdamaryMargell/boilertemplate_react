"use client";
import { useRef, useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import "country-flag-icons/3x2/flags.css";
import XInputPhoneCodeSelector from '@/components/XInputPhoneNumber';
import { XForm } from '@/components/XForm';
import XButton from '@/components/XButton';
import { XInputText } from '@/components/XInputText';
import XToast from '@/components/XToast';
import XConfirmDialog from '@/components/XConfirmDialog';
import { confirmDialog } from 'primereact/confirmdialog';
import XIcon from '@/components/XIcons/XIcon';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import { inputTextPT } from '@/primereact-tailwindcss/inputText.pt';
import '../../styles/inputGroup.css';
import { XInputNumber } from '@/components/XInputNumber';
import { register } from 'module';
import { InputNumber } from 'primereact/inputnumber';
import { inputNumberPT } from '@/primereact-tailwindcss/inputNumber.pt';
import XBadge from '@/components/XBadge';
import XAvatarGroup from '@/components/XAvatar/Group';
import XAvatar from '@/components/XAvatar';
const PagePruebas = () => {

    return (
        <>
            <h1>Button</h1>
            <div className="card flex flex-wrap align-items-center justify-content-center gap-3">
                <XButton label="Small" icon={<XIcon name='check' size={13} />} size="small" />
                <XButton label="Normal" icon={<XIcon name='check' size={15} />} />
                <XButton label="Large" icon={<XIcon name='check' size={18} />} size="large" />
            </div>

            <div className="card flex flex-wrap align-items-center justify-content-center gap-3">
                <XButton label="Small" icon={<XIcon name='check' size={13} />} size="small" severity="secondary" />
                <XButton label="Normal" icon={<XIcon name='check' size={15} />} severity="secondary" />
                <XButton label="Large" icon={<XIcon name='check' size={18} />} size="large" severity="secondary" />
            </div>

            <div className="card flex flex-wrap align-items-center justify-content-center gap-3">
                <XButton label="Small" icon={<XIcon name='check' size={13} />} size="small" text />
                <XButton label="Normal" icon={<XIcon name='check' size={15} />} text />
                <XButton label="Large" icon={<XIcon name='check' size={18} />} text />
            </div>

            <h2>Button Disabled</h2>
            <div className="card flex flex-wrap align-items-center justify-content-center gap-3">
                <XButton label="Small" icon={<XIcon name='check' size={13} />} size="small" disabled />
                <XButton label="Normal" icon={<XIcon name='check' size={15} />} disabled />
                <XButton label="Large" icon={<XIcon name='check' size={18} />} size="large" disabled />
            </div>

            <div className="card flex flex-wrap align-items-center justify-content-center gap-3">
                <XButton label="Small" icon={<XIcon name='check' size={13} />} size="small" severity="secondary" disabled />
                <XButton label="Normal" icon={<XIcon name='check' size={15} />} severity="secondary" disabled />
                <XButton label="Large" icon={<XIcon name='check' size={18} />} size="large" severity="secondary" disabled />
            </div>

            <div className="card flex flex-wrap align-items-center justify-content-center gap-3">
                <XButton label="Small" icon={<XIcon name='check' size={13} />} size="small" text disabled />
                <XButton label="Normal" icon={<XIcon name='check' size={15} />} text disabled />
                <XButton label="Large" icon={<XIcon name='check' size={18} />} text disabled />
            </div>

            <h2>Button Danger</h2>
            <div className="card flex flex-wrap align-items-center justify-content-center gap-3">
                <XButton label="Small" icon={<XIcon name='check' size={13} />} size="small" severity="danger" />
                <XButton label="Normal" icon={<XIcon name='check' size={15} />} severity="danger" />
                <XButton label="Large" icon={<XIcon name='check' size={18} />} size="large" severity="danger" />
            </div>

            <div className="card flex flex-wrap align-items-center justify-content-center gap-3">
                <XButton label="Small" icon={<XIcon name='check' size={13} />} size="small" severity="danger" outlined />
                <XButton label="Normal" icon={<XIcon name='check' size={15} />} severity="danger" outlined />
                <XButton label="Large" icon={<XIcon name='check' size={18} />} size="large" severity="danger" outlined />
            </div>

            <div className="card flex flex-wrap align-items-center justify-content-center gap-3">
                <XButton label="Small" icon={<XIcon name='check' size={13} />} size="small" text severity="danger" />
                <XButton label="Normal" icon={<XIcon name='check' size={15} />} text severity="danger" />
                <XButton label="Large" icon={<XIcon name='check' size={18} />} text severity="danger" />
            </div>

            <h1>OTROS</h1>
            <XForm onSubmit={() => console.log('OK')} onInvalid={() => console.log('ERROR')}>
                <XInputText
                    name="nombre"
                    label="Nombre"
                    labelRequired
                    placeholder='Nombre'
                    className="p-inputtext-sm"
                    rules={{
                        required: 'El nombre de usuario es requerido',
                        minLength: {
                            value: 3,
                            message: 'Mínimo 3 caracteres'
                        },
                        maxLength: {
                            value: 20,
                            message: 'Máximo 20 caracteres'
                        }
                    }}
                />
                <XInputText
                    name="apellido"
                    label="Apellido"
                    placeholder='Apellido'
                    labelRequired
                    rules={{ required: 'El apellido es requerido' }}
                />
                <XInputText
                    name="apellidoM"
                    label="Apellido Materno"
                    placeholder='Apellido Materno'
                    labelRequired
                    className="p-inputtext-lg"
                    rules={{ required: 'El apellido es requerido' }}
                />
                <XButton type="submit" label="Enviar" />
            </XForm >
            <div className='rounded-lg'></div>
            <XForm onSubmit={() => { console.log('OK') }} onInvalid={() => console.log('ERROR')} className="p-4 space-y-4">
                <XInputPhoneCodeSelector
                    name="phoneNumber"
                    label="Teléfono"
                    labelRequired
                    rules={{ required: 'El teléfono es requerido' }}
                    defaultCountry="BO"
                />
                <XButton type="submit" label="Enviar" />
            </XForm>

            <div className="card relative">
                <XConfirmDialog />
                <div className="card flex flex-wrap gap-2 justify-content-center">
                    {/* <XButton onClick={confirm1} icon="pi pi-check" label="Confirm" className="mr-2"></XButton> */}
                </div>
            </div>

            {/* <div className="card flex flex-column md:flex-row gap-3">
                <XForm onSubmit={() => { console.log('OK') }} onInvalid={() => console.log('ERROR')} className="p-4 space-y-4">
                    <XInputGroup
                        label="Precio"
                        name="price"
                        labelRequired
                        rules={{ required: 'Precio obligatorio' }}
                        leftAddon={<XIcon name="coin-dollar" />}
                    >
                        <InputNumber name='hoa' pt={inputNumberPT(false)} />
                    </XInputGroup>

                    <XButton type="submit" label="Enviar" />
                </XForm >
            </div > */}
        </>
    )
};

export default PagePruebas;