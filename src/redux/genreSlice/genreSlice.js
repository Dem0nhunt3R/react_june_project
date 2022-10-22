import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services";

const initialState = {
    genres: [],
    genre: null,
    loading: false,
    error: null
};

const getAll = createAsyncThunk(
    'genreSlice/getAll',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await genreService.getGenres();
            return data;
        } catch (e) {
            return rejectedWithValue(e.response.data);
        }
    }
);

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                console.log(action.payload)
                state.genres = action.payload.genres;
                state.loading = false;
            })
            .addCase(getAll.pending, state => {
                state.loading = false;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
    }
});

const genreActions = {
    getAll
}

const {reducer: genreReducer, actions} = genreSlice;

export {
    genreReducer,
    genreActions
}