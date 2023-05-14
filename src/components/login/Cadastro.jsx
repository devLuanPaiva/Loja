import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import "./Cadastro.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyApY4WdJcpKQQU0SynUeN-yd7OWO1wUvNU",
    authDomain: "loja-69af0.firebaseapp.com",
    projectId: "loja-69af0",
});
const Cadastro = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [contato, setContato] = useState("");
    const [users, setUsers] = useState([])

    const db = getFirestore(firebaseApp)
    const userCollectionRef = collection(db, 'users')
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef)
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
        }
        getUsers()
    }, [userCollectionRef, users]);

    async function cadastrarUsuario(){
        const user = await addDoc(userCollectionRef, {contato, email, name, password})
        console.log(user)
        limparCampos();
    }
    function limparCampos() {
        setEmail("");
        setPassword("");
        setName("");
        setContato("");
    }

    return (
        <div>
            <Header />
            <div className="login-container">
                <h1>Cadastro</h1>
                <form>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Contato"
                        value={contato}
                        onChange={(e) => setContato(e.target.value)}
                    />
                    <button onClick={cadastrarUsuario}>Cadastrar</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Cadastro;
