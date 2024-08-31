import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import Reducers from '@/app/Reducer'



const store = configureStore({
    reducer:Reducers,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(thunk)
})


export type RootState=ReturnType<typeof store.getState>
export type AppDispatch =typeof store.dispatch
export default store