import React, {ChangeEvent, useState} from 'react'
import {FormControl, FormGroup, FormLabel, TextField, Button} from '@material-ui/core'
import style from './Login.module.css'
import {AppRootStateType, useAppDispatch} from "../../store/store";
import {setIsLoggedInAC} from "./login-reducer";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

export const Login: React.FC = () => {
    const dispatch = useAppDispatch()
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const loginHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin(e.currentTarget.value)
    }
    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }
    const loginClick = () => {
        dispatch(setIsLoggedInAC({value: true}))
    }


    if (isLoggedIn) {
        return <Navigate to={"/"}/>
    }
    return <form className={style.form_container}>
        <FormControl>
            <FormLabel>
                Login to personal account
            </FormLabel>
            <FormGroup>
                <TextField
                    label="Login"
                    margin="normal"
                    value={login}
                    onChange={loginHandler}
                />
                <TextField
                    type="password"
                    label="Password"
                    margin="normal"
                    value={password}
                    onChange={passwordHandler}
                />
                <Button type={'submit'} variant={'contained'} color={'primary'} onClick={loginClick}>Login</Button>
            </FormGroup>
        </FormControl>
    </form>
}
