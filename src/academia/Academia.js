import React from 'react';
import titulo from './gfx/title.png';
import "./screen.css";

function Academia() {
    return (
        <React.Fragment>
            <div className="academia">
                <div className="circulo"/>
                <div className="livro">
                    <img id="title" src={titulo} alt="Titulo academia"/>
                    <a className="botaoHome" >Entrar</a>
                    <a className="botaoHome" href="academia/signin">Criar Conta</a>
                </div>
            </div>
        </React.Fragment>
    );
}
  
export default Academia;