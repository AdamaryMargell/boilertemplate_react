'use client';

import React, { useState, useRef } from 'react';
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
import { XInputNumber } from '@/components/XInputNumber';
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
import XGalleria from '@/components/XGallery';
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
import { orderListPT } from '@/primereact-tailwindcss/orderList.pt';
import { XPickList } from '@/components/XPickList';
import XDropdown from '@/components/XDropdown';
import XInputOtp from '@/components/XInputOtp';


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

export default function PageDocumentation() {
    const [visibleLeft, setVisibleLeft] = useState<boolean>(false);
    const [activePanel, setActivePanel] = useState<any>(null);

    //Sidebar
    const btnRefForm = useRef<any>(null);
    const btnRefButton = useRef<any>(null);
    const btnRefData = useRef<any>(null);
    const btnRefPanel = useRef<any>(null);
    const btnRefOverlay = useRef<any>(null);
    const btnRefMenu = useRef<any>(null);
    const btnRefMessage = useRef<any>(null);
    const btnRefMedia = useRef<any>(null);
    const btnRefMisc = useRef<any>(null);

    //MenuBar general
    const items = [
        {
            label: 'Menu',
            template: (item: any, options: any) => {
                const { className, onClick } = options;

                return (
                    <Button icon="pi pi-arrow-right" onClick={() => setVisibleLeft(true)} pt={{
                        root: { className: '!bg-gray-700 hover:bg-gray-700 cursor-pointer text-white p-3 !border-round !border-white border-red-500 flex gap-2' },
                        label: { className: 'text-white font-bold text-xl' },
                    }} />
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
    const navigateToPanel = (panel: any) => {
        setActivePanel(panel);
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
    const itemsMenu = [
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
    const [selectedCity, setSelectedCity] = useState<City | null>(null);
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
    const onChangePickList = (event) => {
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

    return (
        <>
            <div className="card w-full">
                <div className="flex gap-2 justify-content-center ">
                    <XMenuBar model={items} className='w-full' />
                </div>

                <XSidebar visible={visibleLeft} position="left" onHide={() => setVisibleLeft(false)}
                    content={({ closeIconRef, hide }) => (
                        <div>
                            <ul className="list-none p-0 m-0">
                                <li>
                                    <StyleClass nodeRef={btnRefForm} selector="@next" enterFromClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                        <a ref={btnRefForm} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-chart-line mr-2"></i>
                                            <span className="font-medium">FORM</span>
                                            <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                            <Ripple />
                                        </a>
                                    </StyleClass>
                                    <ul className="list-none py-0 pl-4 pr-0 m-0 hidden overflow-y-hidden transition-all duration-[400ms] ease-in-out">
                                        {/* AutoComplete */}
                                        <li>
                                            <a
                                                onClick={() => navigateToPanel('autocomplete')}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-users mr-2"></i>
                                                <span className="font-medium">AutoComplete</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        {/* Calendar */}
                                        {/* CascadeSelect */}
                                        <li>
                                            <a
                                                onClick={() => navigateToPanel('cascadeSelect')}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-users mr-2"></i>
                                                <span className="font-medium">CascadeSelect</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        {/* CheckBox */}
                                        <li>
                                            <a
                                                onClick={() => navigateToPanel('checkbox')}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-users mr-2"></i>
                                                <span className="font-medium">Checkbox</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        {/* Chips */}
                                        <li>
                                            <a
                                                onClick={() => navigateToPanel('chips')}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-users mr-2"></i>
                                                <span className="font-medium">Chips</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        {/* ColroPicker */}
                                        <li>
                                            <a
                                                onClick={() => navigateToPanel('colorPicker')}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-users mr-2"></i>
                                                <span className="font-medium">ColorPicker</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        {/* Dropdown */}
                                        <li>
                                            <a
                                                onClick={() => navigateToPanel('dropdown')}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-users mr-2"></i>
                                                <span className="font-medium">Dropdown</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        {/* Editor */}
                                        {/* FloatLabel */}
                                        {/* IconField */}
                                        {/* InputGroup */}
                                        {/* InputMask */}
                                        <li>
                                            <a
                                                onClick={() => navigateToPanel('inputmask')}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-users mr-2"></i>
                                                <span className="font-medium">InputMask</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        {/* InputSwitch */}
                                        <li>
                                            <a
                                                onClick={() => navigateToPanel('inputNumber')}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-users mr-2"></i>
                                                <span className="font-medium">InputNumber</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        {/* InputOTP */}
                                        <li>
                                            <a
                                                onClick={() => navigateToPanel('inputOtp')}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-users mr-2"></i>
                                                <span className="font-medium">InputOtp</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        {/* InputText */}
                                        <li>
                                            <a
                                                onClick={() => navigateToPanel('inpuText')}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-users mr-2"></i>
                                                <span className="font-medium">InputText</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        {/* InputTextArea */}
                                        {/* KeyFilter */}
                                        {/* Knob */}
                                        {/* ListBox */}
                                        {/* Mention */}
                                        {/* Multiselect */}
                                        {/* MultiStateCheckbox */}
                                        {/* Password */}
                                        {/* RadioButton */}
                                        {/* Rating */}
                                        {/* SelectButton */}
                                        {/* Slider */}
                                        {/* TreeSelect */}
                                        {/* TriStateCheckbox */}
                                        {/* ToggleButton */}
                                    </ul>
                                </li>
                                {/* Panel de Button */}
                                <li>
                                    <StyleClass nodeRef={btnRefButton} selector="@next" enterFromClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                        <a ref={btnRefButton} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-chart-line mr-2"></i>
                                            <span className="font-medium">BUTTON</span>
                                            <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                            <Ripple />
                                        </a>
                                    </StyleClass>
                                    <ul className="list-none py-0 pl-4 pr-0 m-0 hidden overflow-y-hidden transition-all duration-[400ms] ease-in-out">
                                        <li>
                                            <a
                                                onClick={() => navigateToPanel('button')}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-users mr-2"></i>
                                                <span className="font-medium">Button</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                onClick={() => navigateToPanel('speeddial')}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-users mr-2"></i>
                                                <span className="font-medium">SpeedDial</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-users mr-2"></i>
                                                <span className="font-medium">SplitButton</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                {/* Panel de Data */}
                                <li>
                                    <StyleClass nodeRef={btnRefData} selector="@next" enterFromClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                        <a ref={btnRefData} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-chart-line mr-2"></i>
                                            <span className="font-medium">DATA</span>
                                            <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                            <Ripple />
                                        </a>
                                    </StyleClass>
                                    <ul className="list-none py-0 pl-4 pr-0 m-0 hidden overflow-y-hidden transition-all duration-[400ms] ease-in-out">
                                        <li>
                                            <a
                                                onClick={() => navigateToPanel('orderList')}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-users mr-2"></i>
                                                <span className="font-medium">OrderList</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                onClick={() => navigateToPanel('pickList')}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-users mr-2"></i>
                                                <span className="font-medium">PickList</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                {/* Panel de Panel */}
                                <li>
                                    <StyleClass nodeRef={btnRefPanel} selector="@next" enterFromClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                        <a ref={btnRefPanel} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-chart-line mr-2"></i>
                                            <span className="font-medium">PANEL</span>
                                            <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                            <Ripple />
                                        </a>
                                    </StyleClass>
                                    <ul className="list-none py-0 pl-4 pr-0 m-0 hidden overflow-y-hidden transition-all duration-[400ms] ease-in-out">
                                        <li>
                                            <a
                                                onClick={() => navigateToPanel('accordion')}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-users mr-2"></i>
                                                <span className="font-medium">Accordion</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                onClick={() => navigateToPanel('card')}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-users mr-2"></i>
                                                <span className="font-medium">Card</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                onClick={() => navigateToPanel('deferred')}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-users mr-2"></i>
                                                <span className="font-medium">Deferred</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                onClick={() => navigateToPanel('panel')}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-users mr-2"></i>
                                                <span className="font-medium">Panel</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                {/* Panel de Messages */}
                                <li>
                                    <StyleClass nodeRef={btnRefMessage} selector="@next" enterFromClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                        <a ref={btnRefMessage} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-chart-line mr-2"></i>
                                            <span className="font-medium">MESSAGES</span>
                                            <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                            <Ripple />
                                        </a>
                                    </StyleClass>
                                    <ul className="list-none py-0 pl-4 pr-0 m-0 hidden overflow-y-hidden transition-all duration-[400ms] ease-in-out">
                                        <li>
                                            <a
                                                onClick={() => navigateToPanel('message')}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-users mr-2"></i>
                                                <span className="font-medium">Message</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                onClick={() => navigateToPanel('messages')}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-users mr-2"></i>
                                                <span className="font-medium">Messages</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                onClick={() => navigateToPanel('toast')}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-users mr-2"></i>
                                                <span className="font-medium">Toast</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                {/* Panel de Media */}
                                <li>
                                    <StyleClass nodeRef={btnRefMedia} selector="@next" enterFromClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                        <a ref={btnRefMedia} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-chart-line mr-2"></i>
                                            <span className="font-medium">MEDIA</span>
                                            <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                            <Ripple />
                                        </a>
                                    </StyleClass>
                                    <ul className="list-none py-0 pl-4 pr-0 m-0 hidden overflow-y-hidden transition-all duration-[400ms] ease-in-out">
                                        <li>
                                            <a
                                                onClick={() => navigateToPanel('carrousel')}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-users mr-2"></i>
                                                <span className="font-medium">Carrousel</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                onClick={() => navigateToPanel('galleria')}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-users mr-2"></i>
                                                <span className="font-medium">Galleria</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                onClick={() => navigateToPanel('image')}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-users mr-2"></i>
                                                <span className="font-medium">Image</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                {/* Panel de Overlay */}
                                <li>
                                    <StyleClass nodeRef={btnRefOverlay} selector="@next" enterFromClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                        <a ref={btnRefOverlay} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-chart-line mr-2"></i>
                                            <span className="font-medium">OVERLAY</span>
                                            <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                            <Ripple />
                                        </a>
                                    </StyleClass>
                                    <ul className="list-none py-0 pl-4 pr-0 m-0 hidden overflow-y-hidden transition-all duration-[400ms] ease-in-out">
                                        <li>
                                            <a
                                                onClick={() => navigateToPanel('dialog')}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-users mr-2"></i>
                                                <span className="font-medium">Dialog</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                onClick={() => navigateToPanel('overlaypanel')}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-users mr-2"></i>
                                                <span className="font-medium">OverlayPanel</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                onClick={() => navigateToPanel('sidebar')}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-users mr-2"></i>
                                                <span className="font-medium">Sidebar</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                onClick={() => navigateToPanel('tooltip')}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-users mr-2"></i>
                                                <span className="font-medium">Tooltip</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                {/* Panel de Menu */}
                                <li>
                                    <StyleClass nodeRef={btnRefMenu} selector="@next" enterFromClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                        <a ref={btnRefMenu} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-chart-line mr-2"></i>
                                            <span className="font-medium">MENU</span>
                                            <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                            <Ripple />
                                        </a>
                                    </StyleClass>
                                    <ul className="list-none py-0 pl-4 pr-0 m-0 hidden overflow-y-hidden transition-all duration-[400ms] ease-in-out">
                                        <li>
                                            <a
                                                onClick={() => navigateToPanel('menubar')}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-users mr-2"></i>
                                                <span className="font-medium">Menubar</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                {/* Panel de Misc */}
                                <li>
                                    <StyleClass nodeRef={btnRefMisc} selector="@next" enterFromClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                        <a ref={btnRefMisc} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-chart-line mr-2"></i>
                                            <span className="font-medium">MISC</span>
                                            <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                            <Ripple />
                                        </a>
                                    </StyleClass>
                                    <ul className="list-none py-0 pl-4 pr-0 m-0 hidden overflow-y-hidden transition-all duration-[400ms] ease-in-out">
                                        <li>
                                            <a
                                                onClick={() => navigateToPanel('avatar')}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-users mr-2"></i>
                                                <span className="font-medium">Avatar</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                onClick={() => navigateToPanel('badge')}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-users mr-2"></i>
                                                <span className="font-medium">Badge</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                onClick={() => navigateToPanel('tag')}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-users mr-2"></i>
                                                <span className="font-medium">Tag</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    )}
                >
                </XSidebar>
            </div>
            <div className="w-full h-screen mt-10">
                <div className="grid grid-cols-12">
                    <div className="col-start-2 col-span-10">
                        <div className="font-bold text-center">
                            <h1 className="text-[8rem]">FORM</h1>
                        </div>
                        {/* Panel de FORM */}
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
                                        <br></br>
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
                        {activePanel === 'inpuText' && (
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

                        {/* Panel de BUTTON */}
                        {/* Panel de Button */}
                        {activePanel === 'button' && (
                            <XPanel
                                header="Button"
                                pt={{
                                    root: { className: 'shadow-xl mb-12 border-none' },
                                    header: { className: 'bg-gray-800 text-white' },
                                    content: { className: 'mt-4' }
                                }}
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
                                        pt={{ ...orderListPT }}
                                    />
                                </div>
                            </XPanel>
                        )}

                        {activePanel === 'pickList' && (
                            <XPanel
                                header="PickList"
                            >
                                <div className="flex justify-center pb-4">
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

                        {/* Panel de MESSAGES */}
                        {/* Panel de Toast */}
                        {activePanel === 'toast' && (
                            <XPanel
                                header="Toast"
                                pt={{
                                    root: { className: 'shadow-xl mb-12 border-none' },
                                    header: { className: 'bg-gray-800 text-white' },
                                    content: { className: 'mt-4' }
                                }}
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
                        {/* Panel de Dialog */}
                        {activePanel === 'dialog' && (
                            <XPanel
                                header="Dialog"
                                pt={{
                                    root: { className: 'shadow-xl mb-12 border-none' },
                                    header: { className: 'bg-gray-800 text-white' },
                                    content: { className: 'mt-4' }
                                }}
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
                        {activePanel === 'overlaypanel' && (
                            <XPanel
                                header="OverlayPanel"
                                pt={{
                                    root: { className: 'shadow-xl mb-12 border-none' },
                                    header: { className: 'bg-gray-800 text-white' },
                                    content: { className: 'mt-4' }
                                }}
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
                                pt={{
                                    root: { className: 'shadow-xl mb-12 border-none' },
                                    header: { className: 'bg-gray-800 text-white' },
                                    content: { className: 'mt-4' }
                                }}
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


                        {/* Panel de MISC */}
                        {/* Panel de Avatar */}
                        {activePanel === 'avatar' && (
                            <XPanel
                                header="Avatar"
                                pt={{
                                    root: { className: 'shadow-xl mb-12 border-none' },
                                    header: { className: 'bg-gray-800 text-white' },
                                    content: { className: 'mt-4' }
                                }}
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

                        {activePanel === 'badge' && (
                            <XPanel
                                header="Badge"
                                pt={{
                                    root: { className: 'shadow-xl mb-12 border-none' },
                                    header: { className: 'bg-gray-800 text-white' },
                                    content: { className: 'mt-4' }
                                }}
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

                        {activePanel === 'tag' && (
                            <XPanel
                                header="Tag"
                                pt={{
                                    root: { className: 'shadow-xl mb-12 border-none' },
                                    header: { className: 'bg-gray-800 text-white' },
                                    content: { className: 'mt-4' }
                                }}
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

                        {/* Panel de Menu */}
                        {/* Panel de Menubar */}
                        {activePanel === 'menubar' && (
                            <XPanel
                                header="MenuBar"
                                pt={{
                                    root: { className: 'shadow-xl mb-12 border-none' },
                                    header: { className: 'bg-gray-800 text-white' },
                                    content: { className: 'mt-4' }
                                }}
                            >
                                <div className="card">
                                    <XMenuBar model={itemsMenu} />
                                </div>
                            </XPanel>
                        )}

                        {/* Panel de PANEL */}
                        {/* Panel de Accordion */}
                        {activePanel === 'accordion' && (
                            <XPanel
                                header="Accordion"
                                pt={{
                                    root: { className: 'shadow-xl mb-12 border-none' },
                                    header: { className: 'bg-gray-800 text-white' },
                                    content: { className: 'mt-4' }
                                }}
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

                        {activePanel === 'card' && (
                            <XPanel
                                header="Card"
                                pt={{
                                    root: { className: 'shadow-xl mb-12 border-none' },
                                    header: { className: 'bg-gray-800 text-white' },
                                    content: { className: 'mt-4' }
                                }}
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
                                </div>
                            </XPanel>
                        )}

                        {activePanel === 'deferred' && (
                            <XPanel
                                header="Deferred"
                                pt={{
                                    root: { className: 'shadow-xl mb-12 border-none' },
                                    header: { className: 'bg-gray-800 text-white' },
                                    content: { className: 'mt-4' }
                                }}
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

                        {activePanel === 'panel' && (
                            <XPanel
                                header="Panel"
                                pt={{
                                    root: { className: 'shadow-xl mb-12 border-none' },
                                    header: { className: 'bg-gray-800 text-white' },
                                    content: { className: 'mt-4' }
                                }}
                            >
                                <div className="card justify-center">

                                </div>
                            </XPanel>
                        )}

                        {/* Panel por defecto cuando no hay selección */}
                        {!activePanel && (
                            <XPanel
                                header="Seleccione un componente"
                                pt={{
                                    root: { className: 'shadow-xl mb-12 border-none' },
                                    header: { className: 'bg-gray-800 text-white' },
                                    content: { className: 'mt-4' }
                                }}
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
}