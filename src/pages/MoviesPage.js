import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

import {Movies, MyPagination} from "../components";
import {genreActions, movieActions} from "../redux";

const MoviesPage = () => {
    const {pageNumber, genre} = useParams();
    const {movies} = useSelector(state => state.movieReducer);
    const {genres} = useSelector(state => state.genreReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!pageNumber && !genre) {
            dispatch(genreActions.getAll());
            dispatch(movieActions.setCurrentPage(1))
            dispatch(movieActions.getAll({pageNumber: 1}));
        }
    }, [pageNumber, genre, dispatch]);

    useEffect(() => {
        const getGenreId = async (genre) => {
            let arr = [];
            await dispatch(genreActions.getAll()).then(({payload}) => arr = payload.genres)
            const find = arr.find(g => g.name.toLowerCase() === genre);
            return find.id;
        }

        if (pageNumber || genre) {
            if (genre && !pageNumber) {
                dispatch(movieActions.resetMovies());
                if (genres.length > 1) {
                    const find = genres.find(g => g.name.toLowerCase() === genre);
                    console.log(find)
                    dispatch(movieActions.getAll({genre: find.id}))
                } else {
                    getGenreId(genre).then(genreId => dispatch(movieActions.getAll({genre: genreId})))
                }
            } else if (!genre && pageNumber) {
                dispatch(movieActions.setCurrentPage(+pageNumber));
                dispatch(movieActions.getAll({pageNumber}));
            } else {
                if (genres.length > 1) {
                    const find = genres.find(g => g.name.toLowerCase() === genre);
                    console.log(find)
                    dispatch(movieActions.getAll({pageNumber, genre: find.id}));
                } else {
                    getGenreId(genre).then(genreId => dispatch(movieActions.getAll({pageNumber, genre: genreId})))
                }
                dispatch(movieActions.setCurrentPage(+pageNumber));
            }
        }
    }, [dispatch, pageNumber, genre]);

    return (
        <div>
            <Movies movies={movies}/>
            <MyPagination genre={genre} endpoint={'/movies'}/>
        </div>
    );
};

export {MoviesPage};