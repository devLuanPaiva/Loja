import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { Link } from 'react-router-dom';
import "./Login.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { BsEnvelope } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import { Input } from "antd";
const firebaseApp = initializeApp({
    apiKey: "AIzaSyApY4WdJcpKQQU0SynUeN-yd7OWO1wUvNU",
    authDomain: "loja-69af0.firebaseapp.com",
    projectId: "loja-69af0",
});
const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [users, setUsers] = useState([])

    const db = getFirestore(firebaseApp)
    const userCollectionRef = collection(db, 'users')
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef)
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getUsers()
    }, [userCollectionRef, users]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const foundUser = users.find((user) => user.email === email && user.password === senha);
        if (foundUser) {
            console.log("Usuário encontrado!");
        } else {
            console.log("Usuário não encontrado!");
        }
    };
    return (
        <React.Fragment>
            <Header />
            <div id="paginaLogin">
                <div className="descricaoPagina">
                    <h2>Seja Bem Vindo!</h2>
                    <p>Para se manter conectado conosco, faça login com suas informações pessoais</p>
                </div>
                <div className="loginForm">
                    <form onSubmit={handleSubmit}>
                        <label>
                            <Input
                                addonBefore={<BsEnvelope />}
                                type="email"
                                name="emailUser"
                                id="emailUser"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                            />
                        </label>
                        <label>
                            <Input
                                addonBefore={<RiLockPasswordLine />}
                                type="password"
                                name="senhaUser"
                                id="senhaUser"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                placeholder="Senha"
                            />
                        </label>
                        <button type="submit">Entrar</button>
                    </form>
                    <div className="opcoesConexao">
                        <h4>Esqueceu a senha?</h4>
                        <h4 ><Link to="/cadastro" id="cad">Cadastre-se</Link></h4>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default Login;
