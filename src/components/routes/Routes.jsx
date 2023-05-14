import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../home/Home"
import Cadastro from "../login/Cadastro";
import Login from "../login/Login";
export const Routas = props => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='*' element={<Home />} />
        </Routes>
    )
}
export default Routas