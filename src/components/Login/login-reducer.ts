import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const slice = createSlice({
    name: 'login',
    initialState: {
        isLoggedIn: false
    },
    reducers: {
        setIsLoggedInAC(state, action: PayloadAction<{ value: boolean }>) {
            state.isLoggedIn = action.payload.value;
        }
    }
})

export const loginReducer = slice.reducer
export const {setIsLoggedInAC} = slice.actions

