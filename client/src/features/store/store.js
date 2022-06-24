import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "../reducers/accountSlice";
import postSlice from "../reducers/postSlice";

export const store = configureStore({
    reducer: {
        account:accountSlice,
        post:postSlice
    }
})