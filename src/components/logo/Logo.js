import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

import css from './Logo.module.css'
import {movieActions} from "../../redux";

const Logo = () => {
    const dispatch = useDispatch();

    return (
        <div className={css.logo}>
            <NavLink className={css.link} to={'/'} onClick={() => {
                dispatch(movieActions.setCurrentPage(1));
                dispatch(movieActions.resetMovies());
            }}>
                <i className="fa-solid fa-house"></i>
            </NavLink>
        </div>
    );
};

export {Logo};