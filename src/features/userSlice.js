import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
};

const user = createSlice({
    name: "user",
    initialState,
    reducers: {
        userLogin: (state, action) => {
            state.user = action.payload;
        },
        userLogout: (state) => {
            state.user = null;
        },
    },
});

export const { userLogin, userLogout } = user.actions;
export default user.reducer;
