import React from 'react';
import './App.css';
import {Login} from "./components/Login/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";

export const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path={'/login'} element={<Login />} />
                    <Route path={'/'} element={<Profile />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}


