import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

import css from './MovieDetails.module.css'
import {urls} from "../../constants";
import {MyModal} from "../myModal/MyModal";
import {MovieDetailsInfo} from "./movieDetailsInfo/movieDetailsInfo";
import {MovieTitle} from "./movieTitle/MovieTitle";
import {MovieOverview} from "./movieOverview/MovieOverview";
import {MovieRating} from "./movieRating/MovieRating";
import {MyImage} from "../myImage/MyImage";

const MovieDetails = () => {
    const {movie} = useSelector(state => state.movieReducer);
    const [modal, setModal] = useState(null);
    const {
        title,
        tagline,
        original_title,
        adult,
        genres,
        vote_average,
        vote_count,
        overview,
        poster_path: path,
        release_date: date,
        runtime,
        production_countries: countries,
        production_companies: companies,
    } = movie || '';

    useEffect(() => {
        if (title) {
            document.title = title;
        }
    }, [title]);

    return (
        <>
            {movie &&
                <div className={css.container}>
                    <MovieTitle title={title} original_title={original_title}/>
                    <div className={css.infoContainer}>
                        <div className={css.img} onClick={() => setModal(true)}>
                            <MyImage src={{size: urls.imgSize200, path}} alt={title}/>
                        </div>
                        <MovieDetailsInfo info={{tagline, date, genres, runtime, countries, companies, adult}}/>
                    </div>
                    <div className={css.about}>
                        <MovieRating vote_average={vote_average} vote_count={vote_count}/>
                        <MovieOverview overview={overview} title={title}/>
                        <MyModal visible={modal} setVisible={setModal} img={{path, title}}/>
                    </div>
                </div>
            }
        </>
    );
};

export {MovieDetails};