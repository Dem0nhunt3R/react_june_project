import {Rating} from "react-simple-star-rating";

const MyRating = ({rate}) => {
    return (
        <Rating
            initialValue={rate}
            allowFraction={true}
            iconsCount={10}
            transition={false}/>
    );
};

export {MyRating};