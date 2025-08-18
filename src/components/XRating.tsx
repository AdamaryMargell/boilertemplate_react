import { Rating, RatingProps } from "primereact/rating"

const XRating = ({ ...props }: RatingProps) => {
    return (
        <Rating {...props} />
    )
}

export default XRating