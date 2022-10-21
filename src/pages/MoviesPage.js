import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

import {Movies, MyPagination} from "../components";
import {genreActions, movieActions} from "../redux";

const MoviesPage = () => {
    const {pageNumber} = useParams();
    const {movies} = useSelector(state => state.movieReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genreActions.getAll());
        if (pageNumber) {
            dispatch(movieActions.getAll(pageNumber))
            dispatch(movieActions.setCurrentPage(+pageNumber))
        } else {
            dispatch(movieActions.getAll())
        }

    }, [dispatch, pageNumber]);

    return (
        <div>
            <Movies movies={movies}/>
            <MyPagination endpoint={'/movies'}/>
        </div>
    );
};

export {MoviesPage};