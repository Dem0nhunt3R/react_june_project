import {Movie} from "../movie/Movie";
import css from './Movies.module.css'

const Movies = ({movies}) => {
    return (
        <div className={css.container}>
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};