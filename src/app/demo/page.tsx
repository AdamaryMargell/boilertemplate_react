'use client';
import XButton from '@/components/XButton';
import XCalendar from '@/components/XCalendar';
import { XForm } from '@/components/XForm';
import XIconField from '@/components/XIconField';
import XInputIcon from '@/components/XInputIcon';
import { XInputNumber } from '@/components/XInputNumber';
import { XInputText } from '@/components/XInputText';
import XToggleButton from '@/components/XToggleButton';
import { calendarPT } from '@/primereact-tailwindcss/calendar.pt';
import { floatLabelPT } from '@/primereact-tailwindcss/floatLabel.pt';
import { iconFieldPT, inputIconPT } from '@/primereact-tailwindcss/iconField.pt';
import { inputTextPT } from '@/primereact-tailwindcss/inputText.pt';
import { Calendar } from 'primereact/calendar';
import { FloatLabel } from 'primereact/floatlabel';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import { Nullable } from 'primereact/ts-helpers';
import { useState } from 'react';


export default function DemoPage() {

    return (
        <div className="flex gap-3">
            <XForm onSubmit={() => { console.log('OK') }} onInvalid={() => console.log('ERROR')} className="p-4 space-y-4">
                <div className="flex items-stretch w-full">
                    <XButton label="Search" className="rounded-r-none" />
                    <XInputText
                        name='keyword'
                        placeholder="Keyword"
                        className="rounded-l-none border-l-0"
                    />
                </div>
            </XForm>
        </div>
    );
}
// className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"