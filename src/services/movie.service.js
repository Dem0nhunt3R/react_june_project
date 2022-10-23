import {axiosService} from "./axios.service";

import {urls} from "../constants";

export const movieService = {
    getMovies: (queries) => axiosService.get(urls.movies, {
        params: queries
    }),
    getMovieById: (id) => axiosService.get(urls.movie + '/' + id),
    searchMovies: (queries) => axiosService.get(urls.search, {
        params: queries
    })
}