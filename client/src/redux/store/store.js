import { configureStore} from '@reduxjs/toolkit'
import authSlice from "../reducer/authReducer.js";
import userCommerceSlice from '../reducer/commerceReducer'
import categoriesSlice from '../reducer/categoriesReducer'
import noAuthSlice from '../reducer/noAuth'
const store =configureStore({reducer:{
    auth:authSlice,
    userCommerce:userCommerceSlice,
    categories:categoriesSlice,
    noAuth:noAuthSlice
}});

export default store;