import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {IconButton, TextField} from '@material-ui/core';
import {AddBox} from '@material-ui/icons';

type AddItemFormPropsType = {
    addItem: (title: string, phoneNumber: string) => void
    disabled?: boolean
}

export const AddItemForm = React.memo(function({addItem, disabled = false}: AddItemFormPropsType) {

    let [name, setName] = useState("")
    let [errorName, setErrorName] = useState<string | null>(null)

    let [phoneNumber, setPhoneNumber] = useState("")
    let [errorPhoneNumber, setErrorPhoneNumber] = useState<string | null>(null)

    const addItemHandler = () => {
        if (name.trim() === "" && phoneNumber.trim() !== "") {
            setErrorName("Title is required");
        } else if (name.trim() !== "" && phoneNumber.trim() === "") {
            setErrorPhoneNumber("Title is required");
        } else if (name.trim() === "" && phoneNumber.trim() === "") {
            setErrorName("Title is required");
            setErrorPhoneNumber("Title is required");
        } else {
            addItem(name, phoneNumber);
            setName("");
            setPhoneNumber("");
        }
    }

    const onChangeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    const onChangePhoneNumberHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (errorName !== null || errorPhoneNumber !== null) {
            setErrorName(null);
            setErrorPhoneNumber(null);
        }
        if (e.charCode === 13) {
            addItemHandler();
        }
    }

    return <div>
        ADD CONTACT:
        <TextField variant="outlined"
                   disabled={disabled}
                   error={!!errorName}
                   value={name}
                   onChange={onChangeNameHandler}
                   onKeyPress={onKeyPressHandler}
                   label="Name"
                   helperText={errorName}
                   size={"small"}
        />
        <TextField variant="outlined"
                   disabled={disabled}
                   error={!!errorPhoneNumber}
                   value={phoneNumber}
                   onChange={onChangePhoneNumberHandler}
                   onKeyPress={onKeyPressHandler}
                   label="Phone number"
                   helperText={errorPhoneNumber}
                   size={"small"}
        />
        <IconButton color="primary" onClick={addItemHandler} disabled={disabled}>
            <AddBox/>
        </IconButton>
    </div>
})
