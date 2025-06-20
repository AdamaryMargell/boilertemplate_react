'use client';
import XButton from '@/components/XButton';
import XCalendar from '@/components/XCalendar';
import { XForm } from '@/components/XForm';
import XIconField from '@/components/XIconField';
import { IconDownload, IconGlobe } from '@/components/XIcons';
import Icon from '@/components/XIcons/Icon';
import { XInputNumber } from '@/components/XInputNumber';
import { XInputText } from '@/components/XInputText';
import XToggleButton from '@/components/XToggleButton';
import { calendarPT } from '@/primereact-tailwindcss/calendar.pt';
import { floatLabelPT } from '@/primereact-tailwindcss/floatLabel.pt';
import { iconFieldPT, inputIconPT } from '@/primereact-tailwindcss/iconField.pt';
import { inputTextPT } from '@/primereact-tailwindcss/inputText.pt';
import { Calendar } from 'primereact/calendar';
import { FloatLabel } from 'primereact/floatlabel';
import { Nullable } from 'primereact/ts-helpers';
import { useState } from 'react';


export default function DemoPage() {

    return (
        <div className="flex gap-3">
            {/* <Icon name="file" size={20} className='text-purple-500' /> */}
            <IconDownload className="text-indigo-500" width="2rem" height="2rem" />
            <IconGlobe width="2rem" height="2rem" />
            {/* <IconGlobe width="2rem" height="2rem" className="text-indigo-500" />
            <div className='bg-gray-300'>
                <IconGlobe className="text-indigo-500" width="2rem" height="2rem" />
                <IconDownload className="text-indigo-500" width="2rem" height="2rem" />

                <IconDownload
                    width="2rem"
                    height="2rem"
                    className="text-black"
                    style={{ color: '#FF0000' }}
                />
                <IconGlobe width="2rem" height="2rem" className='text-[#686868]' /> 
            </div>*/}

            {/* <XForm onSubmit={() => { console.log('OK') }} onInvalid={() => console.log('ERROR')} className="p-4 space-y-4">
                <div className="flex items-stretch w-full">
                    <XButton label="Search" className="rounded-r-none" />
                    <XInputText
                        name='keyword'
                        placeholder="Keyword"
                        className="rounded-l-none border-l-0"
                    />
                </div>
            </XForm> */}


        </div>
    );
}