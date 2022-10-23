import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {genreActions, movieActions} from "../../redux";
import css from './NavBar.module.css';

const NavBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {checked} = useSelector(state => state.themeReducer);
    const {genres} = useSelector(state => state.genreReducer);
    const [visible, setVisible] = useState(false);
    const endpoint = '/movies';
    useEffect(() => {
        dispatch(genreActions.getAll())
    }, []);

    return (
        <div onPointerLeave={() => setVisible(false)}>
            <div className={css.container}>
                <div className={css.nav}>
                    <Link className={css.link} to={endpoint}
                          onPointerEnter={() => {
                              setVisible(true);
                          }}>Movies</Link>
                    <Link className={css.link} to={'#'}>Series</Link>
                    <Link className={css.link} to={'#'}>Cartoons</Link>
                    <Link className={css.link} to={'#'}>Animations</Link>
                </div>
            </div>
            <div className={[css.dropdown, visible ? css.disGrid : css.disNone].join(' ')}
                 onPointerLeave={() => setVisible(false)}>
                <ul className={css.genres}>
                    {genres.map(genre => {
                        return <li key={genre.id} className={css.dropLi}>
                            <Link onClick={() => {
                                setVisible(false);
                                dispatch(genreActions.setGenreId(genre.id))
                                dispatch(movieActions.resetMovies());
                                dispatch(movieActions.setCurrentPage(1));
                                dispatch(movieActions.getAll({genre: genre.id}))
                            }}
                                  to={`${endpoint}/${genre.name.toLowerCase()}`}
                                  className={css.dropLink}>{genre.name}
                            </Link>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    );
};

export {NavBar};