'use client';
import { tabMenuPT } from '@/primereact-tailwindcss/tabMenu.pt';
import React, { useRef, useState } from 'react';
import { useMountEffect } from 'primereact/hooks';
import XToast from '@/components/XToast';
import XTabMenu from '@/components/XTabMenu';
import { Messages } from 'primereact/messages';
import { messagesPT } from '@/primereact-tailwindcss/messages.pt';
import XMessages from '@/components/XMessages';
import { MeterGroup } from 'primereact/metergroup';
import { meterGroupPT } from '@/primereact-tailwindcss/meterGroup.pt';
import XMeterGroup from '@/components/XMeterGroup';
import XProgressSpinner from '@/components/XProgressSpinner';
import XButton from '@/components/XButton';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { XInputText } from '@/components/XInputText';
import XSplitButton from '@/components/XSpliButton';
import { Toolbar } from 'primereact/toolbar';
import { toolbarPT } from '@/primereact-tailwindcss/toolbar.pt';
import { InputText } from 'primereact/inputtext';
import XToolbar from '@/components/XToolbar';
import XBadge from '@/components/XBadge';
import { TieredMenu } from 'primereact/tieredmenu';
import { tieredMenuPT } from '@/primereact-tailwindcss/tieredMenu.pt';
import XTiredMenu from '@/components/XTiredMenu';
import XScrollTop from '@/components/XScrollTop';
import { ScrollTop } from 'primereact/scrolltop';
import { scrollTopPT } from '@/primereact-tailwindcss/scrollTop.pt';
import XSkeleton from '@/components/XSkeleton';
export default function DemoPage() {
    const itemsTieredMenu = [
        {
            label: 'Profile',
            icon: 'pi pi-user',
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-cog',
                },
                {
                    label: 'Privacy',
                    icon: 'pi pi-shield',
                    items: [
                        {
                            label: 'New',
                            icon: 'pi pi-plus',
                            items: [
                                {
                                    label: 'Document',
                                    icon: 'pi pi-file'
                                },
                                {
                                    label: 'Image',
                                    icon: 'pi pi-image'
                                },
                                {
                                    label: 'Video',
                                    icon: 'pi pi-video'
                                }
                            ]
                        },
                        {
                            label: 'Open',
                            icon: 'pi pi-folder-open'
                        },
                        {
                            label: 'Print',
                            icon: 'pi pi-print'
                        }
                    ]
                }
            ]
        }
    ];


    return (
        <div className="card">
            <div className="border-round border-1 surface-border p-4 surface-card">
                <div className="flex mb-3">
                    <XSkeleton shape="circle" size="4rem" className="mr-2"></XSkeleton>
                    <div>
                        <XSkeleton width="10rem" className="mb-2"></XSkeleton>
                        <XSkeleton width="5rem" className="mb-2"></XSkeleton>
                        <XSkeleton height=".5rem"></XSkeleton>
                    </div>
                </div>
                <XSkeleton width="100%" height="150px"></XSkeleton>
                <div className="flex justify-content-between mt-3">
                    <XSkeleton width="4rem" height="2rem"></XSkeleton>
                    <XSkeleton width="4rem" height="2rem"></XSkeleton>
                </div>
            </div>
        </div>
    );
}