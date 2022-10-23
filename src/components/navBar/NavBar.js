import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

import {genreActions, movieActions} from "../../redux";
import css from './NavBar.module.css';

const NavBar = () => {
    const {checked} = useSelector(state => state.themeReducer);
    const {genres} = useSelector(state => state.genreReducer);
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const endpoint = '/movies';

    return (
        <div onPointerLeave={() => setVisible(false)}>
            <div className={css.container}>
                <div className={css.nav}>
                    <Link className={css.link} to={endpoint}
                          onPointerEnter={() => {
                              if (genres.length === 0) {
                                  dispatch(genreActions.getAll());
                              }
                              setVisible(true);
                          }}>Movies</Link>
                    <Link className={css.link} to={'#'}>Series</Link>
                    <Link className={css.link} to={'#'}>Cartoons</Link>
                    <Link className={css.link} to={'#'}>Animations</Link>
                </div>
            </div>

            <div className={[css.dropdown,
                visible ? css.disGrid : css.disNone,
                checked ? css.bgb : '']
                .join(' ')}
                 onPointerLeave={() => setVisible(false)}>

                <div className={css.genres}>
                    {genres.map(genre => {
                        return <Link key={genre.id}
                                     className={[css.dropLi, checked ? css.white : css.black].join(' ')}
                                     onClick={() => {
                                         setVisible(false);
                                         dispatch(movieActions.setCurrentPage(1));
                                     }}
                                     to={`${endpoint}/${genre.name.toLowerCase()}`}>
                            {genre.name}</Link>
                    })}
                </div>

            </div>
        </div>
    );
};

export {NavBar};