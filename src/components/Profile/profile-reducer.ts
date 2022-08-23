import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { v1 } from 'uuid';

export type ContactType = {
    name: string,
    phoneNumber: string,
    id: string
}

const slice = createSlice({
    name: 'profile',
    initialState: {
        contacts: [
            {name: 'Pasha', phoneNumber: '+375331233212', id: '1'},
            {name: 'Dima', phoneNumber: '+375335554431', id: '2'}
        ] as Array<ContactType>
    },
    reducers: {
        addContactAC(state, action: PayloadAction<{ title: string, phoneNumber: string }>) {
            state.contacts.unshift({name: action.payload.title, phoneNumber: action.payload.phoneNumber,id: v1()})
        },
        removeContactAC(state, action: PayloadAction<{ id: string }>) {
           state.contacts = state.contacts.filter(c => c.id !== action.payload.id)
        },
        changeContactNameAC(state, action: PayloadAction<{ id: string, name: string}>) {
            const index = state.contacts.findIndex(c => c.id === action.payload.id)
            if (index > -1) {
                state.contacts[index] = {...state.contacts[index], name: action.payload.name}
            }
        },
        changeContactPhoneNumberAC(state, action: PayloadAction<{ id: string, phoneNumber: string }>) {
            const index = state.contacts.findIndex(c => c.id === action.payload.id)
            if (index > -1) {
                state.contacts[index] = {...state.contacts[index], phoneNumber: action.payload.phoneNumber}
            }
        }
    }
})

export const profileReducer = slice.reducer
export const {addContactAC, removeContactAC, changeContactNameAC, changeContactPhoneNumberAC} = slice.actions

