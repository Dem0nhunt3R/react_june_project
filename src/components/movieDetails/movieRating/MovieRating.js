import {useSelector} from "react-redux";

import {MyRating} from "../../myRating/MyRating";

const MovieRating = ({vote_average,vote_count}) => {
    const {checked,cb,cw} = useSelector(state => state.themeReducer);

    return (
        <div>
            <MyRating rate={vote_average}/>
            <p style={checked ? cw:cb}>Rating: {vote_average.toFixed(1)} ({vote_count} votes)</p>
        </div>
    );
};

export {MovieRating};