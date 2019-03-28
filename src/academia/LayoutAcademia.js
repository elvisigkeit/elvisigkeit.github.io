import React from 'react';

import "./screen.css";

function LayoutAcademia({children}) {
    return (
        <div>
            <div className="academia">
            <div className="circulo"/>
            <div className="livro">
            {children.map(child => {return child})}
            </div>
            </div>
        </div>
    );
}

export default LayoutAcademia;