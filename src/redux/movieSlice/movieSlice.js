import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    movie: null,
    currentPage: 1,
    loading: false,
    error: null,
    endpoint: '/movies',
    totalPages: 1
};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (queries, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovies(queries);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk(
    'movieSlice/getById',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovieById(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const search = createAsyncThunk(
    'movieSlice/search',
    async (query, {rejectWithValue}) => {
        try {
            const {data} = await movieService.searchMovies(query);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    });

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        resetMovie: (state) => {
            state.movie = null;
        },
        resetMovies: (state) => {
            state.movies = [];
        },
        setEndpoint: (state, action) => {
            state.endpoint = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.totalPages = state.totalPages = action.payload.total_pages >= 500 ? 500 : action.payload.total_pages;
                state.movies = action.payload.results;
                state.loading = false;
            })
            .addCase(getAll.pending, state => {
                state.loading = true;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.movie = action.payload;
                state.loading = false;
            })
            .addCase(getById.pending, state => {
                state.loading = true;
            })
            .addCase(getById.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(search.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.totalPages = action.payload.total_pages;
                state.loading = false;
            })
            .addCase(search.pending, state => {
                state.loading = true;
            })
            .addCase(search.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
    }
});

const {reducer: movieReducer, actions: {setCurrentPage, resetMovie, resetMovies, setEndpoint}} = movieSlice;

const movieActions = {
    getAll,
    getById,
    setCurrentPage,
    resetMovie,
    resetMovies,
    setEndpoint,
    search
}

export {movieReducer, movieActions};