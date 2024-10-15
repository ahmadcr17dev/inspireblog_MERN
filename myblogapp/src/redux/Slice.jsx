import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentuser: null,
};

const Slice = createSlice({
    name: "slice",
    initialState,
    reducers: {
        signinsuccess: (state, action) => {
            state.currentuser = action.payload;
        },
        logout: (state) => {
            state.currentuser = null;
        }
    }
})

export const { signinsuccess, logout } = Slice.actions;
export default Slice.reducer;