import { configureStore } from "@reduxjs/toolkit";
import  userSlicer  from "./slices/userSlicer.js"
import rootReducer from "./rootReducer.js"

const store = configureStore({
    reducer: rootReducer,
})  

export default store;