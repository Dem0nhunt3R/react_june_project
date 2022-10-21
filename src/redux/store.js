import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./movieSlice/movieSlice";
import {genreReducer} from "./genreSlice/genreSlice";

const rootReducer = combineReducers({movieReducer,genreReducer});

export const setupStore = () => configureStore({reducer: rootReducer});