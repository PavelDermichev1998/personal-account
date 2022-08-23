import React, {useCallback} from 'react'
import {ContactType} from "../profile-reducer";
import {IconButton} from "@material-ui/core";
import {Delete} from '@material-ui/icons'
import {EditableSpan} from "../../EditableSpan/EditableSpan";


export const Contact = ({contact, changeContactName, changeContactPhoneNumber, removeContact}: ContactPropsType) => {

    const changeContactNameHandler = useCallback((name: string) => {
        changeContactName(contact.id, name)
    }, [contact.id, changeContactName])

    const changeContactPhoneNumberHandler = useCallback((phoneNumber: string) => {
        changeContactPhoneNumber(contact.id, phoneNumber)
    }, [contact.id, changeContactName])

    const removeContactHandler = useCallback(() => removeContact(contact.id),
        [contact.id]);


    return (
        <div>
            <EditableSpan value={contact.name} onChange={changeContactNameHandler}/>:
            <EditableSpan value={contact.phoneNumber} onChange={changeContactPhoneNumberHandler}/>
            <IconButton onClick={removeContactHandler}>
                <Delete/>
            </IconButton>
        </div>
    )
}

type ContactPropsType = {
    contact: ContactType,
    changeContactName: (id: string, name: string) => void,
    changeContactPhoneNumber: (id: string, phoneNumber: string) => void
    removeContact: (id: string) => void
}