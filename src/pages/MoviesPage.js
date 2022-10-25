import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

import {Movies, MyPagination} from "../components";
import {genreActions, movieActions} from "../redux";

const MoviesPage = () => {
        const {pageNumber, genre,params} = useParams();
        const {movies} = useSelector(state => state.movieReducer);
        const {genres} = useSelector(state => state.genreReducer);
        const dispatch = useDispatch();

        const getGenreId = async (genre) => {
            const genres = await dispatch(genreActions.getAll()).then(({payload}) => payload.genres);
            return genres.find(g => g.name.toLowerCase() === genre).id;
        }

        useEffect(() => {
            if(params){
                movieActions.search({query:params})
            }
        }, [params]);

        useEffect(() => {
            if (!pageNumber && !genre) {
                dispatch(movieActions.setCurrentPage(1))
                dispatch(movieActions.getAll({page: 1}));
                if (genres.length === 0) {
                    dispatch(genreActions.getAll());
                }
            }
        }, [pageNumber, genre, dispatch]);

        useEffect(() => {
                if (pageNumber || genre) {
                    if (genre && !pageNumber) {
                        dispatch(movieActions.resetMovies());
                        if (genres.length > 1) {
                            const find = genres.find(g => g.name.toLowerCase() === genre);
                            dispatch(movieActions.getAll({with_genres: find.id}))
                        } else {
                            getGenreId(genre).then(genreId => dispatch(movieActions.getAll({with_genres: genreId})))
                        }
                    } else if (!genre && pageNumber) {
                        dispatch(movieActions.getAll({page: pageNumber}));
                        dispatch(movieActions.setCurrentPage(+pageNumber));
                    } else {
                        const find = genres.find(g => g.name.toLowerCase() === genre);
                        dispatch(movieActions.getAll({page: pageNumber, with_genres: find.id}));
                    }
                }
            }, [dispatch, pageNumber, genre]
        )
        ;

        return (
            <div>
                <Movies movies={movies}/>
                <MyPagination genre={genre} endpoint={'/movies'}/>
            </div>
        );
    }
;

export {MoviesPage};