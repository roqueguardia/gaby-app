import React from 'react';
import CartWidget from './CartWidget.js'

class NavBar extends React.Component{


    render(){
        return(
            <div>
                <CartWidget />
                <ol>
                    <li>Iniciativas</li>
                    <li>Carrera académica</li>
                    <li>Vida Profesional</li>
                    <li>Conocimientos</li>
                </ol>
            </div>
        );
    }
}


export default NavBar;