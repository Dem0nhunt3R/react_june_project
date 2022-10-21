import {useSelector} from "react-redux";
import {useState} from "react";

import css from './MovieDetails.module.css'
import {createImgUrl, getDate, getStringFromArray} from "../../utils";
import {MyRating} from "../myRating/MyRating";
import {urls} from "../../constants";
import {MyModal} from "../myModal/MyModal";

const MovieDetails = () => {
    const {movie} = useSelector(state => state.movieReducer);
    console.log(movie)
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

    return (
        <>
            {movie &&
                <div className={css.container}>
                    <div>
                        <h2>{title}</h2>
                        {title !== original_title ? <h4>{original_title}</h4> : ''}
                    </div>

                    <div className={css.infoContainer}>
                        <div className={css.img} onClick={() => setModal(true)}>
                            <img src={createImgUrl(urls.imgSize200, path)} alt={title}/>
                        </div>

                        <div className={css.info}>
                            {tagline && <p>Tagline: {tagline}</p>}
                            <p>Release date: {getDate(date)}</p>
                            <p>Genres: {getStringFromArray(genres)}</p>
                            <p>Time: {runtime}</p>
                            {adult && <p>18+</p>}
                            <p>{countries.length > 1 ? 'Countries' : 'Country'}: {getStringFromArray(countries)}</p>
                            <p>{companies.length > 1 ? 'Companies' : 'Company'}: {getStringFromArray(companies)}</p>
                        </div>

                    </div>

                    <div className={css.about}>
                        <div>
                            <MyRating rate={vote_average}/>
                            <span>Ratings: {vote_average.toFixed(1)} ({vote_count} votes)</span>
                        </div>

                        <h3>What is the film "{title}" about : </h3>
                        <p>{overview}</p>
                        <MyModal visible={modal} setVisible={setModal} img={{path, title}}/>
                    </div>
                </div>
            }
        </>
    );
};

export {MovieDetails};