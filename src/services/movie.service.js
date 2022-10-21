import {axiosService} from "./axios.service";

import {urls} from "../constants";

export const movieService = {
    //todo find out how to use query right
    getMovies: (queries) => axiosService.get(urls.movies, {
        params: queries
    }),
    getMovieById: (id) => axiosService.get(urls.movie + '/' + id)
}