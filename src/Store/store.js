import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./Reducers/adminHomePageReducer";

const store=configureStore({
    reducer:{
        adminReducer,
    }
})

export default store;