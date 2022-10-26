import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from 'axios';
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
    user: user || null,
    token: token || null,
    commerce:{},
    error:null,
    successAction:false
}
const headers = {
    'Authorization': `Bearer ${token}`,
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
export const uploadProfileImage = createAsyncThunk(
    'uploadProfileImage',
    async ({formdata,update}, {rejectWithValue})=>{
        try{
            const commerce = await axios.requestData("post",`/commerce/uploadImage`,formdata)
            return commerce.data.data
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
            state.success = false
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
        [editCommerce.fulfilled]: (state, {payload}) => {
            
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

    }
})
export const { cleanNewUser, cleanError } = userCommerceSlice.actions
export default userCommerceSlice.reducer