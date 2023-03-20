import React, { useState } from "react";
import axios from 'axios';
import "./Cep.css"

const CalcularCep = () => {
    const [destinoCep, setDestinoCep] = useState('');
    const [prazoEntrega, setPrazoEntrega] = useState('');
    const [localidade, setLocalidade] = useState('');
    const [uf, setUF] = useState('');
    const [erro, setErro] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${destinoCep}/json/`);
            if(response.data.erro !== true){

                setLocalidade(response.data.localidade);
                setUF(response.data.uf);
    
                // aqui estamos simulando um prazo de entrega aleatório
                const prazoEntregaAleatorio = Math.floor(Math.random() * 10) + 1;
    
                setPrazoEntrega(prazoEntregaAleatorio);
                setErro('')
            }else{
                setErro('CEP inválido!')
                setLocalidade('');
                setUF('');
                setPrazoEntrega('');
            }

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className="calcula">
                <form onSubmit={handleSubmit}>
                    <h4>Consulte o prazo de entrega</h4>
                    <label>
                        <input type="text" value={destinoCep} onChange={e => setDestinoCep(e.target.value)} placeholder="Insira o CEP"/>
                    </label>
                    <button type="submit">Consultar</button>
                </form>
                {erro && <div className="erro">{erro}</div>}
                {localidade && <div>Localidade: {localidade}/{uf}</div>}
                {prazoEntrega && <div>Prazo de entrega: {prazoEntrega} dias úteis</div>}
            </div>
        </>
    );
};

export default CalcularCep;
