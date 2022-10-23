import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

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
    loading: false,
    newUser: null,
    error: null
}
const headers = {
    'Authorization': `Bearer ${token}`,
}


export const login = createAsyncThunk(
    'login',
    async ({email,contraseña}, {rejectWithValue})=>{
        console.log("en la action")
        try{
            const data = {
                email,
                contraseña
            }
            const user = await axios.post(`/users/login`,data,headers)
            console.log(user)
            localStorage.setItem("currentMejorOberaUser", JSON.stringify(user.data.user))
            localStorage.setItem("token", JSON.stringify(user.data.token))
            return user.data
             
        }catch(e){
            console.log(e)
            return rejectWithValue({message:e.response.data.error||e.message})
        }
    }
    )
export const logout = createAsyncThunk(
    'logout',
    async ()=>{
        localStorage.removeItem("currentMejorOberaUser")
        localStorage.removeItem("token")
    }
)
export const register = createAsyncThunk(
    'register',
    async (data, {rejectWithValue})=>{
        
        try{
            
            const user = await axios.post(`/users/signup`,data)
            console.log(user.data)
            return user.data
            
        }catch(e){
            console.log(e)
            return rejectWithValue(e.response.data.error)
        }
    }
    )
const authSlice = createSlice({
    name: 'auth', 
    initialState: initialState,
    reducers:{
        cleanNewUser: (state)=>{
            state.newUser = null
        },
        cleanError: (state)=>{
            state.error = null
        }
    },
    extraReducers: {
        [login.fulfilled]: (state, {payload}) => {
            state.user = payload.user;
            state.token = payload.token;
            state.loading = false;
        },
        [login.rejected]: (state, {payload}) => {
            console.log(payload)
            state.loading = false;
            state.error = payload;
        },
        [login.pending]: (state, {payload}) => {
            state.user = null
            state.loading = true;

        },
        [register.fulfilled]: (state, {payload}) => {
            state.newUser = payload.user;
            state.loading = false;
        },
        [register.rejected]: (state, {payload}) => {
            state.error = payload;
            state.loading = false;
        },
        [register.pending]: (state, {payload}) => {
            state.loading = true;
        },
        [logout.fulfilled]: (state, {payload}) => {
            state.user = null;
            state.token = null;
            state.loading = false;
        },
        [logout.rejected]: (state, {payload}) => {
            state.loading = false;
        }
        

    }
})
export const { cleanNewUser, cleanError } = authSlice.actions
export default authSlice.reducer