import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

import {movieActions} from "../../redux";
import css from './Movie.module.css'
import {createImgUrl} from "../../utils";
import {urls} from "../../constants";

const Movie = ({movie}) => {
    const {backdrop_path: path, id, title, vote_average} = movie;
    const dispatch = useDispatch();

    return (
        <NavLink
            to={'/movie/' + id + '-' + title.replaceAll(':', '').split(' ').join('-')}
            onClick={() => dispatch(movieActions.resetMovie())}
            className={css.card} >
            <img className={css.img} src={createImgUrl(urls.imgSize200, path)} alt={title}/>
            <p className={css.par}>{title}</p>
            <p className={css.par}>Rating: {vote_average}</p>
        </NavLink>
    );
};

export {Movie};