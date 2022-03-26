import React from 'react';

import logo from './logo.png'

class CartWidget extends React.Component{


    render(){
        return(
            <img src={logo} style={{maxWidth:100}} alt="estrella fugaz"/>
        );
    }
}

export default CartWidget;