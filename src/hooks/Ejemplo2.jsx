/**
 * seSate*()
 * useRef() Para refenrenciar elementos dentro de la vista 
 * useE=fecct() Se usa para controlar los cambios en la vista 
 */
import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {
    // Creamos dos contadores con estados diferentes 
    const [contador1, setConctador1] = useState(0);
    const [contador2, setConctador2] = useState(0);
    //Vamos a crear una referencia para asociar la variables con un elemento del DOM
    const miRef = useRef();

    function incrementar1(){
        setConctador1(contador1+1);
    }
    function incrementar2(){
        setConctador2(contador2+1);
    }
    //Trabajando useEfet()
    /** CASO 1
     * Cada ves que haya un cambio de estado del componente 
     * se ejecuta aquello que este dentro del useEfect()
     */
    // useEffect(() => {
    //     console.log('Mostrando DOM');
    //     console.log(miRef);
    // });

    /** Caso 2
     * Solo puiede haber un useEfect
     * Cada vez que haya un cambio en el contador1 se ejecta log 
     */
    useEffect(() => {
        console.log('Mostrando DOM');
        console.log(miRef);
    },[contador1]);

    return (
        <div>
            <h1>Use State UseRef</h1>
            <h2>Contador1:{contador1} </h2>
            <h2>Contador2:{contador2} </h2>
            <h4 ref={miRef}>
                Ejemplo del ellemento referenciado 
            </h4>
            <div>
                <button onClick={incrementar1}>Contador 1</button>
                <button onClick={incrementar2}>Contador 2</button>
            </div>
        </div>
    );
  
}

export default Ejemplo2;
