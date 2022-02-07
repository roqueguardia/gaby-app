import React from 'react';

const ItemCount = () => {

    const [number, setNumber] = React.useState(0)

    return(
        <div>
            
            <h1>Cantidad de articulos {number}</h1>
            
            <button onClick={() => {
                    console.group('Click')
                    setNumber(number+1)
            }
                }>
                Incrementar
            </button>
        </div>
    )
}


export default ItemCount;