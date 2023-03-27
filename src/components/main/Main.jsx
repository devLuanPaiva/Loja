import React, { useState } from "react"
import "./Main.css"
import Im1 from "./imagem1.png"
import Im2 from "./imagem2.png"
import Im3 from "./imagem3.png"
import Im4 from "./imagem5.png"
import CalcularCep from "../api-correios/Cep"
import { BsHeart } from "react-icons/bs";
import { FaTruckMoving } from "react-icons/fa";

const Main = () => {
    const [zoom, setZoom] = useState(false);
    const [backgroundPosition, setBackgroundPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (zoom) {
            const { left, top, width, height } = e.target.getBoundingClientRect();
            const x = ((e.pageX - left) / width) * 100;
            const y = ((e.pageY - top) / height) * 100;
            setBackgroundPosition({ x, y });
        }
        
    };
    const[imagem, setImagem] = useState(Im1)
    const trocarImagem = (im) =>{
        setImagem(im)
    }
    return (
        <React.Fragment>
            <main>
                <section className="apreProduto">
                    <div
                        className="imgPrincipal"
                        onMouseEnter={() => setZoom(true)}
                        onMouseLeave={() => setZoom(false)}
                        onMouseMove={handleMouseMove}
                        style={{
                            backgroundImage: `url(${imagem})`,
                            backgroundPosition: `${backgroundPosition.x}% ${backgroundPosition.y}%`,
                            backgroundSize: zoom ? "150%" : "cover",
                            transition: "background-position 0.3s ease-out, background-size 0.3s ease-out",
                        }}
                    ></div>
                    <div className="imgsPequenas">
                        <img src={Im1} alt="secundarias" onClick={() => trocarImagem(Im1)}/>
                        <img src={Im2} alt="secundarias" onClick={() => trocarImagem(Im2)}/>
                        <img src={Im3} alt="secundarias" onClick={() => trocarImagem(Im3)}/>
                        <img src={Im4} alt="secundarias" onClick={() => trocarImagem(Im4)}/>
                       
                    </div>
                </section>
                <section className="informacoes">
                    <h1>Tênis Nike Downshifter 12 Masculino - Preto+Grafite</h1>
                    <div className="precos">
                        <h3 id="frete"><FaTruckMoving/>Frete Grátis</h3>
                        <span><s>R$389,99</s></span>
                        <h2>R$284,99 no Pix</h2>
                        <h3>Ou R$299,99 em até 10x sem juros</h3>
                    </div>
                    <h3 id="tamanhos">Tamanhos</h3>
                    <div className="tamanhos">
                        <div className="numero">35</div>
                        <div className="numero">36</div>
                        <div className="numero naoTem">37</div>
                        <div className="numero naoTem">38</div>
                        <div className="numero">39</div>
                        <div className="numero naoTem">40</div>
                        <div className="numero">41</div>
                        <div className="numero">42</div>
                    </div>
                    <CalcularCep/>
                    <div className="comprar">
                        <div><button id="comprar">Comprar</button></div>
                        <div><button id="favoritar"><BsHeart/></button></div>
                    </div>
                </section>

            </main>
        </React.Fragment>
    )
}
export default Main