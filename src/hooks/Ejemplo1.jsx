/**
 * Crear un componente de tiop fucnioN y acceder a su estado 
 * a traves de un hook y modificarlo
 */
import React, {useState} from 'react';

const Ejemplo1 = () => {
    //Valor inicial 
    const valorInicial = 0;
    const personaInicial = {
        nombre : 'Martin',
        email: '@gmail.com'
    };
    // Queremnos que si esto se cambia se replique en los componentes HTML
    // const [nombreVariable, FuncionParaCambiar]= useState(valorInicial)
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);
    /**
     * Funcion para actualizar el estado privado del contador y de la persona
     */
    function incrementtarContador(){
        setContador(contador+1)
    } 
    function actualizarPersona(){
        setPersona(
            {
                nombre: 'Jose',
                email: '@syrop.com'
            }   
        )
    }

    return (
        <div>
            <h1>Ejemplo useState</h1>
            <h2>Contador: {contador}</h2>
            <h2>Datos de persona</h2>
            <h3> Nombre: {persona.nombre}</h3>
            <h3> Email: {persona.email}</h3>

            <button onClick={incrementtarContador}>Contador</button>
            <button onClick={actualizarPersona}>Persona</button>
        </div>
    );
}

export default Ejemplo1;
