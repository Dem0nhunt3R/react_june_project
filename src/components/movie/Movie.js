import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux";
import css from './Movie.module.css'
import {urls} from "../../constants";
import {MyImage} from "../myImage/MyImage";

const Movie = ({movie}) => {
    const {backdrop_path: path, id, title, vote_average} = movie;
    const {checked, color} = useSelector(state => state.themeReducer);
    const dispatch = useDispatch();

    return (
        <div className={css.card} >
            <NavLink
                to={'/movie/' + id + '-' + title.replaceAll(':', '').split(' ').join('-')}
                onClick={() => dispatch(movieActions.resetMovie())}
                className={css.card} style={checked?color:{}}>
                <MyImage src={{size: urls.imgSize200,path}} alt={title}/>
                <p className={css.par} style={checked?color:{}}>{title}</p>
                <p className={css.par} style={checked?color:{}}>Rating: {vote_average}</p>
            </NavLink>
        </div>
    );
};

export {Movie};