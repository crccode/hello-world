import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>your data</h1>
        {/* <TaskListComponent></TaskListComponent> */}
        <Ejemplo1></Ejemplo1>
      </header>
    </div>
  );
}

export default App;
