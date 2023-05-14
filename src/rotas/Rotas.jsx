import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home"
import Cadastro from "../components/login/Cadastro";
import Login from "../components/login/Login";
export const Rotas = props => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='*' element={<Home />} />
        </Routes>
    )
}
export default Rotas