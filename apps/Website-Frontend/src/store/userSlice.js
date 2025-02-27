import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: { user: null },
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload;
        },
        logoutUser: (state) => {
            state.user = null;
        },
    },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// const userSlice = createSlice({
//     name: "user",
//     initialState: {
//         userId: null,
//         role: null,
//         isAuthenticated: false
//     },
//     reducers: {
//         loginSuccess: (state, action) => {
//             state.userId = action.payload.userId;
//             state.role = action.payload.role;
//             state.isAuthenticated = true;
//         },
//         logoutUser: (state) => {
//             state.userId = null;
//             state.role = null;
//             state.isAuthenticated = false;
//         }
//     }
// });

// export const { loginSuccess, logoutUser } = userSlice.actions;
// export default userSlice.reducer;