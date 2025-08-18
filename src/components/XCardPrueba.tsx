import XIcon from "./XIcons/XIcon";
import '../styles/cardMenu.css';

type Orientation = 'horizontal' | 'vertical';

interface CardContentProps {
    orientation?: Orientation;
    disabled?: boolean;
    body?: string;
    title?: string;
    icon?: string
    showArrow?: boolean;
}

export const XCardPrueba = ({
    orientation = 'horizontal',
    disabled = false,
    title = '',
    body = '',
    icon = '',
    showArrow = true
}: CardContentProps) => {
    return (
        <div className={`
            p-cardmenu-container
            relative 
            rounded-xl
            ${orientation === 'horizontal' ?
                'min-w-[289px] max-w-[410px] h-[225px]' :
                'min-w-[200px] max-w-[225px] min-h-[225px] h-auto'}
            w-full
            border border-gray-200
            shadow-md
            transition-all duration-300 ease-in-out
            ${disabled ? 'disabled border-2' : ''}
    `}>
            <div className={`
            w-full
            h-full
            bg-white
            p-5
            rounded-[10px]
            flex flex-col
            ${disabled ? 'text-[#868686]' : 'text-[#3C3C3C]'}
    `}>
                <div className="flex flex-col h-full justify-between">
                    {/* Contenido principal */}
                    <div className="flex flex-col gap-3 flex-1 overflow-hidden">
                        {/* Icono */}
                        <div className="xcard-icon flex-shrink-0">
                            <XIcon
                                name="bnb-seguro-cesantia"
                                size={48}
                                className={disabled ? 'text-gray-400' : 'text-current'}
                            />
                        </div>

                        {/* Título */}
                        {title && (
                            <h2 className="xcard-title text-sm font-bold line-clamp-2">
                                {title}
                            </h2>
                        )}

                        {/* Párrafo - Contenedor flexible */}
                        {body && (
                            <div className="p-cardmenu-body flex-1 min-h-[60px] overflow-hidden">
                                <p className={`text-xs h-full`}>
                                    {body}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Flecha - siempre abajo */}
                    <div className="flex-shrink-0 flex justify-end pt-2">
                        <XIcon
                            name="arrow-right"
                            size={24}
                            className={disabled ? 'text-gray-400' : 'text-current'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};


// import XIcon from "./XIcons/XIcon";
// import '../styles/cardMenu.css';

// type Orientation = 'horizontal' | 'vertical';

// interface CardContentProps {
//     orientation?: Orientation;
//     disabled?: boolean;
//     body?: string;
//     title?: string;
//     icon?: string;
//     showArrow?: boolean;
// }

// export const XCardPrueba = ({
//     orientation = 'horizontal',
//     disabled = false,
//     title = '',
//     body = '',
//     icon = 'bnb-seguro-cesantia',
//     showArrow = true
// }: CardContentProps) => {
//     return (
//         <div
//             className={`
//                 p-cardmenu-container
//                 relative
//                 ${orientation === 'horizontal' ?
//                     'min-w-[289px] max-w-[410px] h-[225px]' :
//                     'min-w-[200px] max-w-[225px] min-h-[225px] h-[289px]'}
//                 w-full
//                 border border-gray-200
//                 shadow-md
//                 transition-all duration-300 ease-in-out
//                 ${disabled ? 'disabled border-2' : ''}
//             `}
//         >
//             <div className={`
//                 w-full
//                 h-full
//                 bg-white /* Fondo blanco restaurado */
//                 p-5
//                 rounded-[10px]
//                 flex flex-col
//                 ${disabled ? 'text-[#868686]' : 'text-[#3C3C3C]'}
//             `}>
//                 <div className="flex flex-col h-full justify-between">
//                     {/* Contenido principal */}
//                     <div className="flex flex-col gap-3 flex-1 overflow-hidden">
//                         {/* Icono */}
//                         <div className="p-cardmenu-icon flex-shrink-0">
//                             <XIcon
//                                 name={icon}
//                                 size={48}
//                                 className={disabled ? 'text-gray-400' : 'text-current'}
//                             />
//                         </div>

//                         {/* Título */}
//                         {title && (
//                             <h2 className="p-cardmenu-title text-sm font-bold line-clamp-2">
//                                 {title}
//                             </h2>
//                         )}

//                         {/* Párrafo */}
//                         {body && (
//                             <div className="flex-1 min-h-[60px] overflow-hidden">
//                                 <p className="text-xs h-full">
//                                     {body}
//                                 </p>
//                             </div>
//                         )}
//                     </div>

//                     {/* Flecha (opcional) */}
//                     {showArrow && (
//                         <div className="flex-shrink-0 flex justify-end pt-2">
//                             <XIcon
//                                 name="arrow-right"
//                                 size={24}
//                                 className={disabled ? 'text-gray-400' : 'text-current'}
//                             />
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };