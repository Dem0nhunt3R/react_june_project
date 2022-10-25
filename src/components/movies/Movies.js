import {Movie} from "../movie/Movie";
import css from './Movies.module.css'
import {useSelector} from "react-redux";

const Movies = () => {
    const {movies} = useSelector(state => state.movieReducer);
    return (
        <div className={css.container}>
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};