import React, { useState, useEffect } from 'react'
import { LEVELS } from '../../models/levels.enum';
import {Task} from "../../models/task.class";
import TaskComponent from '../pure/task';
const TaskListComponent= () => {

    //Creamos una lista de tareas para renderizar el contenido 
    const defaultTask = new Task('Example','Default',false,LEVELS.NORMAL);
    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask])
    //Este componente para cargar las tareas atraves de http, por defecto true siempre carga 
    const [loading, setLoading] = useState(true)

    // Control del ciclo de vida del componente
    //  Al go se ejecuta casda ves que haya una modificacion de la tareas
     useEffect(() => {
        console.log('Task State has been modified');
        // Termina de cargar los datos y cambia su estado a false 
        setLoading(false)
        // setTimeout(() => {
        //     setLoading(false);
        // }, 2000);
        return () => {
            console.log('TaskList component is going to unmount...')
        }
    }, [tasks])


    const changeCompleted = (id) => {
        console.log('Cambiar el estado de la tarea');
    }
    return (
        <div>
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
      );
    
};


 
export default TaskListComponent;

