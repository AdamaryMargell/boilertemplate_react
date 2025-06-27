'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Button } from 'primereact/button';
import { StyleClass } from 'primereact/styleclass';
import { Ripple } from 'primereact/ripple';
import { Panel } from 'primereact/panel';
import { XForm } from '@/components/XForm';
import { XAutoComplete } from '@/components/XAutoComplete';
import { XInputText } from '@/components/XInputText';
import XButtonGroup from '@/components/XButton/Group';
import XButton from '@/components/XButton';
import XAvatarGroup from '@/components/XAvatar/Group';
import XAvatar from '@/components/XAvatar';
import { Badge } from 'primereact/badge';
import XAccordion from '@/components/XAccordion';
import { AccordionTab } from 'primereact/accordion';
import XSpeedDial from '@/components/XSeepdDial';
import { MenuItem } from 'primereact/menuitem';
import XSidebar from '@/components/XSidebar';
import XMenuBar from '@/components/XMenuBar';
import XPanel from '@/components/XPanel';
import XBadge from '@/components/XBadge';
import { CarouselResponsiveOption } from 'primereact/carousel';
import XTag from '@/components/XTag';
import XCarousel from '@/components/XCarousel';
import { XDialog } from '@/components/XDialog';
import XGalleria from '@/components/XGalleria';
import XImage from '@/components/XImage';
import XCascadeSelect from '@/components/XCascadeSelect';
import XCard from '@/components/XCard';
import XOverlayPanel from '@/components/XOverlayPanel';
import { Toast, ToastMessage } from 'primereact/toast';
import XToast from '@/components/XToast';
import XDeferredContent from '@/components/XDeferredContent';
import { OverlayPanel } from 'primereact/overlaypanel';
import { XCheckbox } from '@/components/XCheckbox';
import { XInputMask } from '@/components/XInputMask';
import XColorPicker from '@/components/XColorPicker';
import { ColorPickerChangeEvent } from 'primereact/colorpicker';
import { XChips } from '@/components/XChips';
import { tooltipPT } from '@/primereact-tailwindcss/tooltip.pt';
import XTooltip from '@/components/XTooltip';
import XOrderList from '@/components/XOrderList';
import { OrderListChangeEvent } from 'primereact/orderlist';
import { XPickList } from '@/components/XPickList';
import XDropdown from '@/components/XDropdown';
import XInputOtp from '@/components/XInputOtp';
import XProgressBar from '@/components/XProgressBar';
import XInputTextarea from '@/components/XInputTextarea';
import XPaginator from '@/components/XPaginator';
import XDivider from '@/components/XDivider';
import { Menu } from 'primereact/menu';
import XMenu from '@/components/XMenu';
import XInputSwitch from '@/components/XInputSwitch';
import { TreeExpandedKeysType } from 'primereact/tree';
import { TreeNode } from 'primereact/treenode';
import XTree from '@/components/XTree';
import XFieldset from '@/components/XFieldset';
import XPanelMenu from '@/components/XPanelMenu';
import XStyleClass from '@/components/XStyleClass';
import XKnob from '@/components/XKnob';
import XTimeline from '@/components/XTimeline';
import XSplitter from '@/components/XSplitter/index';
import XSplitterPanel from '@/components/XSplitter/Panel';
import { XInputNumber } from '@/components/XInputNumber';
import XBreadCrumb from '@/components/XBreadCrumb';
import XMessage from '@/components/XMessage';
import XChip from '@/components/XChip';
import XContextMenu from '@/components/XContextMenu';
import XListBox from '@/components/XListBox';
import { classNames } from 'primereact/utils';
import XViirtualScroller from '@/components/XViirtualScroller';
import XStepper from '@/components/XStepper';
import { StepperPanel } from 'primereact/stepperpanel';
import XDock from '@/components/XDock';
import { RadioButton } from 'primereact/radiobutton';
import XMegaMenu from '@/components/XMegaMenu';
import XMention from '@/components/XMention';
import XMultiSelect from '@/components/XMultiSelect';
import XTabView from '@/components/XTabView';
import { TabPanel } from 'primereact/tabview';
import { tabPanelPT } from '@/primereact-tailwindcss/tabView.pt';
import XTabMenu from '@/components/XTabMenu';
import XMessages from '@/components/XMessages';
import { useMountEffect } from 'primereact/hooks';
import { messagesPT } from '@/primereact-tailwindcss/messages.pt';
import { Messages } from 'primereact/messages';
import XMeterGroup from '@/components/XMeterGroup';
import XProgressSpinner from '@/components/XProgressSpinner';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import XSplitButton from '@/components/XSpliButton';
import XToolbar from '@/components/XToolbar';
import XTiredMenu from '@/components/XTiredMenu';
import XScrollTop from '@/components/XScrollTop';
import XSkeleton from '@/components/XSkeleton';
import XMultiStateCheckbox from '@/components/XMultiStateCheckbox';
import XPassword from '@/components/XPassword';
import XRipple from '@/components/XRipple';
import XFileUpload from '@/components/XFileUpload';
import XDataScroller from '@/components/XDataScroller';
import { Rating, RatingChangeEvent } from 'primereact/rating';
import XScrollPanel from '@/components/XScrollPanel';
import XBlockUI from '@/components/XBlockUI';
import XRating from '@/components/XRating';
import XOrganizationChart from '@/components/XOrganizationChart';
import { TerminalService } from 'primereact/terminalservice';
import XRadioButton from '@/components/XRadioButton';
import XTerminal from '@/components/XTerminal';
import XSelectButton from '@/components/XSelectButton';
import { XInplace } from '@/components/XInplace';
import { InplaceContent, InplaceDisplay } from 'primereact/inplace';
import XSlider from '@/components/XSlider';
import XSteps from '@/components/XSteps';
import { confirmDialog } from 'primereact/confirmdialog';
import XConfirmDialog from '@/components/XConfirmDialog';
import { Dropdown } from 'primereact/dropdown';
import XDataView from '@/components/XDataView';
import { XTreeSelect } from '@/components/XTreeSelect';
import XTriStateCheckbox from '@/components/XTriStateCheckbox';
import XConfirmPopup from '@/components/XConfirmPopup';
import { confirmPopup } from 'primereact/confirmpopup';
import XDataTable from '@/components/XDataTable';
import { Column } from 'primereact/column';
import XTreeTable from '@/components/XTreeTable';
import XToggleButton from '@/components/XToggleButton';
import XCalendar from '@/components/XCalendar';
import XFloatLabel from '@/components/XFloatLabel';
import XIconField from '@/components/XIconField';
import XInputIcon from '@/components/XInputIcon';
import Icon from '@/components/XIcons/XIcon';
import { XSnackbar } from '@/components/XSnackbar';
import { XCardPrueba } from '@/components/XCardPrueba';

//CarrouselTyped
interface Product {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity: number;
    inventoryStatus: string;
    rating: number;
}

//GalleriaTyped
interface Photo {
    itemImageSrc: string,
    thumbnailImageSrc: string,
    alt: string,
    title: string,
}

//CascadeSelectTyped
interface City {
    cname: string;
    code: string;
}
interface CountryState {
    name: string;
    cities: City[];
}
interface Country {
    name: string;
    code: string;
    states: CountryState[];
}

//ColorPickerTyped
interface RGB {
    r: number;
    g: number;
    b: number;
}
interface HSB {
    h: number;
    s: number;
    b: number;
}


//Tree
const localTreeNodes: TreeNode[] = [
    {
        key: '0',
        label: 'Documents',
        data: 'Documents Folder',
        icon: 'pi pi-fw pi-inbox',
        children: [
            {
                key: '0-0',
                label: 'Work',
                data: 'Work Folder',
                icon: 'pi pi-fw pi-cog',
                children: [
                    { key: '0-0-0', label: 'Expenses.doc', icon: <Icon name="next" width="1rem" height="1rem" />, data: ' Expenses Document' },
                    { key: '0-0-1', label: 'Resume.doc', icon: <Icon name="next" width="1rem" height="1rem" />, data: ' Resume Document' }
                ]
            },
            {
                key: '0-1',
                label: 'Home',
                data: 'Home Folder',
                icon: 'pi pi-fw pi-home',
                children: [{ key: '0-1-0', label: 'Invoices.txt', icon: <Icon name="next" width="1rem" height="1rem" />, data: 'Invoices for this month' }]
            }
        ]
    },
    {
        key: '1',
        label: 'Events',
        data: 'Events Folder',
        icon: 'pi pi-fw pi-calendar',
        children: [
            { key: '1-0', label: 'Meeting', icon: <Icon name="next" width="1rem" height="1rem" />, data: 'Meeting' },
            { key: '1-1', label: 'Product Launch', icon: <Icon name="next" width="1rem" height="1rem" />, data: 'Product Launch' },
            { key: '1-2', label: 'Report Review', icon: <Icon name="next" width="1rem" height="1rem" />, data: 'Report Review' }
        ]
    },
    {
        key: '2',
        label: 'Movies',
        data: 'Movies Folder',
        icon: 'pi pi-fw pi-star-fill',
        children: [
            {
                key: '2-0',
                icon: 'pi pi-fw pi-star-fill',
                label: 'Al Pacino',
                data: 'Pacino Movies',
                children: [
                    { key: '2-0-0', label: 'Scarface', icon: <Icon name="next" width="1rem" height="1rem" />, data: 'Scarface Movie' },
                    { key: '2-0-1', label: 'Serpico', icon: <Icon name="next" width="1rem" height="1rem" />, data: 'Serpico Movie' }
                ]
            },
            {
                key: '2-1',
                label: 'Robert De Niro',
                icon: 'pi pi-fw pi-star-fill',
                data: 'De Niro Movies',
                children: [
                    { key: '2-1-0', label: 'Goodfellas', icon: <Icon name="next" width="1rem" height="1rem" />, data: 'Goodfellas Movie' },
                    { key: '2-1-1', label: 'Untouchables', icon: <Icon name="next" width="1rem" height="1rem" />, data: 'Untouchables Movie' }
                ]
            }
        ]
    }
];

export default function PageDocumentation() {
    const [visibleLeft, setVisibleLeft] = useState<boolean>(false);
    const [activePanel, setActivePanel] = useState<string | null>(null);

    // Sidebar Documentation
    const btnRefs = {
        form: useRef(null),
        button: useRef(null),
        data: useRef(null),
        panel: useRef(null),
        message: useRef(null),
        media: useRef(null),
        overlay: useRef(null),
        file: useRef(null),
        menu: useRef(null),
        misc: useRef(null),
        new: useRef(null)
    };
    const menuItemsDoc = [
        {
            label: 'FORM',
            icon: <Icon name="next" width="1rem" height="1rem" />,
            id: 'form', // Usaremos este ID para referenciar el useRef
            children: [
                { name: 'AutoComplete', panel: 'autocomplete' },
                { name: 'Calendar', panel: 'calendar' }, // Agregado, asumiendo que lo tenías comentado
                { name: 'CascadeSelect', panel: 'cascadeSelect' },
                { name: 'Checkbox', panel: 'checkbox' },
                { name: 'Chips', panel: 'chips' },
                { name: 'ColorPicker', panel: 'colorPicker' },
                { name: 'Dropdown', panel: 'dropdown' },
                { name: 'FloatLabel', panel: 'floatLabel' }, // Agregado
                { name: 'IconField', panel: 'iconField' }, // Agregado
                { name: 'InputGroup', panel: 'inputGroup' }, // Agregado
                { name: 'InputMask', panel: 'inputmask' },
                { name: 'InputSwitch', panel: 'inputSwitch' },
                { name: 'InputNumber', panel: 'inputNumber' },
                { name: 'InputOtp', panel: 'inputOtp' },
                { name: 'InputText', panel: 'inputText' },
                { name: 'InputTextarea', panel: 'inputTextarea' },
                { name: 'Knob', panel: 'knob' }, // Agregado
                { name: 'ListBox', panel: 'listBox' }, // Agregado
                { name: 'Mention', panel: 'mention' }, // Agregado
                { name: 'MultiSelect', panel: 'multiselect' },
                { name: 'MultiStateCheckbox', panel: 'multiStateCheckbox' }, // Agregado
                { name: 'Password', panel: 'password' }, // Agregado
                { name: 'RadioButton', panel: 'radioButton' }, // Agregado
                { name: 'Rating', panel: 'rating' }, // Agregado
                { name: 'SelectButton', panel: 'selectButton' }, // Agregado
                { name: 'Slider', panel: 'slider' }, // Agregado
                { name: 'TreeSelect', panel: 'treeSelect' }, // Agregado
                { name: 'TriStateCheckbox', panel: 'triStateCheckbox' }, // Agregado
                { name: 'ToggleButton', panel: 'toggleButton' }, // Agregado

            ]
        },
        {
            label: 'BUTTON',
            icon: 'pi pi-chart-line',
            id: 'button',
            children: [
                { name: 'Button', panel: 'button' },
                { name: 'SpeedDial', panel: 'speeddial' },
                { name: 'SplitButton', panel: 'splitbutton' }
            ]
        },
        {
            label: 'DATA',
            icon: 'pi pi-chart-line',
            id: 'data',
            children: [
                { name: 'DataTable', panel: 'dataTable' },
                { name: 'DataView', panel: 'dataView' },
                { name: 'DataScroller', panel: 'dataScroller' },
                { name: 'OrderList', panel: 'orderList' },
                { name: 'Organization Chart', panel: 'organizationChart' },
                { name: 'Paginator', panel: 'paginator' },
                { name: 'PickList', panel: 'pickList' },
                { name: 'Tree', panel: 'tree' },
                { name: 'TreeTable', panel: 'treeTable' },
                { name: 'Timeline', panel: 'timeline' },
                { name: 'VirtualScroller', panel: 'virtualScroller' }
            ]
        },
        {
            label: 'PANEL',
            icon: 'pi pi-chart-line',
            id: 'panel',
            children: [
                { name: 'Accordion', panel: 'accordion' },
                { name: 'Card', panel: 'card' },
                { name: 'Deferred', panel: 'deferred' },
                { name: 'Divider', panel: 'divider' },
                { name: 'Fieldset', panel: 'fieldset' },
                { name: 'Panel', panel: 'panel' },
                { name: 'ScrollPanel', panel: 'scrollPanel' },
                { name: 'Splitter', panel: 'splitter' },
                { name: 'Stepper', panel: 'stepper' },
                { name: 'TabView', panel: 'tabview' },
                { name: 'Toolbar', panel: 'toolbar' }
            ]
        },
        {
            label: 'OVERLAY',
            icon: 'pi pi-chart-line',
            id: 'overlay',
            children: [
                { name: 'ConfirmDialog', panel: 'confirmDialog' },
                { name: 'ConfirmPopup', panel: 'confirmPopup' },
                { name: 'Dialog', panel: 'dialog' },
                { name: 'OverlayPanel', panel: 'overlayPanel' },
                { name: 'Sidebar', panel: 'sidebar' },
                { name: 'Tooltip', panel: 'tooltip' },
            ]
        },
        {
            label: 'FILE',
            icon: 'pi pi-chart-line',
            id: 'file',
            children: [
                { name: 'FileUpload', panel: 'upload' }
            ]
        },
        {
            label: 'MENU',
            icon: 'pi pi-chart-line',
            id: 'menu',
            children: [
                { name: 'Breadcrumb', panel: 'breadcrumb' },
                { name: 'ContextMenu', panel: 'contextmenu' },
                { name: 'Dock', panel: 'dock' },
                { name: 'MegaMenu', panel: 'megaMenu' },
                { name: 'Menu', panel: 'menu' },
                { name: 'Menubar', panel: 'menuBar' },
                { name: 'PanelMenu', panel: 'panelMenu' },
                { name: 'Steps', panel: 'steps' },
                { name: 'TabMenu', panel: 'tabMenu' },
                { name: 'TieredMenu', panel: 'tieredMenu' },
            ]
        },
        {
            label: 'MESSAGES',
            icon: 'pi pi-chart-line',
            id: 'message',
            children: [
                { name: 'Message', panel: 'message' },
                { name: 'Messages', panel: 'messages' },
                { name: 'Toast', panel: 'toast' }
            ]
        },
        {
            label: 'MEDIA',
            icon: 'pi pi-chart-line',
            id: 'media',
            children: [
                { name: 'Carrousel', panel: 'carrousel' },
                { name: 'Galleria', panel: 'galleria' },
                { name: 'Image', panel: 'image' }
            ]
        },
        {
            label: 'MISC',
            icon: 'pi pi-chart-line',
            id: 'misc',
            children: [
                { name: 'Avatar', panel: 'avatar' },
                { name: 'Badge', panel: 'badge' },
                { name: 'BlockUI', panel: 'blockUI' },
                { name: 'Chip', panel: 'chip' },
                { name: 'Inplace', panel: 'inplace' },
                { name: 'MeterGroup', panel: 'meterGroup' },
                { name: 'ScrollTop', panel: 'scrollTop' },
                { name: 'Skeleton', panel: 'skeleton' },
                { name: 'ProgressBar', panel: 'progressbar' },
                { name: 'ProgressSpinner', panel: 'progressSpinner' },
                { name: 'StyleClass', panel: 'styleclass' },
                { name: 'Ripple', panel: 'ripple' },
                { name: 'Tag', panel: 'tag' },
                { name: 'Terminal', panel: 'terminal' },
            ]
        },
        {
            label: 'NEW',
            icon: 'pi pi-chart-line',
            id: 'new',
            children: [
                { name: 'Snackbar', panel: 'snackbar' },
                { name: 'Card Information', panel: 'cardInformation' },
                { name: 'Card Menu', panel: 'cardMenu' },
            ]
        },
    ];

    // Panels Documentation
    const panelCategories: Record<string, string> = {
        form: 'FORM',
        button: 'BUTTON',
        data: 'DATA',
        panel: 'PANEL',
        overlay: 'OVERLAY',
        file: 'FILE',
        menu: 'MENU',
        message: 'MESSAGES',
        media: 'MEDIA',
        misc: 'MISC',
        new: 'NEW',
    };
    const getPanelCategory = (panelKey: string | null) => {
        if (!panelKey) return null;
        for (const category of menuItemsDoc) {
            if (category.children.some(child => child.panel === panelKey)) {
                return category.id;
            }
        }
        return null;
    };
    const currentCategory = getPanelCategory(activePanel);
    const categoryTitle = currentCategory ? panelCategories[currentCategory] : null;

    //MenuBarDocumentation
    const items = [
        {
            label: 'Menu',
            template: (item: any, options: any) => {
                const { className, onClick } = options;

                return (
                    <Button onClick={() => setVisibleLeft(true)} pt={{
                        root: { className: 'hover:bg-gray-800 cursor-pointer text-white p-3 hover:border-round flex gap-2' },
                        label: { className: 'text-white font-bold text-xl' },
                    }}><Icon name="menu" size={24} /></Button>
                );
            }
        },
        {
            label: 'Home',
        },
        {
            label: 'Features',
        },
    ];
    const navigateToPanel = (panelKey: string) => {
        setActivePanel(panelKey);
        setVisibleLeft(false);
    };

    //AutoComplete
    const countries = ['Argentina', 'Brasil', 'Chile', 'Colombia', 'Bolivia'];
    const users = [
        { id: 1, name: 'Juan Pérez' },
        { id: 2, name: 'María García' },
        { id: 3, name: 'Jose Juarez' },
    ];

    //SpeedDial
    const itemsSpeedDial: MenuItem[] = [
        {
            label: 'Add',
            icon: 'pi pi-plus',
            template: (item, options) => {
                const { className, onClick } = options; // solo extraemos las props válidas

                return (
                    <button
                        onClick={onClick}
                        className={`flex items-center px-4 py-2 bg-slate-100 border border-slate-400 rounded transition ${className || ''}`}
                    >
                        <i className={`${item.icon} mr-2`} />
                        <span>{item.label}</span>
                    </button>
                );
            }

        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            template: (item, options) => {
                const { className, onClick } = options; // solo extraemos las props válidas

                return (
                    <button
                        onClick={onClick}
                        className={`flex items-center px-4 py-2 bg-slate-100 border border-slate-400 rounded transition ${className || ''}`}
                    >
                        <i className={`${item.icon} mr-2`} />
                        <span>{item.label}</span>
                    </button>
                );
            }

        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            template: (item, options) => {
                const { className, onClick } = options;

                return (
                    <button
                        onClick={onClick}
                        className={`flex items-center !px-4 !py-2 !bg-slate-100 !border !border-slate-400 !rounded transition ${className || ''}`}
                    >
                        <i className={`${item.icon} mr-2`} />
                        <span>{item.label}</span>
                    </button>
                );
            }

        }
    ];

    //Carrousel
    const products: Product[] = [
        {
            id: '1000',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
        {
            id: '1001',
            code: 'nvklal433',
            name: 'Black Watch',
            description: 'Product Description',
            image: 'black-watch.jpg',
            price: 72,
            category: 'Accessories',
            quantity: 61,
            inventoryStatus: 'INSTOCK',
            rating: 4
        },
        {
            id: '1002',
            code: 'zz21cz3c1',
            name: 'Blue Band',
            description: 'Product Description',
            image: 'blue-band.jpg',
            price: 79,
            category: 'Fitness',
            quantity: 2,
            inventoryStatus: 'LOWSTOCK',
            rating: 3
        },
        {
            id: '1003',
            code: '244wgerg2',
            name: 'Blue T-Shirt',
            description: 'Product Description',
            image: 'blue-t-shirt.jpg',
            price: 29,
            category: 'Clothing',
            quantity: 25,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
        {
            id: '1004',
            code: 'h456wer53',
            name: 'Bracelet',
            description: 'Product Description',
            image: 'bracelet.jpg',
            price: 15,
            category: 'Accessories',
            quantity: 0,
            inventoryStatus: 'OUTOFSTOCK',
            rating: 4
        },
        {
            id: '1005',
            code: 'av2231fwg',
            name: 'Brown Purse',
            description: 'Product Description',
            image: 'brown-purse.jpg',
            price: 120,
            category: 'Accessories',
            quantity: 0,
            inventoryStatus: 'OUTOFSTOCK',
            rating: 4
        },
    ];
    const responsiveOptions: CarouselResponsiveOption[] = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    const getSeverity = (product: Product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
            default:
                return null;
        }
    };
    const productTemplate = (product: Product) => {
        return (
            <div className="border-2 border-gray-900 surface-border rounded-lg m-2 text-center py-5 px-3">
                <div className="mb-3">
                    <img
                        src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
                        alt={product.name}
                        className="w-full shadow-2"
                    />
                </div>
                <div>
                    <h4 className="mb-1">{product.name}</h4>
                    <h6 className="mt-0 mb-3">${product.price}</h6>
                    <XTag value={product.inventoryStatus} severity={getSeverity(product)}></XTag>
                </div>
            </div>
        );
    };

    //Dialog
    const [visibleDialog, setVisibleDialog] = useState<boolean>(false);
    const headerElement = (
        <div className="inline-flex align-items-center justify-content-center gap-2">
            <XAvatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
            <span className="font-bold white-space-nowrap">Amy Elsner</span>
        </div>
    );
    const footerContent = (
        <div>
            <XButton label="Ok" icon="pi pi-check" onClick={() => setVisibleDialog(false)} autoFocus />
        </div>
    );

    //Galleria
    const responsiveOptionsGalleria = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];
    const photos: Photo[] = [
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria2s.jpg',
            alt: 'Description for Image 2',
            title: 'Title 2'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria3.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria3s.jpg',
            alt: 'Description for Image 3',
            title: 'Title 3'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria4.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria4s.jpg',
            alt: 'Description for Image 4',
            title: 'Title 4'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria5.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria5s.jpg',
            alt: 'Description for Image 5',
            title: 'Title 5'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria6.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria6s.jpg',
            alt: 'Description for Image 6',
            title: 'Title 6'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria7s.jpg',
            alt: 'Description for Image 7',
            title: 'Title 7'
        },
    ];
    const itemTemplate = (item: Photo) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%' }} />
    };
    const thumbnailTemplate = (item: Photo) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ width: '100%' }} />
    };

    //Sidebar
    const [visibleSidebar, setVisibleSidebar] = useState(false);

    //MenuBar
    const itemsMenuBar = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'Features',
            icon: 'pi pi-star'
        },
        {
            label: 'Projects',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Components',
                    icon: 'pi pi-bolt'
                },
                {
                    label: 'Blocks',
                    icon: 'pi pi-server'
                },
                {
                    label: 'UI Kit',
                    icon: 'pi pi-pencil'
                },
                {
                    label: 'Templates',
                    icon: 'pi pi-palette',
                    items: [
                        {
                            label: 'Apollo',
                            icon: 'pi pi-palette'
                        },
                        {
                            label: 'Ultima',
                            icon: 'pi pi-palette'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope'
        }
    ];

    //CascadeSelect
    const countriesCascade: Country[] = [
        {
            name: 'Australia',
            code: 'AU',
            states: [
                {
                    name: 'New South Wales',
                    cities: [
                        { cname: 'Sydney', code: 'A-SY' },
                        { cname: 'Newcastle', code: 'A-NE' },
                        { cname: 'Wollongong', code: 'A-WO' }
                    ]
                },
                {
                    name: 'Queensland',
                    cities: [
                        { cname: 'Brisbane', code: 'A-BR' },
                        { cname: 'Townsville', code: 'A-TO' }
                    ]
                },

            ]
        },
        {
            name: 'Canada',
            code: 'CA',
            states: [
                {
                    name: 'Quebec',
                    cities: [
                        { cname: 'Montreal', code: 'C-MO' },
                        { cname: 'Quebec City', code: 'C-QU' }
                    ]
                },
                {
                    name: 'Ontario',
                    cities: [
                        { cname: 'Ottawa', code: 'C-OT' },
                        { cname: 'Toronto', code: 'C-TO' }
                    ]
                },

            ]
        },
        {
            name: 'United States',
            code: 'US',
            states: [
                {
                    name: 'California',
                    cities: [
                        { cname: 'Los Angeles', code: 'US-LA' },
                        { cname: 'San Diego', code: 'US-SD' },
                        { cname: 'San Francisco', code: 'US-SF' }
                    ]
                },
                {
                    name: 'Florida',
                    cities: [
                        { cname: 'Jacksonville', code: 'US-JA' },
                        { cname: 'Miami', code: 'US-MI' },
                        { cname: 'Tampa', code: 'US-TA' },
                        { cname: 'Orlando', code: 'US-OR' }
                    ]
                },
                {
                    name: 'Texas',
                    cities: [
                        { cname: 'Austin', code: 'US-AU' },
                        { cname: 'Dallas', code: 'US-DA' },
                        { cname: 'Houston', code: 'US-HO' }
                    ]
                }
            ]
        }
    ];

    //Card
    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );
    const footer = (
        <>
            <XButton label="Save" />
            <XButton label="Cancel" severity="secondary" style={{ marginLeft: '0.5em' }} />
        </>
    );

    //OverlayPanel
    const op = useRef<OverlayPanel>(null);

    //DeferedContent
    const ref = useRef<Toast>(null);
    const onImageLoad = () => {
        ref.current?.show({ severity: 'success', summary: 'Success', detail: 'Image loaded' });
    };

    //Toast
    const toastTopCenter = useRef<Toast>(null);
    const toastTopLeft = useRef<Toast>(null);
    const toastTopRight = useRef<Toast>(null);
    const toastCenter = useRef<Toast>(null);
    const toastBottomLeft = useRef<Toast>(null);
    const toastBottomCenter = useRef<Toast>(null);
    const toastBottomRight = useRef<Toast>(null);
    const showMessage = (event: React.MouseEvent<HTMLButtonElement>, ref: React.RefObject<Toast | null>, severity: ToastMessage['severity']) => {
        const target = event.target as HTMLButtonElement;
        const label = target.innerText;
        ref.current?.show({ severity: severity, summary: label, detail: label, life: 3000 });
    };

    //ColoPicker
    const [colorHEX, setColorHEX] = useState<string>('#ffffff');
    const [colorRGB, setColorRGB] = useState<RGB>({ r: 100, g: 102, b: 241 });
    const [colorHSB, setColorHSB] = useState<HSB>({ h: 205, s: 59, b: 95 });

    //Chips
    const validateChipsTags = (tags: string[]) => {
        return tags.map(tag => tag.trim()).filter(tag => tag !== '');
    };

    //OrderList
    const [productsOrder, setProductsOrder] = useState<Product[]>(products);
    const itemTemplateOrderList = (item: Product) => {
        return (
            <div className="flex flex-wrap items-center gap-3 p-2">
                <img
                    src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`}
                    alt={item.name}
                    className="w-16 h-16 rounded shadow-md flex-shrink-0"
                />
                <div className="flex flex-col flex-1 gap-1">
                    <span className="font-semibold">{item.name}</span>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                        <i className="pi pi-tag" />
                        <span>{item.category}</span>
                    </div>
                </div>
                <span className="font-bold text-gray-900">${item.price}</span>
            </div>
        );
    };

    //PickList
    const [source, setSource] = useState(products);
    const [target, setTarget] = useState([]);
    const onChangePickList = (event: any) => {
        setSource(event.source);
        setTarget(event.target);
    };

    //Dropdown
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    //Paginator
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const onPageChange = (event: any) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    //Menu
    const menuLeft = useRef<Menu>(null);
    const menuRight = useRef<Menu>(null);
    const toast = useRef<Toast>(null);
    const itemsMenu: MenuItem[] = [
        {
            label: 'Options',
            items: [
                {
                    label: 'Refresh',
                    icon: 'pi pi-refresh'
                },
                {
                    label: 'Export',
                    icon: 'pi pi-upload'
                }
            ]
        }
    ];

    //Tree
    const [nodes, setNodes] = useState<TreeNode[]>(localTreeNodes);
    const [expandedKeys, setExpandedKeys] = useState<TreeExpandedKeysType>({ '0': true, '0-0': true });
    const expandAll = () => {
        let _expandedKeys: TreeExpandedKeysType = {};
        const expandNode = (node: TreeNode) => {
            if (node.children && node.children.length) {
                _expandedKeys[node.key as string] = true;
                node.children.forEach(expandNode);
            }
        };
        nodes.forEach(expandNode);
        setExpandedKeys(_expandedKeys);
    };
    const collapseAll = () => {
        setExpandedKeys({});
    };

    //Fieldset
    const legendTemplate = (
        <div className="flex align-items-center gap-2 px-2">
            <XAvatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
            <span className="font-bold">Amy Elsner</span>
        </div>
    );

    //PanelMenu
    const itemRenderer = (item: any, options: any) => (
        <a className="flex align-items-center px-3 py-2 cursor-pointer" onClick={options.onClick}>
            <span className={`${item.icon} text-primary`} />
            <span className={`mx-2 ${item.items && 'font-semibold'}`}>{item.label}</span>
            {item.badge && <XBadge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </a>
    );
    const itemsPanelMenu = [
        {
            label: 'Mail',
            icon: 'pi pi-envelope',
            badge: 5,
            template: itemRenderer,
            items: [
                {
                    label: 'Compose',
                    icon: 'pi pi-file-edit',
                    template: itemRenderer
                },
                {
                    label: 'Inbox',
                    icon: 'pi pi-inbox',
                    badge: 5,
                    template: itemRenderer
                },
                {
                    label: 'Sent',
                    icon: 'pi pi-send',
                    template: itemRenderer
                },
                {
                    label: 'Trash',
                    icon: 'pi pi-trash',
                    template: itemRenderer
                }
            ]
        },
        {
            label: 'Reports',
            icon: 'pi pi-chart-bar',
            template: itemRenderer,
            items: [
                {
                    label: 'Sales',
                    icon: 'pi pi-chart-line',
                    badge: 3,
                    template: itemRenderer
                },
                {
                    label: 'Products',
                    icon: 'pi pi-list',
                    badge: 6,
                    template: itemRenderer
                }
            ]
        },
        {
            label: 'Profile',
            icon: 'pi pi-user',
            template: itemRenderer,
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-cog',
                    template: itemRenderer
                },
                {
                    label: 'Privacy',
                    icon: 'pi pi-shield',
                    template: itemRenderer
                }
            ]
        }
    ];

    //StyleClass
    const openBtnRef = useRef(null);
    const closeBtnRef = useRef(null);

    //Timeline
    const events = [
        { status: 'Ordered', date: '15/10/2020 10:30', color: 'bg-red-500', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', color: 'bg-purple-500' },
        { status: 'Shipped', date: '15/10/2020 16:15', color: 'bg-orange-500' },
        { status: 'Delivered', date: '16/10/2020 10:00', color: 'bg-cyan-500' }
    ];
    const customizedMarker = (item: any) => {
        return (
            <span className={`flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1 ${item.color}`}>
            </span>

        );
    };
    const customizedContent = (item: any) => {
        return (
            <XCard title={item.status} subTitle={item.date}>
                {item.image && <img src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`} alt={item.image} width={200} className="shadow-1" />}
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt</p>
                <XButton label="Read more" className="p-button-text"></XButton>
            </XCard>
        );
    };

    //BreadCrumb
    const itemsBreadCrumb: MenuItem[] = [{ label: 'Electronics' }, { label: 'Computer' }, { label: 'Accessories' }, { label: 'Keyboard' }, { label: 'Wireless' }];
    const home: MenuItem = { icon: 'pi pi-home', url: 'https://primereact.org' }

    //ContextMenu
    const itemsContextMenu = [
        { label: 'Copy', },
        {
            label: 'Rename',
            items: [
                {
                    label: 'Start',
                },
                {
                    label: 'Stop',
                }
            ]
        }
    ];

    //ListBox
    const countriesListBox = [
        { name: 'United States', code: 'US' },
        { name: 'Canada', code: 'CA' },
        { name: 'Mexico', code: 'MX' },
    ];

    //VirtualScroll
    const [itemsVirtual] = useState(Array.from({ length: 100000 }).map((_, i) => `Item #${i}`));
    const itemTemplateVirtual = (item, options) => {
        const className = classNames('flex align-items-center p-2', {
            'surface-hover': options.odd
        });
        return (
            <div className={className} style={{ width: options.props.itemSize + 'px', writingMode: 'vertical-lr' }}>
                {item}
            </div>
        );
    };

    //Stepper
    const stepperRef = useRef(null);

    //Dock
    const [position, setPosition] = useState<string>('bottom');
    const itemsDock: MenuItem[] = [
        {
            label: 'Finder',
            icon: () => <img alt="Finder" src="https://primefaces.org/cdn/primereact/images/dock/finder.svg" width="100%" />,
        },
        {
            label: 'App Store',
            icon: () => <img alt="App Store" src="https://primefaces.org/cdn/primereact/images/dock/appstore.svg" width="100%" />,
        },
        {
            label: 'Photos',
            icon: () => <img alt="Photos" src="https://primefaces.org/cdn/primereact/images/dock/photos.svg" width="100%" />,
        },
        {
            label: 'Trash',
            icon: () => <img alt="trash" src="https://primefaces.org/cdn/primereact/images/dock/trash.png" width="100%" />,
        }
    ];
    const positions: Array<{ label: string, value: string }> = [
        {
            label: 'Bottom',
            value: 'bottom'
        },
        {
            label: 'Top',
            value: 'top'
        },
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ];

    //Mention
    const [customers, setCustomers] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const mockCustomers = [
        {
            id: 1,
            name: 'Ana Gómez',
            representative: { image: 'amyelsner.png' }
        },
        {
            id: 2,
            name: 'Luis Paredes',
            representative: { image: 'asiyajavayant.png' }
        },
        {
            id: 3,
            name: 'María López',
            representative: { image: 'onyamalimba.png' }
        },
        {
            id: 4,
            name: 'Carlos Ramos',
            representative: { image: 'xuxuefeng.png' }
        },
        {
            id: 5,
            name: 'Pedro Sánchez',
            representative: { image: 'ivanmagalhaes.png' }
        }
    ];
    useEffect(() => {
        const enriched = mockCustomers.map((d) => ({
            ...d,
            nickname: `${d.name.replace(/\s+/g, '').toLowerCase()}_${d.id}`
        }));
        setCustomers(enriched);
    }, []);
    const onSearch = (event: any) => {
        setTimeout(() => {
            const query = event.query;
            let filtered;

            if (!query.trim().length) {
                filtered = [...customers];
            } else {
                filtered = customers.filter((customer) =>
                    customer.nickname.toLowerCase().startsWith(query.toLowerCase())
                );
            }

            setSuggestions(filtered);
        }, 250);
    };
    const itemTemplateMention = (suggestion: any) => {
        const src =
            'https://primefaces.org/cdn/primereact/images/avatar/' +
            suggestion.representative.image;

        return (
            <div className="flex items-center">
                <img alt={suggestion.name} src={src} width="32" />
                <div className="ml-2">
                    <div>{suggestion.name}</div>
                    <small className="text-gray-400 text-xs">@{suggestion.nickname}</small>
                </div>
            </div>
        );
    };

    //TabMenu
    const itemsTabMenu = [
        {
            label: 'Dashboard',
            command: () => {
                toast.current?.show({ severity: 'success', summary: 'Selected', detail: 'Dashboard', life: 3000 });
            }
        },
        {
            label: 'Transactions',
            command: () => {
                toast.current?.show({ severity: 'info', summary: 'Selected', detail: 'Transactions', life: 3000 });
            }
        },
        {
            label: 'Products',
            command: () => {
                toast.current?.show({ severity: 'warn', summary: 'Selected', detail: 'Products', life: 3000 });
            }
        },
        {
            label: 'Messages',
            command: () => {
                toast.current?.show({ severity: 'error', summary: 'Selected', detail: 'Messages', life: 3000 });
            }
        }
    ];

    //Messages
    const msgs = useRef<Messages>(null);

    const addMessages = () => {
        msgs.current?.clear();
        msgs.current?.show([
            {
                sticky: true,
                severity: 'info',
                summary: 'Información importante',
                detail: 'Este es un mensaje informativo para el usuario.'
            },
            {
                sticky: true,
                severity: 'success',
                summary: 'Operación exitosa',
                detail: 'Los cambios se han guardado correctamente en el sistema.'
            },
            {
                sticky: true,
                severity: 'warn',
                summary: 'Advertencia',
                detail: 'Esta acción puede tener consecuencias importantes.'
            },
            {
                sticky: true,
                severity: 'error',
                summary: 'Error crítico',
                detail: 'No se pudo completar la operación. Por favor intente nuevamente.'
            },
            {
                sticky: true,
                severity: 'secondary',
                summary: 'Nota secundaria',
                detail: 'Información adicional relevante para el proceso.'
            },
            {
                sticky: true,
                severity: 'contrast',
                summary: 'Mensaje neutro',
                detail: 'Este es un mensaje estándar sin énfasis particular.'
            }
        ]);
    };

    const clearMessages = () => {
        msgs.current?.clear();
    };

    //MeterGroup
    const [data] = useState([
        { label: 'Completado', value: 60, color: '#10b981' },
        { label: 'En progreso', value: 30, color: '#f59e0b' },
        { label: 'Pendiente', value: 25, color: '#ef4444' },
        { label: 'Revisión', value: 15, color: '#8b5cf6' }
    ]);

    //Toolbar
    const startContent = (
        <React.Fragment>
            <XButton icon="pi pi-plus" className="mr-2" />
            <XButton icon="pi pi-print" className="mr-2" />
            <XButton icon="pi pi-upload" />
        </React.Fragment>
    );
    const centerContent = (
        <IconField iconPosition="left">
            <InputIcon className="pi pi-search" />
            <InputText name='hola' placeholder="Search" />
        </IconField>
    );
    const endContent = (
        <React.Fragment>
            <XSplitButton label="Save" model={itemsSpeedDial} icon="pi pi-check"></XSplitButton>
        </React.Fragment>
    );

    //TieredMenu
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

    //MultiStateCheckbox
    const notificationOptions = [
        { value: 'public', icon: 'pi pi-globe' },
        { value: 'protected', icon: 'pi pi-lock-open' },
        { value: 'private', icon: 'pi pi-lock' }
    ];

    //Password
    const validatePassword = (value: string) => {
        if (!value) return 'El campo es requerido';
        if (value.length < 8) return 'La contraseña debe tener al menos 8 caracteres';
        if (!/[a-z]/.test(value)) return 'Debe contener al menos una letra minúscula';
        if (!/[A-Z]/.test(value)) return 'Debe contener al menos una letra mayúscula';
        if (!/\d/.test(value)) return 'Debe contener al menos un número';
        if (!/[@$!%*?&]/.test(value)) return 'Debe contener al menos un carácter especial (@$!%*?&)';
        if (/[^A-Za-z\d@$!%*?&]/.test(value)) return 'Contiene caracteres no permitidos';
        return true;
    };

    //RadioButton
    const paymentOptions = [
        { label: 'Tarjeta de crédito', value: 'creditCard' },
        { label: 'Transferencia bancaria', value: 'bankTransfer' },
        { label: 'Efectivo', value: 'cash' }
    ];

    //DataScroller
    const ds = useRef<null>(null);

    //Card Menu
    const [selectedCard, setSelectedCard] = useState<number | null>(null);

    const itemTemplateDataScroller = (data: Product, key) => {
        return (
            <div className="col-12">
                <div className="flex flex-col xl:flex-row xl:align-items-start p-4 gap-4">
                    <img
                        className="w-[8rem] h-[8rem] sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
                        src={`https://primefaces.org/cdn/primereact/images/product/${data.image}`}
                        alt={data.name}
                    />
                    <div className="flex flex-col lg:flex-row justify-content-between align-items-center xl:align-items-start lg:flex-1 gap-4">
                        <div className="flex flex-col align-items-center lg:align-items-start gap-3">
                            <div className="flex flex-col gap-1">
                                <div className="text-xl text-800">{data.name}</div>
                                <div className="text-700">{data.description}</div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Rating value={data.rating} readOnly cancel={false}></Rating>
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag"></i>
                                    <span className="font-semibold">{data.category}</span>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-row lg:flex-col align-items-center lg:align-items-end gap-4 lg:gap-2">
                            <span className="text-xl font-semibold">${data.price}</span>
                            <XButton
                                icon="pi pi-shopping-cart"
                                label="Add to Cart"
                                disabled={data.inventoryStatus === 'OUTOFSTOCK'}
                            ></XButton>
                            <XTag
                                value={data.inventoryStatus}
                                severity={getSeverity(data)}
                            ></XTag>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    const footerScroller = <XButton icon="pi pi-plus" label="Load" onClick={() => ds.current?.load()} />;

    //BlockUI
    const [blocked, setBlocked] = useState(true);
    const buttonText = blocked ? 'Subscribe' : 'Unsubscribe';

    //Rating
    const [valueRating, setValueRating] = useState<number>(null);

    //Organization Chart
    const [dataChart] = useState([
        {
            expanded: true,
            type: 'person',
            data: {
                image: 'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
                name: 'Amy Elsner',
                title: 'CEO'
            },
            children: [
                {
                    expanded: true,
                    type: 'person',
                    data: {
                        image: 'https://primefaces.org/cdn/primereact/images/avatar/annafali.png',
                        name: 'Anna Fali',
                        title: 'CMO'
                    },
                    children: [
                        {
                            label: 'Sales'
                        },
                        {
                            label: 'Marketing'
                        }
                    ]
                },
                {
                    expanded: true,
                    type: 'person',
                    data: {
                        image: 'https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png',
                        name: 'Stephen Shaw',
                        title: 'CTO'
                    },
                    children: [
                        {
                            label: 'Development'
                        },
                        {
                            label: 'UI/UX Design'
                        }
                    ]
                }
            ]
        }
    ]);
    const nodeTemplateOrg = (node: any) => {
        if (node.type === 'person') {
            return (
                <div className="flex flex-col items-center p-2">
                    <img
                        alt={node.data.name}
                        src={node.data.image}
                        className="mb-2 w-8 h-8 rounded-full"
                    />
                    <span className="font-bold mb-1">{node.data.name}</span>
                    <span className="text-sm">{node.data.title}</span>
                </div>
            );
        }
        return node.label;
    };

    //Terminal
    const commandHandler = (text: string) => {
        let response: string;
        let argsIndex: number = text.indexOf(' ');
        let command: string = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

        switch (command) {
            case 'date':
                response = 'Today is ' + new Date().toDateString();
                break;

            case 'greet':
                response = 'Hola ' + text.substring(argsIndex + 1) + '!';
                break;

            case 'random':
                response = Math.floor(Math.random() * 100);
                break;

            case 'clear':
                response = null;
                break;

            default:
                response = 'Unknown command: ' + command;
                break;
        }

        if (response)
            TerminalService.emit('response', response);
        else
            TerminalService.emit('clear');
    };
    useEffect(() => {
        TerminalService.on('command', commandHandler);

        return () => {
            TerminalService.off('command', commandHandler);
        };
    }, []);

    //Steps
    const [activeIndexSteps, setActiveIndexSteps] = useState(1);

    // ConfirmDialog
    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }
    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }
    const confirm1 = () => {
        confirmDialog({
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'accept',
            accept,
            reject
        });
    };
    const confirm2 = () => {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            defaultFocus: 'reject',
            acceptClassName: 'p-button-danger',
            accept,
            reject
        });
    };

    //DataView
    const [sortKey, setSortKey] = useState('');
    const [sortOrder, setSortOrder] = useState(0);
    const [sortField, setSortField] = useState('');
    const sortOptions = [
        { label: 'Price High to Low', value: '!price' },
        { label: 'Price Low to High', value: 'price' }
    ];
    const onSortChange = (event) => {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            setSortOrder(-1);
            setSortField(value.substring(1, value.length));
            setSortKey(value);
        } else {
            setSortOrder(1);
            setSortField(value);
            setSortKey(value);
        }
    };
    const headerDataView = () => {
        return <Dropdown options={sortOptions} value={sortKey} optionLabel="label" placeholder="Sort By Price" onChange={onSortChange} className="w-full sm:w-14rem" />;
    };
    const listTemplateDataView = (items) => {
        if (!items || items.length === 0) return null;

        let list = items.map((product, index) => {
            return itemTemplateDataScroller(product, index);
        });

        return <div className="grid grid-nogutter">{list}</div>;
    };


    //TreeSelect
    const categoryTree = [
        {
            key: 'electronics',
            label: 'Electrónicos',
            children: [
                { key: 'laptops', label: 'Laptops' },
                { key: 'phones', label: 'Teléfonos' },
                { key: 'tvs', label: 'Televisores' }
            ]
        },
        {
            key: 'furniture',
            label: 'Muebles',
            children: [
                { key: 'chairs', label: 'Sillas' },
                { key: 'tables', label: 'Mesas' }
            ]
        }
    ];

    //TriStateCheckBox
    const [value, setValue] = useState(null);

    //ConfirmPopup
    const confirmPop = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Are you sure you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'accept',
            accept,
            reject
        });
    };

    const confirmPop2 = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Do you want to delete this record?',
            icon: 'pi pi-info-circle',
            defaultFocus: 'reject',
            acceptClassName: 'p-button-danger',
            accept,
            reject
        });
    };

    // TreeTable   
    const dataNode = [
        {
            key: '0',
            data: {
                name: 'Documents',
                size: '500kb',
                type: 'Folder'
            },
            children: [
                {
                    key: '0-0',
                    data: {
                        name: 'Work',
                        size: '200kb',
                        type: 'Folder'
                    },
                    children: [
                        {
                            key: '0-0-0',
                            data: {
                                name: 'Expenses.doc',
                                size: '50kb',
                                type: 'Document'
                            }
                        },
                        {
                            key: '0-0-1',
                            data: {
                                name: 'Resume.doc',
                                size: '150kb',
                                type: 'Document'
                            }
                        }
                    ]
                }
            ]
        }
    ];



    return (
        <>
            <div className="card w-full">
                <div className="flex gap-2 justify-content-center ">
                    <XMenuBar model={items} className='w-full' />
                </div>
                <XSidebar
                    visible={visibleLeft}
                    position="left"
                    onHide={() => setVisibleLeft(false)}
                    className="w-20rem md:w-25rem"
                    dismissable
                >
                    <div className="h-full flex flex-column">
                        <div className="flex justify-content-between align-items-center p-3 border-bottom-1 surface-border">
                            <Button
                                onClick={() => setVisibleLeft(false)}
                                className="p-button p-button-text p-button-rounded"
                                aria-label="Close"
                            >
                            </Button>
                        </div>
                        <div className=" flex-grow-1">
                            <ul className="list-none p-0 m-0">
                                {menuItemsDoc.map((item) => (
                                    <li key={item.id}>
                                        <StyleClass
                                            nodeRef={btnRefs[item.id]}
                                            selector="@next"
                                            enterFromClassName="hidden"
                                            enterActiveClassName="slidedown"
                                            leaveToClassName="hidden"
                                            leaveActiveClassName="slideup"
                                        >
                                            <a
                                                ref={btnRefs[item.id]}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                                            >
                                                <i className={`${item.icon} mr-2`}></i>
                                                <span className="font-medium">{item.label}</span>
                                                <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                                <Ripple />
                                            </a>
                                        </StyleClass>
                                        {item.children && (
                                            <ul className="list-none py-0 pl-4 pr-0 m-0 hidden overflow-y-hidden transition-all duration-[400ms] ease-in-out">
                                                {item.children.map((child) => (
                                                    <li key={child.panel}>
                                                        <a
                                                            onClick={() => navigateToPanel(child.panel)}
                                                            className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                                                        >
                                                            <i className="pi pi-users mr-2"></i>
                                                            <span className="font-medium">{child.name}</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </XSidebar>

            </div>
            <div className="w-full h-screen mt-10">
                <div className="grid grid-cols-12">
                    <div className="col-start-2 col-span-10">

                        {categoryTitle && (
                            <div className="font-bold text-center">
                                <h1 className="text-[5rem] md:text-[8rem]">{categoryTitle}</h1>
                            </div>
                        )}

                        {/* Panel de AutoComplete */}
                        {activePanel === 'autocomplete' && (
                            <XPanel
                                header="Autocomplete"
                            >
                                <div className="card flex justify-center">
                                    <XForm onSubmit={() => console.log('OK')} onInvalid={() => console.log('ERROR')}>
                                        <XAutoComplete
                                            name="country"
                                            label="País"
                                            labelRequired
                                            suggestions={countries}
                                            rules={{ required: 'Seleccione un país' }}
                                        />
                                        <Button type="submit" className="px-3 py-2 bg-slate-100 border border-slate-400 rounded mt-7">Enviar</Button>
                                    </XForm>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de Calendar */}
                        {activePanel === 'calendar' && (
                            <XPanel
                                header="Calendar"
                            >
                                <div className="card flex justify-center">
                                    <XForm onSubmit={() => console.log('OK')} onInvalid={() => console.log('ERROR')}>
                                        <XCalendar
                                            name="eventDate"
                                            label="Fecha del evento"
                                            labelRequired
                                            rules={{ required: 'La fecha es requerida' }}
                                            dateFormat="dd/mm/yy"
                                            validation={{
                                                required: true,
                                                minDate: new Date(),
                                                maxDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
                                            }}
                                        />
                                        <Button type="submit" className="px-3 py-2 bg-slate-100 border border-slate-400 rounded mt-7">Enviar</Button>
                                    </XForm>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de CascadeSelect */}
                        {activePanel === 'cascadeSelect' && (
                            <XPanel
                                header="CascadeSelect"
                            >
                                <div className="card flex justify-center">
                                    <XForm onSubmit={() => { console.log('OK') }} onInvalid={() => console.log('ERROR')} className="p-4 space-y-4">
                                        <XCascadeSelect
                                            name="country"
                                            label="País"
                                            labelRequired
                                            options={countriesCascade}
                                            optionLabel="cname"
                                            optionGroupLabel="name"
                                            optionGroupChildren={['states', 'cities']}
                                            placeholder="Selecciona un país"
                                            rules={{ required: 'Seleccione un país' }}
                                            style={{ minWidth: '14rem' }}
                                            breakpoint="767px"
                                        />
                                        <XButton type="submit" label="Enviar" />
                                    </XForm >
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de Checkbox */}
                        {activePanel === 'checkbox' && (
                            <XPanel
                                header="Checkbox"
                            >
                                <div className="card flex justify-center">
                                    <XForm onSubmit={() => { console.log('OK') }} onInvalid={() => console.log('ERROR')} className="p-4 space-y-4">
                                        <XCheckbox
                                            name="termsAccepted"
                                            label="Acepto los términos y condiciones"
                                            labelRequired
                                            rules={{ required: 'Debes aceptar los términos' }}
                                        />
                                        <XButton type="submit" label="Enviar" />
                                    </XForm >
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de Chips */}
                        {activePanel === 'chips' && (
                            <XPanel
                                header="Chips"
                            >
                                <div className="card flex justify-center">
                                    <XForm onSubmit={() => { console.log('OK') }} onInvalid={() => console.log('ERROR')} className="p-4 space-y-4">
                                        <XChips
                                            name="tags"
                                            label="Etiquetas técnicas"
                                            labelRequired
                                            validation={validateChipsTags}
                                            rules={{
                                                required: ('Debes agregar al menos una etiqueta'),
                                                validate: (tags: any) =>
                                                    tags.length <= 5 || 'Máximo 5 etiquetas permitidas'
                                            }}
                                            placeholder="Escribe y presiona Enter"
                                            max={5}
                                            separator=","
                                            tooltip="Presiona Enter para agregar"
                                            tooltipOptions={{ position: 'top', pt: tooltipPT }}
                                        />
                                        <XButton type="submit" label="Enviar" />
                                    </XForm>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de ColorPicker */}
                        {activePanel === 'colorPicker' && (
                            <XPanel
                                header="ColorPicker"
                            >
                                <div className="card flex flex-wrap gap-3">
                                    <div className="flex-1 flex flex-column align-items-center">
                                        <label htmlFor="cp-hex" className="font-bold block mb-2">
                                            HEX
                                        </label>
                                        <XColorPicker
                                            inputId="cp-hex"
                                            format="hex"
                                            value={colorHEX}
                                            onChange={(e) => setColorHEX(e.value as string)}
                                            className="mb-2"
                                        />
                                        <span className="p-4 border-round" style={{ backgroundColor: colorHEX, width: '24px', height: '24px' }}></span>
                                        <span>{colorHEX}</span>
                                    </div>
                                    <div className="flex-1 flex flex-column align-items-center">
                                        <label htmlFor="cp-hex" className="font-bold block mb-2">
                                            RGB
                                        </label>
                                        <XColorPicker
                                            inputId="cp-rgb"
                                            format="rgb"
                                            value={colorRGB}
                                            onChange={(e) => setColorRGB(e.value as RGB)}
                                            className="mb-2"
                                        />
                                        <span> ({colorRGB.r}, {colorRGB.g}, {colorRGB.b}) </span>
                                    </div>
                                    <div className="flex-1 flex flex-column align-items-center">
                                        <label htmlFor="cp-hex" className="font-bold block mb-2">
                                            HSB
                                        </label>
                                        <XColorPicker
                                            inputId="cp-hsb"
                                            format="hsb"
                                            value={colorHSB}
                                            onChange={(e: ColorPickerChangeEvent) => setColorHSB(e.value as HSB)}
                                            className="mb-2"
                                        />
                                        <span> ({colorHSB.h}, {colorHSB.s}, {colorHSB.b}) </span>
                                    </div>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de DropDown */}
                        {activePanel === 'dropdown' && (
                            <XPanel
                                header="Dropdown"
                            >
                                <div className="card flex justify-center">
                                    <XForm onSubmit={() => { console.log('OK') }} onInvalid={() => console.log('ERROR')} className="p-4 space-y-4">
                                        <XDropdown
                                            name="city"
                                            options={cities}
                                            optionLabel="name"
                                            optionValue="code"
                                            placeholder="Seleccione una Ciudad"
                                            className="w-full md:w-14rem"
                                            rules={{ required: 'Campo requerido' }} />
                                        <XButton type="submit" label="Enviar" />
                                    </XForm>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de FloatLabel */}
                        {activePanel === 'floatLabel' && (
                            <XPanel
                                header="FloatLabel"
                            >
                                <div className="card flex justify-center p-4">
                                    <XFloatLabel>
                                        <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                                        <label htmlFor="username">Username</label>
                                    </XFloatLabel>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de IconField */}
                        {activePanel === 'iconField' && (
                            <XPanel
                                header="IconField"
                            >
                                <div className="card flex justify-center p-4">
                                    <XForm onSubmit={() => { console.log('OK') }} onInvalid={() => console.log('ERROR')} className="p-4 space-y-4">
                                        <XIconField iconPosition="left" >
                                            <XInputIcon>
                                                <Icon name="next" width="1rem" height="1rem" />
                                            </XInputIcon>
                                            <XInputText name='hola' placeholder="Search" />
                                        </XIconField>
                                    </XForm>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de InputGroup */}
                        {activePanel === 'inputGroup' && (
                            <XPanel
                                header="inputGroup"
                            >
                                <div className="card flex justify-center p-4">
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
                            </XPanel>
                        )}

                        {/* Panel de InpuMask */}
                        {activePanel === 'inputmask' && (
                            <XPanel
                                header="InputMask"
                            >
                                <div className="card flex justify-center">
                                    <XForm onSubmit={() => { console.log('OK') }} onInvalid={() => console.log('ERROR')} className="p-4 space-y-4">
                                        <XInputMask
                                            name="phone"
                                            label="Teléfono"
                                            labelRequired
                                            mask="(999) 999-99999"
                                            placeholder="(123) 456-7890"
                                            rules={{
                                                required: 'El número de telefono es requerido',
                                                validate: (value: any) =>
                                                    value.replace(/\D/g, '').length === 11 ||
                                                    'Número telefónico inválido'
                                            }}
                                        />
                                        <XButton type="submit" label="Enviar" />
                                    </XForm >
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de InputSwitch */}
                        {activePanel === 'inputSwitch' && (
                            <XPanel
                                header="InputSwitch"
                            >
                                <div className="card flex justify-center">
                                    <XForm onSubmit={() => { console.log('OK') }} onInvalid={() => console.log('ERROR')} className="p-4 space-y-4">
                                        <XInputSwitch
                                            name="emailNotifications"
                                            label="Recibir notificaciones por correo"
                                            description="Recibirás alertas importantes en tu email"
                                            rules={{ required: 'Debes seleccionar una opción' }}
                                        />
                                        <XInputSwitch
                                            name="darkMode"
                                            label="Modo oscuro"
                                        />
                                        <XButton type="submit" className="px-3 py-2 bg-slate-100 border border-slate-400 rounded mt-7">Enviar</XButton>
                                    </XForm>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de InputNumber */}
                        {activePanel === 'inputNumber' && (
                            <XPanel
                                header="InputNumber"
                            >
                                <div className="card flex justify-center">
                                    <XForm onSubmit={() => { console.log('OK') }} onInvalid={() => console.log('ERROR')} className="p-4 space-y-4">
                                        <XInputNumber
                                            name="edad"
                                            label="Edad"
                                            labelRequired
                                            rules={{
                                                required: 'Este campo es obligatorio',
                                                min: { value: 18, message: 'Debe ser mayor de 18' },
                                                max: { value: 100, message: 'Debe ser menor de 100' }
                                            }}
                                            validation={(val) => (val != null ? Math.round(val) : null)}
                                            min={0}
                                        />
                                        <XButton type="submit" label="Enviar" />
                                    </XForm >
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de InputOtp */}
                        {activePanel === 'inputOtp' && (
                            <XPanel
                                header="InputOtp"
                            >
                                <div className="card flex justify-center">
                                    <XForm onSubmit={() => { console.log('OK') }} onInvalid={() => console.log('ERROR')} className="p-4 space-y-4">
                                        <XInputOtp
                                            name="otpCode"
                                            label="Código de verificación"
                                            labelRequired
                                            length={6}
                                            rules={{
                                                required: 'El código OTP es requerido',
                                                pattern: {
                                                    value: /^\d{6}$/,
                                                    message: 'Debe contener exactamente 6 dígitos numéricos'
                                                },
                                                minLength: { value: 6, message: 'El código debe tener 6 dígitos numéricos' }
                                            }}
                                            validation={(val) => {
                                                if (typeof val === 'string') {
                                                    return val.replace(/[^0-9]/g, '');
                                                }
                                                return val;
                                            }}
                                            placeholder="0"
                                        />
                                        <XButton type="submit" label="Enviar" />
                                    </XForm >
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de InputText */}
                        {activePanel === 'inputText' && (
                            <XPanel
                                header="InputText"
                            >
                                <div className="card flex justify-center">
                                    <XForm onSubmit={() => console.log('OK')} onInvalid={() => console.log('ERROR')}>
                                        <XInputText
                                            name="nombre"
                                            label="Nombre"
                                            labelRequired
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
                                            labelRequired
                                            rules={{ required: 'El apellido es requerido' }}
                                        />
                                        <XButton type="submit" label="Enviar" />
                                    </XForm >
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de InputTextArea */}
                        {activePanel === 'inputTextarea' && (
                            <XPanel
                                header="InputTextarea"
                            >
                                <div className="card flex justify-center">
                                    <XForm onSubmit={() => console.log('OK')} onInvalid={() => console.log('ERROR')}>
                                        <XInputTextarea
                                            name='textarea'
                                            label='Dirección'
                                            labelRequired
                                            rows={5} cols={30}
                                            rules={{
                                                required: 'El campo es requerido',
                                                maxLength: {
                                                    value: 500,
                                                    message: 'Máximo 20 caracteres'
                                                }
                                            }}
                                            validation={(val: string) => {
                                                if (typeof val === 'string') {
                                                    const lowerVal = val.toLowerCase();
                                                    if (lowerVal.includes('spam') || lowerVal.includes('comment')) {
                                                        return '';
                                                    }
                                                }
                                                return val;
                                            }}
                                            placeholder="Escribe tu comentario aquí"
                                        />
                                        <XButton type="submit" label="Enviar" />
                                    </XForm >
                                </div>
                            </XPanel>
                        )}
                        {/* Panel de Knob */}
                        {activePanel === 'knob' && (
                            <XPanel
                                header="Knob"
                            >
                                <div className="card flex justify-center">
                                    <XForm onSubmit={() => console.log('OK')} onInvalid={() => console.log('ERROR')}>
                                        <XKnob
                                            name="volume"
                                            label="Control de volumen"
                                            labelRequired
                                            step={5}
                                            size={150}
                                            defaultValue={50}
                                            rules={{
                                                renquired: 'El volumen es requerido',
                                                min: { value: 10, message: 'Debe ser mayor a 10' },
                                                max: { value: 95, message: 'Debe ser menor de 95' }
                                            }}
                                            strokeWidth={10}
                                            rangeColor={"var(--primary-500)"}
                                            valueColor="var(--surface-900)"
                                        />
                                        <XButton type="submit" label="Enviar" />
                                    </XForm>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de ListBox */}
                        {activePanel === 'listBox' && (
                            <XPanel
                                header="ListtBox"
                            >
                                <div className="card flex justify-center">
                                    <XForm onSubmit={() => console.log('OK')} onInvalid={() => console.log('ERROR')}>
                                        <XListBox
                                            name="country"
                                            label="Select your country"
                                            labelRequired
                                            options={countriesListBox}
                                            optionLabel="name"
                                            rules={{ required: 'Campo requerido' }}
                                            filter
                                            className="border-2"
                                        />
                                        <XButton type="submit" label="Enviar" />
                                    </XForm>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de Mention */}
                        {activePanel === 'mention' && (
                            <XPanel
                                header="Mention"
                            >
                                <div className="card flex justify-center">
                                    <XForm onSubmit={() => console.log('OK')} onInvalid={() => console.log('ERROR')}>
                                        <XMention
                                            name="comment"
                                            label="Menciona a alguien"
                                            labelRequired
                                            rules={{ required: 'Campo requerido' }}
                                            suggestions={suggestions}
                                            onSearch={onSearch}
                                            field="nickname"
                                            placeholder="Escribe @ para mencionar"
                                            rows={5}
                                            cols={40}
                                            itemTemplate={itemTemplateMention}
                                        />
                                        <XButton type="submit" label="Enviar" />
                                    </XForm>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de multiselect */}
                        {activePanel === 'multiselect' && (
                            <XPanel
                                header="MultiSelect"
                            >
                                <div className="card flex justify-center">
                                    <XForm onSubmit={() => console.log('OK')} onInvalid={() => console.log('ERROR')}>
                                        <XMultiSelect
                                            name='ejemplo'
                                            label="Seleccione una cidad"
                                            labelRequired
                                            options={cities}
                                            optionLabel="name"
                                            optionValue="code"
                                            placeholder="Select Cities"
                                            maxSelectedLabels={3}
                                            rules={{
                                                required: 'Debes seleccionar al menos un rol',
                                            }}
                                            validation={(selected) => {
                                                console.log(selected);
                                                if (selected.includes('NY') || selected.includes('RM')) {
                                                    console.log(selected);
                                                    return 'Las ciudaes NY o RM no son compatibles';
                                                }
                                                return true;
                                            }}
                                        />
                                        <XButton type="submit" label="Enviar" />
                                    </XForm>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de MultiStateCheckbox */}
                        {activePanel === 'multiStateCheckbox' && (
                            <XPanel
                                header="MultiStateCheckbox"
                            >
                                <div className="card flex justify-center">
                                    <XForm onSubmit={() => console.log('OK')} onInvalid={() => console.log('ERROR')}>
                                        <XMultiStateCheckbox
                                            name="notificationPref"
                                            label="Preferencia de notificaciones"
                                            labelRequired
                                            options={notificationOptions}
                                            rules={{ required: 'Debes seleccionar una opción' }}
                                            unselectable='on'
                                        />
                                        <XButton type="submit" label="Enviar" />
                                    </XForm>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de Password */}
                        {activePanel === 'password' && (
                            <XPanel
                                header="Password"
                            >
                                <div className="card flex justify-center">
                                    <XForm onSubmit={() => console.log('OK')} onInvalid={() => console.log('ERROR')}>
                                        <XPassword
                                            name="password"
                                            label="Contraseña"
                                            labelRequired
                                            rules={{
                                                required: 'El campo es requerido',
                                                minLength: {
                                                    value: 8,
                                                    message: 'La contraseña debe tener al menos 8 caracteres'
                                                },
                                            }}
                                            validation={validatePassword}
                                            placeholder="Ingresa tu contraseña"
                                            toggleMask
                                            feedback={false}
                                        />
                                        <XButton type="submit" label="Enviar" />
                                    </XForm>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de RadioButton */}
                        {activePanel === 'radioButton' && (
                            <XPanel
                                header="RadioButton"
                            >
                                <div className="card flex justify-center">
                                    <XForm onSubmit={() => console.log('OK')} onInvalid={() => console.log('ERROR')}>
                                        <XRadioButton
                                            name="paymentMethod"
                                            label="Método de pago"
                                            labelRequired={true}
                                            options={paymentOptions}
                                            rules={{ required: 'Selecciona un método de pago' }}
                                            className="mb-6"
                                        />
                                        <XRadioButton
                                            name="priority"
                                            label="Prioridad"
                                            options={[
                                                { label: 'Alta', value: 'high' },
                                                { label: 'Media', value: 'medium' },
                                                { label: 'Baja', value: 'low' }
                                            ]}
                                            layout="horizontal"
                                            rules={{ required: 'Selecciona una prioridad' }}
                                            className="mb-6"
                                        />
                                        <XButton type="submit" label="Enviar" />
                                    </XForm>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de Rating */}
                        {activePanel === 'rating' && (
                            <XPanel
                                header="Rating"
                            >
                                <div className="card justify-center flex flex-wrap gap-2">
                                    <XRating value={valueRating} onChange={(e: RatingChangeEvent) => setValueRating(e.value)}
                                        cancelIcon={<img src="https://primefaces.org/cdn/primereact/images/rating/cancel.png" alt="custom-cancel-image" width="25px" height="25px" />}
                                        onIcon={<img src="https://primefaces.org/cdn/primereact/images/rating/custom-icon-active.png" alt="custom-image-active" width="25px" height="25px" />}
                                        offIcon={<img src="https://primefaces.org/cdn/primereact/images/rating/custom-icon.png" alt="custom-image" width="25px" height="25px" />}
                                    />
                                    <XRating value={valueRating} onChange={(e) => setValueRating(e.value)} cancel={false} />
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de SelectButton */}
                        {activePanel === 'selectButton' && (
                            <XPanel
                                header="SelectButton"
                            >
                                <div className="card flex justify-center">
                                    <XForm onSubmit={() => console.log('OK')} onInvalid={() => console.log('ERROR')}>
                                        <XSelectButton
                                            name="multipleOptions"
                                            label="Selecciona múltiples opciones"
                                            labelRequired
                                            options={paymentOptions}
                                            optionLabel="label"
                                            multiple
                                            rules={{
                                                validate: (val: any) => val.length >= 2 || 'Selecciona al menos 2 opciones'
                                            }}
                                        />

                                        <XSelectButton
                                            name="priority"
                                            label="Prioridad"
                                            options={['Baja', 'Media', 'Alta']}
                                            validation={(value) => {
                                                console.log('Prioridad seleccionada:', value);
                                                return value;
                                            }}
                                            rules={{ required: 'Selecciona una prioridad' }}
                                            className="mb-6"
                                        />
                                        <XButton type="submit" label="Enviar" />
                                    </XForm>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de Slider */}
                        {activePanel === 'slider' && (
                            <XPanel
                                header="Slider"
                            >
                                <div className="card flex justify-center">
                                    <XForm onSubmit={() => console.log('OK')} onInvalid={() => console.log('ERROR')}>
                                        <XSlider
                                            name="discount"
                                            label="Descuento aplicado"
                                            labelRequired
                                            min={0}
                                            max={50}
                                            step={5}
                                            showValue
                                            validation={(value: number | number[]) =>
                                                Number(value) <= 30 || 'Los descuentos mayores a 30% requieren aprobación'
                                            }
                                            rules={{
                                                required: 'Se requiere un descuento',
                                                min: { value: 10, message: 'El descuento mínimo es 10%' }
                                            }}
                                        />
                                        <XButton type="submit" label="Enviar" />
                                    </XForm>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de TreeSelect */}
                        {activePanel === 'treeSelect' && (
                            <XPanel
                                header="TreeSelect"
                            >
                                <div className="card flex justify-center">
                                    <XForm onSubmit={() => console.log('OK')} onInvalid={() => console.log('ERROR')}>
                                        <XTreeSelect
                                            name="etiquetas"
                                            label="Etiquetas"
                                            multiple
                                            options={categoryTree}
                                            rules={{
                                                required: "Debe seleccionar al menos una etiqueta"
                                            }}
                                            validation={(val) => {
                                                const seleccionados = val && typeof val === 'object' ? Object.keys(val) : [];

                                                if (seleccionados.length < 2) {
                                                    return "Debe seleccionar al menos 2 etiquetas";
                                                }

                                                if (seleccionados.length > 5) {
                                                    return "No puede seleccionar más de 5 etiquetas";
                                                }

                                                return true;
                                            }}
                                            placeholder="Selecciona etiquetas"
                                        />
                                        <XButton type="submit" label="Enviar" />
                                    </XForm>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de TriStateCheckbox */}
                        {activePanel === 'triStateCheckbox' && (
                            <XPanel
                                header="TriStateCheckbox"
                            >
                                <div className="card flex justify-center">
                                    <XTriStateCheckbox
                                        value={value}
                                        onChange={(e) => setValue(e.value)}
                                    />
                                    <label>{String(value)}</label>
                                </div>
                            </XPanel>
                        )}


                        {/* Panel de ToggleButton */}
                        {activePanel === 'toggleButton' && (
                            <XPanel
                                header="ToggleButton"
                            >
                                <div className="card flex justify-center">
                                    <XForm onSubmit={() => console.log('OK')} onInvalid={() => console.log('ERROR')}>
                                        <XToggleButton
                                            name="emailNotifications"
                                            label="Recibir notificaciones por email"
                                            description="Recibirás alertas importantes por correo electrónico"
                                            rules={{ required: 'Este campo es requerido' }}
                                        />
                                        <XButton type="submit" label="Enviar" />
                                    </XForm>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de BUTTON */}
                        {/* Panel de Button */}
                        {activePanel === 'button' && (
                            <XPanel
                                header="Button"
                            >
                                <div className="flex justify-center pb-4">
                                    <XButtonGroup>
                                        <XButton label="Save" onClick={() => console.log('save')} />
                                        <XButton label="Delete" onClick={() => console.log('delete')} />
                                        <XButton label="Cancel" onClick={() => console.log('Cancel')} />
                                    </XButtonGroup>

                                    <XButton label="Primary" outlined />
                                    <XButton label="Secondary" severity="secondary" outlined />
                                    <XButton label="Success" severity="success" outlined />
                                    <XButton label="Info" severity="info" outlined />
                                    <XButton label="Warning" severity="warning" outlined />
                                    <XButton label="Help" severity="help" outlined />
                                    <XButton label="Danger" severity="danger" outlined />
                                </div>
                            </XPanel>
                        )}
                        {/* Panel de SplitButton */}
                        {activePanel === 'splitbutton' && (
                            <XPanel
                                header="SplitButton"
                            >
                                <div className="card flex justify-center">
                                    <XSplitButton
                                        label="Split Action"
                                        model={items}
                                        icon="pi pi-save"
                                    />
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de SpeedDial */}
                        {activePanel === 'speeddial' && (
                            <XPanel
                                header="SpeedDial"
                            >
                                <div className="card justify-center">
                                    <div className="relative h-[100px]">
                                        <XSpeedDial model={itemsSpeedDial} direction="right" style={{ top: 'calc(50% - 2rem)', left: 0 }} />
                                    </div>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de DATA */}
                        {/* Panel de DataTable */}
                        {activePanel === 'dataTable' && (
                            <XPanel
                                header="DataTable"
                            >
                                <div className="flex justify-center pb-4">
                                    <XDataTable<Product> value={products} stripedRows paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }} >
                                        <Column field="code" header="Code"></Column>
                                        <Column field="name" header="Name"></Column>
                                        <Column field="category" header="Category"></Column>
                                        <Column field="quantity" header="Quantity"></Column>
                                    </XDataTable>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de DataView */}
                        {activePanel === 'dataView' && (
                            <XPanel
                                header="dataView"
                            >
                                <div className="flex justify-center pb-4">
                                    <XDataView value={products} listTemplate={listTemplateDataView} header={headerDataView()} sortField={sortField} sortOrder={sortOrder} />
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de DataScroller */}
                        {activePanel === 'dataScroller' && (
                            <XPanel
                                header="DataScroller"
                            >
                                <div className="flex justify-center pb-4">
                                    <XDataScroller ref={ds} value={products} itemTemplate={itemTemplateDataScroller} rows={2} loader footer={footerScroller} header="Click Load Button at Footer to Load More" />
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de OrderList */}
                        {activePanel === 'orderList' && (
                            <XPanel
                                header="OrderList"
                            >
                                <div className="flex justify-center pb-4">
                                    <XOrderList
                                        dataKey="id"
                                        value={productsOrder}
                                        onChange={(e: OrderListChangeEvent) => setProductsOrder(e.value as Product[])}
                                        itemTemplate={itemTemplateOrderList}
                                        header="Products"
                                    />
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de Organization Chart */}
                        {activePanel === 'organizationChart' && (
                            <XPanel
                                header="OrganizationChart"
                            >
                                <div className="flex justify-center">
                                    <XOrganizationChart value={dataChart} selectionMode="multiple" nodeTemplate={nodeTemplateOrg} />
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de Paginator */}
                        {activePanel === 'paginator' && (
                            <XPanel
                                header="Paginator"
                            >
                                <div className="card flex justify-center">
                                    <XPaginator
                                        first={first}
                                        rows={rows}
                                        totalRecords={120}
                                        rowsPerPageOptions={[10, 20, 30]}
                                        onPageChange={onPageChange}
                                    />
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de Picklist*/}
                        {activePanel === 'pickList' && (
                            <XPanel
                                header="PickList"
                            >
                                <div className="card flex justify-center">
                                    <XPickList
                                        dataKey="id"
                                        source={source}
                                        target={target}
                                        onChange={onChangePickList}
                                        itemTemplate={itemTemplateOrderList}
                                        breakpoint="1280px"
                                        sourceHeader="Available"
                                        targetHeader="Selected"
                                        sourceStyle={{ height: '24rem' }}
                                        targetStyle={{ height: '24rem' }}

                                    />
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de Tree*/}
                        {activePanel === 'tree' && (
                            <XPanel
                                header="Tree"
                            >
                                <div className="card justify-content-center">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <XButton type="button" icon="pi pi-plus" label="Expand All" onClick={expandAll} />
                                        <XButton type="button" icon="pi pi-minus" label="Collapse All" onClick={collapseAll} />
                                    </div>
                                    <XTree
                                        value={nodes}
                                        expandedKeys={expandedKeys}
                                        onToggle={(e) => setExpandedKeys(e.value)}
                                    />
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de TreeTable*/}
                        {activePanel === 'treeTable' && (
                            <XPanel
                                header="TreeTable"
                            >
                                <div className="card justify-content-center">
                                    <XTreeTable value={dataNode} tableStyle={{ minWidth: '50rem' }} paginator rows={5} rowsPerPageOptions={[5, 10, 25]}>
                                        <Column field="name" header="Name" expander></Column>
                                        <Column field="size" header="Size"></Column>
                                        <Column field="type" header="Type"></Column>
                                    </XTreeTable>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de timeline*/}
                        {activePanel === 'timeline' && (
                            <XPanel
                                header="Timeline"
                            >
                                <div className="card flex justify-center">
                                    <XTimeline value={events} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de VirtualScroller*/}
                        {activePanel === 'virtualScroller' && (
                            <XPanel
                                header="virtualScroller"
                            >
                                <div className="card flex justify-center">
                                    <XViirtualScroller items={itemsVirtual} itemSize={50} itemTemplate={itemTemplateVirtual} orientation="horizontal" className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />                                </div>
                            </XPanel>
                        )}

                        {/* Panel de MESSAGES */}
                        {/* Panel de Toast */}
                        {activePanel === 'message' && (
                            <XPanel
                                header="Message"
                            >
                                <div className="flex justify-center gap-3">
                                    <XMessage severity="success" text="Success Message" />
                                    <XMessage severity="info" text="Info Message" />
                                    <XMessage severity="warn" text="Warning Message" />
                                    <XMessage severity="error" text="Error Message" />
                                    <XMessage severity="secondary" text="Secondary Message" />
                                    <XMessage severity="contrast" text="Contrast Message" />
                                </div>
                            </XPanel>
                        )}
                        {activePanel === 'messages' && (
                            <XPanel
                                header="Messages"
                            >
                                <div className="card justify-content-center">
                                    <XButton type="button" onClick={addMessages} label="Show" className="mr-2" />
                                    <XButton type="button" onClick={clearMessages} label="Clear" className="p-button-secondary" />

                                    <XMessages ref={msgs} />
                                </div>
                            </XPanel>
                        )}
                        {activePanel === 'toast' && (
                            <XPanel
                                header="Toast"
                            >
                                <div className="flex justify-center pb-4">
                                    <XToast ref={toastTopLeft} position="top-left" />
                                    <XToast ref={toastTopCenter} position="top-center" />
                                    <XToast ref={toastTopRight} position="top-right" />
                                    <XToast ref={toastCenter} position="center" />
                                    <XToast ref={toastBottomLeft} position="bottom-left" />
                                    <XToast ref={toastBottomCenter} position="bottom-center" />
                                    <XToast ref={toastBottomRight} position="bottom-right" />
                                    <div className="flex flex-wrap gap-2">
                                        <XButton label="Top Left" severity="success" onClick={(e) => showMessage(e, toastTopLeft, 'success')} />
                                        <XButton label="Top Center" severity="info" onClick={(e) => showMessage(e, toastTopCenter, 'info')} />
                                        <XButton label="Top Right" severity="warning" onClick={(e) => showMessage(e, toastTopRight, 'warn')} />
                                        <XButton label="Center" severity="danger" onClick={(e) => showMessage(e, toastCenter, 'error')} />
                                        <XButton label="Bottom Left" severity="success" onClick={(e) => showMessage(e, toastBottomLeft, 'success')} />
                                        <XButton label="Bottom Center" severity="info" onClick={(e) => showMessage(e, toastBottomCenter, 'info')} />
                                        <XButton label="Bottom Right" severity="warning" onClick={(e) => showMessage(e, toastBottomRight, 'warn')} />
                                    </div>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de MEDIA */}
                        {/* Panel de Carrousel */}
                        {activePanel === 'carrousel' && (
                            <XPanel
                                header="Carrousel"
                            >
                                <div className="card justify-center">
                                    <XCarousel
                                        value={products}
                                        numVisible={3}
                                        numScroll={3}
                                        responsiveOptions={responsiveOptions}
                                        itemTemplate={productTemplate}
                                    />
                                </div>
                            </XPanel>
                        )}
                        {activePanel === 'galleria' && (
                            <XPanel
                                header="Galleria"
                            >
                                <div className="card justify-center flex">
                                    <XGalleria
                                        value={photos}
                                        responsiveOptions={responsiveOptionsGalleria}
                                        numVisible={5}
                                        style={{ maxWidth: '640px' }}
                                        item={itemTemplate}
                                        thumbnail={thumbnailTemplate} />
                                </div>
                            </XPanel>
                        )}
                        {activePanel === 'image' && (
                            <XPanel
                                header="Image"
                            >
                                <div className="card justify-center flex">
                                    <XImage src="https://primefaces.org/cdn/primereact/images/galleria/galleria10.jpg" alt="Image" width="250" preview />
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de OVERLAY */}
                        {/* Panel de ConfirmDialog */}
                        {activePanel === 'confirmDialog' && (
                            <XPanel
                                header="ConfirmDialog"
                            >
                                <div className="card relative">
                                    <XToast ref={toast} />
                                    <XConfirmDialog />
                                    <div className="card flex flex-wrap gap-2 justify-content-center">
                                        <XButton onClick={confirm1} icon="pi pi-check" label="Confirm" className="mr-2"></XButton>
                                        <XButton onClick={confirm2} icon="pi pi-times" label="Delete"></XButton>
                                    </div>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de ConfirmPopup */}
                        {activePanel === 'confirmPopup' && (
                            <XPanel
                                header="ConfirmPopup"
                            >
                                <div className="card justify-center flex">
                                    <XToast ref={toast} />
                                    <XConfirmPopup />
                                    <div className="card flex flex-wrap gap-2 justify-content-center">
                                        <XButton onClick={confirmPop} icon="pi pi-check" label="Confirm"></XButton>
                                        <XButton onClick={confirmPop2} icon="pi pi-times" label="Delete" className="p-button-danger"></XButton>
                                    </div>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de Dialog */}
                        {activePanel === 'dialog' && (
                            <XPanel
                                header="Dialog"
                            >
                                <div className="card justify-center flex">
                                    <XButton label="Show" icon="pi pi-external-link" onClick={() => setVisibleDialog(true)} />
                                    <XDialog visible={visibleDialog} modal header={headerElement} footer={footerContent} style={{ width: '50rem' }} onHide={() => { if (!visibleDialog) return; setVisibleDialog(false); }}>
                                        <p className="m-0">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </XDialog>
                                </div>
                            </XPanel>
                        )}
                        {/* Panel de OverlayPanel */}
                        {activePanel === 'overlayPanel' && (
                            <XPanel
                                header="OverlayPanel"
                            >
                                <div className="card justify-center flex">
                                    <XButton type="button" label="Image" onClick={(e) => op.current?.toggle(e)} />
                                    <XOverlayPanel ref={op}>
                                        <img src={'https://primefaces.org/cdn/primereact/images/product/bamboo-watch.jpg'} alt="Bamboo Watch"></img>
                                    </XOverlayPanel>
                                </div>
                            </XPanel>
                        )}
                        {/* Panel de Sidebar */}
                        {activePanel === 'sidebar' && (
                            <XPanel
                                header="Sidebar"
                            >
                                <div className="card justify-center flex">
                                    <XSidebar visible={visibleSidebar} position="right" onHide={() => setVisibleSidebar(false)}>
                                        <h2>Right Sidebar</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </XSidebar>
                                    <XButton label="Sidebar" onClick={() => setVisibleSidebar(true)} />
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de Tooltip */}
                        {activePanel === 'tooltip' && (
                            <XPanel
                                header="Tooltip"
                            >
                                <div className="card justify-center flex">
                                    <XButton
                                        type="button"
                                        label="Save"
                                        icon="pi pi-check"
                                        className="tooltip-save"
                                    />
                                    <XTooltip target=".tooltip-save" content="Save" position="bottom" mouseTrack mouseTrackTop={15} />

                                    <XTooltip target=".logo" mouseTrack mouseTrackLeft={10} />
                                    <img className="logo" alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" data-pr-tooltip="PrimeReact-Logo" height="80px" />
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de FILE */}
                        {/* Panel de FileUpload */}
                        {activePanel === 'upload' && (
                            <XPanel
                                header="FileUpload"
                            >
                                <div className="card justify-center flex">
                                    <XFileUpload name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
                                </div>
                            </XPanel>
                        )}


                        {/* Panel de MISC */}
                        {/* Panel de Avatar */}
                        {activePanel === 'avatar' && (
                            <XPanel
                                header="Avatar"
                            >
                                <div className="card">
                                    <div className="flex flex-wrap gap-5">
                                        <div className="flex-auto">
                                            <h5>Image</h5>
                                            <XAvatarGroup>
                                                <XAvatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" size="large" shape="circle" />
                                                <XAvatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" size="large" shape="circle" />
                                                <XAvatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" size="large" shape="circle" />
                                                <XAvatar image="https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png" size="large" shape="circle" />
                                                <XAvatar image="https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png" size="large" shape="circle" />
                                                <XAvatar label="+2" shape="circle" size="large" />
                                            </XAvatarGroup>
                                        </div>

                                        <div className="flex-auto">
                                            <h5>Badge</h5>
                                            <XAvatar className="p-overlay-badge" image="https://primefaces.org/cdn/primereact/images/organization/walter.jpg" size="xlarge">
                                                <XBadge value="4" severity="danger" />
                                            </XAvatar>
                                        </div>

                                        <div className="flex-auto">
                                            <h5>Gravatar</h5>
                                            <XAvatar image={"https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp"} className="flex align-items-center justify-content-center mr-2" size="xlarge" />
                                        </div>
                                    </div>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de Badge */}
                        {activePanel === 'badge' && (
                            <XPanel
                                header="Badge"
                            >
                                <div className="card justify-center flex flex-wrap  gap-2">
                                    <XBadge value="2"></XBadge>
                                    <XBadge value="8" severity="success"></XBadge>
                                    <XBadge value="4" severity="info"></XBadge >
                                    <XBadge value="12" severity="warning"></XBadge>
                                    <XBadge value="3" severity="danger"></XBadge>
                                    <XBadge value="7" severity="secondary"></XBadge>
                                    <XBadge value="5" severity="contrast"></XBadge>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de BlockUI */}
                        {activePanel === 'blockUI' && (
                            <XPanel
                                header="blockUI"
                            >
                                <div className="card justify-center flex flex-wrap">
                                    <XBlockUI blocked={blocked} template={<i className="pi pi-lock" style={{ fontSize: '3rem' }}></i>}>
                                        <XPanel header="Prime React News">
                                            <p className="m-0">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                                laborum.
                                            </p>
                                        </XPanel>
                                    </XBlockUI>
                                    <div className="mt-3 flex flex-column align-items-center">
                                        <h3>Continue reading?</h3>
                                        <XButton label={buttonText} onClick={() => setBlocked((oldState) => !oldState)}></XButton>
                                    </div>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de Chip */}
                        {activePanel === 'chip' && (
                            <XPanel
                                header="Chip"
                            >
                                <div className="card justify-center flex flex-wrap  gap-2">
                                    <XChip label="Action" />
                                    <XChip label="Comedy" />
                                    <XChip label="Mystery" />
                                    <XChip label="Thriller" removable />
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de Inplace */}
                        {activePanel === 'inplace' && (
                            <XPanel
                                header="Inplace"
                            >
                                <div className="card justify-center flex flex-wrap  gap-2">
                                    <XInplace  >
                                        <InplaceDisplay>View Content2</InplaceDisplay>
                                        <InplaceContent>
                                            <p className="m-0">
                                                Lorem ipsum dolor sit ametwwwwwwww, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </p>
                                        </InplaceContent>
                                    </XInplace>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de MeterGroup */}
                        {activePanel === 'meterGroup' && (
                            <XPanel
                                header="MeterGroup"
                            >
                                <div className="card justify-center flex">
                                    <XMeterGroup
                                        value={data}
                                        orientation="vertical"
                                        labelPosition="end"
                                        labelOrientation="horizontal"
                                        height="h-3"
                                    />
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de ScrollTop */}
                        {activePanel === 'scrollTop' && (
                            <XPanel
                                header="ScrollTop"
                            >
                                <div className="card justify-center flex">
                                    <div style={{ width: '250px', height: '200px', 'overflow': 'auto' }}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur
                                            adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor
                                            augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet
                                            nisl purus. Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus
                                            viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec.
                                        </p>
                                        <XScrollTop target="parent" threshold={100} className="relative m-4 w-2rem h-2rem border-round bg-primary" icon="pi pi-arrow-up text-base" />
                                    </div>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de Skeleton */}
                        {activePanel === 'skeleton' && (
                            <XPanel
                                header="Skeleton"
                            >
                                <div className="card justify-center">
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
                            </XPanel>
                        )}

                        {/* Panel de ProgressBar */}
                        {activePanel === 'progressbar' && (
                            <XPanel
                                header="ProgressBar"
                            >
                                <div className="card flex justify-center">
                                    <XProgressBar value={50} />
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de ProgressSpinner */}
                        {activePanel === 'progressSpinner' && (
                            <XPanel
                                header="ProgressSpinner"
                            >
                                <div className="card flex justify-content-center">
                                    <XProgressSpinner />
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de Ripple */}
                        {activePanel === 'ripple' && (
                            <XPanel
                                header="Ripple"
                            >
                                <div className="card flex justify-center gap-2">
                                    <div className="p-ripple ripple-card ripple-green">
                                        Green
                                        <XRipple />
                                    </div>
                                    <div className="p-ripple ripple-card ripple-orange">
                                        Orange
                                        <XRipple />
                                    </div>
                                    <div className="p-ripple ripple-card ripple-purple">
                                        Purple
                                        <XRipple />
                                    </div>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de StyleClass */}
                        {activePanel === 'styleclass' && (
                            <XPanel
                                header="StyleClass"
                            >
                                <div className="card flex flex-col items-center space-y-4">
                                    <div className="flex space-x-2">
                                        <XStyleClass
                                            nodeRef={openBtnRef}
                                            selector=".box"
                                            toggleClassName="hidden"
                                        >
                                            <XButton ref={openBtnRef} label="Show" />
                                        </XStyleClass>
                                        <XStyleClass
                                            nodeRef={closeBtnRef}
                                            selector=".box"
                                            toggleClassName="hidden"
                                        >
                                            <XButton ref={closeBtnRef} severity="secondary" label="Hide" />
                                        </XStyleClass>
                                    </div>
                                    <div className="box hidden transition-opacity duration-500 ease-in-out opacity-0 [&:not(.hidden)]:opacity-100">
                                        <div className="bg-green-500 text-white flex items-center justify-center py-3 rounded-md font-bold shadow-md w-32 h-32">
                                            Content
                                        </div>
                                    </div>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de Tag */}
                        {activePanel === 'tag' && (
                            <XPanel
                                header="Tag"
                            >
                                <div className="card justify-center flex flex-wrap  gap-2">
                                    <XTag value="Primary"></XTag>
                                    <XTag severity="success" value="Success"></XTag>
                                    <XTag severity="info" value="Info"></XTag>
                                    <XTag severity="warning" value="Warning"></XTag>
                                    <XTag severity="danger" value="Danger"></XTag>
                                    <XTag severity="secondary" value="Secondary"></XTag>
                                    <XTag severity="contrast" value="Contrast"></XTag>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de Terminal */}
                        {activePanel === 'terminal' && (
                            <XPanel
                                header="Terminal"
                            >
                                <p>
                                    Enter "<strong>date</strong>" to display the current date, "<strong>greet {'{0}'}</strong>" for a message, "<strong>random</strong>" to get a random number and "<strong>clear</strong>" to clear all commands.
                                </p>
                                <XTerminal
                                    welcomeMessage="Welcome to PrimeReact"
                                    prompt="primereact $"
                                />
                            </XPanel>
                        )}

                        {/* Panel de Menu */}
                        {/* Panel de breadcrumb */}
                        {activePanel === 'breadcrumb' && (
                            <XPanel
                                header="Breadcrumb"
                            >
                                <div className="card flex justify-center">
                                    <XBreadCrumb model={itemsBreadCrumb} home={home} />
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de contextMenu */}
                        {activePanel === 'contextmenu' && (
                            <XPanel
                                header="ContextMenu"
                            >
                                <div className="card flex justify-center">
                                    <XContextMenu global model={itemsContextMenu} breakpoint="767px" />
                                    <p className="mb-0">Right-Click anywhere on this page to view the global ContextMenu.</p>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de Dock */}
                        {activePanel === 'dock' && (
                            <XPanel
                                header="Dock"
                            >
                                <div className="card dock-demo">
                                    <div className="flex flex-wrap gap-3 mb-5 justify-center">
                                        <div className="flex-wrap gap-3 mb-5">
                                            {positions.map((option) => {
                                                const { value, label } = option;

                                                return (
                                                    <div className="flex align-items-center" key={label}>
                                                        <RadioButton value={label} onChange={() => setPosition(option.value)} checked={position === value} />
                                                        <label htmlFor={label} className="ml-2">
                                                            {label}
                                                        </label>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div
                                            className="dock-window"
                                            style={{
                                                backgroundImage: 'url(https://primefaces.org/cdn/primereact/images/dock/window.jpg)',
                                                width: '1000px',
                                                height: '500px',
                                                position: 'relative',
                                                overflow: 'hidden'
                                            }}
                                        >
                                            <XDock model={itemsDock} position={position} />
                                        </div>
                                    </div>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de MegaMenu */}
                        {activePanel === 'megaMenu' && (
                            <XPanel
                                header="MegaMenu"
                            >
                                <div className="card flex justify-center">
                                    <XMegaMenu model={itemsMenuBar} breakpoint="960px" />
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de panelMenu */}
                        {activePanel === 'menu' && (
                            <XPanel
                                header="Menu"
                            >
                                <div className="card flex justify-center">
                                    <Toast ref={toast}></Toast>
                                    <XMenu model={itemsMenu} popup ref={menuLeft} id="popup_menu_left" />
                                    <XButton label="Show Left" icon="pi pi-align-left" className="mr-2" onClick={(event) => menuLeft.current?.toggle(event)} aria-controls="popup_menu_left" aria-haspopup />
                                    <XMenu model={itemsMenu} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" />
                                    <XButton label="Show Right" icon="pi pi-align-right" className="mr-2" onClick={(event) => menuRight.current?.toggle(event)} aria-controls="popup_menu_right" aria-haspopup />
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de menubar */}
                        {activePanel === 'menuBar' && (
                            <XPanel
                                header="MenuBar"
                            >
                                <div className="card flex justify-center">
                                    <XMenuBar model={itemsMenuBar} />
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de PanelMenu */}
                        {activePanel === 'panelMenu' && (
                            <XPanel
                                header="PanelMenu"
                            >
                                <div className="card flex justify-center">
                                    <XPanelMenu model={itemsPanelMenu} className="w-full md:w-20rem" />
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de TabMenu */}
                        {activePanel === 'tabMenu' && (
                            <XPanel
                                header="TabMenu"
                            >
                                <div className="card flex justify-center">
                                    <XToast ref={toast} />
                                    <XTabMenu model={itemsTabMenu} />
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de Steps */}
                        {activePanel === 'steps' && (
                            <XPanel
                                header="steps"
                            >
                                <div className="card">
                                    <XToast ref={toast} />
                                    <XSteps model={itemsTabMenu} activeIndex={activeIndexSteps} onSelect={(e) => setActiveIndexSteps(e.index)} readOnly={false} />
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de TieredMenu */}
                        {activePanel === 'tieredMenu' && (
                            <XPanel
                                header="TieredMenu"
                            >
                                <div className="card flex justify-center">
                                    <XTiredMenu model={itemsTieredMenu} breakpoint="767px" />
                                </div>
                            </XPanel>
                        )}


                        {/* Panel de PANEL */}
                        {/* Panel de Accordion */}
                        {activePanel === 'accordion' && (
                            <XPanel
                                header="Accordion"
                            >
                                <div className="card justify-center">
                                    <XAccordion activeIndex={0}>
                                        <AccordionTab
                                            header={
                                                <span className="flex align-items-center gap-2 w-full">
                                                    <XAvatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                                                    <span className="font-bold white-space-nowrap">Amy Elsner</span>
                                                    <Badge value="3" className="ml-auto" />
                                                </span>
                                            }
                                        >
                                            <p className="m-0">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </p>
                                        </AccordionTab>
                                        <AccordionTab
                                            header={
                                                <span className="flex align-items-center gap-2 w-full">
                                                    <XAvatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" shape="circle" />
                                                    <span className="font-bold white-space-nowrap">Onyama Limba</span>
                                                    <Badge value="4" className="ml-auto" />
                                                </span>
                                            }
                                        >
                                            <p className="m-0">
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                                quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                                sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                                Consectetur, adipisci velit, sed quia non numquam eius modi.
                                            </p>
                                        </AccordionTab>
                                        <AccordionTab
                                            header={
                                                <span className="flex align-items-center gap-2 w-full">
                                                    <XAvatar image="https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png" shape="circle" />
                                                    <span className="font-bold white-space-nowrap">Onyama Limba</span>
                                                    <Badge value="4" className="ml-auto" />
                                                </span>
                                            }
                                        >
                                            <p className="m-0">
                                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                                                quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                                                mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                                                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                                            </p>
                                        </AccordionTab>
                                    </XAccordion>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de Card */}
                        {activePanel === 'card' && (
                            <XPanel
                                header="Card"
                            >
                                <div className="card flex justify-center gap-4">
                                    <XCard
                                        title="Advanced Card"
                                        subTitle="Card subtitle"
                                        footer={footer}
                                        header={header}
                                        className="md:w-25rem"
                                    >
                                        <p className="m-0">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                                        </p>
                                    </XCard>
                                    <XCard
                                        title="Advanced Card"
                                        subTitle="Card subtitle"
                                        footer={footer}
                                        header={header}
                                        className="md:w-25rem"
                                    >
                                        <p className="m-0">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                                        </p>
                                    </XCard>
                                    <XCard>
                                        <div className=''>
                                            <XAvatar label="AB" size="large" className="mr-2 bg-[#F1F0FA] w-[4.5rem] h-[4.313rem] text-[#7866CB]" shape="circle" />
                                        </div>
                                        <div>
                                            <h2 className="font-bold">1. Card Information </h2>
                                            <p className="font-bold pl-[19px]"> Text: <XTag severity="success" value="Success"></XTag></p>
                                            <div className="pl-[19px]">
                                                <div className="flex flex-row gap-1">
                                                    <p className="font-bold">Text: </p>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                        Ullam qui earum eius nesciunt nam, tempore voluptatibus dolores reiciendis
                                                        reprehenderit commodi voluptatem nemo iure vitae sit exercitationem laborum,
                                                        laboriosam repudiandae! Dolore culpa harum voluptatibus corporis illum et amet
                                                        quasi doloremque sunt quo, reiciendis iure commodi est? Debitis maiores hic
                                                        quisquam quasi.
                                                    </p>
                                                </div>
                                                <div className="flex flex-row gap-1">
                                                    <p className="font-bold">Text: </p>
                                                    <p>Lorem ipsum dolor</p>
                                                </div>
                                                <div className="flex flex-row gap-1">
                                                    <p className="font-bold">Text: </p>
                                                    <p>Lorem ipsum dolor</p>
                                                </div>
                                            </div>
                                        </div>
                                    </XCard>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de Defered */}
                        {activePanel === 'deferred' && (
                            <XPanel
                                header="Deferred"
                            >
                                <div className="card flex justify-center">
                                    <p style={{ marginBottom: '70rem', textAlign: 'center' }}>Scroll down to lazy load an image.</p>
                                    <XToast ref={ref} />
                                    <XDeferredContent onLoad={onImageLoad}>
                                        <img className="w-full md:w-30rem md:block md:mx-auto" src="https://primefaces.org/cdn/primereact/images/galleria/galleria3.jpg" alt="Prime" />
                                    </XDeferredContent>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de Divider */}
                        {activePanel === 'divider' && (
                            <XPanel
                                header="Divider"
                            >
                                <div className="card flex justify-content-center">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                    <XDivider layout="vertical" />
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                                    </p>
                                    <XDivider layout="vertical" />
                                    <p>
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                                        officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                                    </p>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de Fieldset */}
                        {activePanel === 'fieldset' && (
                            <XPanel
                                header="Fieldset"
                            >
                                <div className="card flex justify-content-center">
                                    <XFieldset legend={legendTemplate}>
                                        <p className="m-0">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </XFieldset>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de Panel */}
                        {activePanel === 'panel' && (
                            <XPanel
                                header="Panel"
                            >
                                <div className="card justify-center">

                                </div>
                            </XPanel>
                        )}

                        {/* Panel de ScrollPanel */}
                        {activePanel === 'scrollPanel' && (
                            <XPanel
                                header="ScrollPanel"
                            >
                                <div className="card scrollpanel-demo">
                                    <div className="flex flex-column md:flex-row gap-5">
                                        <div className="flex-auto">
                                            <XScrollPanel style={{ width: '100%', height: '200px' }} className="custombar1">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </p>
                                                <p>
                                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                                                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                                                    ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                                                </p>
                                                <p>
                                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                                                    quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                                                    culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                                                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                                                </p>
                                            </XScrollPanel>
                                        </div>
                                        <div className="flex-auto">
                                            <XScrollPanel style={{ width: '100%', height: '200px' }} className="custombar2">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </p>
                                                <p>
                                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                                                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                                                    ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                                                </p>
                                                <p>
                                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                                                    quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                                                    culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                                                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                                                </p>
                                            </XScrollPanel>
                                        </div>
                                    </div>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de Splitter */}
                        {activePanel === 'splitter' && (
                            <XPanel
                                header="Splitter"
                            >
                                <div className="mb-8">
                                    <h3 className="text-xl font-bold mb-4">Splitter Horizontal</h3>
                                    <div className="h-[300px] border rounded-lg">
                                        <XSplitter
                                            layout="horizontal"
                                            style={{ height: '100%' }}
                                        >
                                            <XSplitterPanel size={30} minSize={20} className="overflow-auto">
                                                Panel Izquierdo - Contenido del panel izquierdo
                                            </XSplitterPanel>
                                            <XSplitterPanel size={70} minSize={30} className="overflow-auto">
                                                Panel Derecho - Contenido del panel derecho
                                            </XSplitterPanel>
                                        </XSplitter>
                                    </div>

                                    <h3 className="text-xl font-bold mb-4">Splitter Vertical</h3>
                                    <div className="h-[300px] border rounded-lg">
                                        <XSplitter
                                            layout="vertical"
                                            style={{ height: '100%' }}
                                        >
                                            <XSplitterPanel size={30} minSize={20} className="overflow-auto">
                                                Panel Izquierdo - Contenido del panel izquierdo
                                            </XSplitterPanel>
                                            <XSplitterPanel size={70} minSize={30} className="overflow-auto">
                                                Panel Derecho - Contenido del panel derecho
                                            </XSplitterPanel>
                                        </XSplitter>
                                    </div>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de Stepper */}
                        {activePanel === 'stepper' && (
                            <XPanel
                                header="Stepper"
                            >
                                <div className="card flex justify-center">
                                    <XStepper ref={stepperRef} style={{ flexBasis: '50rem' }}>
                                        <StepperPanel header="Header I">
                                            <div className="flex flex-column h-48">
                                                <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content I</div>
                                            </div>
                                            <div className="flex pt-4 justify-content-end">
                                                <XButton label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current?.nextCallback()} />
                                            </div>
                                        </StepperPanel>
                                        <StepperPanel header="Header II">
                                            <div className="flex flex-column h-48">
                                                <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content II</div>
                                            </div>
                                            <div className="flex pt-4 justify-content-between">
                                                <XButton label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current?.prevCallback()} />
                                                <XButton label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current?.nextCallback()} />
                                            </div>
                                        </StepperPanel>
                                        <StepperPanel header="Header III">
                                            <div className="flex flex-column h-48">
                                                <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
                                            </div>
                                            <div className="flex pt-4 justify-content-start">
                                                <XButton label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current?.prevCallback()} />
                                            </div>
                                        </StepperPanel>
                                    </XStepper>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de TabView */}
                        {activePanel === 'tabview' && (
                            <XPanel
                                header="TabView"
                            >
                                <div className="card flex justify-center">
                                    <XTabView>
                                        <TabPanel pt={tabPanelPT} header="Header I">
                                            <p className="m-0">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </p>
                                        </TabPanel>
                                        <TabPanel pt={tabPanelPT} header="Header II">
                                            <p className="m-0">
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                                                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                                                ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                                            </p>
                                        </TabPanel>
                                        <TabPanel pt={tabPanelPT} header="Header III">
                                            <p className="m-0">
                                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                                                quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                                                culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                                                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                                            </p>
                                        </TabPanel>
                                    </XTabView>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de Toolbar */}
                        {activePanel === 'toolbar' && (
                            <XPanel
                                header="Toolbar"
                            >
                                <div className="card  justify-center">
                                    <XToolbar start={startContent} center={centerContent} end={endContent} />
                                </div>
                            </XPanel>
                        )}
                        {/* Panel de NUEVO */}
                        {/* Panel de Snackbar */}
                        {activePanel === 'snackbar' && (
                            <XPanel
                                header="Snackbar"
                            >
                                <div className="card">
                                    <XSnackbar
                                        icon="check-circle"
                                        severity="success"
                                        bgCircle="bg-[#E2F7F3]"
                                        classIcon="text-[#15BB9C]"
                                    >
                                        <h3 className="font-bold gap-6">Título del mensaje</h3>
                                        <p>Contenido del mensaje aquí</p>
                                    </XSnackbar>
                                    <br />
                                    <XSnackbar
                                        icon="cancel-circle"
                                        severity="error"
                                        bgCircle="bg-[#FDEDEC]"
                                        classIcon="text-[#E84C3D]"
                                    >
                                        <h3 className="font-bold">Título del mensaje</h3>
                                        <p>Contenido del mensaje aquí</p>
                                    </XSnackbar>
                                    <br />
                                    <XSnackbar
                                        icon="warning-circle"
                                        severity="warn"
                                        bgCircle="bg-[#FEF5E7]"
                                        classIcon="text-[#F39C0F]"
                                    >
                                        <h3 className="font-bold">Título del mensaje</h3>
                                        <p>Contenido del mensaje aquí</p>
                                    </XSnackbar>
                                    <br />
                                    <XSnackbar
                                        icon="info-empty"
                                        severity="info"
                                        bgCircle="bg-[#EBF5FB]"
                                        classIcon="text-[#3698DB]"
                                    >
                                        <h3 className="font-bold">Título del mensaje</h3>
                                        <p>Contenido del mensaje aquí</p>
                                    </XSnackbar>
                                    <br />
                                    <XSnackbar
                                        icon="help-circle"
                                        severity="secondary"
                                        bgCircle="bg-[#F3F3F3]"
                                        classIcon="text-[#686868]"
                                    >
                                        <h3 className="font-bold">Título del mensaje</h3>
                                        <p>Contenido del mensaje aquí</p>
                                    </XSnackbar>
                                    <br />
                                    <XSnackbar
                                        icon="help-circle"
                                        severity="contrast"
                                        bgCircle="bg-[#686868]"
                                        classIcon="text-[#FFFFFF]"
                                        closable={false}
                                    >
                                        <p>Contenido del mensaje aquí</p>
                                    </XSnackbar>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de Snackbar */}
                        {activePanel === 'cardInformation' && (
                            <XPanel
                                header="Card Information"
                            >
                                <div className="card flex justify-center gap-4">
                                    <XCard>
                                        <div>
                                            <XAvatar label="AB" size="large" className="mr-2 bg-purple-50 w-[4.5rem] h-[4.313rem] text-purple-600" shape="circle" />
                                        </div>                                        <div>
                                            <h2 className="font-bold">1. Card Information </h2>
                                            <p className="font-bold pl-[1.188rem]"> Text: <XTag severity="success" value="Success"></XTag></p>
                                            <div className="pl-[1.188rem]">
                                                <div className="flex flex-row gap-1">
                                                    <p className="font-bold">Text: </p>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                        Ullam qui earum eius nesciunt nam, tempore voluptatibus dolores reiciendis
                                                        reprehenderit commodi voluptatem nemo iure vitae sit exercitationem laborum,
                                                        laboriosam repudiandae! Dolore culpa harum voluptatibus corporis illum et amet
                                                        quasi doloremque sunt quo, reiciendis iure commodi est? Debitis maiores hic
                                                        quisquam quasi.
                                                    </p>
                                                </div>
                                                <div className="flex flex-row gap-1">
                                                    <p className="font-bold">Text: </p>
                                                    <p>Lorem ipsum dolor</p>
                                                </div>
                                                <div className="flex flex-row gap-1">
                                                    <p className="font-bold">Text: </p>
                                                    <p>Lorem ipsum dolor</p>
                                                </div>
                                            </div>
                                        </div>
                                    </XCard>
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de Snackbar */}
                        {activePanel === 'cardMenu' && (
                            <XPanel
                                header="Card Menu"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                                    {[0, 1, 2].map((id) => (
                                        <div
                                            key={id}
                                            onClick={() => setSelectedCard(id)}
                                            className="cursor-pointer w-full"
                                        >
                                            <XCardPrueba
                                                orientation="vertical"
                                                title="Card especial"
                                                body="Este es un contenido completamente diferente"
                                                showArrow={false}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                                    {[0, 1, 2].map((id) => (
                                        <div
                                            key={id}
                                            onClick={() => setSelectedCard(id)}
                                            className="cursor-pointer w-full"
                                        >
                                            <XCardPrueba
                                                orientation="horizontal"
                                                title="Title text"
                                                body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
                                                showArrow={true}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-6 p-6">
                                    {[0, 1, 2].map((id) => (
                                        <div key={id} onClick={() => setSelectedCard(id)} className="cursor-pointer">
                                            <XCardPrueba
                                                orientation={id % 2 === 0 ? 'vertical' : 'horizontal'}
                                                disabled={id % 2 === 0 ? true : false}
                                                title={id % 2 === 0 ? 'Title text' : 'Title text disabled'}
                                                body={id % 2 === 0 ? 'Lorem Ipsum is simply dummy text typesetting industry.' : 'Lorem Ipsum is simply dummy text  text ever since the 1500s, when an unknown printer took a galley'}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </XPanel>
                        )}

                        {/* Panel por defecto cuando no hay selección */}
                        {!activePanel && (
                            <XPanel
                                header="Seleccione un componente"
                            >
                                <div className="card flex justify-center">
                                    Por favor seleccione un componente del menú lateral
                                </div>
                            </XPanel>
                        )}
                    </div>
                </div >
            </div >
        </>
    )
} 3