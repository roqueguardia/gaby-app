import React from 'react';

class ItemListContainer extends React.Component{

    render(){
        return(
            <p>¡Hola {this.props.nombre}! Empecemos...</p>
        );
    }
}

export default ItemListContainer;