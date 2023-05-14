import React from "react"
import { Link } from 'react-router-dom';
import "./Header.css"
import Imagem from "./tenis.png"
import { IoPersonSharp, IoHeartSharp} from "react-icons/io5";
import { ImSearch } from "react-icons/im";
import { IoMdCart } from "react-icons/io";
const Header = () =>
    <React.Fragment>
        <header>
            <Link to="/">
                <div className="logo">
                    <img src={Imagem} alt="logo" />
                    <h1>TêniShop</h1>
                
                </div>
            </Link>
            <div className="buscar">
                <form>
                    <input type="text" id="pesquisa" placeholder="O que você está procurando?"/>
                    <div id="lupa"><ImSearch/></div>
                </form>
            </div>
            <nav className="dir">
                <Link to="/login"><IoPersonSharp/>Entrar</Link>
                <Link to="/login"><IoHeartSharp/>Lista de Desejos</Link>
                <Link to="/login"><IoMdCart/> Carrinho</Link>
            </nav>
        </header>
    </React.Fragment>

export default Header