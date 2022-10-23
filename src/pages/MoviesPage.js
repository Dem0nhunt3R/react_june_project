import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

import {Movies, MyPagination} from "../components";
import {movieActions} from "../redux";

const MoviesPage = () => {
    const {pageNumber, genre} = useParams();
    const {movies, currentPage} = useSelector(state => state.movieReducer);
    const {genre:genreId} = useSelector(state => state.genreReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            if (genre) {
                if (pageNumber && genre) {
                    dispatch(movieActions.getAll({pageNumber,genre: genreId}))
                    dispatch(movieActions.setCurrentPage(+pageNumber));
                } else {
                    dispatch(movieActions.getAll({genre:genreId}));
                }
            } else {
                dispatch(movieActions.getAll({pageNumber: currentPage}));
            }
        } catch (e) {
            console.log(e)
        }
    }, [currentPage, dispatch, pageNumber]);

    return (
        <div>
            <Movies movies={movies}/>
            <MyPagination genre={genre} endpoint={'/movies'}/>
        </div>
    );
};

export {MoviesPage};