import React, { useState, useEffect } from 'react'
import { LEVELS } from '../../models/levels.enum';
import {Task} from "../../models/task.class";
import Taskform from '../pure/forms/taskForm';
import TaskComponent from '../pure/task';
const TaskListComponent= () => {

    //Creamos una lista de tareas para renderizar el contenido 
    const defaultTask1 = new Task('Example1','Default1',true,LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2','Default2',false,LEVELS.URGENT);
    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask1,defaultTask2])
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
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>
                            Your tasks:
                        </h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', heidht: '400px'}}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Cuando hacemos iteraciones es recomendable pasarle el key  */}
                                { tasks.map((task, index) => {
                                    return (                                  
                                            <TaskComponent 
                                                key={index} 
                                                task={task}
                                            >
                                            </TaskComponent>
                                        )
                                    }
                                )}
                            </tbody>
                        </table>
                    </div>
                    <Taskform></Taskform>
                </div>           
            </div>
        </div>
    );
    
};

export default TaskListComponent;

