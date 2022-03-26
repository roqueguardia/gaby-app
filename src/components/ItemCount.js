import React, {useState} from 'react';

const ItemCount = ({stock}) => {

    const [number, setNumber] = useState(0)

// MÉTODOS
    const Sumador = () => {
        if(number<stock){
        setNumber(number + 1 );
        }else{
            alert('stock limitado');
        }
    }

    const Restador = () => {
        if(number>0){
        setNumber(number - 1 );
        }else{
            number=0;
        }
    }

// JSX
    return(
        <div>
            
            <h1>Cantidad de articulos {number}</h1>
            
            <button onClick={Sumador}>
                +
            </button>

            <button onClick={Restador}>
                -
            </button>
        </div>
    )
}


export default ItemCount;