import thunkMiddleware from 'redux-thunk'
import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import {useDispatch} from "react-redux";
import {loginReducer} from "../components/Login/login-reducer";
import {profileReducer} from "../components/Profile/profile-reducer";

const rootReducer = combineReducers({
    auth: loginReducer,
    profile: profileReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware)
})

export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store;

type AppDispatchType = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatchType>()