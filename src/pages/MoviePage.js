import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

import {MovieDetails} from "../components";
import {movieActions} from "../redux";

const MoviePage = () => {
    const {details} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(movieActions.getById(details.split('-')[0]))
    }, [details, dispatch]);

    return (
        <MovieDetails/>
    );
};

export {MoviePage};