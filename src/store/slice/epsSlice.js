import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    epsUser:"",
    epsAllUser:[]
}
export const sendEps=createAsyncThunk(
    'sendEps',
    async(data)=>{
    //    const result=await axios.post("Backend link",data)
       console.log("EPS user data=>",data)
       return data
    }
)
export const getEps=createAsyncThunk(
    'getEps',
    async(data)=>{
        // const result=await axios.get("Backend lin",data)
        // return result.data
    }
)
export const epsSlice=createSlice({
    name:'epsSlice',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(sendEps.fulfilled, (state, action) => {
            state.epsUser = action.payload
        })
        builder.addCase(getEps.fulfilled, (state, action) => {
            state.epsAllUser = action.payload.message
        })

    }
})
export default epsSlice.reducer