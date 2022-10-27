import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState={
    commerces:[],
    categorizedCommerces:{}
}

export const getCommerces = createAsyncThunk(
    'getCommerces',
    async (_, {rejectWithValue})=>{
        console.log("getting commerces")
        try{
            const commerces = await axios.get(`/no/commerce/all`)
            
            return commerces.data.data
        }catch(e){
            console.log(e)
            return rejectWithValue({message:e.response.data.error||e.message})
        }
    }
    )
    export const getCategorizedCommerces = createAsyncThunk(
        'getCategorizedCommerces',
        async (_, {rejectWithValue})=>{
            console.log("getting categorized commerces")
            
        try{
            const commerce = await axios.get(`/no/commerce/category`)
            
            return commerce.data.data
        }catch(e){
            console.log(e)
            return rejectWithValue({message:e.response.data.error||e.message})
        }
    }
    )
const noAuthSlice = createSlice({
    name:"noAuth",
    initialState:initialState,
    reducers:{
        cleanCommerces:{
            cleanCommerce:(state)=>{
                state.commerces={}
            }
        }
    },
    extraReducers:{
        [getCommerces.fulfilled]:(state,{payload})=>{
            state.commerces = payload;
            state.loading = false;
        },
        [getCommerces.rejected]:(state,{payload})=>{
            state.commerces = payload;
            state.error = payload;
        },
        [getCommerces.pending]:(state,{payload})=>{
            state.commerces = []
            state.loading = true;
        },
        [getCategorizedCommerces.fulfilled]:(state,{payload})=>{
            state.categorizedCommerces = payload;
            state.loading = false;
        },
        [getCategorizedCommerces.rejected]:(state,{payload})=>{
            state.categorizedCommerces = payload;
            state.error = payload;
        },
        [getCategorizedCommerces.pending]:(state,{payload})=>{
            state.categorizedCommerces = {}
            state.loading = true;
        },
    }
})

export const {cleanCommerces} = noAuthSlice.actions
export default noAuthSlice.reducer