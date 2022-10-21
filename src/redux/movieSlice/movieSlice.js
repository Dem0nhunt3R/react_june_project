import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";
//todo make loading and error
const initialState = {
    movies: [],
    movie: null,
    currentPage: 1,
    loading: false,
    error: null
};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (pageNumber, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovies({page: pageNumber});
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
            console.log(e)
            return rejectWithValue(e.response.data);
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        resetMovie: (state) => {
            state.movie = null;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                console.log(action.payload)
                state.movies = action.payload.results;
                state.totalPages = action.payload.total_pages;
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
    }
});

const {reducer: movieReducer, actions: {setCurrentPage, resetMovie, setCurrentPath}} = movieSlice;

const movieActions = {
    getAll,
    getById,
    setCurrentPage,
    resetMovie,
    setCurrentPath
}

export {movieReducer, movieActions};