import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../api/index'
// let user =  "";
// let token =  "";
let user = localStorage.getItem("currentMejorOberaUser")
  ? JSON.parse(localStorage.getItem("currentMejorOberaUser"))
  : "";
let token = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : "";



const initialState = {
    categories:[],
    error:null
}
const headers = {
    'Authorization': `Bearer ${token}`,
}


export const getCategories = createAsyncThunk(
    'getCategories',
    async (_, {rejectWithValue})=>{

        try{
            const categories = await axios.request("get", `/categories`)

            return categories.data.data
        }catch(e){
            console.log(e)
            return rejectWithValue({message:e.response.data.error||e.message})
        }
    }
    )

const categoriesSlice = createSlice({
    name: 'categories', 
    initialState: initialState,
    reducers:{
        cleanError: (state)=>{
            state.error = null
        }
    },
    extraReducers: {
        [getCategories.fulfilled]: (state, {payload}) => {
            
            state.categories = payload;
            state.loading = false;
        },
        [getCategories.rejected]: (state, {payload}) => {
            console.log(payload)
            state.loading = false;
            state.error = payload;
        },
        [getCategories.pending]: (state, {payload}) => {
            state.categories=null
            state.loading = true;

        }

    }
})
export const { cleanNewUser, cleanError } = categoriesSlice.actions
export default categoriesSlice.reducer