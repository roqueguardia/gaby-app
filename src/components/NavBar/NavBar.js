import React from 'react';
import CartWidget from '../CartWidget.js'
import './navBar.css'

const NavBar = () => {
        return(
            <div className='divPrincipal' style={{backgroundColor: 'black'}}>
                
                <ol>
                <a href='google.com' target='_blank'><CartWidget /></a>
                    <a href='google.com' target='_blank'>Intereses</a>
                    <a href='google.com' target='_blank'>Carrera académica</a>
                    <a href='google.com' target='_blank'>Carrera profesional</a>
                    <a href='google.com' target='_blank'>Conocimientos</a>
                </ol>
            </div>
        );
    };


export default NavBar;