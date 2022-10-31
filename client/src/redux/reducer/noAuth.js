import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from 'axios'
import axios from '../../api/index'

const initialState={
    commerces:[],
    categorizedCommerces:{},
    commerceDetail:{}
}

export const getCommerces = createAsyncThunk(
    'getCommerces',
    async (_, {rejectWithValue})=>{
        console.log("getting commerces")
        try{
            const commerces = await axios.request("get",`/no/commerce/all`)
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
        const commerce = await axios.request("get",`/no/commerce/category`)
        console.log(commerce)
        return commerce.data.data
    }catch(e){
        console.log(e)
        return rejectWithValue({message:e.response.data.error||e.message})
    }
}
)
export const getDetailCommerce = createAsyncThunk(
    'getDetailCommerce',
    async ({commerceId}, {rejectWithValue})=>{
        try{
            const commerce = await axios.request("get", `/no/commerce/${commerceId}`)
            
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
        },
        setCommerceDetail:{
            reducer:(state,action)=>{
                state.commerceDetail=action.payload
            },
            prepare:(info)=>{
                return{payload:info}
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
        [getDetailCommerce.fulfilled]: (state, {payload}) => {
            console.log(payload)
            state.commerceDetail = payload;
            state.loading = false;
        },
        [getDetailCommerce.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },
        [getDetailCommerce.pending]: (state, {payload}) => {
            state.commerceDetail={}
            state.loading = true;

        },
    }
})

export const {cleanCommerces,setCommerceDetail} = noAuthSlice.actions
export default noAuthSlice.reducer