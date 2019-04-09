import React from 'react';

require("./screen.css");

function LayoutAcademia({children}) {
    return (
        <React.Fragment>
            <div className="academia">
            <div className="circulo"/>
            <div className="livro">
            {children.map(child => {return child})}
            </div>
            </div>
        </React.Fragment>
    );
}

export default LayoutAcademia;