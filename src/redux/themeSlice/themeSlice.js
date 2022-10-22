import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    checked: false,
    bg: {backgroundColor:'white'},
    color:{color:'black'},
    col:'black'
};

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        toggle: (state, action) => {
            state.checked = action.payload;
            state.bg = {backgroundColor:'black'};
            state.color = {color:'white'};
            state.col='white'
        }
    },
    extraReducers: {}
});
const {reducer: themeReducer, actions: {toggle}} = themeSlice;

const themeActions = {
    toggle
}

export {themeActions, themeReducer}