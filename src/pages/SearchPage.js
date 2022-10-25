import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {Movies, MyPagination, NotFoundSearch} from "../components";
import {movieActions} from "../redux";

const SearchPage = () => {
    const {currentPage, movies, loading} = useSelector(state => state.movieReducer);
    const dispatch = useDispatch();
    const {params: search, pageNumber} = useParams();

    useEffect(() => {
        if (search && movies.length === 0) {
            dispatch(movieActions.search({query: search}));
        }
        if (pageNumber) {
            dispatch(movieActions.search({query: search, page: pageNumber}))
        }
        if (!pageNumber) {
            dispatch(movieActions.search({query: search, page: 1}))
        }
    }, [currentPage, dispatch, pageNumber, search]);

    return (
        <div>
            {loading ? <></> : movies.length !== 0 ?
                <div>
                    <Movies/>
                    <MyPagination/>
                </div>
                : <NotFoundSearch search={search}/>
            }
        </div>
    );
};

export {SearchPage};