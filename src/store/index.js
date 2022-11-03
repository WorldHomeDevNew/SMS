import { configureStore } from "@reduxjs/toolkit";
import epsSlice from "./slice/epsSlice";
export const store=configureStore({
    reducer:{
        epsReducer:epsSlice
    }
})