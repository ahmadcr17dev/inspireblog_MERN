import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentuser: null,
    error: null,
};

const Slice = createSlice({
    name: "slice",
    initialState,
    reducers: {
        signinstart: (state) => {
            state.error = null;
        },
        signinsuccess: (state, action) => {
            state.currentuser = action.payload;
            state.error = null;
        },
        signinfailure: (state, action) => {
            state.error = action.payload;
        },
    }
})

export const { signinstart, signinsuccess, signinfailure } = Slice.actions;
export default Slice.reducer;