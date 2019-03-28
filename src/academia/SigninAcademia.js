import React from 'react';
import titulo from './gfx/title.png';
import LayoutAcademia from './LayoutAcademia';

function SigninAcademia() {
    return (
        <React.Fragment>
            <LayoutAcademia>
                <img id="title" src={titulo} alt="Titulo academia"/>
                <form action="?" method="get">
                    <div class="form">
                        <input type="email" name="email"/>
                        Email
                    </div>
                    <div class="form">
                        <input type="password" name="senha"/>
                        Senha
                    </div>
                    <div class="data">
                        Nascimento<input type="date" name="senha"/>
                    </div>
                    <input type="submit" class="botao" value="Confirmar"/>
                </form>
            </LayoutAcademia>
        </React.Fragment>
    );
}
  
export default SigninAcademia;