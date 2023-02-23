/**Ejemplo para entender children */

import React from 'react';
// Filtra aquellos elemntos que recibe del padre 
const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>
                Nombre: { props.nombre }
            </h1>
            {/* Pinta en todo que esta entrelas etiquetas  */}
            { props.children}
        </div>
    );
}

export default Ejemplo4;
