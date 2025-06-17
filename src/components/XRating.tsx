import { ratingPT } from "@/primereact-tailwindcss/raiting.pt"
import { Rating, RatingProps } from "primereact/rating"

const XRating = ({ ...props }: RatingProps) => {
    return (
        <Rating {...props} pt={{ ...ratingPT }} />
    )
}

export default XRating