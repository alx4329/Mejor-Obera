import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from 'axios'
import axios from '../../api/index'

const initialState={
    commerces:[],
    categorizedCommerces:{},
    commerceDetail:{},
    offers:[],
    categorizedOffers:{},
    productsDetail:[]
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
export const getProducts = createAsyncThunk(
    'getProducts',
    async (_, {rejectWithValue})=>{
        try{
            const commerce = await axios.request("get", `/no/products/all`)
            
            return commerce.data.data
        }catch(e){
            console.log(e)
            return rejectWithValue({message:e.response.data.error||e.message})
        }
    }
    )
export const getProductsCommerce = createAsyncThunk(
    'getProductsCommerce',
    async ({id}, {rejectWithValue})=>{
        try{
            const commerce = await axios.request("get", `/no/products/commerce/${id}`)
            
            return commerce.data.data
        }catch(e){
            console.log(e)
            return rejectWithValue({message:e.response.data.error||e.message})
        }
    }
    )
    export const getCategorizedProducts = createAsyncThunk(
        'getCategorizedProducts',
        async (_, {rejectWithValue})=>{
            console.log("getting categorized products")
            
        try{
            const commerce = await axios.request("get",`/no/products`)
            
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
        [getProducts.fulfilled]: (state, {payload}) => {
            state.offers = payload;
            state.loading = false;
        },
        [getProducts.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },
        [getProducts.pending]: (state, {payload}) => {
            state.loading = true;
        },
        [getCategorizedProducts.fulfilled]: (state, {payload}) => {
            state.categorizedOffers = payload;
            state.loading = false;
        },
        [getCategorizedProducts.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },
        [getCategorizedProducts.pending]: (state, {payload}) => {
            state.loading = true;
        },
        [getProductsCommerce.fulfilled]: (state, {payload}) => {
            state.productsDetail = payload;
            state.loading = false;
        },
        [getProductsCommerce.rejected]: (state, {payload}) => {
            state.productsDetail = false;
            state.error = payload;
        },
        [getProductsCommerce.pending]: (state, {payload}) => {
            state.loading = true;
        },
    }
})

export const {cleanCommerces,setCommerceDetail} = noAuthSlice.actions
export default noAuthSlice.reducer