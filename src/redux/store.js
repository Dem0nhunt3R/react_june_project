import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./movieSlice/movieSlice";
import {genreReducer} from "./genreSlice/genreSlice";
import {themeReducer} from "./themeSlice/themeSlice";

const rootReducer = combineReducers({movieReducer,genreReducer, themeReducer});

export const setupStore = () => configureStore({reducer: rootReducer});