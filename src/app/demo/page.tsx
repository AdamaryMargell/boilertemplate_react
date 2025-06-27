'use client';
import XIcon from '@/components/XIcons/XIcon';
import XMenuBar from '@/components/XMenuBar';
import XPanel from '@/components/XPanel';
import XScrollPanel from '@/components/XScrollPanel';
import XToast from '@/components/XToast';
import { inputTextPT } from '@/primereact-tailwindcss/inputText.pt';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { useRef, useState } from 'react';

type IconComponent = React.FC<{ size?: number; className?: string }>;
type IconItem = {
    name: string;
    component: IconComponent;
};

type IconCategory = {
    name: string;
    icons: string[];
};

export default function DemoPage() {
    const toastRef = useRef<Toast>(null);
    const [searchTerms, setSearchTerms] = useState<Record<string, string>>({});

    const items = [
        {
            label: 'Components',
        },
    ];

    //Catecories icons
    const IconCategories: Record<string, IconCategory> = {
        actions: {
            name: "Actions",
            icons: [
                'download', 'download-square', 'share-ios', 'share-android', 'menu', 'undo', 'redo', 'warning-triangle', 'warning-circle', 'info-empty',
                'plus', 'minus', 'cancel', 'cancel-circle', 'check', 'check-circle', 'refresh-double', 'refresh', 'upload', 'upload-square',
                'prohibition', 'help', 'help-circle', 'double-check', 'open-in-window', 'eye-empty', 'eye-off', 'trash', 'paste-clipboard', 'clean',
                'tools', 'erase', 'home', 'all-elements', 'change', 'thik-plus', 'think-minus', 'thik-cancel', 'thik-check'
            ]
        },
        analytics: {
            name: "Analytics",
            icons: [
                'percentage', 'percentage-square', 'reports', 'stats-up', 'stats-down', 'graph-up', 'graph-down', 'presentation'
            ],
        },
        audio: {
            name: "Audio",
            icons: [
                'mic', 'mic-mute', 'sound-off', 'sound-low', 'sound-high'
            ],
        },
        buildings: {
            name: "Buildings",
            icons: [
                'hospital', 'small-shop-alt', 'building', 'building-bigger', 'industry', 'farm', 'neighbourhood', 'planimetry', 'home-shop', 'other-shops'
            ],
        },
        clothing: {
            name: "Clothing",
            icons: [
                'glasses', 'large-suitcase', 'handbag', 'umbrella', 'mirror', 't-shirt', 'chef-hat', 'heel', 'luggage'
            ],
        },
        cloud: {
            name: "Cloud",
            icons: [
                'cloud', 'cloud-upload', 'cloud-download', 'cloud-error', 'cloud-check'
            ],
        },
        communication: {
            name: "Communication",
            icons: [
                'message-chat', 'message-text', 'message-error', 'message-check', 'message-alert', 'message-question', 'phone', 'phone-outcome', 'phone-income', 'phone-disabled',
                'bubble-text', 'bubble-chat', 'bubble-error', 'bubble-check', 'bubble-warning', 'bubble-question', 'bubble', 'message', 'mail-opened', 'mail',
                'bell', 'bell-off', 'headset-help', 'facetime', 'globe', 'internet', 'send-diagonal', 'at-sign'
            ],
        },
        connectivity: {
            name: "Connectivity",
            icons: [
                'wifi', 'wifi-off', 'bluetooth', 'network-alt', 'antenna'
            ],
        },
        development: {
            name: "Development",
            icons: [
                'dev-mode-phone', 'dev-mode-laptop', 'developer', 'code', 'database'
            ],
        },
        devices: {
            name: "Devices",
            icons: [
                'printing-page', 'smartphone', 'modern-tv', 'computer', 'laptop', 'wristwatch', 'vr-symbol', 'ar-symbol', 'save'
            ],
        },
        docs: {
            name: "Docs",
            icons: [
                'page', 'attachment', 'archive', 'folder', 'page-edit', 'privacy-policy', 'file-search', 'file-heck', 'file-see', 'file-r',
                'file-pagination', 'signature', 'file-personalized-campaign', 'file-upload-campaign'
            ],
        },
        editor: {
            name: "Editor",
            icons: [
                'scissor', 'edit-pencil'
            ],
        },
        emojis: {
            name: "Emojis",
            icons: [
                'emoji-ball', 'emoji-sad', 'emoji-quite', 'emoji-happy', 'emoji-satisfaid', 'emoji-ball-fill', 'emoji-sad-fill', 'emoji-quite-fill', 'emoji-happy-fill', 'emoji-satisfied-fill'
            ],
        },
        finance: {
            name: "Finance",
            icons: [
                'coin-dollar', 'coin-bs', 'cash-dollar', 'cash-bs', 'lot-of-cash-dollar', 'lot-of-cash-bs', 'credit-card', 'credit-cards', 'card-security', 'card-issue',
                'card-locked', 'bank', 'piggy-bank', 'empty-wallet', 'wallet', 'lot-of-coins-dollar', 'lot-of-coins-bs', 'avance-efectivo', 'transfer-canceled', 'bank-check'
            ],
        },
        food: {
            name: "Food",
            icons: [
                'coffee', 'drink', 'ice-cream', 'pizza', 'apple', 'popcorn', 'products-restaurante', 'eating-cutlery-2', 'food'
            ],
        },
        gaming: {
            name: "Gaming",
            icons: [
                'bright-star', 'bright-crown', 'crown', 'gamepad', 'king-chess', 'queen-chess', 'castle-chess', 'bishop-chess', 'knight-chess', 'pawn-chess'
            ],
        },
        gestures: {
            name: "Gestures",
            icons: [
                'good-hand', 'bad-hand', 'rights-hand', 'rock-hand', 'peace-hand', 'give-hand-1', 'give-hand-2', 'touch-hand-1', 'touch-hand-2', 'deal'
            ],
        },
        health: {
            name: "Health",
            icons: [
                'heart', 'female', 'male', 'non-binary', 'pharmacy', 'healthcare', 'donate', 'medicine', 'baby-carriage', 'health'
            ],
        },
        home: {
            name: "Home",
            icons: [
                'empty-box', 'box', 'house', 'light-bulb', 'sleeper-chair', 'bed'
            ],
        },
        identity: {
            name: "Identity",
            icons: [
                'face-id', 'fingerprint', 'scanning', 'user-scan'
            ],
        },
        maps: {
            name: "Maps",
            icons: [
                'maps-arrow', 'maps-arrow-diagonal', 'navigator', 'navigator-alt', 'location', 'map', 'gps', '2x', 'advance-15-seconds', 'go-back-15-seconds'
            ],
        },
        music: {
            name: "Music",
            icons: [
                'music-note', 'headset', 'play', 'forward', 'pause', 'skip-prev', 'skip-next', 'rewind'
            ],
        },
        nature: {
            name: "Nature",
            icons: [
                'pine-tree', 'tree', 'plant', 'flower', 'drop', 'leaf'
            ],
        },
        navigate: {
            name: "Navigation",
            icons: [
                'arrow-left', 'arrow-right', 'arrow-up', 'arrow-down', 'arrow-tr', 'arrow-tl', 'arrow-br', 'arrow-bl', 'arrow-left-circle', 'arrow-right-circle',
                'arrow-up-circle', 'arrow-down-circle', 'arrow-tr-circle', 'arrow-tl-circle', 'arrow-br-circle', 'arrow-bl-circle', 'nav-arrow-left', 'nav-arrow-right', 'nav-arrow-up', 'nav-arrow-down',
                'page-left', 'page-right', 'page-up', 'page-down', 'more-horiz', 'more-horiz-circle', 'more-vert', 'more-vert-circle', 'drag', 'filter-list',
                'filter-list-circle', 'arrow-fall', 'arrow-rise', 'caret-up-stroke', 'caret-down-stroke', 'caret-up-fill', 'caret-down', 'thik-nav-arrow-up', 'thik-nav-arrow-down', 'thik-nav-arrow-right',
                'thik-nav-arrow-left', 'thick-nav-double-arrow-left', 'thin-nav-double-arrow-left', 'thick-nav-double-arrow-right', 'thin-nav-double-arrow-right', 'sort', 'filter',
            ],
        },
        organization: {
            name: "Organization",
            icons: [
                'star', 'star-fill', 'label', 'bookmark-empty', 'star-dashed', 'star-half-dashed', 'search', 'zoom-in', 'zoom-out', 'pin', 'remove-pin'
            ],
        },
        other: {
            name: "Other",
            icons: [
                'translate', 'timer', 'timer-off', 'clock', 'alarm', 'language', 'activity', 'triangle-flag', 'page-flip', 'link',
                'note', 'celebration', 'gift', 'qr-code', 'scan-qr-code-1', 'scan-qr-code-2'
            ]
        },
        photosVideos: {
            name: "Photos and Videos",
            icons: [
                'video-camera', 'video-camera-off', 'camera', 'rotate-camera-right', 'rotate-camera-left', 'expand', 'collapse', 'media-image', 'media-image-list', 'media-video',
                'media-video-list', 'flash', 'clapperboard'
            ]
        },
        security: {
            name: "Security",
            icons: [
                'shield', 'shield-alert', 'shield-error', 'key-alt', 'lock', 'no-lock', 'ip-address', 'vpn-adress', 'shield-check'
            ]
        },
        shopping: {
            name: "Shopping",
            icons: [
                'cart', 'shopping-bag', 'offer'
            ]
        },
        science: {
            name: "Science",
            icons: [
                'rocket', 'graduation-cap', 'brain', 'planet-alt', 'infinite', 'half-moon', 'atom', 'molecule',
            ]
        },
        system: {
            name: "System",
            icons: [
                'setting', 'cursor-pointer', 'calculator', 'calendar-1', 'calendar-2', 'log-out', 'log-in', 'on-tag',
                'off-tag', 'lock-key', 'system-restart', 'cookie', 'app-window'
            ]
        },
        transport: {
            name: "Transport",
            icons: [
                'car', 'airplane', 'airplane-off', 'bus', 'bicycle', 'cableway', 'motorcycle', 'motorcycle-delivery', 'wheel', 'gasoline',
                'truck', 'delivery-truck', 'ev-plug', 'ev-charge'
            ]
        },
        users: {
            name: "Users",
            icons: [
                'user', 'add-user', 'remove-user', 'profile-circle', 'group', 'user-love', 'user-star', 'verified-user', 'community', 'user-transfer',
                'parent-and-child', 'man', 'woman', 'kid', 'user-setting'
            ]
        },
        weather: {
            name: "Weather",
            icons: [
                'winter', 'rain', 'thunderstorm', 'sun', 'wind'
            ]
        },
        bnb: {
            name: "BNB",
            icons: [
                'prefered', 'pulsable', 'tapable', 'face', 'change-dollar', 'change-bs', 'change-global', 'sound-alert-phone', 'grow-dollar', 'grow-bs',
                'grow-dollar-plus', 'grow-bs-plus', 'bag-dollar', 'bag-bs', 'coins-dollar', 'coins-bs', 'atm-dollar', 'atm-bs', 'check-dollar', 'check-bs',
                'check-page', 'papers-dollar', 'papers-bs', 'newspaper', 'vault', 'door', 'input-money', 'output-money', 'cross', 'flag',
                'touchable', 'donation', 'menu-app', 'transfer', 'atm', 'desmaterializacion', 'aplicar-gravamen', 'levantar-gravamen', 'fusionar', 'fusionar-2',
                'reposicion', 'cashback', 'pos', 'tranfer-dollar', 'transfer-bs', 'seguro-desempleo', 'pay', 'pay-bs', 'classifiy', 'bitcoin',
                'to-process', 'doc-desmaterializado', 'doc-fisico', 'comp-accionistas'
            ]
        },
        bnbTarjetas: {
            name: "BNB Tarjetas",
            icons: [
                'caja-de-ahorro-bs', 'safi', 'dpf', 'tarjeta-credito', 'vivienda', 'auto', 'consumo', 'cuenta-corriente', 'en-accion', 'futuro-asegurado',
                'portafolio', 'oportuno', 'efectivo', 'opcion', 'icon-1', 'caja-de-ahorro-usd', 'presto', 'adelanto-de-sueldo', 'credito'
            ]
        },
        bnbwithoutBb: {
            name: "BNB Icons without Background",
            icons: [
                'bnb-transferencias', 'bnb-consultas', 'bnb-autorizaciones', 'bnb-servicios', 'bnb-mis-debitos', 'bnb-video-banca', 'bnb-transf-exterior', 'bnb-agregar', 'bnb-seguimiento-credito',
                'bnb-solicitar-dpf', 'bnb-remesas', 'bnb-retiro', 'bnb-pago-tc', 'bnb-pago', 'bnb-movimientos-tarjeta', 'bnb-movimientos-qr', 'bnb-mis-servicios', 'bnb-liimite-de-gastos', 'bnb-facturas', 'bnb-vehiculo', 'bnb-casa', 'bnb-consumo', 'bnb-config-qr', 'bnb-compras-por-internet',
                'bnb-bloqueo-temporal', 'bnb-billetera', 'bnb-avion', 'bnb-apertura-de-cuenta', 'bnb-exterior', 'bnb-extractos', 'bnb-seguro', 'bnb-conf-de-equipo', 'bnb-puntos-de-atencion', 'bnb-notififaciones', 'bnb-token-digital', 'bnb-informacion',
                'bnb-fingerprint', 'bnb-llamadas', 'bnb-consulta', 'bnb-cerrar-sesion', 'bnb-guardados', 'bnb-adm-cuenta', 'bnb-face-id', 'bnb-bienes-adjudicados', 'bnb-token', 'token', 'bnb-boleta',
                'bnb-persona-natural', 'bnb-persona-juridica', 'bnb-seguro-cesantia', 'bnb-seguro-telemedicina', 'bnb-pagar-qr', 'bnb-cobro-qr', 'bnb-seguimiento-qr', 'bnb-tarjeta-de-credito', 'paga-con-qr', 'bnb-cobro-con-qr',
                'registrar-abonado', 'abonados-registrados', 'cuentas-propias', 'modificar-cuenta', 'bnb-cashback', 'ampliacion-de-limite', 'bnb-rescate-de-cuotas', 'pago-cuotas', 'poliza', 'market'
            ]
        },
        bnbEmpresas: {
            name: "BNB Empresas",
            icons: [
                'bnb', 'tigo', 'entel', 'golochtel', 'cotas', 'comteco', 'tigo-hogar', 'ende-beni', 'ende-oruro', 'elfec', 'delapaz',
                'bnb-viva', 'banco-alimentos', 'sepsa', 'cre', 'finup', 'logo-innovation', 'padelbo', 'work-flow', 'bnb-core', 'bolivianos-que-ayudan', 'world-vision-black', 'world-vision-white',
                'unilink', 'accl', 'suzuki'
            ]
        },
        bnbBancos: {
            name: "BNB Bancos",
            icons: [
                'banco-sol', 'banco-union', 'banco-mercantil-sc', 'banco-ganadero', 'banco-prodem', 'banco-economico', 'banco-ecofuturo', 'banco-bcp', 'banco-fortaleza',
                'banco-central-de-bolivia',
            ]
        },
        bnbSocial: {
            name: "BNB Social media",
            icons: [
                'linkedin-square', 'instagram-square', 'youtube-square', 'facebook-square', 'x-square', 'whatsapp-square', 'linkedin-circle', 'instagram-circle', 'youtube-circle', 'facebook-circle',
                'x-circle', 'whatsapp-circle', 'youtube'
            ]
        },
        bnbImagenes: {
            name: "BNB Imagenes",
            icons: [
                'qr-simple', 'qr'
            ]
        },
        bnbSubmarcas: {
            name: "BNB sub marcas",
            icons: [
                'banca-joven', 'banca-joven-logo-bnb', 'primary-bille-logo-positive', 'primary-bille-logo-negative'
            ]
        },
        otros: {
            name: "Otros",
            icons: [
                'excel', 'excel-1', 'pdf', 'pdf-1'
            ]
        },
        bnbwithBg: {
            name: "BNB Icons with Background",
            icons: [
                'bnb-billetera-sus-bg', 'bnb-billetera-bs-bg', 'bnb-pago-bs-bg', 'bnb-transferencias-bg', 'cashback-bg', 'bnb-servicios-bg', 'bnb-extractos-bg', 'bnb-mis-debitos-bg', 'bnb-compras-por-internet-bg', 'bnb-compras-por-internet-bs-bg', 'bnb-avion-bg', 'bnb-cobro-qr-bg',
                'bnb-facturas-bg', 'bnb-rescate-de-cuotas-bs-bg'
            ]
        },
        textEditor: {
            name: "Text Editor",
            icons: [
                'bold', 'italic', 'underline', 'align-left', 'align-right', 'align-center', 'align-just', 'bullet-list', 'number-list', 'text-color', 'text-highlight'
            ]
        }
    }

    //Filter icons
    const filteredIcons = Object.entries(IconCategories).reduce((acc, [key, category]) => {
        const searchTerm = searchTerms[key]?.toLocaleLowerCase() || '';
        acc[key] = category.icons.filter(icon =>
            icon.toLowerCase().includes(searchTerm)
        );
        return acc;
    }, {} as Record<string, string[]>);

    // Copy name icons
    const copyIconName = async (iconName: string) => {
        try {
            await navigator.clipboard.writeText(iconName);
            toastRef.current?.show({
                severity: 'success',
                summary: 'Copiado',
                detail: `${iconName} copiado al portapapeles`,
                life: 3000
            });
        } catch (err) {
            toastRef.current?.show({
                severity: 'error',
                summary: 'Error',
                detail: `No se puede copiar "${err} `,
                life: 3000
            });
        }
    }

    return (
        <>
            <div className="card w-full">
                <div className="flex gap-2 justify-content-center ">
                    <XMenuBar model={items} className='w-full' />
                </div>
                <div className="w-full h-screen mt-10">
                    <div className="grid grid-cols-12">
                        <div className="col-start-2 col-span-10">

                            <div className="font-bold text-center">
                                <h1 className="text-[5rem] md:text-[8rem]">ICONS</h1>
                            </div>

                            <XPanel header={IconCategories.actions.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.actions || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            actions: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de actions"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.actions?.length === 0 && searchTerms.actions ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.actions?.map((icon) => (
                                                <div
                                                    key={`actions-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}

                            </XPanel>

                            <XPanel header={IconCategories.analytics.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.analytics || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            analytics: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de analytics"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.analytics?.length === 0 && searchTerms.analytics ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.analytics?.map((icon) => (
                                                <div
                                                    key={`analytics-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.audio.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.audio || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            audio: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de audio"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.audio?.length === 0 && searchTerms.audio ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.audio?.map((icon) => (
                                                <div
                                                    key={`audio-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.buildings.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.buildings || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            buildings: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de buildings"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.buildings?.length === 0 && searchTerms.buildings ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.buildings?.map((icon) => (
                                                <div
                                                    key={`buildings-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.clothing.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.clothing || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            clothing: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de clothing"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.clothing?.length === 0 && searchTerms.clothing ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.clothing?.map((icon) => (
                                                <div
                                                    key={`clothing-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.cloud.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.cloud || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            cloud: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de cloud"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.cloud?.length === 0 && searchTerms.cloud ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.cloud?.map((icon) => (
                                                <div
                                                    key={`cloud-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.communication.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.communication || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            communication: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de communication"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.communication?.length === 0 && searchTerms.communication ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.communication?.map((icon) => (
                                                <div
                                                    key={`communication-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.connectivity.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.connectivity || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            connectivity: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de connectivity"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.connectivity?.length === 0 && searchTerms.connectivity ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.connectivity?.map((icon) => (
                                                <div
                                                    key={`connectivity-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.development.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.development || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            development: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de development"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.development?.length === 0 && searchTerms.development ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.development?.map((icon) => (
                                                <div
                                                    key={`development-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.devices.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.devices || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            devices: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de devices"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.devices?.length === 0 && searchTerms.devices ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.devices?.map((icon) => (
                                                <div
                                                    key={`devices-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.docs.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.docs || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            docs: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de docs"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.docs?.length === 0 && searchTerms.docs ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.docs?.map((icon) => (
                                                <div
                                                    key={`docs-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.editor.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.editor || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            editor: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de editor"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.editor?.length === 0 && searchTerms.editor ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.editor?.map((icon) => (
                                                <div
                                                    key={`editor-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.emojis.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.emojis || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            emojis: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de emojis"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.emojis?.length === 0 && searchTerms.emojis ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.emojis?.map((icon) => (
                                                <div
                                                    key={`emojis-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.finance.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.finance || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            finance: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de finance"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.finance?.length === 0 && searchTerms.finance ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.finance?.map((icon) => (
                                                <div
                                                    key={`finance-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.food.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.food || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            food: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de food"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.food?.length === 0 && searchTerms.food ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.food?.map((icon) => (
                                                <div
                                                    key={`food-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.gaming.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.gaming || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            gaming: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de gaming"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.gaming?.length === 0 && searchTerms.gaming ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.gaming?.map((icon) => (
                                                <div
                                                    key={`gaming-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.gestures.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.gestures || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            gestures: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de gestures"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.gestures?.length === 0 && searchTerms.gestures ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.gestures?.map((icon) => (
                                                <div
                                                    key={`gestures-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.health.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.health || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            health: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de health"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.health?.length === 0 && searchTerms.health ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.health?.map((icon) => (
                                                <div
                                                    key={`health-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.home.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.home || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            home: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de home"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.home?.length === 0 && searchTerms.home ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.home?.map((icon) => (
                                                <div
                                                    key={`home-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.identity.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.identity || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            identity: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de identity"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.identity?.length === 0 && searchTerms.identity ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.identity?.map((icon) => (
                                                <div
                                                    key={`identity-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.maps.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.maps || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            maps: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de maps"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.maps?.length === 0 && searchTerms.maps ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.maps?.map((icon) => (
                                                <div
                                                    key={`maps-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.music.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.music || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            music: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de music"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.music?.length === 0 && searchTerms.music ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.music?.map((icon) => (
                                                <div
                                                    key={`music-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}

                            </XPanel>

                            <XPanel header={IconCategories.nature.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.nature || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            nature: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de nature"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.nature?.length === 0 && searchTerms.nature ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.nature?.map((icon) => (
                                                <div
                                                    key={`nature-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.navigate.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.navigate || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            navigate: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de navigate"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.navigate?.length === 0 && searchTerms.navigate ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.navigate?.map((icon) => (
                                                <div
                                                    key={`navigate-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.organization.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.organization || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            organization: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de organization"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.organization?.length === 0 && searchTerms.organization ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.organization?.map((icon) => (
                                                <div
                                                    key={`organization-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.other.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.other || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            other: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de other"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.other?.length === 0 && searchTerms.other ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.other?.map((icon) => (
                                                <div
                                                    key={`other-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.photosVideos.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.photosVideos || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            photosVideos: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de photosVideos"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.photosVideos?.length === 0 && searchTerms.photosVideos ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.photosVideos?.map((icon) => (
                                                <div
                                                    key={`photosVideos-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.security.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.security || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            security: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de security"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.security?.length === 0 && searchTerms.security ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.security?.map((icon) => (
                                                <div
                                                    key={`security-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.shopping.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.shopping || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            shopping: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de shopping"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.shopping?.length === 0 && searchTerms.shopping ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.shopping?.map((icon) => (
                                                <div
                                                    key={`shopping-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.science.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.science || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            science: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de science"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.science?.length === 0 && searchTerms.science ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.science?.map((icon) => (
                                                <div
                                                    key={`science-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.system.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.system || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            system: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de system"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.system?.length === 0 && searchTerms.system ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.system?.map((icon) => (
                                                <div
                                                    key={`system-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.transport.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.transport || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            transport: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de transport"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.transport?.length === 0 && searchTerms.transport ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.transport?.map((icon) => (
                                                <div
                                                    key={`transport-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.users.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.users || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            users: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de users"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.users?.length === 0 && searchTerms.users ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.users?.map((icon) => (
                                                <div
                                                    key={`users-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.weather.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.weather || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            weather: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de weather"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.weather?.length === 0 && searchTerms.weather ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.weather?.map((icon) => (
                                                <div
                                                    key={`weather-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.bnb.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.bnb || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            bnb: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de bnb"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.bnb?.length === 0 && searchTerms.bnb ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.bnb?.map((icon) => (
                                                <div
                                                    key={`bnb-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.bnbTarjetas.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.bnbTarjetas || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            bnbTarjetas: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de bnbTarjetas"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.bnbTarjetas?.length === 0 && searchTerms.bnbTarjetas ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.bnbTarjetas?.map((icon) => (
                                                <div
                                                    key={`bnbTarjetas-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} className='text-red-500' />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.bnbwithoutBb.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.bnbwithoutBb || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            bnbwithoutBb: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de bnbwithoutBb"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.bnbwithoutBb?.length === 0 && searchTerms.bnbwithoutBb ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.bnbwithoutBb?.map((icon) => (
                                                <div
                                                    key={`bnbwithoutBb-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.bnbEmpresas.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.bnbEmpresas || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            bnbEmpresas: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de bnb empresas"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.bnbEmpresas?.length === 0 && searchTerms.bnbEmpresas ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.bnbEmpresas?.map((icon) => (
                                                <div
                                                    key={`bnbEmpresas-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}


                            </XPanel>

                            <XPanel header={IconCategories.bnbBancos.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.bnbBancos || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            bnbEmpresas: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de bnb empresas"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.bnbBancos?.length === 0 && searchTerms.bnbBancos ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.bnbBancos?.map((icon) => (
                                                <div
                                                    key={`bnbBancos-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.bnbSocial.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.bnbSocial || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            bnbEmpresas: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de bnb empresas"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.bnbSocial?.length === 0 && searchTerms.bnbSocial ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.bnbSocial?.map((icon) => (
                                                <div
                                                    key={`bnbSocial-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.bnbImagenes.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.bnbImagenes || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            bnbEmpresas: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de bnb empresas"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.bnbImagenes?.length === 0 && searchTerms.bnbImagenes ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.bnbImagenes?.map((icon) => (
                                                <div
                                                    key={`bnbImagenes-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.bnbSubmarcas.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.bnbSubmarcas || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            bnbEmpresas: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de bnb empresas"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.bnbSubmarcas?.length === 0 && searchTerms.bnbSubmarcas ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.bnbSubmarcas?.map((icon) => (
                                                <div
                                                    key={`bnbSubmarcas-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-gray-200 rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.otros.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.otros || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            bnbEmpresas: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de bnb empresas"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.otros?.length === 0 && searchTerms.otros ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.otros?.map((icon) => (
                                                <div
                                                    key={`otros-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.bnbwithBg.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.bnbwithBg || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            bnbEmpresas: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de bnb empresas"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.bnbwithBg?.length === 0 && searchTerms.bnbwithBg ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.bnbwithBg?.map((icon) => (
                                                <div
                                                    key={`bnbwithBg-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>

                            <XPanel header={IconCategories.textEditor.name}>
                                <div className="relative mb-8">
                                    <InputText
                                        value={searchTerms.textEditor || ''}
                                        onChange={(e) => setSearchTerms(prev => ({
                                            ...prev,
                                            textEditor: e.target.value
                                        }))}
                                        placeholder="Buscar iconos de bnb empresas"
                                        pt={inputTextPT(false)}
                                    />
                                </div>
                                {filteredIcons.textEditor?.length === 0 && searchTerms.textEditor ? (
                                    <div className="text-center py-12 text-gray-500">
                                        No se encontraron iconos para textEditor
                                    </div>
                                ) : (
                                    <XScrollPanel className='h-[250px]'>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                            {filteredIcons.textEditor?.map((icon) => (
                                                <div
                                                    key={`textEditor-${icon}`}
                                                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                                    onClick={() => copyIconName(icon)}
                                                >
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <XIcon name={icon} size={24} />
                                                        <span className="text-xs text-center text-gray-600">{icon}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </XScrollPanel>
                                )}
                            </XPanel>
                        </div >
                    </div >
                </div >
                <XToast ref={toastRef} />
            </div >
        </>
    );
}