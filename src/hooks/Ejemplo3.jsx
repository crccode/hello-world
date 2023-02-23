/**
 * Ejemplo Hooks
 * useState()
 * useContext()
 */

import React, {useState, useContext} from 'react';



const miContexto = React.createContext(null)
const Componente1= () => {
    const state = useContext(miContexto)
    return (
        <div>
            <h1>
                El token es: {state.token}
                <Componente2></Componente2>
            </h1>
        </div>
    );
}

const Componente2= () => {
    const state = useContext(miContexto)
    return (
        <div>
            <h2>
                La secion es: {state.sesion}
            </h2>
        </div>
    );
}

export default function MiComponenteConContexto(){
    const estadoInicial = {
        token: '1234567',
        sesion: 1 
    }
    // Creams el estado de este componente 
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSessionData(
            {
                token: '12abc',
                sesion: sessionData.sesion + 1 
            }
        );
    }

    return (
        <miContexto.Provider value= {sessionData}>
         {/* Todo lo que esta aqui dentro puede leer los datos de sesionData  */}
            <h1>Ejemplo use context</h1>
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>Actualizar Sesion</button>
        </miContexto.Provider>
    )

}