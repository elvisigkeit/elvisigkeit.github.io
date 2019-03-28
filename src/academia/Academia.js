import React from 'react';
import titulo from './gfx/title.png';
import { Link } from 'react-router-dom';
import LayoutAcademia from './LayoutAcademia';

const Academia = () => {
    return (
        <React.Fragment>
            <LayoutAcademia>
                <img id="title" src={titulo} alt="Titulo academia"/>
                <a className="botaoHome" >Entrar</a>
                <Link className="botaoHome" to="/academia/signin">Criar Conta</Link>
            </LayoutAcademia>
        </React.Fragment>
    );
}
  
export default Academia;