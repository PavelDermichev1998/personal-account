import React, {useCallback} from 'react'
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "../../store/store";
import {Contact} from "./Contact/Contact";
import {AddItemForm} from "../AddItemForm/AddItemForm";
import {
    addContactAC,
    changeContactNameAC,
    changeContactPhoneNumberAC,
    ContactType,
    removeContactAC
} from "./profile-reducer";
import style from './Profile.module.css'


export const Profile: React.FC = () => {

    const dispatch = useAppDispatch()
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const contacts = useSelector<AppRootStateType, Array<ContactType>>(state => state.profile.contacts)

    const addContact = useCallback((title: string, phoneNumber: string) => {
        dispatch(addContactAC({title, phoneNumber}))
    }, [])

    const removeContact = useCallback(function (id: string) {
        dispatch(removeContactAC({id}))
    }, [])

    const changeContactName = useCallback(function (id: string, name: string) {
        dispatch(changeContactNameAC({id, name}))
    }, [])

    const changeContactPhoneNumber = useCallback(function (id: string, phoneNumber: string) {
        dispatch(changeContactPhoneNumberAC({id, phoneNumber}))
    }, [])

    if (!isLoggedIn) {
        return <Navigate to={"/login"}/>
    }
    return (
        <div className={style.profile_container}>
           <AddItemForm addItem={addContact}/>

            {contacts.map(cont => {
                return <Contact contact={cont}
                                key={cont.id}
                                changeContactName={changeContactName}
                                changeContactPhoneNumber={changeContactPhoneNumber}
                                removeContact={removeContact}
                />
            })}
        </div>
    )
}
