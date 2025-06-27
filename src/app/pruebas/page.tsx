
"use client";
import { XCardPrueba } from '@/components/XCardPrueba';
import React, { useRef, useState } from 'react'

const PagePruebas = () => {


    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {[0, 1, 2].map((id) => (
                    <div
                        key={id}
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
                    <div key={id} className="cursor-pointer">
                        <XCardPrueba
                            orientation={id % 2 === 0 ? 'vertical' : 'horizontal'}
                            disabled={id % 2 === 0 ? true : false}
                            title={id % 2 === 0 ? 'Title text' : 'Title text disabled'}
                            body={id % 2 === 0 ? 'Lorem Ipsum is simply dummy text typesetting industry.' : 'Lorem Ipsum is simply dummy text  text ever since the 1500s, when an unknown printer took a galley'}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default PagePruebas;