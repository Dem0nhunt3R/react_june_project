import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    checked: false,
    cb:{color:'black'},
    cw:{color:'white'},
};

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        toggle: (state, action) => {
            state.checked = action.payload;
            state.color = {color:'white'};
        }
    },
    extraReducers: {}
});
const {reducer: themeReducer, actions: {toggle}} = themeSlice;

const themeActions = {
    toggle
}

export {themeActions, themeReducer}