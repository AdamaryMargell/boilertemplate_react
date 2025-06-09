import { carouselPT } from '@/primereact-tailwindcss/carousel.pt';
import { Carousel, CarouselProps } from 'primereact/carousel';
import React, { ReactNode } from 'react'

interface XCarouselProps extends CarouselProps {
    children?: ReactNode;
}
const XCarousel: React.FC<XCarouselProps> = ({ children, ...props }) => {
    return (
        <Carousel {...props} pt={{ ...carouselPT }}>
            {children}
        </Carousel>
    )
}
export default XCarousel;