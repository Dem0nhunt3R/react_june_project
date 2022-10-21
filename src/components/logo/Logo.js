import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

import {movieActions} from "../../redux";

const Logo = () => {
    const dispatch = useDispatch();

    return (
        <NavLink to={'/'} onClick={() => dispatch(movieActions.setCurrentPage(1))}>
            Logo
        </NavLink>
    );
};

export {Logo};