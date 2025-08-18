import { Carousel, CarouselProps } from 'primereact/carousel';

const XCarousel = ({ children, ...props }: CarouselProps) => {
    return (
        <Carousel {...props}>
            {children}
        </Carousel>
    )
}
export default XCarousel;