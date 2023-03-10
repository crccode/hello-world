import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import Greetingstyled from './components/pure/greetingStyled';
import Father from './components/container/father';
import Registerformik from './components/pure/forms/registerFormik';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>your data</h1> */}
        <TaskListComponent></TaskListComponent>
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <Ejemplo4 nombre='Marti c' >
            <h2>
              Todo es tradato  props.children
            </h2>
        </Ejemplo4>
        <Greetingstyled name="Marta"></Greetingstyled> */}
        {/* Gestion eventoa */}
        {/* <Father></Father> */}
        <Registerformik></Registerformik>
      </header>
    </div>
  );
}

export default App;
