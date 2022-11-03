import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from 'axios';
import axios from '../../api/index'
// let user =  "";
// let token =  "";
let user = (localStorage.getItem("currentMejorOberaUser")&&localStorage.getItem("currentMejorOberaUser")!=="undefined")
  ? JSON.parse(localStorage.getItem("currentMejorOberaUser"))
  : "";
let token = (localStorage.getItem("token")&&localStorage.getItem("token")!=="undefined")
  ? JSON.parse(localStorage.getItem("token"))
  : "";



const initialState = {
    user: user || null,
    token: token || null,
    commerce:{},
    error:null,
    successAction:false,
    products:[],
    successDeleted:false
}



export const getCommerce = createAsyncThunk(
    'getCommerce',
    async ({commerceId}, {rejectWithValue})=>{
        
        try{
            // const commerce = await axios.get(`/commerce/${commerceId}`,{headers})
            const commerce = await axios.request("get", `/commerce/${commerceId}`)
            
            return commerce.data.data
        }catch(e){
            console.log(e)
            return rejectWithValue({message:e.response.data.error||e.message})
        }
    }
    )
export const editCommerce = createAsyncThunk(
    'editCommerce',
    async ({commerceId,update}, {rejectWithValue})=>{
        const data={update}
        try{
            const commerce = await axios.requestData("post",`/commerce/edit/${commerceId}`,data)
            console.log(commerce)
            return commerce.data.data
        }catch(e){
            console.log(e)
            return rejectWithValue({message:e.response.data.error||e.message})
        }
    }
    )
export const addProduct = createAsyncThunk(
    'addProduct',
    async ({formdata}, {rejectWithValue})=>{
        try{
            const commerce = await axios.requestData("post",`/products/create`,formdata)
            console.log(commerce)
            return commerce.data.data
        }catch(e){
            console.log(e)
            return rejectWithValue({message:e.response.data.error||e.message})
        }
    }
    )
export const uploadProfileImage = createAsyncThunk(
    'uploadProfileImage',
    async ({formdata}, {rejectWithValue})=>{
        try{
            const commerce = await axios.requestData("post",`/commerce/uploadImage`,formdata)
            return commerce.data.data
        }catch(e){
            console.log(e)
            return rejectWithValue({message:e.response.data.error||e.message})
        }
    }
    )
export const getProducts = createAsyncThunk(
    'getProducts',
    async({id},{rejectWithValue})=>{
        try{
            const products = await axios.request('get',`/products/all/${id}`)
            return products.data.data
        }catch(e){
            console.log(e)
            return rejectWithValue({message:e.response.data.error||e.message})
        }
    }
)
export const deleteProduct = createAsyncThunk(
    'deleteProduct',
    async({id},{rejectWithValue})=>{
        try{
            const products = await axios.request('post',`/products/delete/${id}`)
            return "ok"
        }catch(e){
            console.log(e)
            return rejectWithValue({message:e.response.data.error||e.message})
        }
    }
)
const userCommerceSlice = createSlice({
    name: 'userCommerce', 
    initialState: initialState,
    reducers:{
        cleanCommerce: (state)=>{
            state.newUser = null
        },
        cleanSuccess: (state)=>{
            state.successAction = false
        },
        cleanSuccessDeleted: (state)=>{
            state.successDeleted = false
        },
        cleanError: (state)=>{
            state.error = null
        }
    },
    extraReducers: {
        [getCommerce.fulfilled]: (state, {payload}) => {
            state.commerce = payload;
            state.loading = false;
        },
        [getCommerce.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },
        [getCommerce.pending]: (state, {payload}) => {
            state.commerce={}
            state.loading = true;
        },
        [getProducts.fulfilled]: (state, {payload}) => {
            state.products = payload;
            state.loading = false;
        },
        [getProducts.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },
        [getProducts.pending]: (state, {payload}) => {
            state.products={}
            state.loading = true;
        },

        [editCommerce.fulfilled]: (state, {payload}) => {
            state.successAction=true;
            state.commerce = payload;
            state.loading = false;
        },
        [editCommerce.rejected]: (state, {payload}) => {
            console.log(payload)
            state.loading = false;
            state.error = payload;
        },
        [editCommerce.pending]: (state, {payload}) => {
            state.commerce={}
            state.loading = true;

        },
        [uploadProfileImage.fulfilled]: (state, {payload}) => {
            state.successAction = true;
            state.loading = false;
        },
        [uploadProfileImage.rejected]: (state, {payload}) => {
            
            state.loading = false;
            state.error = payload;
        },
        [uploadProfileImage.pending]: (state, {payload}) => {
            
            state.loading = true;
        },
        [addProduct.fulfilled]: (state, {payload}) => {
            state.successAction = true;
            state.loading = false;
        },
        [addProduct.rejected]: (state, {payload}) => {
            
            state.loading = false;
            state.error = payload;
        },
        [addProduct.pending]: (state, {payload}) => {
            state.loading = true;
        },
        [deleteProduct.fulfilled]: (state, {payload}) => {
            state.successDeleted = true;
            state.loading = false;
        },
        [deleteProduct.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },
        [deleteProduct.pending]: (state, {payload}) => {
            state.loading = true;
        },

    }
})
export const { cleanNewUser, cleanError,cleanCommerce,cleanSuccess,cleanSuccessDeleted } = userCommerceSlice.actions
export default userCommerceSlice.reducer